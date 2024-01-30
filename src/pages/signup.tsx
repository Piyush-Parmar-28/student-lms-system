import React, { Fragment } from "react";
import { useState } from "react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import Alert from "../components/alert.tsx";

const Signup = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: "",
    email: "",
    pass: "",
    phone: 0
  });

  const [status, setStatus] = useState(0);

  const handleInput = (event: any) => {
    setSignUpInfo({ ...signUpInfo, [event.target.name]: event.target.value });
  };

  const postData = async (event: any) => {
    event.preventDefault();

    const { name, email, pass, phone } = signUpInfo;

    const res = await fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        pass,
        phone
      }),
    });

    const data = await res.json();
    setStatus(data.status);
  };

  return (
    <div>
      <Navbar />

      <main className="page registration-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">

            {status == 200 ? (
                <Alert color="success" msg="Record Inserted Successfully!" />
              ) : status == 400 ? (
                <Alert color="danger" msg="Record could not be inserted. Try Again!" />
              ) : (
                <Fragment></Fragment>
              )}

              <h2 className="text-info">Sign Up</h2>
              <p>Sign Up to proceed...</p>
            </div>

            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  <b>Name</b>
                </label>
                <input
                  className="form-control item"
                  type="text"
                  name="name"
                  value={signUpInfo.name}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  className="form-control item"
                  type="email"
                  name="email"
                  value={signUpInfo.email}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  className="form-control item"
                  type="password"
                  name="pass"
                  value={signUpInfo.pass}
                  onChange={handleInput}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="phone">
                  <b>Phone Number</b>
                </label>
                <input
                  className="form-control item"
                  type="tel"
                  name="phone"
                  value={signUpInfo.phone}
                  onChange={handleInput}
                />
              </div>

              <button className="btn btn-primary" type="submit" onClick={postData}>
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Signup;
