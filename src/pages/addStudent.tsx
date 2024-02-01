import React, { Fragment, useState } from "react";
import Alert from "../components/alert.tsx";

const AddStu = () => {
  const img1 = "../assets/images/addStudent.svg";
  const [status, setStatus] = useState(0);

  const [stuInfo, setStuInfo] = useState({
    name: "",
    fname: "",
    city: "",
    phone: 0,
    gender: 0,
  });

  const handleInput = (event: any) => {
    setStuInfo({ ...stuInfo, [event.target.name]: event.target.value });
  };

  const postData = async (event: any) => {
    event.preventDefault();
    console.log(stuInfo);

    const { name, fname, city, phone, gender } = stuInfo;

    const res = await fetch("/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        fname,
        city,
        phone,
        gender,
      }),
    });

    const data = await res.json();
    setStatus(data.status);
  };

  return (
    <main className="page login-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading">
            {status == 200 ? (
              <Alert color="success" msg="Student Added Successfully!" />
            ) : (
              <Fragment></Fragment>
            )}

            <div>
              <h2 className="text-info">Add Student</h2>
              <img src={img1} style={{ height: "220px" }} />
            </div>
          </div>

          {/* <!-- In forms, name field is very Important, because it is used in 'req.body.' while connection to database --> */}
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Name</b>
              </label>
              <input
                className="form-control item"
                type="text"
                id="name"
                name="name"
                value={stuInfo.name}
                onChange={handleInput}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Father's Name</b>
              </label>
              <input
                className="form-control item"
                type="text"
                id="fname"
                name="fname"
                value={stuInfo.fname}
                onChange={handleInput}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                <b>Contact No.</b>
              </label>
              <input
                className="form-control"
                type="tel"
                id="number"
                name="phone"
                value={stuInfo.phone == 0 ? "" : stuInfo.phone}
                onChange={handleInput}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>City</b>
              </label>
              <input
                className="form-control item"
                type="name"
                id="city"
                name="city"
                value={stuInfo.city}
                onChange={handleInput}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Gender: </b>
              </label>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio1"
                  value={1}
                  onChange={handleInput}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Male
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio2"
                  value={0}
                  onChange={handleInput}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Female
                </label>
              </div>

            </div>

            <button
              className="btn btn-primary"
              type="submit"
              onClick={postData}
            >
              Add Student
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddStu;
