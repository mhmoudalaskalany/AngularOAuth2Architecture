import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/features/account/components/login/login.component';
import { AuthCallbackComponent } from 'features/account/components/auth-callback/auth-callback.component';
import { AuthGuard } from 'core/services/guards/authguard.guard';
import { Action } from 'core/services/guards/models';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: 'main',
    loadChildren: () => import('./modules/features/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    data: { permission: Action.Anonymous }
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
