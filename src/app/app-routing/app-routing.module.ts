import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ShadowslegionComponent } from '../shadowslegion/shadowslegion.component';
import { TourComponent } from '../tour/tour.component';
import { NewsComponent } from '../news/news.component';
import { CharityComponent } from '../charity/charity.component';
import { ContactComponent } from '../contact/contact.component';
import { BandComponent } from '../band/band.component';
import { StoryComponent } from '../story/story.component';
import { TechComponent } from '../tech/tech.component';
import { DiscographyComponent } from '../discography/discography.component';

const routes : Routes = [ 
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'gallery', component: GalleryComponent},
	{ path: 'shadowslegions', component: ShadowslegionComponent },
	{ path: 'tour', component: TourComponent},
	{ path: 'news', component: NewsComponent},
	{ path: 'collectorforgood', component: CharityComponent},
	{ path: 'contact', component: ContactComponent },
	{ path: 'band', component: BandComponent },
	{ path: 'story', component: StoryComponent },
	{ path: 'tech', component: TechComponent },
	{ path: 'music', component: DiscographyComponent},
	{ path: '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
