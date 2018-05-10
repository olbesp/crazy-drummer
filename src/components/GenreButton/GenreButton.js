import React from 'react';
import styles from './GenreButton.css';

const genreButton = props => {
  let classes = [styles.GenreButton];

  if (props.active === props.children.toLowerCase()) {
    classes = [styles.GenreButton, styles.active];
  }

  return (
    <button 
      onClick={props.clicked} 
      className={classes.join(' ')}
    >
      {props.children}
    </button>
  );
};

export default genreButton;