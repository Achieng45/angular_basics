import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})







export class AppComponent {
  title = 'learning angular';
  isdisabled=false
  onClick=true
  defaultVal="define"
  IsApproved=false

  PassValueToComponent(e:Event){
    console.log((e.target as HTMLInputElement).value);
  }

  PassValue(e:Event){
    console.log((e.target as HTMLInputElement).value);
  }

approved(status: boolean){
  this.IsApproved=status
}


}
