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
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { AssociatedItemsComponent } from './shared/components/associated-items/associated-items.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { ComicsListItemComponent } from './shared/components/comics-list-item/comics-list-item.component';
import { ThumbnailComponent } from './shared/components/thumbnail/thumbnail.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicDatesComponent } from './shared/components/comic-dates/comic-dates.component';
import { LinksListComponent } from './shared/components/links-list/links-list.component';
import { ComicPricesComponent } from './shared/components/comic-prices/comic-prices.component';
import { ComicCreatorsComponent } from './shared/components/comic-creators/comic-creators.component';
import { ComicVariantsComponent } from './shared/components/comic-variants/comic-variants.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersListItemComponent,
    CharacterDetailsComponent,
    PaginationComponent,
    ThumbnailComponent,
    AssociatedItemsComponent,
    ComicsListComponent,
    ComicsListItemComponent,
    ComicDetailsComponent,
    ComicDatesComponent,
    LinksListComponent,
    ComicPricesComponent,
    ComicCreatorsComponent,
    ComicVariantsComponent
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
