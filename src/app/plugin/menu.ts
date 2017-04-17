import { Plugin } from './plugin';

export class Menu extends Plugin {

    constructor(
        $el: any,
        options: any = {}
    ) {
        super($el, options);
        this._name = 'menu';
        this.initialize();
    }

    public bindEvents() {
        this._$el.on('open.site.menu', '.site-menu-item', (e) => {
            let $item = $(e.currentTarget);
            this.expand($item, () => {
                $item.addClass('open');
            });
            if (this._options.accordion) {
                $item.siblings('.open').trigger('close.site.menu');
            }
            e.stopPropagation();
        }).on('close.site.menu', '.site-menu-item.open', (e) => {
            let $item = $(e.currentTarget);

            this.collapse($item, () => {
                $item.removeClass('open');
            });

            e.stopPropagation();
        }).on('click.site.menu', '.site-menu-item', (e) => {
            let $item = $(e.currentTarget);
            /* tslint:disable:max-line-length */
            if ($item.is('.has-sub') && $(e.target).closest('.site-menu-item').is(e.currentTarget)) {
                /* tslint:enable:max-line-length */
                if ($item.is('.open')) {
                    $item.trigger('close.site.menu');
                } else {
                    $item.trigger('open.site.menu');
                }
            } else {
                if (!$item.is('.active')) {
                    $item.siblings('.active').trigger('deactive.site.menu');
                    $item.trigger('active.site.menu');
                }
            }
            e.stopPropagation();
        });

    }

    protected render() {
        this.bindEvents();
        this._$el.data('menuApi', this);
    }

    protected getDefaultsOptions() {
        return {
            speed: 250,
            accordion: true
        };
    }

    private expand($item , callback = () => {
        // function
    }) {
        let $sub = $item.children('.site-menu-sub');
        let $children = $sub.children('.site-menu-item').addClass('is-hidden');
        $sub.hide().slideDown(this._options.speed, () => {
            $(this).css('display', '');
            if (callback) {
                callback();
            }
            this._$el.trigger('expanded.site.menu');
        });

        setTimeout(() => {
            $children.addClass('is-shown');
            $children.removeClass('is-hidden');
        }, 0);
    }

    private collapse($item, callback = () => {
        // function
    }) {
        let self = this;
        let $sub = $item.children('.site-menu-sub');
        $sub.show().slideUp(this._options.speed, () => {
            $(this).css('display', '');

            $(this).find('> .site-menu-item').removeClass('is-shown');
            if (callback) {
                callback();
            }
            this._$el.trigger('collapsed.site.menu');
        });
    }
}
