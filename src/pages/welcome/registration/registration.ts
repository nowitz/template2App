import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
  Registrace
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController) {
  }

  //FIXME bude se volat po registraci uzivatele
  onLogin(){
    this.navCtrl.pop();
  }


}
