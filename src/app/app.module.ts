import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MenuComponent } from './menu/menu.component';
import { HomeComponent, LiveFeedSheet } from './home/home.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LiveFeedComponent } from './live-feed/live-feed.component';
import { ShadowslegionComponent } from './shadowslegion/shadowslegion.component';
import { TourComponent } from './tour/tour.component';
import { CharityComponent } from './charity/charity.component';
import { ContactComponent } from './contact/contact.component';
import { BandComponent } from './band/band.component';
import { StoryComponent } from './story/story.component';
import { TechComponent } from './tech/tech.component';
import { DiscographyComponent } from './discography/discography.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { SafeHtmlPipePipe } from './safe-html-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NewsComponent,
    LiveFeedSheet,
    GalleryComponent,
    LiveFeedComponent,
    ShadowslegionComponent,
    TourComponent,
    CharityComponent,
    ContactComponent,
    BandComponent,
    StoryComponent,
    TechComponent,
    DiscographyComponent,
    NewsDetailsComponent,
    SafeHtmlPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [ LiveFeedSheet ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
