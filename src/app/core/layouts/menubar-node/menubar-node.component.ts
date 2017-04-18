import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
/* tslint:disable:max-line-length */
import { MenuBarService, MENU_ITEM } from '../../services/menubar.service';
/* tslint:enable:max-line-length */
@Component({
  selector: '[menubar-node]',
  providers : [],
  templateUrl : './menubar-node.component.html'
})

export class MenuBarNodeComponent implements OnInit {
  @ViewChild('AppSiteMenu') public AppSiteMenuEl: ElementRef;
  public menuItems: MENU_ITEM[];

  constructor(
    private siteMenuBarService: MenuBarService
  ) {
      siteMenuBarService.sort();
      this.menuItems = siteMenuBarService.menuItems;
      console.log(this.menuItems);
  }

  public ngOnInit() {
    // do nothing
  }
}
