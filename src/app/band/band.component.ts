import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  members = MEMBERS;

  constructor() { }

  ngOnInit() {
  }

}


export const MEMBERS = [

	{
		name: "Sinan", 
		lastname: "Pehlivanoglu", instruments: "Lead Guitar/Lead Vocals", otherinst : "Piano/Cello", birthdate: "01/02/1995",
		placeofbirth: "Ankara, Turkey",
		picture: "sinanband.jpg",
		job: "Computer Scientist specializing in Cyber Security and Machine Learning", 
		interests: "Video Games/Martial Arts/Parkour/Skiing/Hacking/Whiskey",
		instruments1: "Main Guitars: Gibson Darkfire, Gibson Siberian Tiger, ESP Custom Eclipse, Schecter Hellraiser FR7, Martin D-41",
	    instruments2: "Other: Dean DM Peace Sells V, Jackson Chris Broderick Signature",
		instruments3: "Pedals: Ibanez Tubescreamer TS808, TC Electronic Polytune",
		instruments4: "Amps: Bogner Ecstasy 20th anniversary 120W HEAD, ENGL Savage 120W HEAD",
		instruments5: "Home Studio: Focusrite Saffire Pro 14, Focusrite Scarlet, Shure Sm57, Neumann TLC 102, Audio Technica M50x, JBL LSR 305s",
		biolong: "Coming Soon"
    },
    {
		name: "Mesut", lastname: "Basaran", instruments: "Guitars", otherinst : "-", birthdate: "03/21/1993",
		placeofbirth: "Gebze, Turkey",
		job: "-", 
		picture: "mesut.jpg",
		interests: "Travelling/Cars",
		instruments1: "Main Guitars: Jackson DK2M, Schecter ATX Blackjack 7FR",
	    instruments2: "Other: -",
		instruments3: "Pedals: -",
		instruments4: "Amps:-",
		instruments5: "Home Studio: -",
		biolong: "Coming Soong"
    },
    {
		name: "Umut Emre", lastname: "Ture", instruments: "Bass", otherinst : "-", birthdate: "11/29/1993",
		placeofbirth: "Ankara, Turkey",
		job: "Mechanical Engineer", 
		picture: "umutuse.jpg",
		interests: "Physics/Instrument Care/Cars",
		instruments1: "Main Guitars: Schecter Stiletto Studio 5",
	    instruments2: "Other: -",
		instruments3: "Pedals: -",
		instruments4: "Amps:-",
		instruments5: "Home Studio: -",
		biolong: "He has friends who stick swords in their ass"
    },
    {
		name: "Yagiz", lastname: "Ozdag", instruments: "Drums", otherinst : "-", birthdate: "01/09/1995",
		placeofbirth: "Ankara, Turkey",
		job: "Neuro surgeon in making", 
		picture: "yagizband.jpg",
		interests: "Cars/Bikes/Ice Hokey/Poker",
		instruments1: "Drums: Yamaha sd 2240 snare",
	    instruments2: "Cymbals: Cymbals: 14' Mehmet Nostalgia Hi-hat, Istanbul Radiant Crash 16'', 17'', 18'', Istanbul Ride 12'' x-metal, Istanbul Alchemy China 18', Istanbul Agop 6'' Splash, Bosphorus 8'' Splash, Alchemy 8'' Raw bell",
		instruments3: "Other: Gibraltar Hardware, Pearl 2002 double bass pedal",
		instruments4: "",
		instruments5: "Home Studio: -",
		biolong: "Coming Soon"
    }
]


