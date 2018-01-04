import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TopScorersComponent } from './top-scorers/top-scorers.component';
import { GameBoardsComponent } from './game-boards/game-boards.component';
import { TeamsComponent } from './teams/teams.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TopScorersComponent,
    GameBoardsComponent,
    TeamsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
