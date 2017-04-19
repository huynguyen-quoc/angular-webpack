import { Component, OnInit, ViewChild, ElementRef, AfterViewInit , Input } from '@angular/core';
import { MENU_ITEM } from '../../services/menubar.service';
@Component({
  selector: '[menubar-node]',
  providers : [],
  templateUrl : './menubar-node.component.html'
})

export class MenuBarNodeComponent implements OnInit {
  @ViewChild('AppSiteMenu') public AppSiteMenuEl: ElementRef;
  @Input('items') public items: MENU_ITEM[];

  constructor() {
    // do nothing
  }

  public ngOnInit() {
    // do nothing
  }
}
