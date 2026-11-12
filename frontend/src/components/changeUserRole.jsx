import ROLE from "../common/role";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import SummaryApi from "../common";
const ChangeUserRole = ({ name, email, role, onClose }) => {
  const [userRole, setUserRole] = useState(role);
  const handleOnChangeSelect = (e) => {
    setUserRole(e.target.value);

    console.log(e.target.value);
  };

  const updateUserRole = async()=>{
 const fetchResponse = await fetch(SummaryApi.updateUser.url, {
   method: SummaryApi.updateUser.method,
   credentials: "include",
   headers: {
     "content-type": "application/json",
   },
   body: JSON.stringify({
     role: userRole,
   }),
 });
     const responseData = await fetchResponse.json();
     console.log("responseData",responseData)
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center">
      <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm rounded-md">
        <button className="block ml-auto" onClick={onClose}>
          <IoMdClose />
        </button>
        <h1 className="pb-4 text-lg font-medium">Change User Role</h1>
        <p>Name : {name} </p>
        <p>Email : {email} </p>
        <div className="flex items-center justify-between my-4">
          <p>Role :</p>
          <select
            className="border border-gray-200 outline-none px-4"
            value={userRole}
            onChange={handleOnChangeSelect}
          >
            {Object.values(ROLE).map((el) => {
              return (
                <option value={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="w-fit mx-auto block  py-1 px-3 rounded-full bg-black shadow-md text-white hover:bg-red-700 cursor-pointer"
          onClick={updateUserRole}
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
