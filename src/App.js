import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponentThatFetchesData from './MyComponentThatFetchesData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponentThatFetchesData />
      </div>
    );
  }
}

export default App;
