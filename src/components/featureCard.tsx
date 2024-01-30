import React from "react";

const featureCard = (props : any) => {
  return (
    <div className="col-md-5 feature-box">
      <i className="icon-plus icon"></i>
      <h4>{props.heading}</h4>
      <p>{props.desc}</p>
    </div>
  );
};

export default featureCard;
