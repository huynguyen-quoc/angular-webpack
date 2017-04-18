import { PLUGINS_DATA, API_DATA } from './plugin.metadata';

export class Plugin {
    protected _$el: any;
    protected _name = 'plugin';
    protected _options: any = {};
    private _isRendered = false;

    constructor(
         $el: any,
         options: any = {}
    ) {
        this._$el = $el;
        this._options = options;
    }

    public getName() {
        return this._name;
    }

    public getDefaults(name) {
        let PluginClass = this.getPlugin(name);

        if (PluginClass) {
            return this.getDefaultsOptions();
        } else {
            return {};
        }
    }

    public getPlugin(name) {
        if (typeof PLUGINS_DATA[name] !== 'undefined') {
            return PLUGINS_DATA[name];
        } else {
            console.warn('Plugin:' + name + ' has no wrapped class.');
            return null;
        }
    }

    protected render() {
        if ($.fn[this._name]) {
            this._$el[this._name](this._options);
        } else {
            return;
        }
    }

    protected getDefaultsOptions() {
        return {};
    }

    protected initialize() {
        if (this._isRendered) {
            return;
        }
        this.render();
        this._isRendered = true;
    }

}
