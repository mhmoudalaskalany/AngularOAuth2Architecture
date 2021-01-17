
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalTaskRoutingModule } from './internal-task-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedComponentsModule } from 'shared-components/shared-components.module';
import { AllInternalTaskComponent } from './components/all-internal-task/all-internal-task.component';
import { AddInternalTaskComponent } from './components/add-internal-task/add-internal-task.component';


@NgModule({
  declarations: [AllInternalTaskComponent, AddInternalTaskComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    InternalTaskRoutingModule
  ]
})
export class InternalTaskModule { }
