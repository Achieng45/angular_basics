import { NgClass } from '@angular/common';
import { withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [RouterOutlet,NgClass],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})

export class FirstComponentComponent {
  highlightcolor= 'grey';
  highlight(color: string){
    this.highlightcolor=color;
}

}
