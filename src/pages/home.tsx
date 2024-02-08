import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import MenuCard from "../components/menuCard.tsx";
import Heading from "../components/heading.tsx";
import FeatureCard from "../components/featureCard.tsx";
import Modal from "../components/modal.tsx";
import { useSelector } from "react-redux";

const Home = () => {
  const [access, setAccess] = useState("Yes");

  const img1 = "../assets/images/addStudent_HomePage.svg";
  const img2 = "../assets/images/deleteStudent.svg";
  const img3 = "../assets/images/findStudent.svg";
  const img4 = "../assets/images/updateStudent.svg";
  const bg = `url(${img1})`;

  const myState = useSelector((state: any) => state.manageAuth);
  console.log("myState2: ", myState);

  return (
    <div>
      <Navbar />

      <div className="page landing-page">
        <section
          className="clean-block clean-hero"
          style={{
            backgroundImage: bg,
            color: "rgba(9, 162, 255, 0.85)",
          }}
        >
          <div className="text">
            <h1>sManager</h1>
            <p>An easy-to-use Student Database Management System.</p>
            <a href="#features">
              <button className="btn btn-outline-light btn-lg" type="button">
                Features
              </button>
            </a>
          </div>
        </section>

        <Modal />

        {/* <!-- Menu Block --> */}
        <section className="clean-block bg-light features">
          <div className="container">
            <Heading
              heading="Menu"
              desc="Find various options to perform here!"
            />

            <div className="row text-center">
              <MenuCard access="Yes" btnLink= "/add" imgLink={img1} btnName="Add Student" />

              <MenuCard access="Yes" btnLink= "/find" imgLink={img3} btnName="Find Student" />

              <MenuCard access="Yes" btnLink= "/list" imgLink={img4} btnName="Students List" />

              <MenuCard access="Yes" btnLink= "/delete" imgLink={img2} btnName="Delete Student" />
            </div>
          </div>
        </section>

        {/* <!-- features Block --> */}
        <section className="clean-block features" id="features">
          <div className="container">
            <Heading
              heading="Features"
              desc="Check out the amazing features of this Student Database Management System"
            />

            <div className="row justify-content-center">
              <FeatureCard
                heading="Add"
                desc="Add a Student with extreme ease!"
              />

              <FeatureCard
                heading="Update"
                desc="Update details of any Student with just a few clicks!"
              />

              <FeatureCard
                heading="Find"
                desc="Find any Student Information entered in the Database!"
              />

              <FeatureCard
                heading="Delete"
                desc="Easily delete any Student Information available in the Database!"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
