import React from "react";
import reactLogo from "./../img/reactsmall.ico";

export default function Navbar(){
    return (
        <nav>
            <img className="imagen" src={reactLogo} alt=""></img>
            <h3 className="facts">ReactFacts</h3>
            <h4 className="navRight">React Course - Project 1</h4>
        </nav>

    );
}