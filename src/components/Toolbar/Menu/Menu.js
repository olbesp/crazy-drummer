import React from 'react';

import styles from './Menu.css';
import Aux from '../../../hoc/Aux.js';
import Backdrop from '../../UI/Backdrop/Backdrop';

const menu = (props) => {
  let classes = [
    styles.Menu,
    styles.Close
  ];
  if (props.open) {
    classes = [
      styles.Menu,
      styles.Open
    ];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div>
        <nav className={classes.join(' ')}>
          <button>Rock</button>
          <button>Hip-Hop</button>
          <button>Dance</button>
          <button>Dubstep</button>
        </nav>
      </div>
    </Aux>
  );
}

export default menu;