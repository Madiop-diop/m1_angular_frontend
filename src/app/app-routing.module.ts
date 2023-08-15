import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { CategoryComponent } from './category/category.component';
import { FormDepartComponent } from './form-depart/form-depart.component';
import { HistoriqueComponent } from './historique/historique.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'acceuil', component: AcceuilComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'form-depart', component: FormDepartComponent
  },
  {
    path: 'historique', component: HistoriqueComponent
  },
  {
    path: '', redirectTo:'/acceuil',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
