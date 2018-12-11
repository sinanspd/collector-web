import { Component, OnInit } from '@angular/core';
import { News } from '../news/news';
import { CachedNews } from '../news/cached-news';

import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from "rxjs";
import { map, startWith } from 'rxjs/operators';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cols: Observable<number>;
  news : News[] = CachedNews.slice(0, 6);
  rowheight = "350px";
  videosOpen = true;

  constructor(
  	private observableMedia: ObservableMedia,
  	private bottomSheet: MatBottomSheet
  	) { }

  ngOnInit() {

  	    const grid = new Map([
	      ["xs", 1],
	      ["sm", 2],
	      ["md", 3],
	      ["lg", 3],
	      ["xl", 3]
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

  openBottomSheet(): void {
    this.bottomSheet.open(LiveFeedSheet, {
      panelClass: 'live-feed-sheet'
    });
  }

  toggleVideos($event){
    //this.videosOpen = !($event.open);
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'livefeed.sheet.html',
})
export class LiveFeedSheet{
  constructor(private bottomSheetRef: MatBottomSheetRef<LiveFeedSheet>) {}

  /*openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  } */
}

export const transAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

// Routable animations
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
