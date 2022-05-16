import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, switchMap } from 'rxjs/operators';
import { FeatureFlagsService } from 'src/app/services/feature-flags.service';
import { animationIsCompleted } from '../tabs-store/actions';
import { TabsState } from '../tabs-store/state';
import {
  fetchFeatureFlags,
  loadFeatureFlagsSuccess,
  loadFeatureFlagsError,
} from './actions';

@Injectable()
export class FeatureFlagsStoreEffects {
  constructor(
    private actions$: Actions,
    private featureFlagsService: FeatureFlagsService,
    private tabsStore: Store<TabsState>
  ) {}

  fetchFeatureFlags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchFeatureFlags),
      switchMap((action) => {
        return this.featureFlagsService.getConfig().pipe(
          switchMap((res) => {
            if (!res.loadingPage.visible) {
              this.tabsStore.dispatch(animationIsCompleted());
            }
            return [loadFeatureFlagsSuccess(res)];
          }),
          catchError((error) => {
            return [loadFeatureFlagsError()];
          })
        );
      })
    );
  });
}
