import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //firstpagevalue: number ;
  firstnum=0;
  secondnum=0;
  

  constructor() { }

  calculate(firstnum: number,secondnum: number){
    return firstnum+secondnum;
  }
}
