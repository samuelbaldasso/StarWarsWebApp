import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  modelType = 'people';
  appList = [];
  appModal = [];
  page = 0;
  loading: any;
  people: Observable<any>;
  constructor(private service: SwapiService, private router: Router) { }

  ngOnInit(): void {
    this.people = this.service.getPeople(this.page);
    this.initialize();
  }

  initializeNameList() {
    this.service.getPeople(this.page).subscribe((data) => {
      data.results.forEach((res) =>
        this.appList.push({ id: res.id, name: res.name })
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
        this.appList.push({ id: res.id, name: res.name })
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
}
