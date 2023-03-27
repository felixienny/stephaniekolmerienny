import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Overview from "./components/Overview";
import melkor_mediation from "./melkor_mediation.png";
import melkor_droit from "./melkor_droit.png";

function App() {
  const [job, setJob] = useState("avocat");

  function switchJob(job: string) {
    if (job === "avocat" || job === "mediateur") {
      setJob(job);
      return;
    }
    return;
  }

  window.onscroll = function () {
    const header: any = document.querySelector(".header");
    const logo: any = document.querySelector(".navbar-logo");

    if (!header || !logo) return;

    if (window.pageYOffset > 600) return;

    header.style.height = 800 - window.pageYOffset + "px";
    logo.style.height = 750 - window.pageYOffset + "px";
  };

  return (
    <div className="App ">
      <div className="my-2">
        <div className="fixed-top header">
          <ul className="nav pt-2 justify-content-center">
            <li className="nav-item">
              <button
                className={`nav-link ${
                  job === "avocat" && "active"
                } button-avocat`}
                onClick={() => {
                  switchJob("avocat");
                }}
              >
                Avocate
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  job === "mediateur" && "active"
                } button-mediateur`}
                onClick={() => {
                  switchJob("mediateur");
                }}
              >
                Médiatrice
              </button>
            </li>
          </ul>

          <img
            height="750"
            className="navbar-logo mx-auto d-block"
            src={job === "avocat" ? melkor_droit : melkor_mediation}
            alt=""
          />
        </div>

        <div className="container content">
          <div className="p-4">
            <Overview job={job} />
          </div>
          <div className="p-4">
            <About />
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
}

export default App;
