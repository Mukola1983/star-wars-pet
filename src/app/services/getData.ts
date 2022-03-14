import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetDataServise {
  constructor(public http: HttpClient) {}

  url(kind: string, num: number) {
    return `https://swapi.dev/api/${kind}/${num}`;
  }

  getData(kind: string, id: number) {
    return this.http.get(this.url(kind, id));
  }

  getItem(url: any) {
    return this.http.get(url);
  }
  getPage(url: string) {
    return this.http.get(url);
  }
}
