import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import {Storage} from '@ionic/storage';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


import {UserI} from "../../../interface/userI";
import {HomePage} from '../../home/home';
import {RegistrationPage} from "../registration/registration";

/**
  Prihlaseni
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  loginData:any = {};
  private loginForm : FormGroup;

  constructor(public navCtrl: NavController, public storage: Storage, public menuController: MenuController,
              private formBuilder: FormBuilder ) {
    this.loginForm = this.formBuilder.group({
      username: [Validators.required], //FIXME opravit validaci(pridat apostrofy) '',
      password: [Validators.required]  //FIXME opravit validaci(pridat apostrofy) '',
    });
  }

  //Po nacteni stranky se zakaze otvirani postrani menu
  ionViewDidLoad() {
    this.menuController.swipeEnable(false);
  }

  login() {
    //FIXME overeni loginu(loginData) -> vyrazeni a ulozeni uzovatele do pameti -> presmerovani
    this.goHome(this.loginData);
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
