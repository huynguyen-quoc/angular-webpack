import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './no-content.routes';
import { NoContentComponent } from './no-content.component';
import { MenuBarService } from '../core/services/menubar.service';

@NgModule({
   imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ NoContentComponent ],
  exports: [ NoContentComponent ]
})
export class NoContentModule {
  constructor(
    private siteMenu: MenuBarService
  ) {
    siteMenu.saveItems('no-content', {
       title : 'No Content',
       icon  : 'md-view-dashboard',
       weight: 3
    });
  }
}
