import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { List } from "./list";
import { UserDetail } from "./details";
import "./styles.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path=":id" element={<UserDetail />} />
    </Routes>
  );
};

export default App;
