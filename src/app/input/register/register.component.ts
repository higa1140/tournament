import { Component,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BasicComponent} from '../basic';
import { PlayerComponent} from '../player';
import {IPlayer} from '../../model/player';
import {ItemService} from '../../service/item.service'; 

@Component({
  selector: 'register',
  styles: [``],
  templateUrl: './register.component.html',
  providers:[ItemService]  
})
export class RegisterComponent {
    @ViewChild(BasicComponent) basic: BasicComponent;
    @ViewChild(PlayerComponent) player: PlayerComponent;

    constructor(public route: ActivatedRoute, private itemService: ItemService) {
    }

    onSubmit(){
      
      this.itemService.postItem({title: this.basic.title}, this.player.getEnablePlayers());
    }
}