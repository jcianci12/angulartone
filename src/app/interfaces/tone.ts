export interface ToneInterface {
    type: string;
    note: string;
    duration: string;
    index:number;
    uid:string;
  }

  export interface Goto {
    index:number;
    uid:string;
    gotoIndex:number;
  }