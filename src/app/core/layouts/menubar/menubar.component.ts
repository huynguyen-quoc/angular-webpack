import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Menu } from '../../plugin/menu.ts';
/* tslint:disable:max-line-length */
import { MenuBarService, MENU_ITEM } from '../../services/menubar.service';
/* tslint:enable:max-line-length */
@Component({
  moduleId: 'AppSiteMenuBar',
  selector: 'menubar',
  templateUrl: 'menubar.component.html'
})
export class MenuBarComponent implements OnInit {
  @ViewChild('AppSiteMenu') public AppSiteMenuEl: ElementRef;
  public menuItems: MENU_ITEM[];

  constructor(
      private siteMenuBarService: MenuBarService
  ) {
    // do nothing
    siteMenuBarService.sort();
    this.menuItems = siteMenuBarService.menuItems;
  }

  public ngOnInit() {
    // do nothing
    let data = new Menu($(this.AppSiteMenuEl.nativeElement), {});
  }
}
