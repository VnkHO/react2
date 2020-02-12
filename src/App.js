import React, { Fragment } from 'react';

import Toggle from './ToggleRPC';
import Portal from './Portal';

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
            <Fragment>
              {on && <h1>Show me</h1>}
              <button onClick={toggle}>Show / hide</button>
              <Portal>
                {on && <h1>Hi, this is a portal inside Toggle</h1>}
              </Portal>
            </Fragment>
          )}
        </Toggle>
        <Portal>
          <h1>Hi, this is a portal</h1>
        </Portal>
      </header>
    </div>
  );
}

export default App;
