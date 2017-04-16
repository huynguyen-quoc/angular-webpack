import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteMenuBarModule } from './site-menubar';
import { NavbarModule } from './navbar';
import { TopHeaderComponent } from './top-header.component';
@NgModule({
  imports: [ RouterModule, CommonModule, SiteMenuBarModule, NavbarModule ],
  declarations: [ TopHeaderComponent ],
  exports: [ TopHeaderComponent ]
})
export class TopHeaderModule {}
