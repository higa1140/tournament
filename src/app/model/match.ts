export interface IMatch{
    aId?:number;
    aMatchId?:number;
    aScore?:number;
    bId?:number;
    bMatchId?:number;
    bScore?:number; 
}

export class Match{
    constructor(
        public aId:number,
        public aMatchId:number,
        public aScore:number,
        public bId:number,
        public bMatchId:number,
        public bScore:number
        ){}
}