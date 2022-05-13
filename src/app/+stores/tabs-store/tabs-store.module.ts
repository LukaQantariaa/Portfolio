import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TabsStoreEffects } from './effects';
import { tabsStoreReducer, TABS_STORE_KEY } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([TabsStoreEffects]),
    StoreModule.forFeature(TABS_STORE_KEY, tabsStoreReducer),
  ],
  providers: [TabsStoreEffects],
})
export class TabsStoreModule {}
