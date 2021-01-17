import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketStatusRoutingModule } from './ticket-status-routing.module';
import { AddTicketStatusComponent } from './components/add-ticket-status/add-ticket-status.component';
import { AllTicketStatusComponent } from './components/all-ticket-status/all-ticket-status.component';


@NgModule({
  declarations: [AddTicketStatusComponent, AllTicketStatusComponent],
  imports: [
    CommonModule,
    TicketStatusRoutingModule
  ]
})
export class TicketStatusModule { }
