import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import LoginForm from "./pages/login/login";
import { Children, useContext, useState } from "react";
import Home from "./pages/Home";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { MyContext } from "./provider/AuthProvider";

function App() {
  const { currentUser, setCurrentUser } = useContext(MyContext);

  const RequiredAuth = ({ children }) => {
    console.log("called");
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/page1"
            element={
              <RequiredAuth>
                <Page1 />
              </RequiredAuth>
            }
          />
          <Route
            path="/page2"
            element={
              <RequiredAuth>
                <Page2 />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
