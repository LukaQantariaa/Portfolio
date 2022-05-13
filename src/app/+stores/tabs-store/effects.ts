import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createSelector, Store } from '@ngrx/store';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { GeneralService } from 'src/app/services/general.service';
import { TabsStoreState } from '.';
import { selectThemeVisibility } from '../feature-flags-store/selectors';
import { FeatureFlagsState } from '../feature-flags-store/state';
import { changeActiveTheme, setActiveTheme } from './actions';
import { TabsState } from './state';

@Injectable()
export class TabsStoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<FeatureFlagsState>
  ) {}

  changeActiveTheme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(changeActiveTheme),
      tap((action) => localStorage.setItem('theme', action.theme)),
      switchMap((action) => [setActiveTheme(action)])
    );
  });
}
