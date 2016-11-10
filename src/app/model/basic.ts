
    export interface IBasic{
        id?:number;
        title:string;
    }

    export class Basic {
        constructor(
            public id:number, 
            public title:string
        ){}
    }
