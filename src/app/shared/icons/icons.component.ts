import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
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

  constructor(private element: ElementRef, private iconService: IconService) {}
}
