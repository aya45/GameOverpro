import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { RecommendationService } from "src/app/recommendation.service";

@Component({
  selector: "app-pc",
  templateUrl: "./pc.component.html",
  styleUrls: ["./pc.component.css"]
})

export class PcComponent implements OnInit {
  platformPcData:any;
  baseImage:string=`https://www.freetogame.com/g/`;

  constructor(private service:RecommendationService,
    private spinner: NgxSpinnerService,
    private activatedRoute:ActivatedRoute )
    {
    }
   
    getPlatformPc(){
      let headers = new HttpHeaders( {
        'X-RapidAPI-Key': 'a912c7eebbmshbcc78d2a5c5fae4p18c980jsn90ab0736be72',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      })
    
      this.service.getPlatform("pc",headers).subscribe(({
        next:res => {
          this.spinner.show()
          this.platformPcData = res;
          console.log(this.platformPcData);
          this.spinner.hide();
        },
        error:err => {
          console.log(err);
          
        }
      }))
    };
  
  ngOnInit() {
    this.spinner.show();

    this.getPlatformPc();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000)
  }
}
