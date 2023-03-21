import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModalComponent } from '../modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ModalChangeNameComponent } from '../modal-change-name/modal-change-name.component';


@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule,
    FontAwesomeModule],
  declarations: [HomePage, ModalComponent, LoginComponent, RegisterComponent, ModalChangeNameComponent],
  exports: [HomePage, ModalComponent, LoginComponent, RegisterComponent, ModalChangeNameComponent]
})
export class HomePageModule { }
