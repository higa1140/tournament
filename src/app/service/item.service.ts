import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import {Basic, IBasic} from '../model/basic';
import {Player, IPlayer} from '../model/player';



@Injectable()
export class ItemService {

  constructor(private af: AngularFire) {
    // var tests:FirebaseListObservable<any[]> =af.database.list("/items/0");
    // tests.forEach(function(test){
    // })
    // console.log();
  }

  getItemList(): FirebaseObjectObservable<any> {
    return this.af.database.object("/items");
  }

  getItem(tournamentId:string): FirebaseObjectObservable<any> {
    return this.af.database.object("/items/" + tournamentId);
  }

  postItem(basic:IBasic, players:IPlayer[]):firebase.Promise<void> {
    return this.af.database.list("/items/").push({basic, player:players});
  }

  putitem(tournamentId:string, basic:IBasic):firebase.Promise<any> {
    return this.af.database.list("/items/" + tournamentId).update("basic", basic);
  }
}