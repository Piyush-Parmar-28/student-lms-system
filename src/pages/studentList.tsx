import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar.tsx";
import Footer from "../components/footer.tsx";
import Alert from "../components/alert.tsx";
import StuTableRow from "../components/stuTableRow.tsx";

const List = () => {
  const img1 = "../assets/images/noInfo.svg";
  const maleImg = "../assets/images/maleAvatar.svg";
  const femaleImg = "../assets/images/femaleAvatar.svg";

  const [status, setStatus] = useState(0);
  const [stuData, setStuData] = useState<any[]>([]);

  useEffect(() => {
    const getRes = async () => {
      const res = await fetch("/getstu", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      const studentData= data.stuData;
      console.log("data is: ", studentData);

      setStatus(data.status);
      setStuData( studentData );
    };

    getRes();
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <body className="bg-light mt-5">
        <div id="main" className="page position-relative min-vh-100">
          <div id="wrapper" className="container">
            <div className="d-flex flex-column" id="content-wrapper">
              <div id="content">
                <div className="container-fluid ">
                  {status == 404 ? (
                    <div>
                      <Alert
                        color="warning"
                        msg="No Student Information Available!"
                      />

                      <div className="text-center mb-4">
                        <img
                          src={img1}
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
                              {
                                stuData.map( (content) => {
                                  return (
                                    <StuTableRow 
                                      name= {content.name}
                                      fname= {content.fname}
                                      phone= {content.phone}
                                      city= {content.city}
                                      gender= {content.gender == 0 ? "Female" : "Male"}
                                      imgLink= {content.gender == 0 ? femaleImg: maleImg}
                                    /> 
                                  )
                                } )
                              }
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

      <Footer></Footer>
    </div>
  );
};

export default List;
