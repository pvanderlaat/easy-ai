// import './App.css';
import OpenAI from '../util/openAI';
import App from '../App';
import {ScreenContext} from '../App';
import { useState, useEffect, useContext } from "react";
import { History, saveInput, getHistory } from '../util/History';

export default function Freestyle() {
    const [screen, setScreen] = useContext(ScreenContext);
    const [prompt, setPrompt] = useState('')
    const [value, setValue] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        // console.log('Submitted value:', value);
        setPrompt(value)
      }
    
      function handleChange(event) {
        setValue(event.target.value);
    }

    useEffect(() => {loadContent()}, [])

    function loadContent() {
        return (
            <div>
                <p>Enter a prompt to load an image</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter a value:
                        <input type="text" value={value} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                {prompt != '' ? 
                    <OpenAI
                        prompt={prompt}
                    /> : null  
                }
            </div>
    )}

    return (
        <div className="App">
        <header className="App-header">
            <button onClick={() => {
                console.log("history")
                let history = getHistory()
                history.map(el => {
                    console.log(el)
                })
            }}>History</button>
            <button onClick={() => { setScreen("home") }}>Home</button>
            {loadContent()}
        </header>
        </div>
    );
}