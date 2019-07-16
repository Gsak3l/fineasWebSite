import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  private sponsor1 = require("./imagesSponsors/sponsor1.png");
  private sponsor2 = require("./imagesSponsors/sponsor2.png");
  constructor() { }
  ngOnInit() {
  }
}
