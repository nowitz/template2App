import {Injectable} from '@angular/core';
import {Platform, ToastController} from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Provider pro nastaveni ovladani HW tlacitna
 */
@Injectable()
export class BackButton {

    backbutton: number = 0;
    constructor(public platform: Platform, public toastController: ToastController) {
    }

    //Funkce pro nastaveni 2x back -> vypnuti aplikace
    closeApp() {
        this.platform.ready().then(() => {
            this.platform.registerBackButtonAction(() => {
                if (this.backbutton == 0) {
                    this.backbutton++;

                    this.presentToast();
                    setTimeout(() => {
                        this.backbutton = 0;
                    }, 1500);

                } else {
                    navigator['app'].exitApp(); //zavreni aplikace
                }
            });
        });
    }

    //Funkce pro natavni 1x back -> zpet na predchozi obrazovku
    popApp(navCtl:any) {
        this.platform.ready().then(() => {
            this.platform.registerBackButtonAction(() => {
                navCtl.pop();
            });
        })
    }

    presentToast() {
        let toast = this.toastController.create({
            message: 'jeste jednou a zavres aplikaci',
            duration: 2000,
            position: "middle"
        });
        toast.present();
    }

}