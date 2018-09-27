import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  active(){
    var hamburger = document.querySelector(".hamburger--collapse");
    hamburger.classList.toggle("is-active");
  }
}
