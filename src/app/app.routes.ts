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
  { path: 'tournament',  component: TournamentComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
