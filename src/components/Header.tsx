import React from 'react';

function Header(props: { job: 'droit' | 'mediation' }) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src={props.job === 'droit' ? '/melkor_droit.png' : '/melkor_mediation.png'}
            alt="Logo"
            className="img-fluid"
          />
        </a>

        {/* Bouton mobile à droite */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu de navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav gap-3 text-center">
            <li className="nav-item">
              <a
                href="/?job=droit"
                className={`btn ${
                  props.job === 'droit' ? 'btn-selected' : ''
                }`}
              >
                Avocat
              </a>
            </li>

            <li className="nav-item">
              <a
                href="/?job=mediation"
                className={`btn ${
                  props.job === 'mediation' ? 'btn-selected' : ''
                }`}
              >
                Médiatrice
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
