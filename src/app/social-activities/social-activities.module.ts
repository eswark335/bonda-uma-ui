import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialActivitiesComponent } from './social-activities.component';
import { SocialActivitiesRoutingModule } from './social-activities-routing.module';
import { MagazinesComponent } from './magazines/magazines.component';

@NgModule({
  imports: [
    CommonModule,
    SocialActivitiesRoutingModule,
    SocialActivitiesComponent,
    MagazinesComponent
  ]
})
export class SocialActivitiesModule {}