import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../recommendation.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  personalRecommendations:any;
  baseImage:string=`https://www.freetogame.com/g/`;
  constructor(private service:RecommendationService,private spinner: NgxSpinnerService,){}
   
  getPersonalRecommendations(){
    let headers = new HttpHeaders( {
      'X-RapidAPI-Key': 'a912c7eebbmshbcc78d2a5c5fae4p18c980jsn90ab0736be72',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    })
  
    this.service.getPersonalRecommendations(headers).subscribe(({
      next:res => {
        this.spinner.show()
        this.personalRecommendations = res;
        console.log(this.personalRecommendations);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  }
  ngOnInit(): void{
    this.spinner.show();
    this.getPersonalRecommendations();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
   
  }
} 
