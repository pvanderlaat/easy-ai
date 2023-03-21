// import './App.css';
import OpenAI from '../util/openAI';
import App from '../App';
import {ScreenContext} from '../App';
import { useState, useEffect, useContext } from "react";

export default function MadLib() {
    const [screen, setScreen] = useContext(ScreenContext);
    console.log(screen)
    return (
        <div className="App">
        <header className="App-header">
            <button onClick={() => { setScreen("home") }}>Home</button>
            <p>MadLib</p>
            <OpenAI
            prompt="clown on a bike"
            />
        </header>
        </div>
    );
}