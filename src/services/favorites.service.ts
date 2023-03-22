import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { SwapiService } from './swapi.service';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root',
})

export class FavoritesService {
  favoriteData: any;
  page = 0;
  userName: any;
  appFavorites = [];
  isFavorite = false;
  constructor(
    public router: Router,
    public swapi: SwapiService,
    public afStore: AngularFirestore
  ) {
  };

  setFavoritesData(favorites) {
    const favoriteRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `favorites/${favorites.uid}`
    );
    this.favoriteData = {
      url: favorites.url,
      name: favorites.name,
      hairColor: favorites.hair_color,
      eyeColor: favorites.eye_color,
      birthday: favorites.birth_year,
      gender: favorites.gender,
      created: favorites.created,
      edited: favorites.edited,
    };
    return favoriteRef.set(this.favoriteData, {
      merge: true,
    });
  }
}

