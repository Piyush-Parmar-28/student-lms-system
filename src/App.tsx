import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import Signup from "./pages/signup.tsx";
import ContactUS from "./pages/contactUs.tsx";
import FindStudent from "./pages/findStudent.tsx"
import AddStudent from "./pages/addStudent.tsx";
import StuList from "./pages/studentList.tsx";
import DeleteStu from "./pages/deleteStudent.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/contactUs" element={<ContactUS />} />
        <Route path="/find" element={<FindStudent />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/list" element={<StuList />} />
        <Route path="/delete" element={<DeleteStu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App as React.ComponentType;
