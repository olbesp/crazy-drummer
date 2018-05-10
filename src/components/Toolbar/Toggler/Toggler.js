import React from 'react';
import styles from './Toggler.css';

const toggler = props => {
  let classes = [
    styles.Toggler,
    styles.Close
  ];
  if (props.open) {
    classes = [
      styles.Toggler,
      styles.Open
    ];
  }
  return (
    <div
      className={classes.join(' ')}
      onClick={props.clicked}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default toggler;