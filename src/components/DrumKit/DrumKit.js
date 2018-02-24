import React from 'react';

import styles from './DrumKit.css';
import Background from '../../assets/images/floor.jpeg';
import Drum from './Drum/Drum';

const drumKit = (props) => {
  const drums = [
    {drumClass: 'Hat1', drumButton: 'i'},
    {drumClass: 'Hat2', drumButton: 'j'},
    {drumClass: 'Hat3', drumButton: 'k'},
    {drumClass: 'Hat4', drumButton: 'l'},
    {drumClass: 'Snare1', drumButton: 'w'},
    {drumClass: 'Snare2', drumButton: 'a'},
    {drumClass: 'Snare3', drumButton: 's'},
    {drumClass: 'Snare4', drumButton: 'd'},
    {drumClass: 'Kick', drumButton: 'space'}
  ].map((drum, index) => {
    return <Drum key={index} drumClass={drum.drumClass} drumButton={drum.drumButton} />;
  });
  return (
    <div className={styles.DrumKit} style={{ 
      backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(18, 12, 45, .8)), url(${Background})` 
    }}>{drums}</div>
  );
}

export default drumKit;