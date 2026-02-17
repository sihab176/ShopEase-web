import AnimationNavbar from "@/components/AnimationNavbar";
import Navbar from "@/components/Navbar";
import ProductDetailsComponent from "@/components/ProductDetailsComponent";

const ProductDetailsPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(
    `https://shop-ease-six-xi.vercel.app/api/product/${p.id}`
  );
  const productData = await res.json();

  // console.log("single data", productData ,p);

  return (
    <div>
      {/* <Navbar /> */}
      <AnimationNavbar/>
      <ProductDetailsComponent productData={productData} />
    </div>
  );
};

export default ProductDetailsPage;
