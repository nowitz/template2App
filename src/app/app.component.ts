import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, MenuController} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {Storage} from '@ionic/storage';

import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/welcome/login/login';
import {InfoPage } from '../pages/info/info';
import { ConnectNetwork } from '../providers/connect-network';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any;

    constructor(public platform: Platform, private storage: Storage, public menuController: MenuController,
                public connectNetwork:ConnectNetwork) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();

            this.storage.get('user').then((val) => {
                if (val !== null) {
                    this.nav.setRoot(HomePage);
                } else {
                    this.nav.setRoot(LoginPage);
                    this.menuController.swipeEnable(false);
                }
            });

        });
    }

    goHome() {
        this.nav.setRoot(HomePage);
    }


    goInfo() {
        this.nav.push(InfoPage);
    }

    logout() {
        this.storage.remove('user').then(() =>
            this.nav.setRoot(LoginPage));
    }

}
