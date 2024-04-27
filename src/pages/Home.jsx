import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-[100vh] min-w-[100vw]">
      <Navbar />
      <div className="mt-[12vh]">
        {" "}
        {/* Added margin-top to create space below the navbar */}
        {/* <div className="border-b-2 border-black"></div> */}
        <div className="flex flex-col">
          <img
            src="./banner-1.png"
            alt="banner"
            className="pt-[20px] w-full h-[300px] object-contain -z-10"
          />
        </div>
        <Form />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
