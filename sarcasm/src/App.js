import React, { Component } from 'react';
import Input from "./components/Input"; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Input/> 
      <button> 
      Send 
      </button>
      </div>
    );
  }
}

export default App;
