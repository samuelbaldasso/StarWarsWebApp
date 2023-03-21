import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthenticationService, public router: Router) { }

  ngOnInit() { }
  signIn(email, password) {
    this.auth.signIn(email.value, password.value)
      .then((res) => {
        this.router.navigateByUrl('');
      }).catch((error) => {
        this.auth.presentToast('bottom', 'Error while logging.');
      });
  }

  signInWithGoogle() {
    this.auth.googleAuth()
      .then((res) => {
        this.router.navigateByUrl('');
      }).catch((error) => {
        this.auth.presentToast('bottom', 'Error while logging.');
      });
  }

}
