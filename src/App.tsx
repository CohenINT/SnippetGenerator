import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Snippet } from './Components/Snippet';

function App() {
  const cssProperties = [
    {
        cssProp: "color",
        cssValue: "red",
        comments:"Pick a color..."
    },
    {
        cssProp: "font-family",
        cssValue: "Arial",
        comments:"Font for display..."
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
  
        <Snippet CssProperties={cssProperties}/>
      </header>
    
    </div>
  );
}

export default App;
