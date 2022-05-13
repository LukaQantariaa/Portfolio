import { createAction, props } from '@ngrx/store';
import { ThemeTypes } from 'src/app/interfaces/theme.interface';

export const changeActiveTheme = createAction(
  '[CHANGE] Change Active Theme',
  props<{ theme: ThemeTypes }>()
);

export const setActiveTheme = createAction(
  '[SAVE] Save Active Theme',
  props<{ theme: ThemeTypes }>()
);
