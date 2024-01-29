import React, {useState} from "react";

const addStu= () => {
    const[ADDed, setAdded]= useState("No");
    
    return (
        <main className="page login-page">
        <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">

                    (ADDed== "Yes") ?
                        <div className="alert alert-success" role="alert">
                            Student Added Successfully!
                        </div>
                    :
                    <div>
                        <h2 className="text-info">Add Student</h2>
                        <img src="images/addStudent.svg" style={{height: "220px"}} />
                    </div>
                </div>

                {/* <!-- In forms, name field is very Important, because it is used in 'req.body.' while connection to database --> */}
                <form action="/addStudent" method="post">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>Name</b></label>
                        <input className="form-control item" type="text" id="name" name="Name" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>Father's Name</b></label>
                        <input className="form-control item" type="text" id="fname" name="Fname" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="password"><b>Contact No.</b></label>
                        <input className="form-control" type="tel" id="number" name="Number" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>City</b></label>
                        <input className="form-control item" type="name" id="city" name="City" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>Gender: </b></label>

                        <div className="form-check">

                            <input className="form-check-input " type="radio" name="Gender" id="inlineRadio1" value="Male" />
                            
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                          </div>
    
                          <div className="form-check">

                            <input className="form-check-input" type="radio" name="Gender" id="inlineRadio2" value="Female" />

                            <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
    
                        </div>

                    </div>
                    
                    <button className="btn btn-primary" type="submit">Add Student</button>
                </form>
            </div>
        </section>
    </main>
    )
}

export default addStu