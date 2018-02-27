import React from 'react';

import styles from './Drum.css';

const drum = (props) => {
  
  return (
    <div id={props.drumButton} className={[styles.Drum, styles[props.drumClass]].join(' ')}>{props.drumButton}</div>
  );
}

export default drum;