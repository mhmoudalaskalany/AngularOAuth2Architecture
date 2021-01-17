import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionRoutingModule } from './action-routing.module';
import { AddActionComponent } from './components/add-action/add-action.component';
import { AllActionComponent } from './components/all-action/all-action.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'shared-components/shared-components.module';


@NgModule({
  declarations: [AddActionComponent, AllActionComponent],
  imports: [
    CommonModule,
    TranslateModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ActionRoutingModule
  ]
})
export class ActionModule { }
