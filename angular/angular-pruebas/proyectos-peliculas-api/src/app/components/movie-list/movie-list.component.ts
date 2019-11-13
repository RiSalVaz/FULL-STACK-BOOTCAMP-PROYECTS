import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  peliculas:Array<Movie>=[];
  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.moviesService.getDiscoverMovies()
    .subscribe(
    res=>this.peliculas=res['results'],
    error=>console.error(error)
    )
  }

}
