import React, { useState } from "react";

const FindStudent = () => {
  const [user, setUser] = useState("");
  const [status, setStatus] = useState(0);

  const handleInput = (event: any) => {
    setUser(event.target.value);
  };

  const postData = async (event: any) => {
    event.preventDefault();

    const res = await fetch("/login", {
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
  };

  return (
    <main className="page login-page">
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading">
            {status == 404 ? (
              <div className="alert alert-danger" role="alert">
                No Such Student Exists!
              </div>
            ) : (
              <div>
                <h2 className="text-info">Find Student</h2>
                <img src="images/addStudent.svg" style={{ height: "220px" }} />
              </div>
            )}
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
                name="Name"
                value={user}
                onChange={handleInput}
                required
              />
            </div>

            <button className="btn btn-primary" type="submit" onClick={postData}>
              Find Student
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FindStudent;
