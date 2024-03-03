import { FormStyle, NgClass, NgStyle } from '@angular/common';
import { withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [RouterOutlet,NgClass,NgStyle,FormsModule,NgModel],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
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
}
