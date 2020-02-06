(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fullcalendar"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["fullcalendar", "moment"], factory);
	else if(typeof exports === 'object')
		exports["FullCalendar"] = factory(require("fullcalendar"), require("moment"));
	else
		root["FullCalendar"] = factory(root["FullCalendar"], root["moment"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
Object.defineProperty(exports, "__esModule", { value: true });
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result.default = mod;
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

if (jQuery.fullCalendar !== undefined) {
    var YearView = __webpack_require__(3).default;
    jQuery.fullCalendar.defineView('year', {
        'class': YearView,
        duration: { years: 1 }
    });
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fullcalendar_1 = __webpack_require__(1);
var YearGrid_1 = __webpack_require__(4);
var YearViewDateProfileGenerator_1 = __webpack_require__(8);
var YearView = /** @class */ (function (_super) {
    tslib_1.__extends(YearView, _super);
    function YearView(calendar, viewSpec) {
        return _super.call(this, calendar, viewSpec) || this;
    }
    YearView.prototype.instantiateDayGrid = function () {
        // generate a subclass on the fly with BasicView-specific behavior
        // TODO: cache this subclass
        var subclass = this.makeDayGridSubclass(this.dayGridClass);
        return new subclass(this);
    };
    // customize the rendering behavior of BasicView's dayGrid
    YearView.prototype.makeDayGridSubclass = function (SuperClass) {
        return /** @class */ (function (_super) {
            tslib_1.__extends(SubClass, _super);
            function SubClass() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.colWeekNumbersVisible = true; // display week numbers along the side?
                return _this;
            }
            // Generates the HTML that will go before the day-of week header cells
            SubClass.prototype.renderHeadIntroHtml = function () {
                var view = this.view;
                return '' +
                    '<th class="fc-week-number ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.weekNumberStyleAttr() + '>' +
                    '<span>' +
                    '</span>' +
                    '</th>';
            };
            // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
            SubClass.prototype.renderNumberIntroHtml = function (row) {
                var view = this.view;
                var monthStart = this.getCellDate(row, 0);
                return '' +
                    '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
                    view.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                    { date: monthStart, type: 'week', forceOff: this.colCnt === 1 }, monthStart.format('MMM') // inner HTML
                    ) +
                    '</td>';
            };
            // Generates the HTML that goes before the day bg cells for each day-row
            SubClass.prototype.renderBgIntroHtml = function () {
                var view = this.view;
                return '<td class="fc-week-number ' + view.calendar.theme.getClass('widgetContent') + '" ' +
                    view.weekNumberStyleAttr() + '></td>';
            };
            // Generates the HTML that goes before every other type of row generated by DayGrid.
            // Affects helper-skeleton and highlight-skeleton rows.
            SubClass.prototype.renderIntroHtml = function () {
                var view = this.view;
                return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>';
            };
            SubClass.prototype.getIsNumbersVisible = function () {
                return true;
            };
            return SubClass;
        }(SuperClass));
    };
    return YearView;
}(fullcalendar_1.BasicView));
exports.default = YearView;
YearView.prototype.dayGridClass = YearGrid_1.default;
YearView.prototype.dateProfileGeneratorClass = YearViewDateProfileGenerator_1.YearViewDateProfileGenerator;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fullcalendar_1 = __webpack_require__(1);
var YearTableMixin_1 = __webpack_require__(5);
var YearGrid = /** @class */ (function (_super) {
    tslib_1.__extends(YearGrid, _super);
    function YearGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.colCnt = 31;
        _this.rowCnt = 12;
        _this.daysPerRow = 31;
        _this.cellWeekNumbersVisible = false; // display week numbers in day cell?
        _this.breakOnWeeks = false;
        return _this;
    }
    // Renders the rows and columns into the component's `this.el`, which should already be assigned.
    YearGrid.prototype.renderGrid = function () {
        var view = this.view;
        var rowCnt = this.rowCnt;
        var colCnt = this.colCnt;
        var html = '';
        var row;
        var col;
        if (this.headContainerEl) {
            this.headContainerEl.html(this.renderHeadHtml());
        }
        for (row = 0; row < rowCnt; row++) {
            html += this.renderDayRowHtml(row, this.isRigid);
        }
        this.el.html(html);
        this.rowEls = this.el.find('.fc-row');
        this.cellEls = this.el.find('.fc-day, .fc-disabled-day');
        this.rowCoordCache = new fullcalendar_1.CoordCache({
            els: this.rowEls,
            isVertical: true
        });
        this.colCoordCache = new fullcalendar_1.CoordCache({
            els: this.cellEls.slice(0, this.colCnt),
            isHorizontal: true
        });
        // trigger dayRender with each cell's element
        for (row = 0; row < rowCnt; row++) {
            for (col = 0; col < colCnt; col++) {
                if (this.getCellDate(row, col) != null) {
                    this.publiclyTrigger('dayRender', {
                        context: view,
                        args: [
                            this.getCellDate(row, col),
                            this.getCellEl(row, col),
                            view
                        ]
                    });
                }
            }
        }
    };
    // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
    // The number row will only exist if either day numbers or week numbers are turned on.
    YearGrid.prototype.renderNumberCellHtml = function (date) {
        if (date == null)
            return '';
        var view = this.view;
        var html = '';
        var isDateValid = this.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
        var classes;
        var weekCalcFirstDoW;
        if (!isDayNumberVisible && !this.cellWeekNumbersVisible) {
            // no numbers in day cell (week number must be along the side)
            return '<td/>'; //  will create an empty space above events :(
        }
        classes = this.getDayClasses(date);
        classes.unshift('fc-day-top');
        if (this.cellWeekNumbersVisible) {
            // To determine the day of week number change under ISO, we cannot
            // rely on moment.js methods such as firstDayOfWeek() or weekday(),
            // because they rely on the locale's dow (possibly overridden by
            // our firstDay option), which may not be Monday. We cannot change
            // dow, because that would affect the calendar start day as well.
            if (date._locale._fullCalendar_weekCalc === 'ISO') {
                weekCalcFirstDoW = 1; // Monday by ISO 8601 definition
            }
            else {
                weekCalcFirstDoW = date._locale.firstDayOfWeek();
            }
        }
        html += '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + date.format() + '"' :
                '') +
            '>';
        if (this.cellWeekNumbersVisible && (date.day() === weekCalcFirstDoW)) {
            html += view.buildGotoAnchorHtml({ date: date, type: 'week' }, { 'class': 'fc-week-number' }, date.format('w') // inner HTML
            );
        }
        if (isDayNumberVisible) {
            html += view.buildGotoAnchorHtml(date, { 'class': 'fc-day-number' }, date.format('D') // inner HTML
            );
        }
        html += '</td>';
        return html;
    };
    // Slices up the given span (unzoned start/end with other misc data) into an array of segments
    YearGrid.prototype.componentFootprintToSegs = function (componentFootprint) {
        var segs = this.sliceRangeByRow(componentFootprint.unzonedRange);
        var i;
        var seg;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            if (this.isRTL) {
                seg.leftCol = this.daysPerRow - 1 - seg.lastRowDayIndex;
                seg.rightCol = this.daysPerRow - 1 - seg.firstRowDayIndex;
            }
            else {
                seg.leftCol = seg.firstRowDayIndex;
                seg.rightCol = seg.lastRowDayIndex;
            }
        }
        return segs;
    };
    return YearGrid;
}(fullcalendar_1.DayGrid));
exports.default = YearGrid;
YearTableMixin_1.default.mixOver(YearGrid);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var DayTableMixin_1 = __webpack_require__(6);
var YearTableMixin = /** @class */ (function (_super) {
    tslib_1.__extends(YearTableMixin, _super);
    function YearTableMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Populates internal variables used for date calculation and rendering
    YearTableMixin.prototype.updateDayTable = function () {
        var t = this;
        var view = t.view;
        var calendar = view.calendar;
        this.startDate = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.startMs, true);
    };
    YearTableMixin.prototype.renderBgCellHtml = function (date, otherAttrs) {
        var t = this;
        var view = t.view;
        var isDateValid = date != null;
        var classes = isDateValid ? t.getDayClasses(date) : [];
        classes.unshift('fc-day', view.calendar.theme.getClass('widgetContent'));
        return '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '></td>';
    };
    // Determines how many columns there should be in the table
    YearTableMixin.prototype.computeColCnt = function () {
        return 31;
    };
    // Computes the ambiguously-timed moment for the given cell
    YearTableMixin.prototype.getCellDate = function (row, col) {
        var date = this.startDate.clone().month(row);
        if (date.daysInMonth() > col) {
            return date.date(col + 1);
        }
        return null;
    };
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    YearTableMixin.prototype.getDateDayIndex = function (date) {
        return date.month() * 31 + date.date() - 1;
    };
    YearTableMixin.prototype.renderHeadTrHtml = function () {
        return '<tr></tr>';
    };
    // Slices up a date range into a segment for every week-row it intersects with
    // Contrary to DayTableMixin::sliceRangeByRow this version must be aware of the fact that not every month has the same number of days
    YearTableMixin.prototype.sliceRangeByRow = function (unzonedRange) {
        var daysPerRow = this.daysPerRow;
        var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        var segs = [];
        var row;
        var rowFirst;
        var rowLast; // inclusive day-index range for current row
        var segFirst;
        var segLast; // inclusive day-index range for segment
        for (row = 0; row < this.rowCnt; row++) {
            rowFirst = row * daysPerRow;
            rowLast = rowFirst + normalRange.start.month(row).daysInMonth() - 1;
            // intersect segment's offset range with the row's
            segFirst = Math.max(rangeFirst, rowFirst);
            segLast = Math.min(rangeLast, rowLast);
            // deal with in-between indices
            segFirst = Math.ceil(segFirst); // in-between starts round to next cell
            segLast = Math.floor(segLast); // in-between ends round to prev cell
            if (segFirst <= segLast) { // was there any intersection with the current row?
                segs.push({
                    row: row,
                    // normalize to start of row
                    firstRowDayIndex: segFirst - rowFirst,
                    lastRowDayIndex: segLast - rowFirst,
                    // must be matching integers to be the segment's start/end
                    isStart: segFirst === rangeFirst,
                    isEnd: segLast === rangeLast
                });
            }
        }
        return segs;
    };
    return YearTableMixin;
}(DayTableMixin_1.default));
exports.default = YearTableMixin;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fullcalendar_1 = __webpack_require__(1);
var Mixin_1 = __webpack_require__(7);
/*
A set of rendering and date-related methods for a visual component comprised of one or more rows of day columns.
Prerequisite: the object being mixed into needs to be a *Grid*
*/
var DayTableMixin = /** @class */ (function (_super) {
    tslib_1.__extends(DayTableMixin, _super);
    function DayTableMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Populates internal variables used for date calculation and rendering
    DayTableMixin.prototype.updateDayTable = function () {
        var t = this;
        var view = t.view;
        var calendar = view.calendar;
        var date = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.startMs, true);
        var end = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.endMs, true);
        var dayIndex = -1;
        var dayIndices = [];
        var dayDates = [];
        var daysPerRow;
        var firstDay;
        var rowCnt;
        while (date.isBefore(end)) { // loop each day from start to end
            if (view.isHiddenDay(date)) {
                dayIndices.push(dayIndex + 0.5); // mark that it's between indices
            }
            else {
                dayIndex++;
                dayIndices.push(dayIndex);
                dayDates.push(date.clone());
            }
            date.add(1, 'days');
        }
        if (this.breakOnWeeks) {
            // count columns until the day-of-week repeats
            firstDay = dayDates[0].day();
            for (daysPerRow = 1; daysPerRow < dayDates.length; daysPerRow++) {
                if (dayDates[daysPerRow].day() === firstDay) {
                    break;
                }
            }
            rowCnt = Math.ceil(dayDates.length / daysPerRow);
        }
        else {
            rowCnt = 1;
            daysPerRow = dayDates.length;
        }
        this.dayDates = dayDates;
        this.dayIndices = dayIndices;
        this.daysPerRow = daysPerRow;
        this.rowCnt = rowCnt;
        this.updateDayTableCols();
    };
    // Computes and assigned the colCnt property and updates any options that may be computed from it
    DayTableMixin.prototype.updateDayTableCols = function () {
        this.colCnt = this.computeColCnt();
        this.colHeadFormat =
            this.opt('columnHeaderFormat') ||
                this.opt('columnFormat') || // deprecated
                this.computeColHeadFormat();
    };
    // Determines how many columns there should be in the table
    DayTableMixin.prototype.computeColCnt = function () {
        return this.daysPerRow;
    };
    // Computes the ambiguously-timed moment for the given cell
    DayTableMixin.prototype.getCellDate = function (row, col) {
        return this.dayDates[this.getCellDayIndex(row, col)].clone();
    };
    // Computes the ambiguously-timed date range for the given cell
    DayTableMixin.prototype.getCellRange = function (row, col) {
        var start = this.getCellDate(row, col);
        var end = start.clone().add(1, 'days');
        return { start: start, end: end };
    };
    // Returns the number of day cells, chronologically, from the first of the grid (0-based)
    DayTableMixin.prototype.getCellDayIndex = function (row, col) {
        return row * this.daysPerRow + this.getColDayIndex(col);
    };
    // Returns the numner of day cells, chronologically, from the first cell in *any given row*
    DayTableMixin.prototype.getColDayIndex = function (col) {
        if (this.isRTL) {
            return this.colCnt - 1 - col;
        }
        else {
            return col;
        }
    };
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    DayTableMixin.prototype.getDateDayIndex = function (date) {
        var dayIndices = this.dayIndices;
        var dayOffset = date.diff(this.dayDates[0], 'days');
        if (dayOffset < 0) {
            return dayIndices[0] - 1;
        }
        else if (dayOffset >= dayIndices.length) {
            return dayIndices[dayIndices.length - 1] + 1;
        }
        else {
            return dayIndices[dayOffset];
        }
    };
    /* Options
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes a default column header formatting string if `colFormat` is not explicitly defined
    DayTableMixin.prototype.computeColHeadFormat = function () {
        // if more than one week row, or if there are a lot of columns with not much space,
        // put just the day numbers will be in each cell
        if (this.rowCnt > 1 || this.colCnt > 10) {
            return 'ddd'; // "Sat"
        }
        else if (this.colCnt > 1) {
            return this.opt('dayOfMonthFormat'); // "Sat 12/10"
        }
        else {
            return 'dddd'; // "Saturday"
        }
    };
    /* Slicing
    ------------------------------------------------------------------------------------------------------------------*/
    // Slices up a date range into a segment for every week-row it intersects with
    DayTableMixin.prototype.sliceRangeByRow = function (unzonedRange) {
        var daysPerRow = this.daysPerRow;
        var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        var segs = [];
        var row;
        var rowFirst;
        var rowLast; // inclusive day-index range for current row
        var segFirst;
        var segLast; // inclusive day-index range for segment
        for (row = 0; row < this.rowCnt; row++) {
            rowFirst = row * daysPerRow;
            rowLast = rowFirst + daysPerRow - 1;
            // intersect segment's offset range with the row's
            segFirst = Math.max(rangeFirst, rowFirst);
            segLast = Math.min(rangeLast, rowLast);
            // deal with in-between indices
            segFirst = Math.ceil(segFirst); // in-between starts round to next cell
            segLast = Math.floor(segLast); // in-between ends round to prev cell
            if (segFirst <= segLast) { // was there any intersection with the current row?
                segs.push({
                    row: row,
                    // normalize to start of row
                    firstRowDayIndex: segFirst - rowFirst,
                    lastRowDayIndex: segLast - rowFirst,
                    // must be matching integers to be the segment's start/end
                    isStart: segFirst === rangeFirst,
                    isEnd: segLast === rangeLast
                });
            }
        }
        return segs;
    };
    // Slices up a date range into a segment for every day-cell it intersects with.
    // TODO: make more DRY with sliceRangeByRow somehow.
    DayTableMixin.prototype.sliceRangeByDay = function (unzonedRange) {
        var daysPerRow = this.daysPerRow;
        var normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        var rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        var rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        var segs = [];
        var row;
        var rowFirst;
        var rowLast; // inclusive day-index range for current row
        var i;
        var segFirst;
        var segLast; // inclusive day-index range for segment
        for (row = 0; row < this.rowCnt; row++) {
            rowFirst = row * daysPerRow;
            rowLast = rowFirst + daysPerRow - 1;
            for (i = rowFirst; i <= rowLast; i++) {
                // intersect segment's offset range with the row's
                segFirst = Math.max(rangeFirst, i);
                segLast = Math.min(rangeLast, i);
                // deal with in-between indices
                segFirst = Math.ceil(segFirst); // in-between starts round to next cell
                segLast = Math.floor(segLast); // in-between ends round to prev cell
                if (segFirst <= segLast) { // was there any intersection with the current row?
                    segs.push({
                        row: row,
                        // normalize to start of row
                        firstRowDayIndex: segFirst - rowFirst,
                        lastRowDayIndex: segLast - rowFirst,
                        // must be matching integers to be the segment's start/end
                        isStart: segFirst === rangeFirst,
                        isEnd: segLast === rangeLast
                    });
                }
            }
        }
        return segs;
    };
    /* Header Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayTableMixin.prototype.renderHeadHtml = function () {
        var theme = this.view.calendar.theme;
        return '' +
            '<div class="fc-row ' + theme.getClass('headerRow') + '">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            '<thead>' +
            this.renderHeadTrHtml() +
            '</thead>' +
            '</table>' +
            '</div>';
    };
    DayTableMixin.prototype.renderHeadIntroHtml = function () {
        return this.renderIntroHtml(); // fall back to generic
    };
    DayTableMixin.prototype.renderHeadTrHtml = function () {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderHeadIntroHtml()) +
            this.renderHeadDateCellsHtml() +
            (this.isRTL ? this.renderHeadIntroHtml() : '') +
            '</tr>';
    };
    DayTableMixin.prototype.renderHeadDateCellsHtml = function () {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(0, col);
            htmls.push(this.renderHeadDateCellHtml(date));
        }
        return htmls.join('');
    };
    // TODO: when internalApiVersion, accept an object for HTML attributes
    // (colspan should be no different)
    DayTableMixin.prototype.renderHeadDateCellHtml = function (date, colspan, otherAttrs) {
        var t = this;
        var view = t.view;
        var isDateValid = t.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        var classNames = [
            'fc-day-header',
            view.calendar.theme.getClass('widgetHeader')
        ];
        var innerHtml;
        if (typeof t.opt('columnHeaderHtml') === 'function') {
            innerHtml = t.opt('columnHeaderHtml')(date);
        }
        else if (typeof t.opt('columnHeaderText') === 'function') {
            innerHtml = fullcalendar_1.htmlEscape(t.opt('columnHeaderText')(date));
        }
        else {
            innerHtml = fullcalendar_1.htmlEscape(date.format(t.colHeadFormat));
        }
        // if only one row of days, the classNames on the header can represent the specific days beneath
        if (t.rowCnt === 1) {
            classNames = classNames.concat(
            // includes the day-of-week class
            // noThemeHighlight=true (don't highlight the header)
            t.getDayClasses(date, true));
        }
        else {
            classNames.push('fc-' + fullcalendar_1.dayIDs[date.day()]); // only add the day-of-week class
        }
        return '' +
            '<th class="' + classNames.join(' ') + '"' +
            ((isDateValid && t.rowCnt) === 1 ?
                ' data-date="' + date.format('YYYY-MM-DD') + '"' :
                '') +
            (colspan > 1 ?
                ' colspan="' + colspan + '"' :
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '>' +
            (isDateValid ?
                // don't make a link if the heading could represent multiple days, or if there's only one day (forceOff)
                view.buildGotoAnchorHtml({ date: date, forceOff: t.rowCnt > 1 || t.colCnt === 1 }, innerHtml) :
                // if not valid, display text, but no link
                innerHtml) +
            '</th>';
    };
    /* Background Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    DayTableMixin.prototype.renderBgTrHtml = function (row) {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderBgIntroHtml(row)) +
            this.renderBgCellsHtml(row) +
            (this.isRTL ? this.renderBgIntroHtml(row) : '') +
            '</tr>';
    };
    DayTableMixin.prototype.renderBgIntroHtml = function (row) {
        return this.renderIntroHtml(); // fall back to generic
    };
    DayTableMixin.prototype.renderBgCellsHtml = function (row) {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(row, col);
            htmls.push(this.renderBgCellHtml(date));
        }
        return htmls.join('');
    };
    DayTableMixin.prototype.renderBgCellHtml = function (date, otherAttrs) {
        var t = this;
        var view = t.view;
        var isDateValid = t.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        var classes = t.getDayClasses(date);
        classes.unshift('fc-day', view.calendar.theme.getClass('widgetContent'));
        return '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '></td>';
    };
    /* Generic
    ------------------------------------------------------------------------------------------------------------------*/
    DayTableMixin.prototype.renderIntroHtml = function () {
        // Generates the default HTML intro for any row. User classes should override
    };
    // TODO: a generic method for dealing with <tr>, RTL, intro
    // when increment internalApiVersion
    // wrapTr (scheduler)
    /* Utils
    ------------------------------------------------------------------------------------------------------------------*/
    // Applies the generic "intro" and "outro" HTML to the given cells.
    // Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
    DayTableMixin.prototype.bookendCells = function (trEl) {
        var introHtml = this.renderIntroHtml();
        if (introHtml) {
            if (this.isRTL) {
                trEl.append(introHtml);
            }
            else {
                trEl.prepend(introHtml);
            }
        }
    };
    return DayTableMixin;
}(Mixin_1.default));
exports.default = DayTableMixin;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var Mixin = /** @class */ (function () {
    function Mixin() {
    }
    Mixin.mixInto = function (destClass) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            if (!destClass.prototype[name]) { // if destination class doesn't already define it
                destClass.prototype[name] = _this.prototype[name];
            }
        });
    };
    /*
    will override existing methods
    TODO: remove! not used anymore
    */
    Mixin.mixOver = function (destClass) {
        var _this = this;
        Object.getOwnPropertyNames(this.prototype).forEach(function (name) {
            destClass.prototype[name] = _this.prototype[name];
        });
    };
    return Mixin;
}());
exports.default = Mixin;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fullcalendar_1 = __webpack_require__(1);
var DateProfileGenerator_1 = __webpack_require__(9);
var YearViewDateProfileGenerator = /** @class */ (function (_super) {
    tslib_1.__extends(YearViewDateProfileGenerator, _super);
    function YearViewDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    YearViewDateProfileGenerator.prototype.buildRenderRange = function (currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        var start = this.msToUtcMoment(currentUnzonedRange.startMs, isRangeAllDay);
        var end = this.msToUtcMoment(currentUnzonedRange.endMs, isRangeAllDay);
        return new fullcalendar_1.UnzonedRange(start, end);
    };
    return YearViewDateProfileGenerator;
}(DateProfileGenerator_1.default));
exports.YearViewDateProfileGenerator = YearViewDateProfileGenerator;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(10);
var fullcalendar_1 = __webpack_require__(1);
var DateProfileGenerator = /** @class */ (function () {
    function DateProfileGenerator(_view) {
        this._view = _view;
    }
    DateProfileGenerator.prototype.opt = function (name) {
        return this._view.opt(name);
    };
    DateProfileGenerator.prototype.trimHiddenDays = function (unzonedRange) {
        return this._view.trimHiddenDays(unzonedRange);
    };
    DateProfileGenerator.prototype.msToUtcMoment = function (ms, forceAllDay) {
        return this._view.calendar.msToUtcMoment(ms, forceAllDay);
    };
    /* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds a structure with info about what the dates/ranges will be for the "prev" view.
    DateProfileGenerator.prototype.buildPrev = function (currentDateProfile) {
        var prevDate = currentDateProfile.date.clone()
            .startOf(currentDateProfile.currentRangeUnit)
            .subtract(currentDateProfile.dateIncrement);
        return this.build(prevDate, -1);
    };
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
    DateProfileGenerator.prototype.buildNext = function (currentDateProfile) {
        var nextDate = currentDateProfile.date.clone()
            .startOf(currentDateProfile.currentRangeUnit)
            .add(currentDateProfile.dateIncrement);
        return this.build(nextDate, 1);
    };
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
    DateProfileGenerator.prototype.build = function (date, direction, forceToValid) {
        if (forceToValid === void 0) { forceToValid = false; }
        var isDateAllDay = !date.hasTime();
        var validUnzonedRange;
        var minTime = null;
        var maxTime = null;
        var currentInfo;
        var isRangeAllDay;
        var renderUnzonedRange;
        var activeUnzonedRange;
        var isValid;
        validUnzonedRange = this.buildValidRange();
        validUnzonedRange = this.trimHiddenDays(validUnzonedRange);
        if (forceToValid) {
            date = this.msToUtcMoment(validUnzonedRange.constrainDate(date), // returns MS
            isDateAllDay);
        }
        currentInfo = this.buildCurrentRangeInfo(date, direction);
        isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
        renderUnzonedRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.unzonedRange), currentInfo.unit, isRangeAllDay);
        renderUnzonedRange = this.trimHiddenDays(renderUnzonedRange);
        activeUnzonedRange = renderUnzonedRange.clone();
        if (!this.opt('showNonCurrentDates')) {
            activeUnzonedRange = activeUnzonedRange.intersect(currentInfo.unzonedRange);
        }
        minTime = moment.duration(this.opt('minTime'));
        maxTime = moment.duration(this.opt('maxTime'));
        activeUnzonedRange = this.adjustActiveRange(activeUnzonedRange, minTime, maxTime);
        activeUnzonedRange = activeUnzonedRange.intersect(validUnzonedRange); // might return null
        if (activeUnzonedRange) {
            date = this.msToUtcMoment(activeUnzonedRange.constrainDate(date), // returns MS
            isDateAllDay);
        }
        // it's invalid if the originally requested date is not contained,
        // or if the range is completely outside of the valid range.
        isValid = currentInfo.unzonedRange.intersectsWith(validUnzonedRange);
        return {
            // constraint for where prev/next operations can go and where events can be dragged/resized to.
            // an object with optional start and end properties.
            validUnzonedRange: validUnzonedRange,
            // range the view is formally responsible for.
            // for example, a month view might have 1st-31st, excluding padded dates
            currentUnzonedRange: currentInfo.unzonedRange,
            // name of largest unit being displayed, like "month" or "week"
            currentRangeUnit: currentInfo.unit,
            isRangeAllDay: isRangeAllDay,
            // dates that display events and accept drag-n-drop
            // will be `null` if no dates accept events
            activeUnzonedRange: activeUnzonedRange,
            // date range with a rendered skeleton
            // includes not-active days that need some sort of DOM
            renderUnzonedRange: renderUnzonedRange,
            // Duration object that denotes the first visible time of any given day
            minTime: minTime,
            // Duration object that denotes the exclusive visible end time of any given day
            maxTime: maxTime,
            isValid: isValid,
            date: date,
            // how far the current date will move for a prev/next operation
            dateIncrement: this.buildDateIncrement(currentInfo.duration)
            // pass a fallback (might be null) ^
        };
    };
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildValidRange = function () {
        return this._view.getUnzonedRangeOption('validRange', this._view.calendar.getNow()) ||
            new fullcalendar_1.UnzonedRange(); // completely open-ended
    };
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
        var viewSpec = this._view.viewSpec;
        var duration = null;
        var unit = null;
        var unzonedRange = null;
        var dayCount;
        if (viewSpec.duration) {
            duration = viewSpec.duration;
            unit = viewSpec.durationUnit;
            unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        else if ((dayCount = this.opt('dayCount'))) {
            unit = 'day';
            unzonedRange = this.buildRangeFromDayCount(date, direction, dayCount);
        }
        else if ((unzonedRange = this.buildCustomVisibleRange(date))) {
            unit = fullcalendar_1.computeGreatestUnit(unzonedRange.getStart(), unzonedRange.getEnd());
        }
        else {
            duration = this.getFallbackDuration();
            unit = fullcalendar_1.computeGreatestUnit(duration);
            unzonedRange = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        return { duration: duration, unit: unit, unzonedRange: unzonedRange };
    };
    DateProfileGenerator.prototype.getFallbackDuration = function () {
        return moment.duration({ days: 1 });
    };
    // Returns a new activeUnzonedRange to have time values (un-ambiguate)
    // minTime or maxTime causes the range to expand.
    DateProfileGenerator.prototype.adjustActiveRange = function (unzonedRange, minTime, maxTime) {
        var start = unzonedRange.getStart();
        var end = unzonedRange.getEnd();
        if (this._view.usesMinMaxTime) {
            if (minTime < 0) {
                start.time(0).add(minTime);
            }
            if (maxTime > 24 * 60 * 60 * 1000) { // beyond 24 hours?
                end.time(maxTime - (24 * 60 * 60 * 1000));
            }
        }
        return new fullcalendar_1.UnzonedRange(start, end);
    };
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed computeGreatestUnit value of duration.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
        var alignment = this.opt('dateAlignment');
        var dateIncrementInput;
        var dateIncrementDuration;
        var start;
        var end;
        var res;
        // compute what the alignment should be
        if (!alignment) {
            dateIncrementInput = this.opt('dateIncrement');
            if (dateIncrementInput) {
                dateIncrementDuration = moment.duration(dateIncrementInput);
                // use the smaller of the two units
                if (dateIncrementDuration < duration) {
                    alignment = fullcalendar_1.computeDurationGreatestUnit(dateIncrementDuration, dateIncrementInput);
                }
                else {
                    alignment = unit;
                }
            }
            else {
                alignment = unit;
            }
        }
        // if the view displays a single day or smaller
        if (duration.as('days') <= 1) {
            if (this._view.isHiddenDay(start)) {
                start = this._view.skipHiddenDays(start, direction);
                start.startOf('day');
            }
        }
        function computeRes() {
            start = date.clone().startOf(alignment);
            end = start.clone().add(duration);
            res = new fullcalendar_1.UnzonedRange(start, end);
        }
        computeRes();
        // if range is completely enveloped by hidden days, go past the hidden days
        if (!this.trimHiddenDays(res)) {
            date = this._view.skipHiddenDays(date, direction);
            computeRes();
        }
        return res;
    };
    // Builds the "current" range when a dayCount is specified.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
        var customAlignment = this.opt('dateAlignment');
        var runningCount = 0;
        var start;
        var end;
        if (customAlignment || direction !== -1) {
            start = date.clone();
            if (customAlignment) {
                start.startOf(customAlignment);
            }
            start.startOf('day');
            start = this._view.skipHiddenDays(start);
            end = start.clone();
            do {
                end.add(1, 'day');
                if (!this._view.isHiddenDay(end)) {
                    runningCount++;
                }
            } while (runningCount < dayCount);
        }
        else {
            end = date.clone().startOf('day').add(1, 'day');
            end = this._view.skipHiddenDays(end, -1, true);
            start = end.clone();
            do {
                start.add(-1, 'day');
                if (!this._view.isHiddenDay(start)) {
                    runningCount++;
                }
            } while (runningCount < dayCount);
        }
        return new fullcalendar_1.UnzonedRange(start, end);
    };
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentUnzonedRange and activeUnzonedRange at the same time.
    // TODO: accept a MS-time instead of a moment `date`?
    DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
        var visibleUnzonedRange = this._view.getUnzonedRangeOption('visibleRange', this._view.calendar.applyTimezone(date) // correct zone. also generates new obj that avoids mutations
        );
        if (visibleUnzonedRange && (visibleUnzonedRange.startMs == null || visibleUnzonedRange.endMs == null)) {
            return null;
        }
        return visibleUnzonedRange;
    };
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildRenderRange = function (currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        return currentUnzonedRange.clone();
    };
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
    DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
        var dateIncrementInput = this.opt('dateIncrement');
        var customAlignment;
        if (dateIncrementInput) {
            return moment.duration(dateIncrementInput);
        }
        else if ((customAlignment = this.opt('dateAlignment'))) {
            return moment.duration(1, customAlignment);
        }
        else if (fallback) {
            return fallback;
        }
        else {
            return moment.duration({ days: 1 });
        }
    };
    return DateProfileGenerator;
}());
exports.default = DateProfileGenerator;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MTE1ZTg1NzA3MDI0YWRkZmJjMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZnVsbGNhbGVuZGFyXCIsXCJjb21tb25qczJcIjpcImZ1bGxjYWxlbmRhclwiLFwiYW1kXCI6XCJmdWxsY2FsZW5kYXJcIixcInJvb3RcIjpcIkZ1bGxDYWxlbmRhclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1llYXJWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9ZZWFyR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWWVhclRhYmxlTWl4aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RheVRhYmxlTWl4aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01peGluLnRzIiwid2VicGFjazovLy8uL3NyYy9ZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9EYXRlUHJvZmlsZUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7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LEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsY0FBYyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEgsY0FBYyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFJLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7UUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUFFLENBQUMsQ0FBQztJQUNsRixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hILGlCQUFpQixLQUFLLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsZ0JBQWdCLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RixDQUFDO0FBVkQsNENBVUM7QUFFRCwwQkFBaUMsQ0FBQztJQUM5QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxjQUFjLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1SSxjQUFjLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuSixDQUFDO0FBSkQsNENBSUM7QUFFRCx1QkFBOEIsQ0FBQztJQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWE7UUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDdkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sUUFBUSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLGNBQWMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDak4sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hLLGdCQUFnQixPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEksQ0FBQztBQU5ELHNDQU1DO0FBRUQsOEJBQXFDLE1BQU0sRUFBRSxHQUFHO0lBQzVDLElBQUksTUFBTSxDQUFDLGNBQWMsRUFBRTtRQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQUU7U0FBTTtRQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQUU7SUFDL0csT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUhELG9EQUdDO0FBQUEsQ0FBQztBQUVGLHNCQUE2QixHQUFHO0lBQzVCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVO1FBQUUsT0FBTyxHQUFHLENBQUM7SUFDdEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQUksR0FBRyxJQUFJLElBQUk7UUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFBRSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNyQixPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDO0FBTkQsb0NBTUM7QUFFRCx5QkFBZ0MsR0FBRztJQUMvQixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUM1RCxDQUFDO0FBRkQsMENBRUM7Ozs7Ozs7QUNuTUQsK0M7Ozs7OztBQ0FBLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7SUFDbkMsSUFBSSxRQUFRLEdBQUcsbUJBQU8sQ0FBQyxDQUFZLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFFN0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1FBQ25DLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7S0FDekIsQ0FBQyxDQUFDO0NBQ047Ozs7Ozs7QUNQRDt3SEFDd0g7OztBQUV4SCw0Q0FBdUM7QUFDdkMsd0NBQWtDO0FBQ2xDLDREQUE0RTtBQUU1RTtJQUFzQyxvQ0FBUztJQUU3QyxrQkFBWSxRQUFRLEVBQUUsUUFBUTtlQUM1QixrQkFBTSxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBa0IsR0FBbEI7UUFDRSxrRUFBa0U7UUFDbEUsNEJBQTRCO1FBQzVCLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBRS9ELE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFHRCwwREFBMEQ7SUFDMUQsc0NBQW1CLEdBQW5CLFVBQW9CLFVBQVU7UUFFNUI7WUFBOEIsb0NBQVU7WUFBakM7Z0JBQUEscUVBeUROO2dCQXZEQywyQkFBcUIsR0FBWSxJQUFJLEVBQUMsdUNBQXVDOztZQXVEL0UsQ0FBQztZQXBEQyxzRUFBc0U7WUFDdEUsc0NBQW1CLEdBQW5CO2dCQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO2dCQUVsQixPQUFPLEVBQUU7b0JBQ1AsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxHQUFHO29CQUNySCxRQUFRO29CQUNSLFNBQVM7b0JBQ1QsT0FBTztZQUNiLENBQUM7WUFHRCxrR0FBa0c7WUFDbEcsd0NBQXFCLEdBQXJCLFVBQXNCLEdBQUc7Z0JBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO2dCQUNwQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRXpDLE9BQU8sRUFBRTtvQkFDUCw2QkFBNkIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxHQUFHO29CQUNoRSxJQUFJLENBQUMsbUJBQW1CLENBQUUsaURBQWlEO29CQUN6RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsRUFDL0QsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhO3FCQUN2QztvQkFDRCxPQUFPO1lBRVgsQ0FBQztZQUdELHdFQUF3RTtZQUN4RSxvQ0FBaUIsR0FBakI7Z0JBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBRXBCLE9BQU8sNEJBQTRCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUk7b0JBQ3RGLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLFFBQVE7WUFFM0MsQ0FBQztZQUdELG9GQUFvRjtZQUNwRix1REFBdUQ7WUFDdkQsa0NBQWUsR0FBZjtnQkFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtnQkFFcEIsT0FBTyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxRQUFRO1lBRTlFLENBQUM7WUFHRCxzQ0FBbUIsR0FBbkI7Z0JBQ0UsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUVILGVBQUM7UUFBRCxDQUFDLENBekQ2QixVQUFVLEdBeUR2QztJQUNILENBQUM7SUFFSCxlQUFDO0FBQUQsQ0FBQyxDQTlFcUMsd0JBQVMsR0E4RTlDOztBQUVELFFBQVEsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLGtCQUFRO0FBQzFDLFFBQVEsQ0FBQyxTQUFTLENBQUMseUJBQXlCLEdBQUcsMkRBQTRCOzs7Ozs7Ozs7QUN4RjNFLDRDQUFnRDtBQUNoRCw4Q0FBOEM7QUFFOUM7SUFBc0Msb0NBQU87SUFBN0M7UUFBQSxxRUEySUM7UUF6SUMsWUFBTSxHQUFXLEVBQUU7UUFDbkIsWUFBTSxHQUFXLEVBQUU7UUFDbkIsZ0JBQVUsR0FBVyxFQUFFO1FBQ3ZCLDRCQUFzQixHQUFZLEtBQUssRUFBQyxvQ0FBb0M7UUFDNUUsa0JBQVksR0FBWSxLQUFLOztJQXFJL0IsQ0FBQztJQWxJQyxpR0FBaUc7SUFDakcsNkJBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQ3BCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3hCLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFJLEdBQUc7UUFDUCxJQUFJLEdBQUc7UUFFUCxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2pEO1FBRUQsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDakMsSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNqRDtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1FBRXhELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx5QkFBVSxDQUFDO1lBQ2xDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNoQixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLHlCQUFVLENBQUM7WUFDbEMsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUM7UUFFRiw2Q0FBNkM7UUFDN0MsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDakMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO29CQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTt3QkFDaEMsT0FBTyxFQUFFLElBQUk7d0JBQ2IsSUFBSSxFQUFFOzRCQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs0QkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDOzRCQUN4QixJQUFJO3lCQUNMO3FCQUNGLENBQUM7aUJBQ0g7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELDBGQUEwRjtJQUMxRixzRkFBc0Y7SUFDdEYsdUNBQW9CLEdBQXBCLFVBQXFCLElBQUk7UUFDdkIsSUFBSSxJQUFJLElBQUksSUFBSTtZQUFFLE9BQU8sRUFBRTtRQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSTtRQUNwQixJQUFJLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsOENBQThDO1FBQ3ZILElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksV0FBVztRQUNyRSxJQUFJLE9BQU87UUFDWCxJQUFJLGdCQUFnQjtRQUVwQixJQUFJLENBQUMsa0JBQWtCLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDdkQsOERBQThEO1lBQzlELE9BQU8sT0FBTyxFQUFDLDhDQUE4QztTQUM5RDtRQUVELE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixrRUFBa0U7WUFDbEUsbUVBQW1FO1lBQ25FLGdFQUFnRTtZQUNoRSxrRUFBa0U7WUFDbEUsaUVBQWlFO1lBQ2pFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsS0FBSyxLQUFLLEVBQUU7Z0JBQ2pELGdCQUFnQixHQUFHLENBQUMsRUFBRSxnQ0FBZ0M7YUFDdkQ7aUJBQU07Z0JBQ0wsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUU7YUFDakQ7U0FDRjtRQUVELElBQUksSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQzdDLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ1YsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsRUFBRSxDQUNMO1lBQ0QsR0FBRztRQUVMLElBQUksSUFBSSxDQUFDLHNCQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLGdCQUFnQixDQUFDLEVBQUU7WUFDcEUsSUFBSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FDOUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFDNUIsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsRUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhO2FBQy9CO1NBQ0Y7UUFFRCxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLElBQUksSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQzlCLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsRUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhO2FBQy9CO1NBQ0Y7UUFFRCxJQUFJLElBQUksT0FBTztRQUVmLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFHRCw4RkFBOEY7SUFDOUYsMkNBQXdCLEdBQXhCLFVBQXlCLGtCQUFrQjtRQUN6QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQztRQUNoRSxJQUFJLENBQUM7UUFDTCxJQUFJLEdBQUc7UUFFUCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFYixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsZUFBZTtnQkFDdkQsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsZ0JBQWdCO2FBQzFEO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLGdCQUFnQjtnQkFDbEMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsZUFBZTthQUNuQztTQUNGO1FBRUQsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUdILGVBQUM7QUFBRCxDQUFDLENBM0lxQyxzQkFBTyxHQTJJNUM7O0FBRUQsd0JBQWMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7QUMvSWhDLDZDQUE0QztBQUU1QztJQUE0QywwQ0FBYTtJQUF6RDs7SUF1R0EsQ0FBQztJQW5HQyx1RUFBdUU7SUFDdkUsdUNBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxHQUFJLElBQVk7UUFDckIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUk7UUFDakIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztJQUN6RixDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLElBQUksRUFBRSxVQUFVO1FBQy9CLElBQUksQ0FBQyxHQUFJLElBQVk7UUFDckIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUk7UUFDakIsSUFBSSxXQUFXLEdBQUcsSUFBSSxJQUFJLElBQUk7UUFDOUIsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBRXRELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV4RSxPQUFPLGFBQWEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7WUFDNUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDWixjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztnQkFDekYsRUFBRSxDQUFDO1lBQ0wsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDWCxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQztZQUNMLFFBQVE7SUFDWixDQUFDO0lBRUQsMkRBQTJEO0lBQzNELHNDQUFhLEdBQWI7UUFDRSxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELG9DQUFXLEdBQVgsVUFBWSxHQUFHLEVBQUUsR0FBRztRQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELHFGQUFxRjtJQUNyRiwwR0FBMEc7SUFDMUcseURBQXlEO0lBQ3pELHlFQUF5RTtJQUN6RSwwRkFBMEY7SUFDMUYsd0NBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUM1QyxDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0UsT0FBTyxXQUFXO0lBQ3BCLENBQUM7SUFHRCw4RUFBOEU7SUFDOUUscUlBQXFJO0lBQ3JJLHdDQUFlLEdBQWYsVUFBZ0IsWUFBWTtRQUMxQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVTtRQUNoQyxJQUFJLFdBQVcsR0FBSSxJQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBQyxxREFBcUQ7UUFDeEgsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUMsd0JBQXdCO1FBQ2pGLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUMsdUJBQXVCO1FBQ3pHLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFJLEdBQUc7UUFDUCxJQUFJLFFBQVE7UUFDWixJQUFJLE9BQU8sRUFBQyw0Q0FBNEM7UUFDeEQsSUFBSSxRQUFRO1FBQ1osSUFBSSxPQUFPLEVBQUMsd0NBQXdDO1FBRXBELEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN0QyxRQUFRLEdBQUcsR0FBRyxHQUFHLFVBQVU7WUFDM0IsT0FBTyxHQUFHLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDO1lBRW5FLGtEQUFrRDtZQUNsRCxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO1lBQ3pDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUM7WUFFdEMsK0JBQStCO1lBQy9CLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLHVDQUF1QztZQUN0RSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBQyxxQ0FBcUM7WUFFbkUsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFLEVBQUUsbURBQW1EO2dCQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNSLEdBQUcsRUFBRSxHQUFHO29CQUVSLDRCQUE0QjtvQkFDNUIsZ0JBQWdCLEVBQUUsUUFBUSxHQUFHLFFBQVE7b0JBQ3JDLGVBQWUsRUFBRSxPQUFPLEdBQUcsUUFBUTtvQkFFbkMsMERBQTBEO29CQUMxRCxPQUFPLEVBQUUsUUFBUSxLQUFLLFVBQVU7b0JBQ2hDLEtBQUssRUFBRSxPQUFPLEtBQUssU0FBUztpQkFDN0IsQ0FBQzthQUNIO1NBQ0Y7UUFFRCxPQUFPLElBQUk7SUFDYixDQUFDO0lBR0gscUJBQUM7QUFBRCxDQUFDLENBdkcyQyx1QkFBYSxHQXVHeEQ7Ozs7Ozs7Ozs7QUMxR0QsNENBQWlEO0FBQ2pELHFDQUE0QjtBQWtCNUI7OztFQUdFO0FBQ0Y7SUFBMkMseUNBQUs7SUFBaEQ7O0lBNmFBLENBQUM7SUFsYUMsdUVBQXVFO0lBQ3ZFLHNDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsR0FBSSxJQUFZO1FBQ3JCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJO1FBQ2pCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1FBQzVCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1FBQ2pGLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQzlFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLFVBQVUsR0FBRyxFQUFFO1FBQ25CLElBQUksUUFBUSxHQUFHLEVBQUU7UUFDakIsSUFBSSxVQUFVO1FBQ2QsSUFBSSxRQUFRO1FBQ1osSUFBSSxNQUFNO1FBRVYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsa0NBQWtDO1lBQzdELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEVBQUMsaUNBQWlDO2FBQ2xFO2lCQUFNO2dCQUNMLFFBQVEsRUFBRTtnQkFDVixVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7U0FDcEI7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsOENBQThDO1lBQzlDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO1lBQzVCLEtBQUssVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRTtnQkFDL0QsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssUUFBUSxFQUFFO29CQUMzQyxNQUFLO2lCQUNOO2FBQ0Y7WUFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztTQUNqRDthQUFNO1lBQ0wsTUFBTSxHQUFHLENBQUM7WUFDVixVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU07U0FDN0I7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFFcEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFO0lBQzNCLENBQUM7SUFHRCxpR0FBaUc7SUFDakcsMENBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ2xDLElBQUksQ0FBQyxhQUFhO1lBQ2YsSUFBWSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDdEMsSUFBWSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxhQUFhO2dCQUNsRCxJQUFJLENBQUMsb0JBQW9CLEVBQUU7SUFDL0IsQ0FBQztJQUdELDJEQUEyRDtJQUMzRCxxQ0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVTtJQUN4QixDQUFDO0lBR0QsMkRBQTJEO0lBQzNELG1DQUFXLEdBQVgsVUFBWSxHQUFHLEVBQUUsR0FBRztRQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQ2hCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUMvQixDQUFDLEtBQUssRUFBRTtJQUNiLENBQUM7SUFHRCwrREFBK0Q7SUFDL0Qsb0NBQVksR0FBWixVQUFhLEdBQUcsRUFBRSxHQUFHO1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUN0QyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7UUFFdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNuQyxDQUFDO0lBR0QseUZBQXlGO0lBQ3pGLHVDQUFlLEdBQWYsVUFBZ0IsR0FBRyxFQUFFLEdBQUc7UUFDdEIsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUN6RCxDQUFDO0lBR0QsMkZBQTJGO0lBQzNGLHNDQUFjLEdBQWQsVUFBZSxHQUFHO1FBQ2hCLElBQUssSUFBWSxDQUFDLEtBQUssRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUc7U0FDN0I7YUFBTTtZQUNMLE9BQU8sR0FBRztTQUNYO0lBQ0gsQ0FBQztJQUdELHFGQUFxRjtJQUNyRiwwR0FBMEc7SUFDMUcseURBQXlEO0lBQ3pELHlFQUF5RTtJQUN6RSwwRkFBMEY7SUFDMUYsdUNBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2xCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7UUFFbkQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDekI7YUFBTSxJQUFJLFNBQVMsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3pDLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUM3QzthQUFNO1lBQ0wsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUdEO3dIQUNvSDtJQUdwSCw4RkFBOEY7SUFDOUYsNENBQW9CLEdBQXBCO1FBQ0UsbUZBQW1GO1FBQ25GLGdEQUFnRDtRQUNoRCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxFQUFDLFFBQVE7U0FDdEI7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLE9BQVEsSUFBWSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLGNBQWM7U0FDNUQ7YUFBTTtZQUNMLE9BQU8sTUFBTSxFQUFDLGFBQWE7U0FDNUI7SUFDSCxDQUFDO0lBR0Q7d0hBQ29IO0lBR3BILDhFQUE4RTtJQUM5RSx1Q0FBZSxHQUFmLFVBQWdCLFlBQVk7UUFDMUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVU7UUFDaEMsSUFBSSxXQUFXLEdBQUksSUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUMscURBQXFEO1FBQ3hILElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFDLHdCQUF3QjtRQUNqRixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFDLHVCQUF1QjtRQUN6RyxJQUFJLElBQUksR0FBRyxFQUFFO1FBQ2IsSUFBSSxHQUFHO1FBQ1AsSUFBSSxRQUFRO1FBQ1osSUFBSSxPQUFPLEVBQUMsNENBQTRDO1FBQ3hELElBQUksUUFBUTtRQUNaLElBQUksT0FBTyxFQUFDLHdDQUF3QztRQUVwRCxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdEMsUUFBUSxHQUFHLEdBQUcsR0FBRyxVQUFVO1lBQzNCLE9BQU8sR0FBRyxRQUFRLEdBQUcsVUFBVSxHQUFHLENBQUM7WUFFbkMsa0RBQWtEO1lBQ2xELFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUM7WUFDekMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQztZQUV0QywrQkFBK0I7WUFDL0IsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsdUNBQXVDO1lBQ3RFLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLHFDQUFxQztZQUVuRSxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUUsRUFBRSxtREFBbUQ7Z0JBQzVFLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ1IsR0FBRyxFQUFFLEdBQUc7b0JBRVIsNEJBQTRCO29CQUM1QixnQkFBZ0IsRUFBRSxRQUFRLEdBQUcsUUFBUTtvQkFDckMsZUFBZSxFQUFFLE9BQU8sR0FBRyxRQUFRO29CQUVuQywwREFBMEQ7b0JBQzFELE9BQU8sRUFBRSxRQUFRLEtBQUssVUFBVTtvQkFDaEMsS0FBSyxFQUFFLE9BQU8sS0FBSyxTQUFTO2lCQUM3QixDQUFDO2FBQ0g7U0FDRjtRQUVELE9BQU8sSUFBSTtJQUNiLENBQUM7SUFHRCwrRUFBK0U7SUFDL0Usb0RBQW9EO0lBQ3BELHVDQUFlLEdBQWYsVUFBZ0IsWUFBWTtRQUMxQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVTtRQUNoQyxJQUFJLFdBQVcsR0FBSSxJQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBQyxxREFBcUQ7UUFDeEgsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUMsd0JBQXdCO1FBQ2pGLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUMsdUJBQXVCO1FBQ3pHLElBQUksSUFBSSxHQUFHLEVBQUU7UUFDYixJQUFJLEdBQUc7UUFDUCxJQUFJLFFBQVE7UUFDWixJQUFJLE9BQU8sRUFBQyw0Q0FBNEM7UUFDeEQsSUFBSSxDQUFDO1FBQ0wsSUFBSSxRQUFRO1FBQ1osSUFBSSxPQUFPLEVBQUMsd0NBQXdDO1FBRXBELEtBQUssR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN0QyxRQUFRLEdBQUcsR0FBRyxHQUFHLFVBQVU7WUFDM0IsT0FBTyxHQUFHLFFBQVEsR0FBRyxVQUFVLEdBQUcsQ0FBQztZQUVuQyxLQUFLLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFFcEMsa0RBQWtEO2dCQUNsRCxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUVoQywrQkFBK0I7Z0JBQy9CLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLHVDQUF1QztnQkFDdEUsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMscUNBQXFDO2dCQUVuRSxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUUsRUFBRSxtREFBbUQ7b0JBQzVFLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQ1IsR0FBRyxFQUFFLEdBQUc7d0JBRVIsNEJBQTRCO3dCQUM1QixnQkFBZ0IsRUFBRSxRQUFRLEdBQUcsUUFBUTt3QkFDckMsZUFBZSxFQUFFLE9BQU8sR0FBRyxRQUFRO3dCQUVuQywwREFBMEQ7d0JBQzFELE9BQU8sRUFBRSxRQUFRLEtBQUssVUFBVTt3QkFDaEMsS0FBSyxFQUFFLE9BQU8sS0FBSyxTQUFTO3FCQUM3QixDQUFDO2lCQUNIO2FBQ0Y7U0FDRjtRQUVELE9BQU8sSUFBSTtJQUNiLENBQUM7SUFHRDt3SEFDb0g7SUFHcEgsc0NBQWMsR0FBZDtRQUNFLElBQUksS0FBSyxHQUFJLElBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7UUFFN0MsT0FBTyxFQUFFO1lBQ1AscUJBQXFCLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJO1lBQ3hELGdCQUFnQixHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSTtZQUNuRCxTQUFTO1lBQ1AsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFVBQVU7WUFDWixVQUFVO1lBQ1osUUFBUTtJQUNaLENBQUM7SUFHRCwyQ0FBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBQyx1QkFBdUI7SUFDdkQsQ0FBQztJQUdELHdDQUFnQixHQUFoQjtRQUNFLE9BQU8sRUFBRTtZQUNQLE1BQU07WUFDSixDQUFFLElBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQzlCLENBQUUsSUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUN6RCxPQUFPO0lBQ1gsQ0FBQztJQUdELCtDQUF1QixHQUF2QjtRQUNFLElBQUksS0FBSyxHQUFHLEVBQUU7UUFDZCxJQUFJLEdBQUc7UUFDUCxJQUFJLElBQUk7UUFFUixLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUMvQixLQUFLLENBQUMsSUFBSSxDQUFFLElBQVksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2RDtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdELHNFQUFzRTtJQUN0RSxtQ0FBbUM7SUFDbkMsOENBQXNCLEdBQXRCLFVBQXVCLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVTtRQUM5QyxJQUFJLENBQUMsR0FBSSxJQUFZO1FBQ3JCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJO1FBQ2pCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLDhDQUE4QztRQUNwSCxJQUFJLFVBQVUsR0FBRztZQUNmLGVBQWU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxTQUFTO1FBRWIsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbkQsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDNUM7YUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMxRCxTQUFTLEdBQUcseUJBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLFNBQVMsR0FBRyx5QkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsZ0dBQWdHO1FBQ2hHLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNO1lBQzVCLGlDQUFpQztZQUNqQyxxREFBcUQ7WUFDckQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQzVCO1NBQ0Y7YUFBTTtZQUNMLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQyxpQ0FBaUM7U0FDOUU7UUFFRCxPQUFPLEVBQUU7WUFDUCxhQUFhLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQ3hDLENBQUMsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsRUFBRSxDQUFDO1lBQ0wsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osWUFBWSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDO1lBQ0wsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDWCxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQztZQUNMLEdBQUc7WUFDSCxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNaLHdHQUF3RztnQkFDeEcsSUFBSSxDQUFDLG1CQUFtQixDQUN0QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLEVBQ3hELFNBQVMsQ0FDVixDQUFDLENBQUM7Z0JBQ0gsMENBQTBDO2dCQUMxQyxTQUFTLENBQ1Y7WUFDSCxPQUFPO0lBQ1gsQ0FBQztJQUdEO3dIQUNvSDtJQUdwSCxzQ0FBYyxHQUFkLFVBQWUsR0FBRztRQUNoQixPQUFPLEVBQUU7WUFDUCxNQUFNO1lBQ0osQ0FBRSxJQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDO1lBQzNCLENBQUUsSUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDMUQsT0FBTztJQUNYLENBQUM7SUFHRCx5Q0FBaUIsR0FBakIsVUFBa0IsR0FBRztRQUNuQixPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBQyx1QkFBdUI7SUFDdkQsQ0FBQztJQUdELHlDQUFpQixHQUFqQixVQUFrQixHQUFHO1FBQ25CLElBQUksS0FBSyxHQUFHLEVBQUU7UUFDZCxJQUFJLEdBQUc7UUFDUCxJQUFJLElBQUk7UUFFUixLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFFLElBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUdELHdDQUFnQixHQUFoQixVQUFpQixJQUFJLEVBQUUsVUFBVTtRQUMvQixJQUFJLENBQUMsR0FBSSxJQUFZO1FBQ3JCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJO1FBQ2pCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLDhDQUE4QztRQUNwSCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUVuQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFeEUsT0FBTyxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQzVDLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ1osY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7Z0JBQ3pGLEVBQUUsQ0FBQztZQUNMLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ1gsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDO2dCQUNsQixFQUFFLENBQUM7WUFDTCxRQUFRO0lBQ1osQ0FBQztJQUdEO3dIQUNvSDtJQUdwSCx1Q0FBZSxHQUFmO1FBQ0UsNkVBQTZFO0lBQy9FLENBQUM7SUFHRCwyREFBMkQ7SUFDM0Qsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUdyQjt3SEFDb0g7SUFHcEgsbUVBQW1FO0lBQ25FLGdIQUFnSDtJQUNoSCxvQ0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNmLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7UUFFdEMsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFLLElBQVksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLENBN2EwQyxlQUFLLEdBNmEvQzs7Ozs7Ozs7O0FDbmNEO0lBQUE7SUFvQkEsQ0FBQztJQWxCUSxhQUFPLEdBQWQsVUFBZSxTQUFTO1FBQXhCLGlCQU1DO1FBTEMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsaURBQWlEO2dCQUNqRixTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7TUFHRTtJQUNLLGFBQU8sR0FBZCxVQUFlLFNBQVM7UUFBeEIsaUJBSUM7UUFIQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDdEQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNsRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUgsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7QUNyQkQsNENBQTBDO0FBQzFDLG9EQUEwRDtBQUUxRDtJQUEyQyx3REFBb0I7SUFBL0Q7O0lBU0EsQ0FBQztJQVBDLGlEQUFpRDtJQUNqRCx1REFBZ0IsR0FBaEIsVUFBaUIsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYTtRQUNuRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7UUFDMUUsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDO1FBQ3RFLE9BQU8sSUFBSSwyQkFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7SUFDckMsQ0FBQztJQUVILG1DQUFDO0FBQUQsQ0FBQyxDQVQwQyw4QkFBb0IsR0FTOUQ7QUFHRyxvRUFBNEI7Ozs7Ozs7O0FDZmhDLHFDQUFnQztBQUNoQyw0Q0FBNkY7QUFHN0Y7SUFLRSw4QkFBWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO0lBQ3BCLENBQUM7SUFHRCxrQ0FBRyxHQUFILFVBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFHRCw2Q0FBYyxHQUFkLFVBQWUsWUFBWTtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztJQUNoRCxDQUFDO0lBR0QsNENBQWEsR0FBYixVQUFjLEVBQUUsRUFBRSxXQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUM7SUFDM0QsQ0FBQztJQUdEO3dIQUNvSDtJQUdwSCx3RkFBd0Y7SUFDeEYsd0NBQVMsR0FBVCxVQUFVLGtCQUFrQjtRQUMxQixJQUFJLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2FBQzNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QyxRQUFRLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDO1FBRTdDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELHdGQUF3RjtJQUN4Rix3Q0FBUyxHQUFULFVBQVUsa0JBQWtCO1FBQzFCLElBQUksUUFBUSxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7YUFDM0MsT0FBTyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDO2FBQzVDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdELCtFQUErRTtJQUMvRSx1RkFBdUY7SUFDdkYsd0VBQXdFO0lBQ3hFLG9DQUFLLEdBQUwsVUFBTSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQW1CO1FBQW5CLG1EQUFtQjtRQUN4QyxJQUFJLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDbEMsSUFBSSxpQkFBaUI7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSTtRQUNsQixJQUFJLE9BQU8sR0FBRyxJQUFJO1FBQ2xCLElBQUksV0FBVztRQUNmLElBQUksYUFBYTtRQUNqQixJQUFJLGtCQUFrQjtRQUN0QixJQUFJLGtCQUFrQjtRQUN0QixJQUFJLE9BQU87UUFFWCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO1FBQzFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUM7UUFFMUQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQ3ZCLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhO1lBQ3BELFlBQVksQ0FDYjtTQUNGO1FBRUQsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO1FBQ3pELGFBQWEsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNoRSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUM3QyxXQUFXLENBQUMsSUFBSSxFQUNoQixhQUFhLENBQ2Q7UUFDRCxrQkFBa0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDO1FBQzVELGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLEtBQUssRUFBRTtRQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQ3BDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO1NBQzVFO1FBRUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBQ2pGLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDLG9CQUFvQjtRQUV6RixJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUN2QixrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYTtZQUNyRCxZQUFZLENBQ2I7U0FDRjtRQUVELGtFQUFrRTtRQUNsRSw0REFBNEQ7UUFDNUQsT0FBTyxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBRXBFLE9BQU87WUFDTCwrRkFBK0Y7WUFDL0Ysb0RBQW9EO1lBQ3BELGlCQUFpQixFQUFFLGlCQUFpQjtZQUVwQyw4Q0FBOEM7WUFDOUMsd0VBQXdFO1lBQ3hFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxZQUFZO1lBRTdDLCtEQUErRDtZQUMvRCxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsSUFBSTtZQUVsQyxhQUFhLEVBQUUsYUFBYTtZQUU1QixtREFBbUQ7WUFDbkQsMkNBQTJDO1lBQzNDLGtCQUFrQixFQUFFLGtCQUFrQjtZQUV0QyxzQ0FBc0M7WUFDdEMsc0RBQXNEO1lBQ3RELGtCQUFrQixFQUFFLGtCQUFrQjtZQUV0Qyx1RUFBdUU7WUFDdkUsT0FBTyxFQUFFLE9BQU87WUFFaEIsK0VBQStFO1lBQy9FLE9BQU8sRUFBRSxPQUFPO1lBRWhCLE9BQU8sRUFBRSxPQUFPO1lBRWhCLElBQUksRUFBRSxJQUFJO1lBRVYsK0RBQStEO1lBQy9ELGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUMxRCxvQ0FBb0M7U0FDdkM7SUFDSCxDQUFDO0lBR0QsdURBQXVEO0lBQ3ZELGtEQUFrRDtJQUNsRCw0Q0FBNEM7SUFDNUMsOENBQWUsR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDakYsSUFBSSwyQkFBWSxFQUFFLEVBQUMsd0JBQXdCO0lBQy9DLENBQUM7SUFHRCw0RUFBNEU7SUFDNUUsc0RBQXNEO0lBQ3RELGdEQUFnRDtJQUNoRCw0RUFBNEU7SUFDNUUscURBQXFEO0lBQ3JELG9EQUFxQixHQUFyQixVQUFzQixJQUFJLEVBQUUsU0FBUztRQUNuQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFDbEMsSUFBSSxRQUFRLEdBQUcsSUFBSTtRQUNuQixJQUFJLElBQUksR0FBRyxJQUFJO1FBQ2YsSUFBSSxZQUFZLEdBQUcsSUFBSTtRQUN2QixJQUFJLFFBQVE7UUFFWixJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDckIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRO1lBQzVCLElBQUksR0FBRyxRQUFRLENBQUMsWUFBWTtZQUM1QixZQUFZLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztTQUM1RTthQUFNLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQzVDLElBQUksR0FBRyxLQUFLO1lBQ1osWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztTQUN0RTthQUFNLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDOUQsSUFBSSxHQUFHLGtDQUFtQixDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0U7YUFBTTtZQUNMLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDckMsSUFBSSxHQUFHLGtDQUFtQixDQUFDLFFBQVEsQ0FBQztZQUNwQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztTQUM1RTtRQUVELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRTtJQUN2RSxDQUFDO0lBR0Qsa0RBQW1CLEdBQW5CO1FBQ0UsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFHRCxzRUFBc0U7SUFDdEUsaURBQWlEO0lBQ2pELGdEQUFpQixHQUFqQixVQUFrQixZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU87UUFDOUMsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLFFBQVEsRUFBRTtRQUNuQyxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFO1FBRS9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFFN0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO2dCQUNmLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQzthQUMzQjtZQUVELElBQUksT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLG1CQUFtQjtnQkFDdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMxQztTQUNGO1FBRUQsT0FBTyxJQUFJLDJCQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0lBR0QsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSxxREFBcUQ7SUFDckQscURBQXNCLEdBQXRCLFVBQXVCLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUk7UUFDcEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFDekMsSUFBSSxrQkFBa0I7UUFDdEIsSUFBSSxxQkFBcUI7UUFDekIsSUFBSSxLQUFLO1FBQ1QsSUFBSSxHQUFHO1FBQ1AsSUFBSSxHQUFHO1FBRVAsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztZQUU5QyxJQUFJLGtCQUFrQixFQUFFO2dCQUN0QixxQkFBcUIsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2dCQUUzRCxtQ0FBbUM7Z0JBQ25DLElBQUkscUJBQXFCLEdBQUcsUUFBUSxFQUFFO29CQUNwQyxTQUFTLEdBQUcsMENBQTJCLENBQUMscUJBQXFCLEVBQUUsa0JBQWtCLENBQUM7aUJBQ25GO3FCQUFNO29CQUNMLFNBQVMsR0FBRyxJQUFJO2lCQUNqQjthQUNGO2lCQUFNO2dCQUNMLFNBQVMsR0FBRyxJQUFJO2FBQ2pCO1NBQ0Y7UUFFRCwrQ0FBK0M7UUFDL0MsSUFBSSxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQztnQkFDbkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDckI7U0FDRjtRQUVEO1lBQ0UsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3ZDLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxHQUFHLEdBQUcsSUFBSSwyQkFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDcEMsQ0FBQztRQUVELFVBQVUsRUFBRTtRQUVaLDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztZQUNqRCxVQUFVLEVBQUU7U0FDYjtRQUVELE9BQU8sR0FBRztJQUNaLENBQUM7SUFHRCwyREFBMkQ7SUFDM0QscURBQXFEO0lBQ3JELHFEQUFzQixHQUF0QixVQUF1QixJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVE7UUFDOUMsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxZQUFZLEdBQUcsQ0FBQztRQUNwQixJQUFJLEtBQUs7UUFDVCxJQUFJLEdBQUc7UUFFUCxJQUFJLGVBQWUsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFFdkMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFFcEIsSUFBSSxlQUFlLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO2FBQy9CO1lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDcEIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUV4QyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNuQixHQUFHO2dCQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztnQkFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNoQyxZQUFZLEVBQUU7aUJBQ2Y7YUFDRixRQUFRLFlBQVksR0FBRyxRQUFRLEVBQUM7U0FFbEM7YUFBTTtZQUVMLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQy9DLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBRTlDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFO1lBQ25CLEdBQUc7Z0JBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDbEMsWUFBWSxFQUFFO2lCQUNmO2FBQ0YsUUFBUSxZQUFZLEdBQUcsUUFBUSxFQUFDO1NBRWxDO1FBRUQsT0FBTyxJQUFJLDJCQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0lBR0QsNERBQTREO0lBQzVELDRGQUE0RjtJQUM1RixxREFBcUQ7SUFDckQsc0RBQXVCLEdBQXZCLFVBQXdCLElBQUk7UUFDMUIsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUN4RCxjQUFjLEVBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLDZEQUE2RDtTQUN0RztRQUVELElBQUksbUJBQW1CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLElBQUksSUFBSSxJQUFJLG1CQUFtQixDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNyRyxPQUFPLElBQUk7U0FDWjtRQUVELE9BQU8sbUJBQW1CO0lBQzVCLENBQUM7SUFHRCw0RUFBNEU7SUFDNUUsd0NBQXdDO0lBQ3hDLDRDQUE0QztJQUM1QywrQ0FBZ0IsR0FBaEIsVUFBaUIsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYTtRQUNuRSxPQUFPLG1CQUFtQixDQUFDLEtBQUssRUFBRTtJQUNwQyxDQUFDO0lBR0Qsa0ZBQWtGO0lBQ2xGLHNDQUFzQztJQUN0QyxpREFBa0IsR0FBbEIsVUFBbUIsUUFBUTtRQUN6QixJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksZUFBZTtRQUVuQixJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztTQUMzQzthQUFNLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDO1NBQzNDO2FBQU0sSUFBSSxRQUFRLEVBQUU7WUFDbkIsT0FBTyxRQUFRO1NBQ2hCO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUgsMkJBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQ25XRCxnRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZnVsbGNhbGVuZGFyXCIpLCByZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImZ1bGxjYWxlbmRhclwiLCBcIm1vbWVudFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJGdWxsQ2FsZW5kYXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJmdWxsY2FsZW5kYXJcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZ1bGxDYWxlbmRhclwiXSA9IGZhY3Rvcnkocm9vdFtcIkZ1bGxDYWxlbmRhclwiXSwgcm9vdFtcIm1vbWVudFwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MTE1ZTg1NzA3MDI0YWRkZmJjMCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJmdWxsY2FsZW5kYXJcIixcImNvbW1vbmpzMlwiOlwiZnVsbGNhbGVuZGFyXCIsXCJhbWRcIjpcImZ1bGxjYWxlbmRhclwiLFwicm9vdFwiOlwiRnVsbENhbGVuZGFyXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmIChqUXVlcnkuZnVsbENhbGVuZGFyICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgWWVhclZpZXcgPSByZXF1aXJlKCcuL1llYXJWaWV3JykuZGVmYXVsdDtcblxuICAgIGpRdWVyeS5mdWxsQ2FsZW5kYXIuZGVmaW5lVmlldygneWVhcicsIHtcbiAgICAgICAgJ2NsYXNzJzogWWVhclZpZXcsXG4gICAgICAgIGR1cmF0aW9uOiB7IHllYXJzOiAxIH1cbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qIEEgbW9udGggdmlldyB3aXRoIGRheSBjZWxscyBydW5uaW5nIGluIHJvd3MgKG9uZS1wZXItd2VlaykgYW5kIGNvbHVtbnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbXBvcnQge0Jhc2ljVmlld30gZnJvbSBcImZ1bGxjYWxlbmRhclwiO1xuaW1wb3J0IFllYXJHcmlkIGZyb20gXCIuL1llYXJHcmlkXCI7XG5pbXBvcnQge1llYXJWaWV3RGF0ZVByb2ZpbGVHZW5lcmF0b3J9IGZyb20gXCIuL1llYXJWaWV3RGF0ZVByb2ZpbGVHZW5lcmF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhclZpZXcgZXh0ZW5kcyBCYXNpY1ZpZXcge1xuXG4gIGNvbnN0cnVjdG9yKGNhbGVuZGFyLCB2aWV3U3BlYykge1xuICAgIHN1cGVyKGNhbGVuZGFyLCB2aWV3U3BlYylcbiAgfVxuXG4gIGluc3RhbnRpYXRlRGF5R3JpZCgpIHtcbiAgICAvLyBnZW5lcmF0ZSBhIHN1YmNsYXNzIG9uIHRoZSBmbHkgd2l0aCBCYXNpY1ZpZXctc3BlY2lmaWMgYmVoYXZpb3JcbiAgICAvLyBUT0RPOiBjYWNoZSB0aGlzIHN1YmNsYXNzXG4gICAgbGV0IHN1YmNsYXNzOiBhbnkgPSB0aGlzLm1ha2VEYXlHcmlkU3ViY2xhc3ModGhpcy5kYXlHcmlkQ2xhc3MpXG5cbiAgICByZXR1cm4gbmV3IHN1YmNsYXNzKHRoaXMpXG4gIH1cblxuXG4gIC8vIGN1c3RvbWl6ZSB0aGUgcmVuZGVyaW5nIGJlaGF2aW9yIG9mIEJhc2ljVmlldydzIGRheUdyaWRcbiAgbWFrZURheUdyaWRTdWJjbGFzcyhTdXBlckNsYXNzKSB7XG5cbiAgICByZXR1cm4gY2xhc3MgU3ViQ2xhc3MgZXh0ZW5kcyBTdXBlckNsYXNzIHtcblxuICAgICAgY29sV2Vla051bWJlcnNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZSAvLyBkaXNwbGF5IHdlZWsgbnVtYmVycyBhbG9uZyB0aGUgc2lkZT9cblxuXG4gICAgICAvLyBHZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCB3aWxsIGdvIGJlZm9yZSB0aGUgZGF5LW9mIHdlZWsgaGVhZGVyIGNlbGxzXG4gICAgICByZW5kZXJIZWFkSW50cm9IdG1sKCkge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuXG4gICAgICAgICAgcmV0dXJuICcnICtcbiAgICAgICAgICAgICc8dGggY2xhc3M9XCJmYy13ZWVrLW51bWJlciAnICsgdmlldy5jYWxlbmRhci50aGVtZS5nZXRDbGFzcygnd2lkZ2V0SGVhZGVyJykgKyAnXCIgJyArIHZpZXcud2Vla051bWJlclN0eWxlQXR0cigpICsgJz4nICtcbiAgICAgICAgICAgICc8c3Bhbj4nICtcbiAgICAgICAgICAgICc8L3NwYW4+JyArXG4gICAgICAgICAgICAnPC90aD4nXG4gICAgICB9XG5cblxuICAgICAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgd2lsbCBnbyBiZWZvcmUgY29udGVudC1za2VsZXRvbiBjZWxscyB0aGF0IGRpc3BsYXkgdGhlIGRheS93ZWVrIG51bWJlcnNcbiAgICAgIHJlbmRlck51bWJlckludHJvSHRtbChyb3cpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcbiAgICAgICAgbGV0IG1vbnRoU3RhcnQgPSB0aGlzLmdldENlbGxEYXRlKHJvdywgMClcblxuICAgICAgICByZXR1cm4gJycgK1xuICAgICAgICAgICc8dGQgY2xhc3M9XCJmYy13ZWVrLW51bWJlclwiICcgKyB2aWV3LndlZWtOdW1iZXJTdHlsZUF0dHIoKSArICc+JyArXG4gICAgICAgICAgdmlldy5idWlsZEdvdG9BbmNob3JIdG1sKCAvLyBhc2lkZSBmcm9tIGxpbmssIGltcG9ydGFudCBmb3IgbWF0Y2hDZWxsV2lkdGhzXG4gICAgICAgICAgICB7IGRhdGU6IG1vbnRoU3RhcnQsIHR5cGU6ICd3ZWVrJywgZm9yY2VPZmY6IHRoaXMuY29sQ250ID09PSAxIH0sXG4gICAgICAgICAgICBtb250aFN0YXJ0LmZvcm1hdCgnTU1NJykgLy8gaW5uZXIgSFRNTFxuICAgICAgICAgICkgK1xuICAgICAgICAgICc8L3RkPidcblxuICAgICAgfVxuXG5cbiAgICAgIC8vIEdlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IGdvZXMgYmVmb3JlIHRoZSBkYXkgYmcgY2VsbHMgZm9yIGVhY2ggZGF5LXJvd1xuICAgICAgcmVuZGVyQmdJbnRyb0h0bWwoKSB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3XG5cbiAgICAgICAgcmV0dXJuICc8dGQgY2xhc3M9XCJmYy13ZWVrLW51bWJlciAnICsgdmlldy5jYWxlbmRhci50aGVtZS5nZXRDbGFzcygnd2lkZ2V0Q29udGVudCcpICsgJ1wiICcgK1xuICAgICAgICAgICAgdmlldy53ZWVrTnVtYmVyU3R5bGVBdHRyKCkgKyAnPjwvdGQ+J1xuXG4gICAgICB9XG5cblxuICAgICAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgZ29lcyBiZWZvcmUgZXZlcnkgb3RoZXIgdHlwZSBvZiByb3cgZ2VuZXJhdGVkIGJ5IERheUdyaWQuXG4gICAgICAvLyBBZmZlY3RzIGhlbHBlci1za2VsZXRvbiBhbmQgaGlnaGxpZ2h0LXNrZWxldG9uIHJvd3MuXG4gICAgICByZW5kZXJJbnRyb0h0bWwoKSB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3XG5cbiAgICAgICAgcmV0dXJuICc8dGQgY2xhc3M9XCJmYy13ZWVrLW51bWJlclwiICcgKyB2aWV3LndlZWtOdW1iZXJTdHlsZUF0dHIoKSArICc+PC90ZD4nXG5cbiAgICAgIH1cblxuXG4gICAgICBnZXRJc051bWJlcnNWaXNpYmxlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbn1cblxuWWVhclZpZXcucHJvdG90eXBlLmRheUdyaWRDbGFzcyA9IFllYXJHcmlkXG5ZZWFyVmlldy5wcm90b3R5cGUuZGF0ZVByb2ZpbGVHZW5lcmF0b3JDbGFzcyA9IFllYXJWaWV3RGF0ZVByb2ZpbGVHZW5lcmF0b3JcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ZZWFyVmlldy50cyIsImltcG9ydCB7RGF5R3JpZCxDb29yZENhY2hlfSBmcm9tIFwiZnVsbGNhbGVuZGFyXCI7XG5pbXBvcnQgWWVhclRhYmxlTWl4aW4gZnJvbSBcIi4vWWVhclRhYmxlTWl4aW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhckdyaWQgZXh0ZW5kcyBEYXlHcmlkIHtcblxuICBjb2xDbnQ6IG51bWJlciA9IDMxXG4gIHJvd0NudDogbnVtYmVyID0gMTJcbiAgZGF5c1BlclJvdzogbnVtYmVyID0gMzFcbiAgY2VsbFdlZWtOdW1iZXJzVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlIC8vIGRpc3BsYXkgd2VlayBudW1iZXJzIGluIGRheSBjZWxsP1xuICBicmVha09uV2Vla3M6IGJvb2xlYW4gPSBmYWxzZVxuXG5cbiAgLy8gUmVuZGVycyB0aGUgcm93cyBhbmQgY29sdW1ucyBpbnRvIHRoZSBjb21wb25lbnQncyBgdGhpcy5lbGAsIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGFzc2lnbmVkLlxuICByZW5kZXJHcmlkKCkge1xuICAgIGxldCB2aWV3ID0gdGhpcy52aWV3XG4gICAgbGV0IHJvd0NudCA9IHRoaXMucm93Q250XG4gICAgbGV0IGNvbENudCA9IHRoaXMuY29sQ250XG4gICAgbGV0IGh0bWwgPSAnJ1xuICAgIGxldCByb3dcbiAgICBsZXQgY29sXG5cbiAgICBpZiAodGhpcy5oZWFkQ29udGFpbmVyRWwpIHtcbiAgICAgIHRoaXMuaGVhZENvbnRhaW5lckVsLmh0bWwodGhpcy5yZW5kZXJIZWFkSHRtbCgpKVxuICAgIH1cblxuICAgIGZvciAocm93ID0gMDsgcm93IDwgcm93Q250OyByb3crKykge1xuICAgICAgaHRtbCArPSB0aGlzLnJlbmRlckRheVJvd0h0bWwocm93LCB0aGlzLmlzUmlnaWQpXG4gICAgfVxuICAgIHRoaXMuZWwuaHRtbChodG1sKVxuXG4gICAgdGhpcy5yb3dFbHMgPSB0aGlzLmVsLmZpbmQoJy5mYy1yb3cnKVxuICAgIHRoaXMuY2VsbEVscyA9IHRoaXMuZWwuZmluZCgnLmZjLWRheSwgLmZjLWRpc2FibGVkLWRheScpXG5cbiAgICB0aGlzLnJvd0Nvb3JkQ2FjaGUgPSBuZXcgQ29vcmRDYWNoZSh7XG4gICAgICBlbHM6IHRoaXMucm93RWxzLFxuICAgICAgaXNWZXJ0aWNhbDogdHJ1ZVxuICAgIH0pXG4gICAgdGhpcy5jb2xDb29yZENhY2hlID0gbmV3IENvb3JkQ2FjaGUoe1xuICAgICAgZWxzOiB0aGlzLmNlbGxFbHMuc2xpY2UoMCwgdGhpcy5jb2xDbnQpLCAvLyBvbmx5IHRoZSBmaXJzdCByb3dcbiAgICAgIGlzSG9yaXpvbnRhbDogdHJ1ZVxuICAgIH0pXG5cbiAgICAvLyB0cmlnZ2VyIGRheVJlbmRlciB3aXRoIGVhY2ggY2VsbCdzIGVsZW1lbnRcbiAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHJvd0NudDsgcm93KyspIHtcbiAgICAgIGZvciAoY29sID0gMDsgY29sIDwgY29sQ250OyBjb2wrKykge1xuICAgICAgICBpZiAodGhpcy5nZXRDZWxsRGF0ZShyb3csIGNvbCkgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMucHVibGljbHlUcmlnZ2VyKCdkYXlSZW5kZXInLCB7XG4gICAgICAgICAgICBjb250ZXh0OiB2aWV3LFxuICAgICAgICAgICAgYXJnczogW1xuICAgICAgICAgICAgICB0aGlzLmdldENlbGxEYXRlKHJvdywgY29sKSxcbiAgICAgICAgICAgICAgdGhpcy5nZXRDZWxsRWwocm93LCBjb2wpLFxuICAgICAgICAgICAgICB2aWV3XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEdlbmVyYXRlcyB0aGUgSFRNTCBmb3IgdGhlIDx0ZD5zIG9mIHRoZSBcIm51bWJlclwiIHJvdyBpbiB0aGUgRGF5R3JpZCdzIGNvbnRlbnQgc2tlbGV0b24uXG4gIC8vIFRoZSBudW1iZXIgcm93IHdpbGwgb25seSBleGlzdCBpZiBlaXRoZXIgZGF5IG51bWJlcnMgb3Igd2VlayBudW1iZXJzIGFyZSB0dXJuZWQgb24uXG4gIHJlbmRlck51bWJlckNlbGxIdG1sKGRhdGUpIHtcbiAgICBpZiAoZGF0ZSA9PSBudWxsKSByZXR1cm4gJydcbiAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuICAgIGxldCBodG1sID0gJydcbiAgICBsZXQgaXNEYXRlVmFsaWQgPSB0aGlzLmRhdGVQcm9maWxlLmFjdGl2ZVVuem9uZWRSYW5nZS5jb250YWluc0RhdGUoZGF0ZSkgLy8gVE9ETzogY2FsbGVkIHRvbyBmcmVxdWVudGx5LiBjYWNoZSBzb21laG93LlxuICAgIGxldCBpc0RheU51bWJlclZpc2libGUgPSB0aGlzLmdldElzRGF5TnVtYmVyc1Zpc2libGUoKSAmJiBpc0RhdGVWYWxpZFxuICAgIGxldCBjbGFzc2VzXG4gICAgbGV0IHdlZWtDYWxjRmlyc3REb1dcblxuICAgIGlmICghaXNEYXlOdW1iZXJWaXNpYmxlICYmICF0aGlzLmNlbGxXZWVrTnVtYmVyc1Zpc2libGUpIHtcbiAgICAgIC8vIG5vIG51bWJlcnMgaW4gZGF5IGNlbGwgKHdlZWsgbnVtYmVyIG11c3QgYmUgYWxvbmcgdGhlIHNpZGUpXG4gICAgICByZXR1cm4gJzx0ZC8+JyAvLyAgd2lsbCBjcmVhdGUgYW4gZW1wdHkgc3BhY2UgYWJvdmUgZXZlbnRzIDooXG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IHRoaXMuZ2V0RGF5Q2xhc3NlcyhkYXRlKVxuICAgIGNsYXNzZXMudW5zaGlmdCgnZmMtZGF5LXRvcCcpXG5cbiAgICBpZiAodGhpcy5jZWxsV2Vla051bWJlcnNWaXNpYmxlKSB7XG4gICAgICAvLyBUbyBkZXRlcm1pbmUgdGhlIGRheSBvZiB3ZWVrIG51bWJlciBjaGFuZ2UgdW5kZXIgSVNPLCB3ZSBjYW5ub3RcbiAgICAgIC8vIHJlbHkgb24gbW9tZW50LmpzIG1ldGhvZHMgc3VjaCBhcyBmaXJzdERheU9mV2VlaygpIG9yIHdlZWtkYXkoKSxcbiAgICAgIC8vIGJlY2F1c2UgdGhleSByZWx5IG9uIHRoZSBsb2NhbGUncyBkb3cgKHBvc3NpYmx5IG92ZXJyaWRkZW4gYnlcbiAgICAgIC8vIG91ciBmaXJzdERheSBvcHRpb24pLCB3aGljaCBtYXkgbm90IGJlIE1vbmRheS4gV2UgY2Fubm90IGNoYW5nZVxuICAgICAgLy8gZG93LCBiZWNhdXNlIHRoYXQgd291bGQgYWZmZWN0IHRoZSBjYWxlbmRhciBzdGFydCBkYXkgYXMgd2VsbC5cbiAgICAgIGlmIChkYXRlLl9sb2NhbGUuX2Z1bGxDYWxlbmRhcl93ZWVrQ2FsYyA9PT0gJ0lTTycpIHtcbiAgICAgICAgd2Vla0NhbGNGaXJzdERvVyA9IDEgIC8vIE1vbmRheSBieSBJU08gODYwMSBkZWZpbml0aW9uXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZWVrQ2FsY0ZpcnN0RG9XID0gZGF0ZS5fbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBodG1sICs9ICc8dGQgY2xhc3M9XCInICsgY2xhc3Nlcy5qb2luKCcgJykgKyAnXCInICtcbiAgICAgIChpc0RhdGVWYWxpZCA/XG4gICAgICAgICAgJyBkYXRhLWRhdGU9XCInICsgZGF0ZS5mb3JtYXQoKSArICdcIicgOlxuICAgICAgICAgICcnXG4gICAgICApICtcbiAgICAgICc+J1xuXG4gICAgaWYgKHRoaXMuY2VsbFdlZWtOdW1iZXJzVmlzaWJsZSAmJiAoZGF0ZS5kYXkoKSA9PT0gd2Vla0NhbGNGaXJzdERvVykpIHtcbiAgICAgIGh0bWwgKz0gdmlldy5idWlsZEdvdG9BbmNob3JIdG1sKFxuICAgICAgICB7IGRhdGU6IGRhdGUsIHR5cGU6ICd3ZWVrJyB9LFxuICAgICAgICB7ICdjbGFzcyc6ICdmYy13ZWVrLW51bWJlcicgfSxcbiAgICAgICAgZGF0ZS5mb3JtYXQoJ3cnKSAvLyBpbm5lciBIVE1MXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKGlzRGF5TnVtYmVyVmlzaWJsZSkge1xuICAgICAgaHRtbCArPSB2aWV3LmJ1aWxkR290b0FuY2hvckh0bWwoXG4gICAgICAgIGRhdGUsXG4gICAgICAgIHsgJ2NsYXNzJzogJ2ZjLWRheS1udW1iZXInIH0sXG4gICAgICAgIGRhdGUuZm9ybWF0KCdEJykgLy8gaW5uZXIgSFRNTFxuICAgICAgKVxuICAgIH1cblxuICAgIGh0bWwgKz0gJzwvdGQ+J1xuXG4gICAgcmV0dXJuIGh0bWxcbiAgfVxuXG5cbiAgLy8gU2xpY2VzIHVwIHRoZSBnaXZlbiBzcGFuICh1bnpvbmVkIHN0YXJ0L2VuZCB3aXRoIG90aGVyIG1pc2MgZGF0YSkgaW50byBhbiBhcnJheSBvZiBzZWdtZW50c1xuICBjb21wb25lbnRGb290cHJpbnRUb1NlZ3MoY29tcG9uZW50Rm9vdHByaW50KSB7XG4gICAgbGV0IHNlZ3MgPSB0aGlzLnNsaWNlUmFuZ2VCeVJvdyhjb21wb25lbnRGb290cHJpbnQudW56b25lZFJhbmdlKVxuICAgIGxldCBpXG4gICAgbGV0IHNlZ1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNlZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNlZyA9IHNlZ3NbaV1cblxuICAgICAgaWYgKHRoaXMuaXNSVEwpIHtcbiAgICAgICAgc2VnLmxlZnRDb2wgPSB0aGlzLmRheXNQZXJSb3cgLSAxIC0gc2VnLmxhc3RSb3dEYXlJbmRleFxuICAgICAgICBzZWcucmlnaHRDb2wgPSB0aGlzLmRheXNQZXJSb3cgLSAxIC0gc2VnLmZpcnN0Um93RGF5SW5kZXhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZy5sZWZ0Q29sID0gc2VnLmZpcnN0Um93RGF5SW5kZXhcbiAgICAgICAgc2VnLnJpZ2h0Q29sID0gc2VnLmxhc3RSb3dEYXlJbmRleFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWdzXG4gIH1cblxuXG59XG5cblllYXJUYWJsZU1peGluLm1peE92ZXIoWWVhckdyaWQpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvWWVhckdyaWQudHMiLCJpbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnXG5pbXBvcnQgRGF5VGFibGVNaXhpbiBmcm9tIFwiLi9EYXlUYWJsZU1peGluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJUYWJsZU1peGluIGV4dGVuZHMgRGF5VGFibGVNaXhpbiB7XG5cbiAgc3RhcnREYXRlOiBNb21lbnRcblxuICAvLyBQb3B1bGF0ZXMgaW50ZXJuYWwgdmFyaWFibGVzIHVzZWQgZm9yIGRhdGUgY2FsY3VsYXRpb24gYW5kIHJlbmRlcmluZ1xuICB1cGRhdGVEYXlUYWJsZSgpIHtcbiAgICBsZXQgdCA9ICh0aGlzIGFzIGFueSlcbiAgICBsZXQgdmlldyA9IHQudmlld1xuICAgIGxldCBjYWxlbmRhciA9IHZpZXcuY2FsZW5kYXJcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGNhbGVuZGFyLm1zVG9VdGNNb21lbnQodC5kYXRlUHJvZmlsZS5yZW5kZXJVbnpvbmVkUmFuZ2Uuc3RhcnRNcywgdHJ1ZSlcbiAgfVxuXG4gIHJlbmRlckJnQ2VsbEh0bWwoZGF0ZSwgb3RoZXJBdHRycykge1xuICAgIGxldCB0ID0gKHRoaXMgYXMgYW55KVxuICAgIGxldCB2aWV3ID0gdC52aWV3XG4gICAgbGV0IGlzRGF0ZVZhbGlkID0gZGF0ZSAhPSBudWxsXG4gICAgbGV0IGNsYXNzZXMgPSBpc0RhdGVWYWxpZCA/IHQuZ2V0RGF5Q2xhc3NlcyhkYXRlKSA6IFtdXG5cbiAgICBjbGFzc2VzLnVuc2hpZnQoJ2ZjLWRheScsIHZpZXcuY2FsZW5kYXIudGhlbWUuZ2V0Q2xhc3MoJ3dpZGdldENvbnRlbnQnKSlcblxuICAgIHJldHVybiAnPHRkIGNsYXNzPVwiJyArIGNsYXNzZXMuam9pbignICcpICsgJ1wiJyArXG4gICAgICAoaXNEYXRlVmFsaWQgP1xuICAgICAgICAnIGRhdGEtZGF0ZT1cIicgKyBkYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpICsgJ1wiJyA6IC8vIGlmIGRhdGUgaGFzIGEgdGltZSwgd29uJ3QgZm9ybWF0IGl0XG4gICAgICAgICcnKSArXG4gICAgICAob3RoZXJBdHRycyA/XG4gICAgICAgICcgJyArIG90aGVyQXR0cnMgOlxuICAgICAgICAnJykgK1xuICAgICAgJz48L3RkPidcbiAgfVxuXG4gIC8vIERldGVybWluZXMgaG93IG1hbnkgY29sdW1ucyB0aGVyZSBzaG91bGQgYmUgaW4gdGhlIHRhYmxlXG4gIGNvbXB1dGVDb2xDbnQoKSB7XG4gICAgcmV0dXJuIDMxXG4gIH1cblxuICAvLyBDb21wdXRlcyB0aGUgYW1iaWd1b3VzbHktdGltZWQgbW9tZW50IGZvciB0aGUgZ2l2ZW4gY2VsbFxuICBnZXRDZWxsRGF0ZShyb3csIGNvbCkge1xuICAgIGxldCBkYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5tb250aChyb3cpXG4gICAgaWYgKGRhdGUuZGF5c0luTW9udGgoKSA+IGNvbCkge1xuICAgICAgcmV0dXJuIGRhdGUuZGF0ZShjb2wgKyAxKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gR2l2ZW4gYSBkYXRlLCByZXR1cm5zIGl0cyBjaHJvbm9sb2NpYWwgY2VsbC1pbmRleCBmcm9tIHRoZSBmaXJzdCBjZWxsIG9mIHRoZSBncmlkLlxuICAvLyBJZiB0aGUgZGF0ZSBsaWVzIGJldHdlZW4gY2VsbHMgKGJlY2F1c2Ugb2YgaGlkZGVuRGF5cyksIHJldHVybnMgYSBmbG9hdGluZy1wb2ludCB2YWx1ZSBiZXR3ZWVuIG9mZnNldHMuXG4gIC8vIElmIGJlZm9yZSB0aGUgZmlyc3Qgb2Zmc2V0LCByZXR1cm5zIGEgbmVnYXRpdmUgbnVtYmVyLlxuICAvLyBJZiBhZnRlciB0aGUgbGFzdCBvZmZzZXQsIHJldHVybnMgYW4gb2Zmc2V0IHBhc3QgdGhlIGxhc3QgY2VsbCBvZmZzZXQuXG4gIC8vIE9ubHkgd29ya3MgZm9yICpzdGFydCogZGF0ZXMgb2YgY2VsbHMuIFdpbGwgbm90IHdvcmsgZm9yIGV4Y2x1c2l2ZSBlbmQgZGF0ZXMgZm9yIGNlbGxzLlxuICBnZXREYXRlRGF5SW5kZXgoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLm1vbnRoKCkgKiAzMSArIGRhdGUuZGF0ZSgpIC0gMVxuICB9XG5cbiAgcmVuZGVySGVhZFRySHRtbCgpIHtcbiAgICByZXR1cm4gJzx0cj48L3RyPidcbiAgfVxuXG5cbiAgLy8gU2xpY2VzIHVwIGEgZGF0ZSByYW5nZSBpbnRvIGEgc2VnbWVudCBmb3IgZXZlcnkgd2Vlay1yb3cgaXQgaW50ZXJzZWN0cyB3aXRoXG4gIC8vIENvbnRyYXJ5IHRvIERheVRhYmxlTWl4aW46OnNsaWNlUmFuZ2VCeVJvdyB0aGlzIHZlcnNpb24gbXVzdCBiZSBhd2FyZSBvZiB0aGUgZmFjdCB0aGF0IG5vdCBldmVyeSBtb250aCBoYXMgdGhlIHNhbWUgbnVtYmVyIG9mIGRheXNcbiAgc2xpY2VSYW5nZUJ5Um93KHVuem9uZWRSYW5nZSkge1xuICAgIGxldCBkYXlzUGVyUm93ID0gdGhpcy5kYXlzUGVyUm93XG4gICAgbGV0IG5vcm1hbFJhbmdlID0gKHRoaXMgYXMgYW55KS52aWV3LmNvbXB1dGVEYXlSYW5nZSh1bnpvbmVkUmFuZ2UpIC8vIG1ha2Ugd2hvbGUtZGF5IHJhbmdlLCBjb25zaWRlcmluZyBuZXh0RGF5VGhyZXNob2xkXG4gICAgbGV0IHJhbmdlRmlyc3QgPSB0aGlzLmdldERhdGVEYXlJbmRleChub3JtYWxSYW5nZS5zdGFydCkgLy8gaW5jbHVzaXZlIGZpcnN0IGluZGV4XG4gICAgbGV0IHJhbmdlTGFzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLmVuZC5jbG9uZSgpLnN1YnRyYWN0KDEsICdkYXlzJykpIC8vIGluY2x1c2l2ZSBsYXN0IGluZGV4XG4gICAgbGV0IHNlZ3MgPSBbXVxuICAgIGxldCByb3dcbiAgICBsZXQgcm93Rmlyc3RcbiAgICBsZXQgcm93TGFzdCAvLyBpbmNsdXNpdmUgZGF5LWluZGV4IHJhbmdlIGZvciBjdXJyZW50IHJvd1xuICAgIGxldCBzZWdGaXJzdFxuICAgIGxldCBzZWdMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIHNlZ21lbnRcblxuICAgIGZvciAocm93ID0gMDsgcm93IDwgdGhpcy5yb3dDbnQ7IHJvdysrKSB7XG4gICAgICByb3dGaXJzdCA9IHJvdyAqIGRheXNQZXJSb3dcbiAgICAgIHJvd0xhc3QgPSByb3dGaXJzdCArIG5vcm1hbFJhbmdlLnN0YXJ0Lm1vbnRoKHJvdykuZGF5c0luTW9udGgoKSAtIDFcblxuICAgICAgLy8gaW50ZXJzZWN0IHNlZ21lbnQncyBvZmZzZXQgcmFuZ2Ugd2l0aCB0aGUgcm93J3NcbiAgICAgIHNlZ0ZpcnN0ID0gTWF0aC5tYXgocmFuZ2VGaXJzdCwgcm93Rmlyc3QpXG4gICAgICBzZWdMYXN0ID0gTWF0aC5taW4ocmFuZ2VMYXN0LCByb3dMYXN0KVxuXG4gICAgICAvLyBkZWFsIHdpdGggaW4tYmV0d2VlbiBpbmRpY2VzXG4gICAgICBzZWdGaXJzdCA9IE1hdGguY2VpbChzZWdGaXJzdCkgLy8gaW4tYmV0d2VlbiBzdGFydHMgcm91bmQgdG8gbmV4dCBjZWxsXG4gICAgICBzZWdMYXN0ID0gTWF0aC5mbG9vcihzZWdMYXN0KSAvLyBpbi1iZXR3ZWVuIGVuZHMgcm91bmQgdG8gcHJldiBjZWxsXG5cbiAgICAgIGlmIChzZWdGaXJzdCA8PSBzZWdMYXN0KSB7IC8vIHdhcyB0aGVyZSBhbnkgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGN1cnJlbnQgcm93P1xuICAgICAgICBzZWdzLnB1c2goe1xuICAgICAgICAgIHJvdzogcm93LFxuXG4gICAgICAgICAgLy8gbm9ybWFsaXplIHRvIHN0YXJ0IG9mIHJvd1xuICAgICAgICAgIGZpcnN0Um93RGF5SW5kZXg6IHNlZ0ZpcnN0IC0gcm93Rmlyc3QsXG4gICAgICAgICAgbGFzdFJvd0RheUluZGV4OiBzZWdMYXN0IC0gcm93Rmlyc3QsXG5cbiAgICAgICAgICAvLyBtdXN0IGJlIG1hdGNoaW5nIGludGVnZXJzIHRvIGJlIHRoZSBzZWdtZW50J3Mgc3RhcnQvZW5kXG4gICAgICAgICAgaXNTdGFydDogc2VnRmlyc3QgPT09IHJhbmdlRmlyc3QsXG4gICAgICAgICAgaXNFbmQ6IHNlZ0xhc3QgPT09IHJhbmdlTGFzdFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWdzXG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvWWVhclRhYmxlTWl4aW4udHMiLCJpbXBvcnQgeyBodG1sRXNjYXBlLCBkYXlJRHMgfSBmcm9tICdmdWxsY2FsZW5kYXInXG5pbXBvcnQgTWl4aW4gZnJvbSBcIi4vTWl4aW5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBEYXlUYWJsZUludGVyZmFjZSB7XG4gIGRheURhdGVzOiBhbnlcbiAgZGF5c1BlclJvdzogYW55XG4gIHJvd0NudDogYW55XG4gIGNvbENudDogYW55XG4gIHVwZGF0ZURheVRhYmxlKClcbiAgcmVuZGVySGVhZEh0bWwoKVxuICByZW5kZXJCZ1RySHRtbChyb3cpXG4gIGJvb2tlbmRDZWxscyh0ckVsKVxuICBnZXRDZWxsRGF0ZShyb3csIGNvbClcbiAgZ2V0Q2VsbFJhbmdlKHJvdywgY29sKVxuICBzbGljZVJhbmdlQnlEYXkodW56b25lZFJhbmdlKVxuICBzbGljZVJhbmdlQnlSb3codW56b25lZFJhbmdlKVxuICByZW5kZXJJbnRyb0h0bWwoKVxufVxuXG4vKlxuQSBzZXQgb2YgcmVuZGVyaW5nIGFuZCBkYXRlLXJlbGF0ZWQgbWV0aG9kcyBmb3IgYSB2aXN1YWwgY29tcG9uZW50IGNvbXByaXNlZCBvZiBvbmUgb3IgbW9yZSByb3dzIG9mIGRheSBjb2x1bW5zLlxuUHJlcmVxdWlzaXRlOiB0aGUgb2JqZWN0IGJlaW5nIG1peGVkIGludG8gbmVlZHMgdG8gYmUgYSAqR3JpZCpcbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXlUYWJsZU1peGluIGV4dGVuZHMgTWl4aW4gaW1wbGVtZW50cyBEYXlUYWJsZUludGVyZmFjZSB7XG5cbiAgYnJlYWtPbldlZWtzOiBib29sZWFuIC8vIHNob3VsZCBjcmVhdGUgYSBuZXcgcm93IGZvciBlYWNoIHdlZWs/IG5vdCBzcGVjaWZpZWQsIHNvIGRlZmF1bHQgaXMgRkFMU1lcbiAgZGF5RGF0ZXM6IGFueSAvLyB3aG9sZS1kYXkgZGF0ZXMgZm9yIGVhY2ggY29sdW1uLiBsZWZ0IHRvIHJpZ2h0XG4gIGRheUluZGljZXM6IGFueSAvLyBmb3IgZWFjaCBkYXkgZnJvbSBzdGFydCwgdGhlIG9mZnNldFxuICBkYXlzUGVyUm93OiBhbnlcbiAgcm93Q250OiBhbnlcbiAgY29sQ250OiBhbnlcbiAgY29sSGVhZEZvcm1hdDogYW55XG5cblxuICAvLyBQb3B1bGF0ZXMgaW50ZXJuYWwgdmFyaWFibGVzIHVzZWQgZm9yIGRhdGUgY2FsY3VsYXRpb24gYW5kIHJlbmRlcmluZ1xuICB1cGRhdGVEYXlUYWJsZSgpIHtcbiAgICBsZXQgdCA9ICh0aGlzIGFzIGFueSlcbiAgICBsZXQgdmlldyA9IHQudmlld1xuICAgIGxldCBjYWxlbmRhciA9IHZpZXcuY2FsZW5kYXJcbiAgICBsZXQgZGF0ZSA9IGNhbGVuZGFyLm1zVG9VdGNNb21lbnQodC5kYXRlUHJvZmlsZS5yZW5kZXJVbnpvbmVkUmFuZ2Uuc3RhcnRNcywgdHJ1ZSlcbiAgICBsZXQgZW5kID0gY2FsZW5kYXIubXNUb1V0Y01vbWVudCh0LmRhdGVQcm9maWxlLnJlbmRlclVuem9uZWRSYW5nZS5lbmRNcywgdHJ1ZSlcbiAgICBsZXQgZGF5SW5kZXggPSAtMVxuICAgIGxldCBkYXlJbmRpY2VzID0gW11cbiAgICBsZXQgZGF5RGF0ZXMgPSBbXVxuICAgIGxldCBkYXlzUGVyUm93XG4gICAgbGV0IGZpcnN0RGF5XG4gICAgbGV0IHJvd0NudFxuXG4gICAgd2hpbGUgKGRhdGUuaXNCZWZvcmUoZW5kKSkgeyAvLyBsb29wIGVhY2ggZGF5IGZyb20gc3RhcnQgdG8gZW5kXG4gICAgICBpZiAodmlldy5pc0hpZGRlbkRheShkYXRlKSkge1xuICAgICAgICBkYXlJbmRpY2VzLnB1c2goZGF5SW5kZXggKyAwLjUpIC8vIG1hcmsgdGhhdCBpdCdzIGJldHdlZW4gaW5kaWNlc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF5SW5kZXgrK1xuICAgICAgICBkYXlJbmRpY2VzLnB1c2goZGF5SW5kZXgpXG4gICAgICAgIGRheURhdGVzLnB1c2goZGF0ZS5jbG9uZSgpKVxuICAgICAgfVxuICAgICAgZGF0ZS5hZGQoMSwgJ2RheXMnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJyZWFrT25XZWVrcykge1xuICAgICAgLy8gY291bnQgY29sdW1ucyB1bnRpbCB0aGUgZGF5LW9mLXdlZWsgcmVwZWF0c1xuICAgICAgZmlyc3REYXkgPSBkYXlEYXRlc1swXS5kYXkoKVxuICAgICAgZm9yIChkYXlzUGVyUm93ID0gMTsgZGF5c1BlclJvdyA8IGRheURhdGVzLmxlbmd0aDsgZGF5c1BlclJvdysrKSB7XG4gICAgICAgIGlmIChkYXlEYXRlc1tkYXlzUGVyUm93XS5kYXkoKSA9PT0gZmlyc3REYXkpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByb3dDbnQgPSBNYXRoLmNlaWwoZGF5RGF0ZXMubGVuZ3RoIC8gZGF5c1BlclJvdylcbiAgICB9IGVsc2Uge1xuICAgICAgcm93Q250ID0gMVxuICAgICAgZGF5c1BlclJvdyA9IGRheURhdGVzLmxlbmd0aFxuICAgIH1cblxuICAgIHRoaXMuZGF5RGF0ZXMgPSBkYXlEYXRlc1xuICAgIHRoaXMuZGF5SW5kaWNlcyA9IGRheUluZGljZXNcbiAgICB0aGlzLmRheXNQZXJSb3cgPSBkYXlzUGVyUm93XG4gICAgdGhpcy5yb3dDbnQgPSByb3dDbnRcblxuICAgIHRoaXMudXBkYXRlRGF5VGFibGVDb2xzKClcbiAgfVxuXG5cbiAgLy8gQ29tcHV0ZXMgYW5kIGFzc2lnbmVkIHRoZSBjb2xDbnQgcHJvcGVydHkgYW5kIHVwZGF0ZXMgYW55IG9wdGlvbnMgdGhhdCBtYXkgYmUgY29tcHV0ZWQgZnJvbSBpdFxuICB1cGRhdGVEYXlUYWJsZUNvbHMoKSB7XG4gICAgdGhpcy5jb2xDbnQgPSB0aGlzLmNvbXB1dGVDb2xDbnQoKVxuICAgIHRoaXMuY29sSGVhZEZvcm1hdCA9XG4gICAgICAodGhpcyBhcyBhbnkpLm9wdCgnY29sdW1uSGVhZGVyRm9ybWF0JykgfHxcbiAgICAgICh0aGlzIGFzIGFueSkub3B0KCdjb2x1bW5Gb3JtYXQnKSB8fCAvLyBkZXByZWNhdGVkXG4gICAgICB0aGlzLmNvbXB1dGVDb2xIZWFkRm9ybWF0KClcbiAgfVxuXG5cbiAgLy8gRGV0ZXJtaW5lcyBob3cgbWFueSBjb2x1bW5zIHRoZXJlIHNob3VsZCBiZSBpbiB0aGUgdGFibGVcbiAgY29tcHV0ZUNvbENudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlzUGVyUm93XG4gIH1cblxuXG4gIC8vIENvbXB1dGVzIHRoZSBhbWJpZ3VvdXNseS10aW1lZCBtb21lbnQgZm9yIHRoZSBnaXZlbiBjZWxsXG4gIGdldENlbGxEYXRlKHJvdywgY29sKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF5RGF0ZXNbXG4gICAgICAgIHRoaXMuZ2V0Q2VsbERheUluZGV4KHJvdywgY29sKVxuICAgICAgXS5jbG9uZSgpXG4gIH1cblxuXG4gIC8vIENvbXB1dGVzIHRoZSBhbWJpZ3VvdXNseS10aW1lZCBkYXRlIHJhbmdlIGZvciB0aGUgZ2l2ZW4gY2VsbFxuICBnZXRDZWxsUmFuZ2Uocm93LCBjb2wpIHtcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmdldENlbGxEYXRlKHJvdywgY29sKVxuICAgIGxldCBlbmQgPSBzdGFydC5jbG9uZSgpLmFkZCgxLCAnZGF5cycpXG5cbiAgICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogZW5kIH1cbiAgfVxuXG5cbiAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheSBjZWxscywgY2hyb25vbG9naWNhbGx5LCBmcm9tIHRoZSBmaXJzdCBvZiB0aGUgZ3JpZCAoMC1iYXNlZClcbiAgZ2V0Q2VsbERheUluZGV4KHJvdywgY29sKSB7XG4gICAgcmV0dXJuIHJvdyAqIHRoaXMuZGF5c1BlclJvdyArIHRoaXMuZ2V0Q29sRGF5SW5kZXgoY29sKVxuICB9XG5cblxuICAvLyBSZXR1cm5zIHRoZSBudW1uZXIgb2YgZGF5IGNlbGxzLCBjaHJvbm9sb2dpY2FsbHksIGZyb20gdGhlIGZpcnN0IGNlbGwgaW4gKmFueSBnaXZlbiByb3cqXG4gIGdldENvbERheUluZGV4KGNvbCkge1xuICAgIGlmICgodGhpcyBhcyBhbnkpLmlzUlRMKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb2xDbnQgLSAxIC0gY29sXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb2xcbiAgICB9XG4gIH1cblxuXG4gIC8vIEdpdmVuIGEgZGF0ZSwgcmV0dXJucyBpdHMgY2hyb25vbG9jaWFsIGNlbGwtaW5kZXggZnJvbSB0aGUgZmlyc3QgY2VsbCBvZiB0aGUgZ3JpZC5cbiAgLy8gSWYgdGhlIGRhdGUgbGllcyBiZXR3ZWVuIGNlbGxzIChiZWNhdXNlIG9mIGhpZGRlbkRheXMpLCByZXR1cm5zIGEgZmxvYXRpbmctcG9pbnQgdmFsdWUgYmV0d2VlbiBvZmZzZXRzLlxuICAvLyBJZiBiZWZvcmUgdGhlIGZpcnN0IG9mZnNldCwgcmV0dXJucyBhIG5lZ2F0aXZlIG51bWJlci5cbiAgLy8gSWYgYWZ0ZXIgdGhlIGxhc3Qgb2Zmc2V0LCByZXR1cm5zIGFuIG9mZnNldCBwYXN0IHRoZSBsYXN0IGNlbGwgb2Zmc2V0LlxuICAvLyBPbmx5IHdvcmtzIGZvciAqc3RhcnQqIGRhdGVzIG9mIGNlbGxzLiBXaWxsIG5vdCB3b3JrIGZvciBleGNsdXNpdmUgZW5kIGRhdGVzIGZvciBjZWxscy5cbiAgZ2V0RGF0ZURheUluZGV4KGRhdGUpIHtcbiAgICBsZXQgZGF5SW5kaWNlcyA9IHRoaXMuZGF5SW5kaWNlc1xuICAgIGxldCBkYXlPZmZzZXQgPSBkYXRlLmRpZmYodGhpcy5kYXlEYXRlc1swXSwgJ2RheXMnKVxuXG4gICAgaWYgKGRheU9mZnNldCA8IDApIHtcbiAgICAgIHJldHVybiBkYXlJbmRpY2VzWzBdIC0gMVxuICAgIH0gZWxzZSBpZiAoZGF5T2Zmc2V0ID49IGRheUluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZGF5SW5kaWNlc1tkYXlJbmRpY2VzLmxlbmd0aCAtIDFdICsgMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF5SW5kaWNlc1tkYXlPZmZzZXRdXG4gICAgfVxuICB9XG5cblxuICAvKiBPcHRpb25zXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuICAvLyBDb21wdXRlcyBhIGRlZmF1bHQgY29sdW1uIGhlYWRlciBmb3JtYXR0aW5nIHN0cmluZyBpZiBgY29sRm9ybWF0YCBpcyBub3QgZXhwbGljaXRseSBkZWZpbmVkXG4gIGNvbXB1dGVDb2xIZWFkRm9ybWF0KCkge1xuICAgIC8vIGlmIG1vcmUgdGhhbiBvbmUgd2VlayByb3csIG9yIGlmIHRoZXJlIGFyZSBhIGxvdCBvZiBjb2x1bW5zIHdpdGggbm90IG11Y2ggc3BhY2UsXG4gICAgLy8gcHV0IGp1c3QgdGhlIGRheSBudW1iZXJzIHdpbGwgYmUgaW4gZWFjaCBjZWxsXG4gICAgaWYgKHRoaXMucm93Q250ID4gMSB8fCB0aGlzLmNvbENudCA+IDEwKSB7XG4gICAgICByZXR1cm4gJ2RkZCcgLy8gXCJTYXRcIlxuICAgIH0gZWxzZSBpZiAodGhpcy5jb2xDbnQgPiAxKSB7XG4gICAgICByZXR1cm4gKHRoaXMgYXMgYW55KS5vcHQoJ2RheU9mTW9udGhGb3JtYXQnKSAvLyBcIlNhdCAxMi8xMFwiXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnZGRkZCcgLy8gXCJTYXR1cmRheVwiXG4gICAgfVxuICB9XG5cblxuICAvKiBTbGljaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuICAvLyBTbGljZXMgdXAgYSBkYXRlIHJhbmdlIGludG8gYSBzZWdtZW50IGZvciBldmVyeSB3ZWVrLXJvdyBpdCBpbnRlcnNlY3RzIHdpdGhcbiAgc2xpY2VSYW5nZUJ5Um93KHVuem9uZWRSYW5nZSkge1xuICAgIGxldCBkYXlzUGVyUm93ID0gdGhpcy5kYXlzUGVyUm93XG4gICAgbGV0IG5vcm1hbFJhbmdlID0gKHRoaXMgYXMgYW55KS52aWV3LmNvbXB1dGVEYXlSYW5nZSh1bnpvbmVkUmFuZ2UpIC8vIG1ha2Ugd2hvbGUtZGF5IHJhbmdlLCBjb25zaWRlcmluZyBuZXh0RGF5VGhyZXNob2xkXG4gICAgbGV0IHJhbmdlRmlyc3QgPSB0aGlzLmdldERhdGVEYXlJbmRleChub3JtYWxSYW5nZS5zdGFydCkgLy8gaW5jbHVzaXZlIGZpcnN0IGluZGV4XG4gICAgbGV0IHJhbmdlTGFzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLmVuZC5jbG9uZSgpLnN1YnRyYWN0KDEsICdkYXlzJykpIC8vIGluY2x1c2l2ZSBsYXN0IGluZGV4XG4gICAgbGV0IHNlZ3MgPSBbXVxuICAgIGxldCByb3dcbiAgICBsZXQgcm93Rmlyc3RcbiAgICBsZXQgcm93TGFzdCAvLyBpbmNsdXNpdmUgZGF5LWluZGV4IHJhbmdlIGZvciBjdXJyZW50IHJvd1xuICAgIGxldCBzZWdGaXJzdFxuICAgIGxldCBzZWdMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIHNlZ21lbnRcblxuICAgIGZvciAocm93ID0gMDsgcm93IDwgdGhpcy5yb3dDbnQ7IHJvdysrKSB7XG4gICAgICByb3dGaXJzdCA9IHJvdyAqIGRheXNQZXJSb3dcbiAgICAgIHJvd0xhc3QgPSByb3dGaXJzdCArIGRheXNQZXJSb3cgLSAxXG5cbiAgICAgIC8vIGludGVyc2VjdCBzZWdtZW50J3Mgb2Zmc2V0IHJhbmdlIHdpdGggdGhlIHJvdydzXG4gICAgICBzZWdGaXJzdCA9IE1hdGgubWF4KHJhbmdlRmlyc3QsIHJvd0ZpcnN0KVxuICAgICAgc2VnTGFzdCA9IE1hdGgubWluKHJhbmdlTGFzdCwgcm93TGFzdClcblxuICAgICAgLy8gZGVhbCB3aXRoIGluLWJldHdlZW4gaW5kaWNlc1xuICAgICAgc2VnRmlyc3QgPSBNYXRoLmNlaWwoc2VnRmlyc3QpIC8vIGluLWJldHdlZW4gc3RhcnRzIHJvdW5kIHRvIG5leHQgY2VsbFxuICAgICAgc2VnTGFzdCA9IE1hdGguZmxvb3Ioc2VnTGFzdCkgLy8gaW4tYmV0d2VlbiBlbmRzIHJvdW5kIHRvIHByZXYgY2VsbFxuXG4gICAgICBpZiAoc2VnRmlyc3QgPD0gc2VnTGFzdCkgeyAvLyB3YXMgdGhlcmUgYW55IGludGVyc2VjdGlvbiB3aXRoIHRoZSBjdXJyZW50IHJvdz9cbiAgICAgICAgc2Vncy5wdXNoKHtcbiAgICAgICAgICByb3c6IHJvdyxcblxuICAgICAgICAgIC8vIG5vcm1hbGl6ZSB0byBzdGFydCBvZiByb3dcbiAgICAgICAgICBmaXJzdFJvd0RheUluZGV4OiBzZWdGaXJzdCAtIHJvd0ZpcnN0LFxuICAgICAgICAgIGxhc3RSb3dEYXlJbmRleDogc2VnTGFzdCAtIHJvd0ZpcnN0LFxuXG4gICAgICAgICAgLy8gbXVzdCBiZSBtYXRjaGluZyBpbnRlZ2VycyB0byBiZSB0aGUgc2VnbWVudCdzIHN0YXJ0L2VuZFxuICAgICAgICAgIGlzU3RhcnQ6IHNlZ0ZpcnN0ID09PSByYW5nZUZpcnN0LFxuICAgICAgICAgIGlzRW5kOiBzZWdMYXN0ID09PSByYW5nZUxhc3RcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2Vnc1xuICB9XG5cblxuICAvLyBTbGljZXMgdXAgYSBkYXRlIHJhbmdlIGludG8gYSBzZWdtZW50IGZvciBldmVyeSBkYXktY2VsbCBpdCBpbnRlcnNlY3RzIHdpdGguXG4gIC8vIFRPRE86IG1ha2UgbW9yZSBEUlkgd2l0aCBzbGljZVJhbmdlQnlSb3cgc29tZWhvdy5cbiAgc2xpY2VSYW5nZUJ5RGF5KHVuem9uZWRSYW5nZSkge1xuICAgIGxldCBkYXlzUGVyUm93ID0gdGhpcy5kYXlzUGVyUm93XG4gICAgbGV0IG5vcm1hbFJhbmdlID0gKHRoaXMgYXMgYW55KS52aWV3LmNvbXB1dGVEYXlSYW5nZSh1bnpvbmVkUmFuZ2UpIC8vIG1ha2Ugd2hvbGUtZGF5IHJhbmdlLCBjb25zaWRlcmluZyBuZXh0RGF5VGhyZXNob2xkXG4gICAgbGV0IHJhbmdlRmlyc3QgPSB0aGlzLmdldERhdGVEYXlJbmRleChub3JtYWxSYW5nZS5zdGFydCkgLy8gaW5jbHVzaXZlIGZpcnN0IGluZGV4XG4gICAgbGV0IHJhbmdlTGFzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLmVuZC5jbG9uZSgpLnN1YnRyYWN0KDEsICdkYXlzJykpIC8vIGluY2x1c2l2ZSBsYXN0IGluZGV4XG4gICAgbGV0IHNlZ3MgPSBbXVxuICAgIGxldCByb3dcbiAgICBsZXQgcm93Rmlyc3RcbiAgICBsZXQgcm93TGFzdCAvLyBpbmNsdXNpdmUgZGF5LWluZGV4IHJhbmdlIGZvciBjdXJyZW50IHJvd1xuICAgIGxldCBpXG4gICAgbGV0IHNlZ0ZpcnN0XG4gICAgbGV0IHNlZ0xhc3QgLy8gaW5jbHVzaXZlIGRheS1pbmRleCByYW5nZSBmb3Igc2VnbWVudFxuXG4gICAgZm9yIChyb3cgPSAwOyByb3cgPCB0aGlzLnJvd0NudDsgcm93KyspIHtcbiAgICAgIHJvd0ZpcnN0ID0gcm93ICogZGF5c1BlclJvd1xuICAgICAgcm93TGFzdCA9IHJvd0ZpcnN0ICsgZGF5c1BlclJvdyAtIDFcblxuICAgICAgZm9yIChpID0gcm93Rmlyc3Q7IGkgPD0gcm93TGFzdDsgaSsrKSB7XG5cbiAgICAgICAgLy8gaW50ZXJzZWN0IHNlZ21lbnQncyBvZmZzZXQgcmFuZ2Ugd2l0aCB0aGUgcm93J3NcbiAgICAgICAgc2VnRmlyc3QgPSBNYXRoLm1heChyYW5nZUZpcnN0LCBpKVxuICAgICAgICBzZWdMYXN0ID0gTWF0aC5taW4ocmFuZ2VMYXN0LCBpKVxuXG4gICAgICAgIC8vIGRlYWwgd2l0aCBpbi1iZXR3ZWVuIGluZGljZXNcbiAgICAgICAgc2VnRmlyc3QgPSBNYXRoLmNlaWwoc2VnRmlyc3QpIC8vIGluLWJldHdlZW4gc3RhcnRzIHJvdW5kIHRvIG5leHQgY2VsbFxuICAgICAgICBzZWdMYXN0ID0gTWF0aC5mbG9vcihzZWdMYXN0KSAvLyBpbi1iZXR3ZWVuIGVuZHMgcm91bmQgdG8gcHJldiBjZWxsXG5cbiAgICAgICAgaWYgKHNlZ0ZpcnN0IDw9IHNlZ0xhc3QpIHsgLy8gd2FzIHRoZXJlIGFueSBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgY3VycmVudCByb3c/XG4gICAgICAgICAgc2Vncy5wdXNoKHtcbiAgICAgICAgICAgIHJvdzogcm93LFxuXG4gICAgICAgICAgICAvLyBub3JtYWxpemUgdG8gc3RhcnQgb2Ygcm93XG4gICAgICAgICAgICBmaXJzdFJvd0RheUluZGV4OiBzZWdGaXJzdCAtIHJvd0ZpcnN0LFxuICAgICAgICAgICAgbGFzdFJvd0RheUluZGV4OiBzZWdMYXN0IC0gcm93Rmlyc3QsXG5cbiAgICAgICAgICAgIC8vIG11c3QgYmUgbWF0Y2hpbmcgaW50ZWdlcnMgdG8gYmUgdGhlIHNlZ21lbnQncyBzdGFydC9lbmRcbiAgICAgICAgICAgIGlzU3RhcnQ6IHNlZ0ZpcnN0ID09PSByYW5nZUZpcnN0LFxuICAgICAgICAgICAgaXNFbmQ6IHNlZ0xhc3QgPT09IHJhbmdlTGFzdFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2Vnc1xuICB9XG5cblxuICAvKiBIZWFkZXIgUmVuZGVyaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuICByZW5kZXJIZWFkSHRtbCgpIHtcbiAgICBsZXQgdGhlbWUgPSAodGhpcyBhcyBhbnkpLnZpZXcuY2FsZW5kYXIudGhlbWVcblxuICAgIHJldHVybiAnJyArXG4gICAgICAnPGRpdiBjbGFzcz1cImZjLXJvdyAnICsgdGhlbWUuZ2V0Q2xhc3MoJ2hlYWRlclJvdycpICsgJ1wiPicgK1xuICAgICAgICAnPHRhYmxlIGNsYXNzPVwiJyArIHRoZW1lLmdldENsYXNzKCd0YWJsZUdyaWQnKSArICdcIj4nICtcbiAgICAgICAgICAnPHRoZWFkPicgK1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJIZWFkVHJIdG1sKCkgK1xuICAgICAgICAgICc8L3RoZWFkPicgK1xuICAgICAgICAnPC90YWJsZT4nICtcbiAgICAgICc8L2Rpdj4nXG4gIH1cblxuXG4gIHJlbmRlckhlYWRJbnRyb0h0bWwoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVySW50cm9IdG1sKCkgLy8gZmFsbCBiYWNrIHRvIGdlbmVyaWNcbiAgfVxuXG5cbiAgcmVuZGVySGVhZFRySHRtbCgpIHtcbiAgICByZXR1cm4gJycgK1xuICAgICAgJzx0cj4nICtcbiAgICAgICAgKCh0aGlzIGFzIGFueSkuaXNSVEwgPyAnJyA6IHRoaXMucmVuZGVySGVhZEludHJvSHRtbCgpKSArXG4gICAgICAgIHRoaXMucmVuZGVySGVhZERhdGVDZWxsc0h0bWwoKSArXG4gICAgICAgICgodGhpcyBhcyBhbnkpLmlzUlRMID8gdGhpcy5yZW5kZXJIZWFkSW50cm9IdG1sKCkgOiAnJykgK1xuICAgICAgJzwvdHI+J1xuICB9XG5cblxuICByZW5kZXJIZWFkRGF0ZUNlbGxzSHRtbCgpIHtcbiAgICBsZXQgaHRtbHMgPSBbXVxuICAgIGxldCBjb2xcbiAgICBsZXQgZGF0ZVxuXG4gICAgZm9yIChjb2wgPSAwOyBjb2wgPCB0aGlzLmNvbENudDsgY29sKyspIHtcbiAgICAgIGRhdGUgPSB0aGlzLmdldENlbGxEYXRlKDAsIGNvbClcbiAgICAgIGh0bWxzLnB1c2goKHRoaXMgYXMgYW55KS5yZW5kZXJIZWFkRGF0ZUNlbGxIdG1sKGRhdGUpKVxuICAgIH1cblxuICAgIHJldHVybiBodG1scy5qb2luKCcnKVxuICB9XG5cblxuICAvLyBUT0RPOiB3aGVuIGludGVybmFsQXBpVmVyc2lvbiwgYWNjZXB0IGFuIG9iamVjdCBmb3IgSFRNTCBhdHRyaWJ1dGVzXG4gIC8vIChjb2xzcGFuIHNob3VsZCBiZSBubyBkaWZmZXJlbnQpXG4gIHJlbmRlckhlYWREYXRlQ2VsbEh0bWwoZGF0ZSwgY29sc3Bhbiwgb3RoZXJBdHRycykge1xuICAgIGxldCB0ID0gKHRoaXMgYXMgYW55KVxuICAgIGxldCB2aWV3ID0gdC52aWV3XG4gICAgbGV0IGlzRGF0ZVZhbGlkID0gdC5kYXRlUHJvZmlsZS5hY3RpdmVVbnpvbmVkUmFuZ2UuY29udGFpbnNEYXRlKGRhdGUpIC8vIFRPRE86IGNhbGxlZCB0b28gZnJlcXVlbnRseS4gY2FjaGUgc29tZWhvdy5cbiAgICBsZXQgY2xhc3NOYW1lcyA9IFtcbiAgICAgICdmYy1kYXktaGVhZGVyJyxcbiAgICAgIHZpZXcuY2FsZW5kYXIudGhlbWUuZ2V0Q2xhc3MoJ3dpZGdldEhlYWRlcicpXG4gICAgXVxuICAgIGxldCBpbm5lckh0bWxcblxuICAgIGlmICh0eXBlb2YgdC5vcHQoJ2NvbHVtbkhlYWRlckh0bWwnKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJIdG1sID0gdC5vcHQoJ2NvbHVtbkhlYWRlckh0bWwnKShkYXRlKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHQub3B0KCdjb2x1bW5IZWFkZXJUZXh0JykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlubmVySHRtbCA9IGh0bWxFc2NhcGUodC5vcHQoJ2NvbHVtbkhlYWRlclRleHQnKShkYXRlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgaW5uZXJIdG1sID0gaHRtbEVzY2FwZShkYXRlLmZvcm1hdCh0LmNvbEhlYWRGb3JtYXQpKVxuICAgIH1cblxuICAgIC8vIGlmIG9ubHkgb25lIHJvdyBvZiBkYXlzLCB0aGUgY2xhc3NOYW1lcyBvbiB0aGUgaGVhZGVyIGNhbiByZXByZXNlbnQgdGhlIHNwZWNpZmljIGRheXMgYmVuZWF0aFxuICAgIGlmICh0LnJvd0NudCA9PT0gMSkge1xuICAgICAgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMuY29uY2F0KFxuICAgICAgICAvLyBpbmNsdWRlcyB0aGUgZGF5LW9mLXdlZWsgY2xhc3NcbiAgICAgICAgLy8gbm9UaGVtZUhpZ2hsaWdodD10cnVlIChkb24ndCBoaWdobGlnaHQgdGhlIGhlYWRlcilcbiAgICAgICAgdC5nZXREYXlDbGFzc2VzKGRhdGUsIHRydWUpXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnZmMtJyArIGRheUlEc1tkYXRlLmRheSgpXSkgLy8gb25seSBhZGQgdGhlIGRheS1vZi13ZWVrIGNsYXNzXG4gICAgfVxuXG4gICAgcmV0dXJuICcnICtcbiAgICAgICc8dGggY2xhc3M9XCInICsgY2xhc3NOYW1lcy5qb2luKCcgJykgKyAnXCInICtcbiAgICAgICAgKChpc0RhdGVWYWxpZCAmJiB0LnJvd0NudCkgPT09IDEgP1xuICAgICAgICAgICcgZGF0YS1kYXRlPVwiJyArIGRhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgKyAnXCInIDpcbiAgICAgICAgICAnJykgK1xuICAgICAgICAoY29sc3BhbiA+IDEgP1xuICAgICAgICAgICcgY29sc3Bhbj1cIicgKyBjb2xzcGFuICsgJ1wiJyA6XG4gICAgICAgICAgJycpICtcbiAgICAgICAgKG90aGVyQXR0cnMgP1xuICAgICAgICAgICcgJyArIG90aGVyQXR0cnMgOlxuICAgICAgICAgICcnKSArXG4gICAgICAgICc+JyArXG4gICAgICAgIChpc0RhdGVWYWxpZCA/XG4gICAgICAgICAgLy8gZG9uJ3QgbWFrZSBhIGxpbmsgaWYgdGhlIGhlYWRpbmcgY291bGQgcmVwcmVzZW50IG11bHRpcGxlIGRheXMsIG9yIGlmIHRoZXJlJ3Mgb25seSBvbmUgZGF5IChmb3JjZU9mZilcbiAgICAgICAgICB2aWV3LmJ1aWxkR290b0FuY2hvckh0bWwoXG4gICAgICAgICAgICB7IGRhdGU6IGRhdGUsIGZvcmNlT2ZmOiB0LnJvd0NudCA+IDEgfHwgdC5jb2xDbnQgPT09IDEgfSxcbiAgICAgICAgICAgIGlubmVySHRtbFxuICAgICAgICAgICkgOlxuICAgICAgICAgIC8vIGlmIG5vdCB2YWxpZCwgZGlzcGxheSB0ZXh0LCBidXQgbm8gbGlua1xuICAgICAgICAgIGlubmVySHRtbFxuICAgICAgICApICtcbiAgICAgICc8L3RoPidcbiAgfVxuXG5cbiAgLyogQmFja2dyb3VuZCBSZW5kZXJpbmdcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIHJlbmRlckJnVHJIdG1sKHJvdykge1xuICAgIHJldHVybiAnJyArXG4gICAgICAnPHRyPicgK1xuICAgICAgICAoKHRoaXMgYXMgYW55KS5pc1JUTCA/ICcnIDogdGhpcy5yZW5kZXJCZ0ludHJvSHRtbChyb3cpKSArXG4gICAgICAgIHRoaXMucmVuZGVyQmdDZWxsc0h0bWwocm93KSArXG4gICAgICAgICgodGhpcyBhcyBhbnkpLmlzUlRMID8gdGhpcy5yZW5kZXJCZ0ludHJvSHRtbChyb3cpIDogJycpICtcbiAgICAgICc8L3RyPidcbiAgfVxuXG5cbiAgcmVuZGVyQmdJbnRyb0h0bWwocm93KSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVySW50cm9IdG1sKCkgLy8gZmFsbCBiYWNrIHRvIGdlbmVyaWNcbiAgfVxuXG5cbiAgcmVuZGVyQmdDZWxsc0h0bWwocm93KSB7XG4gICAgbGV0IGh0bWxzID0gW11cbiAgICBsZXQgY29sXG4gICAgbGV0IGRhdGVcblxuICAgIGZvciAoY29sID0gMDsgY29sIDwgdGhpcy5jb2xDbnQ7IGNvbCsrKSB7XG4gICAgICBkYXRlID0gdGhpcy5nZXRDZWxsRGF0ZShyb3csIGNvbClcbiAgICAgIGh0bWxzLnB1c2goKHRoaXMgYXMgYW55KS5yZW5kZXJCZ0NlbGxIdG1sKGRhdGUpKVxuICAgIH1cblxuICAgIHJldHVybiBodG1scy5qb2luKCcnKVxuICB9XG5cblxuICByZW5kZXJCZ0NlbGxIdG1sKGRhdGUsIG90aGVyQXR0cnMpIHtcbiAgICBsZXQgdCA9ICh0aGlzIGFzIGFueSlcbiAgICBsZXQgdmlldyA9IHQudmlld1xuICAgIGxldCBpc0RhdGVWYWxpZCA9IHQuZGF0ZVByb2ZpbGUuYWN0aXZlVW56b25lZFJhbmdlLmNvbnRhaW5zRGF0ZShkYXRlKSAvLyBUT0RPOiBjYWxsZWQgdG9vIGZyZXF1ZW50bHkuIGNhY2hlIHNvbWVob3cuXG4gICAgbGV0IGNsYXNzZXMgPSB0LmdldERheUNsYXNzZXMoZGF0ZSlcblxuICAgIGNsYXNzZXMudW5zaGlmdCgnZmMtZGF5Jywgdmlldy5jYWxlbmRhci50aGVtZS5nZXRDbGFzcygnd2lkZ2V0Q29udGVudCcpKVxuXG4gICAgcmV0dXJuICc8dGQgY2xhc3M9XCInICsgY2xhc3Nlcy5qb2luKCcgJykgKyAnXCInICtcbiAgICAgIChpc0RhdGVWYWxpZCA/XG4gICAgICAgICcgZGF0YS1kYXRlPVwiJyArIGRhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgKyAnXCInIDogLy8gaWYgZGF0ZSBoYXMgYSB0aW1lLCB3b24ndCBmb3JtYXQgaXRcbiAgICAgICAgJycpICtcbiAgICAgIChvdGhlckF0dHJzID9cbiAgICAgICAgJyAnICsgb3RoZXJBdHRycyA6XG4gICAgICAgICcnKSArXG4gICAgICAnPjwvdGQ+J1xuICB9XG5cblxuICAvKiBHZW5lcmljXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuICByZW5kZXJJbnRyb0h0bWwoKSB7XG4gICAgLy8gR2VuZXJhdGVzIHRoZSBkZWZhdWx0IEhUTUwgaW50cm8gZm9yIGFueSByb3cuIFVzZXIgY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGVcbiAgfVxuXG5cbiAgLy8gVE9ETzogYSBnZW5lcmljIG1ldGhvZCBmb3IgZGVhbGluZyB3aXRoIDx0cj4sIFJUTCwgaW50cm9cbiAgLy8gd2hlbiBpbmNyZW1lbnQgaW50ZXJuYWxBcGlWZXJzaW9uXG4gIC8vIHdyYXBUciAoc2NoZWR1bGVyKVxuXG5cbiAgLyogVXRpbHNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIC8vIEFwcGxpZXMgdGhlIGdlbmVyaWMgXCJpbnRyb1wiIGFuZCBcIm91dHJvXCIgSFRNTCB0byB0aGUgZ2l2ZW4gY2VsbHMuXG4gIC8vIEludHJvIG1lYW5zIHRoZSBsZWZ0bW9zdCBjZWxsIHdoZW4gdGhlIGNhbGVuZGFyIGlzIExUUiBhbmQgdGhlIHJpZ2h0bW9zdCBjZWxsIHdoZW4gUlRMLiBWaWNlLXZlcnNhIGZvciBvdXRyby5cbiAgYm9va2VuZENlbGxzKHRyRWwpIHtcbiAgICBsZXQgaW50cm9IdG1sID0gdGhpcy5yZW5kZXJJbnRyb0h0bWwoKVxuXG4gICAgaWYgKGludHJvSHRtbCkge1xuICAgICAgaWYgKCh0aGlzIGFzIGFueSkuaXNSVEwpIHtcbiAgICAgICAgdHJFbC5hcHBlbmQoaW50cm9IdG1sKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJFbC5wcmVwZW5kKGludHJvSHRtbClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RheVRhYmxlTWl4aW4udHMiLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1peGluIHtcblxuICBzdGF0aWMgbWl4SW50byhkZXN0Q2xhc3MpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLnByb3RvdHlwZSkuZm9yRWFjaCgobmFtZSkgPT4geyAvLyBjb3B5IG1ldGhvZHNcbiAgICAgIGlmICghZGVzdENsYXNzLnByb3RvdHlwZVtuYW1lXSkgeyAvLyBpZiBkZXN0aW5hdGlvbiBjbGFzcyBkb2Vzbid0IGFscmVhZHkgZGVmaW5lIGl0XG4gICAgICAgIGRlc3RDbGFzcy5wcm90b3R5cGVbbmFtZV0gPSB0aGlzLnByb3RvdHlwZVtuYW1lXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKlxuICB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIG1ldGhvZHNcbiAgVE9ETzogcmVtb3ZlISBub3QgdXNlZCBhbnltb3JlXG4gICovXG4gIHN0YXRpYyBtaXhPdmVyKGRlc3RDbGFzcykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMucHJvdG90eXBlKS5mb3JFYWNoKChuYW1lKSA9PiB7IC8vIGNvcHkgbWV0aG9kc1xuICAgICAgZGVzdENsYXNzLnByb3RvdHlwZVtuYW1lXSA9IHRoaXMucHJvdG90eXBlW25hbWVdXG4gICAgfSlcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTWl4aW4udHMiLCJpbXBvcnQge1Vuem9uZWRSYW5nZX0gZnJvbSBcImZ1bGxjYWxlbmRhclwiO1xuaW1wb3J0IERhdGVQcm9maWxlR2VuZXJhdG9yIGZyb20gXCIuL0RhdGVQcm9maWxlR2VuZXJhdG9yXCI7XG5cbmNsYXNzIFllYXJWaWV3RGF0ZVByb2ZpbGVHZW5lcmF0b3IgZXh0ZW5kcyBEYXRlUHJvZmlsZUdlbmVyYXRvciB7XG5cbiAgLy8gQ29tcHV0ZXMgdGhlIGRhdGUgcmFuZ2UgdGhhdCB3aWxsIGJlIHJlbmRlcmVkLlxuICBidWlsZFJlbmRlclJhbmdlKGN1cnJlbnRVbnpvbmVkUmFuZ2UsIGN1cnJlbnRSYW5nZVVuaXQsIGlzUmFuZ2VBbGxEYXkpIHtcbiAgICBsZXQgc3RhcnQgPSB0aGlzLm1zVG9VdGNNb21lbnQoY3VycmVudFVuem9uZWRSYW5nZS5zdGFydE1zLCBpc1JhbmdlQWxsRGF5KVxuICAgIGxldCBlbmQgPSB0aGlzLm1zVG9VdGNNb21lbnQoY3VycmVudFVuem9uZWRSYW5nZS5lbmRNcywgaXNSYW5nZUFsbERheSlcbiAgICByZXR1cm4gbmV3IFVuem9uZWRSYW5nZShzdGFydCwgZW5kKVxuICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgICBZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvci50cyIsImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBjb21wdXRlR3JlYXRlc3RVbml0LCBjb21wdXRlRHVyYXRpb25HcmVhdGVzdFVuaXQsIFVuem9uZWRSYW5nZSB9IGZyb20gJ2Z1bGxjYWxlbmRhcidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUHJvZmlsZUdlbmVyYXRvciB7XG5cbiAgX3ZpZXc6IGFueSAvLyBkaXNjb3VyYWdlXG5cblxuICBjb25zdHJ1Y3Rvcihfdmlldykge1xuICAgIHRoaXMuX3ZpZXcgPSBfdmlld1xuICB9XG5cblxuICBvcHQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLl92aWV3Lm9wdChuYW1lKVxuICB9XG5cblxuICB0cmltSGlkZGVuRGF5cyh1bnpvbmVkUmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlldy50cmltSGlkZGVuRGF5cyh1bnpvbmVkUmFuZ2UpXG4gIH1cblxuXG4gIG1zVG9VdGNNb21lbnQobXMsIGZvcmNlQWxsRGF5KSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXcuY2FsZW5kYXIubXNUb1V0Y01vbWVudChtcywgZm9yY2VBbGxEYXkpXG4gIH1cblxuXG4gIC8qIERhdGUgUmFuZ2UgQ29tcHV0YXRpb25cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIC8vIEJ1aWxkcyBhIHN0cnVjdHVyZSB3aXRoIGluZm8gYWJvdXQgd2hhdCB0aGUgZGF0ZXMvcmFuZ2VzIHdpbGwgYmUgZm9yIHRoZSBcInByZXZcIiB2aWV3LlxuICBidWlsZFByZXYoY3VycmVudERhdGVQcm9maWxlKSB7XG4gICAgbGV0IHByZXZEYXRlID0gY3VycmVudERhdGVQcm9maWxlLmRhdGUuY2xvbmUoKVxuICAgICAgLnN0YXJ0T2YoY3VycmVudERhdGVQcm9maWxlLmN1cnJlbnRSYW5nZVVuaXQpXG4gICAgICAuc3VidHJhY3QoY3VycmVudERhdGVQcm9maWxlLmRhdGVJbmNyZW1lbnQpXG5cbiAgICByZXR1cm4gdGhpcy5idWlsZChwcmV2RGF0ZSwgLTEpXG4gIH1cblxuXG4gIC8vIEJ1aWxkcyBhIHN0cnVjdHVyZSB3aXRoIGluZm8gYWJvdXQgd2hhdCB0aGUgZGF0ZXMvcmFuZ2VzIHdpbGwgYmUgZm9yIHRoZSBcIm5leHRcIiB2aWV3LlxuICBidWlsZE5leHQoY3VycmVudERhdGVQcm9maWxlKSB7XG4gICAgbGV0IG5leHREYXRlID0gY3VycmVudERhdGVQcm9maWxlLmRhdGUuY2xvbmUoKVxuICAgICAgLnN0YXJ0T2YoY3VycmVudERhdGVQcm9maWxlLmN1cnJlbnRSYW5nZVVuaXQpXG4gICAgICAuYWRkKGN1cnJlbnREYXRlUHJvZmlsZS5kYXRlSW5jcmVtZW50KVxuXG4gICAgcmV0dXJuIHRoaXMuYnVpbGQobmV4dERhdGUsIDEpXG4gIH1cblxuXG4gIC8vIEJ1aWxkcyBhIHN0cnVjdHVyZSBob2xkaW5nIGRhdGVzL3JhbmdlcyBmb3IgcmVuZGVyaW5nIGFyb3VuZCB0aGUgZ2l2ZW4gZGF0ZS5cbiAgLy8gT3B0aW9uYWwgZGlyZWN0aW9uIHBhcmFtIGluZGljYXRlcyB3aGV0aGVyIHRoZSBkYXRlIGlzIGJlaW5nIGluY3JlbWVudGVkL2RlY3JlbWVudGVkXG4gIC8vIGZyb20gaXRzIHByZXZpb3VzIHZhbHVlLiBkZWNyZW1lbnRlZCA9IC0xLCBpbmNyZW1lbnRlZCA9IDEgKGRlZmF1bHQpLlxuICBidWlsZChkYXRlLCBkaXJlY3Rpb24sIGZvcmNlVG9WYWxpZD0gZmFsc2UpIHtcbiAgICBsZXQgaXNEYXRlQWxsRGF5ID0gIWRhdGUuaGFzVGltZSgpXG4gICAgbGV0IHZhbGlkVW56b25lZFJhbmdlXG4gICAgbGV0IG1pblRpbWUgPSBudWxsXG4gICAgbGV0IG1heFRpbWUgPSBudWxsXG4gICAgbGV0IGN1cnJlbnRJbmZvXG4gICAgbGV0IGlzUmFuZ2VBbGxEYXlcbiAgICBsZXQgcmVuZGVyVW56b25lZFJhbmdlXG4gICAgbGV0IGFjdGl2ZVVuem9uZWRSYW5nZVxuICAgIGxldCBpc1ZhbGlkXG5cbiAgICB2YWxpZFVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRWYWxpZFJhbmdlKClcbiAgICB2YWxpZFVuem9uZWRSYW5nZSA9IHRoaXMudHJpbUhpZGRlbkRheXModmFsaWRVbnpvbmVkUmFuZ2UpXG5cbiAgICBpZiAoZm9yY2VUb1ZhbGlkKSB7XG4gICAgICBkYXRlID0gdGhpcy5tc1RvVXRjTW9tZW50KFxuICAgICAgICB2YWxpZFVuem9uZWRSYW5nZS5jb25zdHJhaW5EYXRlKGRhdGUpLCAvLyByZXR1cm5zIE1TXG4gICAgICAgIGlzRGF0ZUFsbERheVxuICAgICAgKVxuICAgIH1cblxuICAgIGN1cnJlbnRJbmZvID0gdGhpcy5idWlsZEN1cnJlbnRSYW5nZUluZm8oZGF0ZSwgZGlyZWN0aW9uKVxuICAgIGlzUmFuZ2VBbGxEYXkgPSAvXih5ZWFyfG1vbnRofHdlZWt8ZGF5KSQvLnRlc3QoY3VycmVudEluZm8udW5pdClcbiAgICByZW5kZXJVbnpvbmVkUmFuZ2UgPSB0aGlzLmJ1aWxkUmVuZGVyUmFuZ2UoXG4gICAgICB0aGlzLnRyaW1IaWRkZW5EYXlzKGN1cnJlbnRJbmZvLnVuem9uZWRSYW5nZSksXG4gICAgICBjdXJyZW50SW5mby51bml0LFxuICAgICAgaXNSYW5nZUFsbERheVxuICAgIClcbiAgICByZW5kZXJVbnpvbmVkUmFuZ2UgPSB0aGlzLnRyaW1IaWRkZW5EYXlzKHJlbmRlclVuem9uZWRSYW5nZSlcbiAgICBhY3RpdmVVbnpvbmVkUmFuZ2UgPSByZW5kZXJVbnpvbmVkUmFuZ2UuY2xvbmUoKVxuXG4gICAgaWYgKCF0aGlzLm9wdCgnc2hvd05vbkN1cnJlbnREYXRlcycpKSB7XG4gICAgICBhY3RpdmVVbnpvbmVkUmFuZ2UgPSBhY3RpdmVVbnpvbmVkUmFuZ2UuaW50ZXJzZWN0KGN1cnJlbnRJbmZvLnVuem9uZWRSYW5nZSlcbiAgICB9XG5cbiAgICBtaW5UaW1lID0gbW9tZW50LmR1cmF0aW9uKHRoaXMub3B0KCdtaW5UaW1lJykpXG4gICAgbWF4VGltZSA9IG1vbWVudC5kdXJhdGlvbih0aGlzLm9wdCgnbWF4VGltZScpKVxuICAgIGFjdGl2ZVVuem9uZWRSYW5nZSA9IHRoaXMuYWRqdXN0QWN0aXZlUmFuZ2UoYWN0aXZlVW56b25lZFJhbmdlLCBtaW5UaW1lLCBtYXhUaW1lKVxuICAgIGFjdGl2ZVVuem9uZWRSYW5nZSA9IGFjdGl2ZVVuem9uZWRSYW5nZS5pbnRlcnNlY3QodmFsaWRVbnpvbmVkUmFuZ2UpIC8vIG1pZ2h0IHJldHVybiBudWxsXG5cbiAgICBpZiAoYWN0aXZlVW56b25lZFJhbmdlKSB7XG4gICAgICBkYXRlID0gdGhpcy5tc1RvVXRjTW9tZW50KFxuICAgICAgICBhY3RpdmVVbnpvbmVkUmFuZ2UuY29uc3RyYWluRGF0ZShkYXRlKSwgLy8gcmV0dXJucyBNU1xuICAgICAgICBpc0RhdGVBbGxEYXlcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBpdCdzIGludmFsaWQgaWYgdGhlIG9yaWdpbmFsbHkgcmVxdWVzdGVkIGRhdGUgaXMgbm90IGNvbnRhaW5lZCxcbiAgICAvLyBvciBpZiB0aGUgcmFuZ2UgaXMgY29tcGxldGVseSBvdXRzaWRlIG9mIHRoZSB2YWxpZCByYW5nZS5cbiAgICBpc1ZhbGlkID0gY3VycmVudEluZm8udW56b25lZFJhbmdlLmludGVyc2VjdHNXaXRoKHZhbGlkVW56b25lZFJhbmdlKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGNvbnN0cmFpbnQgZm9yIHdoZXJlIHByZXYvbmV4dCBvcGVyYXRpb25zIGNhbiBnbyBhbmQgd2hlcmUgZXZlbnRzIGNhbiBiZSBkcmFnZ2VkL3Jlc2l6ZWQgdG8uXG4gICAgICAvLyBhbiBvYmplY3Qgd2l0aCBvcHRpb25hbCBzdGFydCBhbmQgZW5kIHByb3BlcnRpZXMuXG4gICAgICB2YWxpZFVuem9uZWRSYW5nZTogdmFsaWRVbnpvbmVkUmFuZ2UsXG5cbiAgICAgIC8vIHJhbmdlIHRoZSB2aWV3IGlzIGZvcm1hbGx5IHJlc3BvbnNpYmxlIGZvci5cbiAgICAgIC8vIGZvciBleGFtcGxlLCBhIG1vbnRoIHZpZXcgbWlnaHQgaGF2ZSAxc3QtMzFzdCwgZXhjbHVkaW5nIHBhZGRlZCBkYXRlc1xuICAgICAgY3VycmVudFVuem9uZWRSYW5nZTogY3VycmVudEluZm8udW56b25lZFJhbmdlLFxuXG4gICAgICAvLyBuYW1lIG9mIGxhcmdlc3QgdW5pdCBiZWluZyBkaXNwbGF5ZWQsIGxpa2UgXCJtb250aFwiIG9yIFwid2Vla1wiXG4gICAgICBjdXJyZW50UmFuZ2VVbml0OiBjdXJyZW50SW5mby51bml0LFxuXG4gICAgICBpc1JhbmdlQWxsRGF5OiBpc1JhbmdlQWxsRGF5LFxuXG4gICAgICAvLyBkYXRlcyB0aGF0IGRpc3BsYXkgZXZlbnRzIGFuZCBhY2NlcHQgZHJhZy1uLWRyb3BcbiAgICAgIC8vIHdpbGwgYmUgYG51bGxgIGlmIG5vIGRhdGVzIGFjY2VwdCBldmVudHNcbiAgICAgIGFjdGl2ZVVuem9uZWRSYW5nZTogYWN0aXZlVW56b25lZFJhbmdlLFxuXG4gICAgICAvLyBkYXRlIHJhbmdlIHdpdGggYSByZW5kZXJlZCBza2VsZXRvblxuICAgICAgLy8gaW5jbHVkZXMgbm90LWFjdGl2ZSBkYXlzIHRoYXQgbmVlZCBzb21lIHNvcnQgb2YgRE9NXG4gICAgICByZW5kZXJVbnpvbmVkUmFuZ2U6IHJlbmRlclVuem9uZWRSYW5nZSxcblxuICAgICAgLy8gRHVyYXRpb24gb2JqZWN0IHRoYXQgZGVub3RlcyB0aGUgZmlyc3QgdmlzaWJsZSB0aW1lIG9mIGFueSBnaXZlbiBkYXlcbiAgICAgIG1pblRpbWU6IG1pblRpbWUsXG5cbiAgICAgIC8vIER1cmF0aW9uIG9iamVjdCB0aGF0IGRlbm90ZXMgdGhlIGV4Y2x1c2l2ZSB2aXNpYmxlIGVuZCB0aW1lIG9mIGFueSBnaXZlbiBkYXlcbiAgICAgIG1heFRpbWU6IG1heFRpbWUsXG5cbiAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXG5cbiAgICAgIGRhdGU6IGRhdGUsXG5cbiAgICAgIC8vIGhvdyBmYXIgdGhlIGN1cnJlbnQgZGF0ZSB3aWxsIG1vdmUgZm9yIGEgcHJldi9uZXh0IG9wZXJhdGlvblxuICAgICAgZGF0ZUluY3JlbWVudDogdGhpcy5idWlsZERhdGVJbmNyZW1lbnQoY3VycmVudEluZm8uZHVyYXRpb24pXG4gICAgICAgIC8vIHBhc3MgYSBmYWxsYmFjayAobWlnaHQgYmUgbnVsbCkgXlxuICAgIH1cbiAgfVxuXG5cbiAgLy8gQnVpbGRzIGFuIG9iamVjdCB3aXRoIG9wdGlvbmFsIHN0YXJ0L2VuZCBwcm9wZXJ0aWVzLlxuICAvLyBJbmRpY2F0ZXMgdGhlIG1pbmltdW0vbWF4aW11bSBkYXRlcyB0byBkaXNwbGF5LlxuICAvLyBub3QgcmVzcG9uc2libGUgZm9yIHRyaW1taW5nIGhpZGRlbiBkYXlzLlxuICBidWlsZFZhbGlkUmFuZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXcuZ2V0VW56b25lZFJhbmdlT3B0aW9uKCd2YWxpZFJhbmdlJywgdGhpcy5fdmlldy5jYWxlbmRhci5nZXROb3coKSkgfHxcbiAgICAgIG5ldyBVbnpvbmVkUmFuZ2UoKSAvLyBjb21wbGV0ZWx5IG9wZW4tZW5kZWRcbiAgfVxuXG5cbiAgLy8gQnVpbGRzIGEgc3RydWN0dXJlIHdpdGggaW5mbyBhYm91dCB0aGUgXCJjdXJyZW50XCIgcmFuZ2UsIHRoZSByYW5nZSB0aGF0IGlzXG4gIC8vIGhpZ2hsaWdodGVkIGFzIGJlaW5nIHRoZSBjdXJyZW50IG1vbnRoIGZvciBleGFtcGxlLlxuICAvLyBTZWUgYnVpbGQoKSBmb3IgYSBkZXNjcmlwdGlvbiBvZiBgZGlyZWN0aW9uYC5cbiAgLy8gR3VhcmFudGVlZCB0byBoYXZlIGByYW5nZWAgYW5kIGB1bml0YCBwcm9wZXJ0aWVzLiBgZHVyYXRpb25gIGlzIG9wdGlvbmFsLlxuICAvLyBUT0RPOiBhY2NlcHQgYSBNUy10aW1lIGluc3RlYWQgb2YgYSBtb21lbnQgYGRhdGVgP1xuICBidWlsZEN1cnJlbnRSYW5nZUluZm8oZGF0ZSwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHZpZXdTcGVjID0gdGhpcy5fdmlldy52aWV3U3BlY1xuICAgIGxldCBkdXJhdGlvbiA9IG51bGxcbiAgICBsZXQgdW5pdCA9IG51bGxcbiAgICBsZXQgdW56b25lZFJhbmdlID0gbnVsbFxuICAgIGxldCBkYXlDb3VudFxuXG4gICAgaWYgKHZpZXdTcGVjLmR1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IHZpZXdTcGVjLmR1cmF0aW9uXG4gICAgICB1bml0ID0gdmlld1NwZWMuZHVyYXRpb25Vbml0XG4gICAgICB1bnpvbmVkUmFuZ2UgPSB0aGlzLmJ1aWxkUmFuZ2VGcm9tRHVyYXRpb24oZGF0ZSwgZGlyZWN0aW9uLCBkdXJhdGlvbiwgdW5pdClcbiAgICB9IGVsc2UgaWYgKChkYXlDb3VudCA9IHRoaXMub3B0KCdkYXlDb3VudCcpKSkge1xuICAgICAgdW5pdCA9ICdkYXknXG4gICAgICB1bnpvbmVkUmFuZ2UgPSB0aGlzLmJ1aWxkUmFuZ2VGcm9tRGF5Q291bnQoZGF0ZSwgZGlyZWN0aW9uLCBkYXlDb3VudClcbiAgICB9IGVsc2UgaWYgKCh1bnpvbmVkUmFuZ2UgPSB0aGlzLmJ1aWxkQ3VzdG9tVmlzaWJsZVJhbmdlKGRhdGUpKSkge1xuICAgICAgdW5pdCA9IGNvbXB1dGVHcmVhdGVzdFVuaXQodW56b25lZFJhbmdlLmdldFN0YXJ0KCksIHVuem9uZWRSYW5nZS5nZXRFbmQoKSlcbiAgICB9IGVsc2Uge1xuICAgICAgZHVyYXRpb24gPSB0aGlzLmdldEZhbGxiYWNrRHVyYXRpb24oKVxuICAgICAgdW5pdCA9IGNvbXB1dGVHcmVhdGVzdFVuaXQoZHVyYXRpb24pXG4gICAgICB1bnpvbmVkUmFuZ2UgPSB0aGlzLmJ1aWxkUmFuZ2VGcm9tRHVyYXRpb24oZGF0ZSwgZGlyZWN0aW9uLCBkdXJhdGlvbiwgdW5pdClcbiAgICB9XG5cbiAgICByZXR1cm4geyBkdXJhdGlvbjogZHVyYXRpb24sIHVuaXQ6IHVuaXQsIHVuem9uZWRSYW5nZTogdW56b25lZFJhbmdlIH1cbiAgfVxuXG5cbiAgZ2V0RmFsbGJhY2tEdXJhdGlvbigpIHtcbiAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKHsgZGF5czogMSB9KVxuICB9XG5cblxuICAvLyBSZXR1cm5zIGEgbmV3IGFjdGl2ZVVuem9uZWRSYW5nZSB0byBoYXZlIHRpbWUgdmFsdWVzICh1bi1hbWJpZ3VhdGUpXG4gIC8vIG1pblRpbWUgb3IgbWF4VGltZSBjYXVzZXMgdGhlIHJhbmdlIHRvIGV4cGFuZC5cbiAgYWRqdXN0QWN0aXZlUmFuZ2UodW56b25lZFJhbmdlLCBtaW5UaW1lLCBtYXhUaW1lKSB7XG4gICAgbGV0IHN0YXJ0ID0gdW56b25lZFJhbmdlLmdldFN0YXJ0KClcbiAgICBsZXQgZW5kID0gdW56b25lZFJhbmdlLmdldEVuZCgpXG5cbiAgICBpZiAodGhpcy5fdmlldy51c2VzTWluTWF4VGltZSkge1xuXG4gICAgICBpZiAobWluVGltZSA8IDApIHtcbiAgICAgICAgc3RhcnQudGltZSgwKS5hZGQobWluVGltZSlcbiAgICAgIH1cblxuICAgICAgaWYgKG1heFRpbWUgPiAyNCAqIDYwICogNjAgKiAxMDAwKSB7IC8vIGJleW9uZCAyNCBob3Vycz9cbiAgICAgICAgZW5kLnRpbWUobWF4VGltZSAtICgyNCAqIDYwICogNjAgKiAxMDAwKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFVuem9uZWRSYW5nZShzdGFydCwgZW5kKVxuICB9XG5cblxuICAvLyBCdWlsZHMgdGhlIFwiY3VycmVudFwiIHJhbmdlIHdoZW4gaXQgaXMgc3BlY2lmaWVkIGFzIGFuIGV4cGxpY2l0IGR1cmF0aW9uLlxuICAvLyBgdW5pdGAgaXMgdGhlIGFscmVhZHktY29tcHV0ZWQgY29tcHV0ZUdyZWF0ZXN0VW5pdCB2YWx1ZSBvZiBkdXJhdGlvbi5cbiAgLy8gVE9ETzogYWNjZXB0IGEgTVMtdGltZSBpbnN0ZWFkIG9mIGEgbW9tZW50IGBkYXRlYD9cbiAgYnVpbGRSYW5nZUZyb21EdXJhdGlvbihkYXRlLCBkaXJlY3Rpb24sIGR1cmF0aW9uLCB1bml0KSB7XG4gICAgbGV0IGFsaWdubWVudCA9IHRoaXMub3B0KCdkYXRlQWxpZ25tZW50JylcbiAgICBsZXQgZGF0ZUluY3JlbWVudElucHV0XG4gICAgbGV0IGRhdGVJbmNyZW1lbnREdXJhdGlvblxuICAgIGxldCBzdGFydFxuICAgIGxldCBlbmRcbiAgICBsZXQgcmVzXG5cbiAgICAvLyBjb21wdXRlIHdoYXQgdGhlIGFsaWdubWVudCBzaG91bGQgYmVcbiAgICBpZiAoIWFsaWdubWVudCkge1xuICAgICAgZGF0ZUluY3JlbWVudElucHV0ID0gdGhpcy5vcHQoJ2RhdGVJbmNyZW1lbnQnKVxuXG4gICAgICBpZiAoZGF0ZUluY3JlbWVudElucHV0KSB7XG4gICAgICAgIGRhdGVJbmNyZW1lbnREdXJhdGlvbiA9IG1vbWVudC5kdXJhdGlvbihkYXRlSW5jcmVtZW50SW5wdXQpXG5cbiAgICAgICAgLy8gdXNlIHRoZSBzbWFsbGVyIG9mIHRoZSB0d28gdW5pdHNcbiAgICAgICAgaWYgKGRhdGVJbmNyZW1lbnREdXJhdGlvbiA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgYWxpZ25tZW50ID0gY29tcHV0ZUR1cmF0aW9uR3JlYXRlc3RVbml0KGRhdGVJbmNyZW1lbnREdXJhdGlvbiwgZGF0ZUluY3JlbWVudElucHV0KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsaWdubWVudCA9IHVuaXRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ25tZW50ID0gdW5pdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSB2aWV3IGRpc3BsYXlzIGEgc2luZ2xlIGRheSBvciBzbWFsbGVyXG4gICAgaWYgKGR1cmF0aW9uLmFzKCdkYXlzJykgPD0gMSkge1xuICAgICAgaWYgKHRoaXMuX3ZpZXcuaXNIaWRkZW5EYXkoc3RhcnQpKSB7XG4gICAgICAgIHN0YXJ0ID0gdGhpcy5fdmlldy5za2lwSGlkZGVuRGF5cyhzdGFydCwgZGlyZWN0aW9uKVxuICAgICAgICBzdGFydC5zdGFydE9mKCdkYXknKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXB1dGVSZXMoKSB7XG4gICAgICBzdGFydCA9IGRhdGUuY2xvbmUoKS5zdGFydE9mKGFsaWdubWVudClcbiAgICAgIGVuZCA9IHN0YXJ0LmNsb25lKCkuYWRkKGR1cmF0aW9uKVxuICAgICAgcmVzID0gbmV3IFVuem9uZWRSYW5nZShzdGFydCwgZW5kKVxuICAgIH1cblxuICAgIGNvbXB1dGVSZXMoKVxuXG4gICAgLy8gaWYgcmFuZ2UgaXMgY29tcGxldGVseSBlbnZlbG9wZWQgYnkgaGlkZGVuIGRheXMsIGdvIHBhc3QgdGhlIGhpZGRlbiBkYXlzXG4gICAgaWYgKCF0aGlzLnRyaW1IaWRkZW5EYXlzKHJlcykpIHtcbiAgICAgIGRhdGUgPSB0aGlzLl92aWV3LnNraXBIaWRkZW5EYXlzKGRhdGUsIGRpcmVjdGlvbilcbiAgICAgIGNvbXB1dGVSZXMoKVxuICAgIH1cblxuICAgIHJldHVybiByZXNcbiAgfVxuXG5cbiAgLy8gQnVpbGRzIHRoZSBcImN1cnJlbnRcIiByYW5nZSB3aGVuIGEgZGF5Q291bnQgaXMgc3BlY2lmaWVkLlxuICAvLyBUT0RPOiBhY2NlcHQgYSBNUy10aW1lIGluc3RlYWQgb2YgYSBtb21lbnQgYGRhdGVgP1xuICBidWlsZFJhbmdlRnJvbURheUNvdW50KGRhdGUsIGRpcmVjdGlvbiwgZGF5Q291bnQpIHtcbiAgICBsZXQgY3VzdG9tQWxpZ25tZW50ID0gdGhpcy5vcHQoJ2RhdGVBbGlnbm1lbnQnKVxuICAgIGxldCBydW5uaW5nQ291bnQgPSAwXG4gICAgbGV0IHN0YXJ0XG4gICAgbGV0IGVuZFxuXG4gICAgaWYgKGN1c3RvbUFsaWdubWVudCB8fCBkaXJlY3Rpb24gIT09IC0xKSB7XG5cbiAgICAgIHN0YXJ0ID0gZGF0ZS5jbG9uZSgpXG5cbiAgICAgIGlmIChjdXN0b21BbGlnbm1lbnQpIHtcbiAgICAgICAgc3RhcnQuc3RhcnRPZihjdXN0b21BbGlnbm1lbnQpXG4gICAgICB9XG5cbiAgICAgIHN0YXJ0LnN0YXJ0T2YoJ2RheScpXG4gICAgICBzdGFydCA9IHRoaXMuX3ZpZXcuc2tpcEhpZGRlbkRheXMoc3RhcnQpXG5cbiAgICAgIGVuZCA9IHN0YXJ0LmNsb25lKClcbiAgICAgIGRvIHtcbiAgICAgICAgZW5kLmFkZCgxLCAnZGF5JylcbiAgICAgICAgaWYgKCF0aGlzLl92aWV3LmlzSGlkZGVuRGF5KGVuZCkpIHtcbiAgICAgICAgICBydW5uaW5nQ291bnQrK1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlIChydW5uaW5nQ291bnQgPCBkYXlDb3VudClcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGVuZCA9IGRhdGUuY2xvbmUoKS5zdGFydE9mKCdkYXknKS5hZGQoMSwgJ2RheScpXG4gICAgICBlbmQgPSB0aGlzLl92aWV3LnNraXBIaWRkZW5EYXlzKGVuZCwgLTEsIHRydWUpXG5cbiAgICAgIHN0YXJ0ID0gZW5kLmNsb25lKClcbiAgICAgIGRvIHtcbiAgICAgICAgc3RhcnQuYWRkKC0xLCAnZGF5JylcbiAgICAgICAgaWYgKCF0aGlzLl92aWV3LmlzSGlkZGVuRGF5KHN0YXJ0KSkge1xuICAgICAgICAgIHJ1bm5pbmdDb3VudCsrXG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKHJ1bm5pbmdDb3VudCA8IGRheUNvdW50KVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBVbnpvbmVkUmFuZ2Uoc3RhcnQsIGVuZClcbiAgfVxuXG5cbiAgLy8gQnVpbGRzIGEgbm9ybWFsaXplZCByYW5nZSBvYmplY3QgZm9yIHRoZSBcInZpc2libGVcIiByYW5nZSxcbiAgLy8gd2hpY2ggaXMgYSB3YXkgdG8gZGVmaW5lIHRoZSBjdXJyZW50VW56b25lZFJhbmdlIGFuZCBhY3RpdmVVbnpvbmVkUmFuZ2UgYXQgdGhlIHNhbWUgdGltZS5cbiAgLy8gVE9ETzogYWNjZXB0IGEgTVMtdGltZSBpbnN0ZWFkIG9mIGEgbW9tZW50IGBkYXRlYD9cbiAgYnVpbGRDdXN0b21WaXNpYmxlUmFuZ2UoZGF0ZSkge1xuICAgIGxldCB2aXNpYmxlVW56b25lZFJhbmdlID0gdGhpcy5fdmlldy5nZXRVbnpvbmVkUmFuZ2VPcHRpb24oXG4gICAgICAndmlzaWJsZVJhbmdlJyxcbiAgICAgIHRoaXMuX3ZpZXcuY2FsZW5kYXIuYXBwbHlUaW1lem9uZShkYXRlKSAvLyBjb3JyZWN0IHpvbmUuIGFsc28gZ2VuZXJhdGVzIG5ldyBvYmogdGhhdCBhdm9pZHMgbXV0YXRpb25zXG4gICAgKVxuXG4gICAgaWYgKHZpc2libGVVbnpvbmVkUmFuZ2UgJiYgKHZpc2libGVVbnpvbmVkUmFuZ2Uuc3RhcnRNcyA9PSBudWxsIHx8IHZpc2libGVVbnpvbmVkUmFuZ2UuZW5kTXMgPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2libGVVbnpvbmVkUmFuZ2VcbiAgfVxuXG5cbiAgLy8gQ29tcHV0ZXMgdGhlIHJhbmdlIHRoYXQgd2lsbCByZXByZXNlbnQgdGhlIGVsZW1lbnQvY2VsbHMgZm9yICpyZW5kZXJpbmcqLFxuICAvLyBidXQgd2hpY2ggbWF5IGhhdmUgdm9pZGVkIGRheXMvdGltZXMuXG4gIC8vIG5vdCByZXNwb25zaWJsZSBmb3IgdHJpbW1pbmcgaGlkZGVuIGRheXMuXG4gIGJ1aWxkUmVuZGVyUmFuZ2UoY3VycmVudFVuem9uZWRSYW5nZSwgY3VycmVudFJhbmdlVW5pdCwgaXNSYW5nZUFsbERheSkge1xuICAgIHJldHVybiBjdXJyZW50VW56b25lZFJhbmdlLmNsb25lKClcbiAgfVxuXG5cbiAgLy8gQ29tcHV0ZSB0aGUgZHVyYXRpb24gdmFsdWUgdGhhdCBzaG91bGQgYmUgYWRkZWQvc3Vic3RyYWN0ZWQgdG8gdGhlIGN1cnJlbnQgZGF0ZVxuICAvLyB3aGVuIGEgcHJldi9uZXh0IG9wZXJhdGlvbiBoYXBwZW5zLlxuICBidWlsZERhdGVJbmNyZW1lbnQoZmFsbGJhY2spIHtcbiAgICBsZXQgZGF0ZUluY3JlbWVudElucHV0ID0gdGhpcy5vcHQoJ2RhdGVJbmNyZW1lbnQnKVxuICAgIGxldCBjdXN0b21BbGlnbm1lbnRcblxuICAgIGlmIChkYXRlSW5jcmVtZW50SW5wdXQpIHtcbiAgICAgIHJldHVybiBtb21lbnQuZHVyYXRpb24oZGF0ZUluY3JlbWVudElucHV0KVxuICAgIH0gZWxzZSBpZiAoKGN1c3RvbUFsaWdubWVudCA9IHRoaXMub3B0KCdkYXRlQWxpZ25tZW50JykpKSB7XG4gICAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKDEsIGN1c3RvbUFsaWdubWVudClcbiAgICB9IGVsc2UgaWYgKGZhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gZmFsbGJhY2tcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbih7IGRheXM6IDEgfSlcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RhdGVQcm9maWxlR2VuZXJhdG9yLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==