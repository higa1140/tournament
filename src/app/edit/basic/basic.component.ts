import { Component, Input, Output } from '@angular/core';
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
  @Output()
  title: string;
  
  @Input()
  tournamentId:number;

  constructor(private basicService: BasicService) {
    // this.tournamentId = null;
  }

  ngOnInit() {
    if(this.tournamentId != null && this.tournamentId != undefined){
      this.basicService.getBasic(this.tournamentId).forEach((data)=>{
        this.title = data[0]["$value"];
      });
      // promises.push(this.basicService.getBasic(this.tournamentId).then((result:IBasic)=>{
      //   this.title = result.title;
      // }));
      

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
}
