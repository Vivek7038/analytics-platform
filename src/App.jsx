import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import LoginForm from "./pages/login/login";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline"></h1>
      <LoginForm />
    </>
  );
}

export default App;
