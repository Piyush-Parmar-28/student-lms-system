import React from "react";
import {Link} from 'react-router-dom'

const menuCard = (props : any) => {
  return (
    <div className="col-lg-3 col-sm-6 col-12 p-4">
      <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3">
        <div className="d-flex features-icons-icon">
          <img
            src={props.imgLink}
            style={{
              height: "120px",
            }}
            className="mx-auto my-lg-2 my-0"
            alt="My Happy SVG"
          />
        </div>
        
        {
          (props.access == "No") ?
          
          <button
            type="button"
            className="btn btn-primary mt-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            {props.btnName}
          </button>
          :
          <Link to={props.btnLink}>
            <button type="button" className="btn btn-primary mt-1">
              {props.btnName}
            </button>
          </Link>
        }

      </div>
    </div>
  );
};

export default menuCard;
