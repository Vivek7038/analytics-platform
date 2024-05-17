import React, { useEffect, useState } from "react";

const Profile = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data]);
  console.log(data);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Here you can add a function to save the data to a backend or update the parent component
  };

  return (
    <div>
      <h1>{profile?.village}</h1>
      <img
        src={profile?.img}
        alt="Profile"
        style={{ width: "150px", height: "150px" }}
      />
      <div>
        <label>Full Name: </label>
        {editMode ? (
          <input
            type="text"
            name="fullName"
            value={profile.full_name}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profile.full_name}</span>
        )}
      </div>
      <div>
        <label>Date of Birth: </label>
        {editMode ? (
          <input
            type="date"
            name="dateOfBirth"
            value={profile.dateOfBirth}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profile.dateOfBirth}</span>
        )}
      </div>
      <div>
        <label>Gender: </label>
        {editMode ? (
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={profile.gender === "Male"}
                onChange={handleInputChange}
              />
              Male
            </label>
            <label>
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
          <span>{profile.gender}</span>
        )}
      </div>
      <div>
        <label>ID: </label>
        <span>{profile.id}</span>
      </div>
      <div>
        <label>Information: </label>
        {editMode ? (
          <input
            type="text"
            name="information"
            value={profile.information}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profile.information}</span>
        )}
      </div>
      <div>
        <label>Mobile No: </label>
        {editMode ? (
          <input
            type="text"
            name="mobileNo"
            value={profile.mobile_no}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profile.mobile_no}</span>
        )}
      </div>
      <div>
        <label>Position: </label>
        {editMode ? (
          <input
            type="text"
            name="position"
            value={profile.position}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profile.position}</span>
        )}
      </div>
      <div>
        <label>Village: </label>
        {editMode ? (
           <div>
           <label>
             <input
               type="radio"
               name="village"
               value="भोकरदन"
               checked={profile.village === "भोकरदन"}
               onChange={handleInputChange}
             />
             भोकरदन
           </label>
           <label>
             <input
                type="radio"
                name="village"
                value="जाफ्राबाद"
               checked={profile.village === "जाफ्राबाद"}
               onChange={handleInputChange}
             />
             जाफ्राबाद
           </label>
         </div>
        ) : (
          <span>{profile.village}</span>
        )}
      </div>
      <div>
        <label>WhatsApp No: </label>
        {editMode ? (
          <input
            type="text"
            name="whatsappNo"
            value={profile.whatsapp_no}
            onChange={handleInputChange}
          />
        ) : (
          <span>{profile.whatsapp_no}</span>
        )}
      </div>
      <div>
        {editMode ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
