import { ActivatedRoute } from '@angular/router';
import { RecommendationService } from './../recommendation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLogin:boolean = false;
  logOut()
  {
    this._AuthService.logOut();
  }

  constructor(private _AuthService:AuthService ,
    private service:RecommendationService,
    private spinner: NgxSpinnerService,
    private activatedRoute:ActivatedRoute)
  {
    _AuthService.userData.subscribe({
      next:()=>{
        
    if(_AuthService.userData.getValue() !==null)
    {
      this.isLogin = true;
    }
    else
    {
      this.isLogin = false;
    }
      }
    })
  };
 

  ngOnInit(): void{
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
   
  }

}
