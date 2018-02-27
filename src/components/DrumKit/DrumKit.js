import React, { Component } from 'react';

import styles from './DrumKit.css';
import Background from '../../assets/images/floor.jpeg';
import Drum from './Drum/Drum';
import library from './Library/Library';

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
    
    if (((this.props.keyCode >= 65 && this.props.keyCode <= 90) 
        || this.props.keyCode === 32) && this.props.genre) {
      console.log('DrumKit update');
      const drum = library[this.props.genre][`${this.props.keyCode}`]
      if (drum) {
        drum.sound.play();
      } else {
        library.effects[Math.floor(Math.random() * library.effects.length)].play();
      }
    }
  }

  render() {
    console.log('DrumKit render');

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
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(18, 12, 45, .8)), url(${Background})`
        }}
        onMouseDown={this.props.clickedDown}
        onMouseUp={this.props.clickedUp}
      >
        <div className={styles.DrumsContainer}>
          {DOMdrums}
        </div>
      </div>
    );
  }
}


export default DrumKit;