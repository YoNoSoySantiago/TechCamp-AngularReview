import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieModuleRoutingModule } from './movie-module-routing.module';
import { MovieAddComponent } from 'src/app/components/movies/movie-add/movie-add.component';
import { MovieEditComponent } from 'src/app/components/movies/movie-edit/movie-edit.component';
import { MovieComponent } from 'src/app/components/movies/movie/movie.component';
import { MoviesListComponent } from 'src/app/components/movies/movies-list/movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    MovieComponent,
    MoviesListComponent,
    MovieAddComponent,
    MovieEditComponent,
    
  ],
  imports: [
    CommonModule,
    MovieModuleRoutingModule,
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
  ]
})
export class MovieModuleModule { }
