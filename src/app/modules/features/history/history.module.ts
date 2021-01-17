import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { AllHistoryComponent } from './components/all-history/all-history.component';
import { AddHistoryComponent } from './components/add-history/add-history.component';


@NgModule({
  declarations: [AllHistoryComponent, AddHistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
