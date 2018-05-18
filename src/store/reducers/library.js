import * as actionTypes from '../actions/actionTypes';

const initialState = {
  library: null,
  loading: false,
  error: null
};

const fetchLibraryStart = (state, action) => ({
  ...state,
  loading: true,
  error: null
});

const fetchLibrarySuccess = (state, action) => ({
  ...state,
  loading: false,
  library: action.library,
  error: null
});

const fetchLibraryFail = (state, action) => ({
  ...state,
  loading: false,
  error: action.error.message
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LIBRARY_START: return fetchLibraryStart(state, action);
    case actionTypes.FETCH_LIBRARY_SUCCESS: return fetchLibrarySuccess(state, action);
    case actionTypes.FETCH_LIBRARY_FAIL: return fetchLibraryFail(state, action);
    default: return state;
  }
};

export default reducer;
