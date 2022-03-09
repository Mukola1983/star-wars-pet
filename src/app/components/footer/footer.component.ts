import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { StoreServise } from 'src/app/services/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  count = 1;

  constructor(public store: StoreServise) {}

  ngOnInit(): void {}
}
