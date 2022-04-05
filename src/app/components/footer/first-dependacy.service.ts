import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirstDependacy {
  defaultValue: string = '';

  get defaultString() {
    return this.defaultValue;
  }
  constructor() {}

  returnValue(index: number) {
    const values = ['one', 'two', 'three'];
    return values[index];
  }

  initValue() {
    this.defaultValue = 'one';
  }

  check(value: string) {
    return `check  ${value}`;
  }
}
