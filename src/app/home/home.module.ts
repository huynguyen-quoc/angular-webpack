import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './home.routes';
import { HomeComponent } from './home.component';
import { SiteMenuBarService } from '../service/site-menubar/site-menubar.service';

@NgModule({
   imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ]
})
export class HomeModule {
  constructor(
    private siteMenu: SiteMenuBarService
  ) {
    siteMenu.saveItems('dashboard', {
       title : 'Dashboard',
       group : true,
       icon  : 'md-view-dashboard',
       weight: 1
    });
  }
}
