import { Injectable } from '@angular/core';

import {Player, IPlayer} from '../model/player';
import {Match, IMatch} from '../model/match';

@Injectable()
export class MatchingService {

  createMatch(players:IPlayer[]):IMatch[][]{
    var ret:IMatch[][]=[];
    var round:number = 0;
    // 1回戦
    ret[round] = [];
    var i = 0;
    var a = this.getSeed(players.length, this.getLimit(players));

    for(let j = 0; j < a.length; j++){
      if(a[j] == 2){
        ret[round].push({aId:i, bId:i+1});
      } else {
        ret[round].push({aId:i, bId:-1});
      }

      i += a[j];
    }

    while(ret[round].length > 1){
      round++;
      ret[round] = [];
      i = 0;
      
      while(i < ret[round - 1].length){
        let match:IMatch = {aMatchId:i, bMatchId:i+1};

        if(ret[round-1][i].bId == -1){
          match.aId = ret[round-1][i].aId;
          match.aSeed = true;
        }

        if(ret[round-1][i+1].bId == -1){
          match.bId = ret[round-1][i+1].aId;
          match.bSeed = true;
        }

        ret[round].push(match);
        i += 2;
      }
    }
    return ret;
  }

  getSeed (count:number, limit:number): number[] {
    if(!limit){
      return [count];
    }
		
		var j = Math.floor(count / 2);
		
		return this.getSeed(count - j, limit - 1).concat(this.getSeed(j, limit - 1));
	}

  getLimit(players:IPlayer[]): number{
    var mod:boolean= false;
    var len:number = players.length;
    var ret:number = 0;

    while (len > 1){
      if(len % 2 > 0){
        mod = true;
      }
      len = Math.floor(len / 2);
      ret++;
    }

    return ret + (mod ? 1 : 0) - 1;
  }
}