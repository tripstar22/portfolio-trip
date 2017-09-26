import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'trip-off-canvas-nav',
	templateUrl: './off-canvas-nav.component.html',
	styleUrls: ['./off-canvas-nav.component.scss']
})
export class OffCanvasNavComponent implements OnInit {

	constructor() {

		var e = Event;
	 }

	menuStyles(e) {
		const w = window;
		const wrap = document.getElementById('navOffCanvas');
		wrap.style.height = w.innerHeight + 'px';
		wrap.style.right = w.innerWidth + 'px';
	}

	btnMenu(e) {
		const h = document.querySelectorAll('html')[0];
		const b = document.body;
		const btn = document.getElementById('btnMenu');
		const wrap = document.getElementById('navOffCanvas');
		h.classList.toggle('noScroll');
		b.classList.toggle('noScroll');
		btn.classList.toggle('aniBtn');
		wrap.classList.toggle('aniMenu');
		event.preventDefault();
	}

	menuHide(e) {
		const h = document.querySelectorAll('html')[0];
		const b = document.body;
		const btn = document.getElementById('btnMenu');
		const wrap = document.getElementById('navOffCanvas');
		h.classList.remove('noScroll');
		b.classList.remove('noScroll');
		btn.classList.remove('aniBtn');
		wrap.classList.remove('aniMenu');
	}

	ngOnInit() {
		var e = Event;
		const w = window;
		this.menuStyles(e);
	}

}
