import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IConfig, ILoadingConfig } from './interfaces/config.interface';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        // animate('500ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate(
          '600ms',
          style({
            transform: 'translateY(-100%)',
            opacity: 0,
            filter: 'blur(6px)',
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public themeType: string = 'light';

  public featureFlagsConfig!: IConfig;
  public showLoadingPage: Boolean = false;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.getFeatureFlagConfig();
  }

  private getFeatureFlagConfig(): void {
    this.configService.getConfig().subscribe((data) => {
      this.featureFlagsConfig = data;
      if (data.loadingPage.visible)
        this.startLoadingTimer(data.loadingPage.duration);
    });
  }

  private startLoadingTimer(seconds: number): void {
    this.showLoadingPage = true;
    setTimeout(() => {
      this.showLoadingPage = false;
    }, seconds * 1000);
  }

  public onBtnClick() {
    this.themeType == 'light'
      ? (this.themeType = 'dark')
      : (this.themeType = 'light');
  }
}
