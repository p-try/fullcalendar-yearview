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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
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

if ($.fullCalendar !== undefined) {
    var YearView = __webpack_require__(3).default;
    $.fullCalendar.defineView('year', {
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
                if (this.colWeekNumbersVisible) {
                    return '' +
                        '<th class="fc-week-number ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.weekNumberStyleAttr() + '>' +
                        '<span>' +
                        '</span>' +
                        '</th>';
                }
                return '';
            };
            // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
            SubClass.prototype.renderNumberIntroHtml = function (row) {
                var view = this.view;
                var monthStart = this.getCellDate(row, 0);
                if (this.colWeekNumbersVisible) {
                    return '' +
                        '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
                        view.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                        { date: monthStart, type: 'week', forceOff: this.colCnt === 1 }, monthStart.format('MMM') // inner HTML
                        ) +
                        '</td>';
                }
                return '';
            };
            // Generates the HTML that goes before the day bg cells for each day-row
            SubClass.prototype.renderBgIntroHtml = function () {
                var view = this.view;
                if (this.colWeekNumbersVisible) {
                    return '<td class="fc-week-number ' + view.calendar.theme.getClass('widgetContent') + '" ' +
                        view.weekNumberStyleAttr() + '></td>';
                }
                return '';
            };
            // Generates the HTML that goes before every other type of row generated by DayGrid.
            // Affects helper-skeleton and highlight-skeleton rows.
            SubClass.prototype.renderIntroHtml = function () {
                var view = this.view;
                if (this.colWeekNumbersVisible) {
                    return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>';
                }
                return '';
            };
            SubClass.prototype.getIsNumbersVisible = function () {
                return YearGrid_1.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNmViOWE2N2ZiNDNkMmQ5MWRjMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZnVsbGNhbGVuZGFyXCIsXCJjb21tb25qczJcIjpcImZ1bGxjYWxlbmRhclwiLFwiYW1kXCI6XCJmdWxsY2FsZW5kYXJcIixcInJvb3RcIjpcIkZ1bGxDYWxlbmRhclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1llYXJWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9ZZWFyR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWWVhclRhYmxlTWl4aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RheVRhYmxlTWl4aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01peGluLnRzIiwid2VicGFjazovLy8uL3NyYy9ZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9EYXRlUHJvZmlsZUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7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T0FBTyxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRSxDQUFDLENBQUM7UUFDOUYsY0FBYyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9JLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELDhCQU9DO0FBRUQscUJBQTRCLE9BQU8sRUFBRSxJQUFJO0lBQ3JDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakgsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsY0FBYSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6SixjQUFjLENBQUMsSUFBSSxPQUFPLFVBQVUsQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLGNBQWMsRUFBRTtRQUNaLElBQUksQ0FBQztZQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUM7WUFBRSxJQUFJO2dCQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFBRSxPQUFPLENBQUMsQ0FBQztnQkFDN0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNYLEtBQUssQ0FBQyxDQUFDO29CQUFDLEtBQUssQ0FBQzt3QkFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLE1BQU07b0JBQzlCLEtBQUssQ0FBQzt3QkFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO29CQUN4RCxLQUFLLENBQUM7d0JBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsU0FBUztvQkFDakQsS0FBSyxDQUFDO3dCQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQUMsU0FBUztvQkFDakQ7d0JBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUFDLFNBQVM7eUJBQUU7d0JBQzVHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFB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O0lBQ3hDLDRDQUE0QztJQUM1QywrQ0FBZ0IsR0FBaEIsVUFBaUIsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYTtRQUNuRSxPQUFPLG1CQUFtQixDQUFDLEtBQUssRUFBRTtJQUNwQyxDQUFDO0lBR0Qsa0ZBQWtGO0lBQ2xGLHNDQUFzQztJQUN0QyxpREFBa0IsR0FBbEIsVUFBbUIsUUFBUTtRQUN6QixJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksZUFBZTtRQUVuQixJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztTQUMzQzthQUFNLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDO1NBQzNDO2FBQU0sSUFBSSxRQUFRLEVBQUU7WUFDbkIsT0FBTyxRQUFRO1NBQ2hCO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUgsMkJBQUM7QUFBRCxDQUFDOzs7Ozs7OztBQ25XRCxnRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZnVsbGNhbGVuZGFyXCIpLCByZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImZ1bGxjYWxlbmRhclwiLCBcIm1vbWVudFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJGdWxsQ2FsZW5kYXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJmdWxsY2FsZW5kYXJcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZ1bGxDYWxlbmRhclwiXSA9IGZhY3Rvcnkocm9vdFtcIkZ1bGxDYWxlbmRhclwiXSwgcm9vdFtcIm1vbWVudFwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNmViOWE2N2ZiNDNkMmQ5MWRjMyIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImZ1bGxjYWxlbmRhclwiLFwiY29tbW9uanMyXCI6XCJmdWxsY2FsZW5kYXJcIixcImFtZFwiOlwiZnVsbGNhbGVuZGFyXCIsXCJyb290XCI6XCJGdWxsQ2FsZW5kYXJcIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaWYgKCQuZnVsbENhbGVuZGFyICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgWWVhclZpZXcgPSByZXF1aXJlKCcuL1llYXJWaWV3JykuZGVmYXVsdDtcblxuICAgICQuZnVsbENhbGVuZGFyLmRlZmluZVZpZXcoJ3llYXInLCB7XG4gICAgICAgICdjbGFzcyc6IFllYXJWaWV3LFxuICAgICAgICBkdXJhdGlvbjogeyB5ZWFyczogMSB9XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKiBBIG1vbnRoIHZpZXcgd2l0aCBkYXkgY2VsbHMgcnVubmluZyBpbiByb3dzIChvbmUtcGVyLXdlZWspIGFuZCBjb2x1bW5zXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHtCYXNpY1ZpZXd9IGZyb20gXCJmdWxsY2FsZW5kYXJcIjtcbmltcG9ydCBZZWFyR3JpZCBmcm9tIFwiLi9ZZWFyR3JpZFwiO1xuaW1wb3J0IHtZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yfSBmcm9tIFwiLi9ZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJWaWV3IGV4dGVuZHMgQmFzaWNWaWV3IHtcblxuICBjb25zdHJ1Y3RvcihjYWxlbmRhciwgdmlld1NwZWMpIHtcbiAgICBzdXBlcihjYWxlbmRhciwgdmlld1NwZWMpXG4gIH1cblxuICBpbnN0YW50aWF0ZURheUdyaWQoKSB7XG4gICAgLy8gZ2VuZXJhdGUgYSBzdWJjbGFzcyBvbiB0aGUgZmx5IHdpdGggQmFzaWNWaWV3LXNwZWNpZmljIGJlaGF2aW9yXG4gICAgLy8gVE9ETzogY2FjaGUgdGhpcyBzdWJjbGFzc1xuICAgIGxldCBzdWJjbGFzczogYW55ID0gdGhpcy5tYWtlRGF5R3JpZFN1YmNsYXNzKHRoaXMuZGF5R3JpZENsYXNzKVxuXG4gICAgcmV0dXJuIG5ldyBzdWJjbGFzcyh0aGlzKVxuICB9XG5cblxuICAvLyBjdXN0b21pemUgdGhlIHJlbmRlcmluZyBiZWhhdmlvciBvZiBCYXNpY1ZpZXcncyBkYXlHcmlkXG4gIG1ha2VEYXlHcmlkU3ViY2xhc3MoU3VwZXJDbGFzcykge1xuXG4gICAgcmV0dXJuIGNsYXNzIFN1YkNsYXNzIGV4dGVuZHMgU3VwZXJDbGFzcyB7XG5cbiAgICAgIGNvbFdlZWtOdW1iZXJzVmlzaWJsZTogYm9vbGVhbiA9IHRydWUgLy8gZGlzcGxheSB3ZWVrIG51bWJlcnMgYWxvbmcgdGhlIHNpZGU/XG5cblxuICAgICAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgd2lsbCBnbyBiZWZvcmUgdGhlIGRheS1vZiB3ZWVrIGhlYWRlciBjZWxsc1xuICAgICAgcmVuZGVySGVhZEludHJvSHRtbCgpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcblxuICAgICAgICBpZiAodGhpcy5jb2xXZWVrTnVtYmVyc1Zpc2libGUpIHtcbiAgICAgICAgICByZXR1cm4gJycgK1xuICAgICAgICAgICAgJzx0aCBjbGFzcz1cImZjLXdlZWstbnVtYmVyICcgKyB2aWV3LmNhbGVuZGFyLnRoZW1lLmdldENsYXNzKCd3aWRnZXRIZWFkZXInKSArICdcIiAnICsgdmlldy53ZWVrTnVtYmVyU3R5bGVBdHRyKCkgKyAnPicgK1xuICAgICAgICAgICAgJzxzcGFuPicgK1xuICAgICAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8L3RoPidcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuXG5cbiAgICAgIC8vIEdlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IHdpbGwgZ28gYmVmb3JlIGNvbnRlbnQtc2tlbGV0b24gY2VsbHMgdGhhdCBkaXNwbGF5IHRoZSBkYXkvd2VlayBudW1iZXJzXG4gICAgICByZW5kZXJOdW1iZXJJbnRyb0h0bWwocm93KSB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3XG4gICAgICAgIGxldCBtb250aFN0YXJ0ID0gdGhpcy5nZXRDZWxsRGF0ZShyb3csIDApXG5cbiAgICAgICAgaWYgKHRoaXMuY29sV2Vla051bWJlcnNWaXNpYmxlKSB7XG4gICAgICAgICAgcmV0dXJuICcnICtcbiAgICAgICAgICAgICc8dGQgY2xhc3M9XCJmYy13ZWVrLW51bWJlclwiICcgKyB2aWV3LndlZWtOdW1iZXJTdHlsZUF0dHIoKSArICc+JyArXG4gICAgICAgICAgICB2aWV3LmJ1aWxkR290b0FuY2hvckh0bWwoIC8vIGFzaWRlIGZyb20gbGluaywgaW1wb3J0YW50IGZvciBtYXRjaENlbGxXaWR0aHNcbiAgICAgICAgICAgICAgeyBkYXRlOiBtb250aFN0YXJ0LCB0eXBlOiAnd2VlaycsIGZvcmNlT2ZmOiB0aGlzLmNvbENudCA9PT0gMSB9LFxuICAgICAgICAgICAgICBtb250aFN0YXJ0LmZvcm1hdCgnTU1NJykgLy8gaW5uZXIgSFRNTFxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAnPC90ZD4nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cblxuXG4gICAgICAvLyBHZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCBnb2VzIGJlZm9yZSB0aGUgZGF5IGJnIGNlbGxzIGZvciBlYWNoIGRheS1yb3dcbiAgICAgIHJlbmRlckJnSW50cm9IdG1sKCkge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuXG4gICAgICAgIGlmICh0aGlzLmNvbFdlZWtOdW1iZXJzVmlzaWJsZSkge1xuICAgICAgICAgIHJldHVybiAnPHRkIGNsYXNzPVwiZmMtd2Vlay1udW1iZXIgJyArIHZpZXcuY2FsZW5kYXIudGhlbWUuZ2V0Q2xhc3MoJ3dpZGdldENvbnRlbnQnKSArICdcIiAnICtcbiAgICAgICAgICAgIHZpZXcud2Vla051bWJlclN0eWxlQXR0cigpICsgJz48L3RkPidcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuXG5cbiAgICAgIC8vIEdlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IGdvZXMgYmVmb3JlIGV2ZXJ5IG90aGVyIHR5cGUgb2Ygcm93IGdlbmVyYXRlZCBieSBEYXlHcmlkLlxuICAgICAgLy8gQWZmZWN0cyBoZWxwZXItc2tlbGV0b24gYW5kIGhpZ2hsaWdodC1za2VsZXRvbiByb3dzLlxuICAgICAgcmVuZGVySW50cm9IdG1sKCkge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuXG4gICAgICAgIGlmICh0aGlzLmNvbFdlZWtOdW1iZXJzVmlzaWJsZSkge1xuICAgICAgICAgIHJldHVybiAnPHRkIGNsYXNzPVwiZmMtd2Vlay1udW1iZXJcIiAnICsgdmlldy53ZWVrTnVtYmVyU3R5bGVBdHRyKCkgKyAnPjwvdGQ+J1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG5cblxuICAgICAgZ2V0SXNOdW1iZXJzVmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFllYXJHcmlkLnByb3RvdHlwZS5nZXRJc051bWJlcnNWaXNpYmxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcy5jb2xXZWVrTnVtYmVyc1Zpc2libGVcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG59XG5cblllYXJWaWV3LnByb3RvdHlwZS5kYXlHcmlkQ2xhc3MgPSBZZWFyR3JpZFxuWWVhclZpZXcucHJvdG90eXBlLmRhdGVQcm9maWxlR2VuZXJhdG9yQ2xhc3MgPSBZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvWWVhclZpZXcudHMiLCJpbXBvcnQge0RheUdyaWQsQ29vcmRDYWNoZX0gZnJvbSBcImZ1bGxjYWxlbmRhclwiO1xuaW1wb3J0IFllYXJUYWJsZU1peGluIGZyb20gXCIuL1llYXJUYWJsZU1peGluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJHcmlkIGV4dGVuZHMgRGF5R3JpZCB7XG5cbiAgY29sQ250OiBudW1iZXIgPSAzMVxuICByb3dDbnQ6IG51bWJlciA9IDEyXG4gIGRheXNQZXJSb3c6IG51bWJlciA9IDMxXG4gIGNlbGxXZWVrTnVtYmVyc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZSAvLyBkaXNwbGF5IHdlZWsgbnVtYmVycyBpbiBkYXkgY2VsbD9cbiAgYnJlYWtPbldlZWtzOiBib29sZWFuID0gZmFsc2VcblxuXG4gIC8vIFJlbmRlcnMgdGhlIHJvd3MgYW5kIGNvbHVtbnMgaW50byB0aGUgY29tcG9uZW50J3MgYHRoaXMuZWxgLCB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBhc3NpZ25lZC5cbiAgcmVuZGVyR3JpZCgpIHtcbiAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuICAgIGxldCByb3dDbnQgPSB0aGlzLnJvd0NudFxuICAgIGxldCBjb2xDbnQgPSB0aGlzLmNvbENudFxuICAgIGxldCBodG1sID0gJydcbiAgICBsZXQgcm93XG4gICAgbGV0IGNvbFxuXG4gICAgaWYgKHRoaXMuaGVhZENvbnRhaW5lckVsKSB7XG4gICAgICB0aGlzLmhlYWRDb250YWluZXJFbC5odG1sKHRoaXMucmVuZGVySGVhZEh0bWwoKSlcbiAgICB9XG5cbiAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHJvd0NudDsgcm93KyspIHtcbiAgICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJEYXlSb3dIdG1sKHJvdywgdGhpcy5pc1JpZ2lkKVxuICAgIH1cbiAgICB0aGlzLmVsLmh0bWwoaHRtbClcblxuICAgIHRoaXMucm93RWxzID0gdGhpcy5lbC5maW5kKCcuZmMtcm93JylcbiAgICB0aGlzLmNlbGxFbHMgPSB0aGlzLmVsLmZpbmQoJy5mYy1kYXksIC5mYy1kaXNhYmxlZC1kYXknKVxuXG4gICAgdGhpcy5yb3dDb29yZENhY2hlID0gbmV3IENvb3JkQ2FjaGUoe1xuICAgICAgZWxzOiB0aGlzLnJvd0VscyxcbiAgICAgIGlzVmVydGljYWw6IHRydWVcbiAgICB9KVxuICAgIHRoaXMuY29sQ29vcmRDYWNoZSA9IG5ldyBDb29yZENhY2hlKHtcbiAgICAgIGVsczogdGhpcy5jZWxsRWxzLnNsaWNlKDAsIHRoaXMuY29sQ250KSwgLy8gb25seSB0aGUgZmlyc3Qgcm93XG4gICAgICBpc0hvcml6b250YWw6IHRydWVcbiAgICB9KVxuXG4gICAgLy8gdHJpZ2dlciBkYXlSZW5kZXIgd2l0aCBlYWNoIGNlbGwncyBlbGVtZW50XG4gICAgZm9yIChyb3cgPSAwOyByb3cgPCByb3dDbnQ7IHJvdysrKSB7XG4gICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IGNvbENudDsgY29sKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2VsbERhdGUocm93LCBjb2wpICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnB1YmxpY2x5VHJpZ2dlcignZGF5UmVuZGVyJywge1xuICAgICAgICAgICAgY29udGV4dDogdmlldyxcbiAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgdGhpcy5nZXRDZWxsRGF0ZShyb3csIGNvbCksXG4gICAgICAgICAgICAgIHRoaXMuZ2V0Q2VsbEVsKHJvdywgY29sKSxcbiAgICAgICAgICAgICAgdmlld1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBHZW5lcmF0ZXMgdGhlIEhUTUwgZm9yIHRoZSA8dGQ+cyBvZiB0aGUgXCJudW1iZXJcIiByb3cgaW4gdGhlIERheUdyaWQncyBjb250ZW50IHNrZWxldG9uLlxuICAvLyBUaGUgbnVtYmVyIHJvdyB3aWxsIG9ubHkgZXhpc3QgaWYgZWl0aGVyIGRheSBudW1iZXJzIG9yIHdlZWsgbnVtYmVycyBhcmUgdHVybmVkIG9uLlxuICByZW5kZXJOdW1iZXJDZWxsSHRtbChkYXRlKSB7XG4gICAgaWYgKGRhdGUgPT0gbnVsbCkgcmV0dXJuICcnXG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcbiAgICBsZXQgaHRtbCA9ICcnXG4gICAgbGV0IGlzRGF0ZVZhbGlkID0gdGhpcy5kYXRlUHJvZmlsZS5hY3RpdmVVbnpvbmVkUmFuZ2UuY29udGFpbnNEYXRlKGRhdGUpIC8vIFRPRE86IGNhbGxlZCB0b28gZnJlcXVlbnRseS4gY2FjaGUgc29tZWhvdy5cbiAgICBsZXQgaXNEYXlOdW1iZXJWaXNpYmxlID0gdGhpcy5nZXRJc0RheU51bWJlcnNWaXNpYmxlKCkgJiYgaXNEYXRlVmFsaWRcbiAgICBsZXQgY2xhc3Nlc1xuICAgIGxldCB3ZWVrQ2FsY0ZpcnN0RG9XXG5cbiAgICBpZiAoIWlzRGF5TnVtYmVyVmlzaWJsZSAmJiAhdGhpcy5jZWxsV2Vla051bWJlcnNWaXNpYmxlKSB7XG4gICAgICAvLyBubyBudW1iZXJzIGluIGRheSBjZWxsICh3ZWVrIG51bWJlciBtdXN0IGJlIGFsb25nIHRoZSBzaWRlKVxuICAgICAgcmV0dXJuICc8dGQvPicgLy8gIHdpbGwgY3JlYXRlIGFuIGVtcHR5IHNwYWNlIGFib3ZlIGV2ZW50cyA6KFxuICAgIH1cblxuICAgIGNsYXNzZXMgPSB0aGlzLmdldERheUNsYXNzZXMoZGF0ZSlcbiAgICBjbGFzc2VzLnVuc2hpZnQoJ2ZjLWRheS10b3AnKVxuXG4gICAgaWYgKHRoaXMuY2VsbFdlZWtOdW1iZXJzVmlzaWJsZSkge1xuICAgICAgLy8gVG8gZGV0ZXJtaW5lIHRoZSBkYXkgb2Ygd2VlayBudW1iZXIgY2hhbmdlIHVuZGVyIElTTywgd2UgY2Fubm90XG4gICAgICAvLyByZWx5IG9uIG1vbWVudC5qcyBtZXRob2RzIHN1Y2ggYXMgZmlyc3REYXlPZldlZWsoKSBvciB3ZWVrZGF5KCksXG4gICAgICAvLyBiZWNhdXNlIHRoZXkgcmVseSBvbiB0aGUgbG9jYWxlJ3MgZG93IChwb3NzaWJseSBvdmVycmlkZGVuIGJ5XG4gICAgICAvLyBvdXIgZmlyc3REYXkgb3B0aW9uKSwgd2hpY2ggbWF5IG5vdCBiZSBNb25kYXkuIFdlIGNhbm5vdCBjaGFuZ2VcbiAgICAgIC8vIGRvdywgYmVjYXVzZSB0aGF0IHdvdWxkIGFmZmVjdCB0aGUgY2FsZW5kYXIgc3RhcnQgZGF5IGFzIHdlbGwuXG4gICAgICBpZiAoZGF0ZS5fbG9jYWxlLl9mdWxsQ2FsZW5kYXJfd2Vla0NhbGMgPT09ICdJU08nKSB7XG4gICAgICAgIHdlZWtDYWxjRmlyc3REb1cgPSAxICAvLyBNb25kYXkgYnkgSVNPIDg2MDEgZGVmaW5pdGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2Vla0NhbGNGaXJzdERvVyA9IGRhdGUuX2xvY2FsZS5maXJzdERheU9mV2VlaygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNsYXNzZXMuam9pbignICcpICsgJ1wiJyArXG4gICAgICAoaXNEYXRlVmFsaWQgP1xuICAgICAgICAgICcgZGF0YS1kYXRlPVwiJyArIGRhdGUuZm9ybWF0KCkgKyAnXCInIDpcbiAgICAgICAgICAnJ1xuICAgICAgKSArXG4gICAgICAnPidcblxuICAgIGlmICh0aGlzLmNlbGxXZWVrTnVtYmVyc1Zpc2libGUgJiYgKGRhdGUuZGF5KCkgPT09IHdlZWtDYWxjRmlyc3REb1cpKSB7XG4gICAgICBodG1sICs9IHZpZXcuYnVpbGRHb3RvQW5jaG9ySHRtbChcbiAgICAgICAgeyBkYXRlOiBkYXRlLCB0eXBlOiAnd2VlaycgfSxcbiAgICAgICAgeyAnY2xhc3MnOiAnZmMtd2Vlay1udW1iZXInIH0sXG4gICAgICAgIGRhdGUuZm9ybWF0KCd3JykgLy8gaW5uZXIgSFRNTFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChpc0RheU51bWJlclZpc2libGUpIHtcbiAgICAgIGh0bWwgKz0gdmlldy5idWlsZEdvdG9BbmNob3JIdG1sKFxuICAgICAgICBkYXRlLFxuICAgICAgICB7ICdjbGFzcyc6ICdmYy1kYXktbnVtYmVyJyB9LFxuICAgICAgICBkYXRlLmZvcm1hdCgnRCcpIC8vIGlubmVyIEhUTUxcbiAgICAgIClcbiAgICB9XG5cbiAgICBodG1sICs9ICc8L3RkPidcblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuXG4gIC8vIFNsaWNlcyB1cCB0aGUgZ2l2ZW4gc3BhbiAodW56b25lZCBzdGFydC9lbmQgd2l0aCBvdGhlciBtaXNjIGRhdGEpIGludG8gYW4gYXJyYXkgb2Ygc2VnbWVudHNcbiAgY29tcG9uZW50Rm9vdHByaW50VG9TZWdzKGNvbXBvbmVudEZvb3RwcmludCkge1xuICAgIGxldCBzZWdzID0gdGhpcy5zbGljZVJhbmdlQnlSb3coY29tcG9uZW50Rm9vdHByaW50LnVuem9uZWRSYW5nZSlcbiAgICBsZXQgaVxuICAgIGxldCBzZWdcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzZWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZWcgPSBzZWdzW2ldXG5cbiAgICAgIGlmICh0aGlzLmlzUlRMKSB7XG4gICAgICAgIHNlZy5sZWZ0Q29sID0gdGhpcy5kYXlzUGVyUm93IC0gMSAtIHNlZy5sYXN0Um93RGF5SW5kZXhcbiAgICAgICAgc2VnLnJpZ2h0Q29sID0gdGhpcy5kYXlzUGVyUm93IC0gMSAtIHNlZy5maXJzdFJvd0RheUluZGV4XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWcubGVmdENvbCA9IHNlZy5maXJzdFJvd0RheUluZGV4XG4gICAgICAgIHNlZy5yaWdodENvbCA9IHNlZy5sYXN0Um93RGF5SW5kZXhcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2Vnc1xuICB9XG5cblxufVxuXG5ZZWFyVGFibGVNaXhpbi5taXhPdmVyKFllYXJHcmlkKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1llYXJHcmlkLnRzIiwiaW1wb3J0IHsgTW9tZW50IH0gZnJvbSAnbW9tZW50J1xuaW1wb3J0IERheVRhYmxlTWl4aW4gZnJvbSBcIi4vRGF5VGFibGVNaXhpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyVGFibGVNaXhpbiBleHRlbmRzIERheVRhYmxlTWl4aW4ge1xuXG4gIHN0YXJ0RGF0ZTogTW9tZW50XG5cbiAgLy8gUG9wdWxhdGVzIGludGVybmFsIHZhcmlhYmxlcyB1c2VkIGZvciBkYXRlIGNhbGN1bGF0aW9uIGFuZCByZW5kZXJpbmdcbiAgdXBkYXRlRGF5VGFibGUoKSB7XG4gICAgbGV0IHQgPSAodGhpcyBhcyBhbnkpXG4gICAgbGV0IHZpZXcgPSB0LnZpZXdcbiAgICBsZXQgY2FsZW5kYXIgPSB2aWV3LmNhbGVuZGFyXG4gICAgdGhpcy5zdGFydERhdGUgPSBjYWxlbmRhci5tc1RvVXRjTW9tZW50KHQuZGF0ZVByb2ZpbGUucmVuZGVyVW56b25lZFJhbmdlLnN0YXJ0TXMsIHRydWUpXG4gIH1cblxuICByZW5kZXJCZ0NlbGxIdG1sKGRhdGUsIG90aGVyQXR0cnMpIHtcbiAgICBsZXQgdCA9ICh0aGlzIGFzIGFueSlcbiAgICBsZXQgdmlldyA9IHQudmlld1xuICAgIGxldCBpc0RhdGVWYWxpZCA9IGRhdGUgIT0gbnVsbFxuICAgIGxldCBjbGFzc2VzID0gaXNEYXRlVmFsaWQgPyB0LmdldERheUNsYXNzZXMoZGF0ZSkgOiBbXVxuXG4gICAgY2xhc3Nlcy51bnNoaWZ0KCdmYy1kYXknLCB2aWV3LmNhbGVuZGFyLnRoZW1lLmdldENsYXNzKCd3aWRnZXRDb250ZW50JykpXG5cbiAgICByZXR1cm4gJzx0ZCBjbGFzcz1cIicgKyBjbGFzc2VzLmpvaW4oJyAnKSArICdcIicgK1xuICAgICAgKGlzRGF0ZVZhbGlkID9cbiAgICAgICAgJyBkYXRhLWRhdGU9XCInICsgZGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSArICdcIicgOiAvLyBpZiBkYXRlIGhhcyBhIHRpbWUsIHdvbid0IGZvcm1hdCBpdFxuICAgICAgICAnJykgK1xuICAgICAgKG90aGVyQXR0cnMgP1xuICAgICAgICAnICcgKyBvdGhlckF0dHJzIDpcbiAgICAgICAgJycpICtcbiAgICAgICc+PC90ZD4nXG4gIH1cblxuICAvLyBEZXRlcm1pbmVzIGhvdyBtYW55IGNvbHVtbnMgdGhlcmUgc2hvdWxkIGJlIGluIHRoZSB0YWJsZVxuICBjb21wdXRlQ29sQ250KCkge1xuICAgIHJldHVybiAzMVxuICB9XG5cbiAgLy8gQ29tcHV0ZXMgdGhlIGFtYmlndW91c2x5LXRpbWVkIG1vbWVudCBmb3IgdGhlIGdpdmVuIGNlbGxcbiAgZ2V0Q2VsbERhdGUocm93LCBjb2wpIHtcbiAgICBsZXQgZGF0ZSA9IHRoaXMuc3RhcnREYXRlLmNsb25lKCkubW9udGgocm93KVxuICAgIGlmIChkYXRlLmRheXNJbk1vbnRoKCkgPiBjb2wpIHtcbiAgICAgIHJldHVybiBkYXRlLmRhdGUoY29sICsgMSlcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIEdpdmVuIGEgZGF0ZSwgcmV0dXJucyBpdHMgY2hyb25vbG9jaWFsIGNlbGwtaW5kZXggZnJvbSB0aGUgZmlyc3QgY2VsbCBvZiB0aGUgZ3JpZC5cbiAgLy8gSWYgdGhlIGRhdGUgbGllcyBiZXR3ZWVuIGNlbGxzIChiZWNhdXNlIG9mIGhpZGRlbkRheXMpLCByZXR1cm5zIGEgZmxvYXRpbmctcG9pbnQgdmFsdWUgYmV0d2VlbiBvZmZzZXRzLlxuICAvLyBJZiBiZWZvcmUgdGhlIGZpcnN0IG9mZnNldCwgcmV0dXJucyBhIG5lZ2F0aXZlIG51bWJlci5cbiAgLy8gSWYgYWZ0ZXIgdGhlIGxhc3Qgb2Zmc2V0LCByZXR1cm5zIGFuIG9mZnNldCBwYXN0IHRoZSBsYXN0IGNlbGwgb2Zmc2V0LlxuICAvLyBPbmx5IHdvcmtzIGZvciAqc3RhcnQqIGRhdGVzIG9mIGNlbGxzLiBXaWxsIG5vdCB3b3JrIGZvciBleGNsdXNpdmUgZW5kIGRhdGVzIGZvciBjZWxscy5cbiAgZ2V0RGF0ZURheUluZGV4KGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5tb250aCgpICogMzEgKyBkYXRlLmRhdGUoKSAtIDFcbiAgfVxuXG4gIHJlbmRlckhlYWRUckh0bWwoKSB7XG4gICAgcmV0dXJuICc8dHI+PC90cj4nXG4gIH1cblxuXG4gIC8vIFNsaWNlcyB1cCBhIGRhdGUgcmFuZ2UgaW50byBhIHNlZ21lbnQgZm9yIGV2ZXJ5IHdlZWstcm93IGl0IGludGVyc2VjdHMgd2l0aFxuICAvLyBDb250cmFyeSB0byBEYXlUYWJsZU1peGluOjpzbGljZVJhbmdlQnlSb3cgdGhpcyB2ZXJzaW9uIG11c3QgYmUgYXdhcmUgb2YgdGhlIGZhY3QgdGhhdCBub3QgZXZlcnkgbW9udGggaGFzIHRoZSBzYW1lIG51bWJlciBvZiBkYXlzXG4gIHNsaWNlUmFuZ2VCeVJvdyh1bnpvbmVkUmFuZ2UpIHtcbiAgICBsZXQgZGF5c1BlclJvdyA9IHRoaXMuZGF5c1BlclJvd1xuICAgIGxldCBub3JtYWxSYW5nZSA9ICh0aGlzIGFzIGFueSkudmlldy5jb21wdXRlRGF5UmFuZ2UodW56b25lZFJhbmdlKSAvLyBtYWtlIHdob2xlLWRheSByYW5nZSwgY29uc2lkZXJpbmcgbmV4dERheVRocmVzaG9sZFxuICAgIGxldCByYW5nZUZpcnN0ID0gdGhpcy5nZXREYXRlRGF5SW5kZXgobm9ybWFsUmFuZ2Uuc3RhcnQpIC8vIGluY2x1c2l2ZSBmaXJzdCBpbmRleFxuICAgIGxldCByYW5nZUxhc3QgPSB0aGlzLmdldERhdGVEYXlJbmRleChub3JtYWxSYW5nZS5lbmQuY2xvbmUoKS5zdWJ0cmFjdCgxLCAnZGF5cycpKSAvLyBpbmNsdXNpdmUgbGFzdCBpbmRleFxuICAgIGxldCBzZWdzID0gW11cbiAgICBsZXQgcm93XG4gICAgbGV0IHJvd0ZpcnN0XG4gICAgbGV0IHJvd0xhc3QgLy8gaW5jbHVzaXZlIGRheS1pbmRleCByYW5nZSBmb3IgY3VycmVudCByb3dcbiAgICBsZXQgc2VnRmlyc3RcbiAgICBsZXQgc2VnTGFzdCAvLyBpbmNsdXNpdmUgZGF5LWluZGV4IHJhbmdlIGZvciBzZWdtZW50XG5cbiAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHRoaXMucm93Q250OyByb3crKykge1xuICAgICAgcm93Rmlyc3QgPSByb3cgKiBkYXlzUGVyUm93XG4gICAgICByb3dMYXN0ID0gcm93Rmlyc3QgKyBub3JtYWxSYW5nZS5zdGFydC5tb250aChyb3cpLmRheXNJbk1vbnRoKCkgLSAxXG5cbiAgICAgIC8vIGludGVyc2VjdCBzZWdtZW50J3Mgb2Zmc2V0IHJhbmdlIHdpdGggdGhlIHJvdydzXG4gICAgICBzZWdGaXJzdCA9IE1hdGgubWF4KHJhbmdlRmlyc3QsIHJvd0ZpcnN0KVxuICAgICAgc2VnTGFzdCA9IE1hdGgubWluKHJhbmdlTGFzdCwgcm93TGFzdClcblxuICAgICAgLy8gZGVhbCB3aXRoIGluLWJldHdlZW4gaW5kaWNlc1xuICAgICAgc2VnRmlyc3QgPSBNYXRoLmNlaWwoc2VnRmlyc3QpIC8vIGluLWJldHdlZW4gc3RhcnRzIHJvdW5kIHRvIG5leHQgY2VsbFxuICAgICAgc2VnTGFzdCA9IE1hdGguZmxvb3Ioc2VnTGFzdCkgLy8gaW4tYmV0d2VlbiBlbmRzIHJvdW5kIHRvIHByZXYgY2VsbFxuXG4gICAgICBpZiAoc2VnRmlyc3QgPD0gc2VnTGFzdCkgeyAvLyB3YXMgdGhlcmUgYW55IGludGVyc2VjdGlvbiB3aXRoIHRoZSBjdXJyZW50IHJvdz9cbiAgICAgICAgc2Vncy5wdXNoKHtcbiAgICAgICAgICByb3c6IHJvdyxcblxuICAgICAgICAgIC8vIG5vcm1hbGl6ZSB0byBzdGFydCBvZiByb3dcbiAgICAgICAgICBmaXJzdFJvd0RheUluZGV4OiBzZWdGaXJzdCAtIHJvd0ZpcnN0LFxuICAgICAgICAgIGxhc3RSb3dEYXlJbmRleDogc2VnTGFzdCAtIHJvd0ZpcnN0LFxuXG4gICAgICAgICAgLy8gbXVzdCBiZSBtYXRjaGluZyBpbnRlZ2VycyB0byBiZSB0aGUgc2VnbWVudCdzIHN0YXJ0L2VuZFxuICAgICAgICAgIGlzU3RhcnQ6IHNlZ0ZpcnN0ID09PSByYW5nZUZpcnN0LFxuICAgICAgICAgIGlzRW5kOiBzZWdMYXN0ID09PSByYW5nZUxhc3RcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2Vnc1xuICB9XG5cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1llYXJUYWJsZU1peGluLnRzIiwiaW1wb3J0IHsgaHRtbEVzY2FwZSwgZGF5SURzIH0gZnJvbSAnZnVsbGNhbGVuZGFyJ1xuaW1wb3J0IE1peGluIGZyb20gXCIuL01peGluXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5VGFibGVJbnRlcmZhY2Uge1xuICBkYXlEYXRlczogYW55XG4gIGRheXNQZXJSb3c6IGFueVxuICByb3dDbnQ6IGFueVxuICBjb2xDbnQ6IGFueVxuICB1cGRhdGVEYXlUYWJsZSgpXG4gIHJlbmRlckhlYWRIdG1sKClcbiAgcmVuZGVyQmdUckh0bWwocm93KVxuICBib29rZW5kQ2VsbHModHJFbClcbiAgZ2V0Q2VsbERhdGUocm93LCBjb2wpXG4gIGdldENlbGxSYW5nZShyb3csIGNvbClcbiAgc2xpY2VSYW5nZUJ5RGF5KHVuem9uZWRSYW5nZSlcbiAgc2xpY2VSYW5nZUJ5Um93KHVuem9uZWRSYW5nZSlcbiAgcmVuZGVySW50cm9IdG1sKClcbn1cblxuLypcbkEgc2V0IG9mIHJlbmRlcmluZyBhbmQgZGF0ZS1yZWxhdGVkIG1ldGhvZHMgZm9yIGEgdmlzdWFsIGNvbXBvbmVudCBjb21wcmlzZWQgb2Ygb25lIG9yIG1vcmUgcm93cyBvZiBkYXkgY29sdW1ucy5cblByZXJlcXVpc2l0ZTogdGhlIG9iamVjdCBiZWluZyBtaXhlZCBpbnRvIG5lZWRzIHRvIGJlIGEgKkdyaWQqXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5VGFibGVNaXhpbiBleHRlbmRzIE1peGluIGltcGxlbWVudHMgRGF5VGFibGVJbnRlcmZhY2Uge1xuXG4gIGJyZWFrT25XZWVrczogYm9vbGVhbiAvLyBzaG91bGQgY3JlYXRlIGEgbmV3IHJvdyBmb3IgZWFjaCB3ZWVrPyBub3Qgc3BlY2lmaWVkLCBzbyBkZWZhdWx0IGlzIEZBTFNZXG4gIGRheURhdGVzOiBhbnkgLy8gd2hvbGUtZGF5IGRhdGVzIGZvciBlYWNoIGNvbHVtbi4gbGVmdCB0byByaWdodFxuICBkYXlJbmRpY2VzOiBhbnkgLy8gZm9yIGVhY2ggZGF5IGZyb20gc3RhcnQsIHRoZSBvZmZzZXRcbiAgZGF5c1BlclJvdzogYW55XG4gIHJvd0NudDogYW55XG4gIGNvbENudDogYW55XG4gIGNvbEhlYWRGb3JtYXQ6IGFueVxuXG5cbiAgLy8gUG9wdWxhdGVzIGludGVybmFsIHZhcmlhYmxlcyB1c2VkIGZvciBkYXRlIGNhbGN1bGF0aW9uIGFuZCByZW5kZXJpbmdcbiAgdXBkYXRlRGF5VGFibGUoKSB7XG4gICAgbGV0IHQgPSAodGhpcyBhcyBhbnkpXG4gICAgbGV0IHZpZXcgPSB0LnZpZXdcbiAgICBsZXQgY2FsZW5kYXIgPSB2aWV3LmNhbGVuZGFyXG4gICAgbGV0IGRhdGUgPSBjYWxlbmRhci5tc1RvVXRjTW9tZW50KHQuZGF0ZVByb2ZpbGUucmVuZGVyVW56b25lZFJhbmdlLnN0YXJ0TXMsIHRydWUpXG4gICAgbGV0IGVuZCA9IGNhbGVuZGFyLm1zVG9VdGNNb21lbnQodC5kYXRlUHJvZmlsZS5yZW5kZXJVbnpvbmVkUmFuZ2UuZW5kTXMsIHRydWUpXG4gICAgbGV0IGRheUluZGV4ID0gLTFcbiAgICBsZXQgZGF5SW5kaWNlcyA9IFtdXG4gICAgbGV0IGRheURhdGVzID0gW11cbiAgICBsZXQgZGF5c1BlclJvd1xuICAgIGxldCBmaXJzdERheVxuICAgIGxldCByb3dDbnRcblxuICAgIHdoaWxlIChkYXRlLmlzQmVmb3JlKGVuZCkpIHsgLy8gbG9vcCBlYWNoIGRheSBmcm9tIHN0YXJ0IHRvIGVuZFxuICAgICAgaWYgKHZpZXcuaXNIaWRkZW5EYXkoZGF0ZSkpIHtcbiAgICAgICAgZGF5SW5kaWNlcy5wdXNoKGRheUluZGV4ICsgMC41KSAvLyBtYXJrIHRoYXQgaXQncyBiZXR3ZWVuIGluZGljZXNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRheUluZGV4KytcbiAgICAgICAgZGF5SW5kaWNlcy5wdXNoKGRheUluZGV4KVxuICAgICAgICBkYXlEYXRlcy5wdXNoKGRhdGUuY2xvbmUoKSlcbiAgICAgIH1cbiAgICAgIGRhdGUuYWRkKDEsICdkYXlzJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5icmVha09uV2Vla3MpIHtcbiAgICAgIC8vIGNvdW50IGNvbHVtbnMgdW50aWwgdGhlIGRheS1vZi13ZWVrIHJlcGVhdHNcbiAgICAgIGZpcnN0RGF5ID0gZGF5RGF0ZXNbMF0uZGF5KClcbiAgICAgIGZvciAoZGF5c1BlclJvdyA9IDE7IGRheXNQZXJSb3cgPCBkYXlEYXRlcy5sZW5ndGg7IGRheXNQZXJSb3crKykge1xuICAgICAgICBpZiAoZGF5RGF0ZXNbZGF5c1BlclJvd10uZGF5KCkgPT09IGZpcnN0RGF5KSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcm93Q250ID0gTWF0aC5jZWlsKGRheURhdGVzLmxlbmd0aCAvIGRheXNQZXJSb3cpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJvd0NudCA9IDFcbiAgICAgIGRheXNQZXJSb3cgPSBkYXlEYXRlcy5sZW5ndGhcbiAgICB9XG5cbiAgICB0aGlzLmRheURhdGVzID0gZGF5RGF0ZXNcbiAgICB0aGlzLmRheUluZGljZXMgPSBkYXlJbmRpY2VzXG4gICAgdGhpcy5kYXlzUGVyUm93ID0gZGF5c1BlclJvd1xuICAgIHRoaXMucm93Q250ID0gcm93Q250XG5cbiAgICB0aGlzLnVwZGF0ZURheVRhYmxlQ29scygpXG4gIH1cblxuXG4gIC8vIENvbXB1dGVzIGFuZCBhc3NpZ25lZCB0aGUgY29sQ250IHByb3BlcnR5IGFuZCB1cGRhdGVzIGFueSBvcHRpb25zIHRoYXQgbWF5IGJlIGNvbXB1dGVkIGZyb20gaXRcbiAgdXBkYXRlRGF5VGFibGVDb2xzKCkge1xuICAgIHRoaXMuY29sQ250ID0gdGhpcy5jb21wdXRlQ29sQ250KClcbiAgICB0aGlzLmNvbEhlYWRGb3JtYXQgPVxuICAgICAgKHRoaXMgYXMgYW55KS5vcHQoJ2NvbHVtbkhlYWRlckZvcm1hdCcpIHx8XG4gICAgICAodGhpcyBhcyBhbnkpLm9wdCgnY29sdW1uRm9ybWF0JykgfHwgLy8gZGVwcmVjYXRlZFxuICAgICAgdGhpcy5jb21wdXRlQ29sSGVhZEZvcm1hdCgpXG4gIH1cblxuXG4gIC8vIERldGVybWluZXMgaG93IG1hbnkgY29sdW1ucyB0aGVyZSBzaG91bGQgYmUgaW4gdGhlIHRhYmxlXG4gIGNvbXB1dGVDb2xDbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF5c1BlclJvd1xuICB9XG5cblxuICAvLyBDb21wdXRlcyB0aGUgYW1iaWd1b3VzbHktdGltZWQgbW9tZW50IGZvciB0aGUgZ2l2ZW4gY2VsbFxuICBnZXRDZWxsRGF0ZShyb3csIGNvbCkge1xuICAgIHJldHVybiB0aGlzLmRheURhdGVzW1xuICAgICAgICB0aGlzLmdldENlbGxEYXlJbmRleChyb3csIGNvbClcbiAgICAgIF0uY2xvbmUoKVxuICB9XG5cblxuICAvLyBDb21wdXRlcyB0aGUgYW1iaWd1b3VzbHktdGltZWQgZGF0ZSByYW5nZSBmb3IgdGhlIGdpdmVuIGNlbGxcbiAgZ2V0Q2VsbFJhbmdlKHJvdywgY29sKSB7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5nZXRDZWxsRGF0ZShyb3csIGNvbClcbiAgICBsZXQgZW5kID0gc3RhcnQuY2xvbmUoKS5hZGQoMSwgJ2RheXMnKVxuXG4gICAgcmV0dXJuIHsgc3RhcnQ6IHN0YXJ0LCBlbmQ6IGVuZCB9XG4gIH1cblxuXG4gIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXkgY2VsbHMsIGNocm9ub2xvZ2ljYWxseSwgZnJvbSB0aGUgZmlyc3Qgb2YgdGhlIGdyaWQgKDAtYmFzZWQpXG4gIGdldENlbGxEYXlJbmRleChyb3csIGNvbCkge1xuICAgIHJldHVybiByb3cgKiB0aGlzLmRheXNQZXJSb3cgKyB0aGlzLmdldENvbERheUluZGV4KGNvbClcbiAgfVxuXG5cbiAgLy8gUmV0dXJucyB0aGUgbnVtbmVyIG9mIGRheSBjZWxscywgY2hyb25vbG9naWNhbGx5LCBmcm9tIHRoZSBmaXJzdCBjZWxsIGluICphbnkgZ2l2ZW4gcm93KlxuICBnZXRDb2xEYXlJbmRleChjb2wpIHtcbiAgICBpZiAoKHRoaXMgYXMgYW55KS5pc1JUTCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29sQ250IC0gMSAtIGNvbFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29sXG4gICAgfVxuICB9XG5cblxuICAvLyBHaXZlbiBhIGRhdGUsIHJldHVybnMgaXRzIGNocm9ub2xvY2lhbCBjZWxsLWluZGV4IGZyb20gdGhlIGZpcnN0IGNlbGwgb2YgdGhlIGdyaWQuXG4gIC8vIElmIHRoZSBkYXRlIGxpZXMgYmV0d2VlbiBjZWxscyAoYmVjYXVzZSBvZiBoaWRkZW5EYXlzKSwgcmV0dXJucyBhIGZsb2F0aW5nLXBvaW50IHZhbHVlIGJldHdlZW4gb2Zmc2V0cy5cbiAgLy8gSWYgYmVmb3JlIHRoZSBmaXJzdCBvZmZzZXQsIHJldHVybnMgYSBuZWdhdGl2ZSBudW1iZXIuXG4gIC8vIElmIGFmdGVyIHRoZSBsYXN0IG9mZnNldCwgcmV0dXJucyBhbiBvZmZzZXQgcGFzdCB0aGUgbGFzdCBjZWxsIG9mZnNldC5cbiAgLy8gT25seSB3b3JrcyBmb3IgKnN0YXJ0KiBkYXRlcyBvZiBjZWxscy4gV2lsbCBub3Qgd29yayBmb3IgZXhjbHVzaXZlIGVuZCBkYXRlcyBmb3IgY2VsbHMuXG4gIGdldERhdGVEYXlJbmRleChkYXRlKSB7XG4gICAgbGV0IGRheUluZGljZXMgPSB0aGlzLmRheUluZGljZXNcbiAgICBsZXQgZGF5T2Zmc2V0ID0gZGF0ZS5kaWZmKHRoaXMuZGF5RGF0ZXNbMF0sICdkYXlzJylcblxuICAgIGlmIChkYXlPZmZzZXQgPCAwKSB7XG4gICAgICByZXR1cm4gZGF5SW5kaWNlc1swXSAtIDFcbiAgICB9IGVsc2UgaWYgKGRheU9mZnNldCA+PSBkYXlJbmRpY2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGRheUluZGljZXNbZGF5SW5kaWNlcy5sZW5ndGggLSAxXSArIDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRheUluZGljZXNbZGF5T2Zmc2V0XVxuICAgIH1cbiAgfVxuXG5cbiAgLyogT3B0aW9uc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgLy8gQ29tcHV0ZXMgYSBkZWZhdWx0IGNvbHVtbiBoZWFkZXIgZm9ybWF0dGluZyBzdHJpbmcgaWYgYGNvbEZvcm1hdGAgaXMgbm90IGV4cGxpY2l0bHkgZGVmaW5lZFxuICBjb21wdXRlQ29sSGVhZEZvcm1hdCgpIHtcbiAgICAvLyBpZiBtb3JlIHRoYW4gb25lIHdlZWsgcm93LCBvciBpZiB0aGVyZSBhcmUgYSBsb3Qgb2YgY29sdW1ucyB3aXRoIG5vdCBtdWNoIHNwYWNlLFxuICAgIC8vIHB1dCBqdXN0IHRoZSBkYXkgbnVtYmVycyB3aWxsIGJlIGluIGVhY2ggY2VsbFxuICAgIGlmICh0aGlzLnJvd0NudCA+IDEgfHwgdGhpcy5jb2xDbnQgPiAxMCkge1xuICAgICAgcmV0dXJuICdkZGQnIC8vIFwiU2F0XCJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sQ250ID4gMSkge1xuICAgICAgcmV0dXJuICh0aGlzIGFzIGFueSkub3B0KCdkYXlPZk1vbnRoRm9ybWF0JykgLy8gXCJTYXQgMTIvMTBcIlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2RkZGQnIC8vIFwiU2F0dXJkYXlcIlxuICAgIH1cbiAgfVxuXG5cbiAgLyogU2xpY2luZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgLy8gU2xpY2VzIHVwIGEgZGF0ZSByYW5nZSBpbnRvIGEgc2VnbWVudCBmb3IgZXZlcnkgd2Vlay1yb3cgaXQgaW50ZXJzZWN0cyB3aXRoXG4gIHNsaWNlUmFuZ2VCeVJvdyh1bnpvbmVkUmFuZ2UpIHtcbiAgICBsZXQgZGF5c1BlclJvdyA9IHRoaXMuZGF5c1BlclJvd1xuICAgIGxldCBub3JtYWxSYW5nZSA9ICh0aGlzIGFzIGFueSkudmlldy5jb21wdXRlRGF5UmFuZ2UodW56b25lZFJhbmdlKSAvLyBtYWtlIHdob2xlLWRheSByYW5nZSwgY29uc2lkZXJpbmcgbmV4dERheVRocmVzaG9sZFxuICAgIGxldCByYW5nZUZpcnN0ID0gdGhpcy5nZXREYXRlRGF5SW5kZXgobm9ybWFsUmFuZ2Uuc3RhcnQpIC8vIGluY2x1c2l2ZSBmaXJzdCBpbmRleFxuICAgIGxldCByYW5nZUxhc3QgPSB0aGlzLmdldERhdGVEYXlJbmRleChub3JtYWxSYW5nZS5lbmQuY2xvbmUoKS5zdWJ0cmFjdCgxLCAnZGF5cycpKSAvLyBpbmNsdXNpdmUgbGFzdCBpbmRleFxuICAgIGxldCBzZWdzID0gW11cbiAgICBsZXQgcm93XG4gICAgbGV0IHJvd0ZpcnN0XG4gICAgbGV0IHJvd0xhc3QgLy8gaW5jbHVzaXZlIGRheS1pbmRleCByYW5nZSBmb3IgY3VycmVudCByb3dcbiAgICBsZXQgc2VnRmlyc3RcbiAgICBsZXQgc2VnTGFzdCAvLyBpbmNsdXNpdmUgZGF5LWluZGV4IHJhbmdlIGZvciBzZWdtZW50XG5cbiAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHRoaXMucm93Q250OyByb3crKykge1xuICAgICAgcm93Rmlyc3QgPSByb3cgKiBkYXlzUGVyUm93XG4gICAgICByb3dMYXN0ID0gcm93Rmlyc3QgKyBkYXlzUGVyUm93IC0gMVxuXG4gICAgICAvLyBpbnRlcnNlY3Qgc2VnbWVudCdzIG9mZnNldCByYW5nZSB3aXRoIHRoZSByb3cnc1xuICAgICAgc2VnRmlyc3QgPSBNYXRoLm1heChyYW5nZUZpcnN0LCByb3dGaXJzdClcbiAgICAgIHNlZ0xhc3QgPSBNYXRoLm1pbihyYW5nZUxhc3QsIHJvd0xhc3QpXG5cbiAgICAgIC8vIGRlYWwgd2l0aCBpbi1iZXR3ZWVuIGluZGljZXNcbiAgICAgIHNlZ0ZpcnN0ID0gTWF0aC5jZWlsKHNlZ0ZpcnN0KSAvLyBpbi1iZXR3ZWVuIHN0YXJ0cyByb3VuZCB0byBuZXh0IGNlbGxcbiAgICAgIHNlZ0xhc3QgPSBNYXRoLmZsb29yKHNlZ0xhc3QpIC8vIGluLWJldHdlZW4gZW5kcyByb3VuZCB0byBwcmV2IGNlbGxcblxuICAgICAgaWYgKHNlZ0ZpcnN0IDw9IHNlZ0xhc3QpIHsgLy8gd2FzIHRoZXJlIGFueSBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgY3VycmVudCByb3c/XG4gICAgICAgIHNlZ3MucHVzaCh7XG4gICAgICAgICAgcm93OiByb3csXG5cbiAgICAgICAgICAvLyBub3JtYWxpemUgdG8gc3RhcnQgb2Ygcm93XG4gICAgICAgICAgZmlyc3RSb3dEYXlJbmRleDogc2VnRmlyc3QgLSByb3dGaXJzdCxcbiAgICAgICAgICBsYXN0Um93RGF5SW5kZXg6IHNlZ0xhc3QgLSByb3dGaXJzdCxcblxuICAgICAgICAgIC8vIG11c3QgYmUgbWF0Y2hpbmcgaW50ZWdlcnMgdG8gYmUgdGhlIHNlZ21lbnQncyBzdGFydC9lbmRcbiAgICAgICAgICBpc1N0YXJ0OiBzZWdGaXJzdCA9PT0gcmFuZ2VGaXJzdCxcbiAgICAgICAgICBpc0VuZDogc2VnTGFzdCA9PT0gcmFuZ2VMYXN0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ3NcbiAgfVxuXG5cbiAgLy8gU2xpY2VzIHVwIGEgZGF0ZSByYW5nZSBpbnRvIGEgc2VnbWVudCBmb3IgZXZlcnkgZGF5LWNlbGwgaXQgaW50ZXJzZWN0cyB3aXRoLlxuICAvLyBUT0RPOiBtYWtlIG1vcmUgRFJZIHdpdGggc2xpY2VSYW5nZUJ5Um93IHNvbWVob3cuXG4gIHNsaWNlUmFuZ2VCeURheSh1bnpvbmVkUmFuZ2UpIHtcbiAgICBsZXQgZGF5c1BlclJvdyA9IHRoaXMuZGF5c1BlclJvd1xuICAgIGxldCBub3JtYWxSYW5nZSA9ICh0aGlzIGFzIGFueSkudmlldy5jb21wdXRlRGF5UmFuZ2UodW56b25lZFJhbmdlKSAvLyBtYWtlIHdob2xlLWRheSByYW5nZSwgY29uc2lkZXJpbmcgbmV4dERheVRocmVzaG9sZFxuICAgIGxldCByYW5nZUZpcnN0ID0gdGhpcy5nZXREYXRlRGF5SW5kZXgobm9ybWFsUmFuZ2Uuc3RhcnQpIC8vIGluY2x1c2l2ZSBmaXJzdCBpbmRleFxuICAgIGxldCByYW5nZUxhc3QgPSB0aGlzLmdldERhdGVEYXlJbmRleChub3JtYWxSYW5nZS5lbmQuY2xvbmUoKS5zdWJ0cmFjdCgxLCAnZGF5cycpKSAvLyBpbmNsdXNpdmUgbGFzdCBpbmRleFxuICAgIGxldCBzZWdzID0gW11cbiAgICBsZXQgcm93XG4gICAgbGV0IHJvd0ZpcnN0XG4gICAgbGV0IHJvd0xhc3QgLy8gaW5jbHVzaXZlIGRheS1pbmRleCByYW5nZSBmb3IgY3VycmVudCByb3dcbiAgICBsZXQgaVxuICAgIGxldCBzZWdGaXJzdFxuICAgIGxldCBzZWdMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIHNlZ21lbnRcblxuICAgIGZvciAocm93ID0gMDsgcm93IDwgdGhpcy5yb3dDbnQ7IHJvdysrKSB7XG4gICAgICByb3dGaXJzdCA9IHJvdyAqIGRheXNQZXJSb3dcbiAgICAgIHJvd0xhc3QgPSByb3dGaXJzdCArIGRheXNQZXJSb3cgLSAxXG5cbiAgICAgIGZvciAoaSA9IHJvd0ZpcnN0OyBpIDw9IHJvd0xhc3Q7IGkrKykge1xuXG4gICAgICAgIC8vIGludGVyc2VjdCBzZWdtZW50J3Mgb2Zmc2V0IHJhbmdlIHdpdGggdGhlIHJvdydzXG4gICAgICAgIHNlZ0ZpcnN0ID0gTWF0aC5tYXgocmFuZ2VGaXJzdCwgaSlcbiAgICAgICAgc2VnTGFzdCA9IE1hdGgubWluKHJhbmdlTGFzdCwgaSlcblxuICAgICAgICAvLyBkZWFsIHdpdGggaW4tYmV0d2VlbiBpbmRpY2VzXG4gICAgICAgIHNlZ0ZpcnN0ID0gTWF0aC5jZWlsKHNlZ0ZpcnN0KSAvLyBpbi1iZXR3ZWVuIHN0YXJ0cyByb3VuZCB0byBuZXh0IGNlbGxcbiAgICAgICAgc2VnTGFzdCA9IE1hdGguZmxvb3Ioc2VnTGFzdCkgLy8gaW4tYmV0d2VlbiBlbmRzIHJvdW5kIHRvIHByZXYgY2VsbFxuXG4gICAgICAgIGlmIChzZWdGaXJzdCA8PSBzZWdMYXN0KSB7IC8vIHdhcyB0aGVyZSBhbnkgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGN1cnJlbnQgcm93P1xuICAgICAgICAgIHNlZ3MucHVzaCh7XG4gICAgICAgICAgICByb3c6IHJvdyxcblxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIHRvIHN0YXJ0IG9mIHJvd1xuICAgICAgICAgICAgZmlyc3RSb3dEYXlJbmRleDogc2VnRmlyc3QgLSByb3dGaXJzdCxcbiAgICAgICAgICAgIGxhc3RSb3dEYXlJbmRleDogc2VnTGFzdCAtIHJvd0ZpcnN0LFxuXG4gICAgICAgICAgICAvLyBtdXN0IGJlIG1hdGNoaW5nIGludGVnZXJzIHRvIGJlIHRoZSBzZWdtZW50J3Mgc3RhcnQvZW5kXG4gICAgICAgICAgICBpc1N0YXJ0OiBzZWdGaXJzdCA9PT0gcmFuZ2VGaXJzdCxcbiAgICAgICAgICAgIGlzRW5kOiBzZWdMYXN0ID09PSByYW5nZUxhc3RcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ3NcbiAgfVxuXG5cbiAgLyogSGVhZGVyIFJlbmRlcmluZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgcmVuZGVySGVhZEh0bWwoKSB7XG4gICAgbGV0IHRoZW1lID0gKHRoaXMgYXMgYW55KS52aWV3LmNhbGVuZGFyLnRoZW1lXG5cbiAgICByZXR1cm4gJycgK1xuICAgICAgJzxkaXYgY2xhc3M9XCJmYy1yb3cgJyArIHRoZW1lLmdldENsYXNzKCdoZWFkZXJSb3cnKSArICdcIj4nICtcbiAgICAgICAgJzx0YWJsZSBjbGFzcz1cIicgKyB0aGVtZS5nZXRDbGFzcygndGFibGVHcmlkJykgKyAnXCI+JyArXG4gICAgICAgICAgJzx0aGVhZD4nICtcbiAgICAgICAgICAgIHRoaXMucmVuZGVySGVhZFRySHRtbCgpICtcbiAgICAgICAgICAnPC90aGVhZD4nICtcbiAgICAgICAgJzwvdGFibGU+JyArXG4gICAgICAnPC9kaXY+J1xuICB9XG5cblxuICByZW5kZXJIZWFkSW50cm9IdG1sKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlckludHJvSHRtbCgpIC8vIGZhbGwgYmFjayB0byBnZW5lcmljXG4gIH1cblxuXG4gIHJlbmRlckhlYWRUckh0bWwoKSB7XG4gICAgcmV0dXJuICcnICtcbiAgICAgICc8dHI+JyArXG4gICAgICAgICgodGhpcyBhcyBhbnkpLmlzUlRMID8gJycgOiB0aGlzLnJlbmRlckhlYWRJbnRyb0h0bWwoKSkgK1xuICAgICAgICB0aGlzLnJlbmRlckhlYWREYXRlQ2VsbHNIdG1sKCkgK1xuICAgICAgICAoKHRoaXMgYXMgYW55KS5pc1JUTCA/IHRoaXMucmVuZGVySGVhZEludHJvSHRtbCgpIDogJycpICtcbiAgICAgICc8L3RyPidcbiAgfVxuXG5cbiAgcmVuZGVySGVhZERhdGVDZWxsc0h0bWwoKSB7XG4gICAgbGV0IGh0bWxzID0gW11cbiAgICBsZXQgY29sXG4gICAgbGV0IGRhdGVcblxuICAgIGZvciAoY29sID0gMDsgY29sIDwgdGhpcy5jb2xDbnQ7IGNvbCsrKSB7XG4gICAgICBkYXRlID0gdGhpcy5nZXRDZWxsRGF0ZSgwLCBjb2wpXG4gICAgICBodG1scy5wdXNoKCh0aGlzIGFzIGFueSkucmVuZGVySGVhZERhdGVDZWxsSHRtbChkYXRlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbHMuam9pbignJylcbiAgfVxuXG5cbiAgLy8gVE9ETzogd2hlbiBpbnRlcm5hbEFwaVZlcnNpb24sIGFjY2VwdCBhbiBvYmplY3QgZm9yIEhUTUwgYXR0cmlidXRlc1xuICAvLyAoY29sc3BhbiBzaG91bGQgYmUgbm8gZGlmZmVyZW50KVxuICByZW5kZXJIZWFkRGF0ZUNlbGxIdG1sKGRhdGUsIGNvbHNwYW4sIG90aGVyQXR0cnMpIHtcbiAgICBsZXQgdCA9ICh0aGlzIGFzIGFueSlcbiAgICBsZXQgdmlldyA9IHQudmlld1xuICAgIGxldCBpc0RhdGVWYWxpZCA9IHQuZGF0ZVByb2ZpbGUuYWN0aXZlVW56b25lZFJhbmdlLmNvbnRhaW5zRGF0ZShkYXRlKSAvLyBUT0RPOiBjYWxsZWQgdG9vIGZyZXF1ZW50bHkuIGNhY2hlIHNvbWVob3cuXG4gICAgbGV0IGNsYXNzTmFtZXMgPSBbXG4gICAgICAnZmMtZGF5LWhlYWRlcicsXG4gICAgICB2aWV3LmNhbGVuZGFyLnRoZW1lLmdldENsYXNzKCd3aWRnZXRIZWFkZXInKVxuICAgIF1cbiAgICBsZXQgaW5uZXJIdG1sXG5cbiAgICBpZiAodHlwZW9mIHQub3B0KCdjb2x1bW5IZWFkZXJIdG1sJykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlubmVySHRtbCA9IHQub3B0KCdjb2x1bW5IZWFkZXJIdG1sJykoZGF0ZSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0Lm9wdCgnY29sdW1uSGVhZGVyVGV4dCcpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbm5lckh0bWwgPSBodG1sRXNjYXBlKHQub3B0KCdjb2x1bW5IZWFkZXJUZXh0JykoZGF0ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlubmVySHRtbCA9IGh0bWxFc2NhcGUoZGF0ZS5mb3JtYXQodC5jb2xIZWFkRm9ybWF0KSlcbiAgICB9XG5cbiAgICAvLyBpZiBvbmx5IG9uZSByb3cgb2YgZGF5cywgdGhlIGNsYXNzTmFtZXMgb24gdGhlIGhlYWRlciBjYW4gcmVwcmVzZW50IHRoZSBzcGVjaWZpYyBkYXlzIGJlbmVhdGhcbiAgICBpZiAodC5yb3dDbnQgPT09IDEpIHtcbiAgICAgIGNsYXNzTmFtZXMgPSBjbGFzc05hbWVzLmNvbmNhdChcbiAgICAgICAgLy8gaW5jbHVkZXMgdGhlIGRheS1vZi13ZWVrIGNsYXNzXG4gICAgICAgIC8vIG5vVGhlbWVIaWdobGlnaHQ9dHJ1ZSAoZG9uJ3QgaGlnaGxpZ2h0IHRoZSBoZWFkZXIpXG4gICAgICAgIHQuZ2V0RGF5Q2xhc3NlcyhkYXRlLCB0cnVlKVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2ZjLScgKyBkYXlJRHNbZGF0ZS5kYXkoKV0pIC8vIG9ubHkgYWRkIHRoZSBkYXktb2Ytd2VlayBjbGFzc1xuICAgIH1cblxuICAgIHJldHVybiAnJyArXG4gICAgICAnPHRoIGNsYXNzPVwiJyArIGNsYXNzTmFtZXMuam9pbignICcpICsgJ1wiJyArXG4gICAgICAgICgoaXNEYXRlVmFsaWQgJiYgdC5yb3dDbnQpID09PSAxID9cbiAgICAgICAgICAnIGRhdGEtZGF0ZT1cIicgKyBkYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpICsgJ1wiJyA6XG4gICAgICAgICAgJycpICtcbiAgICAgICAgKGNvbHNwYW4gPiAxID9cbiAgICAgICAgICAnIGNvbHNwYW49XCInICsgY29sc3BhbiArICdcIicgOlxuICAgICAgICAgICcnKSArXG4gICAgICAgIChvdGhlckF0dHJzID9cbiAgICAgICAgICAnICcgKyBvdGhlckF0dHJzIDpcbiAgICAgICAgICAnJykgK1xuICAgICAgICAnPicgK1xuICAgICAgICAoaXNEYXRlVmFsaWQgP1xuICAgICAgICAgIC8vIGRvbid0IG1ha2UgYSBsaW5rIGlmIHRoZSBoZWFkaW5nIGNvdWxkIHJlcHJlc2VudCBtdWx0aXBsZSBkYXlzLCBvciBpZiB0aGVyZSdzIG9ubHkgb25lIGRheSAoZm9yY2VPZmYpXG4gICAgICAgICAgdmlldy5idWlsZEdvdG9BbmNob3JIdG1sKFxuICAgICAgICAgICAgeyBkYXRlOiBkYXRlLCBmb3JjZU9mZjogdC5yb3dDbnQgPiAxIHx8IHQuY29sQ250ID09PSAxIH0sXG4gICAgICAgICAgICBpbm5lckh0bWxcbiAgICAgICAgICApIDpcbiAgICAgICAgICAvLyBpZiBub3QgdmFsaWQsIGRpc3BsYXkgdGV4dCwgYnV0IG5vIGxpbmtcbiAgICAgICAgICBpbm5lckh0bWxcbiAgICAgICAgKSArXG4gICAgICAnPC90aD4nXG4gIH1cblxuXG4gIC8qIEJhY2tncm91bmQgUmVuZGVyaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuICByZW5kZXJCZ1RySHRtbChyb3cpIHtcbiAgICByZXR1cm4gJycgK1xuICAgICAgJzx0cj4nICtcbiAgICAgICAgKCh0aGlzIGFzIGFueSkuaXNSVEwgPyAnJyA6IHRoaXMucmVuZGVyQmdJbnRyb0h0bWwocm93KSkgK1xuICAgICAgICB0aGlzLnJlbmRlckJnQ2VsbHNIdG1sKHJvdykgK1xuICAgICAgICAoKHRoaXMgYXMgYW55KS5pc1JUTCA/IHRoaXMucmVuZGVyQmdJbnRyb0h0bWwocm93KSA6ICcnKSArXG4gICAgICAnPC90cj4nXG4gIH1cblxuXG4gIHJlbmRlckJnSW50cm9IdG1sKHJvdykge1xuICAgIHJldHVybiB0aGlzLnJlbmRlckludHJvSHRtbCgpIC8vIGZhbGwgYmFjayB0byBnZW5lcmljXG4gIH1cblxuXG4gIHJlbmRlckJnQ2VsbHNIdG1sKHJvdykge1xuICAgIGxldCBodG1scyA9IFtdXG4gICAgbGV0IGNvbFxuICAgIGxldCBkYXRlXG5cbiAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHRoaXMuY29sQ250OyBjb2wrKykge1xuICAgICAgZGF0ZSA9IHRoaXMuZ2V0Q2VsbERhdGUocm93LCBjb2wpXG4gICAgICBodG1scy5wdXNoKCh0aGlzIGFzIGFueSkucmVuZGVyQmdDZWxsSHRtbChkYXRlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbHMuam9pbignJylcbiAgfVxuXG5cbiAgcmVuZGVyQmdDZWxsSHRtbChkYXRlLCBvdGhlckF0dHJzKSB7XG4gICAgbGV0IHQgPSAodGhpcyBhcyBhbnkpXG4gICAgbGV0IHZpZXcgPSB0LnZpZXdcbiAgICBsZXQgaXNEYXRlVmFsaWQgPSB0LmRhdGVQcm9maWxlLmFjdGl2ZVVuem9uZWRSYW5nZS5jb250YWluc0RhdGUoZGF0ZSkgLy8gVE9ETzogY2FsbGVkIHRvbyBmcmVxdWVudGx5LiBjYWNoZSBzb21laG93LlxuICAgIGxldCBjbGFzc2VzID0gdC5nZXREYXlDbGFzc2VzKGRhdGUpXG5cbiAgICBjbGFzc2VzLnVuc2hpZnQoJ2ZjLWRheScsIHZpZXcuY2FsZW5kYXIudGhlbWUuZ2V0Q2xhc3MoJ3dpZGdldENvbnRlbnQnKSlcblxuICAgIHJldHVybiAnPHRkIGNsYXNzPVwiJyArIGNsYXNzZXMuam9pbignICcpICsgJ1wiJyArXG4gICAgICAoaXNEYXRlVmFsaWQgP1xuICAgICAgICAnIGRhdGEtZGF0ZT1cIicgKyBkYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpICsgJ1wiJyA6IC8vIGlmIGRhdGUgaGFzIGEgdGltZSwgd29uJ3QgZm9ybWF0IGl0XG4gICAgICAgICcnKSArXG4gICAgICAob3RoZXJBdHRycyA/XG4gICAgICAgICcgJyArIG90aGVyQXR0cnMgOlxuICAgICAgICAnJykgK1xuICAgICAgJz48L3RkPidcbiAgfVxuXG5cbiAgLyogR2VuZXJpY1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgcmVuZGVySW50cm9IdG1sKCkge1xuICAgIC8vIEdlbmVyYXRlcyB0aGUgZGVmYXVsdCBIVE1MIGludHJvIGZvciBhbnkgcm93LiBVc2VyIGNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlXG4gIH1cblxuXG4gIC8vIFRPRE86IGEgZ2VuZXJpYyBtZXRob2QgZm9yIGRlYWxpbmcgd2l0aCA8dHI+LCBSVEwsIGludHJvXG4gIC8vIHdoZW4gaW5jcmVtZW50IGludGVybmFsQXBpVmVyc2lvblxuICAvLyB3cmFwVHIgKHNjaGVkdWxlcilcblxuXG4gIC8qIFV0aWxzXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuICAvLyBBcHBsaWVzIHRoZSBnZW5lcmljIFwiaW50cm9cIiBhbmQgXCJvdXRyb1wiIEhUTUwgdG8gdGhlIGdpdmVuIGNlbGxzLlxuICAvLyBJbnRybyBtZWFucyB0aGUgbGVmdG1vc3QgY2VsbCB3aGVuIHRoZSBjYWxlbmRhciBpcyBMVFIgYW5kIHRoZSByaWdodG1vc3QgY2VsbCB3aGVuIFJUTC4gVmljZS12ZXJzYSBmb3Igb3V0cm8uXG4gIGJvb2tlbmRDZWxscyh0ckVsKSB7XG4gICAgbGV0IGludHJvSHRtbCA9IHRoaXMucmVuZGVySW50cm9IdG1sKClcblxuICAgIGlmIChpbnRyb0h0bWwpIHtcbiAgICAgIGlmICgodGhpcyBhcyBhbnkpLmlzUlRMKSB7XG4gICAgICAgIHRyRWwuYXBwZW5kKGludHJvSHRtbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyRWwucHJlcGVuZChpbnRyb0h0bWwpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EYXlUYWJsZU1peGluLnRzIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXhpbiB7XG5cbiAgc3RhdGljIG1peEludG8oZGVzdENsYXNzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5wcm90b3R5cGUpLmZvckVhY2goKG5hbWUpID0+IHsgLy8gY29weSBtZXRob2RzXG4gICAgICBpZiAoIWRlc3RDbGFzcy5wcm90b3R5cGVbbmFtZV0pIHsgLy8gaWYgZGVzdGluYXRpb24gY2xhc3MgZG9lc24ndCBhbHJlYWR5IGRlZmluZSBpdFxuICAgICAgICBkZXN0Q2xhc3MucHJvdG90eXBlW25hbWVdID0gdGhpcy5wcm90b3R5cGVbbmFtZV1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLypcbiAgd2lsbCBvdmVycmlkZSBleGlzdGluZyBtZXRob2RzXG4gIFRPRE86IHJlbW92ZSEgbm90IHVzZWQgYW55bW9yZVxuICAqL1xuICBzdGF0aWMgbWl4T3ZlcihkZXN0Q2xhc3MpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLnByb3RvdHlwZSkuZm9yRWFjaCgobmFtZSkgPT4geyAvLyBjb3B5IG1ldGhvZHNcbiAgICAgIGRlc3RDbGFzcy5wcm90b3R5cGVbbmFtZV0gPSB0aGlzLnByb3RvdHlwZVtuYW1lXVxuICAgIH0pXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL01peGluLnRzIiwiaW1wb3J0IHtVbnpvbmVkUmFuZ2V9IGZyb20gXCJmdWxsY2FsZW5kYXJcIjtcbmltcG9ydCBEYXRlUHJvZmlsZUdlbmVyYXRvciBmcm9tIFwiLi9EYXRlUHJvZmlsZUdlbmVyYXRvclwiO1xuXG5jbGFzcyBZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yIGV4dGVuZHMgRGF0ZVByb2ZpbGVHZW5lcmF0b3Ige1xuXG4gIC8vIENvbXB1dGVzIHRoZSBkYXRlIHJhbmdlIHRoYXQgd2lsbCBiZSByZW5kZXJlZC5cbiAgYnVpbGRSZW5kZXJSYW5nZShjdXJyZW50VW56b25lZFJhbmdlLCBjdXJyZW50UmFuZ2VVbml0LCBpc1JhbmdlQWxsRGF5KSB7XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5tc1RvVXRjTW9tZW50KGN1cnJlbnRVbnpvbmVkUmFuZ2Uuc3RhcnRNcywgaXNSYW5nZUFsbERheSlcbiAgICBsZXQgZW5kID0gdGhpcy5tc1RvVXRjTW9tZW50KGN1cnJlbnRVbnpvbmVkUmFuZ2UuZW5kTXMsIGlzUmFuZ2VBbGxEYXkpXG4gICAgcmV0dXJuIG5ldyBVbnpvbmVkUmFuZ2Uoc3RhcnQsIGVuZClcbiAgfVxuXG59XG5cbmV4cG9ydCB7XG4gICAgWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvclxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1llYXJWaWV3RGF0ZVByb2ZpbGVHZW5lcmF0b3IudHMiLCJpbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgY29tcHV0ZUdyZWF0ZXN0VW5pdCwgY29tcHV0ZUR1cmF0aW9uR3JlYXRlc3RVbml0LCBVbnpvbmVkUmFuZ2UgfSBmcm9tICdmdWxsY2FsZW5kYXInXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVByb2ZpbGVHZW5lcmF0b3Ige1xuXG4gIF92aWV3OiBhbnkgLy8gZGlzY291cmFnZVxuXG5cbiAgY29uc3RydWN0b3IoX3ZpZXcpIHtcbiAgICB0aGlzLl92aWV3ID0gX3ZpZXdcbiAgfVxuXG5cbiAgb3B0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlldy5vcHQobmFtZSlcbiAgfVxuXG5cbiAgdHJpbUhpZGRlbkRheXModW56b25lZFJhbmdlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXcudHJpbUhpZGRlbkRheXModW56b25lZFJhbmdlKVxuICB9XG5cblxuICBtc1RvVXRjTW9tZW50KG1zLCBmb3JjZUFsbERheSkge1xuICAgIHJldHVybiB0aGlzLl92aWV3LmNhbGVuZGFyLm1zVG9VdGNNb21lbnQobXMsIGZvcmNlQWxsRGF5KVxuICB9XG5cblxuICAvKiBEYXRlIFJhbmdlIENvbXB1dGF0aW9uXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuICAvLyBCdWlsZHMgYSBzdHJ1Y3R1cmUgd2l0aCBpbmZvIGFib3V0IHdoYXQgdGhlIGRhdGVzL3JhbmdlcyB3aWxsIGJlIGZvciB0aGUgXCJwcmV2XCIgdmlldy5cbiAgYnVpbGRQcmV2KGN1cnJlbnREYXRlUHJvZmlsZSkge1xuICAgIGxldCBwcmV2RGF0ZSA9IGN1cnJlbnREYXRlUHJvZmlsZS5kYXRlLmNsb25lKClcbiAgICAgIC5zdGFydE9mKGN1cnJlbnREYXRlUHJvZmlsZS5jdXJyZW50UmFuZ2VVbml0KVxuICAgICAgLnN1YnRyYWN0KGN1cnJlbnREYXRlUHJvZmlsZS5kYXRlSW5jcmVtZW50KVxuXG4gICAgcmV0dXJuIHRoaXMuYnVpbGQocHJldkRhdGUsIC0xKVxuICB9XG5cblxuICAvLyBCdWlsZHMgYSBzdHJ1Y3R1cmUgd2l0aCBpbmZvIGFib3V0IHdoYXQgdGhlIGRhdGVzL3JhbmdlcyB3aWxsIGJlIGZvciB0aGUgXCJuZXh0XCIgdmlldy5cbiAgYnVpbGROZXh0KGN1cnJlbnREYXRlUHJvZmlsZSkge1xuICAgIGxldCBuZXh0RGF0ZSA9IGN1cnJlbnREYXRlUHJvZmlsZS5kYXRlLmNsb25lKClcbiAgICAgIC5zdGFydE9mKGN1cnJlbnREYXRlUHJvZmlsZS5jdXJyZW50UmFuZ2VVbml0KVxuICAgICAgLmFkZChjdXJyZW50RGF0ZVByb2ZpbGUuZGF0ZUluY3JlbWVudClcblxuICAgIHJldHVybiB0aGlzLmJ1aWxkKG5leHREYXRlLCAxKVxuICB9XG5cblxuICAvLyBCdWlsZHMgYSBzdHJ1Y3R1cmUgaG9sZGluZyBkYXRlcy9yYW5nZXMgZm9yIHJlbmRlcmluZyBhcm91bmQgdGhlIGdpdmVuIGRhdGUuXG4gIC8vIE9wdGlvbmFsIGRpcmVjdGlvbiBwYXJhbSBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZGF0ZSBpcyBiZWluZyBpbmNyZW1lbnRlZC9kZWNyZW1lbnRlZFxuICAvLyBmcm9tIGl0cyBwcmV2aW91cyB2YWx1ZS4gZGVjcmVtZW50ZWQgPSAtMSwgaW5jcmVtZW50ZWQgPSAxIChkZWZhdWx0KS5cbiAgYnVpbGQoZGF0ZSwgZGlyZWN0aW9uLCBmb3JjZVRvVmFsaWQ9IGZhbHNlKSB7XG4gICAgbGV0IGlzRGF0ZUFsbERheSA9ICFkYXRlLmhhc1RpbWUoKVxuICAgIGxldCB2YWxpZFVuem9uZWRSYW5nZVxuICAgIGxldCBtaW5UaW1lID0gbnVsbFxuICAgIGxldCBtYXhUaW1lID0gbnVsbFxuICAgIGxldCBjdXJyZW50SW5mb1xuICAgIGxldCBpc1JhbmdlQWxsRGF5XG4gICAgbGV0IHJlbmRlclVuem9uZWRSYW5nZVxuICAgIGxldCBhY3RpdmVVbnpvbmVkUmFuZ2VcbiAgICBsZXQgaXNWYWxpZFxuXG4gICAgdmFsaWRVbnpvbmVkUmFuZ2UgPSB0aGlzLmJ1aWxkVmFsaWRSYW5nZSgpXG4gICAgdmFsaWRVbnpvbmVkUmFuZ2UgPSB0aGlzLnRyaW1IaWRkZW5EYXlzKHZhbGlkVW56b25lZFJhbmdlKVxuXG4gICAgaWYgKGZvcmNlVG9WYWxpZCkge1xuICAgICAgZGF0ZSA9IHRoaXMubXNUb1V0Y01vbWVudChcbiAgICAgICAgdmFsaWRVbnpvbmVkUmFuZ2UuY29uc3RyYWluRGF0ZShkYXRlKSwgLy8gcmV0dXJucyBNU1xuICAgICAgICBpc0RhdGVBbGxEYXlcbiAgICAgIClcbiAgICB9XG5cbiAgICBjdXJyZW50SW5mbyA9IHRoaXMuYnVpbGRDdXJyZW50UmFuZ2VJbmZvKGRhdGUsIGRpcmVjdGlvbilcbiAgICBpc1JhbmdlQWxsRGF5ID0gL14oeWVhcnxtb250aHx3ZWVrfGRheSkkLy50ZXN0KGN1cnJlbnRJbmZvLnVuaXQpXG4gICAgcmVuZGVyVW56b25lZFJhbmdlID0gdGhpcy5idWlsZFJlbmRlclJhbmdlKFxuICAgICAgdGhpcy50cmltSGlkZGVuRGF5cyhjdXJyZW50SW5mby51bnpvbmVkUmFuZ2UpLFxuICAgICAgY3VycmVudEluZm8udW5pdCxcbiAgICAgIGlzUmFuZ2VBbGxEYXlcbiAgICApXG4gICAgcmVuZGVyVW56b25lZFJhbmdlID0gdGhpcy50cmltSGlkZGVuRGF5cyhyZW5kZXJVbnpvbmVkUmFuZ2UpXG4gICAgYWN0aXZlVW56b25lZFJhbmdlID0gcmVuZGVyVW56b25lZFJhbmdlLmNsb25lKClcblxuICAgIGlmICghdGhpcy5vcHQoJ3Nob3dOb25DdXJyZW50RGF0ZXMnKSkge1xuICAgICAgYWN0aXZlVW56b25lZFJhbmdlID0gYWN0aXZlVW56b25lZFJhbmdlLmludGVyc2VjdChjdXJyZW50SW5mby51bnpvbmVkUmFuZ2UpXG4gICAgfVxuXG4gICAgbWluVGltZSA9IG1vbWVudC5kdXJhdGlvbih0aGlzLm9wdCgnbWluVGltZScpKVxuICAgIG1heFRpbWUgPSBtb21lbnQuZHVyYXRpb24odGhpcy5vcHQoJ21heFRpbWUnKSlcbiAgICBhY3RpdmVVbnpvbmVkUmFuZ2UgPSB0aGlzLmFkanVzdEFjdGl2ZVJhbmdlKGFjdGl2ZVVuem9uZWRSYW5nZSwgbWluVGltZSwgbWF4VGltZSlcbiAgICBhY3RpdmVVbnpvbmVkUmFuZ2UgPSBhY3RpdmVVbnpvbmVkUmFuZ2UuaW50ZXJzZWN0KHZhbGlkVW56b25lZFJhbmdlKSAvLyBtaWdodCByZXR1cm4gbnVsbFxuXG4gICAgaWYgKGFjdGl2ZVVuem9uZWRSYW5nZSkge1xuICAgICAgZGF0ZSA9IHRoaXMubXNUb1V0Y01vbWVudChcbiAgICAgICAgYWN0aXZlVW56b25lZFJhbmdlLmNvbnN0cmFpbkRhdGUoZGF0ZSksIC8vIHJldHVybnMgTVNcbiAgICAgICAgaXNEYXRlQWxsRGF5XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gaXQncyBpbnZhbGlkIGlmIHRoZSBvcmlnaW5hbGx5IHJlcXVlc3RlZCBkYXRlIGlzIG5vdCBjb250YWluZWQsXG4gICAgLy8gb3IgaWYgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgb3V0c2lkZSBvZiB0aGUgdmFsaWQgcmFuZ2UuXG4gICAgaXNWYWxpZCA9IGN1cnJlbnRJbmZvLnVuem9uZWRSYW5nZS5pbnRlcnNlY3RzV2l0aCh2YWxpZFVuem9uZWRSYW5nZSlcblxuICAgIHJldHVybiB7XG4gICAgICAvLyBjb25zdHJhaW50IGZvciB3aGVyZSBwcmV2L25leHQgb3BlcmF0aW9ucyBjYW4gZ28gYW5kIHdoZXJlIGV2ZW50cyBjYW4gYmUgZHJhZ2dlZC9yZXNpemVkIHRvLlxuICAgICAgLy8gYW4gb2JqZWN0IHdpdGggb3B0aW9uYWwgc3RhcnQgYW5kIGVuZCBwcm9wZXJ0aWVzLlxuICAgICAgdmFsaWRVbnpvbmVkUmFuZ2U6IHZhbGlkVW56b25lZFJhbmdlLFxuXG4gICAgICAvLyByYW5nZSB0aGUgdmlldyBpcyBmb3JtYWxseSByZXNwb25zaWJsZSBmb3IuXG4gICAgICAvLyBmb3IgZXhhbXBsZSwgYSBtb250aCB2aWV3IG1pZ2h0IGhhdmUgMXN0LTMxc3QsIGV4Y2x1ZGluZyBwYWRkZWQgZGF0ZXNcbiAgICAgIGN1cnJlbnRVbnpvbmVkUmFuZ2U6IGN1cnJlbnRJbmZvLnVuem9uZWRSYW5nZSxcblxuICAgICAgLy8gbmFtZSBvZiBsYXJnZXN0IHVuaXQgYmVpbmcgZGlzcGxheWVkLCBsaWtlIFwibW9udGhcIiBvciBcIndlZWtcIlxuICAgICAgY3VycmVudFJhbmdlVW5pdDogY3VycmVudEluZm8udW5pdCxcblxuICAgICAgaXNSYW5nZUFsbERheTogaXNSYW5nZUFsbERheSxcblxuICAgICAgLy8gZGF0ZXMgdGhhdCBkaXNwbGF5IGV2ZW50cyBhbmQgYWNjZXB0IGRyYWctbi1kcm9wXG4gICAgICAvLyB3aWxsIGJlIGBudWxsYCBpZiBubyBkYXRlcyBhY2NlcHQgZXZlbnRzXG4gICAgICBhY3RpdmVVbnpvbmVkUmFuZ2U6IGFjdGl2ZVVuem9uZWRSYW5nZSxcblxuICAgICAgLy8gZGF0ZSByYW5nZSB3aXRoIGEgcmVuZGVyZWQgc2tlbGV0b25cbiAgICAgIC8vIGluY2x1ZGVzIG5vdC1hY3RpdmUgZGF5cyB0aGF0IG5lZWQgc29tZSBzb3J0IG9mIERPTVxuICAgICAgcmVuZGVyVW56b25lZFJhbmdlOiByZW5kZXJVbnpvbmVkUmFuZ2UsXG5cbiAgICAgIC8vIER1cmF0aW9uIG9iamVjdCB0aGF0IGRlbm90ZXMgdGhlIGZpcnN0IHZpc2libGUgdGltZSBvZiBhbnkgZ2l2ZW4gZGF5XG4gICAgICBtaW5UaW1lOiBtaW5UaW1lLFxuXG4gICAgICAvLyBEdXJhdGlvbiBvYmplY3QgdGhhdCBkZW5vdGVzIHRoZSBleGNsdXNpdmUgdmlzaWJsZSBlbmQgdGltZSBvZiBhbnkgZ2l2ZW4gZGF5XG4gICAgICBtYXhUaW1lOiBtYXhUaW1lLFxuXG4gICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxuXG4gICAgICBkYXRlOiBkYXRlLFxuXG4gICAgICAvLyBob3cgZmFyIHRoZSBjdXJyZW50IGRhdGUgd2lsbCBtb3ZlIGZvciBhIHByZXYvbmV4dCBvcGVyYXRpb25cbiAgICAgIGRhdGVJbmNyZW1lbnQ6IHRoaXMuYnVpbGREYXRlSW5jcmVtZW50KGN1cnJlbnRJbmZvLmR1cmF0aW9uKVxuICAgICAgICAvLyBwYXNzIGEgZmFsbGJhY2sgKG1pZ2h0IGJlIG51bGwpIF5cbiAgICB9XG4gIH1cblxuXG4gIC8vIEJ1aWxkcyBhbiBvYmplY3Qgd2l0aCBvcHRpb25hbCBzdGFydC9lbmQgcHJvcGVydGllcy5cbiAgLy8gSW5kaWNhdGVzIHRoZSBtaW5pbXVtL21heGltdW0gZGF0ZXMgdG8gZGlzcGxheS5cbiAgLy8gbm90IHJlc3BvbnNpYmxlIGZvciB0cmltbWluZyBoaWRkZW4gZGF5cy5cbiAgYnVpbGRWYWxpZFJhbmdlKCkge1xuICAgIHJldHVybiB0aGlzLl92aWV3LmdldFVuem9uZWRSYW5nZU9wdGlvbigndmFsaWRSYW5nZScsIHRoaXMuX3ZpZXcuY2FsZW5kYXIuZ2V0Tm93KCkpIHx8XG4gICAgICBuZXcgVW56b25lZFJhbmdlKCkgLy8gY29tcGxldGVseSBvcGVuLWVuZGVkXG4gIH1cblxuXG4gIC8vIEJ1aWxkcyBhIHN0cnVjdHVyZSB3aXRoIGluZm8gYWJvdXQgdGhlIFwiY3VycmVudFwiIHJhbmdlLCB0aGUgcmFuZ2UgdGhhdCBpc1xuICAvLyBoaWdobGlnaHRlZCBhcyBiZWluZyB0aGUgY3VycmVudCBtb250aCBmb3IgZXhhbXBsZS5cbiAgLy8gU2VlIGJ1aWxkKCkgZm9yIGEgZGVzY3JpcHRpb24gb2YgYGRpcmVjdGlvbmAuXG4gIC8vIEd1YXJhbnRlZWQgdG8gaGF2ZSBgcmFuZ2VgIGFuZCBgdW5pdGAgcHJvcGVydGllcy4gYGR1cmF0aW9uYCBpcyBvcHRpb25hbC5cbiAgLy8gVE9ETzogYWNjZXB0IGEgTVMtdGltZSBpbnN0ZWFkIG9mIGEgbW9tZW50IGBkYXRlYD9cbiAgYnVpbGRDdXJyZW50UmFuZ2VJbmZvKGRhdGUsIGRpcmVjdGlvbikge1xuICAgIGxldCB2aWV3U3BlYyA9IHRoaXMuX3ZpZXcudmlld1NwZWNcbiAgICBsZXQgZHVyYXRpb24gPSBudWxsXG4gICAgbGV0IHVuaXQgPSBudWxsXG4gICAgbGV0IHVuem9uZWRSYW5nZSA9IG51bGxcbiAgICBsZXQgZGF5Q291bnRcblxuICAgIGlmICh2aWV3U3BlYy5kdXJhdGlvbikge1xuICAgICAgZHVyYXRpb24gPSB2aWV3U3BlYy5kdXJhdGlvblxuICAgICAgdW5pdCA9IHZpZXdTcGVjLmR1cmF0aW9uVW5pdFxuICAgICAgdW56b25lZFJhbmdlID0gdGhpcy5idWlsZFJhbmdlRnJvbUR1cmF0aW9uKGRhdGUsIGRpcmVjdGlvbiwgZHVyYXRpb24sIHVuaXQpXG4gICAgfSBlbHNlIGlmICgoZGF5Q291bnQgPSB0aGlzLm9wdCgnZGF5Q291bnQnKSkpIHtcbiAgICAgIHVuaXQgPSAnZGF5J1xuICAgICAgdW56b25lZFJhbmdlID0gdGhpcy5idWlsZFJhbmdlRnJvbURheUNvdW50KGRhdGUsIGRpcmVjdGlvbiwgZGF5Q291bnQpXG4gICAgfSBlbHNlIGlmICgodW56b25lZFJhbmdlID0gdGhpcy5idWlsZEN1c3RvbVZpc2libGVSYW5nZShkYXRlKSkpIHtcbiAgICAgIHVuaXQgPSBjb21wdXRlR3JlYXRlc3RVbml0KHVuem9uZWRSYW5nZS5nZXRTdGFydCgpLCB1bnpvbmVkUmFuZ2UuZ2V0RW5kKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGR1cmF0aW9uID0gdGhpcy5nZXRGYWxsYmFja0R1cmF0aW9uKClcbiAgICAgIHVuaXQgPSBjb21wdXRlR3JlYXRlc3RVbml0KGR1cmF0aW9uKVxuICAgICAgdW56b25lZFJhbmdlID0gdGhpcy5idWlsZFJhbmdlRnJvbUR1cmF0aW9uKGRhdGUsIGRpcmVjdGlvbiwgZHVyYXRpb24sIHVuaXQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZHVyYXRpb246IGR1cmF0aW9uLCB1bml0OiB1bml0LCB1bnpvbmVkUmFuZ2U6IHVuem9uZWRSYW5nZSB9XG4gIH1cblxuXG4gIGdldEZhbGxiYWNrRHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbih7IGRheXM6IDEgfSlcbiAgfVxuXG5cbiAgLy8gUmV0dXJucyBhIG5ldyBhY3RpdmVVbnpvbmVkUmFuZ2UgdG8gaGF2ZSB0aW1lIHZhbHVlcyAodW4tYW1iaWd1YXRlKVxuICAvLyBtaW5UaW1lIG9yIG1heFRpbWUgY2F1c2VzIHRoZSByYW5nZSB0byBleHBhbmQuXG4gIGFkanVzdEFjdGl2ZVJhbmdlKHVuem9uZWRSYW5nZSwgbWluVGltZSwgbWF4VGltZSkge1xuICAgIGxldCBzdGFydCA9IHVuem9uZWRSYW5nZS5nZXRTdGFydCgpXG4gICAgbGV0IGVuZCA9IHVuem9uZWRSYW5nZS5nZXRFbmQoKVxuXG4gICAgaWYgKHRoaXMuX3ZpZXcudXNlc01pbk1heFRpbWUpIHtcblxuICAgICAgaWYgKG1pblRpbWUgPCAwKSB7XG4gICAgICAgIHN0YXJ0LnRpbWUoMCkuYWRkKG1pblRpbWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhUaW1lID4gMjQgKiA2MCAqIDYwICogMTAwMCkgeyAvLyBiZXlvbmQgMjQgaG91cnM/XG4gICAgICAgIGVuZC50aW1lKG1heFRpbWUgLSAoMjQgKiA2MCAqIDYwICogMTAwMCkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBVbnpvbmVkUmFuZ2Uoc3RhcnQsIGVuZClcbiAgfVxuXG5cbiAgLy8gQnVpbGRzIHRoZSBcImN1cnJlbnRcIiByYW5nZSB3aGVuIGl0IGlzIHNwZWNpZmllZCBhcyBhbiBleHBsaWNpdCBkdXJhdGlvbi5cbiAgLy8gYHVuaXRgIGlzIHRoZSBhbHJlYWR5LWNvbXB1dGVkIGNvbXB1dGVHcmVhdGVzdFVuaXQgdmFsdWUgb2YgZHVyYXRpb24uXG4gIC8vIFRPRE86IGFjY2VwdCBhIE1TLXRpbWUgaW5zdGVhZCBvZiBhIG1vbWVudCBgZGF0ZWA/XG4gIGJ1aWxkUmFuZ2VGcm9tRHVyYXRpb24oZGF0ZSwgZGlyZWN0aW9uLCBkdXJhdGlvbiwgdW5pdCkge1xuICAgIGxldCBhbGlnbm1lbnQgPSB0aGlzLm9wdCgnZGF0ZUFsaWdubWVudCcpXG4gICAgbGV0IGRhdGVJbmNyZW1lbnRJbnB1dFxuICAgIGxldCBkYXRlSW5jcmVtZW50RHVyYXRpb25cbiAgICBsZXQgc3RhcnRcbiAgICBsZXQgZW5kXG4gICAgbGV0IHJlc1xuXG4gICAgLy8gY29tcHV0ZSB3aGF0IHRoZSBhbGlnbm1lbnQgc2hvdWxkIGJlXG4gICAgaWYgKCFhbGlnbm1lbnQpIHtcbiAgICAgIGRhdGVJbmNyZW1lbnRJbnB1dCA9IHRoaXMub3B0KCdkYXRlSW5jcmVtZW50JylcblxuICAgICAgaWYgKGRhdGVJbmNyZW1lbnRJbnB1dCkge1xuICAgICAgICBkYXRlSW5jcmVtZW50RHVyYXRpb24gPSBtb21lbnQuZHVyYXRpb24oZGF0ZUluY3JlbWVudElucHV0KVxuXG4gICAgICAgIC8vIHVzZSB0aGUgc21hbGxlciBvZiB0aGUgdHdvIHVuaXRzXG4gICAgICAgIGlmIChkYXRlSW5jcmVtZW50RHVyYXRpb24gPCBkdXJhdGlvbikge1xuICAgICAgICAgIGFsaWdubWVudCA9IGNvbXB1dGVEdXJhdGlvbkdyZWF0ZXN0VW5pdChkYXRlSW5jcmVtZW50RHVyYXRpb24sIGRhdGVJbmNyZW1lbnRJbnB1dClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGlnbm1lbnQgPSB1bml0XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWdubWVudCA9IHVuaXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgdmlldyBkaXNwbGF5cyBhIHNpbmdsZSBkYXkgb3Igc21hbGxlclxuICAgIGlmIChkdXJhdGlvbi5hcygnZGF5cycpIDw9IDEpIHtcbiAgICAgIGlmICh0aGlzLl92aWV3LmlzSGlkZGVuRGF5KHN0YXJ0KSkge1xuICAgICAgICBzdGFydCA9IHRoaXMuX3ZpZXcuc2tpcEhpZGRlbkRheXMoc3RhcnQsIGRpcmVjdGlvbilcbiAgICAgICAgc3RhcnQuc3RhcnRPZignZGF5JylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21wdXRlUmVzKCkge1xuICAgICAgc3RhcnQgPSBkYXRlLmNsb25lKCkuc3RhcnRPZihhbGlnbm1lbnQpXG4gICAgICBlbmQgPSBzdGFydC5jbG9uZSgpLmFkZChkdXJhdGlvbilcbiAgICAgIHJlcyA9IG5ldyBVbnpvbmVkUmFuZ2Uoc3RhcnQsIGVuZClcbiAgICB9XG5cbiAgICBjb21wdXRlUmVzKClcblxuICAgIC8vIGlmIHJhbmdlIGlzIGNvbXBsZXRlbHkgZW52ZWxvcGVkIGJ5IGhpZGRlbiBkYXlzLCBnbyBwYXN0IHRoZSBoaWRkZW4gZGF5c1xuICAgIGlmICghdGhpcy50cmltSGlkZGVuRGF5cyhyZXMpKSB7XG4gICAgICBkYXRlID0gdGhpcy5fdmlldy5za2lwSGlkZGVuRGF5cyhkYXRlLCBkaXJlY3Rpb24pXG4gICAgICBjb21wdXRlUmVzKClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuXG4gIC8vIEJ1aWxkcyB0aGUgXCJjdXJyZW50XCIgcmFuZ2Ugd2hlbiBhIGRheUNvdW50IGlzIHNwZWNpZmllZC5cbiAgLy8gVE9ETzogYWNjZXB0IGEgTVMtdGltZSBpbnN0ZWFkIG9mIGEgbW9tZW50IGBkYXRlYD9cbiAgYnVpbGRSYW5nZUZyb21EYXlDb3VudChkYXRlLCBkaXJlY3Rpb24sIGRheUNvdW50KSB7XG4gICAgbGV0IGN1c3RvbUFsaWdubWVudCA9IHRoaXMub3B0KCdkYXRlQWxpZ25tZW50JylcbiAgICBsZXQgcnVubmluZ0NvdW50ID0gMFxuICAgIGxldCBzdGFydFxuICAgIGxldCBlbmRcblxuICAgIGlmIChjdXN0b21BbGlnbm1lbnQgfHwgZGlyZWN0aW9uICE9PSAtMSkge1xuXG4gICAgICBzdGFydCA9IGRhdGUuY2xvbmUoKVxuXG4gICAgICBpZiAoY3VzdG9tQWxpZ25tZW50KSB7XG4gICAgICAgIHN0YXJ0LnN0YXJ0T2YoY3VzdG9tQWxpZ25tZW50KVxuICAgICAgfVxuXG4gICAgICBzdGFydC5zdGFydE9mKCdkYXknKVxuICAgICAgc3RhcnQgPSB0aGlzLl92aWV3LnNraXBIaWRkZW5EYXlzKHN0YXJ0KVxuXG4gICAgICBlbmQgPSBzdGFydC5jbG9uZSgpXG4gICAgICBkbyB7XG4gICAgICAgIGVuZC5hZGQoMSwgJ2RheScpXG4gICAgICAgIGlmICghdGhpcy5fdmlldy5pc0hpZGRlbkRheShlbmQpKSB7XG4gICAgICAgICAgcnVubmluZ0NvdW50KytcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAocnVubmluZ0NvdW50IDwgZGF5Q291bnQpXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBlbmQgPSBkYXRlLmNsb25lKCkuc3RhcnRPZignZGF5JykuYWRkKDEsICdkYXknKVxuICAgICAgZW5kID0gdGhpcy5fdmlldy5za2lwSGlkZGVuRGF5cyhlbmQsIC0xLCB0cnVlKVxuXG4gICAgICBzdGFydCA9IGVuZC5jbG9uZSgpXG4gICAgICBkbyB7XG4gICAgICAgIHN0YXJ0LmFkZCgtMSwgJ2RheScpXG4gICAgICAgIGlmICghdGhpcy5fdmlldy5pc0hpZGRlbkRheShzdGFydCkpIHtcbiAgICAgICAgICBydW5uaW5nQ291bnQrK1xuICAgICAgICB9XG4gICAgICB9IHdoaWxlIChydW5uaW5nQ291bnQgPCBkYXlDb3VudClcblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgVW56b25lZFJhbmdlKHN0YXJ0LCBlbmQpXG4gIH1cblxuXG4gIC8vIEJ1aWxkcyBhIG5vcm1hbGl6ZWQgcmFuZ2Ugb2JqZWN0IGZvciB0aGUgXCJ2aXNpYmxlXCIgcmFuZ2UsXG4gIC8vIHdoaWNoIGlzIGEgd2F5IHRvIGRlZmluZSB0aGUgY3VycmVudFVuem9uZWRSYW5nZSBhbmQgYWN0aXZlVW56b25lZFJhbmdlIGF0IHRoZSBzYW1lIHRpbWUuXG4gIC8vIFRPRE86IGFjY2VwdCBhIE1TLXRpbWUgaW5zdGVhZCBvZiBhIG1vbWVudCBgZGF0ZWA/XG4gIGJ1aWxkQ3VzdG9tVmlzaWJsZVJhbmdlKGRhdGUpIHtcbiAgICBsZXQgdmlzaWJsZVVuem9uZWRSYW5nZSA9IHRoaXMuX3ZpZXcuZ2V0VW56b25lZFJhbmdlT3B0aW9uKFxuICAgICAgJ3Zpc2libGVSYW5nZScsXG4gICAgICB0aGlzLl92aWV3LmNhbGVuZGFyLmFwcGx5VGltZXpvbmUoZGF0ZSkgLy8gY29ycmVjdCB6b25lLiBhbHNvIGdlbmVyYXRlcyBuZXcgb2JqIHRoYXQgYXZvaWRzIG11dGF0aW9uc1xuICAgIClcblxuICAgIGlmICh2aXNpYmxlVW56b25lZFJhbmdlICYmICh2aXNpYmxlVW56b25lZFJhbmdlLnN0YXJ0TXMgPT0gbnVsbCB8fCB2aXNpYmxlVW56b25lZFJhbmdlLmVuZE1zID09IG51bGwpKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiB2aXNpYmxlVW56b25lZFJhbmdlXG4gIH1cblxuXG4gIC8vIENvbXB1dGVzIHRoZSByYW5nZSB0aGF0IHdpbGwgcmVwcmVzZW50IHRoZSBlbGVtZW50L2NlbGxzIGZvciAqcmVuZGVyaW5nKixcbiAgLy8gYnV0IHdoaWNoIG1heSBoYXZlIHZvaWRlZCBkYXlzL3RpbWVzLlxuICAvLyBub3QgcmVzcG9uc2libGUgZm9yIHRyaW1taW5nIGhpZGRlbiBkYXlzLlxuICBidWlsZFJlbmRlclJhbmdlKGN1cnJlbnRVbnpvbmVkUmFuZ2UsIGN1cnJlbnRSYW5nZVVuaXQsIGlzUmFuZ2VBbGxEYXkpIHtcbiAgICByZXR1cm4gY3VycmVudFVuem9uZWRSYW5nZS5jbG9uZSgpXG4gIH1cblxuXG4gIC8vIENvbXB1dGUgdGhlIGR1cmF0aW9uIHZhbHVlIHRoYXQgc2hvdWxkIGJlIGFkZGVkL3N1YnN0cmFjdGVkIHRvIHRoZSBjdXJyZW50IGRhdGVcbiAgLy8gd2hlbiBhIHByZXYvbmV4dCBvcGVyYXRpb24gaGFwcGVucy5cbiAgYnVpbGREYXRlSW5jcmVtZW50KGZhbGxiYWNrKSB7XG4gICAgbGV0IGRhdGVJbmNyZW1lbnRJbnB1dCA9IHRoaXMub3B0KCdkYXRlSW5jcmVtZW50JylcbiAgICBsZXQgY3VzdG9tQWxpZ25tZW50XG5cbiAgICBpZiAoZGF0ZUluY3JlbWVudElucHV0KSB7XG4gICAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKGRhdGVJbmNyZW1lbnRJbnB1dClcbiAgICB9IGVsc2UgaWYgKChjdXN0b21BbGlnbm1lbnQgPSB0aGlzLm9wdCgnZGF0ZUFsaWdubWVudCcpKSkge1xuICAgICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbigxLCBjdXN0b21BbGlnbm1lbnQpXG4gICAgfSBlbHNlIGlmIChmYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGZhbGxiYWNrXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb21lbnQuZHVyYXRpb24oeyBkYXlzOiAxIH0pXG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EYXRlUHJvZmlsZUdlbmVyYXRvci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=