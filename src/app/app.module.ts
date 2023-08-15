import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { FormDepartComponent } from './form-depart/form-depart.component';
import { DataTablesModule } from 'angular-datatables';
import { HistoriqueComponent } from './historique/historique.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    AcceuilComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    FormDepartComponent,
    HistoriqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
