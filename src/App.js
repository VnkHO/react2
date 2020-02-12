import React from 'react';

import Toggle from './Toggle'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Toggle>
          <h1>Hello</h1>
        </Toggle>
      </header>
    </div>
  );
}

export default App;
