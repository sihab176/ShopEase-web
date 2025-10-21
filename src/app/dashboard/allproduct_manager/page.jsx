"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";

const productManager = () => {
  const [allProduct, SetAllProduct] = useState([]);
  const router = useRouter();

  // fetch the all data  and show ======================================>
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3000/api/product/productManager`,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      SetAllProduct(data);
    };
    fetchData();
  }, []);
  // console.log("all Product =========", allProduct);

  const handleDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            // ✅ Step 1: Delete request পাঠানো
            const res = await fetch(
              `http://localhost:3000/api/product/productManager/${id}`,
              {
                method: "DELETE",
              }
            );

            // ✅ Step 2: Response চেক করা
            if (res.ok) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Product has been deleted successfully.",
                icon: "success",
              });

              // ✅ Step 3: Optional — UI থেকে product remove করা (যদি local state থাকে)
              SetAllProduct(allProduct.filter((item) => item._id !== id));
            } else {
              swalWithBootstrapButtons.fire({
                title: "Error!",
                text: "Failed to delete the product.",
                icon: "error",
              });
            }
          } catch (error) {
            console.error("Delete Error:", error);
            swalWithBootstrapButtons.fire({
              title: "Error!",
              text: "Something went wrong while deleting.",
              icon: "error",
            });
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your product is safe :)",
            icon: "error",
          });
        }
      });
  };

  // handle edit 
  const handleEdit =(id)=>{
    router.push(`/dashboard/editProduct/${id}`)
  }

  return (
    <section>
      <div
        className="container p-2 mx-auto sm:p-4 dark:text-gray-800"
        bis_skin_checked="1"
      >
        <div className="overflow-x-auto" bis_skin_checked="1">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <colgroup>
              <col className="w-5" />
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-5" />
            </colgroup>
            <thead>
              <tr className="bg-gradient-to-r from-[#ba181b] via-[#f95738] to-[#ee6c4d] to-90%">
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Brand</th>
                <th className="p-3">Email</th>
                <th className="p-3">Price</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            {allProduct?.map((singleProduct) => (
              <tbody
                key={singleProduct._id}
                className="border-b dark:bg-gray-50 dark:border-gray-300"
              >
                <tr>
                  <td className=" ">
                    <Image
                      src={singleProduct?.image[0]}
                      alt="product"
                      width={80}
                      height={80}
                    />
                  </td>
                  <td className="px-3 py-2">
                    <p>{singleProduct?.name}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p className="dark:text-gray-600">
                      {singleProduct?.category}
                    </p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{singleProduct?.brand}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p>{singleProduct?.seller_email}</p>
                  </td>
                  <td className="px-3 py-2">
                    <p className="dark:text-gray-600">
                      $ {singleProduct?.offerPrice}
                    </p>
                  </td>
                  <td className="px-3 py-2 flex items-center gap-4">
                    <button
                      onClick={() => handleDelete(singleProduct._id)}
                      type="button"
                      title="Delete"
                      className="p-1 rounded-full dark:text-red-500 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                    >
                      <MdOutlineDelete size={24} />
                    </button>
                    <button
                    onClick={()=>handleEdit(singleProduct._id)}
                      type="button"
                      title="Edit"
                      className="p-1 rounded-full dark:text-green-500 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default productManager;
