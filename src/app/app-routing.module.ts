import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TeamsComponent } from './teams/teams.component';
import { GameBoardsComponent } from './game-boards/game-boards.component';
import { TopScorersComponent } from './top-scorers/top-scorers.component';
import { AboutComponent } from "./about/about.component"

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'game-boards',
    component: GameBoardsComponent
  },
  {
    path: 'top-scorers',
    component: TopScorersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
