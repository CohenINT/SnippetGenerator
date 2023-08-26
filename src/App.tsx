import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PromptScreen } from './Screens/PromptScreen';
import { Snippet } from './Components/Snippet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Snippet/>
      </header>
    <PromptScreen/>
    </div>
  );
}

export default App;
