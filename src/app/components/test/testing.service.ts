import { Injectable } from '@angular/core';
import { FirstDependacy } from './first-dependacy.service';

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  constructor(private firstDependacy: FirstDependacy) {}

  sayHi(): string {
    const name = this.firstDependacy.name;

    if (name === 'Mike') {
      return 'Hi Mike';
    } else {
      return 'Hi Stranger';
    }
  }
  setName(value: string) {
    this.firstDependacy.name;
  }
}
