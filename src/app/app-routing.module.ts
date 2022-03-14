import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetPeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { PersonComponent } from './components/people/person/person.component';
import { PlanetComponent } from './components/planets/planet/planet.component';
import { ShipsComponent } from './components/ships/ships.component';
import { ShipComponent } from './components/ships/ship/ship.component';

const routes: Routes = [
  { path: '', redirectTo: '/persons', pathMatch: 'full' },

  { path: 'persons', component: GetPeopleComponent },
  { path: 'persons/:id', component: PersonComponent },

  { path: 'planets', component: PlanetsComponent },
  { path: 'planets/:id', component: PlanetComponent },

  { path: 'ships', component: ShipsComponent },
  { path: 'ships/:id', component: ShipComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
