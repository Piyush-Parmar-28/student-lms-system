import React, { useState } from "react";

import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
const Home = () => {
  const [ACCess, setAccess] = useState("No");
  const bg= require("../images/addStudent_HomePage.svg")

  return (
    <div>
      <Navbar />

      <div className="page landing-page">
        <section
          className="clean-block clean-hero"
          
          style={{
            backgroundImage: `url(${'../assets/img/tech/image4.jpg'})`,
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
            <div className="block-heading">
              <h2 className="text-info">Menu</h2>
              <p>Find various options to perform here!</p>
            </div>

            <div className="row text-center">
              <div className="col-lg-3 col-sm-6 col-12 p-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <img

                      src={bg}
                      className="mx-auto my-lg-2 my-0"
                      alt="My Happy SVG"
                      style={{ height: "120px" }}
                    />
                  </div>
                  {/* <!-- Modal Trigger Button --> */}
                  (ACCess == "No") ?
                  <button
                    type="button"
                    className="btn btn-primary mt-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add Student
                  </button>
                  :
                  <a href="/addStudent">
                    <button type="button" className="btn btn-primary mt-1">
                      Add Student
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12 p-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <img
                      src="../images/findStudent.svg"
                      className="mx-auto my-lg-2 my-0"
                      alt="My Happy SVG"
                      style={{ height: "120px" }}
                    />
                  </div>
                  {/* <!-- Modal Trigger Button --> */}
                  (ACCess == "No") ?
                  <button
                    type="button"
                    className="btn btn-primary mt-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Find Student
                  </button>
                  :
                  <a href="/findStudent">
                    <button type="button" className="btn btn-primary mt-1">
                      Find Student
                    </button>
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12 p-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <img
                      src="../images/updateStudent.svg"
                      className="mx-auto my-lg-2 my-0"
                      alt="My Happy SVG"
                      style={{ height: "120px" }}
                    />
                  </div>
                  {/* <!-- Modal Trigger Button --> */}
                  (ACCess == "No") ?
                  <button
                    type="button"
                    className="btn btn-primary mt-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Students List
                  </button>
                  :
                  <a href="/studentList">
                    <button type="button" className="btn btn-primary mt-1">
                      Students List
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12 p-4">
                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
                  <div className="d-flex features-icons-icon">
                    <img
                      src="../images/deleteStudent.svg"
                      className="mx-auto my-lg-2 my-0"
                      alt="My Happy SVG"
                      style={{ height: "120px" }}
                    />
                  </div>
                  {/* <!-- Modal Trigger Button --> */}
                  (ACCess == "No") ?
                  <button
                    type="button"
                    className="btn btn-primary mt-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Delete Student
                  </button>
                  :
                  <a href="/deleteStudent">
                    <button type="button" className="btn btn-primary mt-1">
                      Delete Student
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- features Block --> */}
        <section className="clean-block features" id="features">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Features</h2>
              <p>
                Check out the amazing features of this Student Database Management
                System
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 feature-box">
                <i className="icon-plus icon"></i>
                <h4>Add</h4>
                <p>Add a Student with extreme ease!</p>
              </div>
              <div className="col-md-5 feature-box">
                <i className="icon-refresh icon"></i>
                <h4>Update</h4>
                <p>Update details of any Student with just a few clicks!</p>
              </div>
              <div className="col-md-5 feature-box">
                <i className="icon-magnifier icon"></i>
                <h4>Find</h4>
                <p>Find any Student Information entered in the Database!</p>
              </div>
              <div className="col-md-5 feature-box">
                <i className="icon-trash icon"></i>
                <h4>Delete</h4>
                <p>
                  Easily delete any Student Information available in the Database!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
          
      <Footer />
    </div>
  );
};

export default Home;
