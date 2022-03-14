import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Photos } from 'src/app/shared/photos';

import { GetDataServise } from 'src/app/services/getData';

interface Planet {
  name?: string;
  climate?: string;
  terrain?: string;
  population?: string;
  gravity?: string;
  orbital_period?: string;
}

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css'],
})
export class PlanetComponent implements OnInit {
  id = 0;
  planet: Planet = {};

  constructor(public rs: GetDataServise, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
    });
    this.rs.getData('planets', this.id).subscribe({
      next: (res: any) => {
        this.planet = res;
      },
      error: (err: Error) => console.log(err),
    });
  }
  handleMissingImage(event: any) {
    event.target.src = Photos.defaultFoto;
  }
}
