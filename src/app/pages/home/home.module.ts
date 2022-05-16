import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TypewriterDirective } from 'src/app/directives/typewriter.directive';
import { CodeEditorComponent } from 'src/app/components/code-editor/code-editor.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';

@NgModule({
  declarations: [HomeComponent, TypewriterDirective, CodeEditorComponent],
  imports: [CommonModule, HomeRoutingModule, IconsModule],
  providers: [{ provide: 'config', useValue: 'asd' }],
})
export class HomeModule {}
