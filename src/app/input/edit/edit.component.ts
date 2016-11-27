import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasicComponent} from '../basic';
import { PlayerComponent} from '../player';
import {IPlayer} from '../../model/player';

import { MatchingService } from '../../service/matching.service';
import { MatchService } from '../../service/match.service';

@Component({
  selector: 'edit',
  styles: [``],
  templateUrl: './edit.component.html',
  providers:[MatchService, MatchingService]  
})
export class EditComponent {
    @ViewChild(BasicComponent) basic: BasicComponent;
    @ViewChild(PlayerComponent) player: PlayerComponent;

    tournamentId:string;

    constructor(public route: ActivatedRoute,private matchService: MatchService, private matchingService:MatchingService) {

     if(route.params && route.params["value"] && route.params["value"]["id"]){
      this.tournamentId = route.params["value"]["id"];
        }
    }

    onSubmit(){
       this.basic.onSubmit();
       this.player.onSubmit().then(()=>{
        var players =this.player.getEnablePlayers();
        this.matchService.putMatches(this.tournamentId, this.matchingService.createMatch(players));
       });
      //  var players =this.player.getEnablePlayers();
      //  this.matchService.putMatch(this.tournamentId, this.matchingService.createMatch(players));
      
      
      //  this.matchingService.createMatch(this.player.players);
    }
}