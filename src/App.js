import React, { Component } from 'react';

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Menu from './components/Toolbar/Menu/Menu';
import DrumKit from './components/DrumKit/DrumKit';

class App extends Component {
  state = {
    showMenu: false,
    activeGenre: 'rock',
    drumHitKeyCode: null
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

  drumHitHandler = (e) => {
    this.setState({ drumHitKeyCode: e.keyCode });
  }

  drumHitReleaseHandler = () => {
    this.setState({ drumHitKeyCode: null });
    console.log(this.state.drumHit)
  }

  componentDidMount() {
    document.addEventListener("keydown", this.drumHitHandler);
    document.addEventListener('keyup', this.drumHitReleaseHandler);
  }

  render() {
    return (
      <div className="App">
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
        <DrumKit 
          genre={this.state.activeGenre}
          keyCode={this.state.drumHitKeyCode} />
      </div>
    );
  }
}

export default App;
