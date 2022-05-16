import { Component, Input, OnInit, Optional } from '@angular/core';
import { TypeWriterConfig } from 'src/app/interfaces/typewriter.interface';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit {
  @Input() @Optional() fileName: string = 'about-me.ts';
  @Input() @Optional() typeWriterConfig!: TypeWriterConfig;

  constructor(private generalService: GeneralService) {
    // Default state of configs
    this.typeWriterConfig = this.generalService.getTypewriterConfig();
  }

  ngOnInit(): void {}
}
