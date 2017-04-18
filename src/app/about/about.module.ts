import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './about.routes';
import { AboutComponent } from './about.component';
import { MenuBarService } from '../core/services/menubar.service';

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
    private siteMenu: MenuBarService
  ) {
    siteMenu.saveItems('about', {
       title : 'About',
       group : true,
       icon  : 'md-settings',
       weight: 2
    });
  }
}
