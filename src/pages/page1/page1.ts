import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {MenuPage} from '../../pages/menu/menu'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  menu;
  constructor(public navCtrl: NavController) 
  {
    this.menu =   MenuPage;
  }

}
