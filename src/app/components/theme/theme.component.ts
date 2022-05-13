import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FeatureFlagsState } from 'src/app/+stores/feature-flags-store/state';
import { changeActiveTheme } from 'src/app/+stores/tabs-store/actions';
import { activeTheme } from 'src/app/+stores/tabs-store/selectors';
import { TabsState } from 'src/app/+stores/tabs-store/state';
import { ThemeTypes } from 'src/app/interfaces/theme.interface';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit, OnDestroy {
  private unsibscrube$ = new Subject<void>();

  @Input()
  public themeList!: FeatureFlagsState['data']['themes']['list'];

  public activeTheme!: ThemeTypes;

  constructor(private store: Store<TabsState>) {}

  ngOnInit(): void {
    this.listenThemeChanges();
  }

  private listenThemeChanges(): void {
    this.store
      .select(activeTheme)
      .pipe(takeUntil(this.unsibscrube$))
      .subscribe((theme) => {
        this.activeTheme = theme;
      });
  }

  public selectTheme(theme: ThemeTypes): void {
    this.store.dispatch(changeActiveTheme({ theme: theme }));
  }

  ngOnDestroy(): void {
    this.unsibscrube$.next();
    this.unsibscrube$.complete();
  }
}
