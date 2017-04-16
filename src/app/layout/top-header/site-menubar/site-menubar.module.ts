import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteMenuBarComponent } from './site-menubar.component';

@NgModule({
  imports: [ RouterModule, CommonModule ],
  declarations: [ SiteMenuBarComponent ],
  exports: [ SiteMenuBarComponent ]
})
export class SiteMenuBarModule {}
