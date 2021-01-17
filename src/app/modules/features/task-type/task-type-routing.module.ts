import { AddTaskTypeComponent } from './components/add-task-type/add-task-type.component';
import { AllTaskTypeComponent } from './components/all-task-type/all-task-type.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'task-type',
    pathMatch: 'full'
  }
  ,
  {
    path: '',
    component: AllTaskTypeComponent
  },
  {
    path: 'all',
    component: AllTaskTypeComponent
  },
  {
    path: 'add',
    component: AddTaskTypeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskTypeRoutingModule { }
