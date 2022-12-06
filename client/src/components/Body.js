import React from "react";
import styled from "styled-components";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Appointment from "../pages/Appointment";

function Body() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </>
  );
}

export default Body;
