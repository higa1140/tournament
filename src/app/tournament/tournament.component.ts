import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

import { Constant } from '../constant';
import {IPlayer} from '../model/player';
import {IMatch} from '../model/match';
import {PlayerService} from '../service/player.service';
import {MatchService} from '../service/match.service';
import {ItemService} from '../service/item.service';

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
  providers: [PlayerService, MatchService, ItemService]

})

export class TournamentComponent {
  public title: string;

  private tournamentId:string;
  public players:IPlayer[];
  public matches:IMatchPlayer[][];

  itemSubscription:Subscription;


  constructor(public route: ActivatedRoute,private playerService:PlayerService, private matchService:MatchService, private itemService: ItemService) {
    this.tournamentId = route.params["value"]["id"];
  }

  ngOnInit() {
    this.itemSubscription = this.itemService.getItem(this.tournamentId).subscribe((item)=>{
      this.players = item["player"];
      this.matches = item["match"];
      this.drawTournament(); 
    });
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
    for(let i = 0; i  < this.matches.length; i++){
      startWidth = 120 + (i * 40); 

      for(let match of this.matches[i]){
        let startHeightA = this.getStartHeight(i, match.aId, match.aMatchId);
        let startHeightB = this.getStartHeight(i, match.bId, match.bMatchId);
        var startHeightAdjust:number = 40 * (i + 1);

        match.aPosition ={
          startWidth, 
          startHeight:startHeightA, 
          endWidth: startWidth + 40, 
          endHeight:(startHeightA + startHeightB) / 2
        };
        
        match.bPosition ={
          startWidth, 
          startHeight :startHeightB, 
          endWidth: startWidth + 40, 
          endHeight:(startHeightA + startHeightB) / 2
        };

        this.drawLine(
          context, match.aPosition, this.isWin(match.aScore, match.bScore)
        );

        this.drawLine(
          context, match.bPosition, this.isWin(match.bScore, match.aScore)
        );
      }
    }
  }

  getStartHeight(round:number, playerId:number, matchId:number){
    if(matchId != undefined  && matchId != null){
      return this.matches[round-1][matchId].aPosition.endHeight;
    } else {
      return 20 + (playerId * 40) + (round * 20);
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
  }

  isWin(playerScore:number, matchPlayerScore:number):boolean{
    if(playerScore == null || matchPlayerScore == null){
      return false;
    }
    return playerScore > matchPlayerScore;
  }

  ngOnDestroy(){
    this.itemSubscription.unsubscribe();
  }
}

interface IPosition{
  startWidth:number;
  startHeight:number;
  endWidth:number;
  endHeight:number;  
}

interface IMatchPlayer extends IMatch{
  aPosition?:IPosition;
  bPosition?:IPosition;
}
