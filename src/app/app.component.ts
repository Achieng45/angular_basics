import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})







export class AppComponent {
  title = 'learning angular';
<<<<<<< HEAD
<<<<<<< HEAD
  isdisabled=false
defaultVal="listen Ngmodel";
  
=======
  isdisabled=false
  onClick=true
  defaultVal="define"
  IsApproved=false

>>>>>>> components_databinding
  PassValueToComponent(e:Event){
    console.log((e.target as HTMLInputElement).value);
  }

  PassValue(e:Event){
    console.log((e.target as HTMLInputElement).value);
  }
<<<<<<< HEAD
}
=======
  disabled="false"
  onClick="True"
=======

approved(status: boolean){
  this.IsApproved=status
}


>>>>>>> components_databinding
}
>>>>>>> master
