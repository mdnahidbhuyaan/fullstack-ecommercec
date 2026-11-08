import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/header";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import SummaryApi from "./common";
const App = () => {
const fetchUserDetails = async () => {
  try {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });

    console.log("Status:", dataResponse.status);

    const dataApi = await dataResponse.json();

    console.log("data-user:", dataApi);
  } catch (error) {
    console.log("Fetch Error:", error);
  }
};
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
