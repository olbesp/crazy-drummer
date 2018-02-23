import React from 'react';

import styles from './Toolbar.css';
import MainHeading from './MainHeading/MainHeading';
import Toggler from './Toggler/Toggler';

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <MainHeading />
    <Toggler />
    <nav>
      Navigation
    </nav>
  </header>
);

export default toolbar;

