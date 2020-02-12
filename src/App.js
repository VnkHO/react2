import React from 'react';

import Toggle from './ToggleRPC'

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
          {({ on, toggle }) => (
            <div>
              {on && <h1>Show me</h1>}
              <button onClick={toggle}>Show / hide</button>
            </div>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
