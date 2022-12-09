import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

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
