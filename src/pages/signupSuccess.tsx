import React from "react";

const signupSucc = () => {
  return (
    <main className="page login-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading">
            <div className="alert alert-success h-auto" role="alert">
              SignUp Successful!
              <br />
              <b>Welcome</b>
            </div>

            <div className="text-center mb-2 mt-2 ">
              <img
                src="images/welcome.svg"
                className="mx-auto pb-2"
                style={{ height: "300px" }}
              />
            </div>

            <a href="/" className="my-4">
              <button className="btn btn-primary " type="submit">
                Home Page
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default signupSucc;
