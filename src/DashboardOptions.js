import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVoteYea,
  faPoll,
  faUsersCog,
  faCube,
  faCog,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./DashboardOptions.css";

export default function DashboardOptions() {
  const handleNavigation = (path) => {
    window.location.href = path; // navigate to the given path
  };

  return (
    <div className="dashboard-options">
      <div className="dashboard-option" onClick={() => handleNavigation("/")}>
        <FontAwesomeIcon icon={faVoteYea} size="2x" color="#5CC8FF" />
        <span>Election</span>
      </div>
      <div className="dashboard-option" onClick={() => handleNavigation("/")}>
        <FontAwesomeIcon icon={faPoll} size="2x" color="#FFC65C" />
        <span>Poll</span>
      </div>
      <div className="dashboard-option" onClick={() => handleNavigation("/")}>
        <FontAwesomeIcon icon={faUsersCog} size="2x" color="#FF5C5C" />
        <span>User Management</span>
      </div>
      <div className="dashboard-option" onClick={() => handleNavigation("/")}>
        <FontAwesomeIcon icon={faCube} size="2x" color="#5CFFA3" />
        <span>Blockchain Explorer</span>
      </div>
      <div className="dashboard-option" onClick={() => handleNavigation("/")}>
        <FontAwesomeIcon icon={faCog} size="2x" color="#FFC65C" />
        <span>Settings</span>
      </div>
      <div className="dashboard-option" onClick={() => handleNavigation("/")}>
        <FontAwesomeIcon
          icon={faQuestionCircle}
          size="2x"
          color="#5CC8FF"
        />
        <span>Help</span>
      </div>
    </div>
  );
}
