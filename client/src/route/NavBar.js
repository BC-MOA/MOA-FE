import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Gather from "../components/gather/Gather";
import Save from "../components/save/Save";
import Compete from "../components/compete/Compete";
import Profile from "../components/profile/Profile";

function NavBar() {
  return (
    <>
      <BrowserRouter>
        <Link to="/home">홈</Link>
        <Link to="/gather">모으기</Link>
        <Link to="/save">아끼기</Link>
        <Link to="/compete">챌린지</Link>
        <Link to="/profile">프로필</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gather" element={<Gather />} />
          <Route path="/save" element={<Save />} />
          <Route path="/compete" element={<Compete />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default NavBar;
