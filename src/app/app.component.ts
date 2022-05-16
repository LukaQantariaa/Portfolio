import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { fetchFeatureFlags } from './+stores/feature-flags-store/actions';
import {
  selectFeatureFlagsState,
  selectThemeVisibility,
} from './+stores/feature-flags-store/selectors';
import { FeatureFlagsState } from './+stores/feature-flags-store/state';
import { AppState } from './+stores/root.state';
import {
  animationIsCompleted,
  changeActiveTheme,
  setActiveTheme,
} from './+stores/tabs-store/actions';
import { selectActiveTheme } from './+stores/tabs-store/selectors';
import { ThemeTypes } from './interfaces/theme.interface';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [style({ transform: 'translateY(0)', opacity: 1 })]),
      transition(':leave', [
        style({ transform: 'translateY(0)', opacity: 1 }),
        animate(
          '400ms',
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
export class AppComponent implements OnInit, OnDestroy {
  private unsibscrube$ = new Subject<void>();
  public themeType: string = 'light';
  public themeList!: FeatureFlagsState['data']['themes']['list'];
  public featureFlagsConfig!: FeatureFlagsState['data'];
  public showLoadingPage: boolean = false;
  public showThemes: boolean = false;

  constructor(
    private store: Store<AppState>,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {
    this.listenThemeChanges();
    this.listenFeatureFlagsChanges();
    this.dispatchFeatureFlags();
  }

  private listenThemeChanges(): void {
    this.store
      .select(selectActiveTheme)
      .pipe(takeUntil(this.unsibscrube$))
      .subscribe((theme) => {
        this.themeType = theme;
      });
  }

  private checkThemeFromLocalStorage(): void {
    const theme: ThemeTypes = localStorage.getItem('theme') as ThemeTypes;
    let themeIsAllowed: boolean = false;

    this.store
      .select(selectThemeVisibility(theme))
      .pipe(
        filter((theme) => theme != null),
        take(1)
      )
      .subscribe((allowed) => {
        themeIsAllowed = allowed;
      });

    if (
      theme &&
      this.generalService.getThemeTypes().includes(theme) &&
      themeIsAllowed
    ) {
      this.store.dispatch(setActiveTheme({ theme: theme }));
    } else {
      this.store.dispatch(
        changeActiveTheme({ theme: this.generalService.getDefaultTheme() })
      );
    }
  }

  private listenFeatureFlagsChanges(): void {
    this.store
      .select(selectFeatureFlagsState)
      .pipe(takeUntil(this.unsibscrube$))
      .subscribe((state: FeatureFlagsState) => {
        if (state.status == 'SUCCESS') {
          this.checkThemeFromLocalStorage();
        }
        this.featureFlagsConfig = state.data;
        this.themeList = this.featureFlagsConfig.themes.list;
        this.showLoadingPage = this.featureFlagsConfig.loadingPage.visible;
      });
  }

  private dispatchFeatureFlags(): void {
    this.store.dispatch(fetchFeatureFlags());
  }

  public toogleThemes(): void {
    this.showThemes = !this.showThemes;
  }

  public onAnimationFinish(): void {
    this.showLoadingPage = false;
    this.store.dispatch(animationIsCompleted());
  }

  ngOnDestroy(): void {
    this.unsibscrube$.next();
    this.unsibscrube$.complete();
  }
}
