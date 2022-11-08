import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { MovieAddComponent } from './components/movies/movie-add/movie-add.component';
import { MovieEditComponent } from './components/movies/movie-edit/movie-edit.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo: "movies"
  },
  {
    path: 'movies',
    loadChildren: ()=> import('./modules/movie-module/movie-module.module').then(m => m.MovieModuleModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./modules/auth-module/auth-module.module').then(m => m.AuthModuleModule)
  },
  {
    path:"**",
    component: NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
