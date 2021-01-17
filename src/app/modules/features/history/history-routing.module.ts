import { AddHistoryComponent } from './components/add-history/add-history.component';
import { AllHistoryComponent } from './components/all-history/all-history.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes  = [
  {
    path: '',
    redirectTo: 'history',
    pathMatch: 'full'
  }
  ,
  {
    path: '',
    component: AllHistoryComponent
  },
  {
    path: 'all',
    component: AllHistoryComponent
  },
  {
    path: 'add',
    component: AddHistoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
