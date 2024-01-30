import React from "react";

const alert = (props: any) => {
  const myClass = `alert alert-${props.color}`;

  return (
    <div className={myClass} role="alert">
      {props.msg}
    </div>
  );
};

export default alert;
