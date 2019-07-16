import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  private team1 = require("./imagesTeam/teamimage.jpg") ;
  constructor() { }
  ngOnInit() {
  }
}
