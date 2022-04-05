import { Injectable } from '@angular/core';
import { FirstDependacy } from './first-dependacy.service';

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  constructor(private firstDependacy: FirstDependacy) {
    this.firstDependacy.initValue();
    this.firstDependacy.check('');
  }

  getValue(index: number): string {
    return this.firstDependacy.returnValue(index);
  }

  getIndex() {
    return 2;
  }

  callMethod(value: string) {
    this.firstDependacy.check(value);
  }
}
