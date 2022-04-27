import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public themeType: string = 'light';

  ngOnInit(): void {}

  public onBtnClick() {
    this.themeType == 'light'
      ? (this.themeType = 'dark')
      : (this.themeType = 'light');
  }
}
