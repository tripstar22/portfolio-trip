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
				"HAS A DIRE WOLF NAMED RILEY",
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
		}
	}



	ngOnInit() {
		// create vars for window, document, body
		let w = window;
		let d = document;
		let b = document.body;
		// create vars for animated elements
		let wrap = document.getElementById("wrapAboutContent");
		let img = document.querySelectorAll(".wrapProfileImg img")[0];
		// add scroll event listener
		d.addEventListener("scroll", function(event) {
			// desktop animations
			if (w.innerWidth >= 1024) {
				if (b.scrollTop >= 500) {
					wrap.classList.remove("aniY");
					img.classList.remove("hidden");
				}
			}
		});
		this.aniHeading();
		this.imagePosition();
	}

}
