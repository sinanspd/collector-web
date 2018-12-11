import { Component, OnInit, Input, Output, EventEmitter,  AfterViewInit } from '@angular/core';

import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-live-feed',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '92vh',
        zIndex: 100000,
        marginTop: '-68vh',
        backgroundColor: 'black'
      })),
      state('closed', style({
        height: '70px',
        backgroundColor: 'black'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ], 
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.css']
})
export class LiveFeedComponent implements OnInit,  AfterViewInit {

   @Output() onToggleChange = new EventEmitter<{open: boolean}>();

  isOpen = false;
  loaded = false;

  constructor() { }

  ngOnInit() {
    (<any>window).twttr.widgets.load();
    (<any>window).FB.XFBML.parse();
  }

  ngAfterViewInit(){
  	this.loaded = true;
    (<any>window).twttr.widgets.load();
    (<any>window).FB.XFBML.parse();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.onToggleChange.emit({open: this.isOpen})
  }

  @Input() logging = false;
  onAnimationEvent(event: AnimationEvent) {
	    if (!this.logging) {
	      return;
	    }
	    // openClose is trigger name in this example
	    console.warn(`Animation Trigger: ${event.triggerName}`);

	    // phaseName is start or done
	    console.warn(`Phase: ${event.phaseName}`);

	    // in our example, totalTime is 1000 or 1 second
	    console.warn(`Total time: ${event.totalTime}`);

	    // in our example, fromState is either open or closed
	    console.warn(`From: ${event.fromState}`);

	    // in our example, toState either open or closed
	    console.warn(`To: ${event.toState}`);

	    // the HTML element itself, the button in this case
	    console.warn(`Element: ${event.element}`);
   }
}
