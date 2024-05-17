import React from "react";

export default (params) => (
  <div className=" rounded-full">
    <span className="imgSpanLogo rounded-full">
      {params.value && (
        <img alt="./avatar.png" src={params?.data?.img} className="object-cover w-12 h-12 rounded-full" />
      )}
      <p>{params.value}</p>
      {/* {console.log(params.data.img)} */}
    </span>
  
  </div>
);
