import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  moduleId: 'AppNavBar',
  selector: 'navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  @ViewChild('appnavbar') public appNavBarEl: ElementRef;
  private menuBarType = 'hide';

  private isCollapsed = true;

  constructor() {
    // do nothing
  }

  public ngOnInit() {
    // do nothing
    this.initNavBar();
    this.initMenuBar();
  }

  private initNavBar() {
      $(this.appNavBarEl.nativeElement).on('click', '.dropdown-menu', (event) => {
          event.stopPropagation();
      }).on('show.bs.dropdown',  (event) => {
        const $target = $(event.target);
        /* tslint:disable:max-line-length */
        const $trigger = event.relatedTarget ? $(event.relatedTarget) : $target.children('[data-toggle="dropdown"]');
        /* tslint:enable:max-line-length */
        const animation = $trigger.data('animation');

        if (animation) {
          (() => {
            const $menu = $target.children('.dropdown-menu');
            /* tslint:disable:max-line-length */
            $menu.addClass('animation-' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
              $menu.removeClass('animation-' + animation);
            });
            /* tslint:enable:max-line-length */
          })();
        }
      });
  }

  public getState(){
    return this.menuBarType;
  }

  private initMenuBar() {
    $(this.appNavBarEl.nativeElement).on('click', '[data-toggle="menubar"]', (event) => {
        let type = this.menuBarType;
        switch (type) {
           case 'open':
            $('body').removeClass('site-menubar-fixed');
            type = 'hide';
            this.animate(() => {
                $('body').removeClass('site-menubar-open').addClass('site-menubar-hide');
            }, () => {
               // do nothing
            });
            break;
          case 'hide':
            $('body').addClass('site-menubar-fixed');
            this.animate(() => {
                $('body').removeClass('site-menubar-hide').addClass('site-menubar-open');
            },  () => {
                // do nothing
            });
            type = 'open';
            break;
          default:
            // do nothing
            break;
        }
        this.menuBarType = type;
        return false;
    });
  }

  private animate(doing, callback =  () => {
      // do nothing
    }) {
      setTimeout(() => {
        doing.call(this);
      }, 10);

      setTimeout(() => {
        callback.call(this);
      }, 250);
  }
  

}
