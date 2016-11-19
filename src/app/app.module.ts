import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { ListComponent, KeysPipe } from './list';
import { BasicComponent } from './input/basic';
import { PlayerComponent } from './input/player';
import { RegisterComponent } from './input/register';
import { EditComponent } from './input/edit';

import { LoginComponent } from './login';
import { TournamentComponent } from './tournament';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { XLarge } from './home/x-large';

export const a = 'jUvKORe7qF';
export const b = 'AIzaSyCKqqJf3V33Zx___L1xmLia1o';
export const c = b.replace("___", "_" + a + "_");

export const databaseURL =  'https://tournament-149404.firebaseio.com'

export const filebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ 
    AppComponent
  ],
  declarations: [
    AppComponent,
    AboutComponent,KeysPipe,
    ListComponent,
    BasicComponent,
    PlayerComponent,
    RegisterComponent,
    EditComponent,
    LoginComponent,
    TournamentComponent,
    NoContentComponent,
    XLarge
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    AngularFireModule.initializeApp({apiKey:c, databaseURL, authDomain:" ", storageBucket:" "}, filebaseAuthConfig)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
