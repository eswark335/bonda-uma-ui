import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDevelopmentComponent } from './local-development.component';
import { LocalDevelopmentRoutingModule } from './local-development-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LocalDevelopmentRoutingModule,
    LocalDevelopmentComponent
  ]
})
export class LocalDevelopmentModule {}