import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';

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
import { TechnicItemDetailComponent } from './technic-item-detail/technic-item-detail.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { DraggableMTListsComponent } from './draggable-m-t-lists/draggable-m-t-lists.component';
import { AddMissionFormComponent } from './add-mission-form/add-mission-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';


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
    TechnicItemDetailComponent,
    ButtonComponent,
    DraggableMTListsComponent,
    AddMissionFormComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    MdbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
