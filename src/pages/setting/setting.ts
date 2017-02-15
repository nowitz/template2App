import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BackButton} from '../../providers/back-button';


import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html'
})
export class SettingPage {

    valueLang:any;

    constructor(public navCtrl: NavController, private backButton: BackButton, private translate: TranslateService) {
    }

    ionViewDidLoad() {
        this.backButton.popApp(this.navCtrl);
        console.log(this.translate.currentLang);
        this.valueLang = this.translate.currentLang;
    }

    ionViewWillLeave() {
        this.backButton.closeApp();
    }

    changeLanguage(valueLang) {
        this.translate.use(valueLang);
    }



}
