import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, MenuController} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {Storage} from '@ionic/storage';

import {UserI} from "../interface/userI";


import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/welcome/login/login';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;
    user: UserI;

    constructor(public platform: Platform, private storage: Storage, public menuController: MenuController) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();

            //COMMENT simulace prihlaseni
            // let tmp: UserI = {
            //     login: "nowitz",
            //     firstName: "jan",
            //     lastName: "novak"
            // };
            //
            // this.storage.set('user', tmp);

            this.storage.get('user').then((val) => {
                if (val !== null) {
                    this.user = val;
                    this.nav.setRoot(HomePage);
                } else {
                    this.nav.setRoot(LoginPage);
                    // this.menuController.enable(false);
                    this.menuController.swipeEnable(false);
                }
            });

            this.platform.registerBackButtonAction(() => {
                // navigator['app'].exitApp();
                this.nav.pop();
            });

        });
    }

    goHome() {
        this.nav.setRoot(HomePage);
    }

}
