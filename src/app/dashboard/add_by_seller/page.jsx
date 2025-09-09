"use client";
import { useState } from "react";

export default function AddProduct() {
  const imgbbApiKey = "1b9dc072b95ad90044546f449af37a13";
  const [files, setFiles] = useState([]);
  console.log(files);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
    description: "",
    stock: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleFileChange = (e, index) => {
    const updatedFiles = [...files];
    updatedFiles[index] = e.target.files[0];
    setFiles(updatedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      alert("Please select at least one image!");
      return;
    }
try {
      // 🔥 সব ফাইল upload করতে Promise.all ব্যবহার করুন
      const uploadPromises = files
        .filter(Boolean) // null বাদ দিন
        .map(async (file) => {
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
          if (!data.success) throw new Error(data.error?.message || "Upload failed");
          return data.data.url;
        });

      // সব upload শেষ হলে URLs array পাবেন
      const imageUrls = await Promise.all(uploadPromises);

      // final product data তৈরি করুন
      const finalData = {
        ...formData,
        images: imageUrls,
      };

      console.log("✅ Final Product Data:", finalData);

      // এখন finalData আপনার backend এ পাঠাতে পারেন
      // await fetch("/api/products", { method: "POST", body: JSON.stringify(finalData) })

      alert("✅ Product added successfully!");
    } catch (error) {
      console.error("❌ Image Upload Failed:", error);
      alert("Image upload failed!");
    }
  };

  return (
    <section className="flex justify-center items-center py-10  min-h-screen">
      <form
        onSubmit={handleSubmit}
        className=" rounded-2xl p-8 w-full max-w-4xl"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🚀 Add New Product
        </h2>
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
                    src="/upload_area.png"
                    alt="upload placeholder"
                    className="w-24 h-24 object-cover rounded-lg border"
                  />
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>
          {/* Price */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Offer Price ($)
            </label>
            <input
              type="number"
              name="offerPrice"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            >
              <option value="">Select category</option>
              <option value="phone">Phone</option>
              <option value="laptop">Laptop</option>
              <option value="bluetooth">Bluetooth</option>
              <option value="gaming">Gaming Device</option>
              <option value="watch">Watch</option>
              <option value="camera">Camera</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Brand */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Enter brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>

          {/* Stock Quantity */}
          <div>
            <label className="block text-gray-600 font-medium mb-2">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Enter stock quantity"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
          </div>
        </div>

        {/* Description - Full Width */}
        <div className="mt-6">
          <label className="block text-gray-600 font-medium mb-2">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Write product details..."
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-400 outline-none"
            required
          />
        </div>

        {/* Submit */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-200"
          >
            ➕ Add Product
          </button>
        </div>
      </form>
    </section>
  );
}
