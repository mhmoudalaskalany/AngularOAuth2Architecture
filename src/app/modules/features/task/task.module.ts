import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { AllTaskComponent } from './components/all-task/all-task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedComponentsModule } from 'shared-components/shared-components.module';



@NgModule({
  declarations: [AllTaskComponent, AddTaskComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
