import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Overview from "./components/Overview";
import Header from "./components/Header";

function App(props: { job: "droit" | "mediation" }) {
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
