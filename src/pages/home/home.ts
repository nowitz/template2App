import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

import {Storage} from '@ionic/storage';
import {BackButton} from '../../providers/back-button';


/*
 Domovsha stranka
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public storage: Storage,
                public menuController: MenuController, private backButton: BackButton) {
    }

    ionViewDidLoad() {
        this.storage.get('user').then((val) => {
            if (val !== null) {
                console.log("homepage");
                console.log(val);
                this.menuController.swipeEnable(true);
                this.backButton.closeApp();
            }
        });
    }

}
