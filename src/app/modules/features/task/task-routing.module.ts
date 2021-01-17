
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AllTaskComponent } from './components/all-task/all-task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'core/services/guards/authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  }
  ,
  {
    path: '',
    component: AllTaskComponent,
    canActivate: [AuthGuard],
    data: { name: 'SERVICES-TASKS', permission: 'Permission.SERVICES-TASKS.View'}
  },
  {
    path: 'all',
    component: AllTaskComponent,
    canActivate: [AuthGuard],
    data: { name: 'SERVICES-TASKS', permission: 'Permission.SERVICES-TASKS.View'}
  },
  {
    path: 'add',
    component: AddTaskComponent,
    canActivate: [AuthGuard],
    data: { name: 'SERVICES-TASKS', permission: 'Permission.SERVICES-TASKS.Add'}
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
