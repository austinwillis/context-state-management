import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';
import Child2 from './Child2';
import Child3 from './Child3';
import Child4 from './Child4';

import Store from './createStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Store.FluxContainer>
            <Child />
            <Child2 />
            <Child3 />
            <Child4 />
          </Store.FluxContainer>
        </div>
      </div>
    );
  }
}

export default App;
