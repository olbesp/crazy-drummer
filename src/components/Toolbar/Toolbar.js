import React from 'react';
import styles from './Toolbar.css';
import MainHeading from './MainHeading/MainHeading';
import Toggler from './Toggler/Toggler';

const toolbar = props => (
  <header className={styles.Toolbar}>
    <MainHeading />
    <Toggler 
      clicked={props.togglerClicked}
      open={props.open}
      close={props.closed}
    />
  </header>
);

export default toolbar;

