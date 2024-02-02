import React from "react";

const StuTableRow = (props: any) => {
  return (
    <tr>
      <td>
        <img
          className="rounded-circle me-2"
          width="30"
          height="30"
          src={props.imgLink}
        />
      </td>
      <td>{props.name}</td>
      <td>{props.fname}</td>
      <td>{props.phone}</td>
      <td>{props.gender}</td>
      <td>{props.city}</td>
    </tr>
  );
};

export default StuTableRow;
