import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RecommendationService } from '../recommendation.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit{
  allGames:any;
 
 
  constructor(private service:RecommendationService ,private spinner: NgxSpinnerService,){}
 

  getAllGames(){
    let headers = new HttpHeaders( {
      'X-RapidAPI-Key': 'a912c7eebbmshbcc78d2a5c5fae4p18c980jsn90ab0736be72',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    })
  
    this.service.getAllGames(headers).subscribe(({
      next:res => {
        this.spinner.show()
        this.allGames = res; 
        console.log(this.allGames);
        
       this.spinner.hide()
      },
      error:err => {
        console.log(err);
        
      }
    }))
  };

  ngOnInit(): void{
    this.spinner.show();
    this.getAllGames();
setTimeout(() => {
   /** spinner ends after 5 seconds */
   this.spinner.hide();
 }, 1000);

  };

  }

