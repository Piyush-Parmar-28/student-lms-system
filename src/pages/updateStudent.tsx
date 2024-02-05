import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import Alert from "../components/alert.tsx";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

const UpdateStu = () => {
  const location = useLocation();
  const data = location.state;

  // console.log("update data: ", data);

  const img0 = "../assets/images/femaleAvatar.svg";
  const img1 = "../assets/images/maleAvatar.svg";

  const [status, setStatus] = useState(0);

  const [stuInfo, setStuInfo] = useState({
    id: data._id,
    name: data.name,
    fname: data.fname,
    city: data.city,
    phone: data.phone,
    gender: data.gender,
  });

  const handleInput = (event: any) => {
    setStuInfo({ ...stuInfo, [event.target.name]: event.target.value });
  };

  const postData = async (event: any) => {
    event.preventDefault();
    const { id, name, fname, city, phone, gender } = stuInfo;

    const res = await fetch("/update", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
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
    <div>
      <Navbar></Navbar>

      <main className="page login-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              {status == 200 ? (
                <Alert color="success" msg="Student Updated Successfully!" />
              ) : status == 400 ? (
                <Alert color="danger" msg="Update Unsuccessuful. Try Again!" />
              ) : (
                <Fragment></Fragment>
              )}

              <div>
                <h2 className="text-info">Update Student</h2>
                <img src={stuInfo.gender == 0 ? img0 : img1} style={{ height: "220px" }} />
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
                    checked={stuInfo.gender == 1}
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
                    checked={stuInfo.gender == 0}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>

              <button
                className="btn btn-warning"
                type="submit"
                onClick={postData}
              >
                Update Student
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default UpdateStu;
