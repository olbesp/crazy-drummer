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
  }

  drumClickedDownHandler = (e) => {
    if (e.target.textContent) {
      let keyCode;
      switch (e.target.textContent.toLowerCase()) {
        case 'i': keyCode = 73; break;
        case 'j': keyCode = 74; break;
        case 'k': keyCode = 75; break;
        case 'l': keyCode = 76; break;
        case 'w': keyCode = 87; break;
        case 'a': keyCode = 65; break;
        case 's': keyCode = 83; break;
        case 'd': keyCode = 68; break;
        case 'space': keyCode = 32; break;
        default: keyCode = null;
      }
      this.setState({ drumHitKeyCode: keyCode });
    }
  }

  drumClickedUpHandler = () => {
    if (this.state.drumHitKeyCode) {
      this.setState({ drumHitKeyCode: null });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.drumHitHandler);
    document.addEventListener('keyup', this.drumHitReleaseHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.drumHitHandler);
    document.removeEventListener('keyup', this.drumHitReleaseHandler);
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
          keyCode={this.state.drumHitKeyCode}
          clickedDown={this.drumClickedDownHandler}
          clickedUp={this.drumClickedUpHandler} />
      </div>
    );
  }
}

export default App;
