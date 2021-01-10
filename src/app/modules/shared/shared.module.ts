import { DeviceEnglishNamePatternDirective } from './../core/services/directives/deviceEnglishNameValidator.directive';
import { DeviceArabicNamePatternDirective } from './../core/services/directives/deviceArabicNameValidator.directive';
import { EnglishNamePatternDirective } from 'core/services/directives/englishNameValidator.directive';
import { ArabicNamePatternDirective } from './../core/services/directives/arabicNameValidator.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    EnglishNamePatternDirective,
    ArabicNamePatternDirective,
    DeviceArabicNamePatternDirective,
    DeviceEnglishNamePatternDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    LoadingSpinnerComponent,
    EnglishNamePatternDirective,
    ArabicNamePatternDirective,
    DeviceArabicNamePatternDirective,
    DeviceEnglishNamePatternDirective,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
