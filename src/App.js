import "./App.css";
import { Route, Routes } from "react-router-dom";
import Appbar from "./EventManagement/Appbar";
import Home from "./EventManagement/Home";
import Login from "./EventManagement/Login";
import SignUp from "./EventManagement/SignUp";
import Footer from "./EventManagement/Footer";
import UserPage from "./EventManagement/UserPage";
import Logout from "./EventManagement/Logout";
import About from "./EventManagement/About";
import { AuthContext } from "./EventManagement/AuthContext";

import { useReducer } from "react";
import authreducer from "./EventManagement/authreducer";

function App() {
  const [user, dispatch] = useReducer(authreducer, null);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <Appbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/userpage" element={<UserPage />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
