export interface IMatch{
    aId?:number;
    aMatchId?:number;
    aScore?:number;
    aSeed?:boolean;
    bId?:number;
    bMatchId?:number;
    bScore?:number;
    bSeed?:boolean;
    videoId?:string;
}

export class Match{
    constructor(
        public aId:number,
        public aMatchId:number,
        public aScore:number,
        public aSeed:boolean,
        public bId:number,
        public bMatchId:number,
        public bScore:number,
        public bSeed:boolean,
        public videoId:string
        ){}
}