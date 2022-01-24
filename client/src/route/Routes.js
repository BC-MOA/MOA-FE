import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Gather from "../components/gather/Gather";
import Save from "../components/save/Save";
import Compete from "../components/compete/Compete";
import Profile from "../components/profile/Profile";
import CompeteDetail from "../components/compete/CompDetail";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gather" element={<Gather />} />
      <Route path="/save" element={<Save />} />
      <Route path="/compete" element={<Compete />} />
      <Route path="/compete/:id" element={<CompeteDetail />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AllRoutes;
