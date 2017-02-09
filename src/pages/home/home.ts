import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Storage} from '@ionic/storage';

import {WelcomePage} from '../welcome/welcome';

/*
 Domovsha stranka
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');

        this.storage.get('user').then((val) => {
            if (val !== null) {
                // this.navCtrl.popToRoot()
                console.log("homepage");
                console.log(val);
            }
        });

    }

    logout(){
        this.storage.remove('user').then(()=>this.navCtrl.setRoot(WelcomePage));
    }

}
