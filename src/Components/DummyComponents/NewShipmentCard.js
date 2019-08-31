import React from "react";

const NewShipmentCard = props => {
  return (
    <>
      <li className="treeview" onClick={props.onClick}>
        <a href="#">
          <i className="fa fa-edit" /> <span>Add Shipment</span>
        </a>
      </li>
    </>
  );
};

export default NewShipmentCard;
