import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { SiteMenuBarService } from '../../../service/site-menubar/site-menubar.service';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    SiteMenuBarService
  ]
})
export class NavbarModule {

  constructor(
    private siteMenu: SiteMenuBarService
  ) {}
}
