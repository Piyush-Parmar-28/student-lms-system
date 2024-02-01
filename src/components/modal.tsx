import React from "react";
import { Link } from "react-router-dom";

const modal = () => {
  return (
    <div
      className="modal fade "
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              <b>Oops!</b>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">Login or SignUp to continue!</div>

          <div className="modal-footer d-flex justify-content-between">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Login
              </button>
            </Link>

            <Link to="/signUp">
              <button type="button" className="btn btn-primary">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
