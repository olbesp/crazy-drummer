import * as actionTypes from './actionTypes';
import axios from 'axios';
import { createLibrary } from '../utilities';
import { Howl } from 'howler';

export const fetchLibrarySuccess = library => ({
  type: actionTypes.FETCH_LIBRARY_SUCCESS,
  library
});

export const fetchLibraryFail = error => ({
  type: actionTypes.FETCH_LIBRARY_FAIL,
  error
});

export const fetchLibraryStart = () => ({
  type: actionTypes.FETCH_LIBRARY_START
});

export const fetchLibrary = () => dispatch => {
  dispatch(fetchLibraryStart());
  axios.get('https://crazy-drummer.firebaseio.com/sounds.json')
    .then(response => {
      const keyCodes = ['73', '74', '75', '76', '87', '65', '83', '68', '32'];
      const keyLetters = ['i', 'j', 'k', 'l', 'w', 'a', 's', 'd', 'space'];
      const rock = createLibrary(keyCodes, keyLetters, response.data.rock);
      const hiphop = createLibrary(keyCodes, keyLetters, response.data.hiphop);
      const dance = createLibrary(keyCodes, keyLetters, response.data.dance);
      const dubstep = createLibrary(keyCodes, keyLetters, response.data.dubstep);
      const effects = response.data.effects.map(effect => new Howl({ src: effect }));
      const library = { rock, hiphop, dance, dubstep, effects };
      dispatch(fetchLibrarySuccess(library));
    })
    .catch(error => {
      dispatch(fetchLibraryFail(error));
    });
};
