import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Photos } from 'src/app/shared/photos';

import { GetDataServise } from 'src/app/services/getData';

interface Ship {
  name?: string;
  starship_class?: string;
  max_atmosphering_speed?: string;
  cargo_capacity?: string;
  hyperdrive_rating?: string;
  manufacturer?: string;
  passengers?: string[];
}
interface Pilot {
  name: string;
  id: number;
}

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css'],
})
export class ShipComponent implements OnInit {
  id = 0;
  ship: Ship = {};
  pilots: Pilot[] = [];

  constructor(public rs: GetDataServise, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.rs.getData('starships', this.id).subscribe({
      next: (res: any) => {
        this.ship = res;
        this.getPilots(res.pilots);
      },
      error: (err: Error) => console.log(err),
    });
  }

  handleMissingImage(event: any) {
    event.target.src = Photos.defaultFoto;
  }
  getPilots(arr: any) {
    arr.forEach((element: any) => {
      this.rs.getItem(element).subscribe({
        next: (res: any) => {
          const pilot: any = {};
          pilot['name'] = res.name;
          pilot['id'] = res.url.match(/[0-9]/g).join('');
          this.pilots.push(pilot);
        },
        error: (err: Error) => console.log(err),
      });
    });
  }
}
