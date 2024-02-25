import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main"
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Error from "./components/Error";

function App() {

  const [token, setToken] = useState("")

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"))
    }
  }, [])

  return (
    <>
      <Routes>
        {token &&
          <Route path="/home" element={<Home />} />
        }
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}


export default App;