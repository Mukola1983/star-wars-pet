import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Photos } from 'src/app/shared/photos';

import { GetDataServise } from 'src/app/services/getData';

interface Person {
  name?: string;
  eye_color?: string;
  gender?: string;
  skin_color?: string;
  mass?: string;
  homeworld?: string;
  starships?: string[];
  url?: string;
}
interface Starship {
  name: string;
  id: number;
}
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  id = 0;
  homeworldName = '';
  homeWorldId = 0;

  person: Person = {};
  starships: Starship[] = [];

  constructor(public rs: GetDataServise, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.rs.getData('people', this.id).subscribe({
      next: (res: any) => {
        this.person = res;
        this.getHomeworld();
        this.getStarships(res.starships);
      },
      error: (err: Error) => console.log(err),
    });
  }

  handleMissingImage(event: any) {
    event.target.src = Photos.defaultFoto;
  }

  getHomeworld() {
    this.rs.getItem(this.person.homeworld).subscribe((res: any) => {
      this.homeworldName = res.name;
      this.homeWorldId = res.url.match(/[0-9]/g)?.join('');
    });
  }
  getStarships(arr: any) {
    arr.forEach((element: any) => {
      this.rs.getItem(element).subscribe({
        next: (res: any) => {
          const ship: any = {};
          ship['name'] = res.name;
          ship['id'] = res.url.match(/\d/g).join('');
          this.starships.push(ship);
        },
        error: (err: Error) => console.log(err),
      });
    });
  }
}
