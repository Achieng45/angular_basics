import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent implements OnInit {
  firstnum=0;
  secondnum=0;
  output=0;
  previouspageval=0;
  firstpageval=0;
constructor(private router:Router,private sharedService:SharedService){}

calculate(){
  this.output=this.sharedService.calculate(this.firstnum,this.secondnum)
  
}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output()


  @Input()
  usinginput='Achieng Otieno'

  sendMessageEmitter=new EventEmitter();

  sendmessagetoparent(e:Event){
    this.sendMessageEmitter.emit(e.target as HTMLInputElement);
    // console.log((e.target as HTMLInputElement).value)

  }

}
