import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClubBedroomPage } from '../club-bedroom/club-bedroom'



/**
 * Generated class for the CityGoldcoastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city-goldcoast',
  templateUrl: 'city-goldcoast.html',
})
export class CityGoldcoastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityGoldcoastPage');
  }

  openBedroomPage(){
    this.navCtrl.push(ClubBedroomPage);
  }

  cancel() {
    this.navCtrl.pop();
  }

}
