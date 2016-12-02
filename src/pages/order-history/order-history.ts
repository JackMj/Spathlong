import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the OrderHistory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html'
})
export class OrderHistoryPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello OrderHistoryPage Page');
  }

}
