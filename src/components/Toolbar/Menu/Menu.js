import React from 'react';

import styles from './Menu.css';
import Aux from '../../../hoc/Aux.js';
import Backdrop from '../../UI/Backdrop/Backdrop';

const menu = (props) => {
  
  return (
    <Aux>
      <Backdrop />
      <div>
        <nav className={styles.Menu}>
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