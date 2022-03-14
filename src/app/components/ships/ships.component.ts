import { Component } from '@angular/core';
import { Photos } from 'src/app/shared/photos';

import { GetDataServise } from 'src/app/services/getData';
import { StoreServise } from 'src/app/services/store';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css'],
})
export class ShipsComponent {
  searcByName = '';

  constructor(public rs: GetDataServise, public store: StoreServise) {}

  onScroll() {
    this.addShips();
  }

  addShips() {
    if (this.store.shipsUrl) {
      this.rs.getPage(this.store.shipsUrl).subscribe({
        next: (res: any) => {
          this.store.ships = [...this.store.ships, ...res.results];
          this.store.shipsUrl = res.next;
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
