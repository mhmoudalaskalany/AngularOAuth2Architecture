import { AddTicketStatusComponent } from './components/add-ticket-status/add-ticket-status.component';
import { AllTicketStatusComponent } from './components/all-ticket-status/all-ticket-status.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ticket-status',
    pathMatch: 'full'
  }
  ,
  {
    path: '',
    component: AllTicketStatusComponent
  },
  {
    path: 'all',
    component: AllTicketStatusComponent
  },
  {
    path: 'add',
    component: AddTicketStatusComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketStatusRoutingModule { }
