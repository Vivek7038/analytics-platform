import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";

const Action = (params) => {

  const deletuser=async(param)=>{
    const id =param.data.id
    try{
      await deleteDoc(doc(db, "userinfo", id));
      
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className=" flex-grow">
      <span className="imgSpanLogo rounded-full">
        {params.value && (
          <div className="flex gap-8">
            <button className="px-4 border-blue-800 border rounded-md ">Veiw</button>
            <button  className="px-4 bg-red-600 text-white rounded-md hover:bg-red-800" onClick={()=>deletuser(params)}>Delete</button>
          </div>
        )}
        c
      </span>
    </div>
  );
};

export default Action;
