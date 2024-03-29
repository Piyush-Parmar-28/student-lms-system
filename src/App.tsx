import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import Signup from "./pages/signup.tsx";
import ContactUS from "./pages/contactUs.tsx";
import FindStudent from "./pages/findStudent.tsx";
import AddStudent from "./pages/addStudent.tsx";
import StuList from "./pages/studentList.tsx";
import DeleteStu from "./pages/deleteStudent.tsx";
import StuCard from "./pages/studentDetailCard.tsx";
import UpdateStu from "./pages/updateStudent.tsx";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/protectedRoute.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />

        <Route
          path="/contactUs"
          element={
            <ProtectedRoute>
              <ContactUS />
            </ProtectedRoute>
          }
        />

        <Route
          path="/find"
          element={
            <ProtectedRoute>
              <FindStudent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/detail"
          element={
            <ProtectedRoute>
              <StuCard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddStudent />
            </ProtectedRoute>
          }
        />

        <Route
          path="/list"
          element={
            <ProtectedRoute>
              <StuList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/delete"
          element={
            <ProtectedRoute>
              <DeleteStu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/update"
          element={
            <ProtectedRoute>
              <UpdateStu />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App as React.ComponentType;
