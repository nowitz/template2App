import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

import {Storage} from '@ionic/storage';

import {UserI} from "../../../interface/userI";
import {HomePage} from '../../home/home';

/*
  Prihlaseni
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public menuController: MenuController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){
    //FIXME overeni loginu -> presmerovani
    let tmp: UserI = {
        login: "nowitz",
        firstName: "jan",
        lastName: "novak"
    };
    this.goHome(tmp);
  }

  goHome(user: UserI){
    this.storage.set('user', user).then(() =>{
        this.navCtrl.setRoot(HomePage)
    });
  }

  ionViewWillLeave() {
    this.menuController.enable(true);
  }

}
