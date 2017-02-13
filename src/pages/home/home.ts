import {Component} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';

import {Storage} from '@ionic/storage';

import {LoginPage} from '../welcome/login/login';

/*
 Domovsha stranka
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public menuController: MenuController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');

        this.storage.get('user').then((val) => {
            if (val !== null) {
                // this.navCtrl.popToRoot()
                console.log("homepage");
                console.log(val);
                this.menuController.swipeEnable(true);
            }
        });

    }

    logout(){
        this.storage.remove('user').then(()=>this.navCtrl.setRoot(LoginPage));
    }

}
