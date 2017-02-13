import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { InfoPage } from '../pages/info/info';
import { LoginPage } from '../pages/welcome/login/login';
import { RegistrationPage } from '../pages/welcome/registration/registration';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    WelcomePage,
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
    WelcomePage,
    LoginPage,
    RegistrationPage

  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
