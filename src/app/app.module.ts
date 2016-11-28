import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {MenuPage} from '../pages/menu/menu';
import {IngredientsPage} from '../pages/ingredients/ingredients';
import { ElasticHeader } from '../components/elastic-header';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    MenuPage,
    IngredientsPage,
    ElasticHeader
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    MenuPage,
    IngredientsPage
  ],
  providers: []
})
export class AppModule {}
