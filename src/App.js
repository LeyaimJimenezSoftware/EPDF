import React, { Component } from 'react';
import './App.css';
import Mant from './components/Mant';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <Mant />
        </header>
      </div>
    );
  }
}

export default App;
