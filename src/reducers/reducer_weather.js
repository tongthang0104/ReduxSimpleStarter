import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
    //don't use push because we don't want to mutate array.
      /* ES 5
        return state.concat([action.payload.data]);
      */
      // ES 6
      return [action.payload.data, ...state];
  }
  return state;
}
