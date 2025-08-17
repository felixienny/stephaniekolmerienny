import React from "react";
import { NavLink } from "react-router-dom";

function Header(props: { job: "droit" | "mediation" }) {
  return (
    <div className="fixed-top header">
      <ul className="nav pt-2 justify-content-center">
        <li className="nav-item">
          <NavLink to="/droit" className={`nav-link button-avocat`}>
            Avocat
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/mediation" className={`nav-link button-mediateur`}>
            Médiatrice
          </NavLink>
        </li>
      </ul>

      <img
        height="750"
        className="navbar-logo mx-auto d-block"
        src={
          props.job === "droit" ? "/melkor_droit.png" : "/melkor_meditation.png"
        }
        alt=""
      />
    </div>
  );
}

export default Header;
