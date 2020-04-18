import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
// import { environment } from '../../../environments/environment';
import { languageReducer } from './language.reducer';
import { modeReducer } from './mode.reducer';


export const FEATURE_NAME = 'settings';
const STORE_KEYS_TO_PERSIST = ['language', 'mode'];

export interface State {
  language: string;
  mode: string;
}

export const reducers: ActionReducerMap<State> = {
  language: languageReducer,
  mode: modeReducer
};

export const getSettingsState = createFeatureSelector<State>(FEATURE_NAME);

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({
    keys: STORE_KEYS_TO_PERSIST,
    rehydrate: true,
    removeOnUndefined: true
  })(reducer);
}

export const metaReducers: MetaReducer<State, Action>[] =  [localStorageSyncReducer];
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []; 
