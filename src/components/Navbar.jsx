import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* <header className="min-h-20 fixed top-0 w-full border-b z-40">
        <div className="w-full ">
          <div className=" z-50">
            <img
              src="./cropped_logo.png"
              className=" absolute w-20 ml-4 mt-5"
              alt={"logo"}
            />
          </div>
          <div className="w-full bg-red h-16 ">
            <p className="text-white bg-[#171480] pl-12 text-center font-yatra-one text-xl font-medium">
              {" "}
              राष्ट्रवादी काँग्रेस पक्ष शरदचंद्र पवार <br></br> भोकरदन -
              जाफ्राबाद
            </p>
            <p className=" bg-white text-[#171480] pl-12  text-center pt-3 font-semiboldbold font-yatra-one text-xl">
              मा. आमदार चंद्रकांत पुंडलीकराव दानवे{" "}
            </p>
          </div>
        </div>
      </header> */}
      <div className="grid grid-rows-2 grid-flow-col border-b-2 ">
        <div className="row-span-3 ">
          <img
            src="./cropped_logo.png"
            className="  w-20 ml-4 ml-1 mt-5"
            alt={"logo"}
          />
        </div>
        <div className="col-span-2 bg-[#171480] z-10">
          <p className="text-white bg-[#171480] pl-12 text-center font-yatra-one text-xl font-medium">
            {" "}
            राष्ट्रवादी काँग्रेस पक्ष शरदचंद्र पवार <br></br> भोकरदन - जाफ्राबाद
          </p>
        </div>
        <div className="row-span-2 col-span-2 ...">
          <p className=" bg-white text-[#171480] pl-12  text-center pt-3 font-semiboldbold font-yatra-one text-xl">
            मा. आमदार चंद्रकांत पुंडलीकराव दानवे{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
