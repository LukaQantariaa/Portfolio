import { Component, Input, OnInit } from '@angular/core';
import { TypeWriterConfig } from 'src/app/interfaces/typewriter.interface';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit {
  @Input() fileName: string = 'about-me.ts';
  @Input() typeWriterConfig: TypeWriterConfig = {
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

  constructor() {}

  ngOnInit(): void {
    console.log('code init');
  }
}
