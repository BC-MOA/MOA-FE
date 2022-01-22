import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Gather from "../components/gather/Gather";
import Save from "../components/save/Save";
import Compete from "../components/compete/Compete";
import Profile from "../components/profile/Profile";
import Complete from "components/gather/Complete";
import Goal from "components/gather/Goal";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/gather" element={<Gather />} />
      <Route path="/gather/add-goal" element={<Goal />} />
      <Route path="/gather/add-goal/complete" element={<Complete />} />
      <Route path="/save" element={<Save />} />
      <Route path="/compete" element={<Compete />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AllRoutes;
