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
		
	}

}
