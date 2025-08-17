import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Overview from "./components/Overview";
import Header from "./components/Header";

function App(props: { job: "droit" | "mediation" }) {
  window.onscroll = function () {
    const header: any = document.querySelector(".header");
    const logo: any = document.querySelector(".navbar-logo");

    if (!header || !logo) return;

    if (window.pageYOffset > 600) return;

    header.style.height = 800 - window.pageYOffset + "px";
    logo.style.height = 750 - window.pageYOffset + "px";
  };

  return (
    <div className="App">
      <div className="my-2">
        <Header job={props.job} />
        <div className="container content">
          <Overview job={props.job} />
          <About />
        </div>

        <Contact />
      </div>
    </div>
  );
}

export default App;
