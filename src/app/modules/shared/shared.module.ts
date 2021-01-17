import { DeviceEnglishNamePatternDirective } from './../core/services/directives/deviceEnglishNameValidator.directive';
import { DeviceArabicNamePatternDirective } from './../core/services/directives/deviceArabicNameValidator.directive';
import { EnglishNamePatternDirective } from 'core/services/directives/englishNameValidator.directive';
import { ArabicNamePatternDirective } from './../core/services/directives/arabicNameValidator.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SettingsPanelComponent,
    FooterComponent,
    SpinnerComponent,
    ContentAnimateDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ChartsModule,
    NgbModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    SettingsPanelComponent,
    FooterComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule
  ],
  providers: [ThemeService]
})
export class SharedModule { }
