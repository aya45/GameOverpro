import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { RecommendationService } from "src/app/recommendation.service";

@Component({
  selector: "app-racing",
  templateUrl: "./racing.component.html",
  styleUrls: ["./racing.component.css"]
})

export class RacingComponent implements OnInit {
  
  racingData:any;
  baseImage:string=`https://www.freetogame.com/g/`;
  constructor(private service:RecommendationService,
    private spinner: NgxSpinnerService,
    private activatedRoute:ActivatedRoute )
    {
    }
   
 
  getRacingData(){
    let headers = new HttpHeaders( {
      'X-RapidAPI-Key': 'a912c7eebbmshbcc78d2a5c5fae4p18c980jsn90ab0736be72',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    })
  
    this.service.getCategories('racing',headers).subscribe(({
      next:res => {
        this.spinner.show()
        this.racingData = res;
        console.log(this.racingData);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  };

  ngOnInit(): void{
    this.spinner.show();

    this.getRacingData();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
   
  }
}
