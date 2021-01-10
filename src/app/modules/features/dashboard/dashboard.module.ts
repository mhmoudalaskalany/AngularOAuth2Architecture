
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { CoreModule } from 'core/core.module';
import { SharedModule } from 'shared/shared.module';
import { HomeComponent } from './components/home/components/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    DashboardRoutingModule,

  ],
  exports: [
  ]
})
export class DashboardModule { }
