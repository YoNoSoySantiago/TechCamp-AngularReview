import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/models/interfaces/Movie.interface';
import { BackendRequestService } from 'src/app/services/backend-request.service';

import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  moviesList: IMovie[] = []
  dataSource = new MatTableDataSource(this.moviesList)
  displayedColumns = ["title","year","genre","director","rate"]
  constructor(private router:Router, private backendRequest: BackendRequestService) { }

  ngOnInit(): void {
    this.loadMovies()
  }

  loadMovies():void{
    this.backendRequest.getAllMovies().subscribe((movies:IMovie[])=>{
      this.moviesList = movies
    })
  }

  addMovie():void{
    this.router.navigate(['movies/add'])
  }

  editMovie(movie:IMovie):void{
    this.router.navigate([`movies/edit/${movie.id}`])
  }

  deleteMovie(movie:IMovie): void{
    this.backendRequest.removeMovie(movie.id).subscribe((res)=>{
      this.loadMovies()
    })
  }

  loginUser():void{
    this.router.navigate(['login'])
  }
}
