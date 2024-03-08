
import { NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,FormsModule],

  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,NgIf],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})







export class AppComponent {
  title = 'learning angular';
  disabled="false"
  onClick="True"

  isdisabled=false
  defaultVal="listen Ngmodel";


  isApproved=false


    
    PassValueToComponent(e:Event){
      console.log((e.target as HTMLInputElement).value);
    }
  
    PassValue(e:Event){
      console.log((e.target as HTMLInputElement).value);
    }
  }



