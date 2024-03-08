import { Routes } from '@angular/router';
import{FirstComponentComponent} from './first-component/first-component.component';
//import { SecondComponentComponent } from './second-component/second-component.component';
import { HttpComponent } from './http/http.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    
  {path: 'first-component', component: FirstComponentComponent },
  {path:'pipes',component:PipesComponent},
  {path:'http',component:HttpComponent}
];
