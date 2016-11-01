import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constant } from '../constant'
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'basic',
  styles: [`
  `],
  templateUrl: './basic.component.html'
})
export class BasicComponent {
  public title: string;
  public count:number;
  public players:{id:number, name:string, enable:boolean}[];

  public readonly  MaxCount:number = 16;

  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.title = "";
    this.count = 0;
    this.players = [];
    for(let i = 0; i < this.MaxCount; i++ ){
      this.players.push({id:i, name:"player"+(i+1), enable:false})
    }

  }

  onCountChange($event) {
    this.count = $event.target.value;

    for(let i = 0; i < this.MaxCount; i++ ){

      this.players[i].enable = (this.count > i);
    }


    console.log($event);



  }

}
