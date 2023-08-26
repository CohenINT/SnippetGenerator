import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PromptScreen } from './Screens/PromptScreen';
import { Snippet } from './Components/Snippet';

function App() {
  const cssProperties = [
    {
        cssProp: "color",
        cssValue: "red"
    },
    {
        cssProp: "font-family",
        cssValue: "Arial"
    },
    {
        cssProp: "background-color",
        cssValue: "lightblue"
    },
    {
        cssProp: "font-size",
        cssValue: "16px"
    },
    {
        cssProp: "margin",
        cssValue: "10px"
    },
    {
        cssProp: "padding",
        cssValue: "20px"
    },
    {
        cssProp: "border",
        cssValue: "1px solid black"
    },
    {
        cssProp: "text-align",
        cssValue: "center"
    },
    {
        cssProp: "display",
        cssValue: "flex"
    }
    // Add more elements here
];
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
        <Snippet CssProperties={cssProperties}/>
      </header>
    <PromptScreen/>
    </div>
  );
}

export default App;
