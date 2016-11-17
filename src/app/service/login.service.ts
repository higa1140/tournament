import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class LoginService {
    constructor(private af: AngularFire) {

    }

    public login(email:string, password:string): firebase.Promise<FirebaseAuthState>{
        return this.af.auth.login({  email,  password});
        // this.af.auth.login();
    }
}