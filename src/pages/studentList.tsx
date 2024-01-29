import React, { useState } from "react";

const list = () => {
  const [SIze, setSize] = useState("0");

  return (
    <body className="bg-light">
      {/* position-relative & min-vh-100 was necessary to give, since when no. of students were less, then footer was sticking up. */}
      <div id="main" className="page position-relative min-vh-100">
        <div id="wrapper" className="container">
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <div className="container-fluid ">
                {SIze == "0" ? (
                  <div>
                    <div
                      className="alert alert-warning my-5 d-flex justify-content-center"
                      role="alert"
                    >
                      No Student Information Available!
                    </div>

                    <div className="text-center mb-4">
                      <img
                        src="images/noInfo.svg"
                        className="mx-auto"
                        style={{ height: "350px" }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="card shadow mb-4 mt-5">
                    <div className="card-header py-3">
                      <p className="text-primary m-0 fw-bold d-flex justify-content-center">
                        Student's List
                      </p>
                    </div>
                    <div className="card-body">
                      <div
                        className="table-responsive table mt-2 "
                        id="dataTable"
                        role="grid"
                        aria-describedby="dataTable_info"
                      >
                        <table className="table my-0" id="dataTable2">
                          <thead>
                            <tr>
                              <th>Photo</th>
                              <th>Name</th>
                              <th>Father's Name</th>
                              <th>Phone</th>
                              <th>Gender</th>
                              <th>City</th>
                            </tr>
                          </thead>

                          <tbody>
                            {/* <tr>
                                <td><img className="rounded-circle me-2" width="30" height="30" src="assets/img/avatars/avatar4.jpeg"></td>
                                <td>Software Engineer</td>
                                <td>London</td>
                                <td>41</td>
                                <td>2012/10/13<br></td>
                                <td>$132,000</td>
                            </tr> */}
                          </tbody>

                          <tfoot>
                            <tr></tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default list;
