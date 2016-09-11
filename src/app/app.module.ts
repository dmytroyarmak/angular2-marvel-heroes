import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders} from './app.routing';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent
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
