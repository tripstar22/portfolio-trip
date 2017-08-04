import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'trip-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	constructor() {
	}

	aniHeading() {
		let txt =
			0,
			t = [
				"TEAM PLAYER",
				"SELF PROCLAIMED GRILL MASTER",
				"NON-DISCRIMINATORY BEER APPRECIATOR",
				"HAS A DIREWOLF NAMED RILEY",
				"LOVES KELSEY",
				"OG BAMA FAN",
				"ONE OF FOUR KIDS",
				"CAN FIT IN ANYWHERE",
				"NOT GOING TO RAGE QUIT",
				"THE TRIP IS SHORT FOR TRIPLE"
			];
		let headingTxt = document.getElementById("desc");
		headingTxt.innerHTML = t[0];
		setInterval(function() {
			headingTxt.innerHTML = t[(++txt) % t.length];
		}, 3000);
	}

	imagePosition() {
		let w = window;
		if (w.innerWidth >= 640) {
			let wrap = <HTMLElement> document.querySelectorAll(".wrapAbout")[0];
			let wrapImg = <HTMLElement> document.querySelectorAll(".wrapProfileImg")[0];
			wrapImg.style.height = wrap.offsetHeight + "px";
			console.log(wrap.offsetHeight);
		}
	}

	ngOnInit() {
		this.aniHeading();
		this.imagePosition();
	}

}
