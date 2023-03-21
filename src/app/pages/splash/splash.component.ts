import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from 'src/services/auth.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent {

  constructor(private router: Router, private plat: Platform, private auth: AuthenticationService) {
    this.initializeApp();
  }
  initializeApp() {
    this.plat.ready().then(() => setTimeout(() =>
      this.auth.isLoggedIn() === true ?
        this.router.navigateByUrl('') :
        this.router.navigateByUrl('/login'), 2000));
  }

}
