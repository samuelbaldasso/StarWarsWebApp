import { SwapiService } from './../swapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  modelType = 'people';
  appModal = [];
  page = 1;
  loading: any;
  constructor(private service: SwapiService) { }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.page = this.page + 1;
    this.listListener();
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
  }

  loadData(event) {
    this.page = this.page + 1;
    this.loading = event;
    this.service.getPeople(this.modelType, this.page).subscribe((data) => {
      data.results.forEach((res) =>
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
      if (data.results.length > 0 && this.page < 9) {
        this.loading.target.complete();
      } else {
        this.loading.target.disabled = true;
      }
    });
  }
}
