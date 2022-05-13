import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeatureFlagsState } from '../+stores/feature-flags-store/state';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  constructor(private http: HttpClient) {}

  public getConfig(): Observable<FeatureFlagsState['data']> {
    return this.http.get<FeatureFlagsState['data']>(
      'assets/config/feature-flag.config.json'
    );
  }
}
