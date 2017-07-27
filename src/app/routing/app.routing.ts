import { Routes, RouterModule } from '@angular/router';
import { HomeShellComponent } from '../components/home-shell/home-shell.component';
import { AboutComponent } from '../components/home-shell/about/about.component';
import { WorkComponent } from '../components/home-shell/work/work.component';

const APP_ROUTES: Routes = [
	{
		path: '',
		component: HomeShellComponent
	},
	{
		path: '',
		component: AboutComponent
	},
	{
		path: '',
		component: WorkComponent
	}
];

// export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
export const routing = RouterModule.forRoot(APP_ROUTES);
