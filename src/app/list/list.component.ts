import { Component, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

import { ItemService } from '../service/item.service';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'login',
  styles: [`
  `],
  templateUrl: './list.component.html',
  providers:[ItemService,LoginService]
})
export class ListComponent{

  isLogin:boolean;
  itemList;
  errorMessage:string;

  itemSubscription:Subscription;


  constructor(public route: ActivatedRoute, private itemService: ItemService, private loginService: LoginService) {
  }

  ngOnInit(){
    this.itemSubscription  = this.itemService.getItemList().subscribe((items)=>{
      this.itemList = items;
    });

    this.loginService.getAuth().onAuthStateChanged((user)=>{
      this.isLogin = !!(user);
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