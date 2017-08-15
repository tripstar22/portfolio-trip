import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppHttpService } from '../../../../services/app-http.service';

@Component({
	selector: 'trip-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss'],
	providers: [AppHttpService]
})
export class SkillsComponent implements OnInit, AfterViewInit {

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
		)
	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		// create vars for window, document, body
		let w = window;
		let d = document;
		let b = document.body;
		// create vars for animated elements
		let img_html = document.getElementById("html5");
		let img_js = document.getElementById("javascript");
		let img_ng = document.getElementById("angularjs");
		let img_scss = document.getElementById("scss");
		let img_node = document.getElementById("node");
		let img_git = document.getElementById("git");
		// add scroll event listener
		d.addEventListener("scroll", function(event) {
			// desktop animations
			if (w.innerWidth >= 1024) {
				console.log(img_html);
				// if (b.scrollTop >= 500) {
				//
				// }
			}
		});
	}

}
