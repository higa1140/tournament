import { Injectable } from '@angular/core';
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

  getPlayer(tournamentId:number): Promise<IPlayer[]> {
    return Promise.resolve(this.players);
  }
}