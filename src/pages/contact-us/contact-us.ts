import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig ,AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private adMobFree: AdMobFree) {   
    this.showInterstitialAd();
    this.showBannerAd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  async showInterstitialAd() {
    try {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: 'ca-app-pub-7651246904710703/7791443851',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.interstitial.config(interstitialConfig);

      const result = await this.adMobFree.interstitial.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e)
    }
  }

  async showBannerAd() {
    try {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: 'ca-app-pub-7651246904710703/6556302127',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.banner.config(bannerConfig);

      const result = await this.adMobFree.banner.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }

}
