import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { AllComponent } from './all/all.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortComponent } from './sort/sort.component';
import { CategoriesComponent } from './categories/categories.component';
import { GamesdetialesComponent } from './gamesdetiales/gamesdetiales.component';
import { BrwoserComponent } from './platforms/brwoser/brwoser.component';
import { PcComponent } from './platforms/pc/pc.component';
import { RelevanceComponent } from './sort/relevance/relevance.component';
import { PopularityComponent } from './sort/popularity/popularity.component';
import { AlphabeticalComponent } from './sort/alphabetical/alphabetical.component';
import { Release_dateComponent } from './sort/release_date/release_date.component';
import { RacingComponent } from './categories/racing/racing.component';
import { SportsComponent } from './categories/sports/sports.component';
import { FantasyComponent } from './categories/fantasy/fantasy.component';
import { SocialComponent } from './categories/social/social.component';
import { ActionComponent } from './categories/action/action.component';
import { ZombieComponent } from './categories/zombie/zombie.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard] , component:HomeComponent},
  {path:'all', canActivate:[AuthGuard],component:AllComponent},
  {path:'game-details/:id', canActivate:[AuthGuard],component:GamesdetialesComponent},
  {path:'platforms/pc', canActivate:[AuthGuard],component:PcComponent},
  {path:'platforms/browser',canActivate:[AuthGuard],component:BrwoserComponent},
  {path:'sort-by/relevance',canActivate:[AuthGuard],component:RelevanceComponent},
  {path:'sort-by/popularity',canActivate:[AuthGuard],component:PopularityComponent},
  {path:'sort-by/alphabetical',canActivate:[AuthGuard],component:AlphabeticalComponent},
  {path:'sort-by/release-date',canActivate:[AuthGuard],component:Release_dateComponent},
  {path:'sort',canActivate:[AuthGuard],component:SortComponent},
  {path:'categories/racing',canActivate:[AuthGuard],component:RacingComponent},
  {path:'categories/sports',canActivate:[AuthGuard],component:SportsComponent},
  {path:'categories/fantasy',canActivate:[AuthGuard],component:FantasyComponent},
  {path:'categories/social',canActivate:[AuthGuard],component:SocialComponent},
  {path:'categories/action',canActivate:[AuthGuard],component:ActionComponent},
  {path:'categories/zombie',canActivate:[AuthGuard],component:ZombieComponent},

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
