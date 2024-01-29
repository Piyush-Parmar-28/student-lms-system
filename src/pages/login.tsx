import React, { useState } from "react";

const Login = () => {
  const [LOgin, setLogin] = useState("");

  return (
    <main className="page login-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading">
            {LOgin == "Invalid" ? (
              <div className="alert alert-danger" role="alert">
                <p>Invalid Credentials!</p>
              </div>
            ) : (
              <></>
            )}

            {/* <% if(LOgin == "Invalid"){ %>
                        <div className="alert alert-danger" role="alert">
                            Invalid Credentials!
                        </div>
                    <% } %>     */}

            <h2 className="text-info">Log In</h2>
            <p>Log In to continue...</p>
          </div>

          {/* In forms, name field is very Important, because it is used in 'req.body.' while connection to database */}
          <form action="/login" method="post">
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                <b>Email</b>
              </label>
              <input
                className="form-control item"
                type="email"
                id="email"
                name="Email"
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
                id="password"
                name="Password"
                required
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Log In
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
