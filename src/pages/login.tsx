import React, { Fragment, useState } from "react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import Alert from "../components/alert.tsx";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    pass: "",
  });

  const [status, setStatus] = useState(0);

  const handleInput = (event: any) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  };

  const postData = async (event: any) => {
    event.preventDefault();

    //  Using object destructuring for: const email= loginInfo.email
    const { email, pass } = loginInfo;

    const res = await fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      // Since our backend will not understand JSON data & hence we must convert to string
      //  This string will be sent as 'body' to server
      body: JSON.stringify({
        //  Using object destructuring for: email: email, pass: pass
        email,
        pass,
      }),
    });

    const data = await res.json();
    setStatus(data.status);
  };

  return (
    <div>
      <Navbar />
      
      <main className="page login-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">

              {status == 200 ? (
                <Alert color="success" msg="User Authenticated Successfully!" />
              ) : status == 404 ? (
                <Alert color="danger" msg="Invalid Credentials. Try Again!" />
              ) : (
                <Fragment></Fragment>
              )}

              <h2 className="text-info">Log In</h2>
              <p>Log In to continue...</p>
            </div>

            {/* In forms, name field is very Important, because it is used in 'req.body.' while connection to database */}
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  <b>Email</b>
                </label>
                <input
                  className="form-control item"
                  type="email"
                  name="email"
                  value={loginInfo.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  <b>Password</b>
                </label>
                <input
                  className="form-control"
                  type="password"
                  name="pass"
                  value={loginInfo.pass}
                  onChange={handleInput}
                  required
                />
              </div>

              <button
                className="btn btn-primary"
                type="submit"
                onClick={postData}
              >
                Log In
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
