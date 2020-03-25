import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/private/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { DefaultComponent } from './layouts/private-layout/default.component';
import { RegisterPersonComponent } from './pages/private/person/register-person/register.component';
import { ConsultPersonComponent } from './pages/private/person/consult-person/consult.component';
import { ConsultUserComponent } from './pages/private/users/consult-user/consult-user.component';
import { RegisterUserComponent } from './pages/private/users/register-user/register-user.component';


const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'register-person', component: RegisterPersonComponent },
      { path: 'consult-person', component: ConsultPersonComponent },
      { path: 'consult-user', component: ConsultUserComponent },
      { path: 'register-user', component: RegisterUserComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
