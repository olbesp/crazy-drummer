import React from 'react';

import styles from './GenreButton.css';

const genreButton = (props) => (
  <button className={styles.GenreButton}>{props.children}</button>
);

export default genreButton;