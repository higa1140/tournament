import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
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

  getBasic(tournamentId:string): FirebaseObjectObservable<any> {
    return this.af.database.object("/items/" + tournamentId + "/basic");
  }

  postBasic(basic:IBasic):Promise<void> {
    // TODO 
    this.basic = basic;
    return Promise.resolve();
  }

  putBasic(tournamentId:string, basic:IBasic):Promise<any> {
    // TODO
    // this.basic = basic;
    this.af.database.list("/items/" + tournamentId).update("basic", basic);


    return Promise.resolve();


  }
}