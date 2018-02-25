import React, { Component } from 'react';

import styles from './DrumKit.css';
import Background from '../../assets/images/floor.jpeg';
import Drum from './Drum/Drum';
import library from './Library/Library';

console.log(library);

// props: genre - rock, keyCode - 35

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
  
  componentDidUpdate() {
    if (this.props.keyCode && this.props.genre) {
      if (library[this.props.genre][`${this.props.keyCode}`]) {
        library[this.props.genre][`${this.props.keyCode}`].play();
      } else if (this.props.keyCode >= 65 && this.props.keyCode <= 90) {
        library.effects[Math.floor(Math.random() * library.effects.length)].play();
      } else {
        return false;
      }
    }
  }

  render() {
    const DOMdrums = drums.map((drum, index) => {
      return <Drum 
          sound={this.setSound} 
          key={index} 
          drumClass={drum.drumClass} 
          drumButton={drum.drumButton} 
        />;
    });

    return (
      <div className={styles.DrumKit} style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(18, 12, 45, .8)), url(${Background})`
      }}>{DOMdrums}</div>
    );
  }
}


export default DrumKit;