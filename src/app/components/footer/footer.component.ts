import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private socialMedia1 = require("./imagesFooter/facebook.png");
  private socialMedia2 = require("./imagesFooter/twitter.png");
  private socialMedia3 = require("./imagesFooter/youtube.png");
  private socialMedia4 = require("./imagesFooter/instagram.png");
  constructor() { }
  ngOnInit() {
  }
}
