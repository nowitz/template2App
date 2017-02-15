import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpModule, Http} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { LoginPage } from '../pages/welcome/login/login';
import { RegistrationPage } from '../pages/welcome/registration/registration';
import { SettingPage } from '../pages/setting/setting';

import { BackButton } from '../providers/back-button';
import { ConnectNetwork } from '../providers/connect-network';

// AoT requires an exported function for factories
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/language/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    LoginPage,
    RegistrationPage,
    SettingPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    LoginPage,
    RegistrationPage,
    SettingPage

  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    BackButton,
    ConnectNetwork
  ]
})
export class AppModule {}
