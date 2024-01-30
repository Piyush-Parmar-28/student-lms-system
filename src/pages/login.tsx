import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

const Login = () => {
  const[loginInfo, setLoginInfo] = useState({
    email: "",
    pass: ""
  })

  const [LOgin, setLogin] = useState("");

  const handleInput= (event : any) =>{
    setLoginInfo({...loginInfo, [event.target.name] : event.target.value})
  }

  const postData= async (event : any) => {
    event.preventDefault();

    console.log('========Here=====');

    var res= await axios.post('/login', loginInfo);
    
    console.log(res);
    console.log('====================================');
  }

  return (
    <div>
      <Navbar />

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

              <button className="btn btn-primary" type="submit" onClick={postData}>
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
