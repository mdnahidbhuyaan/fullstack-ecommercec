import { Outlet } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";
const App = () => {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default App;
