import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieAddComponent } from 'src/app/components/movies/movie-add/movie-add.component';
import { MovieEditComponent } from 'src/app/components/movies/movie-edit/movie-edit.component';
import { MoviesListComponent } from 'src/app/components/movies/movies-list/movies-list.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: MoviesListComponent
  },
  {
    path:"add",
    component: MovieAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"edit/:id",
    component: MovieEditComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieModuleRoutingModule { }
