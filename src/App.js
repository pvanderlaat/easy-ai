import './App.css';
import OpenAI from './util/openAI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Loading image of a clown on a bike</p>
        <OpenAI
          prompt="clown on a bike"
        />
      </header>
    </div>
  );
}

export default App;
