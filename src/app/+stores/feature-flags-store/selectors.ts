import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeTypes } from 'src/app/interfaces/theme.interface';
import { FEATURE_FLAG_STORE_KEY } from './reducer';
import { FeatureFlagsState } from './state';

export const selectFeatureFlagsState = createFeatureSelector<FeatureFlagsState>(
  FEATURE_FLAG_STORE_KEY
);

export const selectPageVisibility = (pageName: string) =>
  createSelector(selectFeatureFlagsState, (state: FeatureFlagsState) => {
    return state.data.pages.hasOwnProperty(pageName)
      ? state.data.pages[pageName].visible
      : null;
  });

export const selectThemeVisibility = (themeName: ThemeTypes) =>
  createSelector(selectFeatureFlagsState, (state: FeatureFlagsState) => {
    const theme: any = state.data.themes.list.find(
      (theme) => theme.name == themeName
    );
    console.log(state);
    return theme ? theme.allowed : null;
  });
