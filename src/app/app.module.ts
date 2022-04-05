import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GetPeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonComponent } from './components/people/person/person.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlanetComponent } from './components/planets/planet/planet.component';
import { ShipsComponent } from './components/ships/ships.component';
import { ShipComponent } from './components/ships/ship/ship.component';
import { TestComponent } from './components/test/test.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    GetPeopleComponent,
    PlanetsComponent,
    HeaderComponent,
    PersonComponent,
    FooterComponent,
    PlanetComponent,
    ShipsComponent,
    ShipComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    InfiniteScrollModule,
    Ng2SearchPipeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
