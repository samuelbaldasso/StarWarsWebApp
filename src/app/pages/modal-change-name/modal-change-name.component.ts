import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/auth.service';

@Component({
  selector: 'app-modal-change-name',
  templateUrl: './modal-change-name.component.html',
  styleUrls: ['./modal-change-name.component.scss'],
})
export class ModalChangeNameComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() { }

  async updateName(name) {
    await this.auth.updateDisplayName(name.value).then(() => this.router.navigateByUrl(''));
  }

}
