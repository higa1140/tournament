import { Injectable } from '@angular/core';
import {Match,IMatch} from '../model/match'

@Injectable()
export class MatchService {
  private matchList:IMatch[] = [
    new Match(1, 0, 0, 0, null, 3, 1, null, 2),
    new Match(1, 1, 0, 2, null, 0, 3, null, 3),
    new Match(1, 2, 0, 4, null, 3, 5, null, 2),
    new Match(1, 3, 0, 6, null, 1, 7, null, 0),

    new Match(1, 4, 1, null, 0, null, null, 1, null),
    new Match(1, 5, 1, null, 2, null, null, 3, null),

    new Match(1, 6, 2, null, 4, null, null, 5, null)
  ];

  getMatch(tournamentId:number): Promise<IMatch[]> {
    return Promise.resolve(this.matchList);
  }
}