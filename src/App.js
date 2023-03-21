import './App.css';
import Freestyle from './screens/Freestyle';
import MadLib from './screens/MadLib';
import { useState, useEffect, createContext } from "react";

export const ScreenContext = createContext();

export default function App() {
  const [screen, setScreen] = useState('home')

  function homeScreen() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Home Screen</p>
          <div>
            <button onClick={() => setScreen("Freestyle")}>freestyle</button>
            <button onClick={() => setScreen("MadLib")}>mad-lib style</button>
          </div>
        </header>
      </div>
    )
  }

  function getScreen() {
    if (screen == 'home') {
      return homeScreen()
    }
    else if (screen == 'Freestyle') {
      return <Freestyle/>
    }
    else if (screen == 'MadLib') {
      return <MadLib/>
    }
  }

  return (
    <ScreenContext.Provider value={[screen, setScreen]}>
      <div className="App">
        <header className="App-header">
          {getScreen()}
        </header>
      </div>
    </ScreenContext.Provider>
  );
}
