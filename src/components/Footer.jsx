import React from "react";
import { Faceboook } from "../assets/SVG/Faceboook";
import { Insta } from "../assets/SVG/Insta";
import { Youtube } from "../assets/SVG/Youtube";
import { Twitter } from "../assets/SVG/Twitter";

const Footer = () => {
  return (
    <div className="min-h-[60vh] bg-[#171480] w-full">
      <div className="text-center flex  flex-col ">
        <h2 className="text-lg font-semibold text-white mt-4 mb-6">Address</h2>
        <div className="flex flex-col gap-2">
          <p className="text-white font-poppins font-medium ">
            कार्यालय: जोदेश्वरी सिल्लोड रोड, ता. भोकरदन, जि.{" "}
          </p>
          <p className="text-white font-poppins text-base font-medium">
            जालना.
          </p>
          <p className="text-white font-poppins text-base font-medium">
            फोन : 9209782008
          </p>
          <p className="text-white font-poppins text-base font-medium">
            Email: chandrakantdanve12@gmail.com
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-white p-4 mt-8">
        <div>
          <img src="./cropped_logo.png" className="w-10" alt={"logo"} />
        </div>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/people/Chandrakant-Pundlikrao-Danwe/100024845408675/?mibextid=ZbWKwL%E0%A5%A4">
            <Faceboook />
          </a>
          <a href="https://www.instagram.com/chandrakant_patil_danwe/?igsh=MTQ1aDI5NDcydW4yaQ%3D%3D">
            <Insta />
          </a>
          <Twitter />
          <a href="https://www.youtube.com/@chandrakantdanwe71">
            <Youtube />
          </a>
        </div>

        <div>
          <img src="./cropped_logo.png" className="w-10 " alt={"logo"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
