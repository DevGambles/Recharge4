import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
	
import { IonicModule } from '@ionic/angular';

import { SplashPageRoutingModule } from './splash-routing.module';

import { SplashPage } from './splash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    SplashPageRoutingModule
  ],
  declarations: [SplashPage]
})
export class SplashPageModule {}
