import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DomComponent } from './dom/dom.component';
import { DomchildComponent } from './domchild/domchild.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


export const routes: Routes = [
    {path: 'first',component:FirstComponentComponent},
    {path: 'dom',component:DomComponent},
    {path: 'domchild',component:DomchildComponent},
    {path: 'template',component:TemplateformComponent},
    {path: 'reactive',component:ReactiveformComponent}
   
];
