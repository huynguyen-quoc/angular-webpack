import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './about.routes';
import { AboutComponent } from './about.component';
import { SiteMenuBarService } from '../service/site-menubar/site-menubar.service';

@NgModule({
   imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ AboutComponent ],
  exports: [ AboutComponent ]
})
export class AboutModule {
  constructor(
    private siteMenu: SiteMenuBarService
  ) {
    siteMenu.saveItems('about', {
       title : 'About',
       group : true,
       icon  : 'md-settings',
       weight: 2
    });
  }
}
