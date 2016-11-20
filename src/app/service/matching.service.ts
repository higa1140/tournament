import { Injectable } from '@angular/core';

import {Player, IPlayer} from '../model/player';
import {Match, IMatch} from '../model/match';

@Injectable()
export class MatchingService {
  private matching = [
    {
      match:
      [
        {
          id:0,
          playerA:{id:0, score:3}, 
          playerB:{id:1,score:2}
        },
        {
          id:1,
          playerA:{id:2, score:0}, 
          playerB:{id:3,score:3}
        },
        {
          id:2,
          playerA:{id:4, score:3}, 
          playerB:{id:5,score:2}
        },
        {
          id:3,
          playerA:{id:6, score:1}, 
          playerB:{id:7,score:0}
        }
      ]
    },
    {match:[
      {
        id:4,
        playerA:{ matchingId:0,score:1},
        playerB:{ matchingId:1,score:2}
      },
      {
        id:5,
        playerA:{ matchingId:2,score:2},
        playerB:{ matchingId:3,score:3}
      }
    ]},
    {match:[
      {
        id:6,
        playerA:{ matchingId:4},
        playerB:{ matchingId:5}
      }
    ]}
  ];

  // getMatching(tournamentId:number): Promise<{}[]> {
  //   return Promise.resolve(this.matching);
  // }

  // createMatch(players:IPlayer[]):IMatch[]{
  //   var ret:IMatch[] = [];




  //   var round:number = 0;
  //   // TODO 2乗の余り

  //   // 1回戦
  //   for(let i = 0; i < players.length; i++){
  //     ret.push({round, aId:i, bId:i+1 });
  //   }

  //   // 2回戦以降


  //   return ret;
  // }


  createMatch(players:IPlayer[]):IMatch[][]{
    var ret:IMatch[][]=[];
    var round:number = 0;
    // TODO 2乗の余り
    // 1回戦
    ret[round] = [];
    var i = 0;
    // var id = 0;

    console.log(players.length);
    while(i < players.length){
      ret[round].push({aId:i, bId:i+1});
      i += 2;
    }

    while(ret[round].length > 1){
      round++;
      ret[round] = [];
      i = 0;
      while(i < ret[round - 1].length){
        ret[round].push({aMatchId:i, bMatchId:i+1});
        i += 2;
      }
    }


    console.log(ret);
    return ret;
  }
}