import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirstDependacy {
  nameValue: string = '';

  get name(): string {
    return this.nameValue;
  }

  set name(value: string) {
    this.nameValue = value;
  }
  constructor() {
    this.nameValue = 'Mike';
  }
}
