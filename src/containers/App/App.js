import React, { Component } from 'react';
import './App.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import Menu from '../../components/Toolbar/Menu/Menu';
import Library from '../Library/Library';

class App extends Component {
  state = {
    showMenu: false,
    activeGenre: 'rock'
  }

  menuClosedHandler = () => {
    this.setState({ showMenu: false });
  }

  menuToggleHandler = () => {
    this.setState((prevState) => {
      return { showMenu: !prevState.showMenu };
    });
  }

  genreChangedHandler = (e) => {
    this.setState({
      activeGenre: e.target.textContent.toLowerCase()
    });
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar
          togglerClicked={this.menuToggleHandler}
          open={this.state.showMenu}
          closed={this.menuClosedHandler}
        />
        <Menu
          open={this.state.showMenu}
          closed={this.menuClosedHandler}
          changeGenre={this.genreChangedHandler}
          genre={this.state.activeGenre}
        />
        <Library genre={this.state.activeGenre} />
      </React.Fragment>
    );    
  }
}

export default App;
