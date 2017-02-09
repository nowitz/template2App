import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Registrace
*/
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  //FIXME bude se volat po registraci uzivatele
  onLogin(){
    //presmerovani na login
    this.navCtrl.parent.select(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
