import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

import { LoginPage } from '../welcome/login/login';
import { RegistrationPage } from '../welcome/registration/registration';

/*
  Uvodni tab s moznosti prihlaseni/registrace
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  loginTab: any;
  registrationTab: any;

  constructor(public menuController: MenuController) {
    this.menuController.enable(false);
  }

  ngOnInit(){
    this.loginTab = LoginPage;
    this.registrationTab = RegistrationPage;
  }

}
