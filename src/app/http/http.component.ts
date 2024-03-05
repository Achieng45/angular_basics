import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [BrowserModule,HttpClientModule,NgIf,FormsModule,NgFor],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent  implements OnInit{
  isLoading=true;
  users:any;
  url="https://api.github.com/users";
  constructor(private http:HttpClient){

  }
  ngOnInit() {
    this.getUsers();
      
  }
  getUsers() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        console.log('success');
        console.log(res);
        this.users = res;
        this.isLoading=false;
      },
      error: (error) => {
        console.log('error');
        console.log(error);
        this.isLoading=false;
      },
      complete: () => {
        console.log('completed');
      },
    });
  }


    
  

  goToGithub(url:any){
    window.open(url,'_blank')
  }

}
