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
/* harmony import */ var _sound_home_sound_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound-home/sound-home.component */ "./src/app/sound-home/sound-home.component.ts");
/* harmony import */ var _video_home_video_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-home/video-home.component */ "./src/app/video-home/video-home.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    {
        path: 'sound',
        component: _sound_home_sound_home_component__WEBPACK_IMPORTED_MODULE_3__["SoundHomeComponent"],
    },
    {
        path: 'video',
        component: _video_home_video_home_component__WEBPACK_IMPORTED_MODULE_4__["VideoHomeComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
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

module.exports = "<router-outlet></router-outlet>\n"

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
/*! exports provided: hljsLanguages, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _sound_home_sound_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sound-home/sound-home.component */ "./src/app/sound-home/sound-home.component.ts");
/* harmony import */ var _canvas_chart_canvas_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./canvas-chart/canvas-chart.component */ "./src/app/canvas-chart/canvas-chart.component.ts");
/* harmony import */ var _sound_intro_sound_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sound-intro/sound-intro.component */ "./src/app/sound-intro/sound-intro.component.ts");
/* harmony import */ var _sound_square_wave_sound_square_wave_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sound-square-wave/sound-square-wave.component */ "./src/app/sound-square-wave/sound-square-wave.component.ts");
/* harmony import */ var _sound_sawtooth_wave_sound_sawtooth_wave_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sound-sawtooth-wave/sound-sawtooth-wave.component */ "./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.ts");
/* harmony import */ var _sound_simple_demo_sound_simple_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sound-simple-demo/sound-simple-demo.component */ "./src/app/sound-simple-demo/sound-simple-demo.component.ts");
/* harmony import */ var _sound_sin_form_sound_sin_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sound-sin-form/sound-sin-form.component */ "./src/app/sound-sin-form/sound-sin-form.component.ts");
/* harmony import */ var _sound_noise_wave_sound_noise_wave_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sound-noise-wave/sound-noise-wave.component */ "./src/app/sound-noise-wave/sound-noise-wave.component.ts");
/* harmony import */ var _toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toggle-button/toggle-button.component */ "./src/app/toggle-button/toggle-button.component.ts");
/* harmony import */ var ngx_mathjax__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-mathjax */ "./node_modules/ngx-mathjax/fesm5/ngx-mathjax.js");
/* harmony import */ var _sound_square_fourier_sound_square_fourier_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sound-square-fourier/sound-square-fourier.component */ "./src/app/sound-square-fourier/sound-square-fourier.component.ts");
/* harmony import */ var _d3chart_d3chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./d3chart/d3chart.component */ "./src/app/d3chart/d3chart.component.ts");
/* harmony import */ var _sound_player_sound_player_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sound-player/sound-player.component */ "./src/app/sound-player/sound-player.component.ts");
/* harmony import */ var _sound_pass_filter_sound_pass_filter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sound-pass-filter/sound-pass-filter.component */ "./src/app/sound-pass-filter/sound-pass-filter.component.ts");
/* harmony import */ var _sound_kick_wave_sound_kick_wave_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sound-kick-wave/sound-kick-wave.component */ "./src/app/sound-kick-wave/sound-kick-wave.component.ts");
/* harmony import */ var _sound_snare_wave_sound_snare_wave_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sound-snare-wave/sound-snare-wave.component */ "./src/app/sound-snare-wave/sound-snare-wave.component.ts");
/* harmony import */ var _sound_piano_sound_piano_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sound-piano/sound-piano.component */ "./src/app/sound-piano/sound-piano.component.ts");
/* harmony import */ var _sound_harmonics_sound_harmonics_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sound-harmonics/sound-harmonics.component */ "./src/app/sound-harmonics/sound-harmonics.component.ts");
/* harmony import */ var _sound_title_sound_title_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sound-title/sound-title.component */ "./src/app/sound-title/sound-title.component.ts");
/* harmony import */ var _sound_wapi_intro_sound_wapi_intro_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sound-wapi-intro/sound-wapi-intro.component */ "./src/app/sound-wapi-intro/sound-wapi-intro.component.ts");
/* harmony import */ var _sound_wapi_oscillator_sound_wapi_oscillator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sound-wapi-oscillator/sound-wapi-oscillator.component */ "./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.ts");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _wave_background_wave_background_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./wave-background/wave-background.component */ "./src/app/wave-background/wave-background.component.ts");
/* harmony import */ var _sound_demo_chain_sound_demo_chain_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./sound-demo-chain/sound-demo-chain.component */ "./src/app/sound-demo-chain/sound-demo-chain.component.ts");
/* harmony import */ var _sound_questions_sound_questions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sound-questions/sound-questions.component */ "./src/app/sound-questions/sound-questions.component.ts");
/* harmony import */ var _sound_demo_link_sound_demo_link_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./sound-demo-link/sound-demo-link.component */ "./src/app/sound-demo-link/sound-demo-link.component.ts");
/* harmony import */ var _sound_contact_sound_contact_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./sound-contact/sound-contact.component */ "./src/app/sound-contact/sound-contact.component.ts");
/* harmony import */ var _sound_compare_waves_sound_compare_waves_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./sound-compare-waves/sound-compare-waves.component */ "./src/app/sound-compare-waves/sound-compare-waves.component.ts");
/* harmony import */ var _sound_harmonics_generator_sound_harmonics_generator_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./sound-harmonics-generator/sound-harmonics-generator.component */ "./src/app/sound-harmonics-generator/sound-harmonics-generator.component.ts");
/* harmony import */ var _math_formula_math_formula_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./math-formula/math-formula.component */ "./src/app/math-formula/math-formula.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _sound_code01_sound_code01_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./sound-code01/sound-code01.component */ "./src/app/sound-code01/sound-code01.component.ts");
/* harmony import */ var _sound_code02_sound_code02_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./sound-code02/sound-code02.component */ "./src/app/sound-code02/sound-code02.component.ts");
/* harmony import */ var _sound_code03_sound_code03_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./sound-code03/sound-code03.component */ "./src/app/sound-code03/sound-code03.component.ts");
/* harmony import */ var _sound_code04_sound_code04_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./sound-code04/sound-code04.component */ "./src/app/sound-code04/sound-code04.component.ts");
/* harmony import */ var _sound_code05_sound_code05_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sound-code05/sound-code05.component */ "./src/app/sound-code05/sound-code05.component.ts");
/* harmony import */ var _sound_code06_sound_code06_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./sound-code06/sound-code06.component */ "./src/app/sound-code06/sound-code06.component.ts");
/* harmony import */ var _video_home_video_home_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./video-home/video-home.component */ "./src/app/video-home/video-home.component.ts");
/* harmony import */ var _video_title_video_title_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./video-title/video-title.component */ "./src/app/video-title/video-title.component.ts");
/* harmony import */ var _video_canvas_intro_video_canvas_intro_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./video-canvas-intro/video-canvas-intro.component */ "./src/app/video-canvas-intro/video-canvas-intro.component.ts");
/* harmony import */ var _video_canvas_noise_video_canvas_noise_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./video-canvas-noise/video-canvas-noise.component */ "./src/app/video-canvas-noise/video-canvas-noise.component.ts");
/* harmony import */ var _video_canvas_clouds_video_canvas_clouds_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./video-canvas-clouds/video-canvas-clouds.component */ "./src/app/video-canvas-clouds/video-canvas-clouds.component.ts");
/* harmony import */ var _video_canvas_moving_clouds_video_canvas_moving_clouds_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./video-canvas-moving-clouds/video-canvas-moving-clouds.component */ "./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.ts");
/* harmony import */ var _video_canvas_demo_link_video_canvas_demo_link_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./video-canvas-demo-link/video-canvas-demo-link.component */ "./src/app/video-canvas-demo-link/video-canvas-demo-link.component.ts");
/* harmony import */ var _video_webgl_demo_link_video_webgl_demo_link_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./video-webgl-demo-link/video-webgl-demo-link.component */ "./src/app/video-webgl-demo-link/video-webgl-demo-link.component.ts");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var _video_webgl_pipepline_video_webgl_pipepline_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./video-webgl-pipepline/video-webgl-pipepline.component */ "./src/app/video-webgl-pipepline/video-webgl-pipepline.component.ts");
/* harmony import */ var _video_webgl_light_video_webgl_light_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./video-webgl-light/video-webgl-light.component */ "./src/app/video-webgl-light/video-webgl-light.component.ts");
/* harmony import */ var _video_questions_video_questions_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./video-questions/video-questions.component */ "./src/app/video-questions/video-questions.component.ts");
/* harmony import */ var _video_webgl_intro_video_webgl_intro_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./video-webgl-intro/video-webgl-intro.component */ "./src/app/video-webgl-intro/video-webgl-intro.component.ts");
/* harmony import */ var _video_webgl_diffuse1_video_webgl_diffuse1_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./video-webgl-diffuse1/video-webgl-diffuse1.component */ "./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.ts");
/* harmony import */ var _video_webgl_diffuse2_video_webgl_diffuse2_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./video-webgl-diffuse2/video-webgl-diffuse2.component */ "./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.ts");
/* harmony import */ var _video_webgl_specular1_video_webgl_specular1_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./video-webgl-specular1/video-webgl-specular1.component */ "./src/app/video-webgl-specular1/video-webgl-specular1.component.ts");
/* harmony import */ var _video_webgl_specular2_video_webgl_specular2_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./video-webgl-specular2/video-webgl-specular2.component */ "./src/app/video-webgl-specular2/video-webgl-specular2.component.ts");
/* harmony import */ var _sound_sawtooth_example_sound_sawtooth_example_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./sound-sawtooth-example/sound-sawtooth-example.component */ "./src/app/sound-sawtooth-example/sound-sawtooth-example.component.ts");
/* harmony import */ var _sound_sine_example_sound_sine_example_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./sound-sine-example/sound-sine-example.component */ "./src/app/sound-sine-example/sound-sine-example.component.ts");
/* harmony import */ var _sound_square_example_sound_square_example_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./sound-square-example/sound-square-example.component */ "./src/app/sound-square-example/sound-square-example.component.ts");
/* harmony import */ var _sound_references_sound_references_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./sound-references/sound-references.component */ "./src/app/sound-references/sound-references.component.ts");
/* harmony import */ var _sound_artists_sound_artists_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./sound-artists/sound-artists.component */ "./src/app/sound-artists/sound-artists.component.ts");
/* harmony import */ var _sound_test_sound_test_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./sound-test/sound-test.component */ "./src/app/sound-test/sound-test.component.ts");
/* harmony import */ var _video_test_video_test_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./video-test/video-test.component */ "./src/app/video-test/video-test.component.ts");
/* harmony import */ var _video_artists_video_artists_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./video-artists/video-artists.component */ "./src/app/video-artists/video-artists.component.ts");
/* harmony import */ var _sound_envelope_sound_envelope_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./sound-envelope/sound-envelope.component */ "./src/app/sound-envelope/sound-envelope.component.ts");
/* harmony import */ var _video_extra01_video_extra01_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./video-extra01/video-extra01.component */ "./src/app/video-extra01/video-extra01.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sound_pass_filter2_sound_pass_filter2_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./sound-pass-filter2/sound-pass-filter2.component */ "./src/app/sound-pass-filter2/sound-pass-filter2.component.ts");












































































function hljsLanguages() {
    return [
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_30___default.a },
        { name: 'scss', func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_29___default.a },
        { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_28___default.a }
    ];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sound_home_sound_home_component__WEBPACK_IMPORTED_MODULE_7__["SoundHomeComponent"],
                _canvas_chart_canvas_chart_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChartComponent"],
                _sound_intro_sound_intro_component__WEBPACK_IMPORTED_MODULE_9__["SoundIntroComponent"],
                _sound_square_wave_sound_square_wave_component__WEBPACK_IMPORTED_MODULE_10__["SoundSquareWaveComponent"],
                _sound_square_fourier_sound_square_fourier_component__WEBPACK_IMPORTED_MODULE_17__["SoundSquareFourierComponent"],
                _sound_sawtooth_wave_sound_sawtooth_wave_component__WEBPACK_IMPORTED_MODULE_11__["SoundSawtoothWaveComponent"],
                _sound_simple_demo_sound_simple_demo_component__WEBPACK_IMPORTED_MODULE_12__["SoundSimpleDemoComponent"],
                _sound_sin_form_sound_sin_form_component__WEBPACK_IMPORTED_MODULE_13__["SoundSinFormComponent"],
                _sound_noise_wave_sound_noise_wave_component__WEBPACK_IMPORTED_MODULE_14__["SoundNoiseWaveComponent"],
                _toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_15__["ToggleButtonComponent"],
                _d3chart_d3chart_component__WEBPACK_IMPORTED_MODULE_18__["D3chartComponent"],
                _sound_player_sound_player_component__WEBPACK_IMPORTED_MODULE_19__["SoundPlayerComponent"],
                _sound_pass_filter_sound_pass_filter_component__WEBPACK_IMPORTED_MODULE_20__["SoundPassFilterComponent"],
                _sound_kick_wave_sound_kick_wave_component__WEBPACK_IMPORTED_MODULE_21__["SoundKickWaveComponent"],
                _sound_snare_wave_sound_snare_wave_component__WEBPACK_IMPORTED_MODULE_22__["SoundSnareWaveComponent"],
                _sound_piano_sound_piano_component__WEBPACK_IMPORTED_MODULE_23__["SoundPianoComponent"],
                _sound_harmonics_sound_harmonics_component__WEBPACK_IMPORTED_MODULE_24__["SoundHarmonicsComponent"],
                _sound_title_sound_title_component__WEBPACK_IMPORTED_MODULE_25__["SoundTitleComponent"],
                _sound_wapi_intro_sound_wapi_intro_component__WEBPACK_IMPORTED_MODULE_26__["SoundWapiIntroComponent"],
                _sound_wapi_oscillator_sound_wapi_oscillator_component__WEBPACK_IMPORTED_MODULE_27__["SoundWapiOscillatorComponent"],
                _wave_background_wave_background_component__WEBPACK_IMPORTED_MODULE_32__["WaveBackgroundComponent"],
                _sound_demo_chain_sound_demo_chain_component__WEBPACK_IMPORTED_MODULE_33__["SoundDemoChainComponent"],
                _sound_questions_sound_questions_component__WEBPACK_IMPORTED_MODULE_34__["SoundQuestionsComponent"],
                _sound_demo_link_sound_demo_link_component__WEBPACK_IMPORTED_MODULE_35__["SoundDemoLinkComponent"],
                _sound_contact_sound_contact_component__WEBPACK_IMPORTED_MODULE_36__["SoundContactComponent"],
                _sound_compare_waves_sound_compare_waves_component__WEBPACK_IMPORTED_MODULE_37__["SoundCompareWavesComponent"],
                _sound_harmonics_generator_sound_harmonics_generator_component__WEBPACK_IMPORTED_MODULE_38__["SoundHarmonicsGeneratorComponent"],
                _math_formula_math_formula_component__WEBPACK_IMPORTED_MODULE_39__["MathFormulaComponent"],
                _sound_code01_sound_code01_component__WEBPACK_IMPORTED_MODULE_41__["SoundCode01Component"],
                _sound_code02_sound_code02_component__WEBPACK_IMPORTED_MODULE_42__["SoundCode02Component"],
                _sound_code03_sound_code03_component__WEBPACK_IMPORTED_MODULE_43__["SoundCode03Component"],
                _sound_code04_sound_code04_component__WEBPACK_IMPORTED_MODULE_44__["SoundCode04Component"],
                _sound_code05_sound_code05_component__WEBPACK_IMPORTED_MODULE_45__["SoundCode05Component"],
                _sound_code06_sound_code06_component__WEBPACK_IMPORTED_MODULE_46__["SoundCode06Component"],
                _video_home_video_home_component__WEBPACK_IMPORTED_MODULE_47__["VideoHomeComponent"],
                _video_title_video_title_component__WEBPACK_IMPORTED_MODULE_48__["VideoTitleComponent"],
                _video_canvas_intro_video_canvas_intro_component__WEBPACK_IMPORTED_MODULE_49__["VideoCanvasIntroComponent"],
                _video_canvas_noise_video_canvas_noise_component__WEBPACK_IMPORTED_MODULE_50__["VideoCanvasNoiseComponent"],
                _video_canvas_clouds_video_canvas_clouds_component__WEBPACK_IMPORTED_MODULE_51__["VideoCanvasCloudsComponent"],
                _video_canvas_moving_clouds_video_canvas_moving_clouds_component__WEBPACK_IMPORTED_MODULE_52__["VideoCanvasMovingCloudsComponent"],
                _video_canvas_demo_link_video_canvas_demo_link_component__WEBPACK_IMPORTED_MODULE_53__["VideoCanvasDemoLinkComponent"],
                _video_webgl_demo_link_video_webgl_demo_link_component__WEBPACK_IMPORTED_MODULE_54__["VideoWebglDemoLinkComponent"],
                _video_webgl_pipepline_video_webgl_pipepline_component__WEBPACK_IMPORTED_MODULE_56__["VideoWebglPipeplineComponent"],
                _video_webgl_light_video_webgl_light_component__WEBPACK_IMPORTED_MODULE_57__["VideoWebglLightComponent"],
                _video_questions_video_questions_component__WEBPACK_IMPORTED_MODULE_58__["VideoQuestionsComponent"],
                _video_webgl_intro_video_webgl_intro_component__WEBPACK_IMPORTED_MODULE_59__["VideoWebglIntroComponent"],
                _video_webgl_diffuse1_video_webgl_diffuse1_component__WEBPACK_IMPORTED_MODULE_60__["VideoWebglDiffuse1Component"],
                _video_webgl_diffuse2_video_webgl_diffuse2_component__WEBPACK_IMPORTED_MODULE_61__["VideoWebglDiffuse2Component"],
                _video_webgl_specular1_video_webgl_specular1_component__WEBPACK_IMPORTED_MODULE_62__["VideoWebglSpecular1Component"],
                _video_webgl_specular2_video_webgl_specular2_component__WEBPACK_IMPORTED_MODULE_63__["VideoWebglSpecular2Component"],
                _sound_sawtooth_example_sound_sawtooth_example_component__WEBPACK_IMPORTED_MODULE_64__["SoundSawtoothExampleComponent"],
                _sound_sine_example_sound_sine_example_component__WEBPACK_IMPORTED_MODULE_65__["SoundSineExampleComponent"],
                _sound_square_example_sound_square_example_component__WEBPACK_IMPORTED_MODULE_66__["SoundSquareExampleComponent"],
                _sound_references_sound_references_component__WEBPACK_IMPORTED_MODULE_67__["SoundReferencesComponent"],
                _sound_artists_sound_artists_component__WEBPACK_IMPORTED_MODULE_68__["SoundArtistsComponent"],
                _sound_test_sound_test_component__WEBPACK_IMPORTED_MODULE_69__["SoundTestComponent"],
                _video_test_video_test_component__WEBPACK_IMPORTED_MODULE_70__["VideoTestComponent"],
                _video_artists_video_artists_component__WEBPACK_IMPORTED_MODULE_71__["VideoArtistsComponent"],
                _sound_envelope_sound_envelope_component__WEBPACK_IMPORTED_MODULE_72__["SoundEnvelopeComponent"],
                _video_extra01_video_extra01_component__WEBPACK_IMPORTED_MODULE_73__["VideoExtra01Component"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_74__["HomeComponent"],
                _sound_pass_filter2_sound_pass_filter2_component__WEBPACK_IMPORTED_MODULE_75__["SoundPassFilter2Component"]
            ],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sound_home_sound_home_component__WEBPACK_IMPORTED_MODULE_7__["SoundHomeComponent"],
                _canvas_chart_canvas_chart_component__WEBPACK_IMPORTED_MODULE_8__["CanvasChartComponent"],
                _sound_intro_sound_intro_component__WEBPACK_IMPORTED_MODULE_9__["SoundIntroComponent"],
                _sound_square_wave_sound_square_wave_component__WEBPACK_IMPORTED_MODULE_10__["SoundSquareWaveComponent"],
                _sound_square_fourier_sound_square_fourier_component__WEBPACK_IMPORTED_MODULE_17__["SoundSquareFourierComponent"],
                _sound_sawtooth_wave_sound_sawtooth_wave_component__WEBPACK_IMPORTED_MODULE_11__["SoundSawtoothWaveComponent"],
                _sound_simple_demo_sound_simple_demo_component__WEBPACK_IMPORTED_MODULE_12__["SoundSimpleDemoComponent"],
                _sound_sin_form_sound_sin_form_component__WEBPACK_IMPORTED_MODULE_13__["SoundSinFormComponent"],
                _sound_noise_wave_sound_noise_wave_component__WEBPACK_IMPORTED_MODULE_14__["SoundNoiseWaveComponent"],
                _toggle_button_toggle_button_component__WEBPACK_IMPORTED_MODULE_15__["ToggleButtonComponent"],
                _d3chart_d3chart_component__WEBPACK_IMPORTED_MODULE_18__["D3chartComponent"],
                _sound_player_sound_player_component__WEBPACK_IMPORTED_MODULE_19__["SoundPlayerComponent"],
                _sound_pass_filter_sound_pass_filter_component__WEBPACK_IMPORTED_MODULE_20__["SoundPassFilterComponent"],
                _sound_kick_wave_sound_kick_wave_component__WEBPACK_IMPORTED_MODULE_21__["SoundKickWaveComponent"],
                _sound_snare_wave_sound_snare_wave_component__WEBPACK_IMPORTED_MODULE_22__["SoundSnareWaveComponent"],
                _sound_piano_sound_piano_component__WEBPACK_IMPORTED_MODULE_23__["SoundPianoComponent"],
                _sound_harmonics_sound_harmonics_component__WEBPACK_IMPORTED_MODULE_24__["SoundHarmonicsComponent"],
                _sound_title_sound_title_component__WEBPACK_IMPORTED_MODULE_25__["SoundTitleComponent"],
                _sound_wapi_intro_sound_wapi_intro_component__WEBPACK_IMPORTED_MODULE_26__["SoundWapiIntroComponent"],
                _sound_wapi_oscillator_sound_wapi_oscillator_component__WEBPACK_IMPORTED_MODULE_27__["SoundWapiOscillatorComponent"],
                _wave_background_wave_background_component__WEBPACK_IMPORTED_MODULE_32__["WaveBackgroundComponent"],
                _sound_demo_chain_sound_demo_chain_component__WEBPACK_IMPORTED_MODULE_33__["SoundDemoChainComponent"],
                _sound_questions_sound_questions_component__WEBPACK_IMPORTED_MODULE_34__["SoundQuestionsComponent"],
                _sound_demo_link_sound_demo_link_component__WEBPACK_IMPORTED_MODULE_35__["SoundDemoLinkComponent"],
                _sound_contact_sound_contact_component__WEBPACK_IMPORTED_MODULE_36__["SoundContactComponent"],
                _sound_compare_waves_sound_compare_waves_component__WEBPACK_IMPORTED_MODULE_37__["SoundCompareWavesComponent"],
                _sound_harmonics_generator_sound_harmonics_generator_component__WEBPACK_IMPORTED_MODULE_38__["SoundHarmonicsGeneratorComponent"],
                _math_formula_math_formula_component__WEBPACK_IMPORTED_MODULE_39__["MathFormulaComponent"],
                _sound_code01_sound_code01_component__WEBPACK_IMPORTED_MODULE_41__["SoundCode01Component"],
                _sound_code02_sound_code02_component__WEBPACK_IMPORTED_MODULE_42__["SoundCode02Component"],
                _sound_code03_sound_code03_component__WEBPACK_IMPORTED_MODULE_43__["SoundCode03Component"],
                _sound_code04_sound_code04_component__WEBPACK_IMPORTED_MODULE_44__["SoundCode04Component"],
                _sound_code05_sound_code05_component__WEBPACK_IMPORTED_MODULE_45__["SoundCode05Component"],
                _sound_code06_sound_code06_component__WEBPACK_IMPORTED_MODULE_46__["SoundCode06Component"],
                _video_home_video_home_component__WEBPACK_IMPORTED_MODULE_47__["VideoHomeComponent"],
                _video_title_video_title_component__WEBPACK_IMPORTED_MODULE_48__["VideoTitleComponent"],
                _video_canvas_intro_video_canvas_intro_component__WEBPACK_IMPORTED_MODULE_49__["VideoCanvasIntroComponent"],
                _video_canvas_noise_video_canvas_noise_component__WEBPACK_IMPORTED_MODULE_50__["VideoCanvasNoiseComponent"],
                _video_canvas_clouds_video_canvas_clouds_component__WEBPACK_IMPORTED_MODULE_51__["VideoCanvasCloudsComponent"],
                _video_canvas_moving_clouds_video_canvas_moving_clouds_component__WEBPACK_IMPORTED_MODULE_52__["VideoCanvasMovingCloudsComponent"],
                _video_canvas_demo_link_video_canvas_demo_link_component__WEBPACK_IMPORTED_MODULE_53__["VideoCanvasDemoLinkComponent"],
                _video_webgl_demo_link_video_webgl_demo_link_component__WEBPACK_IMPORTED_MODULE_54__["VideoWebglDemoLinkComponent"],
                _video_webgl_pipepline_video_webgl_pipepline_component__WEBPACK_IMPORTED_MODULE_56__["VideoWebglPipeplineComponent"],
                _video_webgl_light_video_webgl_light_component__WEBPACK_IMPORTED_MODULE_57__["VideoWebglLightComponent"],
                _video_questions_video_questions_component__WEBPACK_IMPORTED_MODULE_58__["VideoQuestionsComponent"],
                _video_webgl_intro_video_webgl_intro_component__WEBPACK_IMPORTED_MODULE_59__["VideoWebglIntroComponent"],
                _video_webgl_diffuse1_video_webgl_diffuse1_component__WEBPACK_IMPORTED_MODULE_60__["VideoWebglDiffuse1Component"],
                _video_webgl_diffuse2_video_webgl_diffuse2_component__WEBPACK_IMPORTED_MODULE_61__["VideoWebglDiffuse2Component"],
                _video_webgl_specular1_video_webgl_specular1_component__WEBPACK_IMPORTED_MODULE_62__["VideoWebglSpecular1Component"],
                _video_webgl_specular2_video_webgl_specular2_component__WEBPACK_IMPORTED_MODULE_63__["VideoWebglSpecular2Component"],
                _sound_sawtooth_example_sound_sawtooth_example_component__WEBPACK_IMPORTED_MODULE_64__["SoundSawtoothExampleComponent"],
                _sound_sine_example_sound_sine_example_component__WEBPACK_IMPORTED_MODULE_65__["SoundSineExampleComponent"],
                _sound_square_example_sound_square_example_component__WEBPACK_IMPORTED_MODULE_66__["SoundSquareExampleComponent"],
                _sound_references_sound_references_component__WEBPACK_IMPORTED_MODULE_67__["SoundReferencesComponent"],
                _sound_artists_sound_artists_component__WEBPACK_IMPORTED_MODULE_68__["SoundArtistsComponent"],
                _sound_test_sound_test_component__WEBPACK_IMPORTED_MODULE_69__["SoundTestComponent"],
                _video_test_video_test_component__WEBPACK_IMPORTED_MODULE_70__["VideoTestComponent"],
                _video_artists_video_artists_component__WEBPACK_IMPORTED_MODULE_71__["VideoArtistsComponent"],
                _sound_envelope_sound_envelope_component__WEBPACK_IMPORTED_MODULE_72__["SoundEnvelopeComponent"],
                _video_extra01_video_extra01_component__WEBPACK_IMPORTED_MODULE_73__["VideoExtra01Component"],
                _sound_pass_filter2_sound_pass_filter2_component__WEBPACK_IMPORTED_MODULE_75__["SoundPassFilter2Component"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular2_qrcode__WEBPACK_IMPORTED_MODULE_55__["QRCodeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_40__["HttpClientModule"],
                ngx_mathjax__WEBPACK_IMPORTED_MODULE_16__["MathJaxModule"].config(),
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_31__["HighlightModule"].forRoot({
                    languages: hljsLanguages
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/audio.component.ts":
/*!************************************!*\
  !*** ./src/app/audio.component.ts ***!
  \************************************/
/*! exports provided: AudioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioComponent", function() { return AudioComponent; });
var AudioComponent = /** @class */ (function () {
    function AudioComponent() {
        this.maxFreq = 22050;
        this.freqNormalized = [];
        this.dataNormalized = [];
        this.soundEnabled = false;
        this.audioContext = new AudioContext();
        this.master = this.audioContext.createGain();
        this.analyser = this.audioContext.createAnalyser();
        this.freqArray = new Float32Array(this.analyser.frequencyBinCount);
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.initializeArray(this.freqArray);
        this.initializeArray(this.dataArray);
        this.master.connect(this.analyser).connect(this.audioContext.destination);
        this.updateDataArray();
        this.updateFrequencyArray();
        this.stopSound();
    }
    AudioComponent.prototype.initializeArray = function (array) {
        for (var i = 0; i < array.length; ++i) {
            array[i] = 0;
        }
    };
    AudioComponent.prototype.createArray = function (len, xFunc, yFunc) {
        var array = new Array(len);
        for (var i = 0; i < len; ++i) {
            array[i] = { x: xFunc(i), y: yFunc(i) };
        }
        return array;
    };
    AudioComponent.prototype.updateDataArray = function () {
        var _this = this;
        if (this.analyser) {
            this.analyser.getByteTimeDomainData(this.dataArray);
        }
        this.dataNormalized = this.createArray(this.dataArray.length, function (i) { return (i / _this.dataArray.length); }, function (i) { return 2.0 * _this.dataArray[i] / 255.0 - 1; });
    };
    AudioComponent.prototype.decibelToGain = function (db) {
        return Math.pow(10, db / 20);
    };
    AudioComponent.prototype.gainToDecibel = function (gain) {
        // see https://www.w3.org/TR/webaudio/#filters-characteristics
        //return 40*(Math.log10(gain));
        return gain;
    };
    AudioComponent.prototype.clamp = function (x, min, max) {
        return x < min ? min : x > max ? max : x;
    };
    AudioComponent.prototype.updateFrequencyArray = function () {
        var _this = this;
        if (this.analyser) {
            this.analyser.getFloatFrequencyData(this.freqArray);
        }
        this.freqNormalized = this.createArray(this.freqArray.length, function (i) { return (i / _this.freqArray.length) * _this.maxFreq; }, function (i) { return _this.clamp(_this.freqArray[i], _this.analyser.minDecibels, _this.analyser.maxDecibels); });
    };
    AudioComponent.prototype.startSound = function () {
        this.soundEnabled = true;
        this.master.gain.value = 1.0;
    };
    AudioComponent.prototype.stopSound = function () {
        this.soundEnabled = false;
        this.master.gain.value = 0.0;
    };
    return AudioComponent;
}());



/***/ }),

/***/ "./src/app/canvas-chart/canvas-chart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/canvas-chart/canvas-chart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas width=\"{{width}}\" height=\"{{height}}\">\n\n</canvas>\n"

/***/ }),

/***/ "./src/app/canvas-chart/canvas-chart.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/canvas-chart/canvas-chart.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hkbG9wZXNyb2NoYS9zcHJpbmctY2FtcHVzLTIwMTkvc3JjL2FwcC9jYW52YXMtY2hhcnQvY2FudmFzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FudmFzLWNoYXJ0L2NhbnZhcy1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/canvas-chart/canvas-chart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/canvas-chart/canvas-chart.component.ts ***!
  \********************************************************/
/*! exports provided: CanvasChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasChartComponent", function() { return CanvasChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanvasChartComponent = /** @class */ (function () {
    function CanvasChartComponent() {
        this.array = [];
        this.stroke = 3;
    }
    CanvasChartComponent.prototype.ngOnInit = function () {
    };
    CanvasChartComponent.prototype.ngAfterViewInit = function () {
        this.draw();
    };
    CanvasChartComponent.prototype.draw = function () {
        this.context = this.canvas.nativeElement.getContext('2d');
        this.clearCanvas();
        this.context.beginPath();
        this.context.lineWidth = this.stroke;
        this.context.strokeStyle = '#000';
        var first = true;
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var point = _a[_i];
            var x = Math.floor((point[0] - this.minX) / (this.maxX - this.minX) * this.width);
            var y = this.height - Math.floor((point[1] - this.minY) / (this.maxY - this.minY) * this.height);
            if (first) {
                first = false;
                this.context.moveTo(x, y);
            }
            else {
                this.context.lineTo(x, y);
            }
            //   console.log(x, y);
        }
        this.context.stroke();
    };
    CanvasChartComponent.prototype.clearCanvas = function () {
        var context = this.canvas.nativeElement.getContext('2d');
        context.clearRect(0, 0, this.width, this.height);
    };
    CanvasChartComponent.prototype.ngOnChanges = function (changes) {
        this.draw();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasChartComponent.prototype, "array", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasChartComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasChartComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasChartComponent.prototype, "minX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasChartComponent.prototype, "maxX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasChartComponent.prototype, "minY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasChartComponent.prototype, "maxY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasChartComponent.prototype, "stroke", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasChartComponent.prototype, "canvas", void 0);
    CanvasChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas-chart',
            template: __webpack_require__(/*! ./canvas-chart.component.html */ "./src/app/canvas-chart/canvas-chart.component.html"),
            styles: [__webpack_require__(/*! ./canvas-chart.component.scss */ "./src/app/canvas-chart/canvas-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CanvasChartComponent);
    return CanvasChartComponent;
}());



/***/ }),

/***/ "./src/app/d3chart/d3chart.component.html":
/*!************************************************!*\
  !*** ./src/app/d3chart/d3chart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg #chart [attr.height.px]=\"height\" [attr.width.px]=\"width\"></svg>\n"

/***/ }),

/***/ "./src/app/d3chart/d3chart.component.scss":
/*!************************************************!*\
  !*** ./src/app/d3chart/d3chart.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .line {\n  fill: none;\n  stroke: steelblue; }\n\nsvg {\n  display: block;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hkbG9wZXNyb2NoYS9zcHJpbmctY2FtcHVzLTIwMTkvc3JjL2FwcC9kM2NoYXJ0L2QzY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBSW5CO0VBQ0UsY0FBYztFQUNkLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2QzY2hhcnQvZDNjaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogc3RlZWxibHVlO1xufVxuXG5cbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/d3chart/d3chart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/d3chart/d3chart.component.ts ***!
  \**********************************************/
/*! exports provided: D3chartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3chartComponent", function() { return D3chartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/src/index.js");






var D3chartComponent = /** @class */ (function () {
    function D3chartComponent() {
        this.points = [];
        this.strokeSize = 2;
        this.labelX = "";
        this.labelY = "";
        this.isInited = false;
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.padding = 10;
        this.fontSize = 16;
    }
    Object.defineProperty(D3chartComponent.prototype, "setWidth", {
        set: function (val) {
            this.width = val;
            if (this.isInited) {
                this.draw();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D3chartComponent.prototype, "setHeight", {
        set: function (val) {
            this.height = val;
            if (this.isInited) {
                this.draw();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D3chartComponent.prototype, "setPoints", {
        set: function (val) {
            this.points = val;
            if (this.isInited) {
                this.draw();
            }
        },
        enumerable: true,
        configurable: true
    });
    D3chartComponent.prototype.ngOnInit = function () {
        this.isInited = true;
        this.draw();
    };
    D3chartComponent.prototype.initSvg = function () {
        if (this.svg) {
            this.svg.remove();
        }
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"](this.svgElement.nativeElement).append('g');
    };
    D3chartComponent.prototype.draw = function () {
        var w = this.width - this.margin.left - this.margin.right;
        var h = this.height - this.margin.top - this.margin.bottom;
        this.initSvg();
        var xAxis = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().range([0, w]);
        var yAxis = d3_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().range([h, 0]);
        xAxis.domain([this.minX, this.maxX]);
        yAxis.domain([this.minY, this.maxY]);
        this.svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(' + this.margin.left + ',' + h + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_5__["axisBottom"](xAxis));
        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .attr('transform', 'translate(' + this.margin.left + ',' + 0 + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_5__["axisLeft"](yAxis));
        // now add titles to the axes
        this.svg.append("text")
            .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("font-size", this.fontSize)
            .attr("transform", "translate(" + (this.fontSize) + "," + (this.height / 2) + ")rotate(-90)") // text is drawn off the screen top left, move down and out and rotate
            .text(this.labelY);
        this.svg.append("text")
            .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("font-size", this.fontSize)
            .attr("transform", "translate(" + (this.width / 2) + "," + (this.height - (this.padding / 3)) + ")") // centre below axis
            .text(this.labelX);
        if (this.points && this.points.length) {
            var line = d3_shape__WEBPACK_IMPORTED_MODULE_4__["line"]()
                .x(function (d) { return xAxis(d.x); })
                .y(function (d) { return yAxis(d.y); });
            this.svg.append('path')
                .datum(this.points)
                .attr('class', 'line')
                .attr('transform', 'translate(' + this.margin.left + ',' + 0 + ')')
                .attr('style', 'stroke-width: ' + this.strokeSize + 'px;')
                .attr('d', line);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], D3chartComponent.prototype, "svgElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], D3chartComponent.prototype, "strokeSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], D3chartComponent.prototype, "labelX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], D3chartComponent.prototype, "labelY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], D3chartComponent.prototype, "minX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], D3chartComponent.prototype, "maxX", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], D3chartComponent.prototype, "minY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], D3chartComponent.prototype, "maxY", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('width'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], D3chartComponent.prototype, "setWidth", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], D3chartComponent.prototype, "setHeight", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('points'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], D3chartComponent.prototype, "setPoints", null);
    D3chartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-d3chart',
            template: __webpack_require__(/*! ./d3chart.component.html */ "./src/app/d3chart/d3chart.component.html"),
            styles: [__webpack_require__(/*! ./d3chart.component.scss */ "./src/app/d3chart/d3chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], D3chartComponent);
    return D3chartComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>\n<ul>\n  <li><a href=\"#/sound\">Exploring music using the WebAudio API</a>\n  </li>\n  <li><a href=\"#/video\">Visualizing Music in 2D and 3D using the Canvas API and WebGL</a>\n  </li>\n</ul>\n</h2>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/math-formula/math-formula.component.html":
/*!**********************************************************!*\
  !*** ./src/app/math-formula/math-formula.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!processing\" [mathjax]>\n  $${{formula}}$$\n</div>\n"

/***/ }),

/***/ "./src/app/math-formula/math-formula.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/math-formula/math-formula.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hkbG9wZXNyb2NoYS9zcHJpbmctY2FtcHVzLTIwMTkvc3JjL2FwcC9tYXRoLWZvcm11bGEvbWF0aC1mb3JtdWxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXRoLWZvcm11bGEvbWF0aC1mb3JtdWxhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/math-formula/math-formula.component.ts":
/*!********************************************************!*\
  !*** ./src/app/math-formula/math-formula.component.ts ***!
  \********************************************************/
/*! exports provided: MathFormulaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathFormulaComponent", function() { return MathFormulaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MathFormulaComponent = /** @class */ (function () {
    function MathFormulaComponent() {
        this.processing = false;
        this.timer = 0;
    }
    Object.defineProperty(MathFormulaComponent.prototype, "setFormula", {
        set: function (val) {
            var _this = this;
            this.processing = true;
            this.formula = val;
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = 0;
            }
            this.timer = setTimeout(function () {
                _this.processing = false;
            }, 100);
        },
        enumerable: true,
        configurable: true
    });
    MathFormulaComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formula'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], MathFormulaComponent.prototype, "setFormula", null);
    MathFormulaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-math-formula',
            template: __webpack_require__(/*! ./math-formula.component.html */ "./src/app/math-formula/math-formula.component.html"),
            styles: [__webpack_require__(/*! ./math-formula.component.scss */ "./src/app/math-formula/math-formula.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MathFormulaComponent);
    return MathFormulaComponent;
}());



/***/ }),

/***/ "./src/app/music.service.ts":
/*!**********************************!*\
  !*** ./src/app/music.service.ts ***!
  \**********************************/
/*! exports provided: MusicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicService", function() { return MusicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MusicService = /** @class */ (function () {
    function MusicService() {
        this.frequencies = {
            "C0": 16.35,
            "C#0": 17.32,
            "Db0": 17.32,
            "D0": 18.35,
            "D#0": 19.45,
            "Eb0": 19.45,
            "E0": 20.60,
            "F0": 21.83,
            "F#0": 23.12,
            "Gb0": 23.12,
            "G0": 24.50,
            "G#0": 25.96,
            "Ab0": 25.96,
            "A0": 27.50,
            "A#0": 29.14,
            "Bb0": 29.14,
            "B0": 30.87,
            "C1": 32.70,
            "C#1": 34.65,
            "Db1": 34.65,
            "D1": 36.71,
            "D#1": 38.89,
            "Eb1": 38.89,
            "E1": 41.20,
            "F1": 43.65,
            "F#1": 46.25,
            "Gb1": 46.25,
            "G1": 49.00,
            "G#1": 51.91,
            "Ab1": 51.91,
            "A1": 55.00,
            "A#1": 58.27,
            "Bb1": 58.27,
            "B1": 61.74,
            "C2": 65.41,
            "C#2": 69.30,
            "Db2": 69.30,
            "D2": 73.42,
            "D#2": 77.78,
            "Eb2": 77.78,
            "E2": 82.41,
            "F2": 87.31,
            "F#2": 92.50,
            "Gb2": 92.50,
            "G2": 98.00,
            "G#2": 103.83,
            "Ab2": 103.83,
            "A2": 110.00,
            "A#2": 116.54,
            "Bb2": 116.54,
            "B2": 123.47,
            "C3": 130.81,
            "C#3": 138.59,
            "Db3": 138.59,
            "D3": 146.83,
            "D#3": 155.56,
            "Eb3": 155.56,
            "E3": 164.81,
            "F3": 174.61,
            "F#3": 185.00,
            "Gb3": 185.00,
            "G3": 196.00,
            "G#3": 207.65,
            "Ab3": 207.65,
            "A3": 220.00,
            "A#3": 233.08,
            "Bb3": 233.08,
            "B3": 246.94,
            "C4": 261.63,
            "C#4": 277.18,
            "Db4": 277.18,
            "D4": 293.66,
            "D#4": 311.13,
            "Eb4": 311.13,
            "E4": 329.63,
            "F4": 349.23,
            "F#4": 369.99,
            "Gb4": 369.99,
            "G4": 392.00,
            "G#4": 415.30,
            "Ab4": 415.30,
            "A4": 440.00,
            "A#4": 466.16,
            "Bb4": 466.16,
            "B4": 493.88,
            "C5": 523.25,
            "C#5": 554.37,
            "Db5": 554.37,
            "D5": 587.33,
            "D#5": 622.25,
            "Eb5": 622.25,
            "E5": 659.26,
            "F5": 698.46,
            "F#5": 739.99,
            "Gb5": 739.99,
            "G5": 783.99,
            "G#5": 830.61,
            "Ab5": 830.61,
            "A5": 880.00,
            "A#5": 932.33,
            "Bb5": 932.33,
            "B5": 987.77,
            "C6": 1046.50,
            "C#6": 1108.73,
            "Db6": 1108.73,
            "D6": 1174.66,
            "D#6": 1244.51,
            "Eb6": 1244.51,
            "E6": 1318.51,
            "F6": 1396.91,
            "F#6": 1479.98,
            "Gb6": 1479.98,
            "G6": 1567.98,
            "G#6": 1661.22,
            "Ab6": 1661.22,
            "A6": 1760.00,
            "A#6": 1864.66,
            "Bb6": 1864.66,
            "B6": 1975.53,
            "C7": 2093.00,
            "C#7": 2217.46,
            "Db7": 2217.46,
            "D7": 2349.32,
            "D#7": 2489.02,
            "Eb7": 2489.02,
            "E7": 2637.02,
            "F7": 2793.83,
            "F#7": 2959.96,
            "Gb7": 2959.96,
            "G7": 3135.96,
            "G#7": 3322.44,
            "Ab7": 3322.44,
            "A7": 3520.00,
            "A#7": 3729.31,
            "Bb7": 3729.31,
            "B7": 3951.07,
            "C8": 4186.01,
            "C#8": 4434.92,
            "Db8": 4434.92,
            "D8": 4698.64,
            "D#8": 4978.03,
            "Eb8": 4978.03
        };
    }
    MusicService.prototype.getSquare = function (t, A, f, iterations) {
        var x = 0;
        for (var k = 1; k <= iterations; ++k) {
            x += Math.sin(2.0 * Math.PI * (2 * k - 1) * (f * t)) / (2 * k - 1);
        }
        return A * (4 / Math.PI) * x;
    };
    MusicService.prototype.getSawtooth = function (t, A, f, iterations) {
        var x = 0;
        for (var k = 1; k <= iterations; ++k) {
            x += Math.pow(-1, k) * Math.sin(2.0 * Math.PI * k * f * t) / k;
        }
        return (2 * A / Math.PI) * x;
    };
    MusicService.prototype.getNoteFrequency = function (name) {
        return this.frequencies[name];
    };
    MusicService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MusicService);
    return MusicService;
}());



/***/ }),

/***/ "./src/app/perlin-noise.service.ts":
/*!*****************************************!*\
  !*** ./src/app/perlin-noise.service.ts ***!
  \*****************************************/
/*! exports provided: Grad, PerlinNoiseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grad", function() { return Grad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerlinNoiseService", function() { return PerlinNoiseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */


var Grad = /** @class */ (function () {
    function Grad(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Grad.prototype.dot2 = function (x, y) {
        return this.x * x + this.y * y;
    };
    ;
    Grad.prototype.dot3 = function (x, y, z) {
        return this.x * x + this.y * y + this.z * z;
    };
    ;
    return Grad;
}());

var PerlinNoiseService = /** @class */ (function () {
    function PerlinNoiseService() {
        this.grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
            new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
            new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
        this.p = [151, 160, 137, 91, 90, 15,
            131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
            190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
            88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
            77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
            102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
            135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
            5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
            223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
            129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
            251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
            49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
            138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
        // To remove the need for index wrapping, double the permutation table length
        this.perm = new Array(512);
        this.gradP = new Array(512);
        /*
        for(var i=0; i<256; i++) {
          perm[i] = perm[i + 256] = p[i];
          gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
        }*/
        // Skewing and unskewing factors for 2, 3, and 4 dimensions
        this.F2 = 0.5 * (Math.sqrt(3) - 1);
        this.G2 = (3 - Math.sqrt(3)) / 6;
        this.F3 = 1 / 3;
        this.G3 = 1 / 6;
        this.seed(0);
    }
    // This isn't a very good seeding function, but it works ok. It supports 2^16
    // different seed values. Write something better if you need more seeds.
    PerlinNoiseService.prototype.seed = function (seed) {
        if (seed > 0 && seed < 1) {
            // Scale the seed out
            seed *= 65536;
        }
        seed = Math.floor(seed);
        if (seed < 256) {
            seed |= seed << 8;
        }
        for (var i = 0; i < 256; i++) {
            var v;
            if (i & 1) {
                v = this.p[i] ^ (seed & 255);
            }
            else {
                v = this.p[i] ^ ((seed >> 8) & 255);
            }
            this.perm[i] = this.perm[i + 256] = v;
            this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12];
        }
    };
    ;
    // 2D simplex noise
    PerlinNoiseService.prototype.simplex2 = function (xin, yin) {
        var n0, n1, n2; // Noise contributions from the three corners
        // Skew the input space to determine which simplex cell we're in
        var s = (xin + yin) * this.F2; // Hairy factor for 2D
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var t = (i + j) * this.G2;
        var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
        var y0 = yin - j + t;
        // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
        var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
        if (x0 > y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
            i1 = 1;
            j1 = 0;
        }
        else { // upper triangle, YX order: (0,0)->(0,1)->(1,1)
            i1 = 0;
            j1 = 1;
        }
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
        var x1 = x0 - i1 + this.G2; // Offsets for middle corner in (x,y) unskewed coords
        var y1 = y0 - j1 + this.G2;
        var x2 = x0 - 1 + 2 * this.G2; // Offsets for last corner in (x,y) unskewed coords
        var y2 = y0 - 1 + 2 * this.G2;
        // Work out the hashed gradient indices of the three simplex corners
        i &= 255;
        j &= 255;
        var gi0 = this.gradP[i + this.perm[j]];
        var gi1 = this.gradP[i + i1 + this.perm[j + j1]];
        var gi2 = this.gradP[i + 1 + this.perm[j + 1]];
        // Calculate the contribution from the three corners
        var t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 < 0) {
            n0 = 0;
        }
        else {
            t0 *= t0;
            n0 = t0 * t0 * gi0.dot2(x0, y0); // (x,y) of grad3 used for 2D gradient
        }
        var t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 < 0) {
            n1 = 0;
        }
        else {
            t1 *= t1;
            n1 = t1 * t1 * gi1.dot2(x1, y1);
        }
        var t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 < 0) {
            n2 = 0;
        }
        else {
            t2 *= t2;
            n2 = t2 * t2 * gi2.dot2(x2, y2);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 70 * (n0 + n1 + n2);
    };
    ;
    // 3D simplex noise
    PerlinNoiseService.prototype.simplex3 = function (xin, yin, zin) {
        var n0, n1, n2, n3; // Noise contributions from the four corners
        // Skew the input space to determine which simplex cell we're in
        var s = (xin + yin + zin) * this.F3; // Hairy factor for 2D
        var i = Math.floor(xin + s);
        var j = Math.floor(yin + s);
        var k = Math.floor(zin + s);
        var t = (i + j + k) * this.G3;
        var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
        var y0 = yin - j + t;
        var z0 = zin - k + t;
        // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
        // Determine which simplex we are in.
        var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
        var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
        if (x0 >= y0) {
            if (y0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            }
            else if (x0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            }
            else {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            }
        }
        else {
            if (y0 < z0) {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            }
            else if (x0 < z0) {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            }
            else {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            }
        }
        // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
        // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
        // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
        // c = 1/6.
        var x1 = x0 - i1 + this.G3; // Offsets for second corner
        var y1 = y0 - j1 + this.G3;
        var z1 = z0 - k1 + this.G3;
        var x2 = x0 - i2 + 2 * this.G3; // Offsets for third corner
        var y2 = y0 - j2 + 2 * this.G3;
        var z2 = z0 - k2 + 2 * this.G3;
        var x3 = x0 - 1 + 3 * this.G3; // Offsets for fourth corner
        var y3 = y0 - 1 + 3 * this.G3;
        var z3 = z0 - 1 + 3 * this.G3;
        // Work out the hashed gradient indices of the four simplex corners
        i &= 255;
        j &= 255;
        k &= 255;
        var gi0 = this.gradP[i + this.perm[j + this.perm[k]]];
        var gi1 = this.gradP[i + i1 + this.perm[j + j1 + this.perm[k + k1]]];
        var gi2 = this.gradP[i + i2 + this.perm[j + j2 + this.perm[k + k2]]];
        var gi3 = this.gradP[i + 1 + this.perm[j + 1 + this.perm[k + 1]]];
        // Calculate the contribution from the four corners
        var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) {
            n0 = 0;
        }
        else {
            t0 *= t0;
            n0 = t0 * t0 * gi0.dot3(x0, y0, z0); // (x,y) of grad3 used for 2D gradient
        }
        var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) {
            n1 = 0;
        }
        else {
            t1 *= t1;
            n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
        }
        var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) {
            n2 = 0;
        }
        else {
            t2 *= t2;
            n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
        }
        var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) {
            n3 = 0;
        }
        else {
            t3 *= t3;
            n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 32 * (n0 + n1 + n2 + n3);
    };
    ;
    // ##### Perlin noise stuff
    PerlinNoiseService.prototype.fade = function (t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    };
    PerlinNoiseService.prototype.lerp = function (a, b, t) {
        return (1 - t) * a + t * b;
    };
    // 2D Perlin Noise
    PerlinNoiseService.prototype.perlin2 = function (x, y) {
        // Find unit grid cell containing point
        var X = Math.floor(x), Y = Math.floor(y);
        // Get relative xy coordinates of point within that cell
        x = x - X;
        y = y - Y;
        // Wrap the integer cells at 255 (smaller integer period can be introduced here)
        X = X & 255;
        Y = Y & 255;
        // Calculate noise contributions from each of the four corners
        var n00 = this.gradP[X + this.perm[Y]].dot2(x, y);
        var n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1);
        var n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y);
        var n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1);
        // Compute the fade curve value for x
        var u = this.fade(x);
        // Interpolate the four results
        return this.lerp(this.lerp(n00, n10, u), this.lerp(n01, n11, u), this.fade(y));
    };
    ;
    // 3D Perlin Noise
    PerlinNoiseService.prototype.perlin3 = function (x, y, z) {
        // Find unit grid cell containing point
        var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
        // Get relative xyz coordinates of point within that cell
        x = x - X;
        y = y - Y;
        z = z - Z;
        // Wrap the integer cells at 255 (smaller integer period can be introduced here)
        X = X & 255;
        Y = Y & 255;
        Z = Z & 255;
        // Calculate noise contributions from each of the eight corners
        var n000 = this.gradP[X + this.perm[Y + this.perm[Z]]].dot3(x, y, z);
        var n001 = this.gradP[X + this.perm[Y + this.perm[Z + 1]]].dot3(x, y, z - 1);
        var n010 = this.gradP[X + this.perm[Y + 1 + this.perm[Z]]].dot3(x, y - 1, z);
        var n011 = this.gradP[X + this.perm[Y + 1 + this.perm[Z + 1]]].dot3(x, y - 1, z - 1);
        var n100 = this.gradP[X + 1 + this.perm[Y + this.perm[Z]]].dot3(x - 1, y, z);
        var n101 = this.gradP[X + 1 + this.perm[Y + this.perm[Z + 1]]].dot3(x - 1, y, z - 1);
        var n110 = this.gradP[X + 1 + this.perm[Y + 1 + this.perm[Z]]].dot3(x - 1, y - 1, z);
        var n111 = this.gradP[X + 1 + this.perm[Y + 1 + this.perm[Z + 1]]].dot3(x - 1, y - 1, z - 1);
        // Compute the fade curve value for x, y, z
        var u = this.fade(x);
        var v = this.fade(y);
        var w = this.fade(z);
        // Interpolate
        return this.lerp(this.lerp(this.lerp(n000, n100, u), this.lerp(n001, n101, u), w), this.lerp(this.lerp(n010, n110, u), this.lerp(n011, n111, u), w), v);
    };
    ;
    // by hdlopesrocha
    PerlinNoiseService.prototype.myNoise3d = function (x, y, z, f) {
        var v = this.simplex3(x * f, y * f, z * f);
        return 0.5 * (v + 1);
    };
    // by hdlopesrocha
    PerlinNoiseService.prototype.myNoise3dx = function (x, y, z, f, it) {
        var il = f;
        var pe = 0.5;
        var re = 0;
        for (var i = 0; i < it; ++i) {
            re += pe * this.myNoise3d(x, y, z, il);
            il *= 2;
            pe *= 0.5;
        }
        return re;
    };
    PerlinNoiseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PerlinNoiseService);
    return PerlinNoiseService;
}());



/***/ }),

/***/ "./src/app/sound-artists/sound-artists.component.html":
/*!************************************************************!*\
  !*** ./src/app/sound-artists/sound-artists.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Artists</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n            <ul>\n              <li>Carbon Based Lifeforms - Polyrytmi</li>\n              <li>Shpongle - Brain In A Fishtank</li>\n              <li>Nena ‎- 99 Luftballons</li>\n            </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-artists/sound-artists.component.scss":
/*!************************************************************!*\
  !*** ./src/app/sound-artists/sound-artists.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWFydGlzdHMvc291bmQtYXJ0aXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-artists/sound-artists.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sound-artists/sound-artists.component.ts ***!
  \**********************************************************/
/*! exports provided: SoundArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundArtistsComponent", function() { return SoundArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundArtistsComponent = /** @class */ (function () {
    function SoundArtistsComponent() {
    }
    SoundArtistsComponent.prototype.ngOnInit = function () {
    };
    SoundArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-artists',
            template: __webpack_require__(/*! ./sound-artists.component.html */ "./src/app/sound-artists/sound-artists.component.html"),
            styles: [__webpack_require__(/*! ./sound-artists.component.scss */ "./src/app/sound-artists/sound-artists.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundArtistsComponent);
    return SoundArtistsComponent;
}());



/***/ }),

/***/ "./src/app/sound-code01/sound-code01.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sound-code01/sound-code01.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Demo (1)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Node Chain:</h4>\n            <img style=\"width: 100%\" src=\"assets/oscillator1.svg\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-code01/sound-code01.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sound-code01/sound-code01.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWNvZGUwMS9zb3VuZC1jb2RlMDEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-code01/sound-code01.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sound-code01/sound-code01.component.ts ***!
  \********************************************************/
/*! exports provided: SoundCode01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundCode01Component", function() { return SoundCode01Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundCode01Component = /** @class */ (function () {
    function SoundCode01Component() {
    }
    SoundCode01Component.prototype.ngOnInit = function () {
    };
    SoundCode01Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-code01',
            template: __webpack_require__(/*! ./sound-code01.component.html */ "./src/app/sound-code01/sound-code01.component.html"),
            styles: [__webpack_require__(/*! ./sound-code01.component.scss */ "./src/app/sound-code01/sound-code01.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundCode01Component);
    return SoundCode01Component;
}());



/***/ }),

/***/ "./src/app/sound-code02/sound-code02.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sound-code02/sound-code02.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Demo (2)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Node Chain:</h4>\n            <img style=\"width: 100%\" src=\"assets/kick.svg\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-code02/sound-code02.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sound-code02/sound-code02.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWNvZGUwMi9zb3VuZC1jb2RlMDIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-code02/sound-code02.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sound-code02/sound-code02.component.ts ***!
  \********************************************************/
/*! exports provided: SoundCode02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundCode02Component", function() { return SoundCode02Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundCode02Component = /** @class */ (function () {
    function SoundCode02Component() {
    }
    SoundCode02Component.prototype.ngOnInit = function () {
    };
    SoundCode02Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-code02',
            template: __webpack_require__(/*! ./sound-code02.component.html */ "./src/app/sound-code02/sound-code02.component.html"),
            styles: [__webpack_require__(/*! ./sound-code02.component.scss */ "./src/app/sound-code02/sound-code02.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundCode02Component);
    return SoundCode02Component;
}());



/***/ }),

/***/ "./src/app/sound-code03/sound-code03.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sound-code03/sound-code03.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Demo (3)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Node Chain:</h4>\n            <img style=\"width: 100%\" src=\"assets/hat.svg\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-code03/sound-code03.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sound-code03/sound-code03.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWNvZGUwMy9zb3VuZC1jb2RlMDMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-code03/sound-code03.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sound-code03/sound-code03.component.ts ***!
  \********************************************************/
/*! exports provided: SoundCode03Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundCode03Component", function() { return SoundCode03Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundCode03Component = /** @class */ (function () {
    function SoundCode03Component() {
    }
    SoundCode03Component.prototype.ngOnInit = function () {
    };
    SoundCode03Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-code03',
            template: __webpack_require__(/*! ./sound-code03.component.html */ "./src/app/sound-code03/sound-code03.component.html"),
            styles: [__webpack_require__(/*! ./sound-code03.component.scss */ "./src/app/sound-code03/sound-code03.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundCode03Component);
    return SoundCode03Component;
}());



/***/ }),

/***/ "./src/app/sound-code04/sound-code04.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sound-code04/sound-code04.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Demo (4)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Node Chain:</h4>\n            <img style=\"width: 100%\" src=\"assets/track.svg\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-code04/sound-code04.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sound-code04/sound-code04.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWNvZGUwNC9zb3VuZC1jb2RlMDQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-code04/sound-code04.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sound-code04/sound-code04.component.ts ***!
  \********************************************************/
/*! exports provided: SoundCode04Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundCode04Component", function() { return SoundCode04Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundCode04Component = /** @class */ (function () {
    function SoundCode04Component() {
    }
    SoundCode04Component.prototype.ngOnInit = function () {
    };
    SoundCode04Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-code04',
            template: __webpack_require__(/*! ./sound-code04.component.html */ "./src/app/sound-code04/sound-code04.component.html"),
            styles: [__webpack_require__(/*! ./sound-code04.component.scss */ "./src/app/sound-code04/sound-code04.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundCode04Component);
    return SoundCode04Component;
}());



/***/ }),

/***/ "./src/app/sound-code05/sound-code05.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sound-code05/sound-code05.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Demo (5)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Node Chain:</h4>\n            <img style=\"width: 100%\" src=\"assets/oscillator2.svg\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-code05/sound-code05.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sound-code05/sound-code05.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWNvZGUwNS9zb3VuZC1jb2RlMDUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-code05/sound-code05.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sound-code05/sound-code05.component.ts ***!
  \********************************************************/
/*! exports provided: SoundCode05Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundCode05Component", function() { return SoundCode05Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundCode05Component = /** @class */ (function () {
    function SoundCode05Component() {
    }
    SoundCode05Component.prototype.ngOnInit = function () {
    };
    SoundCode05Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-code05',
            template: __webpack_require__(/*! ./sound-code05.component.html */ "./src/app/sound-code05/sound-code05.component.html"),
            styles: [__webpack_require__(/*! ./sound-code05.component.scss */ "./src/app/sound-code05/sound-code05.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundCode05Component);
    return SoundCode05Component;
}());



/***/ }),

/***/ "./src/app/sound-code06/sound-code06.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sound-code06/sound-code06.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Demo (6)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Node Chain:</h4>\n            <img style=\"width: 100%\" src=\"assets/echo.svg\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-code06/sound-code06.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sound-code06/sound-code06.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWNvZGUwNi9zb3VuZC1jb2RlMDYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-code06/sound-code06.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sound-code06/sound-code06.component.ts ***!
  \********************************************************/
/*! exports provided: SoundCode06Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundCode06Component", function() { return SoundCode06Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundCode06Component = /** @class */ (function () {
    function SoundCode06Component() {
    }
    SoundCode06Component.prototype.ngOnInit = function () {
    };
    SoundCode06Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-code06',
            template: __webpack_require__(/*! ./sound-code06.component.html */ "./src/app/sound-code06/sound-code06.component.html"),
            styles: [__webpack_require__(/*! ./sound-code06.component.scss */ "./src/app/sound-code06/sound-code06.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundCode06Component);
    return SoundCode06Component;
}());



/***/ }),

/***/ "./src/app/sound-compare-waves/sound-compare-waves.component.html":
/*!************************************************************************!*\
  !*** ./src/app/sound-compare-waves/sound-compare-waves.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Wave comparison</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              frequency: <input type=\"number\" [(ngModel)]=\"oscillatorNode.frequency.value\"><br>\n              type: <select [(ngModel)]=\"oscillatorNode.type\">\n              <option value=\"sine\">sine</option>\n              <option value=\"square\">square</option>\n              <option value=\"sawtooth\">sawtooth</option>\n              <option value=\"triangle\">triangle</option>\n            </select>\n            </div>\n            <div class=\"col-md-12\" #divA>\n              <app-d3chart [points]=\"dataNormalized\" [minX]=\"0\" [maxX]=\"1\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divA.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n            </div>\n            <div class=\"col-md-12\" #divB>\n              <app-d3chart [points]=\"freqNormalized\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"this.analyser.minDecibels\" [maxY]=\"this.analyser.maxDecibels\" [width]=\"divB.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude (dB)\"></app-d3chart>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sound-compare-waves/sound-compare-waves.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/sound-compare-waves/sound-compare-waves.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWNvbXBhcmUtd2F2ZXMvc291bmQtY29tcGFyZS13YXZlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-compare-waves/sound-compare-waves.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sound-compare-waves/sound-compare-waves.component.ts ***!
  \**********************************************************************/
/*! exports provided: SoundCompareWavesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundCompareWavesComponent", function() { return SoundCompareWavesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");



var SoundCompareWavesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundCompareWavesComponent, _super);
    function SoundCompareWavesComponent() {
        var _this = _super.call(this) || this;
        _this.lastRender = 0;
        _this.time = 0;
        return _this;
    }
    SoundCompareWavesComponent.prototype.ngOnInit = function () {
        this.oscillatorNode = this.audioContext.createOscillator();
        this.oscillatorNode.frequency.value = 110;
        this.oscillatorNode.connect(this.master);
        this.oscillatorNode.start(0);
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundCompareWavesComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
        window.cancelAnimationFrame(this.animationFrame);
    };
    SoundCompareWavesComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundCompareWavesComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    SoundCompareWavesComponent.prototype.draw = function () {
        this.updateDataArray();
        this.updateFrequencyArray();
    };
    SoundCompareWavesComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.startSound();
        }
        else {
            this.stopSound();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('element'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SoundCompareWavesComponent.prototype, "element", void 0);
    SoundCompareWavesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-compare-waves',
            template: __webpack_require__(/*! ./sound-compare-waves.component.html */ "./src/app/sound-compare-waves/sound-compare-waves.component.html"),
            styles: [__webpack_require__(/*! ./sound-compare-waves.component.scss */ "./src/app/sound-compare-waves/sound-compare-waves.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundCompareWavesComponent);
    return SoundCompareWavesComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-contact/sound-contact.component.html":
/*!************************************************************!*\
  !*** ./src/app/sound-contact/sound-contact.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Contact</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <img style=\"width: 100%\" src=\"assets/photo.png\">\n            </div>\n            <div class=\"col-md-5\">\n              <h4>Henrique Rocha</h4>\n              <h5><i class=\"fa fa-envelope-o\"></i> hdlopesrocha91@gmail.com</h5>\n              <h5><i class=\"fa fa-instagram\"></i> hdlopesrocha91</h5>\n              <h5><i class=\"fa fa-github\"></i> https://github.com/hdlopesrocha</h5>\n            </div>\n            <div class=\"col-md-5\">\n              <qr-code value=\"https://hdlopesrocha.github.io/spring-campus-2019/dist/spring/\" [size]=\"300\"></qr-code>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h3>\n                <a href=\"https://hdlopesrocha.github.io/spring-campus-2019/dist/spring/\">https://hdlopesrocha.github.io/spring-campus-2019/dist/spring/</a>\n              </h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-contact/sound-contact.component.scss":
/*!************************************************************!*\
  !*** ./src/app/sound-contact/sound-contact.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWNvbnRhY3Qvc291bmQtY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-contact/sound-contact.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sound-contact/sound-contact.component.ts ***!
  \**********************************************************/
/*! exports provided: SoundContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundContactComponent", function() { return SoundContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundContactComponent = /** @class */ (function () {
    function SoundContactComponent() {
    }
    SoundContactComponent.prototype.ngOnInit = function () {
    };
    SoundContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-contact',
            template: __webpack_require__(/*! ./sound-contact.component.html */ "./src/app/sound-contact/sound-contact.component.html"),
            styles: [__webpack_require__(/*! ./sound-contact.component.scss */ "./src/app/sound-contact/sound-contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundContactComponent);
    return SoundContactComponent;
}());



/***/ }),

/***/ "./src/app/sound-demo-chain/sound-demo-chain.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sound-demo-chain/sound-demo-chain.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Demo</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Node Chain:</h4>\n            <img style=\"width: 100%\" src=\"assets/chain.png\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-demo-chain/sound-demo-chain.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/sound-demo-chain/sound-demo-chain.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWRlbW8tY2hhaW4vc291bmQtZGVtby1jaGFpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-demo-chain/sound-demo-chain.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sound-demo-chain/sound-demo-chain.component.ts ***!
  \****************************************************************/
/*! exports provided: SoundDemoChainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundDemoChainComponent", function() { return SoundDemoChainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundDemoChainComponent = /** @class */ (function () {
    function SoundDemoChainComponent() {
    }
    SoundDemoChainComponent.prototype.ngOnInit = function () {
    };
    SoundDemoChainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-demo-chain',
            template: __webpack_require__(/*! ./sound-demo-chain.component.html */ "./src/app/sound-demo-chain/sound-demo-chain.component.html"),
            styles: [__webpack_require__(/*! ./sound-demo-chain.component.scss */ "./src/app/sound-demo-chain/sound-demo-chain.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundDemoChainComponent);
    return SoundDemoChainComponent;
}());



/***/ }),

/***/ "./src/app/sound-demo-link/sound-demo-link.component.html":
/*!****************************************************************!*\
  !*** ./src/app/sound-demo-link/sound-demo-link.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Demo</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Source: <a [href]=\"link\">{{link}}</a></h4>\n            <qr-code [value]=\"link\" [size]=\"300\"></qr-code>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-demo-link/sound-demo-link.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/sound-demo-link/sound-demo-link.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWRlbW8tbGluay9zb3VuZC1kZW1vLWxpbmsuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-demo-link/sound-demo-link.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sound-demo-link/sound-demo-link.component.ts ***!
  \**************************************************************/
/*! exports provided: SoundDemoLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundDemoLinkComponent", function() { return SoundDemoLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundDemoLinkComponent = /** @class */ (function () {
    function SoundDemoLinkComponent() {
        this.link = 'https://github.com/hdlopesrocha/spring-piano';
    }
    SoundDemoLinkComponent.prototype.ngOnInit = function () {
    };
    SoundDemoLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-demo-link',
            template: __webpack_require__(/*! ./sound-demo-link.component.html */ "./src/app/sound-demo-link/sound-demo-link.component.html"),
            styles: [__webpack_require__(/*! ./sound-demo-link.component.scss */ "./src/app/sound-demo-link/sound-demo-link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundDemoLinkComponent);
    return SoundDemoLinkComponent;
}());



/***/ }),

/***/ "./src/app/sound-envelope/sound-envelope.component.html":
/*!**************************************************************!*\
  !*** ./src/app/sound-envelope/sound-envelope.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>ADSR Envelope</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n            </div>\n            <div class=\"col-md-6\">\n              <img style=\"width: 100%\" src=\"assets/adsr.jpg\">\n            </div>\n            <div class=\"col-md-3\">\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-envelope/sound-envelope.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/sound-envelope/sound-envelope.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWVudmVsb3BlL3NvdW5kLWVudmVsb3BlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sound-envelope/sound-envelope.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sound-envelope/sound-envelope.component.ts ***!
  \************************************************************/
/*! exports provided: SoundEnvelopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundEnvelopeComponent", function() { return SoundEnvelopeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundEnvelopeComponent = /** @class */ (function () {
    function SoundEnvelopeComponent() {
    }
    SoundEnvelopeComponent.prototype.ngOnInit = function () {
    };
    SoundEnvelopeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-envelope',
            template: __webpack_require__(/*! ./sound-envelope.component.html */ "./src/app/sound-envelope/sound-envelope.component.html"),
            styles: [__webpack_require__(/*! ./sound-envelope.component.scss */ "./src/app/sound-envelope/sound-envelope.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundEnvelopeComponent);
    return SoundEnvelopeComponent;
}());



/***/ }),

/***/ "./src/app/sound-harmonics-generator/sound-harmonics-generator.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/sound-harmonics-generator/sound-harmonics-generator.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Harmonics</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <label>Iterations: {{iterations}}</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input class=\"form-control\" type=\"range\" min=\"0\" max=\"30\" step=\"1\" [(ngModel)]=\"iterations\" (change)=\"setIterations()\"/>\n            </div>\n            <div class=\"col-md-2\">\n              <div class=\"btn btn-info\" style=\"width: 100%\" (click)=\"randomize()\">Randomize</div>\n            </div>\n            <div class=\"col-md-12\" #div12>\n              <app-d3chart [points]=\"samples\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"-1.5\" [maxY]=\"1.5\" [width]=\"div12.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n            </div>\n            <app-math-formula class=\"col-md-12\" [formula]=\"initialFormula\">\n            </app-math-formula>\n            <div class=\"col-md-12\" #divB>\n              <app-d3chart [points]=\"freqNormalized\" [minX]=\"0\" [maxX]=\"maxFreq/4\" [minY]=\"this.analyser.minDecibels\" [maxY]=\"0\" [width]=\"divB.clientWidth-20\" [height]=\"300\" labelX=\"frequency (Hz)\" labelY=\"amplitude (dB)\"></app-d3chart>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-harmonics-generator/sound-harmonics-generator.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/sound-harmonics-generator/sound-harmonics-generator.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWhhcm1vbmljcy1nZW5lcmF0b3Ivc291bmQtaGFybW9uaWNzLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-harmonics-generator/sound-harmonics-generator.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/sound-harmonics-generator/sound-harmonics-generator.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SoundHarmonicsGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundHarmonicsGeneratorComponent", function() { return SoundHarmonicsGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");



var SoundHarmonicsGeneratorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundHarmonicsGeneratorComponent, _super);
    function SoundHarmonicsGeneratorComponent() {
        var _this = _super.call(this) || this;
        _this.currentFrequency = 220;
        _this.samples = [];
        _this.iterations = 1;
        _this.initialFormula = 'g(k, a) = a \\times sin(2\\pi \\times kft) \\\\ f(t) = g(1, A) + \\sum_{k=2}^{\\infty} g(k, \\frac{A\\times random(0,1)}{e^{-(k-1)/4}}), f= ' + _this.currentFrequency + ', A=0.5';
        _this.minX = 0;
        _this.maxX = 4 / _this.currentFrequency;
        _this.lastRender = 0;
        _this.time = 0;
        _this.initialSeed = 1;
        _this.seed = _this.initialSeed;
        _this.source = _this.audioContext.createBufferSource();
        _this.source.buffer = _this.audioContext.createBuffer(2, _this.audioContext.sampleRate, _this.audioContext.sampleRate);
        _this.source.loop = true;
        _this.source.connect(_this.master);
        _this.source.start();
        return _this;
    }
    SoundHarmonicsGeneratorComponent.prototype.ngOnInit = function () {
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundHarmonicsGeneratorComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.updateSound();
            this.startSound();
        }
        else if (this.source) {
            this.stopSound();
        }
    };
    SoundHarmonicsGeneratorComponent.prototype.updateSoundAnalyserChart = function () {
        this.updateFrequencyArray();
    };
    SoundHarmonicsGeneratorComponent.prototype.updateSound = function () {
        var myArrayBuffer = this.source.buffer;
        var A = 1 / 2;
        var f = this.currentFrequency;
        for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
            var nowBuffering = myArrayBuffer.getChannelData(channel);
            for (var i = 0; i < myArrayBuffer.length; i++) {
                var t = (i / this.audioContext.sampleRate);
                nowBuffering[i] = this.signal(t, A, f, this.iterations);
            }
        }
    };
    SoundHarmonicsGeneratorComponent.prototype.signal = function (t, A, f, iterations) {
        var x = 0;
        this.seed = this.initialSeed;
        for (var i = 1; i <= iterations; ++i) {
            var r = this.random() * 2.0 - 1;
            r = r < 0 ? 0 : r * 0.25;
            var a = i == 1 ? A : A * r;
            a *= Math.exp(-(i - 1) / 4);
            x += a * Math.sin(2 * Math.PI * (f * (i)) * t);
        }
        return x;
    };
    SoundHarmonicsGeneratorComponent.prototype.randomize = function () {
        this.initialSeed = Math.random() * 99999;
        this.setIterations();
    };
    SoundHarmonicsGeneratorComponent.prototype.random = function () {
        var x = Math.abs(Math.sin(this.seed++) * 10000);
        return x - Math.floor(x);
    };
    SoundHarmonicsGeneratorComponent.prototype.setIterations = function () {
        this.updateSound();
        this.updateChart();
    };
    SoundHarmonicsGeneratorComponent.prototype.updateChart = function () {
        var A = 1 / 2;
        var f = this.currentFrequency;
        this.samples = [];
        var inc = (this.maxX - this.minX) / 1024;
        for (var t = this.minX; t <= this.maxX; t += inc) {
            this.samples.push({ x: t, y: this.signal(t, A, f, this.iterations) });
        }
    };
    SoundHarmonicsGeneratorComponent.prototype.ngAfterContentInit = function () {
        this.setIterations();
    };
    SoundHarmonicsGeneratorComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundHarmonicsGeneratorComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    SoundHarmonicsGeneratorComponent.prototype.draw = function () {
        this.updateSoundAnalyserChart();
    };
    SoundHarmonicsGeneratorComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
        window.cancelAnimationFrame(this.animationFrame);
    };
    SoundHarmonicsGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-harmonics-generator',
            template: __webpack_require__(/*! ./sound-harmonics-generator.component.html */ "./src/app/sound-harmonics-generator/sound-harmonics-generator.component.html"),
            styles: [__webpack_require__(/*! ./sound-harmonics-generator.component.scss */ "./src/app/sound-harmonics-generator/sound-harmonics-generator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundHarmonicsGeneratorComponent);
    return SoundHarmonicsGeneratorComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-harmonics/sound-harmonics.component.html":
/*!****************************************************************!*\
  !*** ./src/app/sound-harmonics/sound-harmonics.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Timbre</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n\n            <div class=\"col-md-12\">\n              Timbre distinguishes different types of musical instruments.\n              <ul>\n                <li>\n                  Spectrum\n                </li>\n                <li>\n                  Envelope\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-md-12\" #divE>\n              <app-d3chart [points]=\"freqNormalized\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"this.analyser.minDecibels\" [maxY]=\"this.analyser.maxDecibels\" [width]=\"divE.clientWidth-20\" [height]=\"300\" labelX=\"frequency (Hz)\" labelY=\"amplitude (dB)\"></app-d3chart>\n            </div>\n            <div *ngIf=\"!selectedChart\" class=\"col-md-3 text-center\" #divA>\n              <h4>Acoustic Guitar</h4>\n              <app-d3chart *ngIf=\"guitar\" [points]=\"guitarArray\" strokeSize=\"1\" [minX]=\"0\" [maxX]=\"4\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divA.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <div *ngIf=\"guitar\" class=\"btn btn-success\" (click)=\"play(guitar)\">\n                <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"btn btn-info\" (click)=\"toggleZoom(1)\">\n                <i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n            <div *ngIf=\"!selectedChart\" class=\"col-md-3 text-center\" #divB>\n              <h4>Electric Guitar</h4>\n              <app-d3chart *ngIf=\"electric\" [points]=\"electricArray\" strokeSize=\"1\" [minX]=\"0\" [maxX]=\"4\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divB.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <div *ngIf=\"electric\" class=\"btn btn-success\" (click)=\"play(electric)\">\n                <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"btn btn-info\" (click)=\"toggleZoom(2)\">\n                <i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n            <div *ngIf=\"!selectedChart\" class=\"col-md-3 text-center\" #divC>\n              <h4>Piano</h4>\n              <app-d3chart *ngIf=\"piano\" [points]=\"pianoArray\" strokeSize=\"1\" [minX]=\"0\" [maxX]=\"4\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divC.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <div *ngIf=\"piano\" class=\"btn btn-success\" (click)=\"play(piano)\">\n                <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"btn btn-info\" (click)=\"toggleZoom(3)\">\n                <i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n            <div *ngIf=\"!selectedChart\" class=\"col-md-3 text-center\" #divD>\n              <h4>Xylophone</h4>\n              <app-d3chart *ngIf=\"xylophone\" [points]=\"xylophoneArray\" strokeSize=\"1\" [minX]=\"0\" [maxX]=\"4\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divD.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <div *ngIf=\"xylophone\" class=\"btn btn-success\" (click)=\"play(xylophone)\">\n                <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"btn btn-info\" (click)=\"toggleZoom(4)\">\n                <i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n\n            <!-- Maximized version -->\n\n            <div *ngIf=\"selectedChart == 1\" class=\"col-md-12 text-center\" #divA>\n              <h4>Acoustic Guitar</h4>\n              <app-d3chart *ngIf=\"guitar\" [points]=\"guitarArray\" strokeSize=\"1\" [minX]=\"0\" [maxX]=\"4\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divA.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <div *ngIf=\"guitar\" class=\"btn btn-success\" (click)=\"play(guitar)\">\n                <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"btn btn-info\" (click)=\"toggleZoom(1)\">\n                <i class=\"fa fa-search-minus\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n            <div *ngIf=\"selectedChart == 2\" class=\"col-md-12 text-center\" #divB>\n              <h4>Electric Guitar</h4>\n              <app-d3chart *ngIf=\"electric\" [points]=\"electricArray\" strokeSize=\"1\" [minX]=\"0\" [maxX]=\"4\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divB.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <div *ngIf=\"electric\" class=\"btn btn-success\" (click)=\"play(electric)\">\n                <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"btn btn-info\" (click)=\"toggleZoom(2)\">\n                <i class=\"fa fa-search-minus\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n            <div *ngIf=\"selectedChart == 3\" class=\"col-md-12 text-center\" #divC>\n              <h4>Piano</h4>\n              <app-d3chart *ngIf=\"piano\" [points]=\"pianoArray\" strokeSize=\"1\" [minX]=\"0\" [maxX]=\"4\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divC.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <div *ngIf=\"piano\" class=\"btn btn-success\" (click)=\"play(piano)\">\n                <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"btn btn-info\" (click)=\"toggleZoom(3)\">\n                <i class=\"fa fa-search-minus\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n            <div *ngIf=\"selectedChart == 4\" class=\"col-md-12 text-center\" #divD>\n              <h4>Xylophone</h4>\n              <app-d3chart *ngIf=\"xylophone\" [points]=\"xylophoneArray\" strokeSize=\"1\" [minX]=\"0\" [maxX]=\"4\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divD.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <div *ngIf=\"xylophone\" class=\"btn btn-success\" (click)=\"play(xylophone)\">\n                <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"btn btn-info\" (click)=\"toggleZoom(4)\">\n                <i class=\"fa fa-search-minus\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-harmonics/sound-harmonics.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/sound-harmonics/sound-harmonics.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWhhcm1vbmljcy9zb3VuZC1oYXJtb25pY3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-harmonics/sound-harmonics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sound-harmonics/sound-harmonics.component.ts ***!
  \**************************************************************/
/*! exports provided: SoundHarmonicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundHarmonicsComponent", function() { return SoundHarmonicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SoundHarmonicsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundHarmonicsComponent, _super);
    function SoundHarmonicsComponent(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.lastRender = 0;
        _this.time = 0;
        _this.pianoArray = [];
        _this.xylophoneArray = [];
        _this.guitarArray = [];
        _this.electricArray = [];
        _this.selectedChart = 0;
        _this.options = {
            responseType: 'arraybuffer',
            headers: {}
        };
        _this.loadAudio("assets/guitar.mp3", function (source, buffer) {
            _this.guitarArray = _this.bufferToArray(buffer);
            _this.guitar = source;
            source.connect(_this.master);
        });
        _this.loadAudio("assets/piano.mp3", function (source, buffer) {
            _this.pianoArray = _this.bufferToArray(buffer);
            _this.piano = source;
            source.connect(_this.master);
        });
        _this.loadAudio("assets/xylophone.mp3", function (source, buffer) {
            _this.xylophoneArray = _this.bufferToArray(buffer);
            _this.xylophone = source;
            source.connect(_this.master);
        });
        _this.loadAudio("assets/electric.mp3", function (source, buffer) {
            _this.electricArray = _this.bufferToArray(buffer);
            _this.electric = source;
            source.connect(_this.master);
        });
        return _this;
    }
    SoundHarmonicsComponent.prototype.play = function (node) {
        this.startSound();
        node.mediaElement.currentTime = 0;
        node.mediaElement.play();
    };
    SoundHarmonicsComponent.prototype.loadAudio = function (src, callback) {
        var _this = this;
        var that = this;
        this.httpClient.get(src, this.options).subscribe(function (data) {
            _this.audioContext.decodeAudioData(data, function (buffer) {
                var audio = new Audio(src);
                var source = that.audioContext.createMediaElementSource(audio);
                callback(source, buffer);
            });
        });
    };
    SoundHarmonicsComponent.prototype.bufferToArray = function (buffer) {
        var array = new Array(buffer.length);
        var data = buffer.getChannelData(0);
        for (var i = 0; i < data.length; ++i) {
            array[i] = { x: i / buffer.sampleRate, y: data[i] };
        }
        return array;
    };
    SoundHarmonicsComponent.prototype.ngOnInit = function () {
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundHarmonicsComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.startSound();
        }
        else if (this.master) {
            this.stopSound();
        }
    };
    SoundHarmonicsComponent.prototype.updateSoundAnalyserChart = function () {
        this.updateFrequencyArray();
    };
    SoundHarmonicsComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundHarmonicsComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    SoundHarmonicsComponent.prototype.draw = function () {
        this.updateSoundAnalyserChart();
    };
    SoundHarmonicsComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
        window.cancelAnimationFrame(this.animationFrame);
    };
    SoundHarmonicsComponent.prototype.toggleZoom = function (number) {
        this.selectedChart = this.selectedChart ? 0 : number;
    };
    SoundHarmonicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-harmonics',
            template: __webpack_require__(/*! ./sound-harmonics.component.html */ "./src/app/sound-harmonics/sound-harmonics.component.html"),
            styles: [__webpack_require__(/*! ./sound-harmonics.component.scss */ "./src/app/sound-harmonics/sound-harmonics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SoundHarmonicsComponent);
    return SoundHarmonicsComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-home/sound-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/sound-home/sound-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n\n<ul class=\"nav justify-content-end\">\n  <li class=\"btn btn-info\" (click)=\"addSlide(-1)\">\n    <i class=\"fa fa-arrow-left\"></i>\n  </li>\n  <li class=\"btn btn-info\" (click)=\"addSlide(+1)\">\n    <i class=\"fa fa-arrow-right\"></i>\n  </li>\n</ul>\n\n<template #slideContainer></template>\n"

/***/ }),

/***/ "./src/app/sound-home/sound-home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sound-home/sound-home.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWhvbWUvc291bmQtaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-home/sound-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sound-home/sound-home.component.ts ***!
  \****************************************************/
/*! exports provided: SoundHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundHomeComponent", function() { return SoundHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sound_title_sound_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sound-title/sound-title.component */ "./src/app/sound-title/sound-title.component.ts");
/* harmony import */ var _sound_intro_sound_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sound-intro/sound-intro.component */ "./src/app/sound-intro/sound-intro.component.ts");
/* harmony import */ var _sound_sin_form_sound_sin_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sound-sin-form/sound-sin-form.component */ "./src/app/sound-sin-form/sound-sin-form.component.ts");
/* harmony import */ var _sound_sine_example_sound_sine_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sound-sine-example/sound-sine-example.component */ "./src/app/sound-sine-example/sound-sine-example.component.ts");
/* harmony import */ var _sound_simple_demo_sound_simple_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sound-simple-demo/sound-simple-demo.component */ "./src/app/sound-simple-demo/sound-simple-demo.component.ts");
/* harmony import */ var _sound_square_wave_sound_square_wave_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sound-square-wave/sound-square-wave.component */ "./src/app/sound-square-wave/sound-square-wave.component.ts");
/* harmony import */ var _sound_square_example_sound_square_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sound-square-example/sound-square-example.component */ "./src/app/sound-square-example/sound-square-example.component.ts");
/* harmony import */ var _sound_sawtooth_wave_sound_sawtooth_wave_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sound-sawtooth-wave/sound-sawtooth-wave.component */ "./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.ts");
/* harmony import */ var _sound_sawtooth_example_sound_sawtooth_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sound-sawtooth-example/sound-sawtooth-example.component */ "./src/app/sound-sawtooth-example/sound-sawtooth-example.component.ts");
/* harmony import */ var _sound_square_fourier_sound_square_fourier_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sound-square-fourier/sound-square-fourier.component */ "./src/app/sound-square-fourier/sound-square-fourier.component.ts");
/* harmony import */ var _sound_compare_waves_sound_compare_waves_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sound-compare-waves/sound-compare-waves.component */ "./src/app/sound-compare-waves/sound-compare-waves.component.ts");
/* harmony import */ var _sound_player_sound_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sound-player/sound-player.component */ "./src/app/sound-player/sound-player.component.ts");
/* harmony import */ var _sound_pass_filter_sound_pass_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sound-pass-filter/sound-pass-filter.component */ "./src/app/sound-pass-filter/sound-pass-filter.component.ts");
/* harmony import */ var _sound_noise_wave_sound_noise_wave_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sound-noise-wave/sound-noise-wave.component */ "./src/app/sound-noise-wave/sound-noise-wave.component.ts");
/* harmony import */ var _sound_snare_wave_sound_snare_wave_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sound-snare-wave/sound-snare-wave.component */ "./src/app/sound-snare-wave/sound-snare-wave.component.ts");
/* harmony import */ var _sound_kick_wave_sound_kick_wave_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../sound-kick-wave/sound-kick-wave.component */ "./src/app/sound-kick-wave/sound-kick-wave.component.ts");
/* harmony import */ var _sound_harmonics_generator_sound_harmonics_generator_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../sound-harmonics-generator/sound-harmonics-generator.component */ "./src/app/sound-harmonics-generator/sound-harmonics-generator.component.ts");
/* harmony import */ var _sound_harmonics_sound_harmonics_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../sound-harmonics/sound-harmonics.component */ "./src/app/sound-harmonics/sound-harmonics.component.ts");
/* harmony import */ var _sound_test_sound_test_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../sound-test/sound-test.component */ "./src/app/sound-test/sound-test.component.ts");
/* harmony import */ var _sound_wapi_intro_sound_wapi_intro_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../sound-wapi-intro/sound-wapi-intro.component */ "./src/app/sound-wapi-intro/sound-wapi-intro.component.ts");
/* harmony import */ var _sound_wapi_oscillator_sound_wapi_oscillator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../sound-wapi-oscillator/sound-wapi-oscillator.component */ "./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.ts");
/* harmony import */ var _sound_demo_link_sound_demo_link_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../sound-demo-link/sound-demo-link.component */ "./src/app/sound-demo-link/sound-demo-link.component.ts");
/* harmony import */ var _sound_code01_sound_code01_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../sound-code01/sound-code01.component */ "./src/app/sound-code01/sound-code01.component.ts");
/* harmony import */ var _sound_code02_sound_code02_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../sound-code02/sound-code02.component */ "./src/app/sound-code02/sound-code02.component.ts");
/* harmony import */ var _sound_code03_sound_code03_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../sound-code03/sound-code03.component */ "./src/app/sound-code03/sound-code03.component.ts");
/* harmony import */ var _sound_code04_sound_code04_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../sound-code04/sound-code04.component */ "./src/app/sound-code04/sound-code04.component.ts");
/* harmony import */ var _sound_code05_sound_code05_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../sound-code05/sound-code05.component */ "./src/app/sound-code05/sound-code05.component.ts");
/* harmony import */ var _sound_code06_sound_code06_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../sound-code06/sound-code06.component */ "./src/app/sound-code06/sound-code06.component.ts");
/* harmony import */ var _sound_references_sound_references_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../sound-references/sound-references.component */ "./src/app/sound-references/sound-references.component.ts");
/* harmony import */ var _sound_questions_sound_questions_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../sound-questions/sound-questions.component */ "./src/app/sound-questions/sound-questions.component.ts");
/* harmony import */ var _sound_contact_sound_contact_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../sound-contact/sound-contact.component */ "./src/app/sound-contact/sound-contact.component.ts");
/* harmony import */ var _sound_artists_sound_artists_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../sound-artists/sound-artists.component */ "./src/app/sound-artists/sound-artists.component.ts");
/* harmony import */ var _sound_envelope_sound_envelope_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../sound-envelope/sound-envelope.component */ "./src/app/sound-envelope/sound-envelope.component.ts");
/* harmony import */ var _sound_pass_filter2_sound_pass_filter2_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../sound-pass-filter2/sound-pass-filter2.component */ "./src/app/sound-pass-filter2/sound-pass-filter2.component.ts");





































var SoundHomeComponent = /** @class */ (function () {
    function SoundHomeComponent(router, route, resolver) {
        this.router = router;
        this.route = route;
        this.resolver = resolver;
        this.slideNumber = 0;
        this.showAll = false;
        this.slides = [
            _sound_title_sound_title_component__WEBPACK_IMPORTED_MODULE_3__["SoundTitleComponent"],
            _sound_intro_sound_intro_component__WEBPACK_IMPORTED_MODULE_4__["SoundIntroComponent"],
            _sound_sin_form_sound_sin_form_component__WEBPACK_IMPORTED_MODULE_5__["SoundSinFormComponent"],
            _sound_sine_example_sound_sine_example_component__WEBPACK_IMPORTED_MODULE_6__["SoundSineExampleComponent"],
            _sound_simple_demo_sound_simple_demo_component__WEBPACK_IMPORTED_MODULE_7__["SoundSimpleDemoComponent"],
            _sound_square_wave_sound_square_wave_component__WEBPACK_IMPORTED_MODULE_8__["SoundSquareWaveComponent"],
            _sound_square_example_sound_square_example_component__WEBPACK_IMPORTED_MODULE_9__["SoundSquareExampleComponent"],
            _sound_sawtooth_wave_sound_sawtooth_wave_component__WEBPACK_IMPORTED_MODULE_10__["SoundSawtoothWaveComponent"],
            _sound_sawtooth_example_sound_sawtooth_example_component__WEBPACK_IMPORTED_MODULE_11__["SoundSawtoothExampleComponent"],
            _sound_square_fourier_sound_square_fourier_component__WEBPACK_IMPORTED_MODULE_12__["SoundSquareFourierComponent"],
            _sound_compare_waves_sound_compare_waves_component__WEBPACK_IMPORTED_MODULE_13__["SoundCompareWavesComponent"],
            _sound_player_sound_player_component__WEBPACK_IMPORTED_MODULE_14__["SoundPlayerComponent"],
            _sound_pass_filter_sound_pass_filter_component__WEBPACK_IMPORTED_MODULE_15__["SoundPassFilterComponent"],
            _sound_pass_filter2_sound_pass_filter2_component__WEBPACK_IMPORTED_MODULE_36__["SoundPassFilter2Component"],
            _sound_noise_wave_sound_noise_wave_component__WEBPACK_IMPORTED_MODULE_16__["SoundNoiseWaveComponent"],
            _sound_harmonics_sound_harmonics_component__WEBPACK_IMPORTED_MODULE_20__["SoundHarmonicsComponent"],
            _sound_envelope_sound_envelope_component__WEBPACK_IMPORTED_MODULE_35__["SoundEnvelopeComponent"],
            _sound_snare_wave_sound_snare_wave_component__WEBPACK_IMPORTED_MODULE_17__["SoundSnareWaveComponent"],
            _sound_kick_wave_sound_kick_wave_component__WEBPACK_IMPORTED_MODULE_18__["SoundKickWaveComponent"],
            _sound_harmonics_generator_sound_harmonics_generator_component__WEBPACK_IMPORTED_MODULE_19__["SoundHarmonicsGeneratorComponent"],
            _sound_test_sound_test_component__WEBPACK_IMPORTED_MODULE_21__["SoundTestComponent"],
            _sound_wapi_intro_sound_wapi_intro_component__WEBPACK_IMPORTED_MODULE_22__["SoundWapiIntroComponent"],
            _sound_wapi_oscillator_sound_wapi_oscillator_component__WEBPACK_IMPORTED_MODULE_23__["SoundWapiOscillatorComponent"],
            _sound_demo_link_sound_demo_link_component__WEBPACK_IMPORTED_MODULE_24__["SoundDemoLinkComponent"],
            _sound_code01_sound_code01_component__WEBPACK_IMPORTED_MODULE_25__["SoundCode01Component"],
            _sound_code02_sound_code02_component__WEBPACK_IMPORTED_MODULE_26__["SoundCode02Component"],
            _sound_code03_sound_code03_component__WEBPACK_IMPORTED_MODULE_27__["SoundCode03Component"],
            _sound_code04_sound_code04_component__WEBPACK_IMPORTED_MODULE_28__["SoundCode04Component"],
            _sound_code05_sound_code05_component__WEBPACK_IMPORTED_MODULE_29__["SoundCode05Component"],
            _sound_code06_sound_code06_component__WEBPACK_IMPORTED_MODULE_30__["SoundCode06Component"],
            _sound_references_sound_references_component__WEBPACK_IMPORTED_MODULE_31__["SoundReferencesComponent"],
            _sound_questions_sound_questions_component__WEBPACK_IMPORTED_MODULE_32__["SoundQuestionsComponent"],
            _sound_contact_sound_contact_component__WEBPACK_IMPORTED_MODULE_33__["SoundContactComponent"],
            _sound_artists_sound_artists_component__WEBPACK_IMPORTED_MODULE_34__["SoundArtistsComponent"]
        ];
    }
    SoundHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            var sn = p['slide'];
            if (sn) {
                _this.slideNumber = Number(sn);
            }
        });
        this.createComponent();
    };
    SoundHomeComponent.prototype.addSlide = function (value) {
        this.slideNumber += value;
        if (this.slideNumber < 0) {
            this.slideNumber = 0;
        }
        if (this.slideNumber >= this.slides.length) {
            this.slideNumber = this.slides.length - 1;
        }
        var url = this.router.createUrlTree(['/sound'], {
            queryParams: {
                slide: this.slideNumber
            }
        });
        this.router.navigateByUrl(url.toString());
        this.createComponent();
    };
    SoundHomeComponent.prototype.createComponent = function () {
        this.entry.clear();
        if (this.showAll) {
            for (var i = 0; i < this.slides.length; ++i) {
                this.loadComponent(i);
            }
        }
        else {
            this.loadComponent(this.slideNumber);
        }
    };
    SoundHomeComponent.prototype.loadComponent = function (index) {
        var factory = this.resolver.resolveComponentFactory(this.slides[index]);
        this.entry.createComponent(factory);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], SoundHomeComponent.prototype, "entry", void 0);
    SoundHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-home',
            template: __webpack_require__(/*! ./sound-home.component.html */ "./src/app/sound-home/sound-home.component.html"),
            styles: [__webpack_require__(/*! ./sound-home.component.scss */ "./src/app/sound-home/sound-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], SoundHomeComponent);
    return SoundHomeComponent;
}());



/***/ }),

/***/ "./src/app/sound-intro/sound-intro.component.html":
/*!********************************************************!*\
  !*** ./src/app/sound-intro/sound-intro.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>What is sound?</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <blockquote>\n\n              \"In physics, sound is a vibration that typically propagates as an audible wave of pressure, through a transmission medium such as a gas, liquid or solid.\"\n              <footer><cite>https://en.wikipedia.org/wiki/Sound</cite></footer>\n            </blockquote>\n\n            Sound waves are often simplified to a description in terms of sinusoidal plane waves.\n          </div>\n          <div class=\"col-lg-12 text-center\">\n            <canvas style=\"width: 50%\" id=\"canvas\" width=\"800\" height=\"800\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-intro/sound-intro.component.scss":
/*!********************************************************!*\
  !*** ./src/app/sound-intro/sound-intro.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWludHJvL3NvdW5kLWludHJvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sound-intro/sound-intro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sound-intro/sound-intro.component.ts ***!
  \******************************************************/
/*! exports provided: SoundIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundIntroComponent", function() { return SoundIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundIntroComponent = /** @class */ (function () {
    function SoundIntroComponent() {
        this.canvas = null;
        this.points = [];
        this.pointSize = 3;
        this.hDistance = 10;
        this.vDistance = this.hDistance * Math.sqrt(3) / 2.0;
        this.amplitude = 10;
        this.time = 0;
        this.lastRender = 0;
    }
    SoundIntroComponent.prototype.ngOnInit = function () {
        this.canvas = document.getElementById("canvas");
        for (var y = 0; y * this.vDistance < this.canvas.height; ++y) {
            for (var x = 0; x * this.hDistance < this.canvas.width; ++x) {
                this.points.push({
                    x: this.hDistance * (y % 2 ? x : x + 0.5),
                    y: this.vDistance * y
                });
            }
        }
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundIntroComponent.prototype.ngOnDestroy = function () {
        window.cancelAnimationFrame(this.animationFrame);
    };
    SoundIntroComponent.prototype.draw = function () {
        var ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.fillStyle = "#000000";
        for (var i = 0; i < this.points.length; ++i) {
            var cx = this.canvas.width / 2;
            var cy = this.canvas.height / 2;
            var px = this.points[i].x;
            var py = this.points[i].y;
            var dx = cx - px;
            var dy = cy - py;
            var r = Math.sqrt(dx * dx + dy * dy);
            var a = Math.atan2(dy, dx);
            var t = r * 0.05 - this.time * 0.003;
            var displacement = this.amplitude * (2 + Math.sin(t) / (r * r * 0.00001 + 0.5));
            var x = cx + (r + displacement) * Math.cos(a);
            var y = cy + (r + displacement) * Math.sin(a);
            ctx.beginPath(); //Start path
            ctx.arc(x, y, this.pointSize, 0, Math.PI * 2, true);
            ctx.fill();
        }
    };
    SoundIntroComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    SoundIntroComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-intro',
            template: __webpack_require__(/*! ./sound-intro.component.html */ "./src/app/sound-intro/sound-intro.component.html"),
            styles: [__webpack_require__(/*! ./sound-intro.component.scss */ "./src/app/sound-intro/sound-intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundIntroComponent);
    return SoundIntroComponent;
}());



/***/ }),

/***/ "./src/app/sound-kick-wave/sound-kick-wave.component.html":
/*!****************************************************************!*\
  !*** ./src/app/sound-kick-wave/sound-kick-wave.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Kick (with decay)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\" #divA>\n              <app-d3chart [points]=\"base\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divA.clientWidth-20\" [height]=\"250\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <app-math-formula class=\"col-md-12\" [formula]=\"baseFormula\">\n              </app-math-formula>\n            </div>\n\n            <div class=\"col-md-6\" #divB>\n              <app-d3chart [points]=\"multiplier\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"0\" [maxY]=\"1.05\" [width]=\"divB.clientWidth-20\" [height]=\"250\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <app-math-formula class=\"col-md-12\" [formula]=\"multiplierFormula\">\n              </app-math-formula>\n            </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\" #divC>\n              <app-d3chart [points]=\"result\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divC.clientWidth-20\" [height]=\"250\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n\n              <app-math-formula class=\"col-md-12\" [formula]=\"resultFormula\">\n              </app-math-formula>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-kick-wave/sound-kick-wave.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/sound-kick-wave/sound-kick-wave.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLWtpY2std2F2ZS9zb3VuZC1raWNrLXdhdmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-kick-wave/sound-kick-wave.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sound-kick-wave/sound-kick-wave.component.ts ***!
  \**************************************************************/
/*! exports provided: SoundKickWaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundKickWaveComponent", function() { return SoundKickWaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");



var SoundKickWaveComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundKickWaveComponent, _super);
    function SoundKickWaveComponent() {
        var _this = _super.call(this) || this;
        _this.multiplier = [];
        _this.result = [];
        _this.base = [];
        _this.multiplierFormula = 'g(t) = e^{-5t}';
        _this.baseFormula = 'f(t) = sin(60 \\times 2\\pi t)';
        _this.resultFormula = 'h(t) = f(t) \\times g(t)';
        _this.minX = 0;
        _this.maxX = 1;
        _this.source = _this.audioContext.createBufferSource();
        _this.source.buffer = _this.audioContext.createBuffer(2, _this.audioContext.sampleRate, _this.audioContext.sampleRate);
        _this.source.loop = true;
        _this.source.connect(_this.master);
        _this.source.start();
        return _this;
    }
    SoundKickWaveComponent.prototype.ngOnInit = function () {
        this.setIterations();
    };
    SoundKickWaveComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.updateSound();
            this.startSound();
        }
        else if (this.source) {
            this.stopSound();
        }
    };
    SoundKickWaveComponent.prototype.getMultiplier = function (t) {
        return Math.exp(-5 * t);
    };
    SoundKickWaveComponent.prototype.getValue = function (t) {
        return Math.sin(t * Math.PI * 2 * 60);
    };
    SoundKickWaveComponent.prototype.updateSound = function () {
        var myArrayBuffer = this.source.buffer;
        for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
            var nowBuffering = myArrayBuffer.getChannelData(channel);
            for (var i = 0; i < myArrayBuffer.length; i++) {
                var perc = i / myArrayBuffer.length;
                nowBuffering[i] = this.getValue(perc) * this.getMultiplier(perc);
            }
        }
    };
    SoundKickWaveComponent.prototype.setIterations = function () {
        this.updateSound();
        this.updateChart();
    };
    SoundKickWaveComponent.prototype.updateChart = function () {
        this.base = [];
        this.multiplier = [];
        this.result = [];
        for (var t = this.minX; t < this.maxX; t += 0.001) {
            var y = this.getValue(t);
            var m = this.getMultiplier(t);
            this.multiplier.push({ x: t, y: m });
            this.base.push({ x: t, y: y });
            this.result.push({ x: t, y: y * m });
        }
    };
    SoundKickWaveComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
    };
    SoundKickWaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-kick-wave',
            template: __webpack_require__(/*! ./sound-kick-wave.component.html */ "./src/app/sound-kick-wave/sound-kick-wave.component.html"),
            styles: [__webpack_require__(/*! ./sound-kick-wave.component.scss */ "./src/app/sound-kick-wave/sound-kick-wave.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundKickWaveComponent);
    return SoundKickWaveComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-noise-wave/sound-noise-wave.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sound-noise-wave/sound-noise-wave.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>White Noise</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\" #divA>\n            <app-d3chart [points]=\"samples\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divA.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n          </div>\n          <div class=\"col-md-12\" #divB>\n            <app-d3chart [points]=\"freqNormalized\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"this.analyser.minDecibels\" [maxY]=\"this.analyser.maxDecibels\" [width]=\"divB.clientWidth-20\" [height]=\"300\" labelX=\"frequency (Hz)\" labelY=\"amplitude\"></app-d3chart>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-noise-wave/sound-noise-wave.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/sound-noise-wave/sound-noise-wave.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLW5vaXNlLXdhdmUvc291bmQtbm9pc2Utd2F2ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-noise-wave/sound-noise-wave.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sound-noise-wave/sound-noise-wave.component.ts ***!
  \****************************************************************/
/*! exports provided: SoundNoiseWaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundNoiseWaveComponent", function() { return SoundNoiseWaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");



var SoundNoiseWaveComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundNoiseWaveComponent, _super);
    function SoundNoiseWaveComponent() {
        var _this = _super.call(this) || this;
        _this.lastRender = 0;
        _this.time = 0;
        _this.samples = [];
        _this.minX = 0;
        _this.maxX = 1;
        _this.source = _this.audioContext.createBufferSource();
        _this.source.buffer = _this.audioContext.createBuffer(2, _this.audioContext.sampleRate, _this.audioContext.sampleRate);
        _this.source.loop = true;
        _this.source.connect(_this.master);
        _this.source.start();
        return _this;
    }
    SoundNoiseWaveComponent.prototype.ngOnInit = function () {
        this.setIterations();
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundNoiseWaveComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.updateSound();
            this.startSound();
        }
        else {
            this.stopSound();
        }
    };
    SoundNoiseWaveComponent.prototype.updateSound = function () {
        var myArrayBuffer = this.source.buffer;
        for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
            var nowBuffering = myArrayBuffer.getChannelData(channel);
            for (var i = 0; i < myArrayBuffer.length; i++) {
                nowBuffering[i] = Math.random() * 2 - 1;
            }
        }
    };
    SoundNoiseWaveComponent.prototype.setIterations = function () {
        if (this.soundEnabled) {
            this.updateSound();
        }
        this.updateChart();
    };
    SoundNoiseWaveComponent.prototype.updateChart = function () {
        this.samples = [];
        for (var t = this.minX; t <= this.maxX; t += 0.001) {
            var y = Math.random() * 2 - 1;
            this.samples.push({ x: t, y: y });
        }
    };
    SoundNoiseWaveComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundNoiseWaveComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    SoundNoiseWaveComponent.prototype.draw = function () {
        this.updateFrequencyArray();
    };
    SoundNoiseWaveComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
        window.cancelAnimationFrame(this.animationFrame);
    };
    SoundNoiseWaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-noise-wave',
            template: __webpack_require__(/*! ./sound-noise-wave.component.html */ "./src/app/sound-noise-wave/sound-noise-wave.component.html"),
            styles: [__webpack_require__(/*! ./sound-noise-wave.component.scss */ "./src/app/sound-noise-wave/sound-noise-wave.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundNoiseWaveComponent);
    return SoundNoiseWaveComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-pass-filter/sound-pass-filter.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sound-pass-filter/sound-pass-filter.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n\n        <div class=\"card-header\">\n          <h4>Frequency filtering</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <label>Low pass filter: {{lowPass}} Hz</label>\n            </div>\n            <div class=\"col-md-9\">\n              <input class=\"form-control\" type=\"range\" min=\"0\" max=\"22050\" step=\"50\" [(ngModel)]=\"lowPass\" (change)=\"setLowPass()\"/>\n            </div>\n            <div class=\"col-md-3\">\n              <label>High pass filter: {{highPass}} Hz</label>\n            </div>\n            <div class=\"col-md-9\">\n              <input class=\"form-control\" type=\"range\" min=\"0\" max=\"22050\" step=\"50\" [(ngModel)]=\"highPass\" (change)=\"setHighPass()\"/>\n            </div>\n            <div class=\"col-md-12\" #divA>\n              <app-d3chart [points]=\"freqNormalized\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"this.analyser.minDecibels\" [maxY]=\"this.analyser.maxDecibels\" [width]=\"divA.clientWidth-30\" [height]=\"200\"  labelX=\"frequency (Hz)\" labelY=\"amplitude (dB)\"></app-d3chart>\n            </div>\n          </div>\n\n          <div class=\"row\" #divB>\n            <div class=\"col-md-6\">\n              <p class=\"text-center\">Low Pass Filter Amplitude Response</p>\n              <app-d3chart [points]=\"lpARA\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"0\" [maxY]=\"2\" [width]=\"divB.clientWidth/2-30\" [height]=\"200\"  labelX=\"frequency (Hz)\" labelY=\"gain\"></app-d3chart>\n            </div>\n            <div class=\"col-md-6\">\n              <p class=\"text-center\">High Pass Filter Amplitude Response</p>\n              <app-d3chart [points]=\"hpARA\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"0\" [maxY]=\"2\" [width]=\"divB.clientWidth/2-30\" [height]=\"200\"  labelX=\"frequency (Hz)\" labelY=\"gain\"></app-d3chart>\n            </div>\n          </div>\n\n          <div class=\"row\" #divC>\n            <div class=\"col-md-6\">\n              <p class=\"text-center\">Low Pass Filter Phase Response</p>\n              <app-d3chart [points]=\"lpPRA\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"-PI\" [maxY]=\"PI\" [width]=\"divC.clientWidth/2-30\" [height]=\"200\"  labelX=\"frequency (Hz)\" labelY=\"phase (radians)\"></app-d3chart>\n            </div>\n            <div class=\"col-md-6\">\n              <p class=\"text-center\">High Pass Filter Phase Response</p>\n              <app-d3chart [points]=\"hpPRA\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"-PI\" [maxY]=\"PI\" [width]=\"divC.clientWidth/2-30\" [height]=\"200\"  labelX=\"frequency (Hz)\" labelY=\"phase (radians)\"></app-d3chart>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <input #data type=\"file\" name=\"file\" (change)=\"processFile(data)\" style=\"display: none\">\n            <app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event, data)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-pass-filter/sound-pass-filter.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/sound-pass-filter/sound-pass-filter.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXBhc3MtZmlsdGVyL3NvdW5kLXBhc3MtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sound-pass-filter/sound-pass-filter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sound-pass-filter/sound-pass-filter.component.ts ***!
  \******************************************************************/
/*! exports provided: SoundPassFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundPassFilterComponent", function() { return SoundPassFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");



var SoundPassFilterComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundPassFilterComponent, _super);
    function SoundPassFilterComponent() {
        var _this = _super.call(this) || this;
        _this.lastRender = 0;
        _this.time = 0;
        _this.lowPass = 22050;
        _this.highPass = 0;
        _this.PI = Math.PI;
        _this.lpARA = [];
        _this.hpARA = [];
        _this.lpPRA = [];
        _this.hpPRA = [];
        _this.lowPassFilter = _this.audioContext.createBiquadFilter();
        _this.highPassFilter = _this.audioContext.createBiquadFilter();
        _this.lowPassFilter.connect(_this.highPassFilter).connect(_this.master);
        _this.frequencyResponseArray = new Float32Array(_this.analyser.frequencyBinCount);
        for (var i = 0; i < _this.frequencyResponseArray.length; ++i) {
            _this.frequencyResponseArray[i] = (i / _this.frequencyResponseArray.length) * _this.maxFreq;
        }
        _this.lowPassAmplitudeResponseArray = new Float32Array(_this.analyser.frequencyBinCount);
        _this.highPassAmplitudeResponseArray = new Float32Array(_this.analyser.frequencyBinCount);
        _this.lowPassPhaseResponseArray = new Float32Array(_this.analyser.frequencyBinCount);
        _this.highPassPhaseResponseArray = new Float32Array(_this.analyser.frequencyBinCount);
        _this.setLowPass();
        _this.setHighPass();
        _this.updateFrequencyResponseArray();
        return _this;
    }
    SoundPassFilterComponent.prototype.updateFrequencyResponseArray = function () {
        var _this = this;
        if (this.analyser) {
            this.analyser.getFloatFrequencyData(this.freqArray);
        }
        var l = this.frequencyResponseArray.length;
        this.lowPassFilter.getFrequencyResponse(this.frequencyResponseArray, this.lowPassAmplitudeResponseArray, this.lowPassPhaseResponseArray);
        this.highPassFilter.getFrequencyResponse(this.frequencyResponseArray, this.highPassAmplitudeResponseArray, this.highPassPhaseResponseArray);
        this.lpARA = this.createArray(l, function (i) { return _this.frequencyResponseArray[i]; }, function (i) { return _this.gainToDecibel(_this.lowPassAmplitudeResponseArray[i]); });
        this.hpARA = this.createArray(l, function (i) { return _this.frequencyResponseArray[i]; }, function (i) { return _this.gainToDecibel(_this.highPassAmplitudeResponseArray[i]); });
        this.lpPRA = this.createArray(l, function (i) { return _this.frequencyResponseArray[i]; }, function (i) { return _this.lowPassPhaseResponseArray[i]; });
        this.hpPRA = this.createArray(l, function (i) { return _this.frequencyResponseArray[i]; }, function (i) { return _this.highPassPhaseResponseArray[i]; });
    };
    SoundPassFilterComponent.prototype.ngOnInit = function () {
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundPassFilterComponent.prototype.setLowPass = function () {
        this.lowPassFilter.type = "lowpass";
        this.lowPassFilter.frequency.value = this.lowPass;
        //this.highPassFilter.Q.value = 20;
        //this.highPassFilter.gain.value = 0;
        this.updateFrequencyResponseArray();
    };
    SoundPassFilterComponent.prototype.setHighPass = function () {
        this.highPassFilter.type = "highpass";
        this.highPassFilter.frequency.value = this.highPass;
        //this.highPassFilter.Q.value = 20;
        //this.highPassFilter.gain.value = 0;
        this.updateFrequencyResponseArray();
    };
    SoundPassFilterComponent.prototype.decodeSound = function (data) {
        var that = this;
        this.audioContext.decodeAudioData(data, function (buffer) {
            that.source = that.audioContext.createBufferSource();
            that.source.onended = function (event) {
                that.soundEnabled = false;
                that.source.disconnect();
            };
            that.source.connect(that.lowPassFilter);
            that.soundEnabled = true;
            that.source.buffer = buffer;
            that.source.loop = true;
            that.source.start(0);
            that.startSound();
        });
    };
    SoundPassFilterComponent.prototype.processFile = function (data) {
        var that = this;
        var file = data.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function (e) {
                var arrayBuffer = e.target['result'];
                that.decodeSound(arrayBuffer);
            };
        }
    };
    SoundPassFilterComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundPassFilterComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    SoundPassFilterComponent.prototype.draw = function () {
        this.updateFrequencyArray();
    };
    SoundPassFilterComponent.prototype.toggleSound = function (value, data) {
        if (!this.soundEnabled) {
            data.click();
        }
        else if (this.source) {
            this.stopSound();
            this.source.stop();
        }
    };
    SoundPassFilterComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
        window.cancelAnimationFrame(this.animationFrame);
    };
    SoundPassFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-pass-filter',
            template: __webpack_require__(/*! ./sound-pass-filter.component.html */ "./src/app/sound-pass-filter/sound-pass-filter.component.html"),
            styles: [__webpack_require__(/*! ./sound-pass-filter.component.scss */ "./src/app/sound-pass-filter/sound-pass-filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundPassFilterComponent);
    return SoundPassFilterComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-pass-filter2/sound-pass-filter2.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/sound-pass-filter2/sound-pass-filter2.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n\n        <div class=\"card-header\">\n          <h4>Frequency filtering</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n\n            <div class=\"col-md-2\">\n            </div>\n            <div class=\"col-md-4\">\n              <label>Low pass filter</label>\n              <img style=\"width: 100%\" src=\"assets/lowpass.png\">\n            </div>\n            <div class=\"col-md-4\">\n              <label>High pass filter</label>\n              <img style=\"width: 100%\" src=\"assets/highpass.png\">\n            </div>\n            <div class=\"col-md-2\">\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-md-2\">\n            </div>\n            <div class=\"col-md-8\">\n              <label>Be careful with phase changes</label>\n              <img style=\"width: 100%\" src=\"assets/cancelation.svg\">\n            </div>\n            <div class=\"col-md-2\">\n            </div>\n          </div>\n\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-pass-filter2/sound-pass-filter2.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/sound-pass-filter2/sound-pass-filter2.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXBhc3MtZmlsdGVyMi9zb3VuZC1wYXNzLWZpbHRlcjIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-pass-filter2/sound-pass-filter2.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sound-pass-filter2/sound-pass-filter2.component.ts ***!
  \********************************************************************/
/*! exports provided: SoundPassFilter2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundPassFilter2Component", function() { return SoundPassFilter2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundPassFilter2Component = /** @class */ (function () {
    function SoundPassFilter2Component() {
    }
    SoundPassFilter2Component.prototype.ngOnInit = function () {
    };
    SoundPassFilter2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-pass-filter2',
            template: __webpack_require__(/*! ./sound-pass-filter2.component.html */ "./src/app/sound-pass-filter2/sound-pass-filter2.component.html"),
            styles: [__webpack_require__(/*! ./sound-pass-filter2.component.scss */ "./src/app/sound-pass-filter2/sound-pass-filter2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundPassFilter2Component);
    return SoundPassFilter2Component;
}());



/***/ }),

/***/ "./src/app/sound-piano/sound-piano.component.html":
/*!********************************************************!*\
  !*** ./src/app/sound-piano/sound-piano.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let key of keys, let i = index\" class=\"{{key}}\" (click)=\"click(i)\"></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/sound-piano/sound-piano.component.scss":
/*!********************************************************!*\
  !*** ./src/app/sound-piano/sound-piano.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  background: #222; }\n\nul {\n  height: 18.875em;\n  width: 100%; }\n\nli {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  float: left; }\n\nul .white {\n  height: 16em;\n  width: 4em;\n  z-index: 1;\n  border-left: 1px solid #bbb;\n  border-bottom: 1px solid #bbb;\n  border-radius: 0 0 5px 5px;\n  box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset, 0 0 3px rgba(0, 0, 0, 0.2);\n  background: linear-gradient(to bottom, #eee 0%, #fff 100%); }\n\nul .white:active {\n  border-top: 1px solid #777;\n  border-left: 1px solid #999;\n  border-bottom: 1px solid #999;\n  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset, -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);\n  background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%); }\n\n.black {\n  height: 8em;\n  width: 2em;\n  margin: 0 0 0 -1em;\n  z-index: 2;\n  border: 1px solid #000;\n  border-radius: 0 0 3px 3px;\n  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5);\n  background: linear-gradient(45deg, #222 0%, #555 100%); }\n\n.black:active {\n  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset, 0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);\n  background: linear-gradient(to right, #444 0%, #222 100%); }\n\n.a, .g, .d, .b, .e {\n  margin: 0 0 0 -1em; }\n\nul li:first-child {\n  border-radius: 5px 0 5px 5px; }\n\nul li:last-child {\n  border-radius: 0 5px 5px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hkbG9wZXNyb2NoYS9zcHJpbmctY2FtcHVzLTIwMTkvc3JjL2FwcC9zb3VuZC1waWFuby9zb3VuZC1waWFuby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLG1HQUFtRztFQUNuRywwREFBMEQsRUFBQTs7QUFHNUQ7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixrSEFBa0g7RUFDbEgsNkRBQTZELEVBQUE7O0FBRy9EO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsK0hBQStIO0VBQy9ILHNEQUFzRCxFQUFBOztBQUd4RDtFQUNFLCtIQUErSDtFQUMvSCx5REFBeUQsRUFBQTs7QUFHM0Q7RUFBa0Isa0JBQWlCLEVBQUE7O0FBR25DO0VBQ0UsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zb3VuZC1waWFuby9zb3VuZC1waWFuby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuXG51bCB7XG4gIGhlaWdodDogMTguODc1ZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5saSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbn1cblxudWwgLndoaXRlIHtcbiAgaGVpZ2h0OiAxNmVtO1xuICB3aWR0aDogNGVtO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiYmI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgYm94LXNoYWRvdzogLTFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIGluc2V0LCAwIDAgNXB4ICNjY2MgaW5zZXQsIDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWVlIDAlLCAjZmZmIDEwMCUpO1xufVxuXG51bCAud2hpdGU6YWN0aXZlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3Nzc7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzk5OTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIGJveC1zaGFkb3c6IDJweCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMSkgaW5zZXQsIC01cHggNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpIGluc2V0LCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiAwJSwgI2U5ZTllOSAxMDAlKTtcbn1cblxuLmJsYWNrIHtcbiAgaGVpZ2h0OiA4ZW07XG4gIHdpZHRoOiAyZW07XG4gIG1hcmdpbjogMCAwIDAgLTFlbTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIGJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIGluc2V0LCAwIC01cHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNikgaW5zZXQsIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIyMiAwJSwgIzU1NSAxMDAlKTtcbn1cblxuLmJsYWNrOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IC0xcHggLTFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIGluc2V0LCAwIC0ycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNikgaW5zZXQsIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQ0NCAwJSwgIzIyMiAxMDAlKTtcbn1cblxuLmEsLmcsLmQsLmIsIC5lIHsgbWFyZ2luOjAgMCAwIC0xZW07ICB9XG5cblxudWwgbGk6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiA1cHggMCA1cHggNXB4O1xufVxuXG51bCBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sound-piano/sound-piano.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sound-piano/sound-piano.component.ts ***!
  \******************************************************/
/*! exports provided: SoundPianoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundPianoComponent", function() { return SoundPianoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundPianoComponent = /** @class */ (function () {
    function SoundPianoComponent() {
        this.keys = [];
    }
    SoundPianoComponent.prototype.ngOnInit = function () {
    };
    SoundPianoComponent.prototype.click = function (i) {
        this.onClick(i);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SoundPianoComponent.prototype, "keys", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SoundPianoComponent.prototype, "onClick", void 0);
    SoundPianoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-piano',
            template: __webpack_require__(/*! ./sound-piano.component.html */ "./src/app/sound-piano/sound-piano.component.html"),
            styles: [__webpack_require__(/*! ./sound-piano.component.scss */ "./src/app/sound-piano/sound-piano.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundPianoComponent);
    return SoundPianoComponent;
}());



/***/ }),

/***/ "./src/app/sound-player/sound-player.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sound-player/sound-player.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div [style.height]=\"margin + 'px'\"></div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Fourier Transform (with music)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\" #divA>\n              <app-d3chart [points]=\"dataNormalized\" [minX]=\"0\" [maxX]=\"1\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divA.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n            </div>\n            <div class=\"col-md-12\" #divB>\n              <app-d3chart [points]=\"freqNormalized\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"this.analyser.minDecibels\" [maxY]=\"this.analyser.maxDecibels\" [width]=\"divB.clientWidth-20\" [height]=\"300\" labelX=\"frequency (Hz)\" labelY=\"amplitude (dB)\"></app-d3chart>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <input #data type=\"file\" name=\"file\" (change)=\"processFile(data)\" style=\"display: none\">\n            <app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event, data)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-player/sound-player.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sound-player/sound-player.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXBsYXllci9zb3VuZC1wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-player/sound-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sound-player/sound-player.component.ts ***!
  \********************************************************/
/*! exports provided: SoundPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundPlayerComponent", function() { return SoundPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");



var SoundPlayerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundPlayerComponent, _super);
    function SoundPlayerComponent() {
        var _this = _super.call(this) || this;
        _this.isBass = false;
        _this.lastRender = 0;
        _this.time = 0;
        _this.margin = 0;
        return _this;
    }
    SoundPlayerComponent.prototype.ngOnInit = function () {
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundPlayerComponent.prototype.decodeSound = function (data) {
        var that = this;
        this.audioContext.decodeAudioData(data, function (buffer) {
            that.source = that.audioContext.createBufferSource();
            that.source.loop = true;
            that.source.onended = function (event) {
                that.soundEnabled = false;
                that.source.disconnect();
            };
            that.source.buffer = buffer;
            that.source.start(0);
            that.source.connect(that.master);
            that.startSound();
        });
    };
    SoundPlayerComponent.prototype.processFile = function (data) {
        var that = this;
        var file = data.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function (e) {
                var arrayBuffer = e.target['result'];
                that.decodeSound(arrayBuffer);
            };
        }
    };
    SoundPlayerComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundPlayerComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    SoundPlayerComponent.prototype.draw = function () {
        this.updateFrequencyArray();
        var bass = false;
        for (var i = 0; i < 4; ++i) {
            if (this.freqNormalized[i].y > -39) {
                bass = true;
                break;
            }
        }
        this.isBass = bass;
        this.margin = bass ? Math.round((Math.cos(this.time * Math.PI * 2 * 10 * 0.001) + 1) * 4) : 0;
        this.updateDataArray();
    };
    SoundPlayerComponent.prototype.toggleSound = function (value, data) {
        if (!this.soundEnabled) {
            data.click();
        }
        else if (this.source) {
            this.source.stop(0);
            this.stopSound();
        }
    };
    SoundPlayerComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
        window.cancelAnimationFrame(this.animationFrame);
    };
    SoundPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-player',
            template: __webpack_require__(/*! ./sound-player.component.html */ "./src/app/sound-player/sound-player.component.html"),
            styles: [__webpack_require__(/*! ./sound-player.component.scss */ "./src/app/sound-player/sound-player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundPlayerComponent);
    return SoundPlayerComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-questions/sound-questions.component.html":
/*!****************************************************************!*\
  !*** ./src/app/sound-questions/sound-questions.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-wave-background></app-wave-background>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <h1 class=\"mt-5\">Questions?</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-questions/sound-questions.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/sound-questions/sound-questions.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-wave-background {\n  display: block;\n  width: 100%;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hkbG9wZXNyb2NoYS9zcHJpbmctY2FtcHVzLTIwMTkvc3JjL2FwcC9zb3VuZC1xdWVzdGlvbnMvc291bmQtcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXF1ZXN0aW9ucy9zb3VuZC1xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtd2F2ZS1iYWNrZ3JvdW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/sound-questions/sound-questions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sound-questions/sound-questions.component.ts ***!
  \**************************************************************/
/*! exports provided: SoundQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundQuestionsComponent", function() { return SoundQuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundQuestionsComponent = /** @class */ (function () {
    function SoundQuestionsComponent() {
    }
    SoundQuestionsComponent.prototype.ngOnInit = function () {
    };
    SoundQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-questions',
            template: __webpack_require__(/*! ./sound-questions.component.html */ "./src/app/sound-questions/sound-questions.component.html"),
            styles: [__webpack_require__(/*! ./sound-questions.component.scss */ "./src/app/sound-questions/sound-questions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundQuestionsComponent);
    return SoundQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/sound-references/sound-references.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sound-references/sound-references.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>References</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <ul>\n                <li>Synth Secrets: Gordon Reid's Guide To Synthesis\n                  <a href=\"https://www.soundonsound.com/techniques/synth-secrets-all-63-parts-sound-on-sound\">(link)</a>\n                </li>\n                <li>Paul Adenot: SINFO 23 (Mozilla)\n                  <a href=\"https://www.youtube.com/watch?v=sEe-yeh3-WY\">(link)</a>\n                </li>\n                <li>W3: Web Audio Api\n                  <a href=\"https://www.w3.org/TR/webaudio/\">(link)</a>\n                </li>\n                <li>MDN Web Docs: Web Audio Api\n                  <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API\">(link)</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-references/sound-references.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/sound-references/sound-references.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXJlZmVyZW5jZXMvc291bmQtcmVmZXJlbmNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-references/sound-references.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sound-references/sound-references.component.ts ***!
  \****************************************************************/
/*! exports provided: SoundReferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundReferencesComponent", function() { return SoundReferencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundReferencesComponent = /** @class */ (function () {
    function SoundReferencesComponent() {
    }
    SoundReferencesComponent.prototype.ngOnInit = function () {
    };
    SoundReferencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-references',
            template: __webpack_require__(/*! ./sound-references.component.html */ "./src/app/sound-references/sound-references.component.html"),
            styles: [__webpack_require__(/*! ./sound-references.component.scss */ "./src/app/sound-references/sound-references.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundReferencesComponent);
    return SoundReferencesComponent;
}());



/***/ }),

/***/ "./src/app/sound-sawtooth-example/sound-sawtooth-example.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/sound-sawtooth-example/sound-sawtooth-example.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Sawtooth Wave Usages</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n            </div>\n            <div class=\"col-md-4\">\n              <h5>Bowed Strings (Violin)</h5>\n              <img style=\"width: 100%\" src=\"assets/violin.png\">\n            </div>\n            <div class=\"col-md-4\">\n              <h5>Recorder</h5>\n              <img style=\"width: 100%\" src=\"assets/recorder.png\">\n            </div>\n            <div class=\"col-md-2\">\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-sawtooth-example/sound-sawtooth-example.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/sound-sawtooth-example/sound-sawtooth-example.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXNhd3Rvb3RoLWV4YW1wbGUvc291bmQtc2F3dG9vdGgtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-sawtooth-example/sound-sawtooth-example.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/sound-sawtooth-example/sound-sawtooth-example.component.ts ***!
  \****************************************************************************/
/*! exports provided: SoundSawtoothExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundSawtoothExampleComponent", function() { return SoundSawtoothExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundSawtoothExampleComponent = /** @class */ (function () {
    function SoundSawtoothExampleComponent() {
    }
    SoundSawtoothExampleComponent.prototype.ngOnInit = function () {
    };
    SoundSawtoothExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-sawtooth-example',
            template: __webpack_require__(/*! ./sound-sawtooth-example.component.html */ "./src/app/sound-sawtooth-example/sound-sawtooth-example.component.html"),
            styles: [__webpack_require__(/*! ./sound-sawtooth-example.component.scss */ "./src/app/sound-sawtooth-example/sound-sawtooth-example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundSawtoothExampleComponent);
    return SoundSawtoothExampleComponent;
}());



/***/ }),

/***/ "./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.html":
/*!************************************************************************!*\
  !*** ./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Sawtooth Wave</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <label>Iterations: {{iterations}}</label>\n            </div>\n            <div class=\"col-md-9\">\n              <input class=\"form-control\" type=\"range\" min=\"0\" max=\"30\" step=\"1\" [(ngModel)]=\"iterations\" (change)=\"setIterations()\"/>\n            </div>\n            <div class=\"col-md-12\" #div12>\n              <app-d3chart [points]=\"samples\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"-1.5\" [maxY]=\"1.5\" [width]=\"div12.clientWidth-20\" [height]=\"300\"  labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n            </div>\n            <app-math-formula class=\"col-md-12\" [formula]=\"initialFormula\">\n            </app-math-formula>\n            <app-math-formula class=\"col-md-12\" [formula]=\"sums\">\n            </app-math-formula>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <small>(with f={{soundFrequency}}Hz)&nbsp;</small><app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXNhd3Rvb3RoLXdhdmUvc291bmQtc2F3dG9vdGgtd2F2ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.ts ***!
  \**********************************************************************/
/*! exports provided: SoundSawtoothWaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundSawtoothWaveComponent", function() { return SoundSawtoothWaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../music.service */ "./src/app/music.service.ts");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");




var SoundSawtoothWaveComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundSawtoothWaveComponent, _super);
    function SoundSawtoothWaveComponent(musicService) {
        var _this = _super.call(this) || this;
        _this.musicService = musicService;
        _this.samples = [];
        _this.iterations = 1;
        _this.initialFormula = '\\frac{2A}{\\pi} \\sum_{k=1}^{\\infty} (-1)^{k} \\frac{\\sin(k \\times 2\\pi f t)}{k}, A=1, f=1 ';
        _this.sums = '';
        _this.processing = false;
        _this.minX = 0;
        _this.maxX = 2;
        _this.soundFrequency = 220;
        _this.source = _this.audioContext.createBufferSource();
        _this.source.buffer = _this.audioContext.createBuffer(2, _this.audioContext.sampleRate, _this.audioContext.sampleRate);
        _this.source.loop = true;
        _this.source.connect(_this.master);
        _this.source.start();
        return _this;
    }
    SoundSawtoothWaveComponent.prototype.ngOnInit = function () {
        this.setIterations();
    };
    SoundSawtoothWaveComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.updateSound();
            this.startSound();
        }
        else {
            this.stopSound();
        }
    };
    SoundSawtoothWaveComponent.prototype.updateSound = function () {
        var myArrayBuffer = this.source.buffer;
        var A = 1;
        var f = this.soundFrequency;
        for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
            var nowBuffering = myArrayBuffer.getChannelData(channel);
            for (var i = 0; i < myArrayBuffer.length; i++) {
                var t = (i / this.audioContext.sampleRate);
                nowBuffering[i] = this.musicService.getSawtooth(t, A, f, this.iterations);
            }
        }
    };
    SoundSawtoothWaveComponent.prototype.setIterations = function () {
        if (this.soundEnabled) {
            this.updateSound();
        }
        this.updateFormulas();
        this.updateChart();
    };
    SoundSawtoothWaveComponent.prototype.updateFormulas = function () {
        var _this = this;
        var sums = '';
        this.processing = true;
        for (var k = 1; k <= this.iterations; ++k) {
            var sig = Math.pow(-1, k);
            sums += sig > 0 ? '+' : '-';
            sums += '\\frac{2\\sin(' + k + '\\times 2\\pi t)}{' + k + '\\pi}';
            if (!(k % 5)) {
                sums += '\\\\';
            }
        }
        if (this.iterations == 0) {
            sums += '0';
        }
        setTimeout(function () {
            _this.sums = sums;
            _this.processing = false;
        }, 10);
    };
    SoundSawtoothWaveComponent.prototype.updateChart = function () {
        var A = 1;
        var f = 1;
        this.samples = [];
        for (var t = this.minX; t <= this.maxX; t += 0.005) {
            this.samples.push({ x: t, y: this.musicService.getSawtooth(t, A, f, this.iterations) });
        }
    };
    SoundSawtoothWaveComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
    };
    SoundSawtoothWaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-sawtooth-wave',
            template: __webpack_require__(/*! ./sound-sawtooth-wave.component.html */ "./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.html"),
            styles: [__webpack_require__(/*! ./sound-sawtooth-wave.component.scss */ "./src/app/sound-sawtooth-wave/sound-sawtooth-wave.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"]])
    ], SoundSawtoothWaveComponent);
    return SoundSawtoothWaveComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_3__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-simple-demo/sound-simple-demo.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sound-simple-demo/sound-simple-demo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Musical Notes</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <label>Oscillator Frequency: {{oscillatorFrequency}}Hz {{currentNoteName ? '('+currentNoteName+')' : ''}}</label>\n            </div>\n            <div class=\"col-md-8\">\n              <input class=\"form-control\" type=\"range\" min=\"0\" max=\"20000\" step=\"50\" [(ngModel)]=\"oscillatorFrequency\" (change)=\"updateOscillatorFrequency()\"/>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                 <app-sound-piano [keys]=\"keys\" [onClick]=\"pianoClick.bind(this)\"></app-sound-piano>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n           <app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-simple-demo/sound-simple-demo.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/sound-simple-demo/sound-simple-demo.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXNpbXBsZS1kZW1vL3NvdW5kLXNpbXBsZS1kZW1vLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sound-simple-demo/sound-simple-demo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sound-simple-demo/sound-simple-demo.component.ts ***!
  \******************************************************************/
/*! exports provided: SoundSimpleDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundSimpleDemoComponent", function() { return SoundSimpleDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../music.service */ "./src/app/music.service.ts");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");




var SoundSimpleDemoComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundSimpleDemoComponent, _super);
    function SoundSimpleDemoComponent(noteService) {
        var _this = _super.call(this) || this;
        _this.noteService = noteService;
        _this.currentNoteName = '';
        _this.oscillatorFrequency = 0;
        _this.keys = [];
        _this.notes = [];
        _this.source = _this.audioContext.createOscillator();
        _this.source.connect(_this.master);
        _this.source.start(0);
        return _this;
    }
    SoundSimpleDemoComponent.prototype.buildNote = function (name) {
        this.notes.push({ frequency: this.noteService.getNoteFrequency(name), name: name });
        var hash = name.indexOf('#') >= 0;
        var clazz = hash ? 'black' : 'white';
        clazz += ' ' + name.charAt(0).toLowerCase() + (hash ? 's' : '');
        this.keys.push(clazz);
    };
    SoundSimpleDemoComponent.prototype.pianoClick = function (i) {
        this.oscillatorFrequency = this.notes[i].frequency;
        this.updateOscillatorFrequency();
        this.currentNoteName = this.notes[i].name;
    };
    ;
    SoundSimpleDemoComponent.prototype.ngOnInit = function () {
        this.buildNote('F3');
        this.buildNote('F#3');
        this.buildNote('G3');
        this.buildNote('G#3');
        this.buildNote('A3');
        this.buildNote('A#3');
        this.buildNote('B3');
        this.buildNote('C4');
        this.buildNote('C#4');
        this.buildNote('D4');
        this.buildNote('D#4');
        this.buildNote('E4');
        this.buildNote('F4');
        this.buildNote('F#4');
        this.buildNote('G4');
        this.buildNote('G#4');
        this.buildNote('A4');
        this.buildNote('A#4');
        this.buildNote('B4');
    };
    SoundSimpleDemoComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.oscillatorFrequency = 0;
            this.updateOscillatorFrequency();
        }
        else if (this.source) {
            this.stopSound();
        }
    };
    SoundSimpleDemoComponent.prototype.updateOscillatorFrequency = function () {
        this.currentNoteName = null;
        this.source.frequency.value = this.oscillatorFrequency;
        if (this.soundEnabled) {
            var time = this.audioContext.currentTime;
            this.master.gain.setValueAtTime(1.0, time);
            this.master.gain.setTargetAtTime(0.0, time, 0.5);
        }
    };
    SoundSimpleDemoComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
    };
    SoundSimpleDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-simple-demo',
            template: __webpack_require__(/*! ./sound-simple-demo.component.html */ "./src/app/sound-simple-demo/sound-simple-demo.component.html"),
            styles: [__webpack_require__(/*! ./sound-simple-demo.component.scss */ "./src/app/sound-simple-demo/sound-simple-demo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"]])
    ], SoundSimpleDemoComponent);
    return SoundSimpleDemoComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_3__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-sin-form/sound-sin-form.component.html":
/*!**************************************************************!*\
  !*** ./src/app/sound-sin-form/sound-sin-form.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Wave Equation</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <app-math-formula class=\"col-md-12\" [formula]=\"initialFormula\">\n            </app-math-formula>\n            <div class=\"col-md-2\">\n              <div class=\"form\">\n                <div class=\"form-group\">\n                  <label for=\"amplitude\">Amplitude</label>\n                  <input id=\"amplitude\" class=\"form-control\" type=\"range\" min=\"0\" max=\"5\" step=\"0.1\" [(ngModel)]=\"amplitude\" (change)=\"sinWave()\"/> {{amplitude}}\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"frequency\">Frequency</label>\n                  <input id=\"frequency\" class=\"form-control\" type=\"range\" min=\"1\" max=\"10\"  step=\"0.1\" [(ngModel)]=\"frequency\" (change)=\"sinWave()\"/> {{frequency}}\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"phase\">Phase</label>\n                  <input id=\"phase\" class=\"form-control\" type=\"range\" min=\"0\" max=\"20\"  step=\"0.2\" [(ngModel)]=\"phase\" (change)=\"sinWave()\"/> {{phase}}\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-10\" #div10>\n              <app-d3chart [points]=\"samples\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"-5\" [maxY]=\"5\" [width]=\"div10.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-sin-form/sound-sin-form.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/sound-sin-form/sound-sin-form.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXNpbi1mb3JtL3NvdW5kLXNpbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sound-sin-form/sound-sin-form.component.ts":
/*!************************************************************!*\
  !*** ./src/app/sound-sin-form/sound-sin-form.component.ts ***!
  \************************************************************/
/*! exports provided: SoundSinFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundSinFormComponent", function() { return SoundSinFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundSinFormComponent = /** @class */ (function () {
    function SoundSinFormComponent() {
        this.samples = [];
        this.frequency = 1;
        this.amplitude = 1;
        this.phase = 0;
        this.initialFormula = 'f(t) = A\\sin(\\omega t +\\phi), \\omega = 2\\pi f';
        this.minX = 0;
        this.maxX = 2;
    }
    SoundSinFormComponent.prototype.ngOnInit = function () {
        this.sinWave();
    };
    SoundSinFormComponent.prototype.sinWave = function () {
        this.samples = [];
        for (var t = this.minX; t <= this.maxX; t += 0.005) {
            var y = this.amplitude * Math.sin(2 * Math.PI * this.frequency * t + this.phase);
            this.samples.push({ x: t, y: y });
        }
    };
    SoundSinFormComponent.prototype.ngOnDestroy = function () {
    };
    SoundSinFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-sin-form',
            template: __webpack_require__(/*! ./sound-sin-form.component.html */ "./src/app/sound-sin-form/sound-sin-form.component.html"),
            styles: [__webpack_require__(/*! ./sound-sin-form.component.scss */ "./src/app/sound-sin-form/sound-sin-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundSinFormComponent);
    return SoundSinFormComponent;
}());



/***/ }),

/***/ "./src/app/sound-sine-example/sound-sine-example.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/sound-sine-example/sound-sine-example.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Sine Wave Usages</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n            </div>\n            <div class=\"col-md-4\">\n              <h5>Tuning Fork</h5>\n              <img style=\"width: 100%\" src=\"assets/tuning.png\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-sine-example/sound-sine-example.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/sound-sine-example/sound-sine-example.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXNpbmUtZXhhbXBsZS9zb3VuZC1zaW5lLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-sine-example/sound-sine-example.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sound-sine-example/sound-sine-example.component.ts ***!
  \********************************************************************/
/*! exports provided: SoundSineExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundSineExampleComponent", function() { return SoundSineExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundSineExampleComponent = /** @class */ (function () {
    function SoundSineExampleComponent() {
    }
    SoundSineExampleComponent.prototype.ngOnInit = function () {
    };
    SoundSineExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-sine-example',
            template: __webpack_require__(/*! ./sound-sine-example.component.html */ "./src/app/sound-sine-example/sound-sine-example.component.html"),
            styles: [__webpack_require__(/*! ./sound-sine-example.component.scss */ "./src/app/sound-sine-example/sound-sine-example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundSineExampleComponent);
    return SoundSineExampleComponent;
}());



/***/ }),

/***/ "./src/app/sound-snare-wave/sound-snare-wave.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sound-snare-wave/sound-snare-wave.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Snare (with decay)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n\n            <div class=\"col-md-6\" #divA>\n              <app-d3chart [points]=\"base\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divA.clientWidth-20\" [height]=\"250\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <app-math-formula class=\"col-md-12\" [formula]=\"baseFormula\">\n              </app-math-formula>\n            </div>\n\n            <div class=\"col-md-6\" #divB>\n              <app-d3chart [points]=\"multiplier\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"0\" [maxY]=\"1.05\" [width]=\"divB.clientWidth-20\" [height]=\"250\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <app-math-formula class=\"col-md-12\" [formula]=\"multiplierFormula\">\n              </app-math-formula>\n            </div>\n          </div>\n\n          <div class=\"row\">\n\n            <div class=\"col-md-12\" #divC>\n              <app-d3chart [points]=\"result\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divC.clientWidth-20\" [height]=\"250\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n              <app-math-formula class=\"col-md-12\" [formula]=\"resultFormula\">\n              </app-math-formula>\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n            <label >Decay: {{decay}}</label>\n          </div>\n          <div class=\"col-md-10\">\n            <input class=\"form-control\" type=\"range\" min=\"0\" max=\"30\" step=\"0.1\" [(ngModel)]=\"decay\" (change)=\"updateDecay()\"/>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-snare-wave/sound-snare-wave.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/sound-snare-wave/sound-snare-wave.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXNuYXJlLXdhdmUvc291bmQtc25hcmUtd2F2ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-snare-wave/sound-snare-wave.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sound-snare-wave/sound-snare-wave.component.ts ***!
  \****************************************************************/
/*! exports provided: SoundSnareWaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundSnareWaveComponent", function() { return SoundSnareWaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");



var SoundSnareWaveComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundSnareWaveComponent, _super);
    function SoundSnareWaveComponent() {
        var _this = _super.call(this) || this;
        _this.multiplier = [];
        _this.result = [];
        _this.base = [];
        _this.decay = 10;
        _this.minX = 0;
        _this.maxX = 1;
        _this.processing = false;
        _this.source = _this.audioContext.createBufferSource();
        _this.source.buffer = _this.audioContext.createBuffer(2, _this.audioContext.sampleRate, _this.audioContext.sampleRate);
        _this.source.loop = true;
        _this.source.connect(_this.master);
        _this.source.start();
        return _this;
    }
    SoundSnareWaveComponent.prototype.ngOnInit = function () {
        this.updateDecay();
    };
    SoundSnareWaveComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.updateSound();
            this.startSound();
        }
        else {
            this.stopSound();
        }
    };
    SoundSnareWaveComponent.prototype.getMultiplier = function (t) {
        return Math.exp(-this.decay * t);
    };
    SoundSnareWaveComponent.prototype.getValue = function (t) {
        return (Math.random() * 2 - 1);
    };
    SoundSnareWaveComponent.prototype.updateSound = function () {
        var myArrayBuffer = this.source.buffer;
        for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
            var nowBuffering = myArrayBuffer.getChannelData(channel);
            for (var i = 0; i < myArrayBuffer.length; i++) {
                var perc = i / myArrayBuffer.length;
                nowBuffering[i] = this.getValue(perc) * this.getMultiplier(perc);
            }
        }
    };
    SoundSnareWaveComponent.prototype.update = function () {
        this.updateSound();
        this.updateChart();
    };
    SoundSnareWaveComponent.prototype.updateChart = function () {
        this.base = [];
        this.multiplier = [];
        this.result = [];
        for (var t = this.minX; t < this.maxX; t += 0.001) {
            var y = this.getValue(t);
            var m = this.getMultiplier(t);
            this.multiplier.push({ x: t, y: m });
            this.base.push({ x: t, y: y });
            this.result.push({ x: t, y: y * m });
        }
    };
    SoundSnareWaveComponent.prototype.updateDecay = function () {
        var _this = this;
        this.processing = true;
        setTimeout(function () {
            _this.multiplierFormula = 'g(t) = e^{-' + _this.decay + 't}';
            _this.baseFormula = 'f(t) = random(t)';
            _this.resultFormula = 'h(t) = f(t) \\times g(t)';
            _this.processing = false;
        }, 10);
        this.update();
    };
    SoundSnareWaveComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
    };
    SoundSnareWaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-snare-wave',
            template: __webpack_require__(/*! ./sound-snare-wave.component.html */ "./src/app/sound-snare-wave/sound-snare-wave.component.html"),
            styles: [__webpack_require__(/*! ./sound-snare-wave.component.scss */ "./src/app/sound-snare-wave/sound-snare-wave.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundSnareWaveComponent);
    return SoundSnareWaveComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-square-example/sound-square-example.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/sound-square-example/sound-square-example.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Square Wave Usages</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n            </div>\n            <div class=\"col-md-4\">\n              <h5>Clarinet</h5>\n              <img style=\"width: 100%\" src=\"assets/clarinet.png\">\n            </div>\n            <div class=\"col-md-4\">\n              <h5>Saxophone</h5>\n              <img style=\"width: 100%\" src=\"assets/saxophone.png\">\n            </div>\n            <div class=\"col-md-2\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-square-example/sound-square-example.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/sound-square-example/sound-square-example.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXNxdWFyZS1leGFtcGxlL3NvdW5kLXNxdWFyZS1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sound-square-example/sound-square-example.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/sound-square-example/sound-square-example.component.ts ***!
  \************************************************************************/
/*! exports provided: SoundSquareExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundSquareExampleComponent", function() { return SoundSquareExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundSquareExampleComponent = /** @class */ (function () {
    function SoundSquareExampleComponent() {
    }
    SoundSquareExampleComponent.prototype.ngOnInit = function () {
    };
    SoundSquareExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-square-example',
            template: __webpack_require__(/*! ./sound-square-example.component.html */ "./src/app/sound-square-example/sound-square-example.component.html"),
            styles: [__webpack_require__(/*! ./sound-square-example.component.scss */ "./src/app/sound-square-example/sound-square-example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundSquareExampleComponent);
    return SoundSquareExampleComponent;
}());



/***/ }),

/***/ "./src/app/sound-square-fourier/sound-square-fourier.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/sound-square-fourier/sound-square-fourier.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Fourier Transform (Square Wave)</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <label>Iterations: {{iterations}}</label>\n            </div>\n            <div class=\"col-md-10\">\n              <input class=\"form-control\" type=\"range\" min=\"0\" max=\"30\" step=\"1\" [(ngModel)]=\"iterations\" (change)=\"setIterations()\"/>\n            </div>\n            <div class=\"col-md-12\" #divA>\n              <app-d3chart [points]=\"samplesFFT\" [minX]=\"0\" [maxX]=\"60\" [minY]=\"0\" [maxY]=\"1.5\" [width]=\"divA.clientWidth-20\" [height]=\"300\"  labelX=\"frequency (Hz)\" labelY=\"amplitude\"></app-d3chart>\n            </div>\n            <div class=\"col-md-12\">\n              The fundamental frequency is defined as the lowest frequency of a periodic waveform.\n            </div>\n            <app-math-formula class=\"col-md-12\" [formula]=\"initialFormula\">\n            </app-math-formula>\n            <app-math-formula class=\"col-md-12\" [formula]=\"sums\">\n            </app-math-formula>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-square-fourier/sound-square-fourier.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/sound-square-fourier/sound-square-fourier.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXNxdWFyZS1mb3VyaWVyL3NvdW5kLXNxdWFyZS1mb3VyaWVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sound-square-fourier/sound-square-fourier.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/sound-square-fourier/sound-square-fourier.component.ts ***!
  \************************************************************************/
/*! exports provided: SoundSquareFourierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundSquareFourierComponent", function() { return SoundSquareFourierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundSquareFourierComponent = /** @class */ (function () {
    function SoundSquareFourierComponent() {
        this.samplesFFT = [];
        this.iterations = 1;
        this.initialFormula = 'f(t) = \\frac{4A}{\\pi}\\sum_{k=1}^{\\infty} \\frac{\\sin((2k-1) \\times 2\\pi ft)}{2k-1}, f=1, A=1';
        this.sums = '';
        this.processing = false;
    }
    SoundSquareFourierComponent.prototype.ngOnInit = function () {
    };
    SoundSquareFourierComponent.prototype.setIterations = function () {
        this.updateFormulas();
        this.updateChartFFT();
    };
    SoundSquareFourierComponent.prototype.updateChartFFT = function () {
        var A = 1;
        var samplesFFT = [];
        samplesFFT.push({ x: 0, y: 0 });
        for (var k = 1; k <= this.iterations; ++k) {
            var a = (4 * A) / (Math.PI * (2 * k - 1));
            var f = (2 * k - 1);
            samplesFFT.push({ x: f - .1, y: 0 });
            samplesFFT.push({ x: f, y: a });
            samplesFFT.push({ x: f + .1, y: 0 });
        }
        samplesFFT.push({ x: 64, y: 0 });
        this.samplesFFT = samplesFFT;
    };
    SoundSquareFourierComponent.prototype.updateFormulas = function () {
        var _this = this;
        var sums = '';
        this.processing = true;
        for (var k = 1; k <= this.iterations; ++k) {
            var n = 2 * k - 1;
            if (k !== 1) {
                sums += '+';
            }
            sums += '\\frac{4}{' + n + ' \\pi} \\sin(' + n + '\\times 2\\pi t)';
            if (!(k % 5)) {
                sums += '\\\\';
            }
        }
        if (this.iterations == 0) {
            sums += '0';
        }
        setTimeout(function () {
            _this.sums = sums;
            _this.processing = false;
        }, 10);
    };
    SoundSquareFourierComponent.prototype.ngAfterContentInit = function () {
        this.setIterations();
    };
    SoundSquareFourierComponent.prototype.ngOnDestroy = function () {
    };
    SoundSquareFourierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-square-fourier',
            template: __webpack_require__(/*! ./sound-square-fourier.component.html */ "./src/app/sound-square-fourier/sound-square-fourier.component.html"),
            styles: [__webpack_require__(/*! ./sound-square-fourier.component.scss */ "./src/app/sound-square-fourier/sound-square-fourier.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundSquareFourierComponent);
    return SoundSquareFourierComponent;
}());



/***/ }),

/***/ "./src/app/sound-square-wave/sound-square-wave.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sound-square-wave/sound-square-wave.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Square Wave</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <label>Iterations: {{iterations}}</label>\n            </div>\n            <div class=\"col-md-10\">\n              <input class=\"form-control\" type=\"range\" min=\"0\" max=\"30\" step=\"1\" [(ngModel)]=\"iterations\" (change)=\"setIterations()\"/>\n            </div>\n            <div class=\"col-md-12\" #div12>\n              <app-d3chart [points]=\"samples\" [minX]=\"minX\" [maxX]=\"maxX\" [minY]=\"-1.5\" [maxY]=\"1.5\" [width]=\"div12.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n            </div>\n            <app-math-formula class=\"col-md-12\" [formula]=\"initialFormula\">\n            </app-math-formula>\n            <app-math-formula class=\"col-md-12\" [formula]=\"sums\">\n            </app-math-formula>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <small>(with f={{soundFrequency}}Hz)&nbsp;</small><app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-square-wave/sound-square-wave.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/sound-square-wave/sound-square-wave.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXNxdWFyZS13YXZlL3NvdW5kLXNxdWFyZS13YXZlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/sound-square-wave/sound-square-wave.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sound-square-wave/sound-square-wave.component.ts ***!
  \******************************************************************/
/*! exports provided: SoundSquareWaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundSquareWaveComponent", function() { return SoundSquareWaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _music_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../music.service */ "./src/app/music.service.ts");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");




var SoundSquareWaveComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundSquareWaveComponent, _super);
    function SoundSquareWaveComponent(musicService) {
        var _this = _super.call(this) || this;
        _this.musicService = musicService;
        _this.samples = [];
        _this.iterations = 1;
        _this.initialFormula = 'f(t) = \\frac{4A}{\\pi}\\sum_{k=1}^{\\infty} \\frac{\\sin((2k-1) \\times 2\\pi ft)}{2k-1}, f=1, A=1';
        _this.minX = 0;
        _this.maxX = 2;
        _this.soundFrequency = 220;
        _this.sums = '';
        _this.processing = false;
        _this.source = _this.audioContext.createBufferSource();
        _this.source.buffer = _this.audioContext.createBuffer(2, _this.audioContext.sampleRate, _this.audioContext.sampleRate);
        _this.source.loop = true;
        _this.source.connect(_this.master);
        _this.source.start();
        return _this;
    }
    SoundSquareWaveComponent.prototype.ngOnInit = function () {
    };
    SoundSquareWaveComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.updateSound();
            this.startSound();
        }
        else if (this.source) {
            this.stopSound();
        }
    };
    SoundSquareWaveComponent.prototype.updateSound = function () {
        var myArrayBuffer = this.source.buffer;
        var A = 1 / 2;
        var f = this.soundFrequency;
        for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
            var nowBuffering = myArrayBuffer.getChannelData(channel);
            for (var i = 0; i < myArrayBuffer.length; i++) {
                var t = (i / this.audioContext.sampleRate);
                nowBuffering[i] = this.musicService.getSquare(t, A, f, this.iterations);
            }
        }
    };
    SoundSquareWaveComponent.prototype.setIterations = function () {
        if (this.soundEnabled) {
            this.updateSound();
        }
        this.updateFormulas();
        this.updateChart();
    };
    SoundSquareWaveComponent.prototype.updateFormulas = function () {
        var _this = this;
        var sums = '';
        this.processing = true;
        for (var k = 1; k <= this.iterations; ++k) {
            var n = 2 * k - 1;
            if (k !== 1) {
                sums += '+';
            }
            sums += '\\frac{4\\sin(' + n + '\\times 2\\pi t)}{' + n + ' \\pi}';
            if (!(k % 5)) {
                sums += '\\\\';
            }
        }
        if (this.iterations == 0) {
            sums += '0';
        }
        setTimeout(function () {
            _this.sums = sums;
            _this.processing = false;
        }, 10);
    };
    SoundSquareWaveComponent.prototype.updateChart = function () {
        var A = 1;
        var f = 1;
        this.samples = [];
        for (var t = this.minX; t <= this.maxX; t += 0.005) {
            this.samples.push({ x: t, y: this.musicService.getSquare(t, A, f, this.iterations) });
        }
    };
    SoundSquareWaveComponent.prototype.ngAfterContentInit = function () {
        this.setIterations();
    };
    SoundSquareWaveComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
    };
    SoundSquareWaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-square-wave',
            template: __webpack_require__(/*! ./sound-square-wave.component.html */ "./src/app/sound-square-wave/sound-square-wave.component.html"),
            styles: [__webpack_require__(/*! ./sound-square-wave.component.scss */ "./src/app/sound-square-wave/sound-square-wave.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_music_service__WEBPACK_IMPORTED_MODULE_2__["MusicService"]])
    ], SoundSquareWaveComponent);
    return SoundSquareWaveComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_3__["AudioComponent"]));



/***/ }),

/***/ "./src/app/sound-test/sound-test.component.html":
/*!******************************************************!*\
  !*** ./src/app/sound-test/sound-test.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Test</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              What's the fundamental frequency for the following signal?\n              <br>\n              <app-math-formula class=\"col-md-12\" [formula]=\"formula\">\n              </app-math-formula>\n              <ul>\n                <li>a) 1 Hz <i *ngIf=\"showAnswer\" class=\"fa fa-times text-danger\" aria-hidden=\"true\"></i></li>\n                <li>b) 3 Hz <i *ngIf=\"showAnswer\" class=\"fa fa-check text-success\" aria-hidden=\"true\"></i></li>\n                <li>c) 5 Hz <i *ngIf=\"showAnswer\" class=\"fa fa-times text-danger\" aria-hidden=\"true\"></i></li>\n                <li>d) 7 Hz <i *ngIf=\"showAnswer\" class=\"fa fa-times text-danger\" aria-hidden=\"true\"></i></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <div class=\"btn btn-success\" (click)=\"checkAnswer()\">\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Check answer\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-test/sound-test.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sound-test/sound-test.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXRlc3Qvc291bmQtdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-test/sound-test.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sound-test/sound-test.component.ts ***!
  \****************************************************/
/*! exports provided: SoundTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundTestComponent", function() { return SoundTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundTestComponent = /** @class */ (function () {
    function SoundTestComponent() {
        this.formula = "f(t)=\\frac{4\\sin(7\\times 2\\pi t)}{7 \\pi}+\\frac{4\\sin(3\\times 2\\pi t)}{3 \\pi}+\\frac{4\\sin(5\\times 2\\pi t)}{5 \\pi}";
        this.showAnswer = false;
    }
    SoundTestComponent.prototype.ngOnInit = function () {
    };
    SoundTestComponent.prototype.checkAnswer = function () {
        this.showAnswer = true;
    };
    SoundTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-test',
            template: __webpack_require__(/*! ./sound-test.component.html */ "./src/app/sound-test/sound-test.component.html"),
            styles: [__webpack_require__(/*! ./sound-test.component.scss */ "./src/app/sound-test/sound-test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundTestComponent);
    return SoundTestComponent;
}());



/***/ }),

/***/ "./src/app/sound-title/sound-title.component.html":
/*!********************************************************!*\
  !*** ./src/app/sound-title/sound-title.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-wave-background></app-wave-background>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n        <h1 class=\"mt-5\">Exploring music using the WebAudio API</h1>\n        <p class=\"lead\">by Henrique Rocha</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-title/sound-title.component.scss":
/*!********************************************************!*\
  !*** ./src/app/sound-title/sound-title.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-wave-background {\n  display: block;\n  width: 100%;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hkbG9wZXNyb2NoYS9zcHJpbmctY2FtcHVzLTIwMTkvc3JjL2FwcC9zb3VuZC10aXRsZS9zb3VuZC10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zb3VuZC10aXRsZS9zb3VuZC10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC13YXZlLWJhY2tncm91bmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/sound-title/sound-title.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sound-title/sound-title.component.ts ***!
  \******************************************************/
/*! exports provided: SoundTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundTitleComponent", function() { return SoundTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundTitleComponent = /** @class */ (function () {
    function SoundTitleComponent() {
    }
    SoundTitleComponent.prototype.ngOnInit = function () {
    };
    SoundTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-title',
            template: __webpack_require__(/*! ./sound-title.component.html */ "./src/app/sound-title/sound-title.component.html"),
            styles: [__webpack_require__(/*! ./sound-title.component.scss */ "./src/app/sound-title/sound-title.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundTitleComponent);
    return SoundTitleComponent;
}());



/***/ }),

/***/ "./src/app/sound-wapi-intro/sound-wapi-intro.component.html":
/*!******************************************************************!*\
  !*** ./src/app/sound-wapi-intro/sound-wapi-intro.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Web Audio API</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n              <blockquote>\n                \"The Web Audio API provides a powerful and versatile system for controlling audio on the Web, allowing developers to choose audio sources, add effects to audio, create audio visualizations, apply spatial effects (such as panning) and much more.\"\n                <footer><cite>https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API</cite></footer>\n              </blockquote>\n            </div>\n            <div class=\"col-lg-12\">\n\n              <br>Audio nodes are linked via their inputs and outputs, forming a chain that starts with one or more sources, goes through one or more nodes, then ends up at a destination.\n              <br><br>A simple, typical workflow for web audio would look something like this:\n              <ul>\n                <li>Create the audio context.</li>\n                <li>Inside the context, create sources — such as < audio >, oscillator, or stream.</li>\n                <li>Create effects nodes, such as reverb, biquad filter, panner, or compressor.</li>\n                <li>Choose the final destination for the audio, such as the user's computer speakers.</li>\n                <li>Establish connections from the audio sources through zero or more effects, eventually ending at the chosen destination.</li>\n              </ul>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sound-wapi-intro/sound-wapi-intro.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/sound-wapi-intro/sound-wapi-intro.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXdhcGktaW50cm8vc291bmQtd2FwaS1pbnRyby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sound-wapi-intro/sound-wapi-intro.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sound-wapi-intro/sound-wapi-intro.component.ts ***!
  \****************************************************************/
/*! exports provided: SoundWapiIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundWapiIntroComponent", function() { return SoundWapiIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundWapiIntroComponent = /** @class */ (function () {
    function SoundWapiIntroComponent() {
    }
    SoundWapiIntroComponent.prototype.ngOnInit = function () {
    };
    SoundWapiIntroComponent.prototype.ngOnDestroy = function () {
    };
    SoundWapiIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-wapi-intro',
            template: __webpack_require__(/*! ./sound-wapi-intro.component.html */ "./src/app/sound-wapi-intro/sound-wapi-intro.component.html"),
            styles: [__webpack_require__(/*! ./sound-wapi-intro.component.scss */ "./src/app/sound-wapi-intro/sound-wapi-intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundWapiIntroComponent);
    return SoundWapiIntroComponent;
}());



/***/ }),

/***/ "./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n<pre #element style=\"display: none\">\nthis.audioContext = new AudioContext();\nthis.oscillatorNode = this.audioContext.createOscillator();\nthis.oscillatorNode.frequency.value = {{oscillatorNode.frequency.value}};\nthis.oscillatorNode.type = '{{oscillatorNode.type}}';\nthis.oscillatorNode.detune.type = '{{oscillatorNode.detune.value}}';\nthis.oscillatorNode.connect(this.audioContext.destination);\nthis.oscillatorNode.start(0);\n</pre>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Oscillator</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <pre><code [highlight]=\"code\"></code></pre>\n            </div>\n            <div class=\"col-md-4\">\n              frequency: <input type=\"number\" [(ngModel)]=\"oscillatorNode.frequency.value\" (change)=\"updateHtml()\"><br>\n              detune: <input type=\"number\" [(ngModel)]=\"oscillatorNode.detune.value\" (change)=\"updateHtml()\"><br>\n              type: <select [(ngModel)]=\"oscillatorNode.type\" (change)=\"updateHtml()\">\n                <option value=\"sine\">sine</option>\n                <option value=\"square\">square</option>\n                <option value=\"sawtooth\">sawtooth</option>\n                <option value=\"triangle\">triangle</option>\n              </select>\n            </div>\n            <div class=\"col-md-6\" #divA>\n              <app-d3chart [points]=\"dataNormalized\" [minX]=\"0\" [maxX]=\"1\" [minY]=\"-1.05\" [maxY]=\"1.05\" [width]=\"divA.clientWidth-20\" [height]=\"300\" labelX=\"time (s)\" labelY=\"amplitude\"></app-d3chart>\n            </div>\n            <div class=\"col-md-6\" #divB>\n              <app-d3chart [points]=\"freqNormalized\" [minX]=\"0\" [maxX]=\"maxFreq\" [minY]=\"this.analyser.minDecibels\" [maxY]=\"this.analyser.maxDecibels\" [width]=\"divB.clientWidth-20\" [height]=\"300\" labelX=\"frequency (Hz)\" labelY=\"amplitude (dB)\"></app-d3chart>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <app-toggle-button [value]=\"soundEnabled\" (changeEmitter)=\"toggleSound($event)\"></app-toggle-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdW5kLXdhcGktb3NjaWxsYXRvci9zb3VuZC13YXBpLW9zY2lsbGF0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.ts ***!
  \**************************************************************************/
/*! exports provided: SoundWapiOscillatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundWapiOscillatorComponent", function() { return SoundWapiOscillatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");



var SoundWapiOscillatorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SoundWapiOscillatorComponent, _super);
    function SoundWapiOscillatorComponent() {
        var _this = _super.call(this) || this;
        _this.lastRender = 0;
        _this.time = 0;
        _this.code = '';
        return _this;
    }
    SoundWapiOscillatorComponent.prototype.ngOnInit = function () {
        this.oscillatorNode = this.audioContext.createOscillator();
        this.oscillatorNode.frequency.value = 110;
        this.oscillatorNode.connect(this.master);
        this.oscillatorNode.start(0);
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
        this.updateHtml();
    };
    SoundWapiOscillatorComponent.prototype.ngOnDestroy = function () {
        this.stopSound();
        window.cancelAnimationFrame(this.animationFrame);
    };
    SoundWapiOscillatorComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    SoundWapiOscillatorComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    SoundWapiOscillatorComponent.prototype.draw = function () {
        this.updateFrequencyArray();
        this.updateDataArray();
    };
    SoundWapiOscillatorComponent.prototype.updateHtml = function () {
        var _this = this;
        setTimeout(function () {
            _this.code = _this.element.nativeElement['innerHTML'];
            console.log(_this.code);
        }, 100);
    };
    SoundWapiOscillatorComponent.prototype.toggleSound = function (value) {
        this.soundEnabled = value;
        if (value) {
            this.startSound();
        }
        else {
            this.stopSound();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('element'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SoundWapiOscillatorComponent.prototype, "element", void 0);
    SoundWapiOscillatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sound-wapi-oscillator',
            template: __webpack_require__(/*! ./sound-wapi-oscillator.component.html */ "./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.html"),
            styles: [__webpack_require__(/*! ./sound-wapi-oscillator.component.scss */ "./src/app/sound-wapi-oscillator/sound-wapi-oscillator.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoundWapiOscillatorComponent);
    return SoundWapiOscillatorComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_2__["AudioComponent"]));



/***/ }),

/***/ "./src/app/toggle-button/toggle-button.component.html":
/*!************************************************************!*\
  !*** ./src/app/toggle-button/toggle-button.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!value\" class=\"btn btn-success\" (click)=\"toggle()\">\n  <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n</div>\n<div *ngIf=\"value\" class=\"btn btn-danger\" (click)=\"toggle()\">\n  <i class=\"fa fa-pause\" aria-hidden=\"true\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/toggle-button/toggle-button.component.scss":
/*!************************************************************!*\
  !*** ./src/app/toggle-button/toggle-button.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZ2dsZS1idXR0b24vdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/toggle-button/toggle-button.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/toggle-button/toggle-button.component.ts ***!
  \**********************************************************/
/*! exports provided: ToggleButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonComponent", function() { return ToggleButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToggleButtonComponent = /** @class */ (function () {
    function ToggleButtonComponent() {
        this.value = false;
        this.changeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ToggleButtonComponent.prototype.ngOnInit = function () {
    };
    ToggleButtonComponent.prototype.toggle = function () {
        this.changeEmitter.emit(!this.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleButtonComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ToggleButtonComponent.prototype, "changeEmitter", void 0);
    ToggleButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toggle-button',
            template: __webpack_require__(/*! ./toggle-button.component.html */ "./src/app/toggle-button/toggle-button.component.html"),
            styles: [__webpack_require__(/*! ./toggle-button.component.scss */ "./src/app/toggle-button/toggle-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToggleButtonComponent);
    return ToggleButtonComponent;
}());



/***/ }),

/***/ "./src/app/video-artists/video-artists.component.html":
/*!************************************************************!*\
  !*** ./src/app/video-artists/video-artists.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Artists</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <ul>\n                <li>Tipper - Portal Spillage</li>\n                <li>Be Svendsen - Circle</li>\n                <li>Bluetech - Alchemie Dub</li>\n                <li>Grouch - Computer Language</li>\n                <li>Ott - Smoked Glass and Chrome</li>\n                <li>Tipper - Gulch</li>\n                <li>Shpongle - Walking Backwards Through The Cosmic Mirror</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-artists/video-artists.component.scss":
/*!************************************************************!*\
  !*** ./src/app/video-artists/video-artists.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWFydGlzdHMvdmlkZW8tYXJ0aXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/video-artists/video-artists.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/video-artists/video-artists.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoArtistsComponent", function() { return VideoArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoArtistsComponent = /** @class */ (function () {
    function VideoArtistsComponent() {
    }
    VideoArtistsComponent.prototype.ngOnInit = function () {
    };
    VideoArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-artists',
            template: __webpack_require__(/*! ./video-artists.component.html */ "./src/app/video-artists/video-artists.component.html"),
            styles: [__webpack_require__(/*! ./video-artists.component.scss */ "./src/app/video-artists/video-artists.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoArtistsComponent);
    return VideoArtistsComponent;
}());



/***/ }),

/***/ "./src/app/video-canvas-clouds/video-canvas-clouds.component.html":
/*!************************************************************************!*\
  !*** ./src/app/video-canvas-clouds/video-canvas-clouds.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Cloud Effect</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <canvas width=\"400\" height=\"400\" #canvas></canvas>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"col-md-12\">\n                <app-math-formula [formula]=\"initialFormula\"></app-math-formula>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Noise length: {{noiseLength}}</label>\n              </div>\n              <div class=\"col-md-12\">\n                <input class=\"form-control\" type=\"range\" min=\"1\" max=\"100\" step=\"1\" [(ngModel)]=\"noiseLength\" (change)=\"draw()\"/>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Iterations: {{iterations}}</label>\n              </div>\n              <div class=\"col-md-12\">\n                <input class=\"form-control\" type=\"range\" min=\"1\" max=\"10\" step=\"1\" [(ngModel)]=\"iterations\" (change)=\"draw()\"/>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-canvas-clouds/video-canvas-clouds.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/video-canvas-clouds/video-canvas-clouds.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWNhbnZhcy1jbG91ZHMvdmlkZW8tY2FudmFzLWNsb3Vkcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/video-canvas-clouds/video-canvas-clouds.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/video-canvas-clouds/video-canvas-clouds.component.ts ***!
  \**********************************************************************/
/*! exports provided: VideoCanvasCloudsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCanvasCloudsComponent", function() { return VideoCanvasCloudsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _perlin_noise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perlin-noise.service */ "./src/app/perlin-noise.service.ts");



var VideoCanvasCloudsComponent = /** @class */ (function () {
    function VideoCanvasCloudsComponent(perlinNoiseService) {
        this.perlinNoiseService = perlinNoiseService;
        this.noiseLength = 1.0;
        this.iterations = 1;
        this.initialFormula = 'f(x,y,l) = perlin2D(\\frac{x}{l}, \\frac{y}{l})  \\\\ g(x,y,l) = \\sum_{i=1}^{\\infty} \\frac{f(x,y,l/2^{i})}{2^{i}}';
    }
    VideoCanvasCloudsComponent.prototype.ngOnInit = function () {
        this.draw();
    };
    VideoCanvasCloudsComponent.prototype.ngOnDestroy = function () {
    };
    VideoCanvasCloudsComponent.prototype.draw = function () {
        var ctx = this.canvas.nativeElement.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        this.drawPerlinToCanvas(ctx, this.canvas.nativeElement);
    };
    VideoCanvasCloudsComponent.prototype.drawPerlinToCanvas = function (context, canvas) {
        var imgData = context.createImageData(canvas.width, canvas.height);
        var frequency = 1.0 / this.noiseLength;
        for (var x = 0; x < canvas.width; x++) {
            for (var y = 0; y < canvas.height; y++) {
                var value = this.perlinNoiseService.myNoise3dx(x, y, 0.0, frequency, this.iterations);
                var index = (x * canvas.width + y) * 4;
                imgData.data[index + 0] = imgData.data[index + 1] = imgData.data[index + 2] = parseInt(value * 255 + '');
                imgData.data[index + 3] = 255;
            }
        }
        context.putImageData(imgData, 0, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VideoCanvasCloudsComponent.prototype, "canvas", void 0);
    VideoCanvasCloudsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-canvas-clouds',
            template: __webpack_require__(/*! ./video-canvas-clouds.component.html */ "./src/app/video-canvas-clouds/video-canvas-clouds.component.html"),
            styles: [__webpack_require__(/*! ./video-canvas-clouds.component.scss */ "./src/app/video-canvas-clouds/video-canvas-clouds.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perlin_noise_service__WEBPACK_IMPORTED_MODULE_2__["PerlinNoiseService"]])
    ], VideoCanvasCloudsComponent);
    return VideoCanvasCloudsComponent;
}());



/***/ }),

/***/ "./src/app/video-canvas-demo-link/video-canvas-demo-link.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/video-canvas-demo-link/video-canvas-demo-link.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Canvas Demo</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Source: <a [href]=\"link\">{{link}}</a></h4>\n            <qr-code [value]=\"link\" [size]=\"300\"></qr-code>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-canvas-demo-link/video-canvas-demo-link.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/video-canvas-demo-link/video-canvas-demo-link.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWNhbnZhcy1kZW1vLWxpbmsvdmlkZW8tY2FudmFzLWRlbW8tbGluay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/video-canvas-demo-link/video-canvas-demo-link.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/video-canvas-demo-link/video-canvas-demo-link.component.ts ***!
  \****************************************************************************/
/*! exports provided: VideoCanvasDemoLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCanvasDemoLinkComponent", function() { return VideoCanvasDemoLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoCanvasDemoLinkComponent = /** @class */ (function () {
    function VideoCanvasDemoLinkComponent() {
        this.link = 'https://github.com/hdlopesrocha/spring-canvas';
    }
    VideoCanvasDemoLinkComponent.prototype.ngOnInit = function () {
    };
    VideoCanvasDemoLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-canvas-demo-link',
            template: __webpack_require__(/*! ./video-canvas-demo-link.component.html */ "./src/app/video-canvas-demo-link/video-canvas-demo-link.component.html"),
            styles: [__webpack_require__(/*! ./video-canvas-demo-link.component.scss */ "./src/app/video-canvas-demo-link/video-canvas-demo-link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoCanvasDemoLinkComponent);
    return VideoCanvasDemoLinkComponent;
}());



/***/ }),

/***/ "./src/app/video-canvas-intro/video-canvas-intro.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/video-canvas-intro/video-canvas-intro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Canvas API</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              The <b>&lt;canvas&gt;</b> element was added to HTML5 and it can be used to:\n              <ul>\n                <li>draw graphs</li>\n                <li>make photo compositions</li>\n                <li>create animations</li>\n                <li>do real-time video processing or rendering</li>\n              </ul>\n              With JavaScript.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-canvas-intro/video-canvas-intro.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/video-canvas-intro/video-canvas-intro.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWNhbnZhcy1pbnRyby92aWRlby1jYW52YXMtaW50cm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-canvas-intro/video-canvas-intro.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/video-canvas-intro/video-canvas-intro.component.ts ***!
  \********************************************************************/
/*! exports provided: VideoCanvasIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCanvasIntroComponent", function() { return VideoCanvasIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoCanvasIntroComponent = /** @class */ (function () {
    function VideoCanvasIntroComponent() {
    }
    VideoCanvasIntroComponent.prototype.ngOnInit = function () {
    };
    VideoCanvasIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-canvas-intro',
            template: __webpack_require__(/*! ./video-canvas-intro.component.html */ "./src/app/video-canvas-intro/video-canvas-intro.component.html"),
            styles: [__webpack_require__(/*! ./video-canvas-intro.component.scss */ "./src/app/video-canvas-intro/video-canvas-intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoCanvasIntroComponent);
    return VideoCanvasIntroComponent;
}());



/***/ }),

/***/ "./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Moving Clouds</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <canvas width=\"400\" height=\"400\" #canvas></canvas>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"col-md-12\">\n                <app-math-formula [formula]=\"initialFormula\"></app-math-formula>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Noise length: {{noiseLength}}</label>\n              </div>\n              <div class=\"col-md-12\">\n                <input class=\"form-control\" type=\"range\" min=\"1\" max=\"100\" step=\"1\" [(ngModel)]=\"noiseLength\"/>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Iterations: {{iterations}}</label>\n              </div>\n              <div class=\"col-md-12\">\n                <input class=\"form-control\" type=\"range\" min=\"1\" max=\"5\" step=\"1\" [(ngModel)]=\"iterations\"/>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWNhbnZhcy1tb3ZpbmctY2xvdWRzL3ZpZGVvLWNhbnZhcy1tb3ZpbmctY2xvdWRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.ts ***!
  \************************************************************************************/
/*! exports provided: VideoCanvasMovingCloudsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCanvasMovingCloudsComponent", function() { return VideoCanvasMovingCloudsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _perlin_noise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perlin-noise.service */ "./src/app/perlin-noise.service.ts");



var VideoCanvasMovingCloudsComponent = /** @class */ (function () {
    function VideoCanvasMovingCloudsComponent(perlinNoiseService) {
        this.perlinNoiseService = perlinNoiseService;
        this.time = 0;
        this.lastRender = 0;
        this.noiseLength = 1.0;
        this.iterations = 1;
        this.initialFormula = 'f(x,y,z,l) = perlin3D(\\frac{x}{l}, \\frac{y}{l}, \\frac{z}{l})  \\\\ g(x,y,t,l) = \\sum_{i=1}^{\\infty} \\frac{f(x,y,t,l/2^{i})}{2^{i}}';
    }
    VideoCanvasMovingCloudsComponent.prototype.ngOnInit = function () {
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    VideoCanvasMovingCloudsComponent.prototype.ngOnDestroy = function () {
        window.cancelAnimationFrame(this.animationFrame);
    };
    VideoCanvasMovingCloudsComponent.prototype.draw = function (time) {
        var ctx = this.canvas.nativeElement.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        this.drawPerlinToCanvas(ctx, this.canvas.nativeElement, time);
    };
    VideoCanvasMovingCloudsComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    VideoCanvasMovingCloudsComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw(this.time * 0.001);
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    VideoCanvasMovingCloudsComponent.prototype.drawPerlinToCanvas = function (context, canvas, time) {
        var imgData = context.createImageData(canvas.width, canvas.height);
        var frequency = 1.0 / this.noiseLength;
        for (var x = 0; x < canvas.width; x++) {
            for (var y = 0; y < canvas.height; y++) {
                var value = this.perlinNoiseService.myNoise3dx(x, y, time * 10, frequency, this.iterations);
                var index = (x * canvas.width + y) * 4;
                imgData.data[index + 0] = imgData.data[index + 1] = imgData.data[index + 2] = parseInt(value * 255 + '');
                imgData.data[index + 3] = 255;
            }
        }
        context.putImageData(imgData, 0, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VideoCanvasMovingCloudsComponent.prototype, "canvas", void 0);
    VideoCanvasMovingCloudsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-canvas-moving-clouds',
            template: __webpack_require__(/*! ./video-canvas-moving-clouds.component.html */ "./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.html"),
            styles: [__webpack_require__(/*! ./video-canvas-moving-clouds.component.scss */ "./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perlin_noise_service__WEBPACK_IMPORTED_MODULE_2__["PerlinNoiseService"]])
    ], VideoCanvasMovingCloudsComponent);
    return VideoCanvasMovingCloudsComponent;
}());



/***/ }),

/***/ "./src/app/video-canvas-noise/video-canvas-noise.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/video-canvas-noise/video-canvas-noise.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Perlin Noise</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <h3>Perlin noise is a procedural texture primitive, a type of gradient noise used by visual effects artists to increase the appearance of realism in computer graphics.</h3>\n              <h3>The function has a pseudo-random appearance, yet all of its visual details are the same size.</h3>\n            </div>\n            <div class=\"col-md-6\">\n              <canvas width=\"400\" height=\"400\" #canvas></canvas>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"col-md-12\">\n                <app-math-formula [formula]=\"initialFormula\"></app-math-formula>\n              </div>\n              <div class=\"col-md-12\">\n                <label>Noise length: {{noiseLength}}</label>\n              </div>\n              <div class=\"col-md-12\">\n                <input class=\"form-control\" type=\"range\" min=\"1\" max=\"100\" step=\"1\" [(ngModel)]=\"noiseLength\" (change)=\"draw()\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-canvas-noise/video-canvas-noise.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/video-canvas-noise/video-canvas-noise.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWNhbnZhcy1ub2lzZS92aWRlby1jYW52YXMtbm9pc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-canvas-noise/video-canvas-noise.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/video-canvas-noise/video-canvas-noise.component.ts ***!
  \********************************************************************/
/*! exports provided: VideoCanvasNoiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCanvasNoiseComponent", function() { return VideoCanvasNoiseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _perlin_noise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perlin-noise.service */ "./src/app/perlin-noise.service.ts");



var VideoCanvasNoiseComponent = /** @class */ (function () {
    function VideoCanvasNoiseComponent(perlinNoiseService) {
        this.perlinNoiseService = perlinNoiseService;
        this.noiseLength = 1.0;
        this.initialFormula = 'f(x,y,l) = perlin2D(\\frac{x}{l}, \\frac{y}{l})';
    }
    VideoCanvasNoiseComponent.prototype.ngOnInit = function () {
        this.draw();
    };
    VideoCanvasNoiseComponent.prototype.ngOnDestroy = function () {
    };
    VideoCanvasNoiseComponent.prototype.draw = function () {
        var ctx = this.canvas.nativeElement.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
        this.drawPerlinToCanvas(ctx, this.canvas.nativeElement);
    };
    VideoCanvasNoiseComponent.prototype.drawPerlinToCanvas = function (context, canvas) {
        var imgData = context.createImageData(canvas.width, canvas.height);
        var frequency = 1.0 / this.noiseLength;
        for (var x = 0; x < canvas.width; x++) {
            for (var y = 0; y < canvas.height; y++) {
                var value = this.perlinNoiseService.myNoise3d(x, y, 0.0, frequency);
                var index = (x * canvas.width + y) * 4;
                imgData.data[index + 0] = imgData.data[index + 1] = imgData.data[index + 2] = parseInt(value * 255 + '');
                imgData.data[index + 3] = 255;
            }
        }
        context.putImageData(imgData, 0, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VideoCanvasNoiseComponent.prototype, "canvas", void 0);
    VideoCanvasNoiseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-canvas-noise',
            template: __webpack_require__(/*! ./video-canvas-noise.component.html */ "./src/app/video-canvas-noise/video-canvas-noise.component.html"),
            styles: [__webpack_require__(/*! ./video-canvas-noise.component.scss */ "./src/app/video-canvas-noise/video-canvas-noise.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perlin_noise_service__WEBPACK_IMPORTED_MODULE_2__["PerlinNoiseService"]])
    ], VideoCanvasNoiseComponent);
    return VideoCanvasNoiseComponent;
}());



/***/ }),

/***/ "./src/app/video-extra01/video-extra01.component.html":
/*!************************************************************!*\
  !*** ./src/app/video-extra01/video-extra01.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Extra Demos</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <ul>\n              <li>\n                <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://hdlopesrocha.github.io/water-perlin-music/\">\n                  Water perlin noise\n                </a>\n              </li>\n              <li>\n                <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://hdlopesrocha.github.io/polar-perlin-music/\">\n                  Polar perlin noise\n                </a>\n\n              </li>\n              <li>\n                <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://hdlopesrocha.github.io/ripple-viz/\">\n                  Ripple visualization\n                </a>\n              </li>\n              <li>\n                <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://hdlopesrocha.github.io/radial-blur/\">\n                  Radial blur visualization\n                </a>\n              </li>\n              <li>\n                <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://hdlopesrocha.github.io/music-sphere/\">\n                  Music sphere\n                </a>\n              </li>\n              <li>\n                <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://hdlopesrocha.github.io/spiral-viz\">\n                  Spiral visualization\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-extra01/video-extra01.component.scss":
/*!************************************************************!*\
  !*** ./src/app/video-extra01/video-extra01.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWV4dHJhMDEvdmlkZW8tZXh0cmEwMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/video-extra01/video-extra01.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/video-extra01/video-extra01.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoExtra01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoExtra01Component", function() { return VideoExtra01Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoExtra01Component = /** @class */ (function () {
    function VideoExtra01Component() {
    }
    VideoExtra01Component.prototype.ngOnInit = function () {
    };
    VideoExtra01Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-extra01',
            template: __webpack_require__(/*! ./video-extra01.component.html */ "./src/app/video-extra01/video-extra01.component.html"),
            styles: [__webpack_require__(/*! ./video-extra01.component.scss */ "./src/app/video-extra01/video-extra01.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoExtra01Component);
    return VideoExtra01Component;
}());



/***/ }),

/***/ "./src/app/video-home/video-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-home/video-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Content -->\n\n<ul class=\"nav justify-content-end\">\n  <li class=\"btn btn-info\" (click)=\"addSlide(-1)\">\n    <i class=\"fa fa-arrow-left\"></i>\n  </li>\n  <li class=\"btn btn-info\" (click)=\"addSlide(+1)\">\n    <i class=\"fa fa-arrow-right\"></i>\n  </li>\n</ul>\n\n<template #slideContainer></template>\n"

/***/ }),

/***/ "./src/app/video-home/video-home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/video-home/video-home.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWhvbWUvdmlkZW8taG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/video-home/video-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-home/video-home.component.ts ***!
  \****************************************************/
/*! exports provided: VideoHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoHomeComponent", function() { return VideoHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _video_title_video_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video-title/video-title.component */ "./src/app/video-title/video-title.component.ts");
/* harmony import */ var _video_canvas_intro_video_canvas_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../video-canvas-intro/video-canvas-intro.component */ "./src/app/video-canvas-intro/video-canvas-intro.component.ts");
/* harmony import */ var _video_canvas_demo_link_video_canvas_demo_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../video-canvas-demo-link/video-canvas-demo-link.component */ "./src/app/video-canvas-demo-link/video-canvas-demo-link.component.ts");
/* harmony import */ var _video_canvas_noise_video_canvas_noise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../video-canvas-noise/video-canvas-noise.component */ "./src/app/video-canvas-noise/video-canvas-noise.component.ts");
/* harmony import */ var _video_canvas_clouds_video_canvas_clouds_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../video-canvas-clouds/video-canvas-clouds.component */ "./src/app/video-canvas-clouds/video-canvas-clouds.component.ts");
/* harmony import */ var _video_canvas_moving_clouds_video_canvas_moving_clouds_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../video-canvas-moving-clouds/video-canvas-moving-clouds.component */ "./src/app/video-canvas-moving-clouds/video-canvas-moving-clouds.component.ts");
/* harmony import */ var _video_webgl_intro_video_webgl_intro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../video-webgl-intro/video-webgl-intro.component */ "./src/app/video-webgl-intro/video-webgl-intro.component.ts");
/* harmony import */ var _video_webgl_pipepline_video_webgl_pipepline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../video-webgl-pipepline/video-webgl-pipepline.component */ "./src/app/video-webgl-pipepline/video-webgl-pipepline.component.ts");
/* harmony import */ var _video_webgl_demo_link_video_webgl_demo_link_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../video-webgl-demo-link/video-webgl-demo-link.component */ "./src/app/video-webgl-demo-link/video-webgl-demo-link.component.ts");
/* harmony import */ var _video_webgl_light_video_webgl_light_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../video-webgl-light/video-webgl-light.component */ "./src/app/video-webgl-light/video-webgl-light.component.ts");
/* harmony import */ var _video_webgl_diffuse1_video_webgl_diffuse1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../video-webgl-diffuse1/video-webgl-diffuse1.component */ "./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.ts");
/* harmony import */ var _video_webgl_diffuse2_video_webgl_diffuse2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../video-webgl-diffuse2/video-webgl-diffuse2.component */ "./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.ts");
/* harmony import */ var _video_webgl_specular1_video_webgl_specular1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../video-webgl-specular1/video-webgl-specular1.component */ "./src/app/video-webgl-specular1/video-webgl-specular1.component.ts");
/* harmony import */ var _video_webgl_specular2_video_webgl_specular2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../video-webgl-specular2/video-webgl-specular2.component */ "./src/app/video-webgl-specular2/video-webgl-specular2.component.ts");
/* harmony import */ var _video_test_video_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../video-test/video-test.component */ "./src/app/video-test/video-test.component.ts");
/* harmony import */ var _video_questions_video_questions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../video-questions/video-questions.component */ "./src/app/video-questions/video-questions.component.ts");
/* harmony import */ var _sound_contact_sound_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../sound-contact/sound-contact.component */ "./src/app/sound-contact/sound-contact.component.ts");
/* harmony import */ var _video_artists_video_artists_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../video-artists/video-artists.component */ "./src/app/video-artists/video-artists.component.ts");
/* harmony import */ var _video_extra01_video_extra01_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../video-extra01/video-extra01.component */ "./src/app/video-extra01/video-extra01.component.ts");






















var VideoHomeComponent = /** @class */ (function () {
    function VideoHomeComponent(router, route, resolver) {
        this.router = router;
        this.route = route;
        this.resolver = resolver;
        this.slideNumber = 0;
        this.showAll = false;
        this.slides = [
            _video_title_video_title_component__WEBPACK_IMPORTED_MODULE_3__["VideoTitleComponent"],
            _video_canvas_intro_video_canvas_intro_component__WEBPACK_IMPORTED_MODULE_4__["VideoCanvasIntroComponent"],
            _video_canvas_demo_link_video_canvas_demo_link_component__WEBPACK_IMPORTED_MODULE_5__["VideoCanvasDemoLinkComponent"],
            _video_canvas_noise_video_canvas_noise_component__WEBPACK_IMPORTED_MODULE_6__["VideoCanvasNoiseComponent"],
            _video_canvas_clouds_video_canvas_clouds_component__WEBPACK_IMPORTED_MODULE_7__["VideoCanvasCloudsComponent"],
            _video_canvas_moving_clouds_video_canvas_moving_clouds_component__WEBPACK_IMPORTED_MODULE_8__["VideoCanvasMovingCloudsComponent"],
            _video_webgl_intro_video_webgl_intro_component__WEBPACK_IMPORTED_MODULE_9__["VideoWebglIntroComponent"],
            _video_webgl_pipepline_video_webgl_pipepline_component__WEBPACK_IMPORTED_MODULE_10__["VideoWebglPipeplineComponent"],
            _video_webgl_demo_link_video_webgl_demo_link_component__WEBPACK_IMPORTED_MODULE_11__["VideoWebglDemoLinkComponent"],
            _video_webgl_light_video_webgl_light_component__WEBPACK_IMPORTED_MODULE_12__["VideoWebglLightComponent"],
            _video_webgl_diffuse1_video_webgl_diffuse1_component__WEBPACK_IMPORTED_MODULE_13__["VideoWebglDiffuse1Component"],
            _video_webgl_diffuse2_video_webgl_diffuse2_component__WEBPACK_IMPORTED_MODULE_14__["VideoWebglDiffuse2Component"],
            _video_webgl_specular1_video_webgl_specular1_component__WEBPACK_IMPORTED_MODULE_15__["VideoWebglSpecular1Component"],
            _video_webgl_specular2_video_webgl_specular2_component__WEBPACK_IMPORTED_MODULE_16__["VideoWebglSpecular2Component"],
            _video_test_video_test_component__WEBPACK_IMPORTED_MODULE_17__["VideoTestComponent"],
            _video_extra01_video_extra01_component__WEBPACK_IMPORTED_MODULE_21__["VideoExtra01Component"],
            _video_questions_video_questions_component__WEBPACK_IMPORTED_MODULE_18__["VideoQuestionsComponent"],
            _sound_contact_sound_contact_component__WEBPACK_IMPORTED_MODULE_19__["SoundContactComponent"],
            _video_artists_video_artists_component__WEBPACK_IMPORTED_MODULE_20__["VideoArtistsComponent"]
        ];
    }
    VideoHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (p) {
            var sn = p['slide'];
            if (sn) {
                _this.slideNumber = Number(sn);
            }
        });
        this.createComponent();
    };
    VideoHomeComponent.prototype.addSlide = function (value) {
        this.slideNumber += value;
        if (this.slideNumber < 0) {
            this.slideNumber = 0;
        }
        if (this.slideNumber >= this.slides.length) {
            this.slideNumber = this.slides.length - 1;
        }
        var url = this.router.createUrlTree(['/video'], {
            queryParams: {
                slide: this.slideNumber
            }
        });
        this.router.navigateByUrl(url.toString());
        this.createComponent();
    };
    VideoHomeComponent.prototype.createComponent = function () {
        this.entry.clear();
        if (this.showAll) {
            for (var i = 0; i < this.slides.length; ++i) {
                this.loadComponent(i);
            }
        }
        else {
            this.loadComponent(this.slideNumber);
        }
    };
    VideoHomeComponent.prototype.loadComponent = function (index) {
        var factory = this.resolver.resolveComponentFactory(this.slides[index]);
        this.entry.createComponent(factory);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], VideoHomeComponent.prototype, "entry", void 0);
    VideoHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-home',
            template: __webpack_require__(/*! ./video-home.component.html */ "./src/app/video-home/video-home.component.html"),
            styles: [__webpack_require__(/*! ./video-home.component.scss */ "./src/app/video-home/video-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], VideoHomeComponent);
    return VideoHomeComponent;
}());



/***/ }),

/***/ "./src/app/video-questions/video-questions.component.html":
/*!****************************************************************!*\
  !*** ./src/app/video-questions/video-questions.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-wave-background></app-wave-background>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <h1 class=\"mt-5\">Questions?</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-questions/video-questions.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/video-questions/video-questions.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-wave-background {\n  display: block;\n  width: 100%;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hkbG9wZXNyb2NoYS9zcHJpbmctY2FtcHVzLTIwMTkvc3JjL2FwcC92aWRlby1xdWVzdGlvbnMvdmlkZW8tcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXF1ZXN0aW9ucy92aWRlby1xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtd2F2ZS1iYWNrZ3JvdW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/video-questions/video-questions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/video-questions/video-questions.component.ts ***!
  \**************************************************************/
/*! exports provided: VideoQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoQuestionsComponent", function() { return VideoQuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoQuestionsComponent = /** @class */ (function () {
    function VideoQuestionsComponent() {
    }
    VideoQuestionsComponent.prototype.ngOnInit = function () {
    };
    VideoQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-questions',
            template: __webpack_require__(/*! ./video-questions.component.html */ "./src/app/video-questions/video-questions.component.html"),
            styles: [__webpack_require__(/*! ./video-questions.component.scss */ "./src/app/video-questions/video-questions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoQuestionsComponent);
    return VideoQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/video-test/video-test.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-test/video-test.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Test</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              Which of the following are taken into account when calculating the diffuse light factor?\n              <ul>\n                <li>a) Eye position <i *ngIf=\"showAnswer\" class=\"fa fa-times text-danger\" aria-hidden=\"true\"></i></li>\n                <li>b) Light direction & Eye position <i *ngIf=\"showAnswer\" class=\"fa fa-times text-danger\" aria-hidden=\"true\"></i></li>\n                <li>c) Light direction & Surface normal vector <i *ngIf=\"showAnswer\" class=\"fa fa-check text-success\" aria-hidden=\"true\"></i></li>\n                <li>d) Eye Position & Surface light reflection vector <i *ngIf=\"showAnswer\" class=\"fa fa-times text-danger\" aria-hidden=\"true\"></i></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"pull-right\">\n            <div class=\"btn btn-success\" (click)=\"checkAnswer()\">\n              <i class=\"fa fa-check\" aria-hidden=\"true\"></i> Check answer\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-test/video-test.component.scss":
/*!******************************************************!*\
  !*** ./src/app/video-test/video-test.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXRlc3QvdmlkZW8tdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/video-test/video-test.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-test/video-test.component.ts ***!
  \****************************************************/
/*! exports provided: VideoTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTestComponent", function() { return VideoTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoTestComponent = /** @class */ (function () {
    function VideoTestComponent() {
        this.showAnswer = false;
    }
    VideoTestComponent.prototype.ngOnInit = function () {
    };
    VideoTestComponent.prototype.checkAnswer = function () {
        this.showAnswer = true;
    };
    VideoTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-test',
            template: __webpack_require__(/*! ./video-test.component.html */ "./src/app/video-test/video-test.component.html"),
            styles: [__webpack_require__(/*! ./video-test.component.scss */ "./src/app/video-test/video-test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoTestComponent);
    return VideoTestComponent;
}());



/***/ }),

/***/ "./src/app/video-title/video-title.component.html":
/*!********************************************************!*\
  !*** ./src/app/video-title/video-title.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-wave-background></app-wave-background>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n        <h1 class=\"mt-5\">Visualizing Music in 2D and 3D <br>Using the Canvas API and WebGL</h1>\n\n        <p class=\"lead\">by Henrique Rocha</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-title/video-title.component.scss":
/*!********************************************************!*\
  !*** ./src/app/video-title/video-title.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-wave-background {\n  display: block;\n  width: 100%;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hkbG9wZXNyb2NoYS9zcHJpbmctY2FtcHVzLTIwMTkvc3JjL2FwcC92aWRlby10aXRsZS92aWRlby10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWRlby10aXRsZS92aWRlby10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC13YXZlLWJhY2tncm91bmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/video-title/video-title.component.ts":
/*!******************************************************!*\
  !*** ./src/app/video-title/video-title.component.ts ***!
  \******************************************************/
/*! exports provided: VideoTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTitleComponent", function() { return VideoTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoTitleComponent = /** @class */ (function () {
    function VideoTitleComponent() {
    }
    VideoTitleComponent.prototype.ngOnInit = function () {
    };
    VideoTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-title',
            template: __webpack_require__(/*! ./video-title.component.html */ "./src/app/video-title/video-title.component.html"),
            styles: [__webpack_require__(/*! ./video-title.component.scss */ "./src/app/video-title/video-title.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoTitleComponent);
    return VideoTitleComponent;
}());



/***/ }),

/***/ "./src/app/video-webgl-demo-link/video-webgl-demo-link.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/video-webgl-demo-link/video-webgl-demo-link.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>WebGL Demo</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-md-12\">\n            <h4>Source: <a [href]=\"link\">{{link}}</a></h4>\n            <qr-code [value]=\"link\" [size]=\"300\"></qr-code>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-webgl-demo-link/video-webgl-demo-link.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/video-webgl-demo-link/video-webgl-demo-link.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXdlYmdsLWRlbW8tbGluay92aWRlby13ZWJnbC1kZW1vLWxpbmsuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-webgl-demo-link/video-webgl-demo-link.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/video-webgl-demo-link/video-webgl-demo-link.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideoWebglDemoLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWebglDemoLinkComponent", function() { return VideoWebglDemoLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoWebglDemoLinkComponent = /** @class */ (function () {
    function VideoWebglDemoLinkComponent() {
        this.link = 'https://github.com/hdlopesrocha/spring-webgl';
    }
    VideoWebglDemoLinkComponent.prototype.ngOnInit = function () {
    };
    VideoWebglDemoLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-webgl-demo-link',
            template: __webpack_require__(/*! ./video-webgl-demo-link.component.html */ "./src/app/video-webgl-demo-link/video-webgl-demo-link.component.html"),
            styles: [__webpack_require__(/*! ./video-webgl-demo-link.component.scss */ "./src/app/video-webgl-demo-link/video-webgl-demo-link.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoWebglDemoLinkComponent);
    return VideoWebglDemoLinkComponent;
}());



/***/ }),

/***/ "./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Diffuse Shading</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n            </div>\n            <div class=\"col-md-6\">\n              <img style=\"width: 100%\" src=\"assets/diffuse.png\">\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXdlYmdsLWRpZmZ1c2UxL3ZpZGVvLXdlYmdsLWRpZmZ1c2UxLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.ts ***!
  \************************************************************************/
/*! exports provided: VideoWebglDiffuse1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWebglDiffuse1Component", function() { return VideoWebglDiffuse1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoWebglDiffuse1Component = /** @class */ (function () {
    function VideoWebglDiffuse1Component() {
        this.initialFormula = 'U=B-A\\\\V=C-A \\\\ N= U \\times V';
    }
    VideoWebglDiffuse1Component.prototype.ngOnInit = function () {
    };
    VideoWebglDiffuse1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-webgl-diffuse1',
            template: __webpack_require__(/*! ./video-webgl-diffuse1.component.html */ "./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.html"),
            styles: [__webpack_require__(/*! ./video-webgl-diffuse1.component.scss */ "./src/app/video-webgl-diffuse1/video-webgl-diffuse1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoWebglDiffuse1Component);
    return VideoWebglDiffuse1Component;
}());



/***/ }),

/***/ "./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Diffuse Shading</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <img style=\"width: 100%\" src=\"assets/light.png\">\n            </div>\n            <div class=\"col-md-7\">\n              <app-math-formula class=\"col-md-12\" [formula]=\"initialFormula\">\n              </app-math-formula>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXdlYmdsLWRpZmZ1c2UyL3ZpZGVvLXdlYmdsLWRpZmZ1c2UyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.ts ***!
  \************************************************************************/
/*! exports provided: VideoWebglDiffuse2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWebglDiffuse2Component", function() { return VideoWebglDiffuse2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoWebglDiffuse2Component = /** @class */ (function () {
    function VideoWebglDiffuse2Component() {
        this.initialFormula = '\\text{DiffuseFactor}=-L \\cdotp N \\\\ \\text{DiffuseColor} = \\text{LightColor}\\times\\text{DiffuseFactor} \\\\ \\text{Color}=\\text{MaterialColor}\\times \\text{DiffuseColor}';
    }
    VideoWebglDiffuse2Component.prototype.ngOnInit = function () {
    };
    VideoWebglDiffuse2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-webgl-diffuse2',
            template: __webpack_require__(/*! ./video-webgl-diffuse2.component.html */ "./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.html"),
            styles: [__webpack_require__(/*! ./video-webgl-diffuse2.component.scss */ "./src/app/video-webgl-diffuse2/video-webgl-diffuse2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoWebglDiffuse2Component);
    return VideoWebglDiffuse2Component;
}());



/***/ }),

/***/ "./src/app/video-webgl-intro/video-webgl-intro.component.html":
/*!********************************************************************!*\
  !*** ./src/app/video-webgl-intro/video-webgl-intro.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>WebGL API</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <blockquote>\n\n                \"WebGL is a cross-platform, royalty-free web standard for a low-level 3D graphics API based on OpenGL ES, exposed to ECMAScript via the HTML5 Canvas element.<br>\n                Developers familiar with OpenGL ES 2.0 will recognize WebGL as a Shader-based API using GLSL, with constructs that are semantically similar to those of the underlying OpenGL ES API.<br>\n                It stays very close to the OpenGL ES specification, with some concessions made for what developers expect out of memory-managed languages such as JavaScript.\"\n                <footer><cite>https://www.khronos.org/webgl/</cite></footer>\n              </blockquote>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-webgl-intro/video-webgl-intro.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/video-webgl-intro/video-webgl-intro.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXdlYmdsLWludHJvL3ZpZGVvLXdlYmdsLWludHJvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/video-webgl-intro/video-webgl-intro.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/video-webgl-intro/video-webgl-intro.component.ts ***!
  \******************************************************************/
/*! exports provided: VideoWebglIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWebglIntroComponent", function() { return VideoWebglIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoWebglIntroComponent = /** @class */ (function () {
    function VideoWebglIntroComponent() {
    }
    VideoWebglIntroComponent.prototype.ngOnInit = function () {
    };
    VideoWebglIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-webgl-intro',
            template: __webpack_require__(/*! ./video-webgl-intro.component.html */ "./src/app/video-webgl-intro/video-webgl-intro.component.html"),
            styles: [__webpack_require__(/*! ./video-webgl-intro.component.scss */ "./src/app/video-webgl-intro/video-webgl-intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoWebglIntroComponent);
    return VideoWebglIntroComponent;
}());



/***/ }),

/***/ "./src/app/video-webgl-light/video-webgl-light.component.html":
/*!********************************************************************!*\
  !*** ./src/app/video-webgl-light/video-webgl-light.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Shading</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <img style=\"width: 100%\" src=\"assets/light.png\">\n            </div>\n            <div class=\"col-md-6\">\n              <app-math-formula class=\"col-md-12\" [formula]=\"initialFormula\">\n              </app-math-formula>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-webgl-light/video-webgl-light.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/video-webgl-light/video-webgl-light.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXdlYmdsLWxpZ2h0L3ZpZGVvLXdlYmdsLWxpZ2h0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/video-webgl-light/video-webgl-light.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/video-webgl-light/video-webgl-light.component.ts ***!
  \******************************************************************/
/*! exports provided: VideoWebglLightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWebglLightComponent", function() { return VideoWebglLightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoWebglLightComponent = /** @class */ (function () {
    function VideoWebglLightComponent() {
        this.initialFormula = 'U=B-A\\\\V=C-A \\\\ N= U \\times V';
    }
    VideoWebglLightComponent.prototype.ngOnInit = function () {
    };
    VideoWebglLightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-webgl-light',
            template: __webpack_require__(/*! ./video-webgl-light.component.html */ "./src/app/video-webgl-light/video-webgl-light.component.html"),
            styles: [__webpack_require__(/*! ./video-webgl-light.component.scss */ "./src/app/video-webgl-light/video-webgl-light.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoWebglLightComponent);
    return VideoWebglLightComponent;
}());



/***/ }),

/***/ "./src/app/video-webgl-pipepline/video-webgl-pipepline.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/video-webgl-pipepline/video-webgl-pipepline.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>WebGL Pipeline</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n            </div>\n            <div class=\"col-md-6\">\n              <img style=\"width: 100%\" src=\"assets/pipeline.png\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/video-webgl-pipepline/video-webgl-pipepline.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/video-webgl-pipepline/video-webgl-pipepline.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXdlYmdsLXBpcGVwbGluZS92aWRlby13ZWJnbC1waXBlcGxpbmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-webgl-pipepline/video-webgl-pipepline.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/video-webgl-pipepline/video-webgl-pipepline.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideoWebglPipeplineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWebglPipeplineComponent", function() { return VideoWebglPipeplineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoWebglPipeplineComponent = /** @class */ (function () {
    function VideoWebglPipeplineComponent() {
    }
    VideoWebglPipeplineComponent.prototype.ngOnInit = function () {
    };
    VideoWebglPipeplineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-webgl-pipepline',
            template: __webpack_require__(/*! ./video-webgl-pipepline.component.html */ "./src/app/video-webgl-pipepline/video-webgl-pipepline.component.html"),
            styles: [__webpack_require__(/*! ./video-webgl-pipepline.component.scss */ "./src/app/video-webgl-pipepline/video-webgl-pipepline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoWebglPipeplineComponent);
    return VideoWebglPipeplineComponent;
}());



/***/ }),

/***/ "./src/app/video-webgl-specular1/video-webgl-specular1.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/video-webgl-specular1/video-webgl-specular1.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Specular Shading</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n            </div>\n            <div class=\"col-md-6\">\n              <img style=\"width: 100%\" src=\"assets/specular.png\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/video-webgl-specular1/video-webgl-specular1.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/video-webgl-specular1/video-webgl-specular1.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXdlYmdsLXNwZWN1bGFyMS92aWRlby13ZWJnbC1zcGVjdWxhcjEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-webgl-specular1/video-webgl-specular1.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/video-webgl-specular1/video-webgl-specular1.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideoWebglSpecular1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWebglSpecular1Component", function() { return VideoWebglSpecular1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoWebglSpecular1Component = /** @class */ (function () {
    function VideoWebglSpecular1Component() {
        this.initialFormula = 'U=B-A\\\\V=C-A \\\\ N= U \\times V';
    }
    VideoWebglSpecular1Component.prototype.ngOnInit = function () {
    };
    VideoWebglSpecular1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-webgl-specular1',
            template: __webpack_require__(/*! ./video-webgl-specular1.component.html */ "./src/app/video-webgl-specular1/video-webgl-specular1.component.html"),
            styles: [__webpack_require__(/*! ./video-webgl-specular1.component.scss */ "./src/app/video-webgl-specular1/video-webgl-specular1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoWebglSpecular1Component);
    return VideoWebglSpecular1Component;
}());



/***/ }),

/***/ "./src/app/video-webgl-specular2/video-webgl-specular2.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/video-webgl-specular2/video-webgl-specular2.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4>Specular Shading</h4>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <img style=\"width: 100%\" src=\"assets/light.png\">\n            </div>\n            <div class=\"col-md-7\">\n              <app-math-formula class=\"col-md-12\" [formula]=\"initialFormula\">\n              </app-math-formula>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/video-webgl-specular2/video-webgl-specular2.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/video-webgl-specular2/video-webgl-specular2.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXdlYmdsLXNwZWN1bGFyMi92aWRlby13ZWJnbC1zcGVjdWxhcjIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/video-webgl-specular2/video-webgl-specular2.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/video-webgl-specular2/video-webgl-specular2.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideoWebglSpecular2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWebglSpecular2Component", function() { return VideoWebglSpecular2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoWebglSpecular2Component = /** @class */ (function () {
    function VideoWebglSpecular2Component() {
        this.initialFormula = 'R=L-2(L \\cdotp N)N \\\\ \\text{SpecularFactor}=(-R \\cdotp E)^{\\text{SpecularPower}} \\\\ \\text{SpecularPower} = ? \\\\ \\text{SpecularColor} = \\text{LightColor}\\times\\text{SpecularFactor}  \\\\ \\text{Color}=\\text{MaterialColor}\\times \\text{DiffuseColor}+\\text{SpecularColor}';
    }
    VideoWebglSpecular2Component.prototype.ngOnInit = function () {
    };
    VideoWebglSpecular2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-webgl-specular2',
            template: __webpack_require__(/*! ./video-webgl-specular2.component.html */ "./src/app/video-webgl-specular2/video-webgl-specular2.component.html"),
            styles: [__webpack_require__(/*! ./video-webgl-specular2.component.scss */ "./src/app/video-webgl-specular2/video-webgl-specular2.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoWebglSpecular2Component);
    return VideoWebglSpecular2Component;
}());



/***/ }),

/***/ "./src/app/wave-background/wave-background.component.html":
/*!****************************************************************!*\
  !*** ./src/app/wave-background/wave-background.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas  #canvas class=\"inner\" id=\"myCanvas\" width=\"1200\" height=\"500\" ></canvas>\n"

/***/ }),

/***/ "./src/app/wave-background/wave-background.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/wave-background/wave-background.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hkbG9wZXNyb2NoYS9zcHJpbmctY2FtcHVzLTIwMTkvc3JjL2FwcC93YXZlLWJhY2tncm91bmQvd2F2ZS1iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2F2ZS1iYWNrZ3JvdW5kL3dhdmUtYmFja2dyb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/wave-background/wave-background.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/wave-background/wave-background.component.ts ***!
  \**************************************************************/
/*! exports provided: WaveBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaveBackgroundComponent", function() { return WaveBackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _perlin_noise_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perlin-noise.service */ "./src/app/perlin-noise.service.ts");
/* harmony import */ var _audio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../audio.component */ "./src/app/audio.component.ts");




var WaveBackgroundComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WaveBackgroundComponent, _super);
    function WaveBackgroundComponent(perlinNoiseService) {
        var _this = _super.call(this) || this;
        _this.perlinNoiseService = perlinNoiseService;
        _this.time = 0;
        _this.isPlaying = false;
        _this.lastRender = 0;
        return _this;
    }
    WaveBackgroundComponent.prototype.ngOnInit = function () {
        this.canvas = this.canvasRef.nativeElement;
        this.canvasContext = this.canvas.getContext('2d');
        this.perlinNoiseService.seed(Math.random());
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
        var browser = navigator;
        browser.getUserMedia = (browser.getUserMedia ||
            browser.webkitGetUserMedia ||
            browser.mozGetUserMedia ||
            browser.msGetUserMedia);
        browser.mediaDevices.getUserMedia({ audio: true, video: false }).then(this.playSound.bind(this));
    };
    WaveBackgroundComponent.prototype.playSound = function (stream) {
        this.source = this.audioContext.createMediaStreamSource(stream);
        this.source.connect(this.analyser);
        this.analyser.disconnect();
        this.isPlaying = true;
    };
    WaveBackgroundComponent.prototype.update = function (progress) {
        this.time += progress;
    };
    WaveBackgroundComponent.prototype.draw = function () {
        this.updateFrequencyArray();
        this.updateDataArray();
        this.clearCanvas(this.canvasContext, this.canvas);
        for (var i = 0; i < 256; ++i) {
            this.drawPerlinCircleToCanvas(this.canvasContext, this.canvas, this.time / 10000, this.time / 10000 + i / 512, this.dataArray, this.freqArray);
        }
    };
    WaveBackgroundComponent.prototype.loop = function (timestamp) {
        var progress = timestamp - this.lastRender;
        this.update(progress);
        this.draw();
        this.lastRender = timestamp;
        this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
    };
    WaveBackgroundComponent.prototype.scale = function (num, in_min, in_max, out_min, out_max) {
        var v = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        return v > out_max ? out_max : v < out_min ? out_min : v;
    };
    WaveBackgroundComponent.prototype.clearCanvas = function (context, canvas) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };
    WaveBackgroundComponent.prototype.myNoise3d = function (x, y, z, l) {
        var v = this.perlinNoiseService.simplex3(x / l, y / l, z / l);
        return 0.5 * (v + 1);
    };
    WaveBackgroundComponent.prototype.myNoise3dx = function (x, y, z, l) {
        var il = l;
        var pe = 0.5;
        var re = 0;
        for (var i = 0; i < 7; ++i) {
            re += pe * this.myNoise3d(x, y, z, il);
            il *= 0.5;
            pe *= 0.5;
        }
        return re;
    };
    WaveBackgroundComponent.prototype.getPoint = function (canvas, cx, cy, cr, perc, t0, time, dataArray, freqArray) {
        var i0 = dataArray ? this.scale(perc, 0, 1, 0, dataArray.length - 1) : 0;
        var i0p = i0 - Math.floor(i0);
        var i0i = parseInt(i0);
        var f0 = dataArray ? dataArray[i0i] * (1 - i0p) + dataArray[(i0i + 1) % dataArray.length] * (i0p) : 0;
        var f = f0 * 0.4;
        if (isNaN(f)) {
            f = 0.0;
        }
        var sx = 0.5 * perc + t0;
        var sy = 0.5 * perc;
        var sr = this.myNoise3dx(sx, sy, (time + f / 256), 1.0) * 2.0 - 1.0;
        return {
            x: perc * canvas.width,
            y: canvas.height / 2 - sr * cr + f
        };
    };
    WaveBackgroundComponent.prototype.drawPerlinCircleToCanvas = function (context, canvas, t0, time, dataArray, freqArray) {
        var colorR = parseInt(this.myNoise3dx(time, 0, 0, 1.0) * 255 + '');
        var colorG = parseInt(this.myNoise3dx(0, time, 0, 1.0) * 255 + '');
        var colorB = parseInt(this.myNoise3dx(0, 0, time, 1.0) * 255 + '');
        context.strokeStyle = 'rgba(' + colorR + ',' + colorG + ',' + colorB + ',0.2)';
        context.beginPath();
        var cx = canvas.width / 2;
        var cy = canvas.height / 2;
        var cr = canvas.height / 4;
        var init = true;
        for (var perc = 0; perc < 1.000001; perc += 0.005) {
            var point = this.getPoint(canvas, cx, cy, cr, perc, t0, time, dataArray, freqArray);
            init ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y);
            init = false;
        }
        context.stroke();
    };
    WaveBackgroundComponent.prototype.ngOnDestroy = function () {
        window.cancelAnimationFrame(this.animationFrame);
        this.source.disconnect();
        this.stopSound();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], WaveBackgroundComponent.prototype, "canvasRef", void 0);
    WaveBackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wave-background',
            template: __webpack_require__(/*! ./wave-background.component.html */ "./src/app/wave-background/wave-background.component.html"),
            styles: [__webpack_require__(/*! ./wave-background.component.scss */ "./src/app/wave-background/wave-background.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perlin_noise_service__WEBPACK_IMPORTED_MODULE_2__["PerlinNoiseService"]])
    ], WaveBackgroundComponent);
    return WaveBackgroundComponent;
}(_audio_component__WEBPACK_IMPORTED_MODULE_3__["AudioComponent"]));



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

module.exports = __webpack_require__(/*! /home/hdlopesrocha/spring-campus-2019/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map