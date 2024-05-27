import React, { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import Select from "react-select";
import toast from "react-hot-toast";
import { Bhokardan, Jafrabad, postion } from "./Select";

const Profile = ({ data, rowdata }) => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data]);

  const editPosition = (selected) => {
    console.log(selected)
    setProfile((prev) => ({
      ...prev,
      position: selected.value,
    }));
  };

  const editVillage=(selected)=>{
    
    setProfile((prev)=>({
      ...prev,
      village:selected.value
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handelCancel = () => {
    setEditMode(false);
  };
  const handleSaveClick = async () => {
    console.log(profile);
    setEditMode(false);

    const userprofile = doc(db, "userinfo", profile.id);
    try {
      await updateDoc(userprofile, {
        ...profile,
      });
    } catch (e) {
      console.log(e);
      toast.success("Something went wrong");
    }
    rowdata();
    toast.success("Data edited success fully");
  };

  return (
    <div className="border-2 px-8 py-2 flex flex-col gap-4 rounded-xl mt-6 items-center my-4">
      <img
        src={profile.img?  (profile.img):("./avatar.png")}
        alt="Profile"
        className="w-56 rounded-full border-2 object-cover my-2"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 text-slate-500">
          <label>Full Name</label>
          {editMode ? (
            <input
              type="text"
              name="full_name"
              value={profile.full_name}
              onChange={handleInputChange}
              className="p-2 border-2 rounded-md"
            />
          ) : (
            <span className="text-black text-lg">{profile.full_name}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 text-slate-500">
          <label>Mobile No </label>
          {editMode ? (
            <input
              type="text"
              name="mobile_no"
              value={profile.mobile_no}
              onChange={handleInputChange}
              className="p-2 border-2 rounded-md"
            />
          ) : (
            <span className="text-black text-lg">{profile.mobile_no}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 text-slate-500">
          <label>WhatsApp No </label>
          {editMode ? (
            <input
              type="text"
              name="whatsapp_no"
              value={profile.whatsapp_no}
              onChange={handleInputChange}
              className="p-2 border-2 rounded-md"
            />
          ) : (
            <span className="text-black text-lg">{profile.whatsapp_no}</span>
          )}
        </div>
        <div className="flex items-center gap-4 text-slate-500">
          <label>Date of Birth: </label>
          {editMode ? (
            <input
              type="date"
              name="dateOfBirth"
              value={profile.dateOfBirth}
              onChange={handleInputChange}
              className="p-1 border-2 rounded-md"
            />
          ) : (
            <span className="text-black text-lg">{profile.dateOfBirth}</span>
          )}
          <div className="flex flex-col gap-2 text-slate-500">
            <label>Gender </label>
            {editMode ? (
              <div className="flex gap-2">
                <label className="text-black">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={profile.gender === "Male"}
                    onChange={handleInputChange}
                  />
                  Male
                </label>
                <label className="text-black">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={profile.gender === "Female"}
                    onChange={handleInputChange}
                  />
                  Female
                </label>
              </div>
            ) : (
              <span className="text-lg text-black">{profile.gender}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-slate-500">
          <label>Position</label>
          {editMode ? (
            <Select onChange={editPosition} options={postion} />
          ) : (
            <span className="text-black text-lg">{profile.position}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 text-slate-500">
          <label>Taluka</label>
          {editMode ? (
            <div className="flex gap-2 text-black">
              <label>
                <input
                  type="radio"
                  name="Taluka"
                  value="भोकरदन"
                  checked={profile.Taluka === "भोकरदन"}
                  onChange={handleInputChange}
                />
                भोकरदन
              </label>
              <label>
                <input
                  type="radio"
                  name="Taluka"
                  value="जाफ्राबाद"
                  checked={profile.Taluka === "जाफ्राबाद"}
                  onChange={handleInputChange}
                />
                जाफ्राबाद
              </label>
            </div>
          ) : (
            <span className="text-black">{profile.Taluka}</span>
          )}
        </div>
        <div className="flex flex-col gap-2 text-slate-500">
          <label>Village</label>
          {editMode ? (
           <Select
           onChange={editVillage}
           options={
             profile.Taluka === "जाफ्राबाद" ? Jafrabad : Bhokardan
           }
         />
          ) : (
            <span className="text-black text-lg">{profile.village}</span>
            
          )}
        </div>
        <div className="flex flex-col gap-2 text-slate-500">
          <label>Information </label>
          {editMode ? (
            <input
              type="text"
              name="information"
              value={profile.information}
              onChange={handleInputChange}
              className="p-2 border-2 rounded-md"
            />
          ) : (
            <span className="text-black text-lg">{profile.information}</span>
          )}
        </div>
          
        {profile.full_name!==undefined &&<div >
          {editMode  ? (
            <div className="flex gap-2">
              <button
                className="px-4 py-2 hover:text-white ease-in-2s duration-100 rounded-md border-2 border-green-600 hover:bg-green-600"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="px-4 py-2 hover:text-white ease-in-2s duration-100 rounded-md border-2 border-red-600 hover:bg-red-600"
                onClick={handelCancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              className="px-4 py-2 hover:text-white ease-in-2s duration-100 rounded-md border-2 border-violet-600 hover:bg-violet-600"
              onClick={handleEditClick}
            >
              Edit
            </button>
          )}
        </div>}
      </div>
    </div>
  );
};

export default Profile;
