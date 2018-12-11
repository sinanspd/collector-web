import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css']
})
export class DiscographyComponent implements OnInit {


  libfall = [
  	{name: "Lullaby of Eternity", length: "03:25"}, 
  	{name: "Between The Two Demons", length: "08:26"}, 
  	{name: "A Tale of Titans", length: "08:04"}, 
  	{name: "The System Has Failed", length: "05:30"}, 
  	{name: "Liberation's Fall", length: "08:03"}, 
  	{name: "The Undead Kings", length: "09:52"}, 
  	{name: "Vantablack", length: "05:12"}, 
  	{name: "End This Life", length: "08:06"}, 
  	{name: "Angels", length: "10:02"}, 
  ]

  libfallpersonalle = [
  	{name: "Ted Jensen", role: "Mastering", studio: "Sterling Sound"},
  	{name: "Mikko Karmila", role: "Mix", studio: "Finvoxx"},
  	{name: "Neil Kernon", role: "Mix/Bass Edits/Instrumentals", studio: ""},
  	{name: "Jayce Lewis", role: "Drum Edits", studio: "Northstone Studios"},
  	{name: "Martyn Ginge Ford", role: "Drum Edits", studio: "Northstone Studios"},
  	{name: "Risto Hemmi", role: "Vocal Edits", studio: "Finvoxx"},
  	{name: "Ted Young", role: "Recording Engineer", studio: "Outer Space Studios"},
  	{name: "Ignacio Lecumberri", role: "Assistant Recording Engineer", studio: "Outer Space Studios"},
  	{name: "Ari Rasking", role: "Assistant Recording Engineer", studio: "Outer Space Studios"},
  	{name: "Bijen Rahimi", role: "Recording Engineer", studio: "Prime Duo Scoring Studios"},
	{name: "Chris Donaldson", role: "Recording Engineer", studio: "Grid Studios"},
	{name: "Cem Uyanik", role: "Cellos", studio: ""},
	{name: "Firat Akarcali", role: "Pianos", studio: ""},
	{name: "Secil Cetinkaya", role: "Girl 1 on Choir", studio: ""},
	{name: "Hande Karagoz", role: "Girl 2 on Choir", studio: ""},
	{name: "Mine Polat", role: "Girl 3 on Choir", studio: ""},
	{name: "Chris Cold", role: "Cover Art", studio: ""},
	{name: "Pablo Fernandez Agulo", role: "Album Art", studio: ""},
	{name: "Yoann Lossel", role: "Album Art", studio: ""},
	{name: "Jeremy Saffer", role: "Album Photos", studio: ""},
	{name: "Utku Demirsoy", role: "Album Photos", studio: ""},
	{name: "Zara Ignatova", role: "Angel 1", studio: ""},
	{name: "Aoife Lee", role: "Angel 2", studio: ""},
	{name: "Sierra Colleen", role: "Angel 3", studio: ""},
	{name: "Naida Black", role: "Angel 4", studio: ""}
  ]

  constructor() { }

  ngOnInit() {
  }

}


