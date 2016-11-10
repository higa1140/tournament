import { Injectable } from '@angular/core';
import {Player, IPlayer} from '../model/player';

@Injectable()
export class PlayerService {
  private players:IPlayer[] = [
    new Player(1, 0, "player A"),
    new Player(1, 1, "player B"),
    new Player(1, 2, "player C"),
    new Player(1, 3, "player D"),
    new Player(1, 4, "player E"),
    new Player(1, 5, "player F"),
    new Player(1, 6, "player G"),
    new Player(1, 7, "player H")
  ];

  getPlayer(tournamentId:number): Promise<IPlayer[]> {
    return Promise.resolve(this.players);
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