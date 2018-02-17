import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { List2Page } from '../list2/list2';
import { AdMobFree , AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { FileProvider } from '../../providers/file/file';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash :any;

  //had variable bach naficher list dyal les carts li kayeni fi Home.html
  //had variable kaymiyez bi anak t9ed t7et fiha 2 dyal les variable wtkhedem biom fi loop w7eda

  public posts : any ;
   
  constructor(public navCtrl: NavController , private navParams:NavParams , private File:FileProvider , private adMobFree: AdMobFree ) {
    //hadi bach n3ayet 3la function li sawebt bach ghi tkhdem had l page tkhadem function
    this.getLoadFile();
    this.showBannerAd();
  }


  //had function hiya li mes2ola bach tjib json file 
  getLoadFile(){
    // had setar hwa li kayejib json file w kay7eto fi variable data
    this.File.getData()
    .subscribe(data => {

      let osts = new Array();

      var count = Object.keys(data.list).length;
      //had loop bach n7et bachground li kayena fi json file fi variable bachground
      for(let i=0;i<count;i++)
      {
        osts.push(data.list[i]);
      }
      this.posts= osts;
    }); 
    
  }


  nextPage(dataPassed){
    this.navCtrl.push(List2Page,{pass:dataPassed});
  }
  
  ionViewDidLoad(){

    if(this.navParams.get('splish') == undefined ){
      this.splash = true;
    }else{
      this.splash = false;
    }

    setTimeout( () => { this.splash=false }, 3500);
  
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