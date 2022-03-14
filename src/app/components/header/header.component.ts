import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  languages = ['en', 'ua'];
  curLang: string = 'en';
  constructor(public translate: TranslateService) {
    translate.setDefaultLang(this.curLang);
  }

  changeLang() {
    this.translate.use(this.curLang);
  }
}
