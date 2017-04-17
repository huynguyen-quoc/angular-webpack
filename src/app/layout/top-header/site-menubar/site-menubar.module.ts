import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteMenuBarComponent } from './site-menubar.component';
import { SiteMenuBarNodeComponent } from './site-menubar-node/';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ SiteMenuBarComponent, SiteMenuBarNodeComponent ],
  exports: [ SiteMenuBarComponent ]
})
export class SiteMenuBarModule {}
