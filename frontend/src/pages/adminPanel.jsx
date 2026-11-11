import { FaUsers } from "react-icons/fa";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);

  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden">
      <aside className="bg-white min-h-full w-full max-w-60 shadow-md">
        <div className="h-36 flex justify-center items-center flex-col">
          <div className="text-4xl cursor-pointer relative flex justify-center">
            {user?.profilePic ? (
              <img
                src={user.profilePic}
                className="w-15 h-15 rounded-full object-cover"
                alt={user?.name}
              />
            ) : (
              <FaUsers />
            )}
          </div>
          <div>
            <p className="capitalize text-lg font-semibold">{user?.name}</p>
            <p className="text-sm">{user?.role}</p>
          </div>
        </div>
        {/* Navigations */}
        <div>
          <nav className="grid p-4">
            <Link to={"all-users"} className="px-2 py-1 hover:bg-slate-100">All user</Link>
            <Link to={"all-products"} className="px-2 py-1 hover:bg-slate-100">All product</Link>
          </nav>
        </div>
      </aside>
      <main className="w-full h-full p-2">
        <Outlet/>
      </main>
    </div>
  );
};

export default AdminPanel;
