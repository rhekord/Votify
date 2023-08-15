import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
      <img src={require('./icon.png')} alt="Votify logo" />
      </div>
      <ul className="menu">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} color="white" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} color="white" />
            <span>Dashboard</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
