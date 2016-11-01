import {Match} from　'./match'

export class Matches{

    public matchList:{round:number, matches:Match[]}[];
    public rounds:number;

    constructor(public count:number){
        
        this.rounds = this.getRounds();
        this.createMatch();
    }

    private getRounds():number{
        var i:number = this.count;
        var ret:number= 0;
        while(i == 1){
            // TODO 2乗の余りがある場合の処理
            // if(i % 2 == 1){
            // }
            i = Math.floor(i / 2);
            ret++;
        }
        return ret;
    }

    private createMatch(){
        this.matchList = []; 
        for(let i = 0; i < this.rounds; i++){
            this.matchList.push({round:i, matches:[]});
        }
    }
}