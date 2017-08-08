import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Plats } from './plats';
import { Recettes } from './recettes';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlatsService {
  private platsUrl = "api";
  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
      console.error('An error occured', error);
      return Promise.reject(error.message || error);
  }

  constructor(private http: Http) { }

  getPlats(): Promise<Plats[]> {
      return this.http.get(this.platsUrl)
            .toPromise()
            .then(response => response.json() as Plats[])
            .catch(this.handleError);
  }

  getRecettes(plat: Plats): Promise<Recettes[]> {
      const url = `${this.platsUrl}/${plat.name}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json() as Recettes[])
        .catch(this.handleError);
  }

  createRecette(recette: Recettes): any {
      const url = `${this.platsUrl}/${recette.name}`
      this.http.put(url, recette)
        .toPromise()
        .then()
        .catch(this.handleError);
  }

  createPlat(plat: Plats): any {
      const url = `${this.platsUrl}/${plat.type}/${plat.name}`
      this.http.put(url, plat)
        .toPromise()
        .then()
        .catch(this.handleError);
  }
}
