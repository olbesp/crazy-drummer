import * as actionTypes from './actions';

const initialState = {
  drumKeyCode: null
};

const drumPressedHandler = (e) => {
  if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 32) {
    return e.keyCode;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.KEY_PRESSED:
      return { ...state, drumKeyCode: drumPressedHandler(action.drumID) };
    case actionTypes.KEY_RELEASED:
      return { ...state, drumKeyCode: null };
    default:
      return state;
  }
};

export default reducer;