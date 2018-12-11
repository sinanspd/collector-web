import { Component, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs";
import { map, startWith } from 'rxjs/operators';
import { trigger, style, state, transition, animate } from '@angular/animations';

export const slideInOutTrigger = trigger('slideInOut', [
    state('true', style({
        width: '174px',
    })),
    state('false', style({
        width: '*',
    })),
    transition('true => false', animate('300ms linear')),
    transition('false => true', [
        style({ overflow: 'hidden' }),
        animate('300ms linear')
    ])
]);


@Component({
  selector: 'app-contact',
  animations: [slideInOutTrigger],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  public cols: Observable<number>;
  rowheight = "350px";
  members = MEMBERS;	

  sinan=false;
  yagiz=false;
  mesut=false;
  umut=false;
  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {
  	 const grid = new Map([
	      ["xs", 1],
	      ["sm", 2],
	      ["md", 4],
	      ["lg", 4],
	      ["xl", 4]
	    ]);
  		let start: number;
  		grid.forEach((cols, mqAlias) => {
			if (this.observableMedia.isActive(mqAlias)) {
		      start = cols;
		   	}
		});
  		this.cols = this.observableMedia.asObservable().pipe(
     	map(change => {
	      return grid.get(change.mqAlias);
	      }),
	     startWith(start)
	    )
  }

  setCollapse(name, value){
  	if(name == "sinan"){
  		this.sinan = value;
  	}else if(name == "yagiz"){
  		this.yagiz = value;
  	}else if(name == "umut"){
  		this.umut = value;
  	}else{
  	    this.mesut = value;
  	}
  }

  isCollapsed(name){
  	if(name == "sinan"){
  		return this.sinan;
  	}else if(name == "yagiz"){
  		return this.yagiz;
  	}else if(name == "umut"){
  		return this.umut;
  	}else{
  		return this.mesut;
  	}
  }

}

export const MEMBERS = [
	{name: "sinan", picture: "sp.jpg", facebook: "https://www.facebook.com/collectoroffical/", twitter: "https://twitter.com/sinanspd", instagram: "https://www.instagram.com/sinanspd/"},
	{name: "yagiz", picture: "yagizuse.jpg", facebook: "https://www.facebook.com/collectoroffical/", twitter: "https://twitter.com/givemeveritas", instagram: "https://www.instagram.com/yagizozdag/"},
	{name: "umut", picture: "umutband.jpg", facebook: "https://www.facebook.com/collectoroffical/", twitter: "https://twitter.com/UmutDaBass", instagram: "https://www.instagram.com/umutdabass/"},
	{name: "mesut", picture: "mesut.jpg", facebook: "https://www.facebook.com/collectoroffical/", twitter: "", instagram: "https://www.instagram.com/mesut_basaran_/"},
]