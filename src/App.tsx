import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import LoginFirst from "./pages/loginFirst.tsx";
import { useSelector } from "react-redux";

function App() {
  //  Get state (item) from redux store using useSelector
  //  The below code means: from all the available states in the store, get the state from manage
  const myState = useSelector((state: any) => state.manageAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />

        {myState.authorized ? (
          <>
            <Route path="/contactUs" element={<ContactUS />} />
            <Route path="/find" element={<FindStudent />} />
            <Route path="/detail" element={<StuCard />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/list" element={<StuList />} />
            <Route path="/delete" element={<DeleteStu />} />
            <Route path="/update" element={<UpdateStu />} />
          </>
        ) : (
          <>
            <Route path="/contactUs" element={<LoginFirst />} />
            <Route path="/find" element={<LoginFirst />} />
            <Route path="/detail" element={<LoginFirst />} />
            <Route path="/add" element={<LoginFirst />} />
            <Route path="/list" element={<LoginFirst />} />
            <Route path="/delete" element={<LoginFirst />} />
            <Route path="/update" element={<LoginFirst />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App as React.ComponentType;
