import React from 'react';

import styles from './DrumKit.css';
import Background from '../../assets/images/floor.jpeg';

const drumKit = (props) => {
  return (
    <div className={styles.DrumKit} style={{ 
      backgroundImage: `radial-gradient(rgba(0, 0, 0, 0), rgba(18, 12, 45, .8)), url(${Background})` 
    }}></div>
  );
}

export default drumKit;