import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { AccountRoutingModule } from './account-routing.module';
import { CoreModule } from 'core/core.module';
import { CommonModule } from '@angular/common';
import { UnAuthorizedComponent } from './components/403/un-authorized/un-authorized.component';


@NgModule({
  declarations: [
    UnAuthorizedComponent,
    MyAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AccountRoutingModule
  ]
})

export class AccountModule {
}
