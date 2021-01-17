import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModules } from './primeng';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeNgModules,
    NgSelectModule
  ],
  exports: [ PrimeNgModules, NgSelectModule]
})
export class ThirdPartyModule { }
