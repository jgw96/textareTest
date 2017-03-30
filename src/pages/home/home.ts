import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { ModalPage } from '../modalPage/modalPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.doWork();
  }

  openModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  doWork() {
    for (let i = 0; i < 1000; i++) {
      console.log (i + 1);
    }
  }

}
