import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'',component:LandingComponent},
    {path:'',pathMatch:'full',redirectTo:''},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'user',component:UserComponent},
    {path:'admin',component:AdminComponent},
    {path:'**',component:NotFoundComponent}
];
