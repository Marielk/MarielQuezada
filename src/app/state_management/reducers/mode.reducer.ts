import { CHOOSE, actions } from './mode.actions';

export function modeReducer( state: string = 'nigth', action: actions) {
  switch ( action.type) {
    case CHOOSE:
      return state = action.payload;
    default:
      return state;
  }
}
