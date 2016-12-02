import {  Component, ViewChild, ElementRef} from '@angular/core';
import { PopoverController, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {MenuPage} from '../../pages/menu/menu'

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
 @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
  menu;
  constructor(public navCtrl: NavController,private popoverCtrl: PopoverController) 
  {
    this.menu =   MenuPage;
  }
  presentPopover(ev) 
  {

    let popover = this.popoverCtrl.create(Page1, 
    {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present
    ({
      ev: ev
    });
  }
  

}
