import React from 'react';

import styles from './GenreButton.css';

const genreButton = (props) => (
  <button onClick={props.clicked} className={styles.GenreButton}>{props.children}</button>
);

export default genreButton;