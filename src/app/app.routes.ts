import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [


      // eager routing
   // {path: "", redirectTo: "home", pathMatch: "full"},

   // {path: 'home', component: HomeComponent },
   // {path: 'about', component: AboutComponent },
   // {path: 'details/:id', component: DetailsComponent },
   // {path: 'register', component:RegisterComponent},
   // {path: 'login', component:LoginComponent},
   // {path : "**", component : ErrorComponent}




  

   // lazy loading routing

   {path: "", redirectTo: "home", pathMatch: "full"},

   {
      path: "home",
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
   },
   {
      path: 'about',
      loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
   },
   {
      path: 'details/:id',
      loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent)
   },
   {
       path: 'register',
      loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)},
   {
      path: 'login',
      loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
   },

   {
      path: 'main',
      loadComponent: () => import('./main/main.component').then(m => m.MainComponent)
   },

   {path : "**", component : ErrorComponent}





];
