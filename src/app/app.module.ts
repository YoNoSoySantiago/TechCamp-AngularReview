import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MovieAddComponent } from './components/movies/movie-add/movie-add.component';
import { MovieEditComponent } from './components/movies/movie-edit/movie-edit.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'; 
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatButtonModule} from '@angular/material/button';  

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesListComponent,
    MovieAddComponent,
    MovieEditComponent,
    LoginFormComponent,
    NavBarComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    // Formulario reactivo
    FormsModule, //NgModule
    ReactiveFormsModule, // Validations
    
    //Modulos de angular materal
    MatFormFieldModule,
    //Http
    HttpClientModule,
    //CSS
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
