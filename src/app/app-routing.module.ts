import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DeactivateGuardService } from './services/deactivate-guard.service';
import { UserResolveService } from './services/resolver/user-resolve.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent,
  canActivateChild: [AuthGuardService],
   children: [
    {path: ':id/:name', component: UserComponent},
    {path: ':id/:name/edit', component: EditUserComponent, canDeactivate: [DeactivateGuardService], 
      resolve: {
        user: UserResolveService
      }
    }
  ]},
 
  { path: 'categories', component: CategoriesComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
