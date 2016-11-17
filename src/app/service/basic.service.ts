import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Basic, IBasic} from '../model/basic';



@Injectable()
export class BasicService {

  private basic:IBasic = new Basic("test title");


  constructor(private af: AngularFire) {
    // var tests:FirebaseListObservable<any[]> =af.database.list("/items/0");
    // tests.forEach(function(test){
    // })
    // console.log();
  }

  getBasic(tournamentId:number): FirebaseListObservable<any> {
    return this.af.database.list("/items/" + String(tournamentId) + "/data/basic");
  }

  postBasic(basic:IBasic):Promise<void> {
    // TODO 
    this.basic = basic;
    return Promise.resolve();
  }

  putBasic(tournamentId:number, basic:IBasic):Promise<any> {
    // TODO
    // this.basic = basic;
    this.af.database.list("/items/" + String(tournamentId) + "/data").update("basic", basic);


    return Promise.resolve();


  }
}