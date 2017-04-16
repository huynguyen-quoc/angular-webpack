import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  moduleId: 'AppTopHeade',
  selector: 'top-header',
  templateUrl: 'top-header.component.html'
})
export class TopHeaderComponent implements OnInit {
  @ViewChild('AppMenuBar') public siteMenuEl: ElementRef;
  constructor() {
    // do nothing
  }

  public ngOnInit() {
    // do nothing
    this.bindHover();
  }

   private bindHover() {
    const $BODY = $('body');
    $(this.siteMenuEl.nativeElement).on('mouseenter', () => {
      /* tslint:disable:max-line-length */
      if ($BODY.hasClass('site-menubar-fixed') || $BODY.hasClass('site-menubar-disable-hover') || $BODY.hasClass('site-menubar-changing')) {
      /* tslint:enable:max-line-length */
        return;
      }

    }).on('mouseleave', () => {
      if ($BODY.hasClass('site-menubar-fixed') || $BODY.hasClass('site-menubar-disable-hover')) {
        return;
      }
      console.log('ok');
    });
  }
}
