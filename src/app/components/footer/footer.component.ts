import { Component } from '@angular/core';
import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.next(1);
subject.next(2);

subject.subscribe((val) => console.log('first', val));
subject.next(3);
subject.subscribe((val) => console.log('sec', val));
subject.next(4);

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
