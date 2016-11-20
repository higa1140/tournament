import { Component, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

import { ItemService } from '../service/item.service';


@Component({
  selector: 'login',
  styles: [`
  `],
  templateUrl: './list.component.html',
  providers:[ItemService]
})
export class ListComponent{

  itemList;
  errorMessage:string;

  itemSubscription:Subscription;


  constructor(public route: ActivatedRoute, private itemService: ItemService) {
  }

  ngOnInit(){
    this.itemSubscription  = this.itemService.getItemList().subscribe((items)=>{
      this.itemList = items;
    });
  }

  ngOnDestroy(){
    this.itemSubscription.unsubscribe();
  }
}

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}