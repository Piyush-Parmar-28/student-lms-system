import React, { useState } from "react";

const deleteStu= () => {
    const[DEleted, setDeleted]= useState("No");

    return (
        <main className="page login-page">
        <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">

                    (DEleted == "Yes") ? 
                        <div className="alert alert-success" role="alert">
                            Student Deleted Successfully!
                        </div>
                    :
                    (DEleted == "No Data") ?

                        <div className="alert alert-danger" role="alert">
                            No Such Student Exists!
                        </div>
                    :
                    <div>
                        <h2 className="text-info">Delete Student</h2>
                        <img src="images/addStudent.svg" style={{height: "220px"}} />
                    </div>
                    
                </div>

                {/* <!-- In forms, name field is very Important, because it is used in 'req.body.' while connection to database --> */}
                <form action="/deleteSTUDENT" method="post">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>Name</b></label>
                        <input className="form-control item" type="text" id="name" name="Name" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>Father's Name</b></label>
                        <input className="form-control item" type="text" id="fname" name="Fname" required />
                    </div>

                    <button className="btn btn-danger" type="submit">Delete Student</button>
                </form>

                {/* <!-- ERROR HRE -->
                <!-- This will delete the student, whose exact names have been typed... -->
                <!-- If Captital & Small letters are not written in exact order, then it won't delete the student!!!! --> */}

            </div>
        </section>
    </main>
    )
}

export default deleteStu;