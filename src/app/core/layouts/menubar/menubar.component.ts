import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Menu } from '../../plugin/menu.ts';

@Component({
  moduleId: 'AppSiteMenuBar',
  selector: 'menubar',
  templateUrl: 'menubar.component.html'
})
export class MenuBarComponent implements OnInit {
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
