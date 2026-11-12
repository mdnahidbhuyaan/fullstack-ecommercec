/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const signUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);
    setData((preve) => {
      return {
        ...preve,
        role: "GENERAL",
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const dataApi = await dataResponse.json();
      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }
      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } else {
       toast.error("password check password and confirm password");
    
    }
  };

  return (
    <section
      id="signUp"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-violet-100 px-4 py-10"
    >
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-indigo-200/40 overflow-hidden border border-white">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Branding */}
          <div className="hidden md:flex flex-col justify-center items-center text-center p-10 bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-800 text-white relative overflow-hidden">
            <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-20 -left-20"></div>
            <div className="absolute w-72 h-72 bg-white/10 rounded-full -bottom-24 -right-20"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mx-auto mb-7 shadow-lg border border-white/20">
                <span className="text-4xl">🛍️</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">Welcome to Our Store</h2>

              <p className="text-indigo-100 leading-relaxed max-w-xs mx-auto">
                Create your account and enjoy a smarter, easier and better
                shopping experience.
              </p>

              <div className="mt-8 flex justify-center gap-2">
                <span className="w-8 h-1.5 rounded-full bg-white"></span>
                <span className="w-2 h-1.5 rounded-full bg-white/40"></span>
                <span className="w-2 h-1.5 rounded-full bg-white/40"></span>
              </div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="p-6 sm:p-9 md:p-10">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Create Account
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Join us and start shopping today!
              </p>
            </div>

            {/* Profile Upload */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 relative rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg group">
                <img
                  src={data.profilePic || loginIcons}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />

                <label>
                  <div className="absolute bottom-0 left-0 w-full py-3 text-xs font-semibold text-center cursor-pointer bg-white/80 text-indigo-700 group-hover:bg-white transition-all duration-300">
                    Upload Photo
                  </div>

                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleUploadPic}
                  />
                </label>
              </div>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  autoComplete="name"
                  className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  autoComplete="email"
                  className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none text-sm focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-300 font-semibold"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="flex items-center mt-2 px-4 bg-gray-50 border border-gray-200 rounded-xl focus-within:bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all duration-300">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={data.password}
                    name="password"
                    onChange={handleOnChange}
                    required
                    autoComplete="new-password"
                    className="w-full py-3 bg-transparent outline-none text-sm"
                  />

                  <button
                    type="button"
                    className="text-xl text-gray-400 hover:text-indigo-600 transition-colors"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>

                <div className="flex items-center mt-2 px-4 bg-gray-50 border border-gray-200 rounded-xl focus-within:bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all duration-300">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={data.confirmPassword}
                    name="confirmPassword"
                    onChange={handleOnChange}
                    required
                    autoComplete="new-password"
                    className="w-full py-3 bg-transparent outline-none text-sm"
                  />

                  <button
                    type="button"
                    className="text-xl text-gray-400 hover:text-indigo-600 transition-colors"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-3 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-lg shadow-indigo-200 hover:from-violet-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-6 pt-5 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-indigo-600 hover:text-violet-700 hover:underline transition-colors"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signUp;
