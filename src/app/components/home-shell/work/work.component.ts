import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
	selector: 'trip-work',
	templateUrl: './work.component.html',
	styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

	items: FirebaseListObservable<any[]>;

	constructor(db: AngularFireDatabase) {
		this.items = db.list('/items');
	}

	ngOnInit() {
		// create vars for window, document, body
		const w = window;
		const d = document;
		const b = document.body;
		// create var for function to fire once on scroll
		let fired = 0;
		// create vars for animated elements
		const wrap = d.querySelectorAll('#projects .flexWrap')[0];
		// add scroll event listener
		d.addEventListener('scroll', function(event) {
			// desktop animations
			if (w.innerWidth >= 1024) {
				if ((b.scrollTop >= 1630) && (fired === 0)) {
					wrap.classList.remove('aniY');
					fired = 1;
				}
			}
		});
	}

}
