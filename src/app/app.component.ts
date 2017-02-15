import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, MenuController, Config} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {Storage} from '@ionic/storage';
import {TranslateService} from '@ngx-translate/core';

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
                public connectNetwork:ConnectNetwork, public translate: TranslateService, private config: Config) {
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

            //nastaveni jazyka
            this.setLanguage();

        });
    }

    setLanguage(){
        this.translate.addLangs(["en", "cs"]); //nastaveni moznosti jazyka
        this.translate.setDefaultLang('en'); //defaultni nastaveni jazyka
        let browserLang = this.translate.getBrowserLang(); //zjisteni jazyka prohlizece
        this.translate.use(browserLang.match(/en|cs/) ? browserLang : 'en');

        //pokud nekde v aplikaci je BACK tak ho prelozim
        this.translate.get('BACK').subscribe((res: string) => {
            // Let android keep using only arrow
            this.config.set('ios', 'backButtonText', res);
            // To cange label for all platforms: this.config.set('backButtonText', res);
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
