import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';

import { CityGoldcoastPage } from '../pages/city-goldcoast/city-goldcoast';
import { CityBrisbanePage } from '../pages/city-brisbane/city-brisbane';
import { CitySydneyPage } from '../pages/city-sydney/city-sydney';

import { ClubBedroomPage } from '../pages/club-bedroom/club-bedroom';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    CityGoldcoastPage,
    CityBrisbanePage,
    CitySydneyPage,
    ClubBedroomPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    CityGoldcoastPage,
    CityBrisbanePage,
    CitySydneyPage,
    ClubBedroomPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
