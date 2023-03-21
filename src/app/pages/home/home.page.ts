import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from '../../../services/swapi.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  appList = [];
  page = 0;
  faArrow = faArrowRight;
  loading: any;
  people: Observable<any>;
  firebase: any;
  constructor(private service: SwapiService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.people = this.service.getPeople(this.page);
    this.initialize();
  }

  initializeNameList() {
    this.service.getPeople(this.page).subscribe((data) => {
      data.results.forEach((res) =>
        this.appList.push({ url: res.url, name: res.name })
      );
    });
  }

  initialize() {
    this.page = this.page + 1;
    this.initializeNameList();
  }

  loadData(event) {
    this.page = this.page + 1;
    this.loading = event;
    this.service.getPeople(this.page).subscribe((data) => {
      data.results.forEach((res) =>
        this.appList.push({ url: res.url, name: res.name })
      );
      if (data.results.length > 0 && this.page < 9) {
        this.loading.target.complete();
      } else {
        this.loading.target.disabled = true;
      }
    });
  }

  openDetails(people) {
    const split = people.url.split('/');
    const peopleId = split[split.length - 2];
    this.router.navigateByUrl(`/${peopleId}`);
  }

  signOut() {
    this.auth.signOut();
  }
}
