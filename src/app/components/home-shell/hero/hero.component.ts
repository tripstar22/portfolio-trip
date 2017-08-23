import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'trip-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

	constructor() { }

	windowHeight(event) {
		const w = window;
		const wrap = document.getElementById('home');
		wrap.style.height = w.innerHeight + 'px';
	}

	ngOnInit() {
		this.windowHeight(event);
	}

}
