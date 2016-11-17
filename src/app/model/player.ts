
    export interface IPlayer{
        id?:number;
        name:string;
    }

    export class Player {
        constructor(
            public id:number, 
            public name:string)
            {

        }
    }
