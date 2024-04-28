import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Form = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    full_name: "",
    whatsapp_no: "",
    mobile_no: "",
    position: "",
    gender: "",
    Taluka: "",
    dateOfBirth: "",
    village: "",
    information: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const uploadFile = () => {
    const name = new Date().getTime() + image.name;
    console.log(name);
    const storageRef = ref(storage, image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          setFormData((prev) => ({ ...prev, img: downloadURL }));
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(
        collection(db, "userinfo"),
        {
          ...formData,
        },
        console.log("datasend ")
      );
      image && uploadFile();
    } catch (error) {
      console.log(error);
    }

    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="px-2 font-bold text-xl ">
        Personal Details/वैयक्तिक माहिती
      </h2>
      <div>
        <div className="min-h-svh flex justify-center flex-col px-2 my-4">
          <div className="container max-w-screen-lg mx-auto flex flex-col gap-x-10 fe">
            <form onSubmit={handleSubmit}>
              <div className="py-2 flex items-center justify-center ">
                <div className="rounded-full border-2 border-black w-20 h-20 overflow-hidden">
                  {image && (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="rounded-full w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="py-2">
                <label htmlFor="full_name">Name/नाव *</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  className="h-10 border pt-2 rounded px-4 w-full  bg-gray-50"
                  value={formData.full_name}
                  onChange={handleChange}
                />
              </div>
              <div className="py-2">
                <label htmlFor="whatsapp_no">
                  WhatsApp No/व्हॉट्सॲप क्र. *
                </label>
                <input
                  type="text"
                  name="whatsapp_no"
                  id="whatsapp_no"
                  className="h-10 border pt-2 rounded px-4 w-full bg-gray-50"
                  value={formData.whatsapp_no}
                  onChange={handleChange}
                />
              </div>
              <div className="py-2">
                <label htmlFor="mobile_no">Mobile No/मोबाईल क्र</label>
                <input
                  type="text"
                  name="mobile_no"
                  id="mobile_no"
                  className="h-10 border pt-2 rounded px-4 w-full bg-gray-50"
                  value={formData.mobile_no}
                  onChange={handleChange}
                />
              </div>
              <div className="py-2">
                <label htmlFor="position">Position/पद</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  className="h-10 border pt-2 rounded px-4 w-full bg-gray-50"
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>
              <div className="py-2 relative flex flex-col gap-2">
                <label htmlFor="whatsapp_no">
                  Upload Profile Pic/प्रोफाइल फोटो अपलोड करा
                </label>
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <button class="bg-[#171480]  text-white font-bold py-2 px-4 rounded">
                  {image ? "Change Picture" : "Choose File"}
                </button>
              </div>

              <div className="my-2">
                <p className="py-2">
                  Gender/लिंग<span className="text-red-600">*</span>
                </p>
                <input
                  type="radio"
                  id="Male"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />
                <label className="pr-4" htmlFor="male">
                  Male/पुरुष
                </label>

                <input
                  type="radio"
                  id="Female"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />
                <label htmlFor="female">Female/स्त्री</label>
              </div>
              <div className="py-2">
                <label htmlFor="position ">
                  Date of Birth/जन्मतारीख{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  className="h-10 border pt-2 rounded px-4 w-full bg-gray-50"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="my-2">
                <p className="py-2">
                  Taluka/तालुका *<span className="text-red-600">*</span>
                </p>
                <input
                  type="radio"
                  id="भोकरदन"
                  name="Taluka"
                  value="भोकरदन"
                  onChange={handleChange}
                />
                <label className="pr-4" htmlFor="Taluka">
                  भोकरदन
                </label>

                <input
                  type="radio"
                  id="जाफ्राबाद"
                  name="Taluka"
                  value="जाफ्राबाद"
                  onChange={handleChange}
                />
                <label htmlFor="Taluka">जाफ्राबाद</label>
              </div>
              <div className="py-2">
                <label htmlFor="Village">Village Name/गावाचे नाव*</label>
                <input
                  type="text"
                  name="village"
                  id="village"
                  className="h-10 border pt-2 rounded px-4 w-full bg-gray-50"
                  value={formData.village}
                  onChange={handleChange}
                />
              </div>

              <div className="py-2">
                <label htmlFor="Village">Information/माहिती*</label>
                <textarea
                  type="text"
                  name="information"
                  id="information"
                  rows={4}
                  className="h-10 border pt-2 rounded px-4 w-full bg-gray-50"
                  value={formData.information}
                  onChange={handleChange}
                />
              </div>
              <button
                //   type="submit"
                className="bg-[#171480] w-[96%] text-white px-4 py-2 rounded mt-4"
              >
                Register/नोंदवा{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
