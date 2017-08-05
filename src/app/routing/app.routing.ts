import { Routes, RouterModule } from '@angular/router';
import { HomeShellComponent } from '../components/home-shell/home-shell.component';

const APP_ROUTES: Routes = [
	{
		path: '',
		component: HomeShellComponent
	}
];

// export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
export const routing = RouterModule.forRoot(APP_ROUTES);
