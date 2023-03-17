import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private plat: Platform) {
    this.initializeApp();
  }
  initializeApp() {
    this.plat.ready().then(() => this.router.navigateByUrl('splash'));
  }
}
