import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.scss']
})
export class MovieCategoriesComponent implements OnInit{
  category:string;
  peliculas:Array<Movie>;
  constructor(private route: ActivatedRoute, private moviesServices:MoviesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{//me suscribo a cambios en los parametros del router
      this.category = params.get('category') 
      this.moviesServices.getMoviesByCategory(this.category)//llamamos al metodo del servicio movies para pedir las peliculas segun la categoria.
      .subscribe(res =>{
      this.peliculas=res['results'];//asignamos results a peliculas para poder acceder desde la plantilla html
      })
    })
  }  
}
