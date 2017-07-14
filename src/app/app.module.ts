import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeShellComponent } from './components/home-shell/home-shell.component';
import { WorkDetailShellComponent } from './components/work-detail-shell/work-detail-shell.component';
import { HeroComponent } from './components/home-shell/hero/hero.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/home-shell/about/about.component';
import { SkillsComponent } from './components/home-shell/about/skills/skills.component';
import { WorkComponent } from './components/home-shell/work/work.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeShellComponent,
		WorkDetailShellComponent,
		HeroComponent,
		NavComponent,
		FooterComponent,
		AboutComponent,
		SkillsComponent,
		WorkComponent
	],
	imports: [
		BrowserModule
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
