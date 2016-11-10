import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constant } from '../constant';
import { BasicService} from '../service/basic.service';
import { PlayerService} from '../service/player.service';
import { IBasic } from '../model/basic';
import { IPlayer } from '../model/player';

/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'basic',
  styles: [`
  `],
  templateUrl: './basic.component.html',
  providers:[BasicService, PlayerService]
})
export class BasicComponent {
  public title: string;
  public count:number;
  public players:IPlayerBasic[];

  public readonly  MaxCount:number = 16;

  private tournamentId:number;

  constructor(public route: ActivatedRoute, private basicService: BasicService, private playerService: PlayerService) {
    this.tournamentId = null;
    
    if(route.params && route.params["value"] && route.params["value"]["id"] && !isNaN(route.params["value"]["id"])){
      this.tournamentId = Number(route.params["value"]["id"]);
    }
    
    console.log(this.tournamentId);
  }

  ngOnInit() {
    if(this.tournamentId){
      var promises:Promise<any>[] = [];
      promises.push(this.basicService.getBasic(this.tournamentId).then((result:IBasic)=>{
        this.title = result.title;
      }));
      promises.push(this.playerService.getPlayer(this.tournamentId).then((result:IPlayer[])=>{
        this.players = [];
        for(let player of result){
          this.players.push({
            tournamentId:player.tournamentId,
            id:player.id,
            name:player.name,
            enable:true
          })
        }
        this.count = this.players.length;

        this.supplessPlayer();
      }));
      

      Promise.all(promises).catch(()=>{this.clear()});
    } else {
      this.clear();
    }
  }

  clear(){
    this.title = "";
    this.count = 0;
    this.players = [];
    this.supplessPlayer();
  }

  supplessPlayer() {
    if(this.players.length >= this.MaxCount){
      return;
    }

    for(let i = this.players.length; i < this.MaxCount; i++ ){
      this.players.push({id:i, name:"player"+(i+1), enable:false})
    }
    

  }

  onCountChange($event) {
    this.count = $event.target.value;

    for(let i = 0; i < this.MaxCount; i++ ){
      this.players[i].enable = (this.count > i);
    }
  }

  onSubmit() {
    if(!this.validate()){
      return false;
    }

    this.basicService.putBasic({id:this.tournamentId, title:this.title});
    this.playerService.putPlayer(this.players);

  }


  validate(): boolean {
    // TODO
    return true;
  }
}

interface IPlayerBasic extends IPlayer{
  enable:boolean;
}
