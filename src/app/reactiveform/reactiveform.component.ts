import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent implements OnInit{
  myform:FormGroup;
  ngOnInit(): void {
    
    this.myform=new FormGroup({
    uname:new FormControl
    email: new FormControl
  });
  }

  
  onsubmit(){

  }



}
