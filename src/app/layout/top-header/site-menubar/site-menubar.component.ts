import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { navbar } from '../navbar/navbar.component.ts';
import { Menu } from '../../../plugin/menu.ts';

@Component({
  moduleId: 'AppSiteMenuBar',
  selector: 'site-menubar',
  templateUrl: 'site-menubar.component.html'
})
export class SiteMenuBarComponent implements OnInit {
  @ViewChild('AppSiteMenu') public AppSiteMenuEl: ElementRef;
  public menuItems: any[];
  public brandMenu: any;
  private isCollapsed = true;
  constructor() {
    // do nothing
  }

  public ngOnInit() {
    // do nothing
    let data = new Menu($(this.AppSiteMenuEl.nativeElement), {});
  }
}
