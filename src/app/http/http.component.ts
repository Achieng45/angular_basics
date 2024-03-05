import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [BrowserModule,HttpClientModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent  implements OnInit{
  isLoading=false;
  users: any;
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
      },
      error: (error) => {
        console.log('error');
        console.log(error);
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
