var ac_main =
webpackJsonpac__name_([3],{

/***/ "./node_modules/css-loader/index.js!./src/app/app.component.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\nspan.active {\n  background-color: gray;\n}\n", ""]);

// exports


/***/ },

/***/ "./node_modules/css-loader/index.js!./src/app/home/home.component.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "/*styles for home content only*/", ""]);

// exports


/***/ },

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ "./node_modules/rxjs/add/observable/of.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var of_1 = __webpack_require__("./node_modules/rxjs/observable/of.js");
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ },

/***/ "./src/app/about/about.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.log('`About` component loaded asynchronously');
var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (data) {
            // your resolved data from route
            _this.localState = data.yourData;
        });
        console.log('hello `About` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.log('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        this.asyncDataWithWebpack();
    };
    AboutComponent.prototype.asyncDataWithWebpack = function () {
        var _this = this;
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(function () {
            __webpack_require__.e/* System.import */(1).then(__webpack_require__.bind(null, "./src/assets/mock-data/mock-data.json"))
                .then(function (json) {
                console.log('async mockData', json);
                _this.localState = json;
            });
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            styles: ["\n  "],
            template: "\n    <h1>About</h1>\n    <div>\n      For hot module reloading run\n      <pre>npm run start:hmr</pre>\n    </div>\n    <div>\n      <h3>\n        patrick@AngularClass.com\n      </h3>\n    </div>\n    <pre>this.localState = {{ localState | json }}</pre>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
exports.AboutComponent = AboutComponent;


/***/ },

/***/ "./src/app/about/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/about/about.component.ts"));


/***/ },

/***/ "./src/app/app.component.css":
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/app.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ "./src/app/app.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [
                __webpack_require__("./src/app/app.component.css")
            ],
            template: "\n    <nav>\n      <span>\n        <a [routerLink]=\" ['./'] \">\n          Index\n        </a>\n      </span>\n      |\n      <span>\n        <a [routerLink]=\" ['./basic'] \">\n          Basic\n        </a>\n      </span>\n      |\n      <span>\n        <a [routerLink]=\" ['./tournament'] \">\n          Tournament\n        </a>\n      </span>\n      <!--|\n      <span>\n        <a [routerLink]=\" ['./about'] \">\n          About\n        </a>\n      </span>-->\n    </nav>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n\n    <!-- <pre class=\"app-state\">this.appState.state = {{ appState.state | json }}</pre>\n\n    <footer>\n      <span>WebPack Angular 2 Starter by <a [href]=\"url\">@AngularClass</a></span>\n      <div>\n        <a [href]=\"url\">\n          <img [src]=\"angularclassLogo\" width=\"25%\">\n        </a>\n      </div>\n    </footer>-->\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ },

/***/ "./src/app/app.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__("./src/app/environment.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
// App is our top level component
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_resolver_1 = __webpack_require__("./src/app/app.resolver.ts");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var basic_1 = __webpack_require__("./src/app/basic/index.ts");
var tournament_1 = __webpack_require__("./src/app/tournament/index.ts");
var home_1 = __webpack_require__("./src/app/home/index.ts");
var about_1 = __webpack_require__("./src/app/about/index.ts");
var no_content_1 = __webpack_require__("./src/app/no-content/index.ts");
var x_large_1 = __webpack_require__("./src/app/home/x-large/index.ts");
// Application wide providers
var APP_PROVIDERS = app_resolver_1.APP_RESOLVER_PROVIDERS.concat([
    app_service_1.AppState
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state)
            return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = hmr_1.createInputTransfer();
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [
                app_component_1.AppComponent,
                about_1.AboutComponent,
                home_1.HomeComponent,
                basic_1.BasicComponent,
                tournament_1.TournamentComponent,
                no_content_1.NoContentComponent,
                x_large_1.XLarge
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true })
            ],
            providers: [
                environment_1.ENV_PROVIDERS,
                APP_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ApplicationRef !== 'undefined' && core_1.ApplicationRef) === 'function' && _a) || Object, (typeof (_b = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _b) || Object])
    ], AppModule);
    return AppModule;
    var _a, _b;
}());
exports.AppModule = AppModule;


/***/ },

/***/ "./src/app/app.resolver.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
__webpack_require__("./node_modules/rxjs/add/observable/of.js");
var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return Observable_1.Observable.of({ res: 'I am data' });
    };
    DataResolver = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataResolver);
    return DataResolver;
}());
exports.DataResolver = DataResolver;
// an array of services to resolve routes with data
exports.APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ },

/***/ "./src/app/app.routes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var home_1 = __webpack_require__("./src/app/home/index.ts");
var basic_1 = __webpack_require__("./src/app/basic/index.ts");
var tournament_1 = __webpack_require__("./src/app/tournament/index.ts");
var about_1 = __webpack_require__("./src/app/about/index.ts");
var no_content_1 = __webpack_require__("./src/app/no-content/index.ts");
exports.ROUTES = [
    { path: '', component: basic_1.BasicComponent },
    { path: 'home', component: home_1.HomeComponent },
    { path: 'tournament', component: tournament_1.TournamentComponent },
    { path: 'about', component: about_1.AboutComponent },
    {
        path: 'detail', loadChildren: function () { return __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, "./src/app/+detail/index.ts")).then(function (comp) {
            return comp.default;
        }); },
    },
    { path: '**', component: no_content_1.NoContentComponent },
];


/***/ },

/***/ "./src/app/app.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppState);
    return AppState;
}());
exports.AppState = AppState;


/***/ },

/***/ "./src/app/basic/basic.component.html":
/***/ function(module, exports) {

module.exports = "<h1>Basic</h1>\n<form>\n  <label for=\"basicTitle\">title</label>\n  <input id=\"basicTitle\" class=\"form-control\" [value]=\"title\" (input)=\"title = $event.target.value\">\n\n  <label for=\"basicCount\">count</label>\n  <input id=\"basicCount\" type=\"number\" min=\"1\" max=\"{{MaxCount}}\" class=\"form-control\" [value]=\"count\" (input)=\"onCountChange($event)\">\n\n  <div *ngFor=\"let player of players\" [hidden]=\"!player.enable\">\n    <label attr.for=\"basicPlayer{{player.id}}\">{{player.id+1}}</label>\n    <input id=\"basicPlayer{{player.id}}\" type=\"text\" class=\"form-control\" [value]=\"player.name\" (input)=\"player.name = $event.target.value\">\n  </div>\n\n</form>\n"

/***/ },

/***/ "./src/app/basic/basic.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var BasicComponent = (function () {
    function BasicComponent(route) {
        this.route = route;
        this.MaxCount = 16;
    }
    BasicComponent.prototype.ngOnInit = function () {
        this.title = "";
        this.count = 0;
        this.players = [];
        for (var i = 0; i < this.MaxCount; i++) {
            this.players.push({ id: i, name: "player" + (i + 1), enable: false });
        }
    };
    BasicComponent.prototype.onCountChange = function ($event) {
        this.count = $event.target.value;
        for (var i = 0; i < this.MaxCount; i++) {
            this.players[i].enable = (this.count > i);
        }
        console.log($event);
    };
    BasicComponent = __decorate([
        core_1.Component({
            selector: 'basic',
            styles: ["\n  "],
            template: __webpack_require__("./src/app/basic/basic.component.html")
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], BasicComponent);
    return BasicComponent;
    var _a;
}());
exports.BasicComponent = BasicComponent;


/***/ },

/***/ "./src/app/basic/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/basic/basic.component.ts"));


/***/ },

/***/ "./src/app/environment.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ "./src/app/home/home.component.css":
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/home/home.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ "./src/app/home/home.component.html":
/***/ function(module, exports) {

module.exports = "<div class=\"card-container\">\n  <h1 x-large class=\"sample-content\">Your Content Here</h1>\n\n  <div>\n    For material design components use the <a href=\"https://github.com/AngularClass/angular2-webpack-starter/tree/material2\"><b>material2</b></a> branch\n  </div>\n\n  <hr>\n\n  <div>\n    For hot module reloading run\n    <pre>npm run start:hmr</pre>\n  </div>\n\n  <hr>\n\n  <div>\n    <h4>Local State</h4>\n\n    <form (ngSubmit)=\"submitState(localState.value)\" autocomplete=\"off\">\n\n      <input\n        [value]=\"localState.value\"\n        (input)=\"localState.value = $event.target.value\"\n        placeholder=\"Submit Local State to App State\"\n        autofocus>\n\n      <button md-raised-button color=\"primary\">Submit Value</button>\n    </form>\n    <!--\n        <input type=\"text\" [value]=\"localState.value\" (input)=\"localState.value = $event.target.value\" autofocus>\n        Rather than wiring up two-way data-binding ourselves with [value] and (input)\n        we can use Angular's [(ngModel)] syntax\n        <input type=\"text\" name=\"textInput\" [(ngModel)]=\"localState.value\" autofocus>\n      -->\n\n    <pre>this.localState = {{ localState | json }}</pre>\n\n  </div>\n\n</div>\n"

/***/ },

/***/ "./src/app/home/home.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var app_service_1 = __webpack_require__("./src/app/app.service.ts");
var title_1 = __webpack_require__("./src/app/home/title/index.ts");
var HomeComponent = (function () {
    // TypeScript public modifiers
    function HomeComponent(appState, title) {
        this.appState = appState;
        this.title = title;
        // Set our default values
        this.localState = { value: '' };
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    };
    HomeComponent.prototype.submitState = function (value) {
        console.log('submitState', value);
        this.appState.set('value', value);
        this.localState.value = '';
    };
    HomeComponent = __decorate([
        core_1.Component({
            // The selector is what angular internally uses
            // for `document.querySelectorAll(selector)` in our index.html
            // where, in this case, selector is the string 'home'
            selector: 'home',
            // We need to tell Angular's Dependency Injection which providers are in our app.
            providers: [
                title_1.Title
            ],
            // Our list of styles in our component. We may add more to compose many styles together
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            // Every Angular template is first compiled by the browser before Angular runs it's compiler
            template: __webpack_require__("./src/app/home/home.component.html")
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _a) || Object, (typeof (_b = typeof title_1.Title !== 'undefined' && title_1.Title) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
exports.HomeComponent = HomeComponent;


/***/ },

/***/ "./src/app/home/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/home/home.component.ts"));


/***/ },

/***/ "./src/app/home/title/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/home/title/title.service.ts"));


/***/ },

/***/ "./src/app/home/title/title.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var Title = (function () {
    function Title(http) {
        this.http = http;
        this.value = 'Angular 2';
    }
    Title.prototype.getData = function () {
        console.log('Title#getData(): Get Data');
        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: 'AngularClass'
        };
    };
    Title = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], Title);
    return Title;
    var _a;
}());
exports.Title = Title;


/***/ },

/***/ "./src/app/home/x-large/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/home/x-large/x-large.directive.ts"));


/***/ },

/***/ "./src/app/home/x-large/x-large.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
var XLarge = (function () {
    function XLarge(element, renderer) {
        // simple DOM manipulation to set font size to x-large
        // `nativeElement` is the direct reference to the DOM element
        // element.nativeElement.style.fontSize = 'x-large';
        // for server/webworker support use the renderer
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
    XLarge = __decorate([
        core_1.Directive({
            selector: '[x-large]' // using [ ] means selecting attributes
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
    ], XLarge);
    return XLarge;
    var _a, _b;
}());
exports.XLarge = XLarge;


/***/ },

/***/ "./src/app/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(__webpack_require__("./src/app/app.module.ts"));


/***/ },

/***/ "./src/app/no-content/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/no-content/no-content.component.ts"));


/***/ },

/***/ "./src/app/no-content/no-content.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent = __decorate([
        core_1.Component({
            selector: 'no-content',
            template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NoContentComponent);
    return NoContentComponent;
}());
exports.NoContentComponent = NoContentComponent;


/***/ },

/***/ "./src/app/tournament/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/tournament/tournament.component.ts"));


/***/ },

/***/ "./src/app/tournament/tournament.component.html":
/***/ function(module, exports) {

module.exports = "<canvas id=\"canvas\" ></canvas>"

/***/ },

/***/ "./src/app/tournament/tournament.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
var TournamentComponent = (function () {
    function TournamentComponent(route) {
        this.route = route;
        this.players = [];
        this.players.push({ id: 0, name: "player A", enable: true });
        this.players.push({ id: 1, name: "player B", enable: true });
        this.players.push({ id: 2, name: "player C", enable: true });
        this.players.push({ id: 3, name: "player D", enable: true });
        this.players.push({ id: 4, name: "player E", enable: true });
        this.players.push({ id: 5, name: "player F", enable: true });
        this.players.push({ id: 6, name: "player G", enable: true });
        this.players.push({ id: 7, name: "player H", enable: true });
        this.matching = [];
        this.matching.push({
            match: [
                {
                    id: 0,
                    playerA: { id: 0, score: 3 },
                    playerB: { id: 1, score: 2 }
                },
                {
                    id: 1,
                    playerA: { id: 2, score: 0 },
                    playerB: { id: 3, score: 3 }
                },
                {
                    id: 2,
                    playerA: { id: 4, score: 3 },
                    playerB: { id: 5, score: 2 }
                },
                {
                    id: 3,
                    playerA: { id: 6, score: 1 },
                    playerB: { id: 7, score: 0 }
                }
            ]
        });
        this.matching.push({ match: [
                {
                    id: 4,
                    playerA: { matchingId: 0, score: 1 },
                    playerB: { matchingId: 1, score: 2 }
                },
                {
                    id: 5,
                    playerA: { matchingId: 2, score: 2 },
                    playerB: { matchingId: 3, score: 3 }
                }
            ] });
        this.matching.push({ match: [
                {
                    id: 6,
                    playerA: { matchingId: 4 },
                    playerB: { matchingId: 5 }
                }
            ] });
    }
    TournamentComponent.prototype.ngOnInit = function () {
        this.drawTournament();
    };
    TournamentComponent.prototype.drawTournament = function () {
        var canvas = document.getElementById("canvas");
        canvas.height = 20 + (40 * this.players.length);
        var context = canvas.getContext('2d');
        context.font = "16px 'ＭＳ ゴシック'";
        var startWidth;
        var height;
        // draw playerName
        for (var i = 0; i < this.players.length; i++) {
            console.log(this.players[i].name);
            height = 20 + (i * 40);
            this.drawPlayer(context, this.players[i].name, 20, height);
        }
        // draw tournament
        for (var i = 0; i < this.matching.length; i++) {
            startWidth = 120 + (i * 40);
            // let startHeight:number = 20;
            for (var j = 0; j < this.matching[i].match.length; j++) {
                // startHeight =　20 + (j * 80) + (i * 20);
                var startHeightA = this.getStartHeight(this.matching[i].match[j].playerA, i);
                var startHeightB = this.getStartHeight(this.matching[i].match[j].playerB, i);
                var startHeightAdjust = 40 * (i + 1);
                this.matching[i].match[j].playerA.draw = {
                    startWidth: startWidth,
                    startHeight: startHeightA,
                    endWidth: startWidth + 40,
                    endHieght: (startHeightA + startHeightB) / 2
                };
                this.matching[i].match[j].playerB.draw = {
                    startWidth: startWidth,
                    startHeight: startHeightB,
                    endWidth: startWidth + 40,
                    endHieght: (startHeightA + startHeightB) / 2
                };
                this.draw(context, this.matching[i].match[j].playerA.draw.startWidth, this.matching[i].match[j].playerA.draw.startHeight, this.matching[i].match[j].playerA.draw.endWidth, this.matching[i].match[j].playerA.draw.endHieght, this.isWin(this.matching[i].match[j].playerA, this.matching[i].match[j].playerB));
                this.draw(context, this.matching[i].match[j].playerB.draw.startWidth, this.matching[i].match[j].playerB.draw.startHeight, this.matching[i].match[j].playerB.draw.endWidth, this.matching[i].match[j].playerB.draw.endHieght, this.isWin(this.matching[i].match[j].playerB, this.matching[i].match[j].playerA));
            }
        }
    };
    TournamentComponent.prototype.getStartHeight = function (matchingPlayer, round) {
        if (matchingPlayer.matchingId != undefined && matchingPlayer.matchingId != null) {
            for (var _i = 0, _a = this.matching[round - 1].match; _i < _a.length; _i++) {
                var match = _a[_i];
                if (match.id == matchingPlayer.matchingId) {
                    return match.playerA.draw.endHieght;
                }
            }
        }
        else {
            // for(var i = 0; i < this.players.length; i++){
            //   if( == )
            // }
            return 20 + (matchingPlayer.id * 40) + (round * 20);
        }
    };
    TournamentComponent.prototype.drawPlayer = function (context, playerName, width, height) {
        context.fillText(playerName, width, height);
    };
    // drawLine(context:CanvasRenderingContext2D, round:number, startWidth:number, startHeight:number, playerType:PlayerType, isWin:boolean){
    //   var startHeightAdjust:number = 40 * (round + 1);
    //   var startHeightAdd:number = 20 * round;
    //   var height: number = playerType == PlayerType.A ? startHeight + startHeightAdd : startHeight + startHeightAdjust + startHeightAdd; 
    //   context.lineWidth = isWin ? 5: 2;
    //   this.draw(context, startWidth, height, startWidth + 40, playerType == PlayerType.A ? height  + (20 * (round + 1)): height - (20 * (round + 1)))
    // }
    TournamentComponent.prototype.draw = function (context, startWidth, startHeight, endWidth, endHeight, isWin) {
        context.beginPath();
        context.lineWidth = isWin ? 5 : 2;
        context.moveTo(startWidth, startHeight);
        context.lineTo(endWidth, startHeight);
        context.lineTo(endWidth, endHeight);
        context.lineTo(endWidth, startHeight);
        context.closePath();
        context.stroke();
    };
    TournamentComponent.prototype.getPlayerNameById = function (id) {
        for (var _i = 0, _a = this.players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.id == id) {
                return player.name;
            }
        }
        return null;
    };
    TournamentComponent.prototype.isWin = function (player, matchPlayer) {
        if (player.score == null || matchPlayer.score == null) {
            return false;
        }
        return player.score > matchPlayer.score;
    };
    TournamentComponent = __decorate([
        core_1.Component({
            selector: 'tournament',
            styles: ["\n  "],
            template: __webpack_require__("./src/app/tournament/tournament.component.html")
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], TournamentComponent);
    return TournamentComponent;
    var _a;
}());
exports.TournamentComponent = TournamentComponent;
var PlayerType;
(function (PlayerType) {
    PlayerType[PlayerType["A"] = 0] = "A";
    PlayerType[PlayerType["B"] = 1] = "B";
})(PlayerType || (PlayerType = {}));


/***/ },

/***/ "./src/main.browser.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
var environment_1 = __webpack_require__("./src/app/environment.ts");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__("./src/app/index.ts");
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
// needed for hmr
// in prod this is replace for document ready
hmr_1.bootloader(main);


/***/ }

},["./src/main.browser.ts"]);
//# sourceMappingURL=main.map