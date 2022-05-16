import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TABS_STORE_KEY } from './reducer';
import { TabsState } from './state';

export const selectTabsFeature =
  createFeatureSelector<TabsState>(TABS_STORE_KEY);

export const activeTheme = createSelector(
  selectTabsFeature,
  (state: TabsState) => {
    return state.activeTheme;
  }
);

export const animationIsCompleted = createSelector(
  selectTabsFeature,
  (state: TabsState) => {
    return state.animationCompleted;
  }
);
