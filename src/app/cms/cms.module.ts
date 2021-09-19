import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingpageComponent } from './landingpage/landingpage.component';


@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
