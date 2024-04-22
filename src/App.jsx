import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import LoginForm from "./pages/login/login";
import { Children, useState } from "react";
import Home from "./pages/Home";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";


function App() {
  const [currentuser ,setCurrentuser] = useState(false)
  
 
  const RequiredAuth = ({ children }) => {
    return currentuser ? children : <Navigate to="/login" />;
  };


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequiredAuth>
                <Home />
              </RequiredAuth>
            }
          />
          <Route
            path="/page1"
            element={
              <RequiredAuth>
                <Page1/>
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
