import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasicComponent} from '../basic';
import { PlayerComponent} from '../player';
import {IPlayer} from '../../model/player';
import {ItemService} from '../../service/item.service';

import { MatchingService } from '../../service/matching.service';
import { MatchService } from '../../service/match.service'; 

@Component({
  selector: 'register',
  styles: [``],
  templateUrl: './register.component.html',
  providers:[ItemService, MatchService, MatchingService]
})
export class RegisterComponent {
    @ViewChild(BasicComponent) basic: BasicComponent;
    @ViewChild(PlayerComponent) player: PlayerComponent;

    constructor(public route: ActivatedRoute, private itemService: ItemService, private matchService: MatchService, private matchingService:MatchingService) {
    }

    onSubmit(){
      var players = this.player.getEnablePlayers();
      var match =  this.matchingService.createMatch(players);
      this.itemService.postItem({title: this.basic.title}, players, match);
    }
}