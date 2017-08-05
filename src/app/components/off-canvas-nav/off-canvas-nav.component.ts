import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'trip-off-canvas-nav',
	templateUrl: './off-canvas-nav.component.html',
	styleUrls: ['./off-canvas-nav.component.scss']
})
export class OffCanvasNavComponent implements OnInit {

	constructor() { }

	menuStyles(event) {
		let w = window;
		let wrap = document.getElementById("navOffCanvas");
		wrap.style.height = w.innerHeight + "px";
		wrap.style.right = w.innerWidth + "px";
	}

	btnMenu($event) {
		let b = document.body;
		let btn = document.getElementById("btnMenu");
		let wrap = document.getElementById("navOffCanvas");
		b.classList.toggle("noScroll");
		btn.classList.toggle("aniBtn");
		wrap.classList.toggle("aniMenu");
		event.preventDefault();
	}

	menuHide($event) {
		let b = document.body;
		let btn = document.getElementById("btnMenu");
		let wrap = document.getElementById("navOffCanvas");
		b.classList.remove("noScroll");
		btn.classList.remove("aniBtn");
		wrap.classList.remove("aniMenu");
	}

	ngOnInit() {
		let w = window;
		this.menuStyles(event);
	}

}
