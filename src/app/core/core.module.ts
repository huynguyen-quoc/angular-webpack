import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layouts/navbar';
import { MenuBarComponent } from './layouts/menubar';
import { MenuBarNodeComponent } from './layouts/menubar-node';

@NgModule({
  imports: [ RouterModule, CommonModule],
  exports : [ NavbarComponent, MenuBarComponent, MenuBarNodeComponent ],
  declarations: [NavbarComponent, MenuBarComponent, MenuBarNodeComponent],
})
export class AppCoreModule {}
