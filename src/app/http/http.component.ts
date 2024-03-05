import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [BrowserModule,HttpClientModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent  implements OnInit{
  isLoading=false;
  users=[1,2,3];
  url="https://api.github.com/users";
  constructor(private http:HttpClient){
    
  }
  ngOnInit() {
    this.getUsers();
      
  }
  getUsers(){
    this.http.get(this.url)
  }

  goToGithub(url:any){
    window.open(url,'_blank')
  }

}
