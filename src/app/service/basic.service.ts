import { Injectable } from '@angular/core';
import {Basic, IBasic} from '../model/basic';

@Injectable()
export class BasicService {
  private basic:IBasic = new Basic(null, "test title");

  getBasic(tournamentId:number): Promise<IBasic> {
    return Promise.resolve(this.basic);
  }

  postBasic(basic:IBasic):Promise<void> {
    // TODO 
    basic.id = 1;
    this.basic = basic;
    return Promise.resolve();
  }

  putBasic(basic:IBasic):Promise<void> {
    if(basic.id){
      // TODO
      this.basic = basic;
      return Promise.resolve();
    } else {
      return this.postBasic(basic);
    }
    
  }
}