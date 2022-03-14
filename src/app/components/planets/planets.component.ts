import { Component } from '@angular/core';
import { GetDataServise } from 'src/app/services/getData';
import { StoreServise } from 'src/app/services/store';

import { Photos } from 'src/app/shared/photos';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
})
export class PlanetsComponent {
  searcByName = '';

  constructor(public rs: GetDataServise, public store: StoreServise) {}

  onScroll() {
    this.addPlanets();
  }

  addPlanets() {
    if (this.store.planetsUrl) {
      this.rs.getPage(this.store.planetsUrl).subscribe({
        next: (res: any) => {
          this.store.planets = [...this.store.planets, ...res.results];
          this.store.planetsUrl = res.next;
        },
        error: (err: Error) => console.log(err),
      });
    }
  }
  getNum(str: string) {
    return str.match(/[0-9]/g)?.join('');
  }
  handleMissingImage(event: any) {
    event.target.src = Photos.defaultFoto;
  }
}
