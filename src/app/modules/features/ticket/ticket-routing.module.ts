import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { AllTicketComponent } from './components/all-ticket/all-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'core/services/guards/authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ticket',
    pathMatch: 'full'
  }
  ,
  {
    path: '',
    component: AllTicketComponent,
    canActivate: [AuthGuard],
    data: { name: 'SERVICES-TICKETS', permission: 'Permission.SERVICES-TICKETS.View'}
  },
  {
    path: 'all',
    component: AllTicketComponent,
    canActivate: [AuthGuard],
    data: { name: 'SERVICES-TICKETS', permission: 'Permission.SERVICES-TICKETS.View'}
  },
  {
    path: 'add',
    component: AddTicketComponent,
    canActivate: [AuthGuard],
    data: { name: 'SERVICES-TICKETS', permission: 'Permission.SERVICES-TICKETS.Add' }
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
