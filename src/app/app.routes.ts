import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list';
import { RegisterComponent } from './input/register';
import { EditComponent } from './input/edit';
import { LoginComponent } from './login';
import { TournamentComponent } from './tournament';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: ListComponent },
  { path: 'list',      component: ListComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'edit/:id',      component: EditComponent },
  { path: 'tournament/:id',  component: TournamentComponent },
  { path: '**',    component: NoContentComponent },
];
