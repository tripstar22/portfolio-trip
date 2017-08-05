import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';
import { HomeShellComponent } from './components/home-shell/home-shell.component';
import { WorkDetailShellComponent } from './components/work-detail-shell/work-detail-shell.component';
import { HeroComponent } from './components/home-shell/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/home-shell/about/about.component';
import { SkillsComponent } from './components/home-shell/about/skills/skills.component';
import { WorkComponent } from './components/home-shell/work/work.component';
import { HeaderComponent } from './components/header/header.component';
import { OffCanvasNavComponent } from './components/off-canvas-nav/off-canvas-nav.component';

// *** routing commented out for 1.0 version bc app is one page ***
// routing
// import { routing } from './routing/app.routing';

// http service
import { AppHttpService } from './services/app-http.service';
// firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// smooth scroll
import { ScrollToModule } from 'ng2-scroll-to';

@NgModule({
	declarations: [
		AppComponent,
		HomeShellComponent,
		WorkDetailShellComponent,
		HeroComponent,
		FooterComponent,
		AboutComponent,
		SkillsComponent,
		WorkComponent,
		HeaderComponent,
		OffCanvasNavComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		// routing,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
		ScrollToModule.forRoot()
	],
  providers: [
  		AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
