import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FeatureFlagsService } from 'src/app/services/feature-flags.service';
import {
  fetchFeatureFlags,
  loadFeatureFlagsSuccess,
  loadFeatureFlagsError,
} from './actions';

@Injectable()
export class FeatureFlagsStoreEffects {
  constructor(
    private actions$: Actions,
    private featureFlagsService: FeatureFlagsService
  ) {}

  fetchFeatureFlags$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchFeatureFlags),
      switchMap((action) => {
        return this.featureFlagsService.getConfig().pipe(
          switchMap((res) => {
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
