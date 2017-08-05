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
		)
	}

	ngOnInit() {
	}

}
