// MyContext.js
import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  // State to store the context value
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <MyContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
