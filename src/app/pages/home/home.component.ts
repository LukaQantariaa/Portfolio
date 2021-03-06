import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import {
  selectCodeEditorVisibility,
  selectPageVisibility,
} from 'src/app/+stores/feature-flags-store/selectors';
import { FeatureFlagsState } from 'src/app/+stores/feature-flags-store/state';
import { AppState } from 'src/app/+stores/root.state';
import { selectAnimationState } from 'src/app/+stores/tabs-store/selectors';
import { TabsState } from 'src/app/+stores/tabs-store/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public animationIsCompleted$!: Observable<boolean>;
  public codeEditorVisibility$!: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private tabsStore: Store<TabsState>,
    private featureFlagsStore: Store<FeatureFlagsState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.codeEditorVisibility$ = this.store.select(selectCodeEditorVisibility);
    this.animationIsCompleted$ = this.tabsStore.select(selectAnimationState);
  }

  private getPageVisibility(pageName: string): void {
    this.store
      .select(selectPageVisibility(pageName))
      .pipe(
        filter((res) => res != null),
        take(1)
      )
      .subscribe((visibility) => {
        if (!visibility) this.router.navigate(['404']);
      });
  }
}
