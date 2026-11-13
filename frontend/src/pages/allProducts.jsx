import UploadProduct from "../components/uploadProduct";
import { useState } from "react";

const AllProducts = () => {
    const [openUploadProduct, setOpenUploadProduct] = useState(false);
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
  onClick={() =>setOpenUploadProduct(true)}
        >
          Upload Product
        </button>
      </div>
      {/* upload productComponents  */}
      {
        openUploadProduct && (

          <UploadProduct onClose={()=>setOpenUploadProduct(false)}/>
        )
      }
    </div>
  );
};

export default AllProducts;
