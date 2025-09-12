import Navbar from "@/components/Navbar";
import ProductDetailsComponent from "@/components/ProductDetailsComponent";

const ProductDetailsPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/product/${p.id}`);
  const productData = await res.json();

    // console.log("single data", productData ,p);

  return (
    <div>
      <Navbar />
      product detils
      <ProductDetailsComponent productData={productData}/>
    </div>
  );
};

export default ProductDetailsPage;
