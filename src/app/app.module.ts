import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home-page/home.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { CommentsSectionComponent } from './comments-section/comments-section.component';
import { FooterComponent } from './footer/footer.component';
import { TechnicPageComponent } from './technic-page/technic-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { TechnicListComponent } from './technic-list/technic-list.component';
import { TechnicItemComponent } from './technic-item/technic-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    CommentsSectionComponent,
    FooterComponent,
    TechnicPageComponent,
    MissionPageComponent,
    TechnicListComponent,
    TechnicItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
