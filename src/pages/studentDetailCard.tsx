import React, { useState } from "react";

const Card = (props : any) => {
  const imgLink1= "../assets/images/maleAvatar.svg"
  const imgLink2= "../assets/images/femaleAvatar.svg"

  const [STAtus, setStatus] = useState("");

  return (
    <main className="page login-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading">
            {STAtus == "Updated" ? (
              <div className="alert alert-success" role="alert">
                Student Updated Successfully!
              </div>
            ) : (
              <></>
            )}

            <h2 className="text-info">Student Detail</h2>
            <img src={props.stuData.gender == 0 ? imgLink2 : imgLink1} style={{ height: "220px" }} />
          </div>

          <form action="/updateStudentDetails" method="post">
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Name: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {props.stuData.name}
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Father's Name: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {props.stuData.fname}
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Phone: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {props.stuData.phone}
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>City: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {props.stuData.city}
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Gender: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {props.stuData.gender == 0 ? "Female" : "Male"}
              </label>
            </div>

            <button className="btn btn-warning" type="submit">
              Update Details
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Card;
