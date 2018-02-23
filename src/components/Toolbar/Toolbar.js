import React from 'react';

import styles from './Toolbar.css';
import MainHeading from './MainHeading/MainHeading';

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <MainHeading />
    <div>Toggler</div>
    <nav>
      Navigation
    </nav>
  </header>
);

export default toolbar;

