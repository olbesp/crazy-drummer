import React, { Component } from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Menu from './components/Toolbar/Menu/Menu';

class App extends Component {
  state = {
    showMenu: false
  }

  menuClosedHandler = () => {
    this.setState({ showMenu: false });
  }

  menuToggleHandler = () => {
    this.setState((prevState) => {
      return { showMenu: !prevState.showMenu };
    });
  }

  render() {
    return (
      <div className="App">
        <Toolbar togglerClicked={this.menuToggleHandler} />
        <Menu 
          open={this.state.showMenu}
          closed={this.menuClosedHandler}
        />
      </div>
    );
  }
}

export default App;
