import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { BasicComponent } from './basic';
import { TournamentComponent } from './tournament';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: BasicComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'basic',      component: BasicComponent },
  { path: 'basic/:id',      component: BasicComponent },
  { path: 'tournament',  component: TournamentComponent },
  { path: 'tournament/:id',  component: TournamentComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContentComponent },
];
