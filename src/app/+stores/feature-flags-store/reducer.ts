import { createReducer, on } from '@ngrx/store';
import { loadFeatureFlagsError, loadFeatureFlagsSuccess } from './actions';
import { initialState } from './state';

export const FEATURE_FLAG_STORE_KEY = 'featureFlags';

export const featureFlagStoreReducer = createReducer(
  initialState,
  on(loadFeatureFlagsSuccess, (state, payload) => ({
    ...state,
    status: 'SUCCESS',
    data: payload,
  })),
  on(loadFeatureFlagsError, (state, payload) => ({
    ...state,
    status: 'FAILED',
  }))
);
