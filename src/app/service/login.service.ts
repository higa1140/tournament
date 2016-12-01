import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState,AngularFireAuth  } from 'angularfire2';

@Injectable()
export class LoginService {
    constructor(private af: AngularFire) {

    }

    public login(email:string, password:string): firebase.Promise<FirebaseAuthState>{
        return this.af.auth.login({ email,  password });
    }

    public getAuth() {
        return firebase.auth();
        // return this.af.auth;
    }

    public logout(): void {
        console.log("logout");
        this.af.auth.logout();
    }
}