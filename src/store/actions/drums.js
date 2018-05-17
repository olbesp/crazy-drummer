import * as actionTypes from './actionTypes';

export const keyPressed = drumID => ({
  type: actionTypes.KEY_PRESSED,
  drumID
});

export const keyReleased = () => ({
  type: actionTypes.KEY_RELEASED
});

export const drumClickedDown = drumID => ({
  type: actionTypes.DRUM_CLICKED_DOWN,
  drumID
});

export const drumClickedUp = () => ({
  type: actionTypes.DRUM_CLICKED_UP
});
