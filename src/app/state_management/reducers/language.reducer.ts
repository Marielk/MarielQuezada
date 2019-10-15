import { CHOOSE, actions } from './language.actions';

export function languageReducer( state: string = 'es', action: actions) {
  switch ( action.type) {
    case CHOOSE:
      return state = action.payload;
    default:
      return state;
  }
}

