import React from 'react';

import styles from './Drum.css';
import Aux from '../../../hoc/Aux';
import ReactHowler from 'react-howler';

const drum = (props) => {
  
  return (
    <Aux>
      <ReactHowler
        src={props.sound}
        playing={props.play}
      />
      <div className={[styles.Drum, styles[props.drumClass]].join(' ')}>{props.drumButton}</div>
    </Aux>
  );
}

export default drum;