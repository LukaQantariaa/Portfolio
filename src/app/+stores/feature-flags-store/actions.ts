import { createAction, props } from '@ngrx/store';
import { FeatureFlagsState } from './state';

export const fetchFeatureFlags = createAction('[FETCH] Fetch Feature Flags');

export const loadFeatureFlagsSuccess = createAction(
  '[LOAD] Load Feature Flags Success',
  props<FeatureFlagsState['data']>()
);

export const loadFeatureFlagsError = createAction(
  '[LOAD] Load Feature Flags Error'
);
