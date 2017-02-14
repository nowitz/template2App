import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackButton } from '../../providers/back-button';


@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  constructor(public navCtrl: NavController, private backButton: BackButton) {}

  ionViewDidLoad() {
    this.backButton.popApp(this.navCtrl);
  }

  ionViewWillLeave() {
    this.backButton.closeApp();
  }

}
