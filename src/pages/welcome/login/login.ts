import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import {Storage} from '@ionic/storage';

import {UserI} from "../../../interface/userI";
import {HomePage} from '../../home/home';
import {RegistrationPage} from "../registration/registration";

import { BackButton } from '../../../providers/back-button';

/*
  Prihlaseni
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  tab : any;
  constructor(public navCtrl: NavController, public storage: Storage, public menuController: MenuController, private backButton: BackButton) {
  }

  //Po nacteni stranky se zakaze postrani menu a nastavi se back tlacicko
  ionViewDidLoad() {
    this.backButton.closeApp();
    this.menuController.swipeEnable(false);
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
        this.navCtrl.setRoot(HomePage);
    });
  }

  goRegistration(){
    this.navCtrl.push(RegistrationPage);
  }


}
