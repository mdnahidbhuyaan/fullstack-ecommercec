/* eslint-disable no-unused-vars */
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import productCategory from "../helpers/productCategory";
import { MdCloudUpload } from "react-icons/md";

const UploadProduct = ({ onClose }) => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });

  const handleOnChange = () => {
    // const { name, value } = e.target;
    // setData((preve) => {
    //   return {
    //     ...preve,
    //     [name]: value,
    //   };
    // });
  };
  return (
    <div className="fixed w-full  h-full bg-slate-200/40 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-bold text-lg">Upload Product</h2>
          <div className="w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer">
            <IoClose onClick={onClose} />
          </div>
        </div>
        <form className="grid p-4 gap-3 overflow-y-scroll h-full pb-5">
          <label htmlFor="productName font-semibold">Product Name : </label>
          <input
            type="text"
            id="productName"
            placeholder="enter product name"
            name="productName"
            value={data.productName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 rounded outline-none"
            // required
          />
          <label htmlFor="brandName" className="mt-3 font-semibold">
            Brand Name :
          </label>
          <input
            type="text"
            id="brandName"
            placeholder="enter brand name"
            value={data.brandName}
            name="brandName"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 rounded outline-none"
            required
          />
          <label htmlFor="category" className="mt-3 font-semibold">
            Category :
          </label>
          <select
            className="p-2 bg-slate-100 rounded outline-none"
            value={data.category}
          >
            {productCategory.map((el, index) => {
              return (
                <option value={el.value} key={el.value + index}>
                  {el.label}
                </option>
              );
            })}
          </select>
          <label htmlFor="productImage" className="mt-3 font-semibold">
            Product Image :
          </label>
            <label htmlFor="uploadImageInput">
          <div className="p-2 bg-slate-100 rounded h-35 w-full">
              <div className=" flex justify-center items-center flex-col gap-2">
                <span className="text-3xl">
                  <MdCloudUpload className="w-8 h-8" />
                </span>

                <p className="text-sm font-semibold">Upload Product Image</p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                 
                />
              </div>
          </div>
            </label>
          <div>
            <img src="" width={80} height={80} className="bg-slate-100  " />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
