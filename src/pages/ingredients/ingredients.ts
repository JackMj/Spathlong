import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Ingredients page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ingredients',
  templateUrl: 'ingredients.html'
})
export class IngredientsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello IngredientsPage Page');
  }

}
