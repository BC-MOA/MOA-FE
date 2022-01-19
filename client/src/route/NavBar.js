import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

function NavBar() {
  return (
    <>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Routes>
          <Route path="/home" exact element={Home} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default NavBar;
