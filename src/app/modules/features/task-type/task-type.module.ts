import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskTypeRoutingModule } from './task-type-routing.module';
import { AddTaskTypeComponent } from './components/add-task-type/add-task-type.component';
import { AllTaskTypeComponent } from './components/all-task-type/all-task-type.component';


@NgModule({
  declarations: [AddTaskTypeComponent, AllTaskTypeComponent],
  imports: [
    CommonModule,
    TaskTypeRoutingModule
  ]
})
export class TaskTypeModule { }
