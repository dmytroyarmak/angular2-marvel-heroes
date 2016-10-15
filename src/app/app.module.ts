import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { CharactersService } from './shared';
import { ComicsService } from './shared';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersListItemComponent } from './shared/components/characters-list-item/characters-list-item.component';
import { UltimatePaginationComponent } from './shared/components/ultimate-pagination/ultimate-pagination.component';
import { CharacterThumbnailComponent } from './shared/components/character-thumbnail/character-thumbnail.component';
import { AssociatedItemsComponent } from './shared/components/associated-items/associated-items.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicsListItemComponent } from './shared/components/comics-list-item/comics-list-item.component';
import { ComicThumbnailComponent } from './shared/components/comic-thumbnail/comic-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersListItemComponent,
    CharacterDetailsComponent,
    UltimatePaginationComponent,
    CharacterThumbnailComponent,
    AssociatedItemsComponent,
    ComicsListComponent,
    ComicsListItemComponent,
    ComicThumbnailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    CharactersService,
    ComicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
