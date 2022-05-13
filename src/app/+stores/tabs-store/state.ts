import { ThemeTypes } from 'src/app/interfaces/theme.interface';

export interface TabsState {
  activeTheme: ThemeTypes;
}

export const initialState: TabsState = {
  activeTheme: 'Light',
};
