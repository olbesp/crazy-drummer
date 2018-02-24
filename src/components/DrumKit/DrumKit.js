import React, { Component } from 'react';

import styles from './DrumKit.css';
import Background from '../../assets/images/floor.jpeg';
import Drum from './Drum/Drum';
// Sound Library
import rockHat1 from '../../assets/sounds/rock/hat1.mp3';
import rockHat2 from '../../assets/sounds/rock/hat2.mp3';
import rockHat3 from '../../assets/sounds/rock/hat3.mp3';
import rockHat4 from '../../assets/sounds/rock/hat4.mp3';
import rockSnare1 from '../../assets/sounds/rock/snare1.mp3';
import rockSnare2 from '../../assets/sounds/rock/snare2.mp3';
import rockSnare3 from '../../assets/sounds/rock/snare3.mp3';
import rockStick from '../../assets/sounds/rock/stick.mp3';
import rockKick from '../../assets/sounds/rock/kick.mp3';

class DrumKit extends Component {
  render() {
    const drums = [
      { drumClass: 'Hat1', drumButton: 'i', src: rockHat1 },
      { drumClass: 'Hat2', drumButton: 'j', src: rockHat2 },
      { drumClass: 'Hat3', drumButton: 'k', src: rockHat3 },
      { drumClass: 'Hat4', drumButton: 'l', src: rockHat4 },
      { drumClass: 'Snare1', drumButton: 'w', src: rockSnare1 },
      { drumClass: 'Snare2', drumButton: 'a', src: rockSnare2 },
      { drumClass: 'Snare3', drumButton: 's', src: rockSnare3 },
      { drumClass: 'Snare4', drumButton: 'd', src: rockStick },
      { drumClass: 'Kick', drumButton: 'space', src: rockKick }
    ].map((drum, index) => {
      return <Drum key={index} drumClass={drum.drumClass} drumButton={drum.drumButton} sound={drum.src} />;
    });

    return (
      <div className={styles.DrumKit} style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(18, 12, 45, .8)), url(${Background})`
      }}>{drums}</div>
    );
  }
}


export default DrumKit;