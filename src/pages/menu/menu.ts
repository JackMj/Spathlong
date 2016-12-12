import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IngredientsPage} from ''
import { ElasticHeader } from '../components/elastic-header/elastic-header';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  nav
  constructor(public navCtrl: NavController) 
  {
    this.nav =   MenuPage;
     
  }

  ionViewDidLoad() {
    console.log('Hello MenuPage Page');
  }

}
