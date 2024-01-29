import React, { useState } from "react";

const addDetails= () => {
    const[GEnder, setGender]= useState("Male");

    return (
        <main className="page login-page">
        <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">

                    <h2 className="text-info">Update Student Info</h2>
                    <img src="images/addStudent.svg" style={{height: "220px"}} />
                </div>
                
                {/* <!-- In forms, name field is very Important, because it is used in 'req.body.' while connection to database --> */}
                <form action="/addNewDetails" method="post">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>Name</b></label>
                        <input className="form-control item" type="text" id="name" name="Name" value="<%= NAme %>" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>Father's Name</b></label>
                        <input className="form-control item" type="text" id="fname" name="Fname" value="<%= Fname %>" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="password"><b>Contact No.</b></label>
                        
                        <input className="form-control item" type="tel" id="number" name="Number" value="<%= PHOne %>" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>City</b></label>

                        <input className="form-control item" type="name" id="city" name="City" value="<%= CIty %>" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>Gender: </b></label>

                        <div className="form-check">
                            
                            <input className="form-check-input" type="radio" name="Gender" id="inlineRadio1" value="Male" />

                            <label className="form-check-label" htmlFor="inlineRadio1" >Male</label>

                            (GEnder == "Male") ?
                                <script>
                                    maleBtn= document.getElementById("inlineRadio1");
                                    maleBtn.checked= true;
                                </script>
                            :
                            <p></p>

                        </div>
    
                        <div className="form-check">

                            <input className="form-check-input" type="radio" name="Gender" id="inlineRadio2" value="Female" />

                            <label className="form-check-label" htmlFor="inlineRadio1">Female</label>

                            (GEnder == "Female") ?
                                <script>
                                    femaleBtn= document.getElementById("inlineRadio2");
                                    femaleBtn.checked= true;
                                </script>
                                
                            :
                            <p></p>
                        </div>

                    </div>
                    
                    <button className="btn btn-primary" type="submit">Update</button>
                </form>
            </div>
        </section>
    </main>
    )
}

export default addDetails