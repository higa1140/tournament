/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { AngularFire, AngularFireAuth } from 'angularfire2';
import { LoginService } from './service/login.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          List
        </a>
      </span>
      |
      <span *ngIf="!isLogin">
        <a [routerLink]=" ['./login'] ">
          Login
        </a>
      </span>
      <span *ngIf="isLogin">
        <a (click)="logout()">
          Logout
        </a>
      </span>
      |
      <span *ngIf="isLogin">
        <a [routerLink]=" ['./register'] ">
          Register
        </a>
      </span>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>

    <!-- <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>-->
  `,
  providers:[LoginService]
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';
  isLogin:boolean;

  constructor(public appState: AppState, private af: AngularFire, private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.getAuth().onAuthStateChanged((user)=>{
      this.isLogin = !!(user);
    });
  }

  logout(){
    this.loginService.logout();
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
