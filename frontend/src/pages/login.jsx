import { useState } from "react";
import loginIcons from "../assest/login.jpg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
<FaEyeSlash />;
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const dataApi = await dataResponse.json()
     if(dataApi.success){
      toast.success(dataApi.message);
      navigate("/");
     }
    if(dataApi.error){
      toast.error(dataApi.message);
    }
  };
  console.log(data, "data login");
  return (
    <section
      id="login"
      className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-violet-100 px-4 py-10"
    >
      <div className="container mx-auto">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-indigo-200/40 overflow-hidden border border-white">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Branding */}
            <div className="hidden md:flex flex-col justify-center items-center text-center p-10 bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-800 text-white relative overflow-hidden">
              <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-20 -left-20"></div>
              <div className="absolute w-72 h-72 bg-white/10 rounded-full -bottom-24 -right-20"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mx-auto mb-7 shadow-lg border border-white/20">
                  <span className="text-4xl">🛍️</span>
                </div>

                <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>

                <p className="text-indigo-100 leading-relaxed max-w-xs mx-auto">
                  Sign in to your account and enjoy a smooth and secure shopping
                  experience.
                </p>

                <div className="mt-8 flex justify-center gap-2">
                  <span className="w-8 h-1.5 rounded-full bg-white"></span>
                  <span className="w-2 h-1.5 rounded-full bg-white/40"></span>
                  <span className="w-2 h-1.5 rounded-full bg-white/40"></span>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="p-6 sm:p-9 md:p-10">
              {/* Header */}
              <div className="text-center mb-7">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-indigo-50 p-1 border-4 border-indigo-100 shadow-md">
                  <img
                    src={loginIcons}
                    alt="login icons"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900">
                  Welcome Back
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Please login to your account
                </p>
              </div>

              {/* Login Form */}
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                {/* Email */}
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all duration-300">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={data.email}
                      onChange={handleOnChange}
                      required
                      autoComplete="email"
                      className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="grid gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center focus-within:bg-white focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 transition-all duration-300">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={data.password}
                      name="password"
                      onChange={handleOnChange}
                      required
                      autoComplete="current-password"
                      className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder:text-gray-400"
                    />

                    <button
                      type="button"
                      className="cursor-pointer text-xl text-gray-400 hover:text-indigo-600 transition-colors"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>

                  {/* Forgot Password */}
                  <Link
                    to="/forgot-password"
                    className="block w-fit ml-auto text-sm font-medium text-indigo-600 hover:text-violet-700 hover:underline transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full mt-3 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold shadow-lg shadow-indigo-200 hover:from-violet-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  Login
                </button>
              </form>

              {/* Sign Up Link */}
              <div className="mt-7 pt-5 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                  Don't have an account?
                  <Link
                    to="/sign-up"
                    className="ml-1 font-bold text-indigo-600 hover:text-violet-700 hover:underline transition-colors"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
