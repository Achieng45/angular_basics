import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})







export class AppComponent {
  title = 'learning angular';
  isdisabled="false"
  onClick="True"


  defaultVal="listen Ngmodel";
  
  PassValueToComponent(e:Event){
    console.log((e.target as HTMLInputElement).value);
  }

  PassValue(e:Event){
    console.log((e.target as HTMLInputElement).value);
  }


}
