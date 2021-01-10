import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { UnAuthorizedComponent } from './components/403/un-authorized/un-authorized.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-account',
    pathMatch: 'full'
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  }
  ,
  {
    path: '403',
    component: UnAuthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
