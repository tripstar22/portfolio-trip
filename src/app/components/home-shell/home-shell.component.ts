import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'trip-home-shell',
	templateUrl: './home-shell.component.html',
	styleUrls: ['./home-shell.component.scss']
})
export class HomeShellComponent implements OnInit {

	constructor() { }

	windowHeight() {
		let w = window;
		let wrap = document.getElementById("wrapContent");
		wrap.style.top = w.innerHeight + "px";
	}

	ngOnInit() {
		this.windowHeight();
	}

}
