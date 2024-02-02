import React, { useState, Fragment } from "react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import Alert from "../components/alert.tsx";
import StuCard from "./studentDetailCard.tsx";

const FindStudent = () => {
  const imgLink = "../assets/images/addStudent.svg";
  const [user, setUser] = useState("");
  const [status, setStatus] = useState(0);
  const [stuData, setStuData] = useState({});

  const handleInput = (event: any) => {
    setUser(event.target.value);
  };

  const postData = async (event: any) => {
    event.preventDefault();

    const res = await fetch("/find", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
      }),
    });

    const data = await res.json();
    setStatus(data.status);
    setStuData({...stuData, ...data.stuData})
  };

  return (
    <div>
      <Navbar></Navbar>

      <main className="page login-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            {status == 200 ? (
              <StuCard 
                stuData= {stuData}
              />
            ) : (
              <div>
                {status == 404 ? (
                  <Alert
                    color="danger"
                    msg="No Such Student Found. Try Again!"
                  />
                ) : (
                  <Fragment></Fragment>
                )}

                <div className="block-heading">
                  <h2 className="text-info">Find Student</h2>
                  <img src={imgLink} style={{ height: "220px" }} />
                </div>

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
                      value={user}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={postData}
                  >
                    Find Student
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default FindStudent;
