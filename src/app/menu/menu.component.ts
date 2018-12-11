import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed : boolean;

  fixed: boolean;
  size: number;

  constructor() { 
  	this.isCollapsed = true;
  	this.fixed = false;
  }

  ngOnInit() {
  }

  myFunction(event) {
    event.stopPropagation();
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += "responsive";
      } else {
        x.className = "topnav";
      }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const number =  $event.target.documentElement.scrollTop;
    if (number > 820) {
      this.fixed = true;
    } else if (this.fixed && number < 820) {
      this.fixed = false;
    }

    console.log(this.fixed)
  }

}
