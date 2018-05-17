import * as actionTypes from '../actions/actionTypes';

const initialState = {
  drumKeyCode: null
};

const drumPressedHandler = (e) => {
  if ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode === 32) {
    return e.keyCode;
  }
};

const drumClickedDownHandler = (e) => {
  if (e.target.id) {
    let keyCode;
    switch (e.target.id.toLowerCase()) {
      case 'i': keyCode = 73; break;
      case 'j': keyCode = 74; break;
      case 'k': keyCode = 75; break;
      case 'l': keyCode = 76; break;
      case 'w': keyCode = 87; break;
      case 'a': keyCode = 65; break;
      case 's': keyCode = 83; break;
      case 'd': keyCode = 68; break;
      case 'space': keyCode = 32; break;
      default: keyCode = null;
    }
    return keyCode;
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.KEY_PRESSED:
      return { ...state, drumKeyCode: drumPressedHandler(action.drumID) };
    case actionTypes.KEY_RELEASED:
      return { ...state, drumKeyCode: null };
    case actionTypes.DRUM_CLICKED_DOWN:
      return { ...state, drumKeyCode: drumClickedDownHandler(action.drumID) };
    case actionTypes.DRUM_CLICKED_UP:
      return { ...state, drumKeyCode: null };
    default:
      return state;
  }
};

export default reducer;