import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasicComponent} from '../basic';
import { PlayerComponent} from '../player';
import {IPlayer} from '../../model/player';

@Component({
  selector: 'edit',
  styles: [``],
  templateUrl: './edit.component.html'  
})
export class EditComponent {
    @ViewChild(BasicComponent) basic: BasicComponent;
    @ViewChild(PlayerComponent) player: PlayerComponent;

    tournamentId:string;

    constructor(public route: ActivatedRoute) {

     if(route.params && route.params["value"] && route.params["value"]["id"]){
      this.tournamentId = route.params["value"]["id"];
        }
    }

    onSubmit(){
       this.basic.onSubmit();
       this.player.onSubmit();
    }
}