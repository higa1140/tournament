import { Component, Input, Output } from '@angular/core';
import {Subscription} from 'rxjs';

import { Constant } from '../constant';
import { BasicService} from '../../service/basic.service';
import { IBasic } from '../../model/basic';



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
  inputs:[],
  providers:[BasicService]
})
export class BasicComponent {
  public title: string;
  
  @Input()
  tournamentId:string;

  basicSubscription:Subscription;

  constructor(private basicService: BasicService) {
  }

  ngOnInit() {
    if(this.tournamentId != null && this.tournamentId != undefined){
      this.basicSubscription = this.basicService.getBasic(this.tournamentId).subscribe((data)=>{
        this.title = data.title;
      });
    } else {
      this.clear();
    }
  }

  clear(){
    this.title = "";
  }

  onSubmit() {
    if(!this.validate()){
      return false;
    }

    this.basicService.putBasic(this.tournamentId, {title:this.title});
  }


  validate(): boolean {
    // TODO
    return true;
  }

    ngOnDestroy(){
      this.basicSubscription ? this.basicSubscription.unsubscribe() : null;
  }
}
