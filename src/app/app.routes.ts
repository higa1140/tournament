import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { EditMainComponent } from './edit/main';
import { BasicComponent } from './edit/basic';
import { LoginComponent } from './login';
import { TournamentComponent } from './tournament';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'basic',      component: BasicComponent },
  { path: 'register',      component: EditMainComponent },
  { path: 'edit/:id',      component: EditMainComponent },
  { path: 'tournament',  component: TournamentComponent },
  { path: 'tournament/:id',  component: TournamentComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContentComponent },
];
