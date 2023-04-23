import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { RecommendationService } from "src/app/recommendation.service";

@Component({
  selector: "app-alphabetical",
  templateUrl: "./alphabetical.component.html",
  styleUrls: ["./alphabetical.component.css"]
})

export class AlphabeticalComponent implements OnInit {
  
  alphabeticalData:any;
  baseImage:string=`https://www.freetogame.com/g/`;
  constructor(private service:RecommendationService,
    private spinner: NgxSpinnerService,
    private activatedRoute:ActivatedRoute )
    {
    }
   
 
  getAlphabetical(){
    let headers = new HttpHeaders( {
      'X-RapidAPI-Key': 'a912c7eebbmshbcc78d2a5c5fae4p18c980jsn90ab0736be72',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    })
  
    this.service.getSortBy('alphabetical',headers).subscribe(({
      next:res => {
        this.spinner.show()
        this.alphabeticalData = res;
        console.log(this.alphabeticalData);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  };

  ngOnInit(): void{
    this.spinner.show();

    this.getAlphabetical();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
   
  }
}
