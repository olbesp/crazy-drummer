import React, { Component } from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Menu from './components/Toolbar/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Menu />
      </div>
    );
  }
}

export default App;
