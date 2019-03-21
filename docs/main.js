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

module.exports = "<body class=\"hold-transition skin-blue sidebar-mini\">\n  <div class=\"wrapper\">\n    <app-header></app-header>\n    <app-sidebar></app-sidebar>\n    <app-content></app-content>\n    <app-footer></app-footer>\n    <app-control-sidebar></app-control-sidebar>\n</div>\n</body>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./control-sidebar/control-sidebar.component */ "./src/app/control-sidebar/control-sidebar.component.ts");










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
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["ControlSidebarComponent"]
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

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Danh sách báo cáo\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- Info boxes -->\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"box\">\n          <div class=\"box-header with-border\">\n            <h3 class=\"box-title\">Danh sách báo cáo đã trình chiếu</h3>\n\n          </div>\n          <!-- ./box-body -->\n        </div>\n        <!-- /.box -->\n      </div>\n      <!-- /.col -->\n    </div>\n    <!-- /.row -->\n  </section>\n  <!-- /.content -->\n</div>\n"

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

/***/ "./src/app/control-sidebar/control-sidebar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/control-sidebar/control-sidebar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Create the tabs -->\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n    <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n  </ul>\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <!-- Home tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n              <p>Will be 23 on April 24th</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n              <p>New phone +1(800)555-1234</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n              <p>nora@example.com</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n              <p>Execution time 5 seconds</p>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Custom Template Design\n              <span class=\"label label-danger pull-right\">70%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Update Resume\n              <span class=\"label label-success pull-right\">95%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Laravel Integration\n              <span class=\"label label-warning pull-right\">50%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Back End Framework\n              <span class=\"label label-primary pull-right\">68%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n    </div>\n    <!-- /.tab-pane -->\n\n    <!-- Settings tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n      <form method=\"post\">\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Report panel usage\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Some information about this general settings option\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Allow mail redirect\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Other sets of options are available\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Expose author name in posts\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Allow the user to show his name in blog posts\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Show me as online\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Turn off notifications\n            <input type=\"checkbox\" class=\"pull-right\">\n          </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Delete chat history\n            <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n          </label>\n        </div>\n        <!-- /.form-group -->\n      </form>\n    </div>\n    <!-- /.tab-pane -->\n  </div>\n</aside>\n"

/***/ }),

/***/ "./src/app/control-sidebar/control-sidebar.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/control-sidebar/control-sidebar.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wtc2lkZWJhci9jb250cm9sLXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/control-sidebar/control-sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/control-sidebar/control-sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: ControlSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlSidebarComponent", function() { return ControlSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ControlSidebarComponent = /** @class */ (function () {
    function ControlSidebarComponent() {
    }
    ControlSidebarComponent.prototype.ngOnInit = function () {
    };
    ControlSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control-sidebar',
            template: __webpack_require__(/*! ./control-sidebar.component.html */ "./src/app/control-sidebar/control-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./control-sidebar.component.sass */ "./src/app/control-sidebar/control-sidebar.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ControlSidebarComponent);
    return ControlSidebarComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>Version</b> 2.4.0\n  </div>\n  <strong>Copyright &copy; 2019 <a href=\"https://truongduchuy.com\">Hồ sơ điện tử</a>.</strong> All rights\n  reserved.\n</footer>\n"

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

module.exports = "<aside class=\"main-sidebar\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <!-- Sidebar user panel -->\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"assets/dist/img/avatar.jpg\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>Truong Duc Huy</p>\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n      </div>\n    </div>\n    <!-- search form -->\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n        <span class=\"input-group-btn\">\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n                <i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n      </div>\n    </form>\n    <!-- /.search form -->\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\n      <li class=\"header\">QUẢN LÝ BÁO CÁO</li>\n      <li class=\"active treeview menu-open\">\n        <a href=\"#\">\n          <i class=\"fa fa-home\"></i>\n          <span>Danh sách báo cáo</span>\n        </a>\n      </li>\n      <li class=\"header\">QUẢN LÝ HẠNG MỤC</li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-list\"></i>\n          <span>Danh sách hạng mục</span>\n        </a>\n      </li>\n      <li class=\"header\">QUẢN LÝ TRÌNH CHIẾU</li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-slideshare\"></i>\n          <span>Tạo mới trình chiếu</span>\n        </a>\n      </li>\n      <li class=\"header\">QUẢN LÝ NGƯỜI DÙNG</li>\n      <li class=\"treeview\">\n        <a href=\"#\">\n          <i class=\"fa fa-users\"></i>\n          <span>Tạo mới người dùng</span>\n        </a>\n      </li>\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

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