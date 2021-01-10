
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/components/home.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then((m) => m.AccountModule),
      }
    ]
  }
];

@NgModule({
  imports: [

    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
