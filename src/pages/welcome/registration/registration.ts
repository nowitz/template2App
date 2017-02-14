import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BackButton } from '../../../providers/back-button';

/*
  Registrace
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, private backButton: BackButton) {
  }

  ionViewDidLoad() {
    this.backButton.popApp(this.navCtrl);
  }

  ionViewWillLeave() {
    this.backButton.closeApp();
  }


  //FIXME bude se volat po registraci uzivatele
  onLogin(){
    this.navCtrl.pop();
  }


}
