import React, { Component } from 'react';

import { Howl } from 'howler';
import axios from 'axios';
import DrumKit from '../../containers/DrumKit/DrumKit';
import Loader from '../UI/Loader/Loader';

class Library extends Component {
  state = {
    library: null
  }

  createLibrary = (keyCodes, keyLetters, drums) => {
    const lib = {};
    for (let i = 0; i < keyCodes.length; i++) {
      lib[keyCodes[i]] = {
        sound: new Howl({
          src: drums[i]
        }),
        id: keyLetters[i]
      }
    }
    return lib;
  }

  getDrums = () => {
    axios.get('https://crazy-drummer.firebaseio.com/sounds.json')
      .then(response => {
        const keyCodes = ['73', '74', '75', '76', '87', '65', '83', '68', '32'];
        const keyLetters = ['i', 'j', 'k', 'l', 'w', 'a', 's', 'd', 'space'];
        const rock = this.createLibrary(keyCodes, keyLetters, response.data.rock);
        const hiphop = this.createLibrary(keyCodes, keyLetters, response.data.hiphop);
        const dance = this.createLibrary(keyCodes, keyLetters, response.data.dance);
        const dubstep = this.createLibrary(keyCodes, keyLetters, response.data.dubstep);
        const effects = response.data.effects.map(effect => new Howl({ src: effect }));
        const library = { rock, hiphop, dance, dubstep, effects };
        this.setState({ library });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getDrums();
  }

  render() {
    let html = <Loader />;
    if (this.state.library) {
      html = <DrumKit genre={this.props.genre} library={this.state.library} />;
    }
    return html;
  }
}

export default Library;