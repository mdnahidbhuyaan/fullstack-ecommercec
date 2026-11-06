// import Logo from "./Logo";
import { ImSearch } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white sticky top-0 z-50">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}>
            {/* <Logo w={100} h={60} /> */}
            <h3 className="text-2xl font-bold">
               E-Commerce
            </h3>
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
          />

          <div className="min-w-[50px] h-10 flex items-center justify-center rounded-r-full text-gray-600 cursor-pointer hover:text-violet-600 transition-all duration-300">
            <ImSearch className="text-2xl" />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-3xl cursor-pointer relative flex justify-center">
            <FaUsers />
          </div>
          <div className="text-2xl relative">
            <span>
              {" "}
              <FaShoppingCart className="" />
            </span>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-1 px-4 py-1.5
    bg-gradient-to-r from-black to-gray-800
    text-white text-base font-semibold rounded-lg
    shadow-md shadow-gray-500/20
    hover:from-gray-800 hover:to-gray-700
    hover:shadow-lg hover:-translate-y-0.5
    transition-all duration-300"
            >
              Login
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

//     <header className="h-16 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
//       <div className="h-full container mx-auto flex items-center px-4 justify-between gap-4">
//         {/* Logo */}
//         <div className="shrink-0">
//           <Link
//             to="/"
//             className="flex items-center gap-2 text-2xl font-bold tracking-tight
//   bg-gradient-to-r from-violet-600 to-indigo-600
//   bg-clip-text text-transparent"
//           >
//             E-Commerce
//           </Link>
//         </div>
//         {/* <Logo w={100} h={60} /> */}

//         {/* Search Bar */}
//         <div className="hidden lg:flex items-center w-full max-w-md border border-gray-200 rounded-full bg-gray-50 focus-within:bg-white focus-within:border-violet-400 focus-within:shadow-md focus-within:shadow-violet-100 transition-all duration-300 pl-4">
//           <input
//             type="text"
//             placeholder="Search products here..."
//             className="w-full py-2.5 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
//           />

//           <button
//             type="button"
//             className="w-9 h-9 flex items-center justify-center rounded-full
//   bg-gradient-to-r from-violet-700 to-indigo-700
//   text-white hover:from-violet-700 hover:to-indigo-800
//   transition-all duration-300"
//           >
//             <ImSearch className="text-base" />
//           </button>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-4 sm:gap-6">
//           {/* Users Icon */}
//           <button
//             type="button"
//             className="text-2xl text-gray-600 hover:text-violet-600 hover:scale-110 transition-all duration-300"
//           >
//             <FaUsers />
//           </button>

//           {/* Cart Icon */}
//           <div className="relative text-2xl text-gray-700 cursor-pointer hover:text-violet-600 transition-all duration-300">
//             <FaShoppingCart />

//             <div className="absolute -top-2 -right-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white min-w-5 h-5 rounded-full flex items-center justify-center px-1 shadow-sm">
//               <p className="text-xs font-semibold">0</p>
//             </div>
//           </div>

//           {/* Login Button */}
//           <Link
//             to="/login"
//             className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-1.5
// bg-gradient-to-r from-violet-600 to-indigo-600
// text-white text-xs sm:text-sm font-semibold rounded-lg
// shadow-md shadow-indigo-500/20
// hover:from-violet-700 hover:to-indigo-700
// hover:shadow-lg hover:-translate-y-0.5
// active:scale-95 transition-all duration-300"
//           >
//             Login
//             <span className="text-lg">→</span>
//           </Link>
//         </div>
//       </div>
//     </header>