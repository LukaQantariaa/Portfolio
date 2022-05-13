import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeatureFlagsStoreEffects } from './effects';
import { featureFlagStoreReducer, FEATURE_FLAG_STORE_KEY } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([FeatureFlagsStoreEffects]),
    StoreModule.forFeature(FEATURE_FLAG_STORE_KEY, featureFlagStoreReducer),
  ],
  providers: [FeatureFlagsStoreEffects],
})
export class FeatureFlagsStoreModule {}
