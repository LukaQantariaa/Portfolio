import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TABS_STORE_KEY } from './reducer';
import { TabsState } from './state';

export const selectTabsFeature =
  createFeatureSelector<TabsState>(TABS_STORE_KEY);

export const selectActiveTheme = createSelector(
  selectTabsFeature,
  (state: TabsState) => {
    return state.activeTheme;
  }
);

export const selectAnimationState = createSelector(
  selectTabsFeature,
  (state: TabsState) => {
    return state.animationCompleted;
  }
);
