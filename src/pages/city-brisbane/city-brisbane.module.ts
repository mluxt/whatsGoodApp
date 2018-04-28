import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CityBrisbanePage } from './city-brisbane';

@NgModule({
  declarations: [
    CityBrisbanePage,
  ],
  imports: [
    IonicPageModule.forChild(CityBrisbanePage),
  ],
})
export class CityBrisbanePageModule {}
