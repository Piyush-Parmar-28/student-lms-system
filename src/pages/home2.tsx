import React, { useState } from "react";

import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
const Home = () => {
  const [ACCess, setAccess] = useState("No");
  const bg= require("../images/addStudent_HomePage.svg")

  return (
    <div>
      <Navbar />          
      <Footer />
    </div>
  );
};

export default Home;
