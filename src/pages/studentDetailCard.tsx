import React, { useState } from "react";

const card = () => {
  const [STAtus, setStatus] = useState("");
  const [Sname, setSname] = useState("");
  const [Fname, setFname] = useState("");
  const [PHone, setPhone] = useState("");
  const [CIty, setCity] = useState("");
  const [GEnder, setGender] = useState("");

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
            <img src="images/<%=AVAtar%>.svg" style={{ height: "220px" }} />
          </div>

          {/* In forms, name field is very Important, because it is used in 'req.body.' while connection to database */}
          <form action="/updateStudentDetails" method="post">
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Name: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {Sname}
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Father's Name: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {Fname}
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Phone: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {PHone}
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>City: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {CIty}
              </label>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Gender: </b>
              </label>
              <label className="form-label" htmlFor="email">
                {GEnder}
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

export default card;
