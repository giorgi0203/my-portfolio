import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { LandingRoutingModule } from './landing-routing.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    LandingRoutingModule,
    CommonModule
  ]
})
export class LandingModule { }
