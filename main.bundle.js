webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-profile\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#\">\n                            <img class=\"img\" src=\"../assets/img/profile_min.jpg\" />\n                        </a>\n                    </div>\n\n                    <div class=\"content\">\n                        <h6 class=\"category text-gray\"><i class=\"fa fa-android\"></i> Android | <i class=\"fa fa-apple\"></i> iOS |  <i class=\"fa fa-wrench\"></i> Full Stack Web Developer</h6>\n                        <h4 class=\"card-title\">Khureltsooj Davaatseren</h4>\n                        <p class=\"card-content\">\n                            Innovative Android Software Engineer with 3 years of experience in full-stack application development for mobile and web platforms. \n                            Skilled at identifying opportunities to improve application performance through creative application of new technologies and principles.\n                        </p>\n                        \n                        <a class=\"btn btn-round btn-danger\" href=\"https://mail.google.com/mail/?view=cm&to=khureltsooj.cj@gmail.com\" target=\"_blank\">\n                            <i class=\"fa fa-envelope\"></i>\n                        </a>\n                        <a class=\"btn btn-round btn-info\" href=\"https://www.linkedin.com/in/khureltsooj-davaatseren/\" target=\"_blank\">\n                            <i class=\"fa fa-linkedin\"></i>\n                        </a>\n                        <a class=\"btn btn-round btn-default\" href=\"https://github.com/LearnerMN\" target=\"_blank\">\n                            <i class=\"fa fa-github\"></i>\n                        </a>\n                        <a class=\"btn btn-round btn-warning\" href=\"http://learnermn.github.io/\" target=\"_blank\">\n                            <i class=\"fa fa-rss\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>        "

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-color='purple' data-image=\"\">\n      <app-sidebar></app-sidebar>\n      <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/app-side.jpg)\"></div>\n  </div>\n  <div class=\"main-panel\">\n      <app-navbar></app-navbar>\n      <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__experience_experience_component__ = __webpack_require__("../../../../../src/app/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__awards_awards_component__ = __webpack_require__("../../../../../src/app/awards/awards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__education_education_component__ = __webpack_require__("../../../../../src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__awards_awards_component__["a" /* AwardsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__education_education_component__["a" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* appRoutes */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__experience_experience_component__ = __webpack_require__("../../../../../src/app/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__awards_awards_component__ = __webpack_require__("../../../../../src/app/awards/awards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__education_education_component__ = __webpack_require__("../../../../../src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");








var MY_ROUTES = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'experience', component: __WEBPACK_IMPORTED_MODULE_1__experience_experience_component__["a" /* ExperienceComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__["a" /* ProjectsComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_4__skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'awards', component: __WEBPACK_IMPORTED_MODULE_5__awards_awards_component__["a" /* AwardsComponent */] },
    { path: 'education', component: __WEBPACK_IMPORTED_MODULE_6__education_education_component__["a" /* EducationComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */] },
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];
var appRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(MY_ROUTES);


/***/ }),

/***/ "../../../../../src/app/awards/awards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/awards/awards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\" *ngFor=\"let award of awards\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"blue\">\n                        <h4 class=\"title\">{{award.title}}</h4>\n                        <p>{{award.bio}}</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <p>\n                            {{award.description}}\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/awards/awards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AWARDS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AWARDS = [
    { title: '1st place', color: "green", bio: 'ROBOCODE Mongolia Cup, 2013', description: 'Robocode is a programming game where the goal is to code a robot to compete against other robots in a battle arena. ' },
    { title: 'Best Product', color: "green", bio: 'National Creation App Contest, 2015', description: 'developed IQ game that to solve boat and matches problem in the multi platform using Cocos2d-x game engine.' },
    { title: '2nd place', color: "green", bio: 'Unimedia Smartphone Apps Contest, 2014', description: 'I teamed up with two people. We developed board game, called Pill Heals using Cocos2d-x game Engine for iOS and Android platform.' },
    { title: 'Special Prize', color: "green", bio: 'NAPROCK 6th International programming contest', description: 'Participated the Naprock programming contest 2014 in Japan and won Special Prize.' },
    { title: 'Smart Mongolia App Contest', color: "green", bio: '3rd place, Dec 2014, Mongolia', description: 'created board game in Android platform using Cocos2d-x Game Engine.' },
    { title: 'Special Prize', color: "green", bio: 'NAPROCK 5th International programming contest', description: 'Participated the Naprock 5th international programming contest 2013 in the Japan and won Special Prize.' },
    { title: '3rd place with team', color: "green", bio: 'National Programming Contest, 2013', description: 'National programming contest is the premiere global programming competition conducted by and for the mongolian universities.' },
    { title: 'Got student scholarship', color: "green", bio: 'Altain khuder LLC, 2014', description: 'Altain Khuder is a Mongolian registered mining and mineral exploration company.' },
    { title: 'Got student scholarship ', color: "green", bio: 'Toyota-Must, 2014', description: '“Toyota – MUST” study fund founded by the donation of Toyota Motor Corp. and it awards to outstanding students to promote their academic achievements. https://goo.gl/9sLHHV' },
];
var AwardsComponent = /** @class */ (function () {
    function AwardsComponent() {
    }
    AwardsComponent.prototype.ngOnInit = function () {
        this.awards = AWARDS.filter(function (item) { return item; });
    };
    AwardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-awards',
            template: __webpack_require__("../../../../../src/app/awards/awards.component.html"),
            styles: [__webpack_require__("../../../../../src/app/awards/awards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AwardsComponent);
    return AwardsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["b" /* SidebarComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" ata-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n      </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n  <a href=\"#\" class=\"simple-text\">\n      <div class=\"logo-img\">\n          <img class=\"img-rounded\" src=\"/assets/img/cj.png\"/>\n      </div>\n      Khureltsooj\n  </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div class=\"nav-container\">\n      <ul class=\"nav\">\n          <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n              <a  [routerLink]=\"[menuItem.path]\">\n                  <i class=\"material-icons\">{{menuItem.icon}}</i>\n                  <p>{{menuItem.title}}</p>\n              </a>\n          </li>\n      </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: 'about', title: 'About', icon: 'person', class: '' },
    { path: 'experience', title: 'Experience', icon: 'center_focus_strong', class: '' },
    { path: 'projects', title: 'Projects', icon: 'dashboard', class: '' },
    { path: 'skills', title: 'Skills', icon: 'flash_on', class: '' },
    { path: 'awards', title: 'Awards', icon: 'grade', class: '' },
    { path: 'education', title: 'Education', icon: 'school', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              <div class=\"card-header\" data-background-color=\"red\">\n                <i class=\"material-icons\">email</i>\n              </div>\n              <div class=\"card-content\">\n                <p class=\"category\">Khureltsooj</p>\n                <h3 class=\"title\">CJ</h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                    \n                  <i class=\"material-icons text-danger\">link</i> <a href=\"https://mail.google.com/mail/?view=cm&to=khureltsooj.cj@gmail.com\" target=\"_blank\">khureltsooj.cj@gmail.com</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            \n            <div class=\"card card-stats\">\n              <a href=\"https://www.linkedin.com/in/khureltsooj-davaatseren/\" target=\"_blank\">\n                <div class=\"card-header\" data-background-color=\"blue\">\n                    <i class=\"fa fa-linkedin\"></i>\n                  </div>\n              </a>\n              <div class=\"card-content\">\n                <p class=\"category\">Khureltsooj</p>\n                <h3 class=\"title\"><small>Davaatseren</small></h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-danger\">link</i> <a href=\"https://www.linkedin.com/in/khureltsooj-davaatseren/\" target=\"_blank\">linkedin/khureltsooj-davaatseren</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n            <div class=\"card card-stats\">\n              \n              <a href=\"https://github.com/LearnerMN\" target=\"_blank\">\n                <div class=\"card-header\" data-background-color=\"black\">\n                  <i class=\"fa fa-github\"></i>\n                </div>\n              </a>\n              <div class=\"card-content\">\n                <p class=\"category\">Khureltsooj</p>\n                <h3 class=\"title\"><small>LearnerMN</small></h3>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"stats\">\n                  <i class=\"material-icons text-danger\">link</i> <a href=\"https://github.com/LearnerMN\" target=\"_blank\">https://github.com/LearnerMN</a>\n                </div>\n              </div>\n            </div>\n          </div>  \n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/education/education.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <h4 class=\"title\">Maharishi University of Management</h4>\n                        <a target=\"_blank\" href=\"https://mscs.mum.edu/\">Master of Science in Computer Science, Fairfield, IA, US</a>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4>APR 2017 - APR 2020</h4>\n                        <p>\n                            <strong>Key Courses:</strong> \n                            <span class=\"badge brand-secondary\">Web Programming</span>\n                            <span class=\"badge badge-secondary\">Modern Web Applications</span>\n                            \n                            <span class=\"badge badge-info\">Algorithms</span>\n                            <span class=\"badge brand-primary\">Big Data</span>\n                            <span class=\"badge badge-secondary\">Parallel programming</span>\n                        </p>\n                        <br>\n                        <p>\n                            (In progress via distance education; expected completion 04/2020)\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" data-background-color=\"blue\">\n                            <h4 class=\"title\">Mongolian University of Science and Technology</h4>\n                            <a target=\"_blank\" href=\"https://mscs.mum.edu/\">Bachelor of Software Engineering, Ulaanbaatar, Mongolia</a>\n                        </div>\n                        <div class=\"card-content\">\n                            <h4>AUG 2012 - JUN 2015</h4>\n                            <p>\n                                <strong>Key Courses:</strong> \n                                <span class=\"badge badge-primary\">Software Design & Architecture</span>\n                                <span class=\"badge brand-secondary\">Software Construction</span>\n                                <span class=\"badge brand-secondary\">Software Quality Assurance for Wireless Mobile Devices</span>\n                                <span class=\"badge brand-secondary\">Internet Programming</span>\n                                <span class=\"badge brand-secondary\">Principles of Programming Languages</span>\n                                <span class=\"badge brand-secondary\">Software Requirements Analysis</span>\n                                <span class=\"badge brand-secondary\">Computer Architecture & Assembler</span>\n                                <span class=\"badge brand-secondary\">Software Project Management</span>\n                                \n                            </p>\n                        </div>\n                    </div>\n                </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-education',
            template: __webpack_require__("../../../../../src/app/education/education.component.html"),
            styles: [__webpack_require__("../../../../../src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/experience/experience.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card \">\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <h4 class=\"title\">Software Engineer</h4>\n                        <p class=\"category\">Unimedia Solutions LLC /2015-2017/</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <p><em class=\"grey-text\">\n                            Unimedia Solutions LLC (subsidiary of Unimedia Inc., Tokyo Japan). Company creates web, web system and mobile application, headquartered in Japan.<br>\n                            Coordinated development and implementation of a number of new applications, features, and enhancements.\n                        </em></p>\n                        <ul>\n                          <li>Delivered a new data input allowing users to claim and submit tasks in a client crowdsourcing system</li>\n                          <li>Built the Naisyoku-Ichiba job market for internal job postings, built in both Android and iOS</li>\n                          <li>Created an Android and iOS version of the data input application, allowing mobile access.</li>\n                          <li>Drove development of multiple games, including a logic to puzzle game and a game recording API.</li>\n                          <li>Designed a video player for Android</li>\n                          <li>Innovated an Android browser allowing easy search while navigating other apps.</li>\n                          <li>Improved website speed for the crowdsourcing system through extensive testing and optimization</li>\n                          <li>Introduces a more efficient method for checking mobile web systems before release by developing a scenario test.</li>\n                        </ul>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <span class=\"badge\">Android</span>\n                            <span class=\"badge\">iOS</span>\n                            <span class=\"badge\">Ruby on Rails</span>\n                            <span class=\"badge\">MySQL</span>\n                            <span class=\"badge\">Git</span>\n                            <span class=\"badge\">Selenium</span>\n                            <span class=\"badge\">Capybara</span>\n                            <span class=\"badge\">RSpec</span>\n                            <span class=\"badge\">AWS 3</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card \">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <h4 class=\"title\">Software Engineer</h4>\n                        <p class=\"category\">Game Mine /MAY 2015 - DEC 2015/</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <p><em class=\"grey-text\">\n                            Partnered with small team to implement mining Desktop Application. \n                        </em></p>\n                        <ul>\n                            <li>Developed and designed desktop application using WPF C#, DevExpress, MVVM architecture on the .NET framework. </li>\n                            <li>Contributed Android application that to show analytics/REST API/ for users.</li>\n                        </ul>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <span class=\"badge\">WPF</span>\n                            <span class=\"badge\">.NET</span>\n                            <span class=\"badge\">DevExpress</span>\n                            <span class=\"badge\">MySQL</span>\n                            <span class=\"badge\">SQLITE</span>\n                            <span class=\"badge\">Android</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__("../../../../../src/app/experience/experience.component.html"),
            styles: [__webpack_require__("../../../../../src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.disabled {\n    pointer-events: none;\n    cursor: default;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\" *ngFor=\"let project of projects\">\n                <div class=\"card\">\n                    <div class=\"card-header-image\" data-background-color=\"black\">\n                        <img class=\"card-img-top\" src=\"assets/img/projects/{{project.img}}\" alt=\"Card image\">\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"title\">{{project.title}}</h4>\n                        <p class=\"category\">{{project.description}}</p>\n                        \n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-right\">\n                                <a class=\"btn {{ link.color }} {{link.path == '#' ? 'disabled' : ''}}\" *ngFor=\"let link of project.links\" href=\"{{link.path}}\" target=\"_blank\">\n                                    <i class=\"{{link.icon}}\"></i>\n                                </a>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            {{project.technologies.join(\", \")}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PROJECT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PROJECT = [
    {
        title: "Crowdjob",
        img: "crowdjob.png",
        description: "Participated development of crowd working platform at Unimedia.",
        links: [
            {
                path: "https://www.crowd-job.com/",
                icon: "fa fa-external-link",
                color: "btn-warning"
            }
        ],
        technologies: ["Ruby on Rails", "MySQL", "AWS"]
    },
    {
        title: "Choimado",
        img: "choimado.png",
        description: "Small window based, easy to use, feature rich floating browser, at Unimedia",
        links: [
            {
                path: "https://play.google.com/store/apps/details?id=jp.unimedia.browser",
                icon: "fa fa-android",
                color: "btn-danger"
            }
        ],
        technologies: ["Android", "AWS", "Ads", "Google analytics"]
    },
    {
        title: "Just a bit",
        img: "justabit.png",
        description: "Mobile apps for a client of Data Input side in crowdsourcing system, at Unimedia",
        links: [
            {
                path: "#",
                icon: "fa fa-apple",
                color: "btn-info"
            },
            {
                path: "#",
                icon: "fa fa-android",
                color: "btn-danger"
            }
        ],
        technologies: ["Android", "iOS", "Ruby on Rails", "AWS"]
    },
    {
        title: "Naishyoku Admin",
        img: "android_naishyoku_admin.png",
        description: "Business management service Aedes provided by the job market, at Unimedia",
        links: [
            {
                path: "https://itunes.apple.com/jp/app/%E5%BA%97%E8%88%97%E6%8B%85%E5%BD%93%E8%80%85%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AEaedes-admin/id1154430899?l=en",
                icon: "fa fa-apple",
                color: "btn-info"
            },
            {
                path: "https://play.google.com/store/apps/details?id=jp.aedes.store",
                icon: "fa fa-android",
                color: "btn-danger"
            }
        ],
        technologies: ["Android", "iOS", "Web-based", "QRCode"]
    },
    {
        title: "Naishyoku Member",
        img: "naishyoku_user.png",
        description: "For the members of Aedes, employer to connect employee, at Unimedia",
        links: [
            {
                path: "https://itunes.apple.com/cz/app/aedes%E3%83%9E%E3%82%A4%E3%83%9A%E3%83%BC%E3%82%B8-%E5%86%85%E8%81%B7%E3%81%8C%E3%82%82%E3%81%A3%E3%81%A8%E6%A5%BD%E3%81%97%E3%81%8F-%E3%82%82%E3%81%A3%E3%81%A8%E4%BE%BF%E5%88%A9%E3%81%AB/id1156018178",
                icon: "fa fa-apple",
                color: "btn-info"
            },
            {
                path: "https://play.google.com/store/apps/details?id=jp.aedes.member",
                icon: "fa fa-android",
                color: "btn-danger"
            }
        ],
        technologies: ["Android", "iOS", "Firebase Notification", "Web-based"]
    },
    {
        title: "Trump Wall Game",
        img: "trump_wall.png",
        description: "Arcade game for iOS and Android platform,  at Unimedia",
        links: [
            {
                path: "#",
                icon: "fa fa-apple",
                color: "btn-info"
            },
            {
                path: "https://play.google.com/store/apps/details?id=mn.unimedia.TrumpsWalld",
                icon: "fa fa-android",
                color: "btn-danger"
            }
        ],
        technologies: ["Cocos2d-x", "iOS", "Android", "FB API"]
    },
    {
        title: "Nba Fantasy",
        img: "nba_fantasy.png",
        description: "I teamed up with GB. We innovated NBA daily fantasy.",
        links: [
            {
                path: "#",
                icon: "fa fa-android",
                color: "btn-danger"
            },
            {
                path: "#",
                icon: "fa fa-github",
                color: "btn-default"
            },
        ],
        technologies: ["Laravel", "Angular 2+", "Android", "MySQL", "Vagrant"]
    },
    {
        title: "Chaton",
        img: "chaton.png",
        description: "Teamed up with Muugii and developed online chating application.",
        links: [
            {
                path: "https://github.com/CS572-MWA/",
                icon: "fa fa-github",
                color: "btn-default"
            },
            {
                path: "http://chaton.gq/",
                icon: "fa fa-external-link",
                color: "btn-warning"
            }
        ],
        technologies: ["Angular 5", "Redux", "Express", "MongoDB", "Socket.io"]
    },
    {
        title: "Pill Heals",
        img: "pill-heals.png",
        description: "Teamed up with 2 people. We developed board game for the iOS and Android.",
        links: [
            {
                path: "#",
                icon: "fa fa-apple",
                color: "btn-info"
            },
            {
                path: "#",
                icon: "fa fa-android",
                color: "btn-danger"
            }
        ],
        technologies: ["Cocos2d-x", "Android", "iOS", "PHP", "MySQL"]
    },
    {
        title: "Negj",
        img: "negj.png",
        description: "The free Quiz App to win real prizes such as $, discount cards for iOS and Android.",
        links: [
            {
                path: "#",
                icon: "fa fa-apple",
                color: "btn-info"
            },
            {
                path: "#",
                icon: "fa fa-android",
                color: "btn-danger"
            }
        ],
        technologies: ["iOS", "Android", "Ruby on Rails", "MySQL", "AWS"]
    },
    {
        title: "Evaluation Analyzer",
        img: "ea.png",
        description: "For mine engineers to design, evaluate and maintain daily mine operations.",
        links: [
            {
                path: "http://gamemine.mn/",
                icon: "fa fa-external-link",
                color: "btn-warning"
            }
        ],
        technologies: ["WPF", "MySQL", ".NET", "DevExpress"]
    },
    {
        title: "Library System",
        img: "library.png",
        description: "Implemented an android app to provide the functionality of a library system.",
        links: [
            {
                path: "#",
                icon: "fa fa-github",
                color: "btn-default"
            }
        ],
        technologies: ["Android", "Firebase Realtime Database"]
    },
    {
        title: "Puzzle Game",
        img: "puzzle.png",
        description: "Clone IQ game of boat and matches problems on the cross platform.",
        links: [
            {
                path: "#",
                icon: "fa fa-github",
                color: "btn-default"
            }
        ],
        technologies: ["Cocos2d-x", "Android", "iOS", "Desktop"]
    },
];
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projects = PROJECT.filter(function (item) { return item; });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\" *ngFor=\"let skill of skills\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                      <!-- <i *ngIf=\"skill.icon != 'apple'\" class=\"material-icons\">{{skill.icon}}</i> -->\n                      <i class=\"{{skill.icon}}\"></i>\n                    </div>\n                    <div class=\"card-content\">\n                        <h3 class=\"title\">{{skill.title}}</h3>\n                        <div class=\"card\">\n                            <div class=\"card-content\">\n                                <div class=\"row text-center\">\n                                    <div class=\"xod col-lg-1 col-md-2 col-sm-2\" *ngFor=\"let item of skill.list\"><img alt=\"\" src=\"{{item.img}}\" class=\"responsive-img\">{{item.name}}</div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SKILLS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SKILLS = [
    {
        title: "Languages",
        icon: "fa fa-globe",
        list: [
            { name: "C++", img: "./assets/img/logos/c-plus-plus-logo.png" },
            { name: "Java", img: "./assets/img/logos/java.png" },
            { name: "JavaScript", img: "./assets/img/logos/js-logo.png" },
            { name: "TypeScript", img: "./assets/img/logos/typescript.png" },
            { name: "PHP", img: "./assets/img/logos/php.png" },
            { name: "Swift", img: "./assets/img/logos/swift.png" },
            { name: "Obj-C", img: "./assets/img/logos/objC.png" },
            { name: "Ruby", img: "./assets/img/logos/ruby.png" },
            { name: "Python", img: "./assets/img/logos/python.png" },
            { name: "HTML5", img: "./assets/img/logos/html5.png" },
            { name: "CSS3", img: "./assets/img/logos/css3.png" },
            { name: "SQL", img: "./assets/img/logos/sql.png" },
        ]
    },
    {
        title: "Android",
        icon: "fa fa-android",
        list: [
            { name: "Android Studio", img: "./assets/img/logos/android_studio.png" },
            { name: "Dagger 2", img: "./assets/img/logos/dagger.png" },
            { name: "Event Bus", img: "./assets/img/logos/event-bus.png" },
            { name: "RxJava", img: "./assets/img/logos/rx-java.png" },
            { name: "Retrofit", img: "./assets/img/logos/retrofit.png" },
            { name: "Glide", img: "./assets/img/logos/glide.png" },
            { name: "Butterknife", img: "./assets/img/logos/butterknife.png" },
            { name: "Espresso", img: "./assets/img/logos/espresso.png" },
            { name: "Firebase", img: "./assets/img/logos/firebase.png" },
            { name: "Realm", img: "./assets/img/logos/realm.png" },
            { name: "SQLite", img: "./assets/img/logos/sqlite.png" },
            { name: "Leak Canary", img: "./assets/img/logos/leakcanary.png" },
            { name: "MVVM Data Binding", img: "./assets/img/logos/data-binding.png" },
            { name: "Architecture Component", img: "./assets/img/logos/arch_comp.png" },
            { name: "MVP Architecture", img: "./assets/img/logos/mvp.png" },
        ]
    },
    {
        title: "iOS",
        icon: "fa fa-apple",
        list: [
            { name: "XCode", img: "./assets/img/logos/xcode.png" },
            { name: "CocoaPods", img: "./assets/img/logos/cocoapods.png" },
            { name: "XCTest", img: "./assets/img/logos/xctest.png" },
            { name: "Alamofire", img: "./assets/img/logos/alamofire.png" },
            { name: "AFNetworking", img: "./assets/img/logos/afn.png" },
            { name: "Core Data", img: "./assets/img/logos/core-data.png" },
            { name: "Realm", img: "./assets/img/logos/realm.png" },
            { name: "SQLite", img: "./assets/img/logos/sqlite.png" },
        ]
    },
    {
        title: "Frameworks",
        icon: "fa fa-briefcase",
        list: [
            { name: "Angular 5", img: "./assets/img/logos/angular.png" },
            { name: "Redux", img: "./assets/img/logos/redux.png" },
            { name: "Express", img: "./assets/img/logos/express.png" },
            { name: "Laravel", img: "./assets/img/logos/laravel.png" },
            { name: "Ruby on Rails", img: "./assets/img/logos/rails.png" },
            { name: "Node.js", img: "./assets/img/logos/nodejs.png" },
            { name: "Bootstrap", img: "./assets/img/logos/bootstrap.png" },
            { name: "Materialize", img: "./assets/img/logos/materialize.png" },
            { name: "Foundation", img: "./assets/img/logos/foundation.png" },
            { name: "UIKit", img: "./assets/img/logos/uikit.png" },
        ]
    },
    {
        title: "Game Engine",
        icon: "fa fa-gamepad",
        list: [
            { name: "Cocos2d-x", img: "./assets/img/logos/cocos2d-x.png" },
            { name: "Cocos", img: "./assets/img/logos/cocos.png" },
            { name: "Cocos Studio", img: "./assets/img/logos/cocos-studio.png" }
        ]
    },
    {
        title: "Tools",
        icon: "fa fa-wrench",
        list: [
            { name: "Vagrant", img: "./assets/img/logos/vagrant.png" },
            { name: "Laravel Homestead", img: "./assets/img/logos/homestead.png" },
            { name: "Redmine", img: "./assets/img/logos/redmine.png" },
            { name: "Git", img: "./assets/img/logos/git.png" },
            { name: "Appium", img: "./assets/img/logos/appium.png" },
        ]
    },
    {
        title: "Libraries",
        icon: "fa fa-th-list",
        list: [
            { name: "jQuery", img: "./assets/img/logos/jquery.png" },
            { name: "FabricJS", img: "./assets/img/logos/fabric.png" },
            { name: "Rspec", img: "./assets/img/logos/rspec.png" },
            { name: "Capybara", img: "./assets/img/logos/capybara.png" },
            { name: "Selenium", img: "./assets/img/logos/selenium.png" }
        ]
    },
];
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.skills = SKILLS.filter(function (item) { return item; });
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map