import { Routes, RouterModule } from '@angular/router';
import { HomeShellComponent } from '../components/home-shell/home-shell.component';
import { ContactComponent } from '../components/contact/contact.component';

const APP_ROUTES: Routes = [
	{
		path: '',
		component: HomeShellComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}
];

// export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
export const routing = RouterModule.forRoot(APP_ROUTES);
