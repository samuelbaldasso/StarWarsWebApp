import { Component, OnInit } from '@angular/core';
import { People } from 'src/people';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  modelType = 'people';
  appList: People[] = [];
  page = 1;
  loading: any;
  constructor(private service: SwapiService) {}

  ngOnInit(): void {
    this.initializeNameList();
  }

  initializeNameList() {
    this.service.getPeople(this.modelType, this.page).subscribe((data) => {
      data.results.forEach((res) =>
        this.appList.push({ id: res.id, name: res.name })
      );
      if (data.results.length > 0) {
        this.page = this.page++;
      } else {
        this.loading.disabled = true;
      }
    });
  }
}
