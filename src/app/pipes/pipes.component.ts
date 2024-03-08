import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CurrencyPipe,LowerCasePipe,DatePipe,UpperCasePipe,PercentPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  mark=0.2;
  today=Date.now();
  myname="Stephanie";
  Amount=50



}
