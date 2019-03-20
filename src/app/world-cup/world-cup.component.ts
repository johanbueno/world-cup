import { Component, OnInit } from '@angular/core';
import { Team } from './teams';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-world-cup',
  templateUrl: './world-cup.component.html',
  styleUrls: ['./world-cup.component.css']
})
export class WorldCupComponent implements OnInit {
  pageTitle: string = 'World Cup Russia'
  Image: boolean = true;
  
  protect(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  teams: Team[] = []
  
  constructor(private teamsService: TeamsService ) { }

  ngOnInit() {
  this.teams = this.teamsService.getTeams();
  }

}
