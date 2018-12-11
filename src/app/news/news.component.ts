import { Component, OnInit } from '@angular/core';
import { News } from '../news/news';
import { CachedNews } from '../news/cached-news';

import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs";
import { map, startWith } from 'rxjs/operators';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public cols: Observable<number>;
  news : News[] = CachedNews;
  rowheight = "350px";

  constructor(private observableMedia: ObservableMedia) { }

  ngOnInit() {

  	 const grid = new Map([
	      ["xs", 1],
	      ["sm", 2],
	      ["md", 3],
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

}
