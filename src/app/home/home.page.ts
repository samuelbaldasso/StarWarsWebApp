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
  page = 1;
  loading: any;
  constructor(private service: SwapiService, private router: Router) { }

  ngOnInit(): void {
    this.initialize();
  }

  initializeNameList() {
    this.service.getPeople(this.modelType, this.page).subscribe((data) => {
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
    this.service.getPeople(this.modelType, this.page).subscribe((data) => {
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

  listListener() {
    this.service.getPeople(this.modelType, this.page).subscribe(people => {
      people.results.forEach((res) =>
        this.appModal.push({
          id: res.id,
          name: res.name,
          hairColor: res.hair_color,
          eyeColor: res.eye_color,
          birthYear: res.birth_year,
          gender: res.gender,
          created: res.created,
          edited: res.edited,
          url: res.url
        })
      );
    });
    this.router.navigateByUrl('info');
  }
}
