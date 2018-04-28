import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CityGoldcoastPage } from '../city-goldcoast/city-goldcoast';
import { CityBrisbanePage } from '../city-brisbane/city-brisbane';
import { CitySydneyPage } from '../city-sydney/city-sydney';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  openGoldcoastPage() {
    this.navCtrl.push(CityGoldcoastPage)
  }

  openBrisbanePage() {
    this.navCtrl.push(CityBrisbanePage)
  }

  openSydneyPage() {
    this.navCtrl.push(CitySydneyPage)
  }

  openMelbournePage() {
    this.navCtrl.push(CityGoldcoastPage)
  }

  openPerthPage() {
    this.navCtrl.push(CityGoldcoastPage)
  }

  openAdelaidePage() {
    this.navCtrl.push(CityGoldcoastPage)
  }

}
