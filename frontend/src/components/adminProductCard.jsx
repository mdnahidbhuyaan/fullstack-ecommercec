/* eslint-disable no-unused-vars */
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
import AdminEditProduct from "./adminEditProduct";
import displayBDTCurrency from "../helpers/displayCurrency";


const AdminProductCard = ({ data, fetchdata }) => {
  const [editProduct, setEditProduct] = useState(false);
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="w-40">
        <img
          src={data?.productImage[0]}
          alt=""
          width={150}
          height={150}
          className="w-fit ml-auto rounded-md"
        />
        <h2 className="font-semibold text-lg">{data.productName}</h2>
        <div>
          <div>
            <span className="text-2xl font-bold">৳</span>
            <span className="text-md font-bold">
              {displayBDTCurrency(data.sellingPrice).replace("৳ ", "")}
            </span>
          </div>
          <div
            className="w-fit ml-auto bg-green-100 hover:bg-green-500 p-2 rounded-full hover:text-white cursor-pointer"
            onClick={() => setEditProduct(true)}
          >
            <MdModeEdit />
          </div>
        </div>
      </div>
      {editProduct && (
        <AdminEditProduct
          productData={data}
          onClose={() => setEditProduct(false)}
          fetchdata={fetchdata}
        />
      )}
    </div>
  );
};

export default AdminProductCard;
