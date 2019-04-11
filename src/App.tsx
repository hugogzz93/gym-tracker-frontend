import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/app.sass'
import Dashboard from './components/dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container--80">
          <Dashboard/>
        </div>
      </div>
    );
  }
}

export default App;
