import { FeatureFlagsState } from './feature-flags-store/state';

export interface AppState {
  featureFlags: FeatureFlagsState;
}
