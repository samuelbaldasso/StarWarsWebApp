/* eslint-disable @typescript-eslint/dot-notation */
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { SwapiService } from './swapi.service';

@Injectable({
  providedIn: 'root',
})

export class FavoritesService {
  favoriteData: any;
  favorites = [];
  constructor(
    public router: Router,
    public swapi: SwapiService,
    public afStore: AngularFirestore
  ) {
  };

  setFavoritesData(favorite, id) {
    const favoriteRef: AngularFirestoreDocument<any> = this.afStore.doc(`favorites/${id}`);
    this.favoriteData = {
      url: favorite.url,
      name: favorite.name,
    };
    favoriteRef.set(this.favoriteData, {
      merge: true,
    });
    const favoriteCol = this.afStore.collection('favorites');
    favoriteCol.get().subscribe(res => {
      if (res.docs.indexOf(favorite) === -1) {
        res.docs.map((e) => this.favorites.push(e.data()));
      }
    });
    return this.favorites;
  }
}
