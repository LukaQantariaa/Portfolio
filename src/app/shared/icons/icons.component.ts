import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-icons',
  template: ` <ng-content></ng-content> `,
  styles: [
    ':host::ng-deep svg{width: 50px; height: 50px; transition-duration: .3s}',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {
  @Output() onClick = new EventEmitter<any>();

  @Input()
  set name(iconName: string) {
    this.element.nativeElement.innerHTML =
      this.iconService.getIcon(iconName)[0].value;
  }

  @Input()
  set className(className: string) {
    this.element.nativeElement.classList.add(className);
  }

  @Input()
  set width(width: number) {
    this.element.nativeElement.children[0].style.width = width;
    this.element.nativeElement.children[0].style.height = width;
  }

  @Input()
  set cursor(cursor: string) {
    this.element.nativeElement.style.cursor = cursor;
  }

  @HostListener('click', ['$event'])
  click(e: any) {
    this.onClick.next();
  }

  constructor(private element: ElementRef, private iconService: IconService) {}
}
