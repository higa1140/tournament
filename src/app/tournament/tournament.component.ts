import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constant } from '../constant';
import {IPlayer} from '../model/player';
import {IMatch} from '../model/match';
import {PlayerService} from '../service/player.service';
import {MatchService} from '../service/match.service';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'tournament',
  styles: [`
  `],
  templateUrl: './tournament.component.html',
  providers: [PlayerService, MatchService]

})

export class TournamentComponent {
  public title: string;

  private tournamentId:number;
  public players:IPlayer[];
  public matchs:IMatch[];
  public matchings:IMatching[];


  constructor(public route: ActivatedRoute,private playerService:PlayerService, private matchService:MatchService) {
    this.tournamentId = Number(route.params["value"]["id"]);
  }

  ngOnInit() {
//     var getPlayerPromise:Promise<IPlayer[]> = 
//     this.playerService.getPlayer(this.tournamentId).then((result:IPlayer[])=>{
//       this.players =result;
//     });

//     var getMatchingPromise:Promise<IMatch[]> = 
//     this.matchService.getMatch(this.tournamentId).then((result:IMatch[])=>{
//       this.matchs = result;
//     })

// Promise.all([getPlayerPromise, getMatchingPromise]).then(()=>{
//   this.matchings = this.createTournament();
//   this.drawTournament();
// });
    
  }

  drawTournament(){
    var canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
    canvas.height = 20 + (40 * this.players.length);
    var context:CanvasRenderingContext2D = canvas.getContext('2d');

    context.font = "16px 'ＭＳ ゴシック'";
    var startWidth:number;

    var height:number;

    // draw playerName
    for(let i = 0; i < this.players.length; i++){
      height = 20 + (i * 40); 
      this.drawPlayer(context, this.players[i].name, 20, height);
    }
    
    // draw tournament
    for(let i = 0; i < this.matchings.length; i++){
      startWidth = 120 + (i * 40); 

      let matching:IMatching = this.matchings[i];

      // for(let j = 0; j < matching.match.length; j++){
      for(let match of matching.match){
        // startHeight =　20 + (j * 80) + (i * 20);
        let startHeightA = this.getStartHeight(match.playerA,i);
        let startHeightB = this.getStartHeight(match.playerB,i);
        var startHeightAdjust:number = 40 * (i + 1);

        match.playerA.position ={
          startWidth, 
          startHeight:startHeightA, 
          endWidth: startWidth + 40, 
          endHeight:(startHeightA + startHeightB) / 2
        };
        
        match.playerB.position ={
          startWidth, 
          startHeight :startHeightB, 
          endWidth: startWidth + 40, 
          endHeight:(startHeightA + startHeightB) / 2
        };

        this.drawLine(
          context, match.playerA.position, this.isWin(match.playerA, match.playerB)
        );

        this.drawLine(
          context, match.playerB.position, this.isWin(match.playerB, match.playerA)
        );
      }
    }
  }

  getStartHeight(matchingPlayer:IMatchingPlayer, round:number){
    if(matchingPlayer.matchingId != undefined  && matchingPlayer.matchingId!=null){
      for(var match of this.matchings[round-1].match){
        if(match.id == matchingPlayer.matchingId){
          return match.playerA.position.endHeight;
        }
      }
    } else {
      return 20 + (matchingPlayer.id * 40) + (round * 20);
    }

  }

  drawPlayer(context:CanvasRenderingContext2D, playerName:string, width:number, height:number){
    context.fillText(playerName, width, height);
  }

  drawLine(context:CanvasRenderingContext2D, position:IPosition, isWin:boolean){
    context.beginPath();
    context.lineWidth = isWin ? 5: 2;
    context.moveTo(position.startWidth, position.startHeight);
    context.lineTo(position.endWidth, position.startHeight);
    context.lineTo(position.endWidth, position.endHeight);
    context.lineTo(position.endWidth, position.startHeight);
    context.closePath();
    context.stroke();
  }

  getPlayerNameById(id:number):string{

return this.players[id].name;
    // for(var player of ){
    //   if(player.id == id){
    //     return player.name;
    //   }
    // }
    // return null;
  }

  isWin(player:IMatchingPlayer, matchPlayer:IMatchingPlayer):boolean{
    if(player.score == null || matchPlayer.score == null){
      return false;
    }
    return player.score > matchPlayer.score;
  }


  createTournament():IMatching[]{
    var matchingList:IMatching[] = [];

    for(var match of this.matchs){
      var matchDisp:IMatchDisplay = {
        id:match.id,
        playerA:{
          id:match.aId,
          matchingId:match.aMatchId,
          score:match.aScore
        },
        playerB:{
          id:match.bId,
          matchingId:match.bMatchId,
          score:match.bScore
        }
      };

      if(matchingList.length < match.round + 1){
        while(matchingList.length < match.round + 1){
          matchingList.push({match:[]});
        }
      }
      matchingList[match.round].match.push(matchDisp);
    }
    return matchingList;
  }

}

enum PlayerType {
  A,B
}

interface IPosition{
  startWidth:number;
  startHeight:number;
  endWidth:number;
  endHeight:number;  
}

interface IMatchingPlayer{
  id?:number;
  matchingId?:number;
  score?:number;
  position?:IPosition
}

interface IMatchDisplay{
    id:number;
    playerA:IMatchingPlayer;
    playerB:IMatchingPlayer;
}

interface IMatching{
  match:IMatchDisplay[]
}