/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect } from "react";
import SummaryApi from "../common";
import UploadProduct from "../components/uploadProduct";
import { useState } from "react";
import AdminProductCard from "../components/adminProductCard";

const AllProducts = () => {
  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url);
    const dataResponse = await response.json();
    console.log("response data", dataResponse);
    setAllProducts(dataResponse?.data || []);
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center ">
        <h2 className="font-bold text-lg">All Product</h2>

        <button
          className="inline-flex items-center justify-center gap-2
  bg-gradient-to-r from-violet-600 to-indigo-600
  hover:from-violet-700 hover:to-indigo-700
  text-white font-semibold
  px-5 py-2.5 rounded-lg
  shadow-md shadow-indigo-500/20
  hover:shadow-lg hover:shadow-indigo-500/30
  hover:-translate-y-0.5
  active:scale-95
  transition-all duration-300"
          onClick={() => setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>
      {/* all product */}

      <div className="flex items-center flex-wrap gap-9 py-4 overflow-y-scroll">
        {allProducts.map((product, index) => {
          return (
            <AdminProductCard
              data={product}
              key={index + "allProduct"}
              fetchdata={fetchAllProduct}
            />
          );
        })}
      </div>
      {/* upload productComponents  */}
      {openUploadProduct && (
        <UploadProduct
          onClose={() => setOpenUploadProduct(false)}
          fetchdata={fetchAllProduct}
        />
      )}
    </div>
  );
};

export default AllProducts;
