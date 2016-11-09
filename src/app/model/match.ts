export interface IMatch{
    tournamentId:number; 
    id:number; 
    round:number;
    aId?:number;
    aMatchId?:number;
    aScore?:number;
    bId?:number;
    bMatchId?:number;
    bScore?:number; 
}

export class Match{
    constructor(
        public tournamentId:number, 
        public id:number, 
        public round:number,
        public aId:number,
        public aMatchId:number,
        public aScore:number,
        public bId:number,
        public bMatchId:number,
        public bScore:number
        ){}
}