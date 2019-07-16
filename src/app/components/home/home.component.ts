import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private header1 = require("./imagesHome/slider1.jpg") ;
  private header2 = require("./imagesHome/slider2.jpg") ;
  private header3 = require("./imagesHome/slider3.jpg") ;
  private ethics1 = require("./imagesHome/ethics1.png");
  private ethics2 = require("./imagesHome/ethics2.png");
  private ethics3 = require("./imagesHome/ethics3.png");
  private ethics4 = require("./imagesHome/ethics4.png");
  private ethics5 = require("./imagesHome/ethics5.png");
  private ethics6 = require("./imagesHome/ethics6.png");
  private mainLogo = require("./imagesHome/website-logo.png") ;
  constructor() {}
  ngOnInit() {
  }
}
