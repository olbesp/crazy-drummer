import * as actionTypes from '../actions/actionTypes';

const initialState = {
  activeGenre: 'rock'
};

const genreChangedHandler = (e) => {
  return e.target.textContent.toLowerCase();
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENRE_CHANGED:
      return { ...state, activeGenre: genreChangedHandler(action.genre) };
    default:
      return state;
  }
};

export default reducer;