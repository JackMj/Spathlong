import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Events} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {MenuPage} from '../pages/menu/menu';
import {IngredientsPage} from '../pages/ingredients/ingredients';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  events: Events
  pages: Array<{title: string, component: any}>;
  
  constructor(public platform: Platform, events: Events) {
    this.initializeApp();
    this.events = events;
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Page One', component: Page1 },
      { title: 'Page Two', component: Page2 }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
    orderHistory() 
   {
      this.events.publish('orderHistory', {});  
      console.log('publish') 
   }
  

}
