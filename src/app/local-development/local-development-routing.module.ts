import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalDevelopmentComponent } from './local-development.component';

const routes: Routes = [
  { path: '', component: LocalDevelopmentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalDevelopmentRoutingModule {}