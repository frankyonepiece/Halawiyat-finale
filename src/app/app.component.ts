import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactUsPage } from '../pages/contact-us/contact-us';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any , icon: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen  ) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'الفئات', component: HomePage , icon: "md-filing"},
      { title: 'اتصل بنا', component: ContactUsPage , icon: "md-call"}
    ];
    this.platform.ready().then(() => {
          this.statusBar.backgroundColorByHexString('#fff82e');
          this.splashScreen.hide();
        });
  }


  openPage(page) {
    this.nav.setRoot(page.component, { splish: false } );
  }
}