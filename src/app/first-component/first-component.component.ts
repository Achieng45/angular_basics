import { FormStyle, NgClass, NgStyle } from '@angular/common';
import { withInterceptors } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SecondComponentComponent } from "../second-component/second-component.component";


@Component({
    selector: 'app-first-component',
    standalone: true,
    templateUrl: './first-component.component.html',
    styleUrl: './first-component.component.css',
    imports: [RouterOutlet, NgClass, NgStyle, FormsModule, SecondComponentComponent]
})

export class FirstComponentComponent {
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
