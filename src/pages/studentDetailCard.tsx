import React, { useState } from "react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import { useLocation, useNavigate } from "react-router-dom";

const Card = (props: any) => {
  const navigate = useNavigate();
  const location= useLocation();
  const data = location.state;
  
  const handleRedirect = () => {
    navigate("/update", { state: { ...data.stuData } });
  };
  
  const imgLink1 = "../assets/images/maleAvatar.svg";
  const imgLink2 = "../assets/images/femaleAvatar.svg";

  return (
    <div>
      <Navbar></Navbar>

      <main className="page login-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Student Detail</h2>
              <img
                src={data.stuData.gender == 0 ? imgLink2 : imgLink1}
                style={{ height: "220px" }}
              />
            </div>

            <form action="/updateStudentDetails" method="post">
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  <b>Name: </b>
                </label>
                <label className="form-label" htmlFor="email">
                  {data.stuData.name}
                </label>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  <b>Father's Name: </b>
                </label>
                <label className="form-label" htmlFor="email">
                  {data.stuData.fname}
                </label>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  <b>Phone: </b>
                </label>
                <label className="form-label" htmlFor="email">
                  {data.stuData.phone}
                </label>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  <b>City: </b>
                </label>
                <label className="form-label" htmlFor="email">
                  {data.stuData.city}
                </label>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  <b>Gender: </b>
                </label>
                <label className="form-label" htmlFor="email">
                  {data.stuData.gender == 0 ? "Female" : "Male"}
                </label>
              </div>

              <button className="btn btn-warning" type="submit" onClick={handleRedirect}>
                Update Details
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Card;
