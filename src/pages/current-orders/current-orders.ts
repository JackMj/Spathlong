import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CurrentOrders page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-current-orders',
  templateUrl: 'current-orders.html'
})
export class CurrentOrdersPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CurrentOrdersPage Page');
  }

}
