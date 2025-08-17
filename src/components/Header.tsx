import React from 'react';

function Header(props: { job: 'droit' | 'mediation' }) {
  return (
    <div className="fixed-top header">
      <ul className="nav pt-2 justify-content-center">
        <li className="nav-item">
          <a href="?job=droit" className="nav-link button-avocat">
            Avocat
          </a>
        </li>
        <li className="nav-item">
          <a href="?job=mediation" className="nav-link button-mediateur">
            Médiatrice
          </a>
        </li>
      </ul>

      <img
        height="750"
        className="navbar-logo mx-auto d-block"
        src={
          props.job === 'droit' ? '/melkor_droit.png' : '/melkor_meditation.png'
        }
        alt=""
      />
    </div>
  );
}

export default Header;
