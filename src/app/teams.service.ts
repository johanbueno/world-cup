import { Injectable } from '@angular/core';
import { Team } from './world-cup/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  getTeams():Team[]{
    return [
    {
      "teamId": 1,
      "teamName": "Uruguay",
      "imageUrl": "./assets/Urugay.png",
      "score":1,
    },
    {
      "teamId": 2, 
      "teamName": "Portugal",
      "imageUrl": "./assets/Portugal.png",
      "score":1 ,
    },
    {
      "teamId": 3,
      "teamName": "France",
      "imageUrl": "./assets/France.png",
      "score":1 ,
    },
    {
      "teamId": 4,
      "teamName": "Argentina",
      "imageUrl": "./assets/Argentina.png",
      "score": 1,
    },
    {
      "teamId": 5,
      "teamName": "Brazil",
      "imageUrl": "./assets/Brazil.png",
      "score":1 ,
    },
    {
      "teamId": 6,
      "teamName": "Mexico",
      "imageUrl": "./assets/Mexico.png",
      "score": 1,
    },
    {
      "teamId": 7,
      "teamName": "Belgium",
      "imageUrl": "./assets/Belgium.png",
      "score": 1,
    },
    {
      "teamId": 8,
      "teamName": "Japan",
      "imageUrl": "./assets/Japan.png",
      "score":1 ,
    },
    {
      "teamId": 9,
      "teamName": "Spain",
      "imageUrl": "./assets/Espana.png",
      "score":1 ,
    },
    {
      "teamId": 10,
      "teamName": "Russia",
      "imageUrl": "./assets/Russia.png",
      "score": 1 ,
    },
    {
      "teamId": 11,
      "teamName": "Croatia",
      "imageUrl": "./assets/Croacia.png",
      "score": 1 ,
    },
    {
      "teamId": 12,
      "teamName": "Denmark",
      "imageUrl": "./assets/Denmark.png",
      "score": 1 ,
    },
    {
      "teamId": 13,
      "teamName": "Sweden",
      "imageUrl": "./assets/Sweden.png",
      "score": 1 ,
    },
    {
      "teamId": 14,
      "teamName": "Switzerland",
      "imageUrl": "./assets/Switzerland.png",
      "score": 1 ,
    },
    {
      "teamId": 15,
      "teamName": "Colombia",
      "imageUrl": "./assets/Colombia.png",
      "score":1 ,
    },
    {
      "teamId": 16,
      "teamName": "England",
      "imageUrl": "./assets/England.png",
      "score":1 ,
    },]
  }
  constructor() { }
}
