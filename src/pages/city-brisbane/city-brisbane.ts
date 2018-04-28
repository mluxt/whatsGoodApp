import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CityBrisbanePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city-brisbane',
  templateUrl: 'city-brisbane.html',
})
export class CityBrisbanePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityBrisbanePage');
  }

  cancel() {
    this.navCtrl.pop();
  }
}
