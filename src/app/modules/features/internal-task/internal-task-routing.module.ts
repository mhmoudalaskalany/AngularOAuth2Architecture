import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'core/services/guards/authguard.guard';
import { AddInternalTaskComponent } from './components/add-internal-task/add-internal-task.component';
import { AllInternalTaskComponent } from './components/all-internal-task/all-internal-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'internal-task',
    pathMatch: 'full'
  }
  ,
{
    path: '',
    component: AllInternalTaskComponent,
    canActivate: [AuthGuard],
    data: { name: 'SERVICES-INTERNAL-TASKS', permission: 'Permission.SERVICES-INTERNAL-TASKS.View'}
},
{
  path: 'all',
  component: AllInternalTaskComponent,
  canActivate: [AuthGuard],
  data: { name: 'SERVICES-INTERNAL-TASKS', permission: 'Permission.SERVICES-INTERNAL-TASKS.View'}
},
{
  path: 'add',
  component: AddInternalTaskComponent,
  canActivate: [AuthGuard],
  data: { name: 'SERVICES-INTERNAL-TASKS', permission: 'Permission.SERVICES-INTERNAL-TASKS.Add'}
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalTaskRoutingModule { }
