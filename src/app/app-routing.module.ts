import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { OperatorListComponent } from './operator-list/operator-list.component';
import { OperatorFormComponent } from './operator-list/operator-form/operator-form.component';
import { SingleOperatorComponent } from './operator-list/single-operator/single-operator.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path : 'auth/signup', component: SignupComponent},
  { path : 'auth/signin', component: SigninComponent},
  { path : 'operators',canActivate: [AuthGuardService], component: OperatorListComponent},
  { path : 'operators/new',canActivate: [AuthGuardService], component: OperatorFormComponent},
  { path : 'operators/view/:id',canActivate: [AuthGuardService], component: SingleOperatorComponent},
  { path : '' ,redirectTo: 'operators', pathMatch: 'full'},
  { path : '**',redirectTo: 'operators'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
