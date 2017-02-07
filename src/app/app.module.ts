import { NgModule, ErrorHandler } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular'; //COMMENT nastaveni push notifikaci
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

const cloudSettings: CloudSettings = { //COMMENT nastaveni push notifikaci https://www.youtube.com/watch?v=7yXtzhqT1uk
  'core': {
    'app_id': 'c0bb3856' //odpovida ionic.config.json("app_id": "c0bb3856")
  },
  'push': {
    'sender_id': '686514125389',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings) //COMMENT nastaveni push notifikaci

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
