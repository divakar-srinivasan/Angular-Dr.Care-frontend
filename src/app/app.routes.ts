import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login-page/login/login.component';
import { SignupComponent } from './Components/login-page/signup/signup.component';


export const routes: Routes = [
    { path: 'home' , component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login' , component: LoginComponent},
    { path: 'signup', component: SignupComponent }

];
