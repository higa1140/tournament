import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Player, IPlayer} from '../model/player';

@Injectable()
export class PlayerService {
  // private players:IPlayer[] = [
  //   new Player( "player A"),
  //   new Player( "player B"),
  //   new Player( "player C"),
  //   new Player( "player D"),
  //   new Player( "player E"),
  //   new Player( "player F"),
  //   new Player( "player G"),
  //   new Player( "player H")
  // ];

  constructor(private af: AngularFire){
  }

  getPlayer(tournamentId:string): FirebaseListObservable<IPlayer[]> {
    return this.af.database.list("/items/" + tournamentId + "/player");
    // return Promise.resolve(this.players);
  }

  postPlayer(tournamentId:string, players:IPlayer[]): Promise<void> {
    this.af.database.list("/items/" + tournamentId + "/player");
    return Promise.resolve(); 
  }

  putPlayer(tournamentId:string, players:IPlayer[]): firebase.Promise<void> {
    var list = this.af.database.list("/items/" + tournamentId);
    return list.remove("player").then(function(){
      return list.update("player", players);  
    });
  }
}