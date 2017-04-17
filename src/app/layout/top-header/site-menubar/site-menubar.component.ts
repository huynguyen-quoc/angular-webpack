import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { navbar } from '../navbar/navbar.component.ts';
import { Menu } from '../../../plugin/menu.ts';

@Component({
  moduleId: 'AppSiteMenuBar',
  selector: 'site-menubar',
  providers : [],
  templateUrl: 'site-menubar.component.html'
})
export class SiteMenuBarComponent implements OnInit {
  @ViewChild('AppSiteMenu') public AppSiteMenuEl: ElementRef;

  constructor(
  ) {
    // do nothing
  }

  public ngOnInit() {
    // do nothing
    let data = new Menu($(this.AppSiteMenuEl.nativeElement), {});
  }
}
