import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, Input } from '@angular/core';
import { DomComponent } from "../dom/dom.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-domchild',
    standalone: true,
    templateUrl: './domchild.component.html',
    styleUrl: './domchild.component.css',
    imports: [DomComponent,FormsModule]
})
export class DomchildComponent implements OnInit,OnDestroy,OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  
  
  ngAfterContentInit(): void {
    console.log("child content init constructor is called");
    
  }
 
  constructor(){
    console.log("Child constructor is called");
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    console.log("docheck constructor is called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("child on changes is called");
  }
  ngOnInit(): void {
      console.log("child Oninit is called")
  }
  ngOnDestroy(): void {
      console.log("child on destroy")
  }
  @Input() myname:string = '';

  
  // @ContentChild('projectcontent')projectcontent:any;
}
