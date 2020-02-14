import React, { Fragment } from 'react';

import Toggle from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

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
              <button onClick={toggle}>Log in</button>
              <Modal on={on} toggle={toggle} >
                <h1>You are logged</h1>
              </Modal>
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
