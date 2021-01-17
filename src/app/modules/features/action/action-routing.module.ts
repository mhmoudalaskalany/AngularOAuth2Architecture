import { AddActionComponent } from './components/add-action/add-action.component';
import { AllActionComponent } from './components/all-action/all-action.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'action',
    pathMatch: 'full'
  }
  ,
  {
    path: '',
    component: AllActionComponent
  },
  {
    path: 'all',
    component: AllActionComponent
  },
  {
    path: 'add',
    component: AddActionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionRoutingModule { }
