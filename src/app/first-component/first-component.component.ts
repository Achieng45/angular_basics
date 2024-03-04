import { FormStyle, NgClass, NgStyle } from '@angular/common';
import { withInterceptors } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { SecondComponentComponent } from "../second-component/second-component.component";



@Component({
    selector: 'app-first-component',
    standalone: true,
    templateUrl: './first-component.component.html',
    styleUrl: './first-component.component.css',
    imports: [RouterOutlet, NgClass, NgStyle, FormsModule, SecondComponentComponent]
})

export class FirstComponentComponent implements OnInit{
  firstnum=0;
  secondnum=0;
  output=0;
  

constructor(private router:Router,private sharedservice:SharedService){}
ngOnInit(): void {
    
}

caculate(){
  this.output=this.sharedservice.calculate(this.firstnum,this.secondnum);
  
}
  isStyleApplied=false


  highlightcolor= 'grey';
  highlight(color: string){
    this.highlightcolor=color;
}
togglestyle(){
  this.isStyleApplied=!this.isStyleApplied
}

usinginputinparent='Achieng Otieno'
@Output()
msgfromchild=""
receivemessage(msg: any){
  this.msgfromchild=msg
}



}
