import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdMobFree , AdMobFreeBannerConfig , AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
import { FileProvider } from '../../providers/file/file';


@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

 
    getP1:any;
    getP2:any;
  

  public items:any;
  BG:any;
  title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams , private File:FileProvider , private adMobFree: AdMobFree) {
    this.leadDataFromList2();
    this.getInfo();
    this.showInterstitialAd();
    this.showBannerAd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

  leadDataFromList2(){
   
      this.getP1 = this.navParams.get("position_1");
      this.getP2 = this.navParams.get("position_2");
   
  }


  getInfo(){
    
    
    this.File.getData()
    .subscribe(data => {

      var count = Object.keys(data.list[this.getP1].array[this.getP2].content.makadir).length;
      
      let tems=new Array();
      this.BG = "url(\'"+data.list[this.getP1].array[this.getP2].content.imgMkadir+"\')";
      console.log(data.list[this.getP1].array[this.getP2].content);

      this.title = data.list[this.getP1].array[this.getP2].title;
      
      for(let i=0;i<count;i++)
      {
    
        tems.push(data.list[this.getP1].array[this.getP2].content.makadir[i]);
  
      }
      this.items=tems;
      
    });
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
