import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../../../../services/app-http.service';

@Component({
	selector: 'trip-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	providers: [AppHttpService]
})
export class SkillsComponent implements OnInit {

	items: any;

	constructor(private _appHttpService: AppHttpService) {
		this.callHttpService();
	}

	callHttpService() {
		this._appHttpService.requestData('./assets/data/skills.json')
		.subscribe(
			data => {this.items = data},
			error => console.log(error),
			() => console.log('subscribe complete')
		);
	}

	ngOnInit() {
		var e = Event;
		// create vars for window, document, body
		const w = window;
		const d = document;
		const b = document.body;
		// create var for function to fire once on scroll
		let fired = 0;
		// create vars for animated elements
		const wrap = d.querySelectorAll('.wrapSkills .flexWrap')[0];
		// add scroll event listener
		d.addEventListener('scroll', function(e) {
			// desktop animations
			if ((w.innerWidth >= 1024) && (fired === 0)) {
				if (b.scrollTop >= 1025) {
					wrap.classList.remove('aniY');
					fired = 1;
				}
			}
		});
	}

}