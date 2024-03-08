import { Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, input, viewChild } from '@angular/core';
import { DomchildComponent } from "../domchild/domchild.component";
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-dom',
    standalone: true,
    templateUrl: './dom.component.html',
    styleUrl: './dom.component.css',
    imports: [DomchildComponent,FormsModule,NgIf]
})
export class DomComponent implements OnInit{
  myname="";
  isChild=false;

@ViewChild('myinput',{static:true})mycustominput:any;


constructor(){
  console.log("parent constructor is called");
}



// togglechild(){
//   this.isChild=!this.isChild }
//   constructor(){
//     console.log("parent constructor is called");
//   }
  // ngDoCheck(): void {
  //   console.log("parent docheck is called");
    
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("Parent on changes is called");
  // }

 

  ngOnInit() {
      this.mycustominput.nameElement.focus();
      console.log("parent oninit is called")
      
  }
  

  sendinput(input:any, channel: any){
    
    console.log(input.value);
    console.log(channel.innerText);
    
  }

}
