import React, { Component } from 'react';
import { connect } from 'react-redux';

import DrumKit from '../DrumKit/DrumKit';
import Loader from '../../components/UI/Loader/Loader';
import * as actions from '../../store/actions/index';

class Library extends Component {

  componentDidMount() {
    this.props.onFetchLibrary();
  }

  render() {
    let html = <Loader />;

    if (this.props.library) {
      html = <DrumKit genre={this.props.genre} library={this.props.library} />;
    }

    if (this.props.error) {
      const style = {
        textAlign: 'center',
        marginTop: '50vh',
        fontSize: '3rem',
        color: '#333'
      };
      html = <div style={style}>{this.props.error}</div>;
    }

    return html;
  }
}

const mapStateToProps = state => ({
  library: state.library.library,
  loading: state.library.loading,
  error: state.library.error
});

const mapDispatchToProps = dispatch => ({
  onFetchLibrary: () => dispatch(actions.fetchLibrary())
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);