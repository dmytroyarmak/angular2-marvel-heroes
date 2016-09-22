import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { CharactersService } from './shared';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersListItemComponent } from './shared/components/characters-list-item/characters-list-item.component';
import { UltimatePaginationComponent } from './shared/components/ultimate-pagination/ultimate-pagination.component';
import { CharacterThumbnailComponent } from './shared/components/character-thumbnail/character-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersListItemComponent,
    CharacterDetailsComponent,
    UltimatePaginationComponent,
    CharacterThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
