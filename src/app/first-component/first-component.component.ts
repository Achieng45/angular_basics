import { Component, Output } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecondComponentComponent } from "../second-component/second-component.component";
@Component({
    selector: 'app-first-component',
    standalone: true,
    templateUrl: './first-component.component.html',
    styleUrl: './first-component.component.css',
    imports: [RouterOutlet, NgClass, NgStyle, ReactiveFormsModule, FormsModule, SecondComponentComponent]
})
export class FirstComponentComponent {
  firstnum=0;
  secondnum=0;
  output=0;
  

constructor(private router:Router,private sharedservice:SharedService){}
ngOnInit(): void {
    
}

calculate(){
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
