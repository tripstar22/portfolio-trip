import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'trip-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

	e: any;

	constructor() {
	}

	windowHeight(e) {
		const w = window;
		const wrap = document.getElementById('home');
		wrap.style.height = w.innerHeight + 'px';
	}

	ngOnInit() {
		
		this.windowHeight(this.e);
	}

}
