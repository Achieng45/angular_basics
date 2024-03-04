import { Component, OnChanges, OnInit, SimpleChanges, input, viewChild } from '@angular/core';
import { DomchildComponent } from "../domchild/domchild.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dom',
    standalone: true,
    templateUrl: './dom.component.html',
    styleUrl: './dom.component.css',
    imports: [DomchildComponent,FormsModule]
})
export class DomComponent implements OnInit,OnChanges{
  myname="Stephanie";
  isChild=true;
togglechild(){
  this.isChild=!this.isChild
}
  constructor(){
    console.log("parent constructor is called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent on changes is called")
  }
  @viewChild('myinput',{static:true})myCustomInput;

  ngOnInit(): void {
      console.log("parent oninit is called")
      this,this.myCustomInput.nativeElement.focus();
  }
  

  sendinput(input,myname){
    console.log(myinput.value)
    console.log(myname.innerText)
  }

}
