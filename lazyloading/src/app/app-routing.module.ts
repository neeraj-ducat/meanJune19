import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'not-authorized', component: NotAuthorizedComponent},
  {path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [UserGuard]},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AdminGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
