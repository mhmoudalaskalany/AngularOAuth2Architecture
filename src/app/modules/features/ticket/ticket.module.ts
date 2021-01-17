import { SharedComponentsModule } from './../../shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { AllTicketComponent } from './components/all-ticket/all-ticket.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AllTicketComponent, AddTicketComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    TicketRoutingModule
  ]
})
export class TicketModule { }
