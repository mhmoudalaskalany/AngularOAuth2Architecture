import { TicketStatusModule } from './../ticket-status/ticket-status.module';
import { TaskTypeModule } from './../task-type/task-type.module';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/components/home.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then((m) => m.AccountModule),
      },
      {
        path: 'ticket',
        loadChildren: () => import('../ticket/ticket.module').then(m => m.TicketModule),

      },
      {
        path: 'task',
        loadChildren: () => import('../task/task.module').then(m => m.TaskModule),

      },
      {
        path: 'internal-task',
        loadChildren: () => import('../internal-task/internal-task.module').then(m => m.InternalTaskModule),

      }
      ,
      {
        path: 'action',
        loadChildren: () => import('../action/action.module').then(m => m.ActionModule),

      }
      ,
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then(m => m.HistoryModule),

      }
      ,
      {
        path: 'task-type',
        loadChildren: () => import('../task-type/task-type.module').then(m => m.TaskTypeModule),

      },
      {
        path: 'ticket-status',
        loadChildren: () => import('../ticket-status/ticket-status.module').then(m => m.TicketStatusModule),

      }
    ],
  }

];

@NgModule({
  imports: [

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
