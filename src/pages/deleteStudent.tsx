import React, { Fragment, useState } from "react";
import Alert from "../components/alert.tsx";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";

const DeleteStu = () => {
  const img1 = "../assets/images/addStudent.svg";
  const [stuInfo, setStuInfo] = useState({
    name: "",
    fname: ""
  });
  const [status, setStatus] = useState(0);

  const handleInput = (event: any) => {
    setStuInfo({ ...stuInfo, [event.target.name]: event.target.value });
  };

  const postData = async (event: any) => {
    event.preventDefault();

    //  Using object destructuring for: const email= loginInfo.email
    const { name, fname } = stuInfo;

    const res = await fetch("/del", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        fname,
      }),
    });

    const data = await res.json();
    console.log("data: ", data);
    
    setStatus(data.status);
  };

  return (
    <div>
      <Navbar></Navbar>

      <main className="page login-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
  
              {
                status == 200 ? (
                  <Alert
                    color= "success"
                    msg= "Student Deleted Successfully!"
                  />
                )
                :
                status == 404 ? (
                  <Alert
                    color= "danger"
                    msg= "No Such Student Exists!"
                  />
                )
                :
                <Fragment />
              }
              <div>
                <h2 className="text-info">Delete Student</h2>
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
  
              <button className="btn btn-danger" type="submit" onClick={postData}>
                Delete Student
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default DeleteStu;
