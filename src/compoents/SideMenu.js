import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const SideMenu = () => {
  return (
    <div>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-product"
          action
        >
          View Products
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-product"
          action
        >
          Add Products
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#"
          action
        >
          About
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="#"
          action
        >
          Contact
        </Link>
      </ListGroup>
    </div>
  );
};

export default SideMenu;
