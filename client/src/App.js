import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login.jsx";
import SignUp from "./components/login_signup/login_signup";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <SignUp />
    </div>
    </BrowserRouter>
  );
}

export default App;
