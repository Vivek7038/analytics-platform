import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyContextProvider } from "./provider/AuthProvider.jsx";
// import Navbar from "./components/Navbar.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyContextProvider>
      {/* <Navbar /> */}
      <App />
    </MyContextProvider>
  </React.StrictMode>
);
