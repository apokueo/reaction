import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Estrum </h1>
        </header>
        <p className="App-intro">
          function tick() {
           clock = (
              <div>
                <h2>
                  It is{' '}
                  {new Date().toLocaleTimeString()}.
                </h2>
              </div>
            )
            ReactDOM.render(
              clock,
              document.getElementById('root')
            );
          }
          setInterval(tick, 1000);
        </p>
      </div>
    );
  }
}

export default App;
