import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConfig } from '../interfaces/config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  public getConfig(): Observable<IConfig> {
    return this.http.get<IConfig>('assets/config/feature-flag.config.json');
  }
}
