import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { ModalPage } from '../modalPage/modalPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }

  openModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  doWork() {
   var list = [];
    for (let i = 0; i < 100; i++) {
      console.log (i + 1);
      list.push(i);
    }
    return list;
  }

}
