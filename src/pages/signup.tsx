import React from "react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

const Signup = () => {
  return (
    <div>
      <Navbar />

      <main className="page registration-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Sign Up</h2>
              <p>Sign Up to proceed...</p>
            </div>

            {/* <!-- In forms, name filed is very Important, because it is used in 'req.body.' while connecting to database --> */}
            <form action="/signUp" method="post">
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  <b>Name</b>
                </label>
                <input
                  className="form-control item"
                  type="text"
                  id="name"
                  name="Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  className="form-control item"
                  type="email"
                  id="email"
                  name="Email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  className="form-control item"
                  type="password"
                  id="password"
                  name="Password"
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="phone">
                  <b>Phone Number</b>
                </label>
                <input
                  className="form-control item"
                  type="tel"
                  id="phone"
                  name="Phone"
                />
              </div>

              <button className="btn btn-primary" type="submit">
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
