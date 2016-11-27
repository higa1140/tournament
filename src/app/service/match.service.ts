import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import {Match,IMatch} from '../model/match'

@Injectable()
export class MatchService {
  constructor(private af: AngularFire) {
  }

  getMatch(tournamentId:string): FirebaseObjectObservable<any> {
    return this.af.database.object("/items/" + tournamentId + "/match");
  }

  postMatch(tournamentId:string, matches:IMatch[][]){
    return this.af.database.list("/items/" + tournamentId).push({"match": matches});  
  }

  putMatch(tournamentId:string, round:number, battle:number, match:IMatch){
    return this.af.database.list("/items/" + tournamentId + "/match/" + String(round)).update(String(battle), match);  
  }

  putScore(tournamentId:string, round:number, battle:number, aScore:number, bScore:number, videoId: string){
    return this.af.database.list("/items/" + tournamentId + "/match/" + String(round)).update(String(battle), {aScore, bScore, videoId});  
  }

  putMatches(tournamentId:string, matches:IMatch[][]){
    var list = this.af.database.list("/items/" + tournamentId);
    return list.remove("match").then(function(){
      return list.update("match", matches);  
    });
  }
}