import React from 'react';
import styles from './Menu.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import GenreButton from '../../GenreButton/GenreButton';

const menu = props => {
  let classes = [ styles.Menu, styles.Close ];
  
  if (props.open) {
    classes = [ styles.Menu, styles.Open ];
  }

  const genres = ['Rock', 'HipHop', 'Dance', 'Dubstep'].map((genre, index) => (
    <GenreButton 
      key={index}
      active={props.genre}
      clicked={props.changeGenre}
    >
      {genre}
    </GenreButton>
  ));

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div>
        <nav className={classes.join(' ')}>
          {genres}
        </nav>
      </div>
    </React.Fragment>
  );
}

export default menu;