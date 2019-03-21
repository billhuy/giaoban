(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-mini\">\n  <div class=\"wrapper\">\n    <app-header></app-header>\n    <app-sidebar></app-sidebar>\n    <app-content></app-content>\n    <app-footer></app-footer>\n<router-outlet></router-outlet>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'giaoban';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Dashboard\n      <small>Version 2.0</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- Info boxes -->\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-aqua\"><i class=\"ion ion-ios-gear-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">CPU Traffic</span>\n            <span class=\"info-box-number\">90<small>%</small></span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-red\"><i class=\"fa fa-google-plus\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Likes</span>\n            <span class=\"info-box-number\">41,410</span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n      </div>\n      <!-- /.col -->\n\n      <!-- fix for small devices only -->\n      <div class=\"clearfix visible-sm-block\"></div>\n\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-green\"><i class=\"ion ion-ios-cart-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Sales</span>\n            <span class=\"info-box-number\">760</span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n      </div>\n      <!-- /.col -->\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\n        <div class=\"info-box\">\n          <span class=\"info-box-icon bg-yellow\"><i class=\"ion ion-ios-people-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">New Members</span>\n            <span class=\"info-box-number\">2,000</span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"box\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Monthly Recap Report</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n              </button>\n              <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-box-tool dropdown-toggle\" data-toggle=\"dropdown\">\n                  <i class=\"fa fa-wrench\"></i></button>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <p class=\"text-center\">\n                  <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n                </p>\n\n                <div class=\"chart\">\n                  <!-- Sales Chart Canvas -->\n                  <canvas id=\"salesChart\" style=\"height: 180px;\"></canvas>\n                </div>\n                <!-- /.chart-responsive -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-4\">\n                <p class=\"text-center\">\n                  <strong>Goal Completion</strong>\n                </p>\n\n                <div class=\"progress-group\">\n                  <span class=\"progress-text\">Add Products to Cart</span>\n                  <span class=\"progress-number\"><b>160</b>/200</span>\n\n                  <div class=\"progress sm\">\n                    <div class=\"progress-bar progress-bar-aqua\" style=\"width: 80%\"></div>\n                  </div>\n                </div>\n                <!-- /.progress-group -->\n                <div class=\"progress-group\">\n                  <span class=\"progress-text\">Complete Purchase</span>\n                  <span class=\"progress-number\"><b>310</b>/400</span>\n\n                  <div class=\"progress sm\">\n                    <div class=\"progress-bar progress-bar-red\" style=\"width: 80%\"></div>\n                  </div>\n                </div>\n                <!-- /.progress-group -->\n                <div class=\"progress-group\">\n                  <span class=\"progress-text\">Visit Premium Page</span>\n                  <span class=\"progress-number\"><b>480</b>/800</span>\n\n                  <div class=\"progress sm\">\n                    <div class=\"progress-bar progress-bar-green\" style=\"width: 80%\"></div>\n                  </div>\n                </div>\n                <!-- /.progress-group -->\n                <div class=\"progress-group\">\n                  <span class=\"progress-text\">Send Inquiries</span>\n                  <span class=\"progress-number\"><b>250</b>/500</span>\n\n                  <div class=\"progress sm\">\n                    <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\"></div>\n                  </div>\n                </div>\n                <!-- /.progress-group -->\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- ./box-body -->\n          <div class=\"box-footer\">\n            <div class=\"row\">\n              <div class=\"col-sm-3 col-xs-6\">\n                <div class=\"description-block border-right\">\n                  <span class=\"description-percentage text-green\"><i class=\"fa fa-caret-up\"></i> 17%</span>\n                  <h5 class=\"description-header\">$35,210.43</h5>\n                  <span class=\"description-text\">TOTAL REVENUE</span>\n                </div>\n                <!-- /.description-block -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-3 col-xs-6\">\n                <div class=\"description-block border-right\">\n                  <span class=\"description-percentage text-yellow\"><i class=\"fa fa-caret-left\"></i> 0%</span>\n                  <h5 class=\"description-header\">$10,390.90</h5>\n                  <span class=\"description-text\">TOTAL COST</span>\n                </div>\n                <!-- /.description-block -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-3 col-xs-6\">\n                <div class=\"description-block border-right\">\n                  <span class=\"description-percentage text-green\"><i class=\"fa fa-caret-up\"></i> 20%</span>\n                  <h5 class=\"description-header\">$24,813.53</h5>\n                  <span class=\"description-text\">TOTAL PROFIT</span>\n                </div>\n                <!-- /.description-block -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-3 col-xs-6\">\n                <div class=\"description-block\">\n                  <span class=\"description-percentage text-red\"><i class=\"fa fa-caret-down\"></i> 18%</span>\n                  <h5 class=\"description-header\">1200</h5>\n                  <span class=\"description-text\">GOAL COMPLETIONS</span>\n                </div>\n                <!-- /.description-block -->\n              </div>\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n\n    <!-- Main row -->\n    <div class=\"row\">\n      <!-- Left col -->\n      <div class=\"col-md-8\">\n        <!-- MAP & BOX PANE -->\n        <div class=\"box box-success\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Visitors Report</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body no-padding\">\n            <div class=\"row\">\n              <div class=\"col-md-9 col-sm-8\">\n                <div class=\"pad\">\n                  <!-- Map will be created here -->\n                  <div id=\"world-map-markers\" style=\"height: 325px;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-3 col-sm-4\">\n                <div class=\"pad box-pane-right bg-green\" style=\"min-height: 280px\">\n                  <div class=\"description-block margin-bottom\">\n                    <div class=\"sparkbar pad\" data-color=\"#fff\">90,70,90,70,75,80,70</div>\n                    <h5 class=\"description-header\">8390</h5>\n                    <span class=\"description-text\">Visits</span>\n                  </div>\n                  <!-- /.description-block -->\n                  <div class=\"description-block margin-bottom\">\n                    <div class=\"sparkbar pad\" data-color=\"#fff\">90,50,90,70,61,83,63</div>\n                    <h5 class=\"description-header\">30%</h5>\n                    <span class=\"description-text\">Referrals</span>\n                  </div>\n                  <!-- /.description-block -->\n                  <div class=\"description-block\">\n                    <div class=\"sparkbar pad\" data-color=\"#fff\">90,50,90,70,61,83,63</div>\n                    <h5 class=\"description-header\">70%</h5>\n                    <span class=\"description-text\">Organic</span>\n                  </div>\n                  <!-- /.description-block -->\n                </div>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <!-- DIRECT CHAT -->\n            <div class=\"box box-warning direct-chat direct-chat-warning\">\n              <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Direct Chat</h3>\n\n                <div class=\"box-tools pull-right\">\n                  <span data-toggle=\"tooltip\" title=\"3 New Messages\" class=\"badge bg-yellow\">3</span>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-toggle=\"tooltip\" title=\"Contacts\"\n                          data-widget=\"chat-pane-toggle\">\n                    <i class=\"fa fa-comments\"></i></button>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                  </button>\n                </div>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"box-body\">\n                <!-- Conversations are loaded here -->\n                <div class=\"direct-chat-messages\">\n                  <!-- Message. Default to the left -->\n                  <div class=\"direct-chat-msg\">\n                    <div class=\"direct-chat-info clearfix\">\n                      <span class=\"direct-chat-name pull-left\">Alexander Pierce</span>\n                      <span class=\"direct-chat-timestamp pull-right\">23 Jan 2:00 pm</span>\n                    </div>\n                    <!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user1-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      Is this template really for free? That's unbelievable!\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                  <!-- Message to the right -->\n                  <div class=\"direct-chat-msg right\">\n                    <div class=\"direct-chat-info clearfix\">\n                      <span class=\"direct-chat-name pull-right\">Sarah Bullock</span>\n                      <span class=\"direct-chat-timestamp pull-left\">23 Jan 2:05 pm</span>\n                    </div>\n                    <!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user3-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      You better believe it!\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                  <!-- Message. Default to the left -->\n                  <div class=\"direct-chat-msg\">\n                    <div class=\"direct-chat-info clearfix\">\n                      <span class=\"direct-chat-name pull-left\">Alexander Pierce</span>\n                      <span class=\"direct-chat-timestamp pull-right\">23 Jan 5:37 pm</span>\n                    </div>\n                    <!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user1-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      Working with AdminLTE on a great new app! Wanna join?\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                  <!-- Message to the right -->\n                  <div class=\"direct-chat-msg right\">\n                    <div class=\"direct-chat-info clearfix\">\n                      <span class=\"direct-chat-name pull-right\">Sarah Bullock</span>\n                      <span class=\"direct-chat-timestamp pull-left\">23 Jan 6:10 pm</span>\n                    </div>\n                    <!-- /.direct-chat-info -->\n                    <img class=\"direct-chat-img\" src=\"dist/img/user3-128x128.jpg\" alt=\"message user image\">\n                    <!-- /.direct-chat-img -->\n                    <div class=\"direct-chat-text\">\n                      I would love to.\n                    </div>\n                    <!-- /.direct-chat-text -->\n                  </div>\n                  <!-- /.direct-chat-msg -->\n\n                </div>\n                <!--/.direct-chat-messages-->\n\n                <!-- Contacts are loaded here -->\n                <div class=\"direct-chat-contacts\">\n                  <ul class=\"contacts-list\">\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user1-128x128.jpg\" alt=\"User Image\">\n\n                        <div class=\"contacts-list-info\">\n                              <span class=\"contacts-list-name\">\n                                Count Dracula\n                                <small class=\"contacts-list-date pull-right\">2/28/2015</small>\n                              </span>\n                          <span class=\"contacts-list-msg\">How have you been? I was...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user7-128x128.jpg\" alt=\"User Image\">\n\n                        <div class=\"contacts-list-info\">\n                              <span class=\"contacts-list-name\">\n                                Sarah Doe\n                                <small class=\"contacts-list-date pull-right\">2/23/2015</small>\n                              </span>\n                          <span class=\"contacts-list-msg\">I will be waiting for...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user3-128x128.jpg\" alt=\"User Image\">\n\n                        <div class=\"contacts-list-info\">\n                              <span class=\"contacts-list-name\">\n                                Nadia Jolie\n                                <small class=\"contacts-list-date pull-right\">2/20/2015</small>\n                              </span>\n                          <span class=\"contacts-list-msg\">I'll call you back at...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user5-128x128.jpg\" alt=\"User Image\">\n\n                        <div class=\"contacts-list-info\">\n                              <span class=\"contacts-list-name\">\n                                Nora S. Vans\n                                <small class=\"contacts-list-date pull-right\">2/10/2015</small>\n                              </span>\n                          <span class=\"contacts-list-msg\">Where is your new...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user6-128x128.jpg\" alt=\"User Image\">\n\n                        <div class=\"contacts-list-info\">\n                              <span class=\"contacts-list-name\">\n                                John K.\n                                <small class=\"contacts-list-date pull-right\">1/27/2015</small>\n                              </span>\n                          <span class=\"contacts-list-msg\">Can I take a look at...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                    <li>\n                      <a href=\"#\">\n                        <img class=\"contacts-list-img\" src=\"dist/img/user8-128x128.jpg\" alt=\"User Image\">\n\n                        <div class=\"contacts-list-info\">\n                              <span class=\"contacts-list-name\">\n                                Kenneth M.\n                                <small class=\"contacts-list-date pull-right\">1/4/2015</small>\n                              </span>\n                          <span class=\"contacts-list-msg\">Never mind I found...</span>\n                        </div>\n                        <!-- /.contacts-list-info -->\n                      </a>\n                    </li>\n                    <!-- End Contact Item -->\n                  </ul>\n                  <!-- /.contatcts-list -->\n                </div>\n                <!-- /.direct-chat-pane -->\n              </div>\n              <!-- /.box-body -->\n              <div class=\"box-footer\">\n                <form action=\"#\" method=\"post\">\n                  <div class=\"input-group\">\n                    <input type=\"text\" name=\"message\" placeholder=\"Type Message ...\" class=\"form-control\">\n                    <span class=\"input-group-btn\">\n                          <button type=\"button\" class=\"btn btn-warning btn-flat\">Send</button>\n                        </span>\n                  </div>\n                </form>\n              </div>\n              <!-- /.box-footer-->\n            </div>\n            <!--/.direct-chat -->\n          </div>\n          <!-- /.col -->\n\n          <div class=\"col-md-6\">\n            <!-- USERS LIST -->\n            <div class=\"box box-danger\">\n              <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Latest Members</h3>\n\n                <div class=\"box-tools pull-right\">\n                  <span class=\"label label-danger\">8 New Members</span>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n                  </button>\n                  <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n                  </button>\n                </div>\n              </div>\n              <!-- /.box-header -->\n              <div class=\"box-body no-padding\">\n                <ul class=\"users-list clearfix\">\n                  <li>\n                    <img src=\"dist/img/user1-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Alexander Pierce</a>\n                    <span class=\"users-list-date\">Today</span>\n                  </li>\n                  <li>\n                    <img src=\"dist/img/user8-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Norman</a>\n                    <span class=\"users-list-date\">Yesterday</span>\n                  </li>\n                  <li>\n                    <img src=\"dist/img/user7-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Jane</a>\n                    <span class=\"users-list-date\">12 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"dist/img/user6-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">John</a>\n                    <span class=\"users-list-date\">12 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"dist/img/user2-160x160.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Alexander</a>\n                    <span class=\"users-list-date\">13 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"dist/img/user5-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Sarah</a>\n                    <span class=\"users-list-date\">14 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"dist/img/user4-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Nora</a>\n                    <span class=\"users-list-date\">15 Jan</span>\n                  </li>\n                  <li>\n                    <img src=\"dist/img/user3-128x128.jpg\" alt=\"User Image\">\n                    <a class=\"users-list-name\" href=\"#\">Nadia</a>\n                    <span class=\"users-list-date\">15 Jan</span>\n                  </li>\n                </ul>\n                <!-- /.users-list -->\n              </div>\n              <!-- /.box-body -->\n              <div class=\"box-footer text-center\">\n                <a href=\"javascript:void(0)\" class=\"uppercase\">View All Users</a>\n              </div>\n              <!-- /.box-footer -->\n            </div>\n            <!--/.box -->\n          </div>\n          <!-- /.col -->\n        </div>\n        <!-- /.row -->\n\n        <!-- TABLE: LATEST ORDERS -->\n        <div class=\"box box-info\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Latest Orders</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table no-margin\">\n                <thead>\n                <tr>\n                  <th>Order ID</th>\n                  <th>Item</th>\n                  <th>Status</th>\n                  <th>Popularity</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td><a href=\"pages/examples/invoice.html\">OR9842</a></td>\n                  <td>Call of Duty IV</td>\n                  <td><span class=\"label label-success\">Shipped</span></td>\n                  <td>\n                    <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\">90,80,90,-70,61,-83,63</div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\n                  <td>Samsung Smart TV</td>\n                  <td><span class=\"label label-warning\">Pending</span></td>\n                  <td>\n                    <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\">90,80,-90,70,61,-83,68</div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\n                  <td>iPhone 6 Plus</td>\n                  <td><span class=\"label label-danger\">Delivered</span></td>\n                  <td>\n                    <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\">90,-80,90,70,-61,83,63</div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\n                  <td>Samsung Smart TV</td>\n                  <td><span class=\"label label-info\">Processing</span></td>\n                  <td>\n                    <div class=\"sparkbar\" data-color=\"#00c0ef\" data-height=\"20\">90,80,-90,70,-61,83,63</div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><a href=\"pages/examples/invoice.html\">OR1848</a></td>\n                  <td>Samsung Smart TV</td>\n                  <td><span class=\"label label-warning\">Pending</span></td>\n                  <td>\n                    <div class=\"sparkbar\" data-color=\"#f39c12\" data-height=\"20\">90,80,-90,70,61,-83,68</div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><a href=\"pages/examples/invoice.html\">OR7429</a></td>\n                  <td>iPhone 6 Plus</td>\n                  <td><span class=\"label label-danger\">Delivered</span></td>\n                  <td>\n                    <div class=\"sparkbar\" data-color=\"#f56954\" data-height=\"20\">90,-80,90,70,-61,83,63</div>\n                  </td>\n                </tr>\n                <tr>\n                  <td><a href=\"pages/examples/invoice.html\">OR9842</a></td>\n                  <td>Call of Duty IV</td>\n                  <td><span class=\"label label-success\">Shipped</span></td>\n                  <td>\n                    <div class=\"sparkbar\" data-color=\"#00a65a\" data-height=\"20\">90,80,90,-70,61,-83,63</div>\n                  </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n            <!-- /.table-responsive -->\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer clearfix\">\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info btn-flat pull-left\">Place New Order</a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default btn-flat pull-right\">View All Orders</a>\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n\n      <div class=\"col-md-4\">\n        <!-- Info Boxes Style 2 -->\n        <div class=\"info-box bg-yellow\">\n          <span class=\"info-box-icon\"><i class=\"ion ion-ios-pricetag-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Inventory</span>\n            <span class=\"info-box-number\">5,200</span>\n\n            <div class=\"progress\">\n              <div class=\"progress-bar\" style=\"width: 50%\"></div>\n            </div>\n            <span class=\"progress-description\">\n                  50% Increase in 30 Days\n                </span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n        <div class=\"info-box bg-green\">\n          <span class=\"info-box-icon\"><i class=\"ion ion-ios-heart-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Mentions</span>\n            <span class=\"info-box-number\">92,050</span>\n\n            <div class=\"progress\">\n              <div class=\"progress-bar\" style=\"width: 20%\"></div>\n            </div>\n            <span class=\"progress-description\">\n                  20% Increase in 30 Days\n                </span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n        <div class=\"info-box bg-red\">\n          <span class=\"info-box-icon\"><i class=\"ion ion-ios-cloud-download-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Downloads</span>\n            <span class=\"info-box-number\">114,381</span>\n\n            <div class=\"progress\">\n              <div class=\"progress-bar\" style=\"width: 70%\"></div>\n            </div>\n            <span class=\"progress-description\">\n                  70% Increase in 30 Days\n                </span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n        <div class=\"info-box bg-aqua\">\n          <span class=\"info-box-icon\"><i class=\"ion-ios-chatbubble-outline\"></i></span>\n\n          <div class=\"info-box-content\">\n            <span class=\"info-box-text\">Direct Messages</span>\n            <span class=\"info-box-number\">163,921</span>\n\n            <div class=\"progress\">\n              <div class=\"progress-bar\" style=\"width: 40%\"></div>\n            </div>\n            <span class=\"progress-description\">\n                  40% Increase in 30 Days\n                </span>\n          </div>\n          <!-- /.info-box-content -->\n        </div>\n        <!-- /.info-box -->\n\n        <div class=\"box box-default\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Browser Usage</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"chart-responsive\">\n                  <canvas id=\"pieChart\" height=\"150\"></canvas>\n                </div>\n                <!-- ./chart-responsive -->\n              </div>\n              <!-- /.col -->\n              <div class=\"col-md-4\">\n                <ul class=\"chart-legend clearfix\">\n                  <li><i class=\"fa fa-circle-o text-red\"></i> Chrome</li>\n                  <li><i class=\"fa fa-circle-o text-green\"></i> IE</li>\n                  <li><i class=\"fa fa-circle-o text-yellow\"></i> FireFox</li>\n                  <li><i class=\"fa fa-circle-o text-aqua\"></i> Safari</li>\n                  <li><i class=\"fa fa-circle-o text-light-blue\"></i> Opera</li>\n                  <li><i class=\"fa fa-circle-o text-gray\"></i> Navigator</li>\n                </ul>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer no-padding\">\n            <ul class=\"nav nav-pills nav-stacked\">\n              <li><a href=\"#\">United States of America\n                <span class=\"pull-right text-red\"><i class=\"fa fa-angle-down\"></i> 12%</span></a></li>\n              <li><a href=\"#\">India <span class=\"pull-right text-green\"><i class=\"fa fa-angle-up\"></i> 4%</span></a>\n              </li>\n              <li><a href=\"#\">China\n                <span class=\"pull-right text-yellow\"><i class=\"fa fa-angle-left\"></i> 0%</span></a></li>\n            </ul>\n          </div>\n          <!-- /.footer -->\n        </div>\n        <!-- /.box -->\n\n        <!-- PRODUCT LIST -->\n        <div class=\"box box-primary\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Recently Added Products</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"remove\"><i class=\"fa fa-times\"></i></button>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <ul class=\"products-list product-list-in-box\">\n              <li class=\"item\">\n                <div class=\"product-img\">\n                  <img src=\"dist/img/default-50x50.gif\" alt=\"Product Image\">\n                </div>\n                <div class=\"product-info\">\n                  <a href=\"javascript:void(0)\" class=\"product-title\">Samsung TV\n                    <span class=\"label label-warning pull-right\">$1800</span></a>\n                  <span class=\"product-description\">\n                        Samsung 32\" 1080p 60Hz LED Smart HDTV.\n                      </span>\n                </div>\n              </li>\n              <!-- /.item -->\n              <li class=\"item\">\n                <div class=\"product-img\">\n                  <img src=\"dist/img/default-50x50.gif\" alt=\"Product Image\">\n                </div>\n                <div class=\"product-info\">\n                  <a href=\"javascript:void(0)\" class=\"product-title\">Bicycle\n                    <span class=\"label label-info pull-right\">$700</span></a>\n                  <span class=\"product-description\">\n                        26\" Mongoose Dolomite Men's 7-speed, Navy Blue.\n                      </span>\n                </div>\n              </li>\n              <!-- /.item -->\n              <li class=\"item\">\n                <div class=\"product-img\">\n                  <img src=\"dist/img/default-50x50.gif\" alt=\"Product Image\">\n                </div>\n                <div class=\"product-info\">\n                  <a href=\"javascript:void(0)\" class=\"product-title\">Xbox One <span\n                      class=\"label label-danger pull-right\">$350</span></a>\n                  <span class=\"product-description\">\n                        Xbox One Console Bundle with Halo Master Chief Collection.\n                      </span>\n                </div>\n              </li>\n              <!-- /.item -->\n              <li class=\"item\">\n                <div class=\"product-img\">\n                  <img src=\"dist/img/default-50x50.gif\" alt=\"Product Image\">\n                </div>\n                <div class=\"product-info\">\n                  <a href=\"javascript:void(0)\" class=\"product-title\">PlayStation 4\n                    <span class=\"label label-success pull-right\">$399</span></a>\n                  <span class=\"product-description\">\n                        PlayStation 4 500GB Console (PS4)\n                      </span>\n                </div>\n              </li>\n              <!-- /.item -->\n            </ul>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer text-center\">\n            <a href=\"javascript:void(0)\" class=\"uppercase\">View All Products</a>\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "./src/app/content/content.component.sass":
/*!************************************************!*\
  !*** ./src/app/content/content.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.sass */ "./src/app/content/content.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>Version</b> 2.4.0\n  </div>\n  <strong>Copyright &copy; 2014-2016 <a href=\"https://adminlte.io\">Almsaeed Studio</a>.</strong> All rights\n  reserved.\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.sass":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/footer/footer.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a href=\"/giaoban\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>GB</b>O</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>Giao Ban</b> Online</span>\n  </a>\n\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <!-- Messages: style can be found in dropdown.less-->\n        <li class=\"dropdown messages-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"label label-success\">4</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 4 messages</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- start message -->\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/avatar.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Support Team\n                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <!-- end message -->\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/avatar.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      AdminLTE Design Team\n                      <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/avatar.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Developers\n                      <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/avatar.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Sales Department\n                      <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <img src=\"assets/dist/img/avatar.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                      Reviewers\n                      <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n          </ul>\n        </li>\n        <!-- Notifications: style can be found in dropdown.less -->\n        <li class=\"dropdown notifications-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-bell-o\"></i>\n            <span class=\"label label-warning\">10</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 10 notifications</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                    page and may cause design problems\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-user text-red\"></i> You changed your username\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">View all</a></li>\n          </ul>\n        </li>\n        <!-- Tasks: style can be found in dropdown.less -->\n        <li class=\"dropdown tasks-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-flag-o\"></i>\n            <span class=\"label label-danger\">9</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 9 tasks</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Design some buttons\n                      <small class=\"pull-right\">20%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\n                           aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">20% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Create a nice theme\n                      <small class=\"pull-right\">40%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\"\n                           aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">40% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Some task I need to do\n                      <small class=\"pull-right\">60%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\"\n                           aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">60% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                      Make beautiful transitions\n                      <small class=\"pull-right\">80%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                      <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\"\n                           aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">80% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">View all tasks</a>\n            </li>\n          </ul>\n        </li>\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"assets/dist/img/avatar.jpg\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\">Truong Duc Huy</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\">\n              <img src=\"assets/dist/img/avatar.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                Truong Duc Huy - Web Developer\n                <small>Member since Nov. 2019</small>\n              </p>\n            </li>\n            <!-- Menu Body -->\n            <li class=\"user-body\">\n              <div class=\"row\">\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Followers</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Sales</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Friends</a>\n                </div>\n              </div>\n              <!-- /.row -->\n            </li>\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n              </div>\n              <div class=\"pull-right\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- Control Sidebar Toggle Button -->\n        <li>\n          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n        </li>\n      </ul>\n    </div>\n\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.sass":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.sass */ "./src/app/header/header.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <!-- Sidebar user panel -->\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"assets/dist/img/avatar.jpg\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>Truong Duc Huy</p>\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n      </div>\n    </div>\n    <!-- search form -->\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n        <span class=\"input-group-btn\">\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n                <i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n      </div>\n    </form>\n    <!-- /.search form -->\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\n      <li class=\"header\">MAIN NAVIGATION</li>\n      <li class=\"active treeview menu-open\">\n        <a href=\"#\">\n          <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"index.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v1</a></li>\n          <li class=\"active\"><a href=\"index2.html\"><i class=\"fa fa-circle-o\"></i> Dashboard v2</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-files-o\"></i>\n          <span>Layout Options</span>\n          <span class=\"pull-right-container\">\n            <span class=\"label label-primary pull-right\">4</span>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/layout/top-nav.html\"><i class=\"fa fa-circle-o\"></i> Top Navigation</a></li>\n          <li><a href=\"pages/layout/boxed.html\"><i class=\"fa fa-circle-o\"></i> Boxed</a></li>\n          <li><a href=\"pages/layout/fixed.html\"><i class=\"fa fa-circle-o\"></i> Fixed</a></li>\n          <li><a href=\"pages/layout/collapsed-sidebar.html\"><i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a></li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"pages/widgets.html\">\n          <i class=\"fa fa-th\"></i> <span>Widgets</span>\n          <span class=\"pull-right-container\">\n            <small class=\"label pull-right bg-green\">new</small>\n          </span>\n        </a>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-pie-chart\"></i>\n          <span>Charts</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/charts/chartjs.html\"><i class=\"fa fa-circle-o\"></i> ChartJS</a></li>\n          <li><a href=\"pages/charts/morris.html\"><i class=\"fa fa-circle-o\"></i> Morris</a></li>\n          <li><a href=\"pages/charts/flot.html\"><i class=\"fa fa-circle-o\"></i> Flot</a></li>\n          <li><a href=\"pages/charts/inline.html\"><i class=\"fa fa-circle-o\"></i> Inline charts</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-laptop\"></i>\n          <span>UI Elements</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/UI/general.html\"><i class=\"fa fa-circle-o\"></i> General</a></li>\n          <li><a href=\"pages/UI/icons.html\"><i class=\"fa fa-circle-o\"></i> Icons</a></li>\n          <li><a href=\"pages/UI/buttons.html\"><i class=\"fa fa-circle-o\"></i> Buttons</a></li>\n          <li><a href=\"pages/UI/sliders.html\"><i class=\"fa fa-circle-o\"></i> Sliders</a></li>\n          <li><a href=\"pages/UI/timeline.html\"><i class=\"fa fa-circle-o\"></i> Timeline</a></li>\n          <li><a href=\"pages/UI/modals.html\"><i class=\"fa fa-circle-o\"></i> Modals</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-edit\"></i> <span>Forms</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/forms/general.html\"><i class=\"fa fa-circle-o\"></i> General Elements</a></li>\n          <li><a href=\"pages/forms/advanced.html\"><i class=\"fa fa-circle-o\"></i> Advanced Elements</a></li>\n          <li><a href=\"pages/forms/editors.html\"><i class=\"fa fa-circle-o\"></i> Editors</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-table\"></i> <span>Tables</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/tables/simple.html\"><i class=\"fa fa-circle-o\"></i> Simple tables</a></li>\n          <li><a href=\"pages/tables/data.html\"><i class=\"fa fa-circle-o\"></i> Data tables</a></li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"pages/calendar.html\">\n          <i class=\"fa fa-calendar\"></i> <span>Calendar</span>\n          <span class=\"pull-right-container\">\n            <small class=\"label pull-right bg-red\">3</small>\n            <small class=\"label pull-right bg-blue\">17</small>\n          </span>\n        </a>\n      </li>\n      <li>\n        <a href=\"pages/mailbox/mailbox.html\">\n          <i class=\"fa fa-envelope\"></i> <span>Mailbox</span>\n          <span class=\"pull-right-container\">\n            <small class=\"label pull-right bg-yellow\">12</small>\n            <small class=\"label pull-right bg-green\">16</small>\n            <small class=\"label pull-right bg-red\">5</small>\n          </span>\n        </a>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-folder\"></i> <span>Examples</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"pages/examples/invoice.html\"><i class=\"fa fa-circle-o\"></i> Invoice</a></li>\n          <li><a href=\"pages/examples/profile.html\"><i class=\"fa fa-circle-o\"></i> Profile</a></li>\n          <li><a href=\"pages/examples/login.html\"><i class=\"fa fa-circle-o\"></i> Login</a></li>\n          <li><a href=\"pages/examples/register.html\"><i class=\"fa fa-circle-o\"></i> Register</a></li>\n          <li><a href=\"pages/examples/lockscreen.html\"><i class=\"fa fa-circle-o\"></i> Lockscreen</a></li>\n          <li><a href=\"pages/examples/404.html\"><i class=\"fa fa-circle-o\"></i> 404 Error</a></li>\n          <li><a href=\"pages/examples/500.html\"><i class=\"fa fa-circle-o\"></i> 500 Error</a></li>\n          <li><a href=\"pages/examples/blank.html\"><i class=\"fa fa-circle-o\"></i> Blank Page</a></li>\n          <li><a href=\"pages/examples/pace.html\"><i class=\"fa fa-circle-o\"></i> Pace Page</a></li>\n        </ul>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-share\"></i> <span>Multilevel</span>\n          <span class=\"pull-right-container\">\n            <i class=\"fa fa-angle-left pull-right\"></i>\n          </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n          <li class=\"treeview\">\n            <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One\n              <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n            </a>\n            <ul class=\"treeview-menu\">\n              <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two</a></li>\n              <li class=\"treeview\">\n                <a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Two\n                  <span class=\"pull-right-container\">\n                    <i class=\"fa fa-angle-left pull-right\"></i>\n                  </span>\n                </a>\n                <ul class=\"treeview-menu\">\n                  <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level Three</a></li>\n                </ul>\n              </li>\n            </ul>\n          </li>\n          <li><a href=\"#\"><i class=\"fa fa-circle-o\"></i> Level One</a></li>\n        </ul>\n      </li>\n      <li><a href=\"https://adminlte.io/docs\"><i class=\"fa fa-book\"></i> <span>Documentation</span></a></li>\n      <li class=\"header\">LABELS</li>\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-red\"></i> <span>Important</span></a></li>\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-yellow\"></i> <span>Warning</span></a></li>\n      <li><a href=\"#\"><i class=\"fa fa-circle-o text-aqua\"></i> <span>Information</span></a></li>\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.sass":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.sass */ "./src/app/sidebar/sidebar.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/billhuy/Desktop/full-stack/giaoban/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map