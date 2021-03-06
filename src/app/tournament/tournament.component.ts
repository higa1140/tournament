import { Component, ViewContainerRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import {Subscription} from 'rxjs';

import { Constant } from '../constant';
import {IPlayer} from '../model/player';
import {IMatch} from '../model/match';
import {PlayerService} from '../service/player.service';
import {MatchService} from '../service/match.service';
import {ItemService} from '../service/item.service';
import { LoginService } from '../service/login.service';

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
  providers: [PlayerService, MatchService, ItemService,NgbModal, LoginService ]

})

export class TournamentComponent {
  private static WIDTH = 50;
  private static PLAYER_HEIGHT = 60;
  private static PLAYER_WIDTH = 110;

  private static TITLE_HEIGHT = 100;


  public title: string;

  private tournamentId:string;
  public players:IPlayer[];
  public matches:IMatchPlayer[][];

  itemSubscription:Subscription;

  public modalParam:{
    round?:number;
    matchId?:number;

    aScore?: string;
    bScore?: string;
    videoId?:string;
  };

  private activeModal: NgbModalRef;

  private isLogin: boolean;

  constructor(public route: ActivatedRoute,private playerService:PlayerService, private matchService:MatchService, private itemService: ItemService, private modalService: NgbModal
  , private loginService: LoginService
  ) {
    this.tournamentId = route.params["value"]["id"];
  }

  setZoom() {
    document.getElementById("canvas").style.zoom = ((window.innerWidth / document.getElementById("canvas").clientWidth) * 100).toString() + "%";
  }

  ngOnInit() {
    this.modalParam = {};

    this.itemSubscription = this.itemService.getItem(this.tournamentId).subscribe((item)=>{
      this.title = item["basic"]["title"];
      this.players = item["player"];
      this.matches = item["match"];
      this.drawTournament();

      this.setZoom();


      window.addEventListener('resize',  (event) => {
        this.setZoom();
      });

    });

    this.loginService.getAuth().onAuthStateChanged((user)=>{
      this.isLogin = !!(user);
    });
  }

  drawTournament(){
    var canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");
    canvas.height = 20 + TournamentComponent.TITLE_HEIGHT + (TournamentComponent.PLAYER_HEIGHT * this.players.length);
    canvas.width = TournamentComponent.PLAYER_WIDTH + ((this.matches.length + 1) * (TournamentComponent.WIDTH + TournamentComponent.PLAYER_WIDTH)) ;

    var context:CanvasRenderingContext2D = canvas.getContext('2d');

    
    var left:number;
    var playerLeft:number;

    var top:number;

    // draw title
    context.font = "36px 'ＭＳ ゴシック'";
    context.fillText(this.title, 60, 30);

    // draw tournament
    for(let round = 0; round  < this.matches.length; round++){
      playerLeft = round * (TournamentComponent.WIDTH + TournamentComponent.PLAYER_WIDTH);
      left = playerLeft +  TournamentComponent.PLAYER_WIDTH;

      for(let match of this.matches[round]){
        let topA = this.getTop(round, match.aId, match.aMatchId);
        let topB = this.getTop(round, match.bId, match.bMatchId);

        // draw a-player
        if(match.aId != undefined && match.aId != null && !match.aSeed){
          this.drawPlayer(context, this.players[match.aId].name, playerLeft, topA);
        } else {
          this.drawLine(
            context, {left:playerLeft, right:playerLeft + TournamentComponent.PLAYER_WIDTH, top:topA, bottom:topA}, false
          );  
        }

        // draw b-player
        if(match.bId != -1){
          if(match.bId != undefined && match.bId != null && !match.bSeed){
            this.drawPlayer(context, this.players[match.bId].name, playerLeft, topB);
          } else {

            this.drawLine(
              context, {left:playerLeft, right:playerLeft + TournamentComponent.PLAYER_WIDTH, top:topB, bottom:topB}, false
            );  
          }
        }


        match.aPosition = {
          playerLeft: !match.aSeed ? playerLeft : 0,
          left: !match.aSeed ? left : left - TournamentComponent.PLAYER_WIDTH - TournamentComponent.WIDTH,
          top: topA, 
          right: match.bId != -1 ? left + TournamentComponent.WIDTH : left + TournamentComponent.WIDTH + TournamentComponent.PLAYER_WIDTH, 
          bottom: match.bId != -1 ? (topA + topB) / 2 : topA
        };

        if(match.bId != -1){
          this.drawLine(
            context, match.aPosition, this.isWin(match.aScore, match.bScore)
          );

          match.bPosition ={
            playerLeft: !match.bSeed ? playerLeft : 0,
            left: !match.bSeed ? left : left - TournamentComponent.PLAYER_WIDTH - TournamentComponent.WIDTH, 
            top :topB, 
            right: left + TournamentComponent.WIDTH, 
            bottom:(topA + topB) / 2
          };

          this.drawLine(
            context, match.bPosition, this.isWin(match.bScore, match.aScore)
          );
        }

      }
    }

    // Victory
    var victoryPosition : IPosition = {
      left: this.matches[this.matches.length-1][0].aPosition.right,
      right: this.matches[this.matches.length-1][0].aPosition.right + TournamentComponent.WIDTH,
      top: this.matches[this.matches.length-1][0].aPosition.bottom,
      bottom: this.matches[this.matches.length-1][0].aPosition.bottom,
      playerLeft: this.matches[this.matches.length-1][0].aPosition.right + TournamentComponent.WIDTH 
    };

    var victory: boolean = this.matches[this.matches.length-1][0].aScore !=this.matches[this.matches.length-1][0].bScore;
    this.drawLine(context, victoryPosition, victory);
    if(victory){
      var playerId:number = this.matches[this.matches.length-1][0].aScore >this.matches[this.matches.length-1][0].bScore ? this.matches[this.matches.length-1][0].aId : this.matches[this.matches.length-1][0].bId;
      this.drawPlayer(context, this.players[playerId].name, victoryPosition.playerLeft, victoryPosition.top);
    }
  }

  getTop(round:number, playerId:number, childMatchId:number){
    if(childMatchId != undefined  && childMatchId != null){
      return this.matches[round-1][childMatchId].aPosition.bottom;
    } else {
      return 20 + TournamentComponent.TITLE_HEIGHT + (playerId * TournamentComponent.PLAYER_HEIGHT) + (round * TournamentComponent.PLAYER_HEIGHT / 2);
    }

  }

  drawPlayer(context:CanvasRenderingContext2D, playerName:string, left:number, top:number){
    context.font = "16px 'ＭＳ ゴシック'";
    context.fillText(playerName, left+20, top);
  }

  drawLine(context:CanvasRenderingContext2D, position:IPosition, isWin:boolean){
console.log(JSON.stringify(position));

    context.beginPath();
    context.lineWidth = isWin ? 5: 2;
    context.moveTo(position.left, position.top);
    context.lineTo(position.right, position.top);
    context.lineTo(position.right, position.bottom);
    context.lineTo(position.right, position.top);
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

  open(content, event) {
    var canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas");

    for(let round = 0; round  < this.matches.length; round++){
      for(let matchId = 0; matchId < this.matches[round].length; matchId++){
        if(this.matches[round][matchId].aId == undefined || this.matches[round][matchId].aId == null
        || this.matches[round][matchId].bId == undefined || this.matches[round][matchId].bId == null || this.matches[round][matchId].bId == -1){
          continue;
        }

        if(event.clientX + window.scrollX - canvas.offsetLeft >= this.matches[round][matchId].aPosition.playerLeft 
        && event.clientX + window.scrollX - canvas.offsetLeft <= this.matches[round][matchId].aPosition.left
        && event.clientY + window.scrollY - canvas.offsetTop >= this.matches[round][matchId].aPosition.top
        && event.clientY + window.scrollY - canvas.offsetTop <= this.matches[round][matchId].bPosition.top
        && (this.isLogin || this.matches[round][matchId].videoId) ){



          this.modalParam.round = round;
          this.modalParam.matchId = matchId;

          this.modalParam.aScore = this.matches[this.modalParam.round][this.modalParam.matchId]['aScore'] ? this.matches[this.modalParam.round][this.modalParam.matchId]['aScore'].toString() : '0';
          this.modalParam.bScore = this.matches[this.modalParam.round][this.modalParam.matchId]['bScore'] ? this.matches[this.modalParam.round][this.modalParam.matchId]['bScore'].toString() : '0';
          this.modalParam.videoId = this.matches[this.modalParam.round][this.modalParam.matchId].videoId || '';;

          this.activeModal = this.modalService.open(content, {size: "sm"});
          return;
        }
      }
    }
  }

  savePlayer(){console.log("aaaa")}
  onStateChange(){console.log("bbbb")}

  onSubmit(event){
    if(!this.isLogin){
      return;
    }

    this.matchService.putScore(this.tournamentId, this.modalParam.round, this.modalParam.matchId, Number(this.modalParam.aScore), Number(this.modalParam.bScore), this.modalParam.videoId).then(()=>{
      if(this.modalParam.aScore == this.modalParam.bScore){
        return;
      }

      if(this.modalParam.round + 1 >= this.matches.length){
        return;
      }

      var match= {};
      var matchId: number = null;
      var playerId:number = this.modalParam.aScore > this.modalParam.bScore ? this.matches[this.modalParam.round][this.modalParam.matchId].aId : this.matches[this.modalParam.round][this.modalParam.matchId].bId;

      for(var i = 0; i < this.matches[this.modalParam.round+1].length; i++){
        if(this.matches[this.modalParam.round+1][i].aMatchId == this.modalParam.matchId){
          match = {aId: playerId};
          matchId= i;
        } else if(this.matches[this.modalParam.round+1][i].bMatchId == this.modalParam.matchId){
          match = match = {bId: playerId};
          matchId= i;
        }
      }
      return this.matchService.putMatch(this.tournamentId, this.modalParam.round+1, matchId, match);
    }).then(()=>{
      this.activeModal.close();
    });
  }

  ngOnDestroy(){
    this.itemSubscription.unsubscribe();

    window.removeEventListener('resize');
  }
}

interface IPosition {
  playerLeft?: number;
  left:number;
  top:number;
  right:number;
  bottom:number;
}

interface IMatchPlayer extends IMatch{
  aPosition?:IPosition;
  bPosition?:IPosition;
}
