import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './home.routes';
import { HomeComponent } from './home.component';
import { MenuBarService } from '../core/services/menubar.service';

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
    private siteMenu: MenuBarService
  ) {
    siteMenu.saveItems('dashboard', {
       title : 'Dashboard',
       group : true,
       icon  : 'md-view-dashboard',
       weight: 1
    });
  }
}
