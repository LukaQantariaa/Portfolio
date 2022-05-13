import { Injectable } from '@angular/core';
import { ThemeTypes } from '../interfaces/theme.interface';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}

  public getThemeTypes(): Array<String> {
    return ['Light', 'Dark', 'Chocolate'];
  }

  public getDefaultTheme(): ThemeTypes {
    return 'Light';
  }
}
