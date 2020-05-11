import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  headlines: [],
  error: null,
  count: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_HEADLINES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_HEADLINES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        headlines: action.headlines
      });
    case c.GET_HEADLINES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    case 'INCREMENT_COUNTER':
      const newCount = state.count + 1
      return { ...state, count: newCount}
    default:
      return state;
  }
};