import React, { Component } from 'react';

import styles from './DrumKit.css';
import Background from '../../assets/images/floor.jpeg';
import Drum from './Drum/Drum';
import { Howl } from 'howler';
// Sound Library
// import rockHat1 from '../../assets/sounds/rock/hat1.mp3';
// import rockHat2 from '../../assets/sounds/rock/hat2.mp3';
// import rockHat3 from '../../assets/sounds/rock/hat3.mp3';
// import rockHat4 from '../../assets/sounds/rock/hat4.mp3';
// import rockSnare1 from '../../assets/sounds/rock/snare1.mp3';
// import rockSnare2 from '../../assets/sounds/rock/snare2.mp3';
// import rockSnare3 from '../../assets/sounds/rock/snare3.mp3';
// import rockStick from '../../assets/sounds/rock/stick.mp3';
import rockKick from '../../assets/sounds/rock/kick.mp3';

const drums = [
  { drumClass: 'Hat1', drumButton: 'i', keyCode: 73 },
  { drumClass: 'Hat2', drumButton: 'j', keyCode: 74 },
  { drumClass: 'Hat3', drumButton: 'k', keyCode: 75 },
  { drumClass: 'Hat4', drumButton: 'l', keyCode: 76 },
  { drumClass: 'Snare1', drumButton: 'w', keyCode: 87 },
  { drumClass: 'Snare2', drumButton: 'a', keyCode: 65 },
  { drumClass: 'Snare3', drumButton: 's', keyCode: 83 },
  { drumClass: 'Snare4', drumButton: 'd', keyCode: 68 },
  { drumClass: 'Kick', drumButton: 'space', keyCode: 32 }
]

class DrumKit extends Component {
  state = {
    drumClass: null,
    keyCode: null,
    soundSrc: null
  }
  setSound = (e) => {
    this.setState({
      drumClass: e.target.classList[1],
      keyCode: e.keyCode,
      soundSrc: rockKick
    });
    // library[`${this.props.genre}${e.target.classList[1]}`]
  }
  drumPlayHandler = () => {
    const sound = new Howl({
      src: [this.state.soundSrc]
    });
    sound.play();
  }
  render() {
    const DOMdrums = drums.map((drum, index) => {
      return <Drum 
          sound={this.setSound} 
          key={index} 
          drumClass={drum.drumClass} 
          drumButton={drum.drumButton} 
          play={this.drumPlayHandler} 
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