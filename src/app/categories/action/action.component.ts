import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { RecommendationService } from "src/app/recommendation.service";

@Component({
  selector: "app-action",
  templateUrl: "./action.component.html",
  styleUrls: ["./action.component.css"]
})

export class ActionComponent implements OnInit {
  
  actionData:any;
  baseImage:string=`https://www.freetogame.com/g/`;
  constructor(private service:RecommendationService,
    private spinner: NgxSpinnerService,
    private activatedRoute:ActivatedRoute )
    {
    }
   
 
  getActionData(){
    let headers = new HttpHeaders( {
      'X-RapidAPI-Key': 'a912c7eebbmshbcc78d2a5c5fae4p18c980jsn90ab0736be72',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    })
  
    this.service.getCategories('action',headers).subscribe(({
      next:res => {
        this.spinner.show()
        this.actionData = res;
        console.log(this.actionData);
        this.spinner.hide();
      },
      error:err => {
        console.log(err);
        
      }
    }))
  };

  ngOnInit(): void{
    this.spinner.show();

    this.getActionData();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
   
  }
}
