import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navbar', { static: true })
  navbar!: ElementRef;

  private defaultWidth: number = 80;
  private maximizedWidth: number = 200;
  public logoWidth: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setDefaultWidth();
  }

  private setDefaultWidth(): void {
    this.navbar.nativeElement.style.width = `${this.defaultWidth}px`;
    this.logoWidth = this.defaultWidth - 20;
  }

  public onMouseOver(): void {
    this.navbar.nativeElement.style.width = `${this.maximizedWidth}px`;
    this.logoWidth = this.maximizedWidth - 20;
  }

  public onMouseout(): void {
    this.setDefaultWidth();
  }
}
