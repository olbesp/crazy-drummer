import React from 'react';

import styles from './Drum.css';
import { Howl } from 'howler';
// import Hat1 from '../../../assets/sounds/rock/hat1.mp3';

const drum = (props) => {
  const sound = new Howl({
    src: [props.sound]
  });
  return (
      <div onClick={() => sound.play()} className={[styles.Drum, styles[props.drumClass]].join(' ')}>{props.drumButton}</div>
  );
}

export default drum;