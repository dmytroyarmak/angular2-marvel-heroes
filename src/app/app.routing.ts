import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { CreatorsListComponent } from './creators-list/creators-list.component';
import { EventsListComponent } from './events-list/events-list.component';
import { SeriesListComponent } from './series-list/series-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersListComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'comics', component: ComicsListComponent },
  { path: 'comics/:id', component: ComicDetailsComponent },
  { path: 'creators', component: CreatorsListComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'series', component: SeriesListComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
