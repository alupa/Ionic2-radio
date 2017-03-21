import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//import { AdMob } from 'ionic-native';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      /*interface adType {
        banner: string,
        interstitial: string
      }

      var admobid: adType;

      if(platform.is('android')) {
				admobid = { // for Android
					banner: 'ca-app-pub-1433877331126192/1481620469',
					interstitial: 'ca-app-pub-1433877331126192/9710054066'
				};
			}

		  if(platform.is('ios')){
		    admobid = { // for iOS
					banner: 'xxxxx',
					interstitial: 'xxxxx'
		    };
		  }

      if(AdMob) AdMob.createBanner({adId: admobid.banner, adSize:'SMART_BANNER', isTesting: true}).then(() => {
        AdMob.showBanner(8);
      });

      
      if(AdMob) AdMob.prepareInterstitial({adId: admobid.interstitial, autoShow: true, isTesting: true}).then(() => {
        AdMob.showInterstitial();
      });*/

    });
  }
}
