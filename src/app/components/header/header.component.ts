import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  languges = ['en', 'ua'];
  curLang: string = 'en';
  constructor(public translate: TranslateService) {
    translate.setDefaultLang(this.curLang);
  }

  ngOnInit(): void {}
  changeLang() {
    this.translate.use(this.curLang);
  }
}
