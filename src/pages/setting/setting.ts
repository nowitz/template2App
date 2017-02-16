import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {TranslateService} from '@ngx-translate/core';

/**
 Nastaveni
 */
@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html'
})
export class SettingPage {

    valueLang:any;

    constructor(public navCtrl: NavController, private translate: TranslateService) {
    }

    ionViewDidLoad() {
        this.valueLang = this.translate.currentLang;
    }

    changeLanguage(valueLang) {
        this.translate.use(valueLang);
    }



}
