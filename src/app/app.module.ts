import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { LoginPage } from '../pages/welcome/login/login';
import { RegistrationPage } from '../pages/welcome/registration/registration';

import { BackButton } from '../providers/back-button';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    LoginPage,
    RegistrationPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    LoginPage,
    RegistrationPage

  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    BackButton
  ]
})
export class AppModule {}
