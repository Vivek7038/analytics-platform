import React from 'react'

const Navbar = () => {
  return (
    <div>
         <header className="min-h-[12vh] fixed top-0 z-20  flex w-[100%] h-[12vh] flex-row overflow-hidden px-2 py-4 text-blue-900  justify-between items-center bg-[#171480] ">
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
      </header>
    </div>
  )
}

export default Navbar