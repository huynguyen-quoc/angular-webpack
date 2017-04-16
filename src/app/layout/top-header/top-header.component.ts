import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

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
      console.log('ok');
      if ($BODY.hasClass('site-menubar-fixed') || $BODY.hasClass('site-menubar-disable-hover') || $BODY.hasClass('site-menubar-changing')) {
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
