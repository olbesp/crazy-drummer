import React from 'react';

import styles from './Backdrop.css';

const backdrop = (props) => (
  <div className={styles.Backdrop} onClick={props.clicked}></div> 
);

export default backdrop;

// props.show ? : null