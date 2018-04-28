import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ClubBedroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-club-bedroom',
  templateUrl: 'club-bedroom.html',
})
export class ClubBedroomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClubBedroomPage');
  }


  cancel() {
    this.navCtrl.pop();
  }
}
