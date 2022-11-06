import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from 'src/app/models/interfaces/Movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  
  @Input() movie: IMovie | undefined;
  @Output() deleteMovie: EventEmitter<IMovie> = new EventEmitter<IMovie>()
  @Output() editMovie: EventEmitter<IMovie> = new EventEmitter<IMovie>()
  constructor() { }

  ngOnInit(): void {
  }
  
  goEditMovie():void{
    this.editMovie.emit(this.movie)
  }

  removeMovie():void {
    this.deleteMovie.emit(this.movie);
  }

}
