import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreServise {
  people: any = [];
  peopleUrl = `https://swapi.dev/api/people/?page=1`;

  ships: any = [];
  shipsUrl = `https://swapi.dev/api/starships/?page=1`;

  planets: any = [];
  planetsUrl = `https://swapi.dev/api/planets/?page=1`;
}
