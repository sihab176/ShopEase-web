// "use client"
// import { useState } from "react";

// const editProduct = async ({ params }) => {
//   const p = await params;
//   const res = await fetch(`https://shop-ease-six-xi.vercel.app/api/product/${p.id}`);
//   const productData = await res.json();
// //   console.log(productData);

//   const imgbbApiKey = "1b9dc072b95ad90044546f449af37a13";
//   const [files, setFiles] = useState([]);
//   // console.log(files);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     offerPrice: "",
//     category: "",
//     brand: "",
//     description: "",
//     stock: "",
//     image: [],
//     seller_email: "shariyar2739@gmail.com",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };
//   const handleFileChange = (e, index) => {
//     const updatedFiles = [...files];
//     updatedFiles[index] = e.target.files[0];
//     setFiles(updatedFiles);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (files.length === 0) {
//       alert("Please select at least one image!");
//       return;
//     }
//     try {
//       // 🔥 সব ফাইল upload করতে Promise.all ব্যবহার করুন
//       const uploadPromises = files
//         .filter(Boolean) // null বাদ দিন
//         .map(async (file) => {
//           const form = new FormData();
//           form.append("image", file);

//           const res = await fetch(
//             `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
//             {
//               method: "POST",
//               body: form,
//             }
//           );
//           const data = await res.json();
//           if (!data.success)
//             throw new Error(data.error?.message || "Upload failed");
//           return data.data.url;
//         });

//       // সব upload শেষ হলে URLs array পাবেন
//       const imageUrls = await Promise.all(uploadPromises);

//       // final product data তৈরি করুন
//       const finalData = {
//         ...formData,
//         image: imageUrls,
//       };

//       // console.log("✅ Final Product Data:", finalData);
//       const result = await fetch("https://shop-ease-six-xi.vercel.app/api/product", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(finalData),
//       });

//       alert("✅ Product added successfully!");
//     } catch (error) {
//       console.error("❌ Image Upload Failed:", error);
//       alert("Image upload failed!");
//     }
//   };

//   return (
//     <div>
//       this is edit product page
//       <section className="flex justify-center items-center   min-h-screen bg-white p-4">
//         <form onSubmit={handleSubmit} className=" rounded-2xl  w-full ">
//           <div>
//             <p className="text-base font-medium">Product Image</p>
//             <div className="flex flex-wrap items-center gap-3 mt-2">
//               {[...Array(4)].map((_, index) => (
//                 <label
//                   key={index}
//                   htmlFor={`image${index}`}
//                   className="cursor-pointer"
//                 >
//                   <input
//                     type="file"
//                     id={`image${index}`}
//                     hidden
//                     onChange={(e) => handleFileChange(e, index)}
//                   />

//                   {files[index] ? (
//                     <img
//                       src={URL.createObjectURL(files[index])}
//                       alt="upload preview"
//                       className="w-24 h-24 object-cover rounded-lg border"
//                     />
//                   ) : (
//                     <img
//                       src="/upload_area.png"
//                       alt="upload placeholder"
//                       className="w-24 h-24 object-cover rounded-lg border"
//                     />
//                   )}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Grid Layout */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
//             {/* Product Name */}
//             <div>
//               <label className="block text-gray-600 font-medium mb-2">
//                 Product Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Enter product name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300  px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
//                 required
//               />
//             </div>

//             {/* Price */}
//             <div>
//               <label className="block text-gray-600 font-medium mb-2">
//                 Price ($)
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 placeholder="Enter price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300  px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
//                 required
//               />
//             </div>
//             {/* Price */}
//             <div>
//               <label className="block text-gray-600 font-medium mb-2">
//                 Offer Price ($)
//               </label>
//               <input
//                 type="number"
//                 name="offerPrice"
//                 placeholder="Enter price"
//                 value={formData.offerPrice}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300  px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
//                 required
//               />
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block text-gray-600 font-medium mb-2">
//                 Category
//               </label>
//               <select
//                 name="category"
//                 value={formData.category}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300  px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
//                 required
//               >
//                 <option value="">Select category</option>
//                 <option value="phone">Phone</option>
//                 <option value="laptop">Laptop</option>
//                 <option value="bluetooth">Bluetooth</option>
//                 <option value="gaming">Gaming Device</option>
//                 <option value="watch">Watch</option>
//                 <option value="headPhone">Head Phone</option>
//                 <option value="camera">Camera</option>
//                 <option value="shoes">Shoes</option>
//                 <option value="jeans">Jeans</option>
//                 <option value="Tshirts">Tshirts</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             {/* Brand */}
//             <div>
//               <label className="block text-gray-600 font-medium mb-2">
//                 Brand
//               </label>
//               <input
//                 type="text"
//                 name="brand"
//                 placeholder="Enter brand"
//                 value={formData.brand}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300  px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
//                 required
//               />
//             </div>

//             {/* Stock Quantity */}
//             <div>
//               <label className="block text-gray-600 font-medium mb-2">
//                 Stock Quantity
//               </label>
//               <input
//                 type="number"
//                 name="stock"
//                 placeholder="Enter stock quantity"
//                 value={formData.stock}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300  px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Description - Full Width */}
//           <div className="mt-6">
//             <label className="block text-gray-600 font-medium mb-2">
//               Description
//             </label>
//             <textarea
//               name="description"
//               placeholder="Write product details..."
//               value={formData.description}
//               onChange={handleChange}
//               rows="4"
//               className="w-full border border-gray-300  px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
//               required
//             />
//           </div>

//           {/* Submit */}
//           <div className="mt-8">
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-[#006661] from-10% via-[#007a74] via-30% to-[#00a39b] to-90% hover:bg-[#d1965b] text-white font-semibold py-3  shadow-lg transition duration-200"
//             >
//               ➕ update product
//             </button>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default editProduct;

"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";

const EditProduct = () => {
  const { id } = useParams();
  const imgbbApiKey = "1b9dc072b95ad90044546f449af37a13";

  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    offerPrice: "",
    category: "",
    brand: "",
    description: "",
    stock: "",
    image: [],
    seller_email: "shariyar2739@gmail.com",
  });

  // !✅ 1. আগের Product data --------------------------->
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://shop-ease-six-xi.vercel.app/api/product/${id}`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setFormData(data);
      } catch (err) {
        console.error("Failed to load product:", err);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  // !✅ Input Change Handler------------------------------>
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // !✅ handle change file---------------------------------->
  const handleFileChange = (e, index) => {
    const updatedFiles = [...files];
    updatedFiles[index] = e.target.files[0];
    setFiles(updatedFiles);
  };

  //! ✅ Submit Handler for Update-------------------------->
  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrls = formData.image;

    // যদি নতুন ছবি select করে, তাহলে সেগুলো upload করবো
    if (files.length > 0) {
      try {
        const uploadPromises = files.filter(Boolean).map(async (file) => {
          const form = new FormData();
          form.append("image", file);

          const res = await fetch(
            `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
            {
              method: "POST",
              body: form,
            }
          );

          const data = await res.json();
          if (!data.success) throw new Error("Image upload failed");
          return data.data.url;
        });

        const uploadedUrls = await Promise.all(uploadPromises);
        imageUrls = uploadedUrls;
      } catch (error) {
        console.error("Image upload failed:", error);
        Swal.fire("Error", "Image upload failed!", "error");
        return;
      }
    }

    // ✅ Update API call (PUT)
    const updatedProduct = { ...formData, image: imageUrls };

    console.log("updated product ====>", updatedProduct);

    try {
      const res = await fetch(
        `https://shop-ease-six-xi.vercel.app/api/product/productManager/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (res.ok) {
        Swal.fire("Updated!", "Product updated successfully.", "success");
      } else {
        Swal.fire("Error!", "Failed to update product.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div>
      <section className="flex justify-center items-center min-h-screen bg-white p-4">
        <form onSubmit={handleSubmit} className="rounded-2xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Edit Product</h2>

          {/* Image Upload */}
          <div>
            <p className="text-base font-medium">Product Image</p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              {[...Array(4)].map((_, index) => (
                <label
                  key={index}
                  htmlFor={`image${index}`}
                  className="cursor-pointer"
                >
                  <input
                    type="file"
                    id={`image${index}`}
                    hidden
                    onChange={(e) => handleFileChange(e, index)}
                  />

                  {files[index] ? (
                    <img
                      src={URL.createObjectURL(files[index])}
                      alt="upload preview"
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                  ) : (
                    <img
                      src={formData.image[index] || "/upload_area.png"}
                      alt="upload placeholder"
                      className="w-24 h-24 object-cover rounded-lg border"
                    />
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Offer Price ($)
              </label>
              <input
                type="number"
                name="offerPrice"
                value={formData.offerPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
              >
                <option value="">Select category</option>
                <option value="phone">Phone</option>
                <option value="laptop">Laptop</option>
                <option value="watch">Watch</option>
                <option value="camera">Camera</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Stock
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-600 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#d4a373] outline-none"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#ba181b] via-[#f95738] to-[#ee6c4d] text-white font-semibold py-3 rounded-md shadow-md"
            >
              ✏️ Update Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditProduct;
