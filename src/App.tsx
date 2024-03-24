import React from "react";
import "./custom.scss";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPw from "./pages/Forgot-Password";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/forgot-pw" element={<ForgotPw />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
