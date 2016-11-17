import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Player, IPlayer} from '../model/player';

@Injectable()
export class PlayerService {
  private players:IPlayer[] = [
    new Player(0, "player A"),
    new Player(1, "player B"),
    new Player(2, "player C"),
    new Player(3, "player D"),
    new Player(4, "player E"),
    new Player(5, "player F"),
    new Player(6, "player G"),
    new Player(7, "player H")
  ];

  constructor(private af: AngularFire){
  }

  getPlayer(tournamentId:number): FirebaseListObservable<IPlayer[]> {
    return this.af.database.list("/items/" + String(tournamentId) + "/data/player");
    // return Promise.resolve(this.players);
  }

  postPlayer(players:IPlayer[]): Promise<void> {
    for(let i = 0; i < players.length; i++) {
      players[i].id = i;
    }

    this.players = players;
    return Promise.resolve(); 
  }

  putPlayer(players:IPlayer[]): Promise<void> {
    this.players = players;
    return Promise.resolve(); 
  }

}