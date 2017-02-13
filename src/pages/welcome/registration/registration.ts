import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Registrace
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuController: MenuController) {
    // this.menuController.enable(false);
  }

  //FIXME bude se volat po registraci uzivatele
  onLogin(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
    // this.menuController.enable(false);
  }

}
