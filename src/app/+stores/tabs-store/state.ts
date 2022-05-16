import { ThemeTypes } from 'src/app/interfaces/theme.interface';

export interface TabsState {
  activeTheme: ThemeTypes;
  animationCompleted: boolean;
}

export const initialState: TabsState = {
  activeTheme: 'Light',
  animationCompleted: false,
};
