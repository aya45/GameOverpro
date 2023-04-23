import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllComponent } from './all/all.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortComponent } from './sort/sort.component';
import { CategoriesComponent } from './categories/categories.component';
import { GamesdetialesComponent } from './gamesdetiales/gamesdetiales.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { PcComponent } from './platforms/pc/pc.component';
import { BrwoserComponent } from './platforms/brwoser/brwoser.component';
import { Release_dateComponent } from './sort/release_date/release_date.component';
import { PopularityComponent } from './sort/popularity/popularity.component';
import { AlphabeticalComponent } from './sort/alphabetical/alphabetical.component';
import { RelevanceComponent } from './sort/relevance/relevance.component';
import { RacingComponent } from './categories/racing/racing.component';
import { SportsComponent } from './categories/sports/sports.component';
import { FantasyComponent } from './categories/fantasy/fantasy.component';
import { SocialComponent } from './categories/social/social.component';
import { ActionComponent } from './categories/action/action.component';
import { ZombieComponent } from './categories/zombie/zombie.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    AllComponent,
    SortComponent,
    CategoriesComponent,
    GamesdetialesComponent,
    HomeheaderComponent,
    PlatformsComponent,
   PcComponent,
   BrwoserComponent,
   Release_dateComponent,
   PopularityComponent,
   AlphabeticalComponent,
   RelevanceComponent,
   RacingComponent,
   SportsComponent,
   FantasyComponent,
   SocialComponent,
   ActionComponent,
   ZombieComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    NgxSpinnerModule 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
