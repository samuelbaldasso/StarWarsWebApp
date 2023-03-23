
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwapiService } from '../../../services/swapi.service';
import { AuthenticationService } from 'src/services/auth.service';
import { faStar, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FavoritesService } from 'src/services/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @Input() name;
  appList = [];
  page = 0;
  faArrow = faArrowRight;
  faSearch = faSearch;
  faStar = faStar;
  loading: any;
  isFavorite = false;
  isButton = false;
  appMenu = [];
  searchText = '';
  people: any;
  constructor(private service: SwapiService, private favorite: FavoritesService, private router: Router,
    private auth: AuthenticationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = this.page + 1;
    this.service.getPeople(this.page).subscribe((data) => {
      data.results.forEach((res) => {
        this.appList.push({ url: res.url, name: res.name });
        this.appMenu = [...this.appList];
      });
    });
    this.getDisplayName();
  }

  loadData(event) {
    this.page = this.page + 1;
    this.loading = event;
    this.service.getPeople(this.page).subscribe((data) => {
      data.results.forEach((res) => {
        this.appList.push({ url: res.url, name: res.name });
        if (data.results.length > 0 && this.page < data.results.length) {
          this.loading.target.complete();
        } else {
          this.loading.target.disabled = true;
        }
      });
    });
  }

  openDetails(people) {
    const split = people.url.split('/');
    const peopleId = split[split.length - 2];
    this.router.navigateByUrl(`/modal/${peopleId}`);
  }

  signOut() {
    this.auth.signOut();
  }

  async getDisplayName() {
    this.name = (await this.auth.ngFireAuth.currentUser).displayName;
    return this.name;
  }

  openDetailsFromFavorites(people) {
    const split = people.url.split('/');
    const peopleId = split[split.length - 2];
    this.isFavorite = true;
    const favorites = this.favorite.setFavoritesData(people, peopleId);
    this.router.navigate([`favorites/${peopleId}`], { queryParams: favorites });
  }
}
