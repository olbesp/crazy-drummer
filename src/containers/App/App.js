import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import Menu from '../../components/Toolbar/Menu/Menu';
import Library from '../Library/Library';
import * as actionTypes from '../../store/actions';


class App extends Component {
  state = {
    showMenu: false,
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
      <React.Fragment>
        <Toolbar
          togglerClicked={this.menuToggleHandler}
          open={this.state.showMenu}
          closed={this.menuClosedHandler}
        />
        <Menu
          open={this.state.showMenu}
          closed={this.menuClosedHandler}
          changeGenre={this.props.onChangeGenre}
          genre={this.props.activeGenre}
        />
        <Library genre={this.props.activeGenre} />
      </React.Fragment>
    );    
  }
}

const mapStateToProps = state => ({
  activeGenre: state.genres.activeGenre
});

const mapDispatchToProps = dispatch => ({
  onChangeGenre: (event) => dispatch({ type: actionTypes.GENRE_CHANGED, genre: event })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
