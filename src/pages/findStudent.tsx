import React, { useState } from "react";

const find= () => {
    const[FOund, setFound]= useState("No");
    
    return (
        <main className="page login-page">
        <section className="clean-block clean-form dark">
            <div className="container">
                <div className="block-heading">
                    
                    ( FOund == "No") ?

                    <div className="alert alert-danger" role="alert">
                        No Such Student Exists!
                    </div>

                    :
                    <div>
                        <h2 className="text-info">Find Student</h2>
                        <img src="images/addStudent.svg" style={{height: "220px"}} />
                    </div>
                    
                </div>

                {/* <!-- In forms, name field is very Important, because it is used in 'req.body.' while connection to database --> */}
                <form action="/findStudent" method="post">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>Name</b></label>
                        <input className="form-control item" type="text" id="name" name="Name" required />
                    </div>

                    <button className="btn btn-primary" type="submit">Find Student</button>
                </form>
            </div>
        </section>
    </main>
    )
}

export default find;