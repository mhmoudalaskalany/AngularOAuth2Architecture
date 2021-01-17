import { BrowserModule, Title } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/* third parties module imports */
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';

/* custom modules imports */
import { CoreModule } from 'core/core.module';

/* custom components imports */
import { AppComponent } from './app.component';
import { ConfigService } from 'core/services/config/config.service';
import { LoginComponent } from 'features/account/components/login/login.component';
import { SharedModule } from 'shared/shared.module';
import { AuthCallbackComponent } from 'features/account/components/auth-callback/auth-callback.component';
import { TokenInterceptor } from 'core/services/interceptors/token.interceptor';


/* a head of compile functions */
const initializerConfigFn = (appConfig: ConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthCallbackComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializerConfigFn,
      multi: true,
      deps: [ConfigService],
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
