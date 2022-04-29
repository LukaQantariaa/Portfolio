import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @Input()
  public duration!: number;

  @ViewChild('qr', { static: true }) qrEl!: ElementRef;

  public percent: number = 0;
  private maxBlur: number = 5;

  constructor() {}

  ngOnInit(): void {
    this.startTimer();
  }

  private startTimer(): void {
    const interval = setInterval(() => {
      this.percent += 1;
      this.blur();
      if (this.percent == 100) {
        clearInterval(interval);
      }
    }, this.duration * 10);
  }

  private blur(): void {
    const blurRadius: number =
      Math.abs(this.percent - 100) / (100 / this.maxBlur);
    this.qrEl.nativeElement.style.filter = `blur(${blurRadius}px)`;
  }
}
