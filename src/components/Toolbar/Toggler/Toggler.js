import React from 'react';

import styles from './Toggler.css';

const toggler = (props) => (
  <div 
    className={styles.Toggler}
    onClick={props.clicked}
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default toggler;