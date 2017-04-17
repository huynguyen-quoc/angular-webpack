import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
/* tslint:disable:max-line-length */
import { SiteMenuBarService, MENU_ITEM } from '../../../../service/site-menubar/site-menubar.service';
/* tslint:enable:max-line-length */
@Component({
  selector: '[site-menubar-node]',
  providers : [],
  templateUrl : './site-menubar-node.component.html'
})

export class SiteMenuBarNodeComponent implements OnInit {
  @ViewChild('AppSiteMenu') public AppSiteMenuEl: ElementRef;
  public menuItems: MENU_ITEM[];

  constructor(
    private siteMenuBarService: SiteMenuBarService
  ) {
      siteMenuBarService.sort();
      this.menuItems = siteMenuBarService.menuItems;
      console.log(this.menuItems);
  }

  public ngOnInit() {
    // do nothing
  }
}
