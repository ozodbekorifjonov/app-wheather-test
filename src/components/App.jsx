import React from "react";
import "../styles/index.scss";
import Recipes from "./Recipes";
import rain from "../images/002-rain.svg";

const App = () => {
    return (
        <>
            <section className="hero"/>
            <main>
                <section>
                    <h1>Oh Hai, React JS</h1>
                </section>
                <img src={rain} alt="rain" width="250"/>
                <Recipes/>
            </main>
        </>
    )
}

export default App
