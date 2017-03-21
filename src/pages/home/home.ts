import { Component } from '@angular/core';

import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { RadioPlayer } from '../../app/radio/radio';
import { AdMobPro } from '../../providers/admobpro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RadioPlayer, AdMobPro]
})
export class HomePage {
  player:any;
  playing:boolean;
  constructor(public navCtrl: NavController, 
              public radioPlyr: RadioPlayer,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              private adMobPro: AdMobPro ) {
    this.player = radioPlyr;
    this.playing = false;
  }

  play(){
    this.playing = true;
    // Create the popup
    let loadingPopup = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    // Show the popup
    loadingPopup.present();
    
    this.player.play().then(() => {
      loadingPopup.dismiss();
      console.log('Playing...');
    }).catch(() => {
      console.log('Error...');
      loadingPopup.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Oops! En estos momentos la radio está offline, por favor reintentelo mas tarde.',
        duration: 5000,
        position: 'middle'
      });
      toast.present();
      this.playing = false;
    });
  }

  pause(){
    this.playing = false;
    this.player.pause();
    console.log('Stop...');
  }

  showBanner(){
  	console.log('showBanner');
  	this.adMobPro.showBanner();
  }

  removeBanner(){
  	console.log('removeBanner');
  	this.adMobPro.removeAds();
  }

  showInterstitial(){
  	console.log('showInterstitial');
  	this.adMobPro.showInterstitial();
  }

}
