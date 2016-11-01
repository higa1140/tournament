import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constant } from '../constant'
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'tournament',
  styles: [`
  `],
  templateUrl: './tournament.component.html'
})

export class TournamentComponent {
  public title: string;
  public players:{id:number, name:string, enable:boolean}[];
  public matching:{match:{id:number, playerA:MatchingPlayer, playerB:MatchingPlayer}[]}[];


  constructor(public route: ActivatedRoute) {
    this.players = [];
    this.players.push({id:0, name:"player A", enable:true});
    this.players.push({id:1, name:"player B", enable:true});
    this.players.push({id:2, name:"player C", enable:true});
    this.players.push({id:3, name:"player D", enable:true});
    this.players.push({id:4, name:"player E", enable:true});
    this.players.push({id:5, name:"player F", enable:true});
    this.players.push({id:6, name:"player G", enable:true});
    this.players.push({id:7, name:"player H", enable:true});

    this.matching = [];
    this.matching.push({
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
    });

    this.matching.push({match:[
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
    ]});
    this.matching.push({match:[
      {
        id:6,
        playerA:{ matchingId:4},
        playerB:{ matchingId:5}
      }
    ]});
  }

  ngOnInit() {
    this.drawTournament();
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
      console.log(this.players[i].name);
      height = 20 + (i * 40); 
      this.drawPlayer(context, this.players[i].name, 20, height);
    }
    

    // draw tournament
    for(let i = 0; i < this.matching.length; i++){
      startWidth = 120 + (i * 40); 
      // let startHeight:number = 20;


      for(let j = 0; j < this.matching[i].match.length; j++){
        // startHeight =　20 + (j * 80) + (i * 20);
        let startHeightA = this.getStartHeight(this.matching[i].match[j].playerA,i);
        let startHeightB = this.getStartHeight(this.matching[i].match[j].playerB,i);
        var startHeightAdjust:number = 40 * (i + 1);

        this.matching[i].match[j].playerA.draw ={
          startWidth, 
          startHeight:startHeightA, 
          endWidth: startWidth+40, 
          endHieght:(startHeightA+ startHeightB)/2
        };
        
        this.matching[i].match[j].playerB.draw ={
          startWidth, 
          startHeight :startHeightB, 
          endWidth: startWidth+40, 
          endHieght:(startHeightA+ startHeightB)/2
        };

        this.draw(context, this.matching[i].match[j].playerA.draw.startWidth, this.matching[i].match[j].playerA.draw.startHeight, this.matching[i].match[j].playerA.draw.endWidth, this.matching[i].match[j].playerA.draw.endHieght, this.isWin(this.matching[i].match[j].playerA, this.matching[i].match[j].playerB));
        this.draw(context, this.matching[i].match[j].playerB.draw.startWidth, this.matching[i].match[j].playerB.draw.startHeight, this.matching[i].match[j].playerB.draw.endWidth, this.matching[i].match[j].playerB.draw.endHieght, this.isWin(this.matching[i].match[j].playerB, this.matching[i].match[j].playerA));
        // this.drawLine(context, i, startWidth, startHeight, PlayerType.A, this.isWin(this.matching[i].match[j].playerA, this.matching[i].match[j].playerB));
        // this.drawLine(context, i, startWidth, startHeight, PlayerType.B, this.isWin(this.matching[i].match[j].playerB, this.matching[i].match[j].playerA));
      }
    }
  }

  getStartHeight(matchingPlayer:MatchingPlayer, round:number){
    if(matchingPlayer.matchingId != undefined  && matchingPlayer.matchingId!=null){
      for(var match of this.matching[round-1].match){
        if(match.id == matchingPlayer.matchingId){
          return match.playerA.draw.endHieght;
        }
      }
    } else {
      // for(var i = 0; i < this.players.length; i++){
      //   if( == )
      // }
      return 20 + (matchingPlayer.id * 40) + (round * 20);
    }

  }

  drawPlayer(context:CanvasRenderingContext2D, playerName:string, width:number, height:number){
    context.fillText(playerName, width, height);
  }

  // drawLine(context:CanvasRenderingContext2D, round:number, startWidth:number, startHeight:number, playerType:PlayerType, isWin:boolean){
  //   var startHeightAdjust:number = 40 * (round + 1);
  //   var startHeightAdd:number = 20 * round;
  //   var height: number = playerType == PlayerType.A ? startHeight + startHeightAdd : startHeight + startHeightAdjust + startHeightAdd; 
  //   context.lineWidth = isWin ? 5: 2;
  //   this.draw(context, startWidth, height, startWidth + 40, playerType == PlayerType.A ? height  + (20 * (round + 1)): height - (20 * (round + 1)))
  // }

  draw(context:CanvasRenderingContext2D, startWidth:number, startHeight:number, endWidth:number, endHeight:number, isWin:boolean){
    context.beginPath();
    context.lineWidth = isWin ? 5: 2;
    context.moveTo(startWidth, startHeight);
    context.lineTo(endWidth, startHeight);
    context.lineTo(endWidth, endHeight);
    context.lineTo(endWidth, startHeight);
    context.closePath();
    context.stroke();
  }

  getPlayerNameById(id:number):string{
    for(var player of this.players){
      if(player.id == id){
        return player.name;
      }
    }
    return null;
  }

  isWin(player:MatchingPlayer, matchPlayer:MatchingPlayer):boolean{
    if(player.score == null || matchPlayer.score == null){
      return false;
    }
    return player.score > matchPlayer.score;
  }

}

enum PlayerType {
  A,B
}

interface MatchingPlayer{
  id?:number;
  matchingId?:number;
  score?:number;
  draw?:{
    startWidth:number;
    startHeight:number;
    endWidth:number;
    endHieght:number;
   }
}