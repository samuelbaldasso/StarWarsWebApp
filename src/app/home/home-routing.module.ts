import { ModalComponent } from '../modal/modal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SplashComponent } from '../splash/splash.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'splash',
    component: SplashComponent,
  },
  {
    path: ':id',
    component: ModalComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
