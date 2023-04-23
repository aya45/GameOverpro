import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  constructor(private _HttpClient:HttpClient) { }
  
  getPersonalRecommendations(header:HttpHeaders):Observable<any>
  {
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games` ,{headers:header});
  }

  getAllGames(header:HttpHeaders):Observable<any>
  {
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games` ,{headers:header});
  }

  getGameById(id:any ,header:HttpHeaders):Observable<any>
  {
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,{headers:header})     
  };

  getPlatform(mediaType:any ,header:HttpHeaders):Observable<any>
  {
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${mediaType}`,{headers:header})
  };;

  getSortBy(mediaType:any ,header:HttpHeaders):Observable<any>
  {
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${mediaType}`,{headers:header})
  };

  getCategories(mediaType:any ,header:HttpHeaders):Observable<any>
  {
     return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${mediaType}`,{headers:header})
  };
};
