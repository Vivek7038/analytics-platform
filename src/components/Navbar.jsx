import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="fixed w-full top-0 border-b-2 z-10">
        <div className="flex bg-[#171480] dw-full py-2 items-center justify-around gap-4">
          <img
            src="./cropped_logo.png"
            className="  w-20 ml-4 ml-1  "
            alt={"logo"}
          />
          <div className="col-span-2 bg-[#171480] ">
            <p className="text-white bg-[#171480] mr-2  text-center font-yatra-one text-xl font-medium">
              {" "}
              राष्ट्रवादी काँग्रेस पक्ष शरदचंद्र पवार <br></br> भोकरदन -
              जाफ्राबाद
            </p>
          </div>
        </div>
        <div className="row-span-2 col-span-2 bg-white ">
          <p className=" bg-white text-[#171480] pl-12  text-center pt-3 font-semiboldbold font-yatra-one text-xl">
            मा. आमदार चंद्रकांत पुंडलिकराव  दानवे{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
