import * as actionTypes from './actionTypes';

export const genreChanged = genre => ({
  type: actionTypes.GENRE_CHANGED,
  genre
});
