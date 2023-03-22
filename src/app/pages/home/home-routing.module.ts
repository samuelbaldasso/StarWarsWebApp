import { ModalComponent } from '../modal/modal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SplashComponent } from '../splash/splash.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ModalChangeNameComponent } from '../modal-change-name/modal-change-name.component';
import { FavoritesComponent } from '../favorites/favorites.component';

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
    path: 'modal/:id',
    component: ModalComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'modal-change',
    component: ModalChangeNameComponent
  },
  {
    path: 'favorites/:id',
    component: FavoritesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
