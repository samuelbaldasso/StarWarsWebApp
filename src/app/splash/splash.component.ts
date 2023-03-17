import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent {

  constructor(private router: Router, private plat: Platform) {
    this.initializeApp();
  }
  initializeApp() {
    this.plat.ready().then(() => setTimeout(() => this.router.navigateByUrl(''), 3000));
  }

}
