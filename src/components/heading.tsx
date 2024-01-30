import React from "react";

const heading = (props : any) => {
  return (
    <div className="block-heading">
      <h2 className="text-info">{props.heading}</h2>
      <p>
        {props.desc}
      </p>
    </div>
  );
};

export default heading;
