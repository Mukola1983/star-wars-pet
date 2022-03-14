import { Component } from '@angular/core';
import { Photos } from 'src/app/shared/photos';
import { ActivatedRoute } from '@angular/router';

import { StoreServise } from 'src/app/services/store';
import { GetDataServise } from 'src/app/services/getData';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class GetPeopleComponent  {
  searcByName = '';

  constructor(
    public rs: GetDataServise,
    public route: ActivatedRoute,
    public store: StoreServise
  ) {}


  onScroll() {
    this.addPeople();
  }

  addPeople() {
    if (this.store.peopleUrl) {
      this.rs.getPage(this.store.peopleUrl).subscribe({
        next: (res: any) => {
          this.store.people = [...this.store.people, ...res.results];
          this.store.peopleUrl = res.next;
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
