import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasicComponent} from '../basic';
import { PlayerComponent} from '../player';
import {IPlayer} from '../../model/player';

@Component({
  selector: 'edit-main',
  styles: [``],
  templateUrl: './edit.main.component.html'  
})
export class EditMainComponent {
    @ViewChild(BasicComponent) basic: BasicComponent;
    @ViewChild(PlayerComponent) player: PlayerComponent;

    tournamentId:number;

    // title: string;
    // players: IPlayer[];

    constructor(public route: ActivatedRoute) {

     if(route.params && route.params["value"] && route.params["value"]["id"] && !isNaN(route.params["value"]["id"])){
      this.tournamentId = Number(route.params["value"]["id"]);
        }
    }

    onSubmit(){
      // console.log(this.title);
      // console.log(this.players);
       this.basic.onSubmit();
       this.player.onSubmit();
    }
}