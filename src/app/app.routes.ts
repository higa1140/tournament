import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list';
import { RegisterComponent } from './input/register';
import { EditComponent } from './input/edit';
import { LoginComponent } from './login';
import { TournamentComponent } from './tournament';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: ListComponent },
  { path: 'list',      component: ListComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'edit/:id',      component: EditComponent },
  { path: 'tournament',  component: TournamentComponent },
  { path: 'tournament/:id',  component: TournamentComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContentComponent },
];
