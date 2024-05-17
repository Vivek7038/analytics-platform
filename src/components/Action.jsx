import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import toast from "react-hot-toast";

const Action = (params) => {

  const deletuser=async(param)=>{
    const id =param.data.id
    try{
      await deleteDoc(doc(db, "userinfo", id));

      toast.success("User deleted")
      
    }catch(e){
      console.log(e)
      toast.error("Something wne wrong")
    }
  }

  return (
    <div className=" flex-grow">
      <span className="imgSpanLogo rounded-full">
        {params.value && (
          <div className="flex gap-8">
            <button className="px-4 border-blue-800 border rounded-md "onClick={()=>console.log(params)}>Veiw</button>
            <button  className="px-4 bg-red-600 text-white rounded-md hover:bg-red-800" onClick={()=>deletuser(params)}>Delete</button>
          </div>
        )}
        c
      </span>
    </div>
  );
};

export default Action;
