// import './App.css';
import OpenAI from '../util/openAI';
import App from '../App';
import {ScreenContext} from '../App';
import { useState, useEffect, useContext } from "react";

export default function Freestyle() {
    const [screen, setScreen] = useContext(ScreenContext);
    console.log(screen)
    return (
        <div className="App">
        <header className="App-header">
            <button onClick={() => { setScreen("home") }}>Home</button>
            <p>Loading image of a clown on a bike</p>
            <OpenAI
            prompt="clown on a bike"
            />
        </header>
        </div>
    );
}