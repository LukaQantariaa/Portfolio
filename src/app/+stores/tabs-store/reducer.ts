import { createReducer, on } from '@ngrx/store';
import {
  animationIsCompleted,
  changeActiveTheme,
  setActiveTheme,
} from './actions';
import { initialState } from './state';

export const TABS_STORE_KEY = 'tabs';

export const tabsStoreReducer = createReducer(
  initialState,
  on(setActiveTheme, (state, payload) => ({
    ...state,
    activeTheme: payload.theme,
  })),

  on(animationIsCompleted, (state, payload) => ({
    ...state,
    animationCompleted: true,
  }))
);
