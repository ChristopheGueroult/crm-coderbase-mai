import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from 'projects/ui/src/public-api';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [UiModule, IconsModule, TemplatesModule],
})
export class CoreModule {}
