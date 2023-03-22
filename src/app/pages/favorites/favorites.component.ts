import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritesService } from 'src/services/favorites.service';
import { SwapiService } from 'src/services/swapi.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  people: any;
  page = 0;
  id: any;
  loading: any;
  constructor(private service: FavoritesService, private router: Router,
    private swapi: SwapiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.people = this.router.getCurrentNavigation().extras.queryParams;
  }

  openDetails(people) {
    const split = people.url.split('/');
    const peopleId = split[split.length - 2];
    this.router.navigateByUrl(`/modal/${peopleId}`);
  }
}
