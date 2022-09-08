import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModalComponent } from '../modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule,
    FontAwesomeModule],
  declarations: [HomePage, ModalComponent],
  exports: [HomePage, ModalComponent]
})
export class HomePageModule { }
