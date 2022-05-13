import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, take, takeUntil } from 'rxjs/operators';
import { selectPageVisibility } from 'src/app/+stores/feature-flags-store/selectors';
import { AppState } from 'src/app/+stores/root.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.getPageVisibility('home');
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
