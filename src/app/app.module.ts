import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
import { NavHomeComponent } from './components/home-shell/nav-home/nav-home.component';

// routing
import { routing } from './routing/app.routing';

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
		NavHomeComponent
	],
	imports: [
		BrowserModule,
		routing
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
