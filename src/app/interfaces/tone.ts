export interface ToneInterface {
    type: string;
    note: string;
    duration: string;
    index:number;
    uid:string;
    distortion: number;
  }

  export interface Goto {
    index:number;
    uid:string;
    gotoIndex:number;
  }