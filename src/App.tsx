import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Overview from "./components/Overview";
import Header from "./components/Header";

function App(props: { job: "droit" | "mediation" }) {
    // const maxHeight = window.innerHeight * 0.7;
    // const minHeight = 80;
    // window.onscroll = function () {
    //     const header = document.querySelector(".header") as HTMLElement;
    //     const logo = document.querySelector(".navbar-logo") as HTMLElement;
    //     const scrollY = window.scrollY;
    //     const newHeight = Math.max(minHeight, maxHeight - scrollY);

    //     header.style.height = newHeight + 'px';
    //     // logo.style.height = newHeight + 'px';
    // };

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
