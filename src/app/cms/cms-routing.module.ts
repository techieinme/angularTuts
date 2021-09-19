import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: '',component: LandingpageComponent },
  { path: 'home',component: HomeComponent },
  { path: '404', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
