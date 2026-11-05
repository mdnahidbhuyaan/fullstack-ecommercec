import Logo from "./Logo";
import { ImSearch } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Link to={"/"}>
            <Logo w={100} h={60} />
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
            // onChange={handleSearch}
            // value={search}
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
            <Link to="/login" className="px-6 bg-black text-white rounded-sm py-2 hover:bg-gray-800 shadow-md">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
