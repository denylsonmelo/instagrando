import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Pagina_1Page } from './../pages/pagina-1/pagina-1';
import { TabsPage } from '../pages/tabs/tabs';
import { Pagina_2Page } from '../pages/pagina-2/pagina-2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = Pagina_1Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
