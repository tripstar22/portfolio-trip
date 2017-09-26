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
				'TEAM PLAYER',
				'SELF PROCLAIMED GRILL MASTER',
				'NON-DISCRIMINATORY BEER APPRECIATOR',
				'HAS A DIRE WOLF NAMED RILEY',
				'LOVES KELSEY',
				'OG BAMA FAN',
				'ONE OF FOUR KIDS',
				'CAN FIT IN ANYWHERE',
				'NOT GOING TO RAGE QUIT',
				'THE TRIP IS SHORT FOR TRIPLE'
			];
		const headingTxt = document.getElementById('desc');
		headingTxt.innerHTML = t[0];
		setInterval(function() {
			headingTxt.innerHTML = t[(++txt) % t.length];
		}, 3000);
	}

	imagePosition() {
		const w = window;
		if (w.innerWidth >= 640) {
			const wrap = <HTMLElement> document.querySelectorAll('.wrapAbout')[0];
			const wrapImg = <HTMLElement> document.querySelectorAll('.wrapProfileImg')[0];
			wrapImg.style.height = wrap.offsetHeight + 'px';
		}
	}



	ngOnInit() {
		var e = Event;
		// create vars for window, document, body
		const w = window;
		const d = document;
		const b = document.body;
		// create vars for animated elements
		const wrap = document.getElementById('wrapAboutContent');
		const img = document.querySelectorAll('.wrapProfileImg img')[0];
		// create var for function to fire once on scroll
		let fired = 0;
		// add scroll event listener
		d.addEventListener('scroll', function(e) {
			// desktop animations
			if (w.innerWidth >= 1024) {
				if ((b.scrollTop >= 500) && (fired === 0)) {
					wrap.classList.remove('aniY');
					img.classList.remove('hidden');
					fired = 1;
				}
			}
		});
		this.aniHeading();
		this.imagePosition();
	}

}
