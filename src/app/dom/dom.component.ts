import { Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, input, viewChild } from '@angular/core';
import { DomchildComponent } from "../domchild/domchild.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dom',
    standalone: true,
    templateUrl: './dom.component.html',
    styleUrl: './dom.component.css',
    imports: [DomchildComponent,FormsModule]
})
export class DomComponent implements OnInit,OnChanges,DoCheck{
  myname="Stephanie";
  isChild=true;
togglechild(){
  this.isChild=!this.isChild
}
  constructor(){
    console.log("parent constructor is called");
  }
  ngDoCheck(): void {
    console.log("parent docheck is called");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent on changes is called");
  }

 

  ngOnInit(): void {
    
      console.log("parent oninit is called")
      
  }
  

  sendinput(inputElement: HTMLInputElement, nameElement: HTMLElement): void {
    const inputValue = inputElement.value;
    const nameValue = nameElement.innerText;
    console.log('Input Value:', inputValue);
    console.log('Name Value:', nameValue);
    
  }

}
