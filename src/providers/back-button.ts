import {Injectable} from '@angular/core';
import {Platform, ToastController, MenuController} from 'ionic-angular';

import {TranslateService} from '@ngx-translate/core';

/**
 * Provider pro nastaveni ovladani HW tlacitna
 */
@Injectable()
export class BackButton {

    backbutton: number = 0;

    constructor(public platform: Platform, public toastController: ToastController, private menuController: MenuController, public translate: TranslateService) {
    }

    registerBackButtonListener(navCtl: any) {
        this.platform.ready().then(() => {
            this.platform.registerBackButtonAction(() => {

                if(this.menuController.isOpen()){
                    this.menuController.close();
                }
                else if (navCtl.canGoBack()) {
                    navCtl.pop();
                }
                else {
                    if (this.backbutton == 0) {
                        this.backbutton++;

                        this.presentToast();
                        setTimeout(() => {
                            this.backbutton = 0;
                        }, 1500);

                    } else {
                        navigator['app'].exitApp(); //zavreni aplikace
                    }
                }
            });
        });
    };

    presentToast() {
        let toast = this.toastController.create({
            message: "jeste jednou a ukoncite aplikaci",
            duration: 2000,
            position: "middle"
        });
        toast.present();
    }

}