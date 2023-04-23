import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { RecommendationService } from "src/app/recommendation.service";

@Component({
  selector: "app-relevance",
  templateUrl: "./relevance.component.html",
  styleUrls: ["./relevance.component.css"]
})

export class RelevanceComponent implements OnInit {
  
  relevanceData:any;
  baseImage:string=`https://www.freetogame.com/g/`;
  constructor(private service:RecommendationService,
    private spinner: NgxSpinnerService,
    private activatedRoute:ActivatedRoute )
    {
    }
   
 
  getAllRelevanceData(){
    let headers = new HttpHeaders( {
      'X-RapidAPI-Key': 'a912c7eebbmshbcc78d2a5c5fae4p18c980jsn90ab0736be72',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    })
  
    this.service.getSortBy('relevance',headers).subscribe(({
      next:res => {
        this.spinner.show()
        this.relevanceData = res;
        console.log(this.relevanceData);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  };

  ngOnInit(): void{
    this.spinner.show();

    this.getAllRelevanceData();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
   
  }
}
