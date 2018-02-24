import React from 'react';

import styles from './Drum.css';
// import Hat1 from '../../../assets/sounds/rock/hat1.mp3';

const drum = (props) => {
  
  return (
      <div onKeyDown={props.play} className={[styles.Drum, styles[props.drumClass]].join(' ')}>{props.drumButton}</div>
  );
}

export default drum;