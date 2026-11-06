/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import loginIcons from "../assest/login.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const signUp = () => {
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
      const [data, setData] = useState({
        email: "",
        password: "",
      });
      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((preve) => {
          return {
            ...preve,
            [name]: value,
          };
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
      };
  return (
    <section id="signUp">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-5 w-full max-w-sm mx-auto rounded">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="grid">
              <label className="font-bold">Name :</label>
              <div className="bg-slate-100 p-3 rounded-full">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none "
                />
              </div>
            </div>
            <div className="grid">
              <label className="font-bold">Email :</label>
              <div className="bg-slate-100 p-3 rounded-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none "
                />
              </div>
            </div>
            <div>
              <label className="font-bold">password :</label>
              <div className="bg-slate-100 p-3 rounded-full flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
        
            </div>
            <div>
              <label className="font-bold">Confirm password :</label>
              <div className="bg-slate-100 p-3 rounded-full flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
  
            </div>
            <button
              className="px-6 py-2 max-w-[150px] w-full mx-auto block mt-5
  bg-gradient-to-r from-gray-900 to-black
  text-white text-sm font-semibold
  border border-gray-700 rounded-lg
  shadow-md shadow-black/20
  hover:from-gray-800 hover:to-gray-900
  hover:border-gray-500 hover:shadow-lg
  hover:scale-105
  active:scale-95
  transition-all duration-300"
            >
              Login
            </button>
          </form>
          <p className="my-4">
            Not have an account ?{" "}
            <Link
              to={"/sign-up"}
              className="hover:text-red-800 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default signUp;
