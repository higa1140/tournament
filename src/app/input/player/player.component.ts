import { Component, Input, Output } from '@angular/core';
import {Subscription} from 'rxjs';

import { Constant } from '../../constant';
import { PlayerService} from '../../service/player.service';
import { IPlayer } from '../../model/player';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'player',
  styles: [`
  `],
  templateUrl: './player.component.html',
  providers:[PlayerService]
})
export class PlayerComponent {
  count:number;

  @Output()
  players:IPlayerBasic[];

  public readonly  MaxCount:number = 16;

  @Input()
  tournamentId:string;

  playerSubscription:Subscription;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    if(this.tournamentId != null && this.tournamentId != undefined){

      this.playerSubscription = this.playerService.getPlayer(this.tournamentId).subscribe((data)=>{
        this.players = [];
        for(let player of data){
          this.players.push({
            name:player.name,
            enable:true
          })
        }
        this.count = this.players.length;

        this.supplessPlayer();
      });
    } else {
      this.clear();
    }
  }

  clear(){
    this.count = 0;
    this.players = [];
    this.supplessPlayer();
  }

  supplessPlayer() {
    if(this.players.length >= this.MaxCount){
      return;
    }

    for(let i = this.players.length; i < this.MaxCount; i++ ){
      this.players.push({name:"player"+(i+1), enable:false})
    }
    

  }

  onCountChange($event) {
    this.count = $event.target.value;

    for(let i = 0; i < this.MaxCount; i++ ){
      this.players[i].enable = (this.count > i);
    }
  }

  onSubmit():firebase.Promise<any> {
    var updatePlayers = this.getEnablePlayers();
    return this.playerService.putPlayer(this.tournamentId, updatePlayers);
  }

  getEnablePlayers(){
    var ret =[];
    for(var player of this.players){
      if(player.enable){ret.push({name:player.name})}
    }
    return ret;
  }


  validate(): boolean {
    // TODO
    return true;
  }

  ngOnDestroy(){
    this.playerSubscription ? this.playerSubscription.unsubscribe():null;
  }
}

interface IPlayerBasic extends IPlayer{
  enable:boolean;
}
