export interface Tone {
    type: string;
    note: number;
    duration: number;
    index:number;
    uid:string;
  }

  export interface Goto {
    index:number;
    uid:string;
    gotoIndex:number;
  }