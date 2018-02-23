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
          Navigation
        </nav>
      </div>
    </Aux>
  );
}

export default menu;