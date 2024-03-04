import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DomComponent } from './dom/dom.component';
import { DomchildComponent } from './domchild/domchild.component';


export const routes: Routes = [
    {path: 'first',component:FirstComponentComponent},
    {path: 'dom',component:DomComponent},
    {path: 'domchild',component:DomchildComponent}
   
];
