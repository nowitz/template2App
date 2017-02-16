import {Component} from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';

import {Storage} from '@ionic/storage';

/**
 Domovsha stranka
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public storage: Storage,
                public menuController: MenuController) {
    }

    ionViewDidLoad() {
        this.storage.get('user').then((val) => {
            if (val !== null) {
                //Po nacteni stranky se povoli otvirani postraniho menu
                this.menuController.swipeEnable(true);
            }
        });
    }

}
