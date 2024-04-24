import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    whatsapp_no: "",
    mobile_no: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="px-2 font-bold text-xl ">
        Personal Details/वैयक्तिक माहिती
      </h2>
      <div>
        <div className="min-h-screen  flex justify-center">
          <div className="container max-w-screen-lg mx-auto flex flex-col gap-x-10">
            <form onSubmit={handleSubmit}>
              <div className="py-2">
                <label htmlFor="full_name">Name/नाव *</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  className="h-10 border pt-2 rounded px-4 w-full bg-gray-50"
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
              <button
              //   type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                Next/पुढे
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
