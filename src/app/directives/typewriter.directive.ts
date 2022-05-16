import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { TypeWriterConfig } from '../interfaces/typewriter.interface';

@Directive({
  selector: '[appTypewriter]',
})
export class TypewriterDirective implements OnInit {
  @Input() appTypewriter!: TypeWriterConfig;

  private chars: number = 0;
  private lines: number = 0;
  private words: number = 0;
  private paragraphEl!: Node;
  private spanEl!: Node;

  private minHeight: number = 25;

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnInit(): void {
    if (this.appTypewriter) {
      this.createNewLine();
      this.typeWriter();
    }
  }

  private typeWriter(): void {
    if (this.words < this.appTypewriter.content[this.lines].length) {
      if (
        this.chars <
        this.appTypewriter.content[this.lines][this.words].value.length
      ) {
        if (this.chars === 0) {
          this.createNewSpan(
            this.appTypewriter.content[this.lines][this.words].color || 'white'
          );
        }
        // Add new character
        this.spanEl.textContent +=
          this.appTypewriter.content[this.lines][this.words].value[this.chars];
        this.chars++;
        setTimeout(this.typeWriter.bind(this), this.appTypewriter.typeSpeed);
      } else {
        this.chars = 0;
        this.words++;
        setTimeout(this.typeWriter.bind(this), this.appTypewriter.typeSpeed);
      }
    } else {
      this.chars = 0;
      this.words = 0;
      this.lines++;
      if (this.lines < this.appTypewriter.content.length) {
        this.createNewLine();
        setTimeout(
          this.typeWriter.bind(this),
          this.appTypewriter.typeSpeed * 2
        );
      }
    }
  }

  private createNewLine(): void {
    this.paragraphEl = this.renderer.createElement('p');
    this.renderer.setStyle(
      this.paragraphEl,
      'min-height',
      `${this.minHeight}px`
    );
    this.renderer.appendChild(this.element.nativeElement, this.paragraphEl);
  }

  private createNewSpan(color: string): void {
    this.spanEl = this.renderer.createElement('span');
    this.renderer.setStyle(this.spanEl, 'color', color);
    this.renderer.setStyle(this.spanEl, 'min-height', `${this.minHeight}px`);
    this.renderer.setStyle(
      this.spanEl,
      'font-family',
      this.appTypewriter.fontFamily
    );
    this.renderer.appendChild(this.paragraphEl, this.spanEl);
  }
}
