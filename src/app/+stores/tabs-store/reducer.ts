import { createReducer, on } from '@ngrx/store';
import { changeActiveTheme, setActiveTheme } from './actions';
import { initialState } from './state';

export const TABS_STORE_KEY = 'tabs';

export const tabsStoreReducer = createReducer(
  initialState,
  on(setActiveTheme, (state, payload) => ({
    activeTheme: payload.theme,
  }))
);
