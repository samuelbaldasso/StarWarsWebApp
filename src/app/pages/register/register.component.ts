import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  googleAuth: any;
  constructor(public auth: AuthenticationService, public router: Router) { }

  ngOnInit() { }

  signUp(email, password) {
    this.auth.registerUser(email.value, password.value)
      .then((res) => {
        this.auth.presentToast('bottom', 'Success registering your user.');
        this.router.navigateByUrl('/login');
      }).catch((error) => {
        this.auth.presentToast('bottom', 'Error while registering.');
      });
  }

  async signUpWithGoogle(email) {
    this.auth.googleAuth().then(() => this.router.navigateByUrl(''));
    this.googleAuth = (await this.auth.ngFireAuth.currentUser).email;
    email.value = this.googleAuth;
  }

  signOut() {
    this.auth.signOut();
  }
}
