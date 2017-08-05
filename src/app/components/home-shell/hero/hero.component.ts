import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'trip-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

	constructor() { }

	windowHeight(event) {
		let w = window;
		let wrap = document.getElementById("home");
		wrap.style.height = w.innerHeight + "px";
		console.log(w.innerHeight);
	}

	ngOnInit() {
		this.windowHeight(event);
	}

}
