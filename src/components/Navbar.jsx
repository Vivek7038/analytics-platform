import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* <header className="min-h-[12vh] fixed top-0 z-20  flex w-[100%] h-[12vh] flex-row overflow-hidden px-2 py-4 text-blue-900  justify-between items-center bg-[#171480] ">
        <div className="relative h-ful">
          <div className="">
            <img
              src="./cropped_logo.png"
              className={
                "z-[999] transform translate-y-1/2 xl:w-56 md:w-40 sm:w-32 w-28 h-full"
              }
              alt={"logo"}
            />
          </div>
        </div>
        <div className="ml-auto">
          {" "}
          <p className="whitespace-nowrap text-white font-bold">
            {" "}
            राष्ट्रवादी काँग्रेस पक्ष शरदचंद्र पवार
          </p>
          <p className="whitespace-nowrap text-white px-10 font-bold">
            {" "}
            भोकरदन - जाफ्राबाद
          </p>
        </div>
      </header> */}
      <header className="min-h-20 fixed top-0 w-full border-b">
        <div className="w-full ">
          <div className="absolute z-99">
            <img
              src="./cropped_logo.png"
              className="w-20 ml-4 mt-5"
              alt={"logo"}
            />
          </div>
          <div className="w-full bg-red h-16 bg-[#171480]">
            <p className="text-white ml-12 text-center font-yatra-one text-xl font-medium">
              {" "}
              राष्ट्रवादी काँग्रेस पक्ष शरदचंद्र पवार <br></br> भोकरदन -
              जाफ्राबाद
            </p>
          </div>
          <div>
            <p className=" bg-white text-[#171480] ml-16 text-center pt-3 font-semiboldbold font-yatra-one text-xl">
              मा. आमदार चंद्रकांत पुंडलीकराव दानवे{" "}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
