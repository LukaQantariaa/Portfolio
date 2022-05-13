import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FeatureFlagsStoreModule } from './feature-flags-store';
import { TabsStoreModule } from './tabs-store/tabs-store.module';

@NgModule({
  imports: [
    FeatureFlagsStoreModule,
    TabsStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
})
export class RootStoreModule {}
