import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersService } from './shared';
import { CharactersListItemComponent } from './characters-list-item/characters-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersListItemComponent
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
