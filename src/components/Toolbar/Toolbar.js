import React from 'react';

import styles from './Toolbar.css';
// import MainHeading from './MainHeading/MainHeading';

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div>Heading</div>
    <div>Toggler</div>
    <nav>
      Navigation
    </nav>
  </header>
);

export default toolbar;

