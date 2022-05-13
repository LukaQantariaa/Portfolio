import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { activeTheme } from 'src/app/+stores/tabs-store/selectors';
import { TabsState } from 'src/app/+stores/tabs-store/state';
import { ThemeTypes } from 'src/app/interfaces/theme.interface';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @Input()
  public duration!: number;

  @ViewChild('qr', { static: true }) qrEl!: ElementRef;

  @Output() onFinish = new EventEmitter<any>();

  public percent: number = 0;
  private maxBlur: number = 5;

  public themeName$!: Observable<ThemeTypes>;

  constructor(private store: Store<TabsState>) {}

  ngOnInit(): void {
    this.startTimer();
    this.themeName$ = this.store.select(activeTheme);
  }

  private startTimer(): void {
    const interval = setInterval(() => {
      this.percent += 1;
      this.blur();
      if (this.percent == 100) {
        this.onFinish.next();
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
