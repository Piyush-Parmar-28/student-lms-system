import React, { useState } from "react";

import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import MenuCard from "../components/menuCard.tsx";
import Heading from "../components/heading.tsx";
import FeatureCard from "../components/featureCard.tsx";

const Home = () => {
  const [ACCess, setAccess] = useState("No");

  const bg1 = "../assets/images/addStudent_HomePage.svg";
  const bg2 = "../assets/images/deleteStudent.svg";
  const bg3 = "../assets/images/findStudent.svg";
  const bg4 = "../assets/images/updateStudent.svg";
  const bg = `url(${bg1})`;

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

        {/* <!-- Modal --> */}
        <div
          className="modal fade "
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <b>Oops!</b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">Login or SignUp to continue!</div>

              <div className="modal-footer d-flex justify-content-between">
                <a href="/login">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Login
                  </button>
                </a>

                <a href="/signUp">
                  <button type="button" className="btn btn-primary">
                    SignUp
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Menu Block --> */}
        <section className="clean-block bg-light features">
          <div className="container">
            <Heading
              heading="Menu"
              desc="Find various options to perform here!"
            />

            <div className="row text-center">
              <MenuCard access="No" imgLink={bg1} btnName="Add Student" />

              <MenuCard access="No" imgLink={bg3} btnName="Find Student" />

              <MenuCard access="No" imgLink={bg4} btnName="Students List" />

              <MenuCard access="No" imgLink={bg2} btnName="Delete Student" />
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
