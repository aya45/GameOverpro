import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';
import { RecommendationService } from '../recommendation.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-gamesdetiales',
  templateUrl: './gamesdetiales.component.html',
  styleUrls: ['./gamesdetiales.component.css']
})
export class GamesdetialesComponent {
  id:any;
  gameDetails:any;
  baseImage:string=`https://www.freetogame.com/g/`;
  constructor(private service:RecommendationService,
    private spinner: NgxSpinnerService,
    private activatedRoute:ActivatedRoute )
    {
      this.id = activatedRoute.snapshot.params['id']
    }
   
  getGameDetailsById(){
  
    let headers = new HttpHeaders( {
      'X-RapidAPI-Key': 'a912c7eebbmshbcc78d2a5c5fae4p18c980jsn90ab0736be72',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      
    })
  
    this.service.getGameById(this.id ,headers ).subscribe(({
      next:res => {
        this.spinner.show()
        this.gameDetails = res;
        console.log(this.gameDetails);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }


  ngOnInit(): void{
    this.spinner.show();
    this.getGameDetailsById();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
   
  }


}
