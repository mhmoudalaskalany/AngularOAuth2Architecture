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
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';
import { FooterComponent } from './footer/footer.component';
import { ContentAnimateDirective } from './directives/content-animate.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsPanelComponent,
    FooterComponent,
    SpinnerComponent,
    EnglishNamePatternDirective,
    ArabicNamePatternDirective,
    DeviceArabicNamePatternDirective,
    DeviceEnglishNamePatternDirective,
    ContentAnimateDirective
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
    }),
    ChartsModule,
    CarouselModule,
    NgbModule
  ],
  exports: [
    LoadingSpinnerComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsPanelComponent,
    FooterComponent, SpinnerComponent,
    EnglishNamePatternDirective,
    ArabicNamePatternDirective,
    DeviceArabicNamePatternDirective,
    DeviceEnglishNamePatternDirective,
    ContentAnimateDirective,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ChartsModule,
    CarouselModule,
    NgbModule
  ],
  providers: [ThemeService]
})
export class SharedModule { }
