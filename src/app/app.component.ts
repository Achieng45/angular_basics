import { Component } from '@angular/core';
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
