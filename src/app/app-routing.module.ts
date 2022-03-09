import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { SigninComponent } from './component/signin/signin.component';


const routes: Routes = [
{path:'', redirectTo:'login', pathMatch:'full'},
{path:'login', component:SigninComponent},
{path: 'register', component:RegisterComponent},
{path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
