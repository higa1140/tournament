
    export interface IPlayer{
        tournamentId?:number;
        id?:number;
        name:string;
    }

    export class Player {
        constructor(
            public tournamentId:number,
            public id:number, 
            public name:string)
            {

        }
    }
