import React, { Component } from 'react';

import './App.css';
import Toolbar from '../components/Toolbar/Toolbar';
import Menu from '../components/Toolbar/Menu/Menu';
import Library from '../components/Library/Library';
import Aux from '../hoc/Aux';
import Loader from '../components/UI/Loader/Loader';

class App extends Component {
  state = {
    showMenu: false,
    activeGenre: 'rock',
    loading: true
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

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    
    return (
      this.state.loading ? <Loader /> :
      <Aux>
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
      </Aux>
    );    
  }
}

export default App;
