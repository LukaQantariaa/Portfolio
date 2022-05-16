import { Injectable } from '@angular/core';
import { ThemeTypes } from '../interfaces/theme.interface';
import { TypeWriterConfig } from '../interfaces/typewriter.interface';

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

  public getTypewriterConfig(): TypeWriterConfig {
    return {
      typeSpeed: 50,
      fontFamily: 'Monaco',
      content: [
        [
          {
            color: '#d273e3',
            value: 'const ',
          },
          {
            color: '#ca8c58',
            value: 'name ',
          },
          {
            color: '#17b9c4',
            value: '= ',
          },
          {
            color: '#8cc370',
            value: '"Luka"',
          },
          {
            color: '#a9b2c0',
            value: ';',
          },
        ],
        [
          {
            color: '#d273e3',
            value: 'const ',
          },
          {
            color: '#ca8c58',
            value: 'lastName ',
          },
          {
            color: '#17b9c4',
            value: '= ',
          },
          {
            color: '#8cc370',
            value: '"Qantaria"',
          },
          {
            color: '#a9b2c0',
            value: ';',
          },
        ],
        [
          {
            color: '#d273e3',
            value: 'const ',
          },
          {
            color: '#ca8c58',
            value: 'position ',
          },
          {
            color: '#17b9c4',
            value: '= ',
          },
          {
            color: '#8cc370',
            value: '"Front-End Developer"',
          },
          {
            color: '#a9b2c0',
            value: ';',
          },
        ],
        [
          {
            color: '#d273e3',
            value: 'const ',
          },
          {
            color: '#ca8c58',
            value: 'experience ',
          },
          {
            color: '#17b9c4',
            value: '= ',
          },
          {
            color: '#8cc370',
            value: '"3 years"',
          },
          {
            color: '#a9b2c0',
            value: ';',
          },
        ],
      ],
    };
  }
}
