import React, { Component } from 'react';

import styles from './DrumKit.css';
import Drum from '../../components/Drum/Drum';
import library from '../../components/Library/Library';

const drums = [
  { drumClass: 'Hat1', drumButton: 'i' },
  { drumClass: 'Hat2', drumButton: 'j' },
  { drumClass: 'Hat3', drumButton: 'k' },
  { drumClass: 'Hat4', drumButton: 'l' },
  { drumClass: 'Snare1', drumButton: 'w' },
  { drumClass: 'Snare2', drumButton: 'a' },
  { drumClass: 'Snare3', drumButton: 's' },
  { drumClass: 'Snare4', drumButton: 'd' },
  { drumClass: 'Kick', drumButton: 'space' }
];

class DrumKit extends Component {
  state = {
    drumKeyCode: null
  }
  
  drumPressedHandler = (e) => {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 32) {
      this.setState({ drumKeyCode: e.keyCode });
    }
  }

  drumPressedReleaseHandler = () => {
    if (this.state.drumKeyCode) {
      this.setState({ drumKeyCode: null });
    }
  }

  drumClickedDownHandler = (e) => {
    if (e.target.id) {
      let keyCode;
      switch (e.target.id.toLowerCase()) {
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
      this.setState({ drumKeyCode: keyCode });
    }
  }

  drumClickedUpHandler = (e) => {
    if (this.state.drumKeyCode) {
      this.setState({ drumKeyCode: null });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.drumPressedHandler);
    document.addEventListener('keyup', this.drumPressedReleaseHandler);
  }

  componentDidUpdate() {
    if (((this.state.drumKeyCode >= 65 && this.state.drumKeyCode <= 90) 
      || this.state.drumKeyCode === 32) && this.props.genre) {
      const drum = library[this.props.genre][`${this.state.drumKeyCode}`]
      if (drum) {
        drum.sound.play();
      } else {
        library.effects[Math.floor(Math.random() * library.effects.length)].play();
      }
    }
  }

  render() {
    const DOMdrums = drums.map((drum, index) => {
      return <Drum 
          key={index} 
          drumClass={drum.drumClass} 
          drumButton={drum.drumButton}
        />;
    });

    return (
      <div
        className={styles.DrumKit}
        onMouseDown={this.drumClickedDownHandler}
        onMouseUp={this.drumClickedUpHandler}
      >
        <div className={styles.DrumsContainer}>
          {DOMdrums}
        </div>
      </div>
    );
  }
}


export default DrumKit;