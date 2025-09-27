import dbConnect from "../../../../../lib/mongbd";
import Product from "../../../../../models/Products";


export async function GET(req) {
  await dbConnect();
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const brand = searchParams.get("brand") || "";
    const sort = searchParams.get("sort") || "latest";
    const maxPrice = searchParams.get("maxPrice") || "";
    // pagination ----------------------------------->
    const page = parseInt(searchParams.get("page")) || 1; // কোন পেইজ
    const limit = parseInt(searchParams.get("limit")) || 8; // প্রতি পেইজে কয়টা প্রোডাক্ট
    const skip = (page - 1) * limit; // কতগুলো স্কিপ করবে


    // Base query------------------------------------>
    let query = {};

    if (search) {
      query.$or =[
         {name :{ $regex: search, $options: "i" }},
         { category: { $regex: search, $options: "i" } },

      ] 
    }

    if (category) {
      query.category = category;
    }

    if (brand) {
      query.brand = brand;
    }

    if (maxPrice) {
      query.offerPrice
        ? (query.offerPrice = { $lte: maxPrice })
        : (query.price = { $lte: maxPrice });
    }

    // Sorting
    let sortOption = {};
    if (sort === "latest") {
      sortOption = { createdAt: -1 };
    } else if (sort === "low-to-high") {
      sortOption = { offerPrice: 1 };
    } else if (sort === "high-to-low") {
      sortOption = { offerPrice: -1 };
    } else if (sort === "popular") {
      sortOption = { stock: -1 }; // ধরলাম বেশি stock = popular
    }
      // ✅ total products গণনা
    const totalProducts = await Product.countDocuments(query);

    const products = await Product.find(query).sort(sortOption).skip(skip).limit(limit)

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}
