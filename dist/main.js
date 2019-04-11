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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMDUzZWUyMzcxZDUzNWE5MDIzZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZnVsbGNhbGVuZGFyXCIsXCJjb21tb25qczJcIjpcImZ1bGxjYWxlbmRhclwiLFwiYW1kXCI6XCJmdWxsY2FsZW5kYXJcIixcInJvb3RcIjpcIkZ1bGxDYWxlbmRhclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1llYXJWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9ZZWFyR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWWVhclRhYmxlTWl4aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RheVRhYmxlTWl4aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01peGluLnRzIiwid2VicGFjazovLy8uL3NyYy9ZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9EYXRlUHJvZmlsZUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7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T0FBTyxDQUFDLEVBQUU7WUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRSxDQUFDLENBQUM7UUFDOUYsY0FBYyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9JLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELDhCQU9DO0FBRUQscUJBQTRCLE9BQU8sRUFBRSxJQUFJO0lBQ3JDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakgsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsY0FBYSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6SixjQUFjLENBQUMsSUFBSSxPQUFPLFVBQVUsQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLGNBQWMsRUFBRTtRQUNaLElBQUksQ0FBQztZQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUM7WUFBRSxJQUFJO2dCQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFBRSxPQUFPLENBQUMsQ0FBQztnQkFDN0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNYLEtBQUssQ0FBQyxDQUFDO29CQUFDLEtBQUssQ0FBQzt3QkFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLE1BQU07b0JBQzlCLEtBQUssQ0FBQzt3QkFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO29CQUN4RCxLQUFLLENBQUM7d0JBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQUMsU0FBUztvQkFDakQsS0FBSyxDQUFDO3dCQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQUMsU0FBUztvQkFDakQ7d0JBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUFDLFNBQVM7eUJBQUU7d0JBQzVHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFB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M0M7YUFBTSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRTtZQUN4RCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQztTQUMzQzthQUFNLElBQUksUUFBUSxFQUFFO1lBQ25CLE9BQU8sUUFBUTtTQUNoQjthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVILDJCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7QUNuV0QsZ0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImZ1bGxjYWxlbmRhclwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJmdWxsY2FsZW5kYXJcIiwgXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRnVsbENhbGVuZGFyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZnVsbGNhbGVuZGFyXCIpLCByZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJGdWxsQ2FsZW5kYXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJGdWxsQ2FsZW5kYXJcIl0sIHJvb3RbXCJtb21lbnRcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzEwX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzA1M2VlMjM3MWQ1MzVhOTAyM2YiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJmdWxsY2FsZW5kYXJcIixcImNvbW1vbmpzMlwiOlwiZnVsbGNhbGVuZGFyXCIsXCJhbWRcIjpcImZ1bGxjYWxlbmRhclwiLFwicm9vdFwiOlwiRnVsbENhbGVuZGFyXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmICgkLmZ1bGxDYWxlbmRhciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIFllYXJWaWV3ID0gcmVxdWlyZSgnLi9ZZWFyVmlldycpLmRlZmF1bHQ7XG5cbiAgICAkLmZ1bGxDYWxlbmRhci5kZWZpbmVWaWV3KCd5ZWFyJywge1xuICAgICAgICAnY2xhc3MnOiBZZWFyVmlldyxcbiAgICAgICAgZHVyYXRpb246IHsgeWVhcnM6IDEgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyogQSBtb250aCB2aWV3IHdpdGggZGF5IGNlbGxzIHJ1bm5pbmcgaW4gcm93cyAob25lLXBlci13ZWVrKSBhbmQgY29sdW1uc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmltcG9ydCB7QmFzaWNWaWV3fSBmcm9tIFwiZnVsbGNhbGVuZGFyXCI7XG5pbXBvcnQgWWVhckdyaWQgZnJvbSBcIi4vWWVhckdyaWRcIjtcbmltcG9ydCB7WWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvcn0gZnJvbSBcIi4vWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyVmlldyBleHRlbmRzIEJhc2ljVmlldyB7XG5cbiAgY29uc3RydWN0b3IoY2FsZW5kYXIsIHZpZXdTcGVjKSB7XG4gICAgc3VwZXIoY2FsZW5kYXIsIHZpZXdTcGVjKVxuICB9XG5cbiAgaW5zdGFudGlhdGVEYXlHcmlkKCkge1xuICAgIC8vIGdlbmVyYXRlIGEgc3ViY2xhc3Mgb24gdGhlIGZseSB3aXRoIEJhc2ljVmlldy1zcGVjaWZpYyBiZWhhdmlvclxuICAgIC8vIFRPRE86IGNhY2hlIHRoaXMgc3ViY2xhc3NcbiAgICBsZXQgc3ViY2xhc3M6IGFueSA9IHRoaXMubWFrZURheUdyaWRTdWJjbGFzcyh0aGlzLmRheUdyaWRDbGFzcylcblxuICAgIHJldHVybiBuZXcgc3ViY2xhc3ModGhpcylcbiAgfVxuXG5cbiAgLy8gY3VzdG9taXplIHRoZSByZW5kZXJpbmcgYmVoYXZpb3Igb2YgQmFzaWNWaWV3J3MgZGF5R3JpZFxuICBtYWtlRGF5R3JpZFN1YmNsYXNzKFN1cGVyQ2xhc3MpIHtcblxuICAgIHJldHVybiBjbGFzcyBTdWJDbGFzcyBleHRlbmRzIFN1cGVyQ2xhc3Mge1xuXG4gICAgICBjb2xXZWVrTnVtYmVyc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlIC8vIGRpc3BsYXkgd2VlayBudW1iZXJzIGFsb25nIHRoZSBzaWRlP1xuXG5cbiAgICAgIC8vIEdlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IHdpbGwgZ28gYmVmb3JlIHRoZSBkYXktb2Ygd2VlayBoZWFkZXIgY2VsbHNcbiAgICAgIHJlbmRlckhlYWRJbnRyb0h0bWwoKSB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3XG5cbiAgICAgICAgICByZXR1cm4gJycgK1xuICAgICAgICAgICAgJzx0aCBjbGFzcz1cImZjLXdlZWstbnVtYmVyICcgKyB2aWV3LmNhbGVuZGFyLnRoZW1lLmdldENsYXNzKCd3aWRnZXRIZWFkZXInKSArICdcIiAnICsgdmlldy53ZWVrTnVtYmVyU3R5bGVBdHRyKCkgKyAnPicgK1xuICAgICAgICAgICAgJzxzcGFuPicgK1xuICAgICAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8L3RoPidcbiAgICAgIH1cblxuXG4gICAgICAvLyBHZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCB3aWxsIGdvIGJlZm9yZSBjb250ZW50LXNrZWxldG9uIGNlbGxzIHRoYXQgZGlzcGxheSB0aGUgZGF5L3dlZWsgbnVtYmVyc1xuICAgICAgcmVuZGVyTnVtYmVySW50cm9IdG1sKHJvdykge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuICAgICAgICBsZXQgbW9udGhTdGFydCA9IHRoaXMuZ2V0Q2VsbERhdGUocm93LCAwKVxuXG4gICAgICAgIHJldHVybiAnJyArXG4gICAgICAgICAgJzx0ZCBjbGFzcz1cImZjLXdlZWstbnVtYmVyXCIgJyArIHZpZXcud2Vla051bWJlclN0eWxlQXR0cigpICsgJz4nICtcbiAgICAgICAgICB2aWV3LmJ1aWxkR290b0FuY2hvckh0bWwoIC8vIGFzaWRlIGZyb20gbGluaywgaW1wb3J0YW50IGZvciBtYXRjaENlbGxXaWR0aHNcbiAgICAgICAgICAgIHsgZGF0ZTogbW9udGhTdGFydCwgdHlwZTogJ3dlZWsnLCBmb3JjZU9mZjogdGhpcy5jb2xDbnQgPT09IDEgfSxcbiAgICAgICAgICAgIG1vbnRoU3RhcnQuZm9ybWF0KCdNTU0nKSAvLyBpbm5lciBIVE1MXG4gICAgICAgICAgKSArXG4gICAgICAgICAgJzwvdGQ+J1xuXG4gICAgICB9XG5cblxuICAgICAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgZ29lcyBiZWZvcmUgdGhlIGRheSBiZyBjZWxscyBmb3IgZWFjaCBkYXktcm93XG4gICAgICByZW5kZXJCZ0ludHJvSHRtbCgpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcblxuICAgICAgICByZXR1cm4gJzx0ZCBjbGFzcz1cImZjLXdlZWstbnVtYmVyICcgKyB2aWV3LmNhbGVuZGFyLnRoZW1lLmdldENsYXNzKCd3aWRnZXRDb250ZW50JykgKyAnXCIgJyArXG4gICAgICAgICAgICB2aWV3LndlZWtOdW1iZXJTdHlsZUF0dHIoKSArICc+PC90ZD4nXG5cbiAgICAgIH1cblxuXG4gICAgICAvLyBHZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCBnb2VzIGJlZm9yZSBldmVyeSBvdGhlciB0eXBlIG9mIHJvdyBnZW5lcmF0ZWQgYnkgRGF5R3JpZC5cbiAgICAgIC8vIEFmZmVjdHMgaGVscGVyLXNrZWxldG9uIGFuZCBoaWdobGlnaHQtc2tlbGV0b24gcm93cy5cbiAgICAgIHJlbmRlckludHJvSHRtbCgpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcblxuICAgICAgICByZXR1cm4gJzx0ZCBjbGFzcz1cImZjLXdlZWstbnVtYmVyXCIgJyArIHZpZXcud2Vla051bWJlclN0eWxlQXR0cigpICsgJz48L3RkPidcblxuICAgICAgfVxuXG5cbiAgICAgIGdldElzTnVtYmVyc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxufVxuXG5ZZWFyVmlldy5wcm90b3R5cGUuZGF5R3JpZENsYXNzID0gWWVhckdyaWRcblllYXJWaWV3LnByb3RvdHlwZS5kYXRlUHJvZmlsZUdlbmVyYXRvckNsYXNzID0gWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1llYXJWaWV3LnRzIiwiaW1wb3J0IHtEYXlHcmlkLENvb3JkQ2FjaGV9IGZyb20gXCJmdWxsY2FsZW5kYXJcIjtcbmltcG9ydCBZZWFyVGFibGVNaXhpbiBmcm9tIFwiLi9ZZWFyVGFibGVNaXhpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyR3JpZCBleHRlbmRzIERheUdyaWQge1xuXG4gIGNvbENudDogbnVtYmVyID0gMzFcbiAgcm93Q250OiBudW1iZXIgPSAxMlxuICBkYXlzUGVyUm93OiBudW1iZXIgPSAzMVxuICBjZWxsV2Vla051bWJlcnNWaXNpYmxlOiBib29sZWFuID0gZmFsc2UgLy8gZGlzcGxheSB3ZWVrIG51bWJlcnMgaW4gZGF5IGNlbGw/XG4gIGJyZWFrT25XZWVrczogYm9vbGVhbiA9IGZhbHNlXG5cblxuICAvLyBSZW5kZXJzIHRoZSByb3dzIGFuZCBjb2x1bW5zIGludG8gdGhlIGNvbXBvbmVudCdzIGB0aGlzLmVsYCwgd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgYXNzaWduZWQuXG4gIHJlbmRlckdyaWQoKSB7XG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcbiAgICBsZXQgcm93Q250ID0gdGhpcy5yb3dDbnRcbiAgICBsZXQgY29sQ250ID0gdGhpcy5jb2xDbnRcbiAgICBsZXQgaHRtbCA9ICcnXG4gICAgbGV0IHJvd1xuICAgIGxldCBjb2xcblxuICAgIGlmICh0aGlzLmhlYWRDb250YWluZXJFbCkge1xuICAgICAgdGhpcy5oZWFkQ29udGFpbmVyRWwuaHRtbCh0aGlzLnJlbmRlckhlYWRIdG1sKCkpXG4gICAgfVxuXG4gICAgZm9yIChyb3cgPSAwOyByb3cgPCByb3dDbnQ7IHJvdysrKSB7XG4gICAgICBodG1sICs9IHRoaXMucmVuZGVyRGF5Um93SHRtbChyb3csIHRoaXMuaXNSaWdpZClcbiAgICB9XG4gICAgdGhpcy5lbC5odG1sKGh0bWwpXG5cbiAgICB0aGlzLnJvd0VscyA9IHRoaXMuZWwuZmluZCgnLmZjLXJvdycpXG4gICAgdGhpcy5jZWxsRWxzID0gdGhpcy5lbC5maW5kKCcuZmMtZGF5LCAuZmMtZGlzYWJsZWQtZGF5JylcblxuICAgIHRoaXMucm93Q29vcmRDYWNoZSA9IG5ldyBDb29yZENhY2hlKHtcbiAgICAgIGVsczogdGhpcy5yb3dFbHMsXG4gICAgICBpc1ZlcnRpY2FsOiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLmNvbENvb3JkQ2FjaGUgPSBuZXcgQ29vcmRDYWNoZSh7XG4gICAgICBlbHM6IHRoaXMuY2VsbEVscy5zbGljZSgwLCB0aGlzLmNvbENudCksIC8vIG9ubHkgdGhlIGZpcnN0IHJvd1xuICAgICAgaXNIb3Jpem9udGFsOiB0cnVlXG4gICAgfSlcblxuICAgIC8vIHRyaWdnZXIgZGF5UmVuZGVyIHdpdGggZWFjaCBjZWxsJ3MgZWxlbWVudFxuICAgIGZvciAocm93ID0gMDsgcm93IDwgcm93Q250OyByb3crKykge1xuICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCBjb2xDbnQ7IGNvbCsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENlbGxEYXRlKHJvdywgY29sKSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wdWJsaWNseVRyaWdnZXIoJ2RheVJlbmRlcicsIHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHZpZXcsXG4gICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgIHRoaXMuZ2V0Q2VsbERhdGUocm93LCBjb2wpLFxuICAgICAgICAgICAgICB0aGlzLmdldENlbGxFbChyb3csIGNvbCksXG4gICAgICAgICAgICAgIHZpZXdcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIGZvciB0aGUgPHRkPnMgb2YgdGhlIFwibnVtYmVyXCIgcm93IGluIHRoZSBEYXlHcmlkJ3MgY29udGVudCBza2VsZXRvbi5cbiAgLy8gVGhlIG51bWJlciByb3cgd2lsbCBvbmx5IGV4aXN0IGlmIGVpdGhlciBkYXkgbnVtYmVycyBvciB3ZWVrIG51bWJlcnMgYXJlIHR1cm5lZCBvbi5cbiAgcmVuZGVyTnVtYmVyQ2VsbEh0bWwoZGF0ZSkge1xuICAgIGlmIChkYXRlID09IG51bGwpIHJldHVybiAnJ1xuICAgIGxldCB2aWV3ID0gdGhpcy52aWV3XG4gICAgbGV0IGh0bWwgPSAnJ1xuICAgIGxldCBpc0RhdGVWYWxpZCA9IHRoaXMuZGF0ZVByb2ZpbGUuYWN0aXZlVW56b25lZFJhbmdlLmNvbnRhaW5zRGF0ZShkYXRlKSAvLyBUT0RPOiBjYWxsZWQgdG9vIGZyZXF1ZW50bHkuIGNhY2hlIHNvbWVob3cuXG4gICAgbGV0IGlzRGF5TnVtYmVyVmlzaWJsZSA9IHRoaXMuZ2V0SXNEYXlOdW1iZXJzVmlzaWJsZSgpICYmIGlzRGF0ZVZhbGlkXG4gICAgbGV0IGNsYXNzZXNcbiAgICBsZXQgd2Vla0NhbGNGaXJzdERvV1xuXG4gICAgaWYgKCFpc0RheU51bWJlclZpc2libGUgJiYgIXRoaXMuY2VsbFdlZWtOdW1iZXJzVmlzaWJsZSkge1xuICAgICAgLy8gbm8gbnVtYmVycyBpbiBkYXkgY2VsbCAod2VlayBudW1iZXIgbXVzdCBiZSBhbG9uZyB0aGUgc2lkZSlcbiAgICAgIHJldHVybiAnPHRkLz4nIC8vICB3aWxsIGNyZWF0ZSBhbiBlbXB0eSBzcGFjZSBhYm92ZSBldmVudHMgOihcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdGhpcy5nZXREYXlDbGFzc2VzKGRhdGUpXG4gICAgY2xhc3Nlcy51bnNoaWZ0KCdmYy1kYXktdG9wJylcblxuICAgIGlmICh0aGlzLmNlbGxXZWVrTnVtYmVyc1Zpc2libGUpIHtcbiAgICAgIC8vIFRvIGRldGVybWluZSB0aGUgZGF5IG9mIHdlZWsgbnVtYmVyIGNoYW5nZSB1bmRlciBJU08sIHdlIGNhbm5vdFxuICAgICAgLy8gcmVseSBvbiBtb21lbnQuanMgbWV0aG9kcyBzdWNoIGFzIGZpcnN0RGF5T2ZXZWVrKCkgb3Igd2Vla2RheSgpLFxuICAgICAgLy8gYmVjYXVzZSB0aGV5IHJlbHkgb24gdGhlIGxvY2FsZSdzIGRvdyAocG9zc2libHkgb3ZlcnJpZGRlbiBieVxuICAgICAgLy8gb3VyIGZpcnN0RGF5IG9wdGlvbiksIHdoaWNoIG1heSBub3QgYmUgTW9uZGF5LiBXZSBjYW5ub3QgY2hhbmdlXG4gICAgICAvLyBkb3csIGJlY2F1c2UgdGhhdCB3b3VsZCBhZmZlY3QgdGhlIGNhbGVuZGFyIHN0YXJ0IGRheSBhcyB3ZWxsLlxuICAgICAgaWYgKGRhdGUuX2xvY2FsZS5fZnVsbENhbGVuZGFyX3dlZWtDYWxjID09PSAnSVNPJykge1xuICAgICAgICB3ZWVrQ2FsY0ZpcnN0RG9XID0gMSAgLy8gTW9uZGF5IGJ5IElTTyA4NjAxIGRlZmluaXRpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlZWtDYWxjRmlyc3REb1cgPSBkYXRlLl9sb2NhbGUuZmlyc3REYXlPZldlZWsoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGh0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjbGFzc2VzLmpvaW4oJyAnKSArICdcIicgK1xuICAgICAgKGlzRGF0ZVZhbGlkID9cbiAgICAgICAgICAnIGRhdGEtZGF0ZT1cIicgKyBkYXRlLmZvcm1hdCgpICsgJ1wiJyA6XG4gICAgICAgICAgJydcbiAgICAgICkgK1xuICAgICAgJz4nXG5cbiAgICBpZiAodGhpcy5jZWxsV2Vla051bWJlcnNWaXNpYmxlICYmIChkYXRlLmRheSgpID09PSB3ZWVrQ2FsY0ZpcnN0RG9XKSkge1xuICAgICAgaHRtbCArPSB2aWV3LmJ1aWxkR290b0FuY2hvckh0bWwoXG4gICAgICAgIHsgZGF0ZTogZGF0ZSwgdHlwZTogJ3dlZWsnIH0sXG4gICAgICAgIHsgJ2NsYXNzJzogJ2ZjLXdlZWstbnVtYmVyJyB9LFxuICAgICAgICBkYXRlLmZvcm1hdCgndycpIC8vIGlubmVyIEhUTUxcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoaXNEYXlOdW1iZXJWaXNpYmxlKSB7XG4gICAgICBodG1sICs9IHZpZXcuYnVpbGRHb3RvQW5jaG9ySHRtbChcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgeyAnY2xhc3MnOiAnZmMtZGF5LW51bWJlcicgfSxcbiAgICAgICAgZGF0ZS5mb3JtYXQoJ0QnKSAvLyBpbm5lciBIVE1MXG4gICAgICApXG4gICAgfVxuXG4gICAgaHRtbCArPSAnPC90ZD4nXG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cblxuICAvLyBTbGljZXMgdXAgdGhlIGdpdmVuIHNwYW4gKHVuem9uZWQgc3RhcnQvZW5kIHdpdGggb3RoZXIgbWlzYyBkYXRhKSBpbnRvIGFuIGFycmF5IG9mIHNlZ21lbnRzXG4gIGNvbXBvbmVudEZvb3RwcmludFRvU2Vncyhjb21wb25lbnRGb290cHJpbnQpIHtcbiAgICBsZXQgc2VncyA9IHRoaXMuc2xpY2VSYW5nZUJ5Um93KGNvbXBvbmVudEZvb3RwcmludC51bnpvbmVkUmFuZ2UpXG4gICAgbGV0IGlcbiAgICBsZXQgc2VnXG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2Vncy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VnID0gc2Vnc1tpXVxuXG4gICAgICBpZiAodGhpcy5pc1JUTCkge1xuICAgICAgICBzZWcubGVmdENvbCA9IHRoaXMuZGF5c1BlclJvdyAtIDEgLSBzZWcubGFzdFJvd0RheUluZGV4XG4gICAgICAgIHNlZy5yaWdodENvbCA9IHRoaXMuZGF5c1BlclJvdyAtIDEgLSBzZWcuZmlyc3RSb3dEYXlJbmRleFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VnLmxlZnRDb2wgPSBzZWcuZmlyc3RSb3dEYXlJbmRleFxuICAgICAgICBzZWcucmlnaHRDb2wgPSBzZWcubGFzdFJvd0RheUluZGV4XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ3NcbiAgfVxuXG5cbn1cblxuWWVhclRhYmxlTWl4aW4ubWl4T3ZlcihZZWFyR3JpZClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ZZWFyR3JpZC50cyIsImltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCdcbmltcG9ydCBEYXlUYWJsZU1peGluIGZyb20gXCIuL0RheVRhYmxlTWl4aW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhclRhYmxlTWl4aW4gZXh0ZW5kcyBEYXlUYWJsZU1peGluIHtcblxuICBzdGFydERhdGU6IE1vbWVudFxuXG4gIC8vIFBvcHVsYXRlcyBpbnRlcm5hbCB2YXJpYWJsZXMgdXNlZCBmb3IgZGF0ZSBjYWxjdWxhdGlvbiBhbmQgcmVuZGVyaW5nXG4gIHVwZGF0ZURheVRhYmxlKCkge1xuICAgIGxldCB0ID0gKHRoaXMgYXMgYW55KVxuICAgIGxldCB2aWV3ID0gdC52aWV3XG4gICAgbGV0IGNhbGVuZGFyID0gdmlldy5jYWxlbmRhclxuICAgIHRoaXMuc3RhcnREYXRlID0gY2FsZW5kYXIubXNUb1V0Y01vbWVudCh0LmRhdGVQcm9maWxlLnJlbmRlclVuem9uZWRSYW5nZS5zdGFydE1zLCB0cnVlKVxuICB9XG5cbiAgcmVuZGVyQmdDZWxsSHRtbChkYXRlLCBvdGhlckF0dHJzKSB7XG4gICAgbGV0IHQgPSAodGhpcyBhcyBhbnkpXG4gICAgbGV0IHZpZXcgPSB0LnZpZXdcbiAgICBsZXQgaXNEYXRlVmFsaWQgPSBkYXRlICE9IG51bGxcbiAgICBsZXQgY2xhc3NlcyA9IGlzRGF0ZVZhbGlkID8gdC5nZXREYXlDbGFzc2VzKGRhdGUpIDogW11cblxuICAgIGNsYXNzZXMudW5zaGlmdCgnZmMtZGF5Jywgdmlldy5jYWxlbmRhci50aGVtZS5nZXRDbGFzcygnd2lkZ2V0Q29udGVudCcpKVxuXG4gICAgcmV0dXJuICc8dGQgY2xhc3M9XCInICsgY2xhc3Nlcy5qb2luKCcgJykgKyAnXCInICtcbiAgICAgIChpc0RhdGVWYWxpZCA/XG4gICAgICAgICcgZGF0YS1kYXRlPVwiJyArIGRhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgKyAnXCInIDogLy8gaWYgZGF0ZSBoYXMgYSB0aW1lLCB3b24ndCBmb3JtYXQgaXRcbiAgICAgICAgJycpICtcbiAgICAgIChvdGhlckF0dHJzID9cbiAgICAgICAgJyAnICsgb3RoZXJBdHRycyA6XG4gICAgICAgICcnKSArXG4gICAgICAnPjwvdGQ+J1xuICB9XG5cbiAgLy8gRGV0ZXJtaW5lcyBob3cgbWFueSBjb2x1bW5zIHRoZXJlIHNob3VsZCBiZSBpbiB0aGUgdGFibGVcbiAgY29tcHV0ZUNvbENudCgpIHtcbiAgICByZXR1cm4gMzFcbiAgfVxuXG4gIC8vIENvbXB1dGVzIHRoZSBhbWJpZ3VvdXNseS10aW1lZCBtb21lbnQgZm9yIHRoZSBnaXZlbiBjZWxsXG4gIGdldENlbGxEYXRlKHJvdywgY29sKSB7XG4gICAgbGV0IGRhdGUgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpLm1vbnRoKHJvdylcbiAgICBpZiAoZGF0ZS5kYXlzSW5Nb250aCgpID4gY29sKSB7XG4gICAgICByZXR1cm4gZGF0ZS5kYXRlKGNvbCArIDEpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBHaXZlbiBhIGRhdGUsIHJldHVybnMgaXRzIGNocm9ub2xvY2lhbCBjZWxsLWluZGV4IGZyb20gdGhlIGZpcnN0IGNlbGwgb2YgdGhlIGdyaWQuXG4gIC8vIElmIHRoZSBkYXRlIGxpZXMgYmV0d2VlbiBjZWxscyAoYmVjYXVzZSBvZiBoaWRkZW5EYXlzKSwgcmV0dXJucyBhIGZsb2F0aW5nLXBvaW50IHZhbHVlIGJldHdlZW4gb2Zmc2V0cy5cbiAgLy8gSWYgYmVmb3JlIHRoZSBmaXJzdCBvZmZzZXQsIHJldHVybnMgYSBuZWdhdGl2ZSBudW1iZXIuXG4gIC8vIElmIGFmdGVyIHRoZSBsYXN0IG9mZnNldCwgcmV0dXJucyBhbiBvZmZzZXQgcGFzdCB0aGUgbGFzdCBjZWxsIG9mZnNldC5cbiAgLy8gT25seSB3b3JrcyBmb3IgKnN0YXJ0KiBkYXRlcyBvZiBjZWxscy4gV2lsbCBub3Qgd29yayBmb3IgZXhjbHVzaXZlIGVuZCBkYXRlcyBmb3IgY2VsbHMuXG4gIGdldERhdGVEYXlJbmRleChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUubW9udGgoKSAqIDMxICsgZGF0ZS5kYXRlKCkgLSAxXG4gIH1cblxuICByZW5kZXJIZWFkVHJIdG1sKCkge1xuICAgIHJldHVybiAnPHRyPjwvdHI+J1xuICB9XG5cblxuICAvLyBTbGljZXMgdXAgYSBkYXRlIHJhbmdlIGludG8gYSBzZWdtZW50IGZvciBldmVyeSB3ZWVrLXJvdyBpdCBpbnRlcnNlY3RzIHdpdGhcbiAgLy8gQ29udHJhcnkgdG8gRGF5VGFibGVNaXhpbjo6c2xpY2VSYW5nZUJ5Um93IHRoaXMgdmVyc2lvbiBtdXN0IGJlIGF3YXJlIG9mIHRoZSBmYWN0IHRoYXQgbm90IGV2ZXJ5IG1vbnRoIGhhcyB0aGUgc2FtZSBudW1iZXIgb2YgZGF5c1xuICBzbGljZVJhbmdlQnlSb3codW56b25lZFJhbmdlKSB7XG4gICAgbGV0IGRheXNQZXJSb3cgPSB0aGlzLmRheXNQZXJSb3dcbiAgICBsZXQgbm9ybWFsUmFuZ2UgPSAodGhpcyBhcyBhbnkpLnZpZXcuY29tcHV0ZURheVJhbmdlKHVuem9uZWRSYW5nZSkgLy8gbWFrZSB3aG9sZS1kYXkgcmFuZ2UsIGNvbnNpZGVyaW5nIG5leHREYXlUaHJlc2hvbGRcbiAgICBsZXQgcmFuZ2VGaXJzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLnN0YXJ0KSAvLyBpbmNsdXNpdmUgZmlyc3QgaW5kZXhcbiAgICBsZXQgcmFuZ2VMYXN0ID0gdGhpcy5nZXREYXRlRGF5SW5kZXgobm9ybWFsUmFuZ2UuZW5kLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheXMnKSkgLy8gaW5jbHVzaXZlIGxhc3QgaW5kZXhcbiAgICBsZXQgc2VncyA9IFtdXG4gICAgbGV0IHJvd1xuICAgIGxldCByb3dGaXJzdFxuICAgIGxldCByb3dMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIGN1cnJlbnQgcm93XG4gICAgbGV0IHNlZ0ZpcnN0XG4gICAgbGV0IHNlZ0xhc3QgLy8gaW5jbHVzaXZlIGRheS1pbmRleCByYW5nZSBmb3Igc2VnbWVudFxuXG4gICAgZm9yIChyb3cgPSAwOyByb3cgPCB0aGlzLnJvd0NudDsgcm93KyspIHtcbiAgICAgIHJvd0ZpcnN0ID0gcm93ICogZGF5c1BlclJvd1xuICAgICAgcm93TGFzdCA9IHJvd0ZpcnN0ICsgbm9ybWFsUmFuZ2Uuc3RhcnQubW9udGgocm93KS5kYXlzSW5Nb250aCgpIC0gMVxuXG4gICAgICAvLyBpbnRlcnNlY3Qgc2VnbWVudCdzIG9mZnNldCByYW5nZSB3aXRoIHRoZSByb3cnc1xuICAgICAgc2VnRmlyc3QgPSBNYXRoLm1heChyYW5nZUZpcnN0LCByb3dGaXJzdClcbiAgICAgIHNlZ0xhc3QgPSBNYXRoLm1pbihyYW5nZUxhc3QsIHJvd0xhc3QpXG5cbiAgICAgIC8vIGRlYWwgd2l0aCBpbi1iZXR3ZWVuIGluZGljZXNcbiAgICAgIHNlZ0ZpcnN0ID0gTWF0aC5jZWlsKHNlZ0ZpcnN0KSAvLyBpbi1iZXR3ZWVuIHN0YXJ0cyByb3VuZCB0byBuZXh0IGNlbGxcbiAgICAgIHNlZ0xhc3QgPSBNYXRoLmZsb29yKHNlZ0xhc3QpIC8vIGluLWJldHdlZW4gZW5kcyByb3VuZCB0byBwcmV2IGNlbGxcblxuICAgICAgaWYgKHNlZ0ZpcnN0IDw9IHNlZ0xhc3QpIHsgLy8gd2FzIHRoZXJlIGFueSBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgY3VycmVudCByb3c/XG4gICAgICAgIHNlZ3MucHVzaCh7XG4gICAgICAgICAgcm93OiByb3csXG5cbiAgICAgICAgICAvLyBub3JtYWxpemUgdG8gc3RhcnQgb2Ygcm93XG4gICAgICAgICAgZmlyc3RSb3dEYXlJbmRleDogc2VnRmlyc3QgLSByb3dGaXJzdCxcbiAgICAgICAgICBsYXN0Um93RGF5SW5kZXg6IHNlZ0xhc3QgLSByb3dGaXJzdCxcblxuICAgICAgICAgIC8vIG11c3QgYmUgbWF0Y2hpbmcgaW50ZWdlcnMgdG8gYmUgdGhlIHNlZ21lbnQncyBzdGFydC9lbmRcbiAgICAgICAgICBpc1N0YXJ0OiBzZWdGaXJzdCA9PT0gcmFuZ2VGaXJzdCxcbiAgICAgICAgICBpc0VuZDogc2VnTGFzdCA9PT0gcmFuZ2VMYXN0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ3NcbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ZZWFyVGFibGVNaXhpbi50cyIsImltcG9ydCB7IGh0bWxFc2NhcGUsIGRheUlEcyB9IGZyb20gJ2Z1bGxjYWxlbmRhcidcbmltcG9ydCBNaXhpbiBmcm9tIFwiLi9NaXhpblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERheVRhYmxlSW50ZXJmYWNlIHtcbiAgZGF5RGF0ZXM6IGFueVxuICBkYXlzUGVyUm93OiBhbnlcbiAgcm93Q250OiBhbnlcbiAgY29sQ250OiBhbnlcbiAgdXBkYXRlRGF5VGFibGUoKVxuICByZW5kZXJIZWFkSHRtbCgpXG4gIHJlbmRlckJnVHJIdG1sKHJvdylcbiAgYm9va2VuZENlbGxzKHRyRWwpXG4gIGdldENlbGxEYXRlKHJvdywgY29sKVxuICBnZXRDZWxsUmFuZ2Uocm93LCBjb2wpXG4gIHNsaWNlUmFuZ2VCeURheSh1bnpvbmVkUmFuZ2UpXG4gIHNsaWNlUmFuZ2VCeVJvdyh1bnpvbmVkUmFuZ2UpXG4gIHJlbmRlckludHJvSHRtbCgpXG59XG5cbi8qXG5BIHNldCBvZiByZW5kZXJpbmcgYW5kIGRhdGUtcmVsYXRlZCBtZXRob2RzIGZvciBhIHZpc3VhbCBjb21wb25lbnQgY29tcHJpc2VkIG9mIG9uZSBvciBtb3JlIHJvd3Mgb2YgZGF5IGNvbHVtbnMuXG5QcmVyZXF1aXNpdGU6IHRoZSBvYmplY3QgYmVpbmcgbWl4ZWQgaW50byBuZWVkcyB0byBiZSBhICpHcmlkKlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheVRhYmxlTWl4aW4gZXh0ZW5kcyBNaXhpbiBpbXBsZW1lbnRzIERheVRhYmxlSW50ZXJmYWNlIHtcblxuICBicmVha09uV2Vla3M6IGJvb2xlYW4gLy8gc2hvdWxkIGNyZWF0ZSBhIG5ldyByb3cgZm9yIGVhY2ggd2Vlaz8gbm90IHNwZWNpZmllZCwgc28gZGVmYXVsdCBpcyBGQUxTWVxuICBkYXlEYXRlczogYW55IC8vIHdob2xlLWRheSBkYXRlcyBmb3IgZWFjaCBjb2x1bW4uIGxlZnQgdG8gcmlnaHRcbiAgZGF5SW5kaWNlczogYW55IC8vIGZvciBlYWNoIGRheSBmcm9tIHN0YXJ0LCB0aGUgb2Zmc2V0XG4gIGRheXNQZXJSb3c6IGFueVxuICByb3dDbnQ6IGFueVxuICBjb2xDbnQ6IGFueVxuICBjb2xIZWFkRm9ybWF0OiBhbnlcblxuXG4gIC8vIFBvcHVsYXRlcyBpbnRlcm5hbCB2YXJpYWJsZXMgdXNlZCBmb3IgZGF0ZSBjYWxjdWxhdGlvbiBhbmQgcmVuZGVyaW5nXG4gIHVwZGF0ZURheVRhYmxlKCkge1xuICAgIGxldCB0ID0gKHRoaXMgYXMgYW55KVxuICAgIGxldCB2aWV3ID0gdC52aWV3XG4gICAgbGV0IGNhbGVuZGFyID0gdmlldy5jYWxlbmRhclxuICAgIGxldCBkYXRlID0gY2FsZW5kYXIubXNUb1V0Y01vbWVudCh0LmRhdGVQcm9maWxlLnJlbmRlclVuem9uZWRSYW5nZS5zdGFydE1zLCB0cnVlKVxuICAgIGxldCBlbmQgPSBjYWxlbmRhci5tc1RvVXRjTW9tZW50KHQuZGF0ZVByb2ZpbGUucmVuZGVyVW56b25lZFJhbmdlLmVuZE1zLCB0cnVlKVxuICAgIGxldCBkYXlJbmRleCA9IC0xXG4gICAgbGV0IGRheUluZGljZXMgPSBbXVxuICAgIGxldCBkYXlEYXRlcyA9IFtdXG4gICAgbGV0IGRheXNQZXJSb3dcbiAgICBsZXQgZmlyc3REYXlcbiAgICBsZXQgcm93Q250XG5cbiAgICB3aGlsZSAoZGF0ZS5pc0JlZm9yZShlbmQpKSB7IC8vIGxvb3AgZWFjaCBkYXkgZnJvbSBzdGFydCB0byBlbmRcbiAgICAgIGlmICh2aWV3LmlzSGlkZGVuRGF5KGRhdGUpKSB7XG4gICAgICAgIGRheUluZGljZXMucHVzaChkYXlJbmRleCArIDAuNSkgLy8gbWFyayB0aGF0IGl0J3MgYmV0d2VlbiBpbmRpY2VzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXlJbmRleCsrXG4gICAgICAgIGRheUluZGljZXMucHVzaChkYXlJbmRleClcbiAgICAgICAgZGF5RGF0ZXMucHVzaChkYXRlLmNsb25lKCkpXG4gICAgICB9XG4gICAgICBkYXRlLmFkZCgxLCAnZGF5cycpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJlYWtPbldlZWtzKSB7XG4gICAgICAvLyBjb3VudCBjb2x1bW5zIHVudGlsIHRoZSBkYXktb2Ytd2VlayByZXBlYXRzXG4gICAgICBmaXJzdERheSA9IGRheURhdGVzWzBdLmRheSgpXG4gICAgICBmb3IgKGRheXNQZXJSb3cgPSAxOyBkYXlzUGVyUm93IDwgZGF5RGF0ZXMubGVuZ3RoOyBkYXlzUGVyUm93KyspIHtcbiAgICAgICAgaWYgKGRheURhdGVzW2RheXNQZXJSb3ddLmRheSgpID09PSBmaXJzdERheSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJvd0NudCA9IE1hdGguY2VpbChkYXlEYXRlcy5sZW5ndGggLyBkYXlzUGVyUm93KVxuICAgIH0gZWxzZSB7XG4gICAgICByb3dDbnQgPSAxXG4gICAgICBkYXlzUGVyUm93ID0gZGF5RGF0ZXMubGVuZ3RoXG4gICAgfVxuXG4gICAgdGhpcy5kYXlEYXRlcyA9IGRheURhdGVzXG4gICAgdGhpcy5kYXlJbmRpY2VzID0gZGF5SW5kaWNlc1xuICAgIHRoaXMuZGF5c1BlclJvdyA9IGRheXNQZXJSb3dcbiAgICB0aGlzLnJvd0NudCA9IHJvd0NudFxuXG4gICAgdGhpcy51cGRhdGVEYXlUYWJsZUNvbHMoKVxuICB9XG5cblxuICAvLyBDb21wdXRlcyBhbmQgYXNzaWduZWQgdGhlIGNvbENudCBwcm9wZXJ0eSBhbmQgdXBkYXRlcyBhbnkgb3B0aW9ucyB0aGF0IG1heSBiZSBjb21wdXRlZCBmcm9tIGl0XG4gIHVwZGF0ZURheVRhYmxlQ29scygpIHtcbiAgICB0aGlzLmNvbENudCA9IHRoaXMuY29tcHV0ZUNvbENudCgpXG4gICAgdGhpcy5jb2xIZWFkRm9ybWF0ID1cbiAgICAgICh0aGlzIGFzIGFueSkub3B0KCdjb2x1bW5IZWFkZXJGb3JtYXQnKSB8fFxuICAgICAgKHRoaXMgYXMgYW55KS5vcHQoJ2NvbHVtbkZvcm1hdCcpIHx8IC8vIGRlcHJlY2F0ZWRcbiAgICAgIHRoaXMuY29tcHV0ZUNvbEhlYWRGb3JtYXQoKVxuICB9XG5cblxuICAvLyBEZXRlcm1pbmVzIGhvdyBtYW55IGNvbHVtbnMgdGhlcmUgc2hvdWxkIGJlIGluIHRoZSB0YWJsZVxuICBjb21wdXRlQ29sQ250KCkge1xuICAgIHJldHVybiB0aGlzLmRheXNQZXJSb3dcbiAgfVxuXG5cbiAgLy8gQ29tcHV0ZXMgdGhlIGFtYmlndW91c2x5LXRpbWVkIG1vbWVudCBmb3IgdGhlIGdpdmVuIGNlbGxcbiAgZ2V0Q2VsbERhdGUocm93LCBjb2wpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlEYXRlc1tcbiAgICAgICAgdGhpcy5nZXRDZWxsRGF5SW5kZXgocm93LCBjb2wpXG4gICAgICBdLmNsb25lKClcbiAgfVxuXG5cbiAgLy8gQ29tcHV0ZXMgdGhlIGFtYmlndW91c2x5LXRpbWVkIGRhdGUgcmFuZ2UgZm9yIHRoZSBnaXZlbiBjZWxsXG4gIGdldENlbGxSYW5nZShyb3csIGNvbCkge1xuICAgIGxldCBzdGFydCA9IHRoaXMuZ2V0Q2VsbERhdGUocm93LCBjb2wpXG4gICAgbGV0IGVuZCA9IHN0YXJ0LmNsb25lKCkuYWRkKDEsICdkYXlzJylcblxuICAgIHJldHVybiB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfVxuICB9XG5cblxuICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5IGNlbGxzLCBjaHJvbm9sb2dpY2FsbHksIGZyb20gdGhlIGZpcnN0IG9mIHRoZSBncmlkICgwLWJhc2VkKVxuICBnZXRDZWxsRGF5SW5kZXgocm93LCBjb2wpIHtcbiAgICByZXR1cm4gcm93ICogdGhpcy5kYXlzUGVyUm93ICsgdGhpcy5nZXRDb2xEYXlJbmRleChjb2wpXG4gIH1cblxuXG4gIC8vIFJldHVybnMgdGhlIG51bW5lciBvZiBkYXkgY2VsbHMsIGNocm9ub2xvZ2ljYWxseSwgZnJvbSB0aGUgZmlyc3QgY2VsbCBpbiAqYW55IGdpdmVuIHJvdypcbiAgZ2V0Q29sRGF5SW5kZXgoY29sKSB7XG4gICAgaWYgKCh0aGlzIGFzIGFueSkuaXNSVEwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbENudCAtIDEgLSBjb2xcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbFxuICAgIH1cbiAgfVxuXG5cbiAgLy8gR2l2ZW4gYSBkYXRlLCByZXR1cm5zIGl0cyBjaHJvbm9sb2NpYWwgY2VsbC1pbmRleCBmcm9tIHRoZSBmaXJzdCBjZWxsIG9mIHRoZSBncmlkLlxuICAvLyBJZiB0aGUgZGF0ZSBsaWVzIGJldHdlZW4gY2VsbHMgKGJlY2F1c2Ugb2YgaGlkZGVuRGF5cyksIHJldHVybnMgYSBmbG9hdGluZy1wb2ludCB2YWx1ZSBiZXR3ZWVuIG9mZnNldHMuXG4gIC8vIElmIGJlZm9yZSB0aGUgZmlyc3Qgb2Zmc2V0LCByZXR1cm5zIGEgbmVnYXRpdmUgbnVtYmVyLlxuICAvLyBJZiBhZnRlciB0aGUgbGFzdCBvZmZzZXQsIHJldHVybnMgYW4gb2Zmc2V0IHBhc3QgdGhlIGxhc3QgY2VsbCBvZmZzZXQuXG4gIC8vIE9ubHkgd29ya3MgZm9yICpzdGFydCogZGF0ZXMgb2YgY2VsbHMuIFdpbGwgbm90IHdvcmsgZm9yIGV4Y2x1c2l2ZSBlbmQgZGF0ZXMgZm9yIGNlbGxzLlxuICBnZXREYXRlRGF5SW5kZXgoZGF0ZSkge1xuICAgIGxldCBkYXlJbmRpY2VzID0gdGhpcy5kYXlJbmRpY2VzXG4gICAgbGV0IGRheU9mZnNldCA9IGRhdGUuZGlmZih0aGlzLmRheURhdGVzWzBdLCAnZGF5cycpXG5cbiAgICBpZiAoZGF5T2Zmc2V0IDwgMCkge1xuICAgICAgcmV0dXJuIGRheUluZGljZXNbMF0gLSAxXG4gICAgfSBlbHNlIGlmIChkYXlPZmZzZXQgPj0gZGF5SW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkYXlJbmRpY2VzW2RheUluZGljZXMubGVuZ3RoIC0gMV0gKyAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXlJbmRpY2VzW2RheU9mZnNldF1cbiAgICB9XG4gIH1cblxuXG4gIC8qIE9wdGlvbnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIC8vIENvbXB1dGVzIGEgZGVmYXVsdCBjb2x1bW4gaGVhZGVyIGZvcm1hdHRpbmcgc3RyaW5nIGlmIGBjb2xGb3JtYXRgIGlzIG5vdCBleHBsaWNpdGx5IGRlZmluZWRcbiAgY29tcHV0ZUNvbEhlYWRGb3JtYXQoKSB7XG4gICAgLy8gaWYgbW9yZSB0aGFuIG9uZSB3ZWVrIHJvdywgb3IgaWYgdGhlcmUgYXJlIGEgbG90IG9mIGNvbHVtbnMgd2l0aCBub3QgbXVjaCBzcGFjZSxcbiAgICAvLyBwdXQganVzdCB0aGUgZGF5IG51bWJlcnMgd2lsbCBiZSBpbiBlYWNoIGNlbGxcbiAgICBpZiAodGhpcy5yb3dDbnQgPiAxIHx8IHRoaXMuY29sQ250ID4gMTApIHtcbiAgICAgIHJldHVybiAnZGRkJyAvLyBcIlNhdFwiXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbENudCA+IDEpIHtcbiAgICAgIHJldHVybiAodGhpcyBhcyBhbnkpLm9wdCgnZGF5T2ZNb250aEZvcm1hdCcpIC8vIFwiU2F0IDEyLzEwXCJcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdkZGRkJyAvLyBcIlNhdHVyZGF5XCJcbiAgICB9XG4gIH1cblxuXG4gIC8qIFNsaWNpbmdcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIC8vIFNsaWNlcyB1cCBhIGRhdGUgcmFuZ2UgaW50byBhIHNlZ21lbnQgZm9yIGV2ZXJ5IHdlZWstcm93IGl0IGludGVyc2VjdHMgd2l0aFxuICBzbGljZVJhbmdlQnlSb3codW56b25lZFJhbmdlKSB7XG4gICAgbGV0IGRheXNQZXJSb3cgPSB0aGlzLmRheXNQZXJSb3dcbiAgICBsZXQgbm9ybWFsUmFuZ2UgPSAodGhpcyBhcyBhbnkpLnZpZXcuY29tcHV0ZURheVJhbmdlKHVuem9uZWRSYW5nZSkgLy8gbWFrZSB3aG9sZS1kYXkgcmFuZ2UsIGNvbnNpZGVyaW5nIG5leHREYXlUaHJlc2hvbGRcbiAgICBsZXQgcmFuZ2VGaXJzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLnN0YXJ0KSAvLyBpbmNsdXNpdmUgZmlyc3QgaW5kZXhcbiAgICBsZXQgcmFuZ2VMYXN0ID0gdGhpcy5nZXREYXRlRGF5SW5kZXgobm9ybWFsUmFuZ2UuZW5kLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheXMnKSkgLy8gaW5jbHVzaXZlIGxhc3QgaW5kZXhcbiAgICBsZXQgc2VncyA9IFtdXG4gICAgbGV0IHJvd1xuICAgIGxldCByb3dGaXJzdFxuICAgIGxldCByb3dMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIGN1cnJlbnQgcm93XG4gICAgbGV0IHNlZ0ZpcnN0XG4gICAgbGV0IHNlZ0xhc3QgLy8gaW5jbHVzaXZlIGRheS1pbmRleCByYW5nZSBmb3Igc2VnbWVudFxuXG4gICAgZm9yIChyb3cgPSAwOyByb3cgPCB0aGlzLnJvd0NudDsgcm93KyspIHtcbiAgICAgIHJvd0ZpcnN0ID0gcm93ICogZGF5c1BlclJvd1xuICAgICAgcm93TGFzdCA9IHJvd0ZpcnN0ICsgZGF5c1BlclJvdyAtIDFcblxuICAgICAgLy8gaW50ZXJzZWN0IHNlZ21lbnQncyBvZmZzZXQgcmFuZ2Ugd2l0aCB0aGUgcm93J3NcbiAgICAgIHNlZ0ZpcnN0ID0gTWF0aC5tYXgocmFuZ2VGaXJzdCwgcm93Rmlyc3QpXG4gICAgICBzZWdMYXN0ID0gTWF0aC5taW4ocmFuZ2VMYXN0LCByb3dMYXN0KVxuXG4gICAgICAvLyBkZWFsIHdpdGggaW4tYmV0d2VlbiBpbmRpY2VzXG4gICAgICBzZWdGaXJzdCA9IE1hdGguY2VpbChzZWdGaXJzdCkgLy8gaW4tYmV0d2VlbiBzdGFydHMgcm91bmQgdG8gbmV4dCBjZWxsXG4gICAgICBzZWdMYXN0ID0gTWF0aC5mbG9vcihzZWdMYXN0KSAvLyBpbi1iZXR3ZWVuIGVuZHMgcm91bmQgdG8gcHJldiBjZWxsXG5cbiAgICAgIGlmIChzZWdGaXJzdCA8PSBzZWdMYXN0KSB7IC8vIHdhcyB0aGVyZSBhbnkgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGN1cnJlbnQgcm93P1xuICAgICAgICBzZWdzLnB1c2goe1xuICAgICAgICAgIHJvdzogcm93LFxuXG4gICAgICAgICAgLy8gbm9ybWFsaXplIHRvIHN0YXJ0IG9mIHJvd1xuICAgICAgICAgIGZpcnN0Um93RGF5SW5kZXg6IHNlZ0ZpcnN0IC0gcm93Rmlyc3QsXG4gICAgICAgICAgbGFzdFJvd0RheUluZGV4OiBzZWdMYXN0IC0gcm93Rmlyc3QsXG5cbiAgICAgICAgICAvLyBtdXN0IGJlIG1hdGNoaW5nIGludGVnZXJzIHRvIGJlIHRoZSBzZWdtZW50J3Mgc3RhcnQvZW5kXG4gICAgICAgICAgaXNTdGFydDogc2VnRmlyc3QgPT09IHJhbmdlRmlyc3QsXG4gICAgICAgICAgaXNFbmQ6IHNlZ0xhc3QgPT09IHJhbmdlTGFzdFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWdzXG4gIH1cblxuXG4gIC8vIFNsaWNlcyB1cCBhIGRhdGUgcmFuZ2UgaW50byBhIHNlZ21lbnQgZm9yIGV2ZXJ5IGRheS1jZWxsIGl0IGludGVyc2VjdHMgd2l0aC5cbiAgLy8gVE9ETzogbWFrZSBtb3JlIERSWSB3aXRoIHNsaWNlUmFuZ2VCeVJvdyBzb21laG93LlxuICBzbGljZVJhbmdlQnlEYXkodW56b25lZFJhbmdlKSB7XG4gICAgbGV0IGRheXNQZXJSb3cgPSB0aGlzLmRheXNQZXJSb3dcbiAgICBsZXQgbm9ybWFsUmFuZ2UgPSAodGhpcyBhcyBhbnkpLnZpZXcuY29tcHV0ZURheVJhbmdlKHVuem9uZWRSYW5nZSkgLy8gbWFrZSB3aG9sZS1kYXkgcmFuZ2UsIGNvbnNpZGVyaW5nIG5leHREYXlUaHJlc2hvbGRcbiAgICBsZXQgcmFuZ2VGaXJzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLnN0YXJ0KSAvLyBpbmNsdXNpdmUgZmlyc3QgaW5kZXhcbiAgICBsZXQgcmFuZ2VMYXN0ID0gdGhpcy5nZXREYXRlRGF5SW5kZXgobm9ybWFsUmFuZ2UuZW5kLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheXMnKSkgLy8gaW5jbHVzaXZlIGxhc3QgaW5kZXhcbiAgICBsZXQgc2VncyA9IFtdXG4gICAgbGV0IHJvd1xuICAgIGxldCByb3dGaXJzdFxuICAgIGxldCByb3dMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIGN1cnJlbnQgcm93XG4gICAgbGV0IGlcbiAgICBsZXQgc2VnRmlyc3RcbiAgICBsZXQgc2VnTGFzdCAvLyBpbmNsdXNpdmUgZGF5LWluZGV4IHJhbmdlIGZvciBzZWdtZW50XG5cbiAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHRoaXMucm93Q250OyByb3crKykge1xuICAgICAgcm93Rmlyc3QgPSByb3cgKiBkYXlzUGVyUm93XG4gICAgICByb3dMYXN0ID0gcm93Rmlyc3QgKyBkYXlzUGVyUm93IC0gMVxuXG4gICAgICBmb3IgKGkgPSByb3dGaXJzdDsgaSA8PSByb3dMYXN0OyBpKyspIHtcblxuICAgICAgICAvLyBpbnRlcnNlY3Qgc2VnbWVudCdzIG9mZnNldCByYW5nZSB3aXRoIHRoZSByb3cnc1xuICAgICAgICBzZWdGaXJzdCA9IE1hdGgubWF4KHJhbmdlRmlyc3QsIGkpXG4gICAgICAgIHNlZ0xhc3QgPSBNYXRoLm1pbihyYW5nZUxhc3QsIGkpXG5cbiAgICAgICAgLy8gZGVhbCB3aXRoIGluLWJldHdlZW4gaW5kaWNlc1xuICAgICAgICBzZWdGaXJzdCA9IE1hdGguY2VpbChzZWdGaXJzdCkgLy8gaW4tYmV0d2VlbiBzdGFydHMgcm91bmQgdG8gbmV4dCBjZWxsXG4gICAgICAgIHNlZ0xhc3QgPSBNYXRoLmZsb29yKHNlZ0xhc3QpIC8vIGluLWJldHdlZW4gZW5kcyByb3VuZCB0byBwcmV2IGNlbGxcblxuICAgICAgICBpZiAoc2VnRmlyc3QgPD0gc2VnTGFzdCkgeyAvLyB3YXMgdGhlcmUgYW55IGludGVyc2VjdGlvbiB3aXRoIHRoZSBjdXJyZW50IHJvdz9cbiAgICAgICAgICBzZWdzLnB1c2goe1xuICAgICAgICAgICAgcm93OiByb3csXG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSB0byBzdGFydCBvZiByb3dcbiAgICAgICAgICAgIGZpcnN0Um93RGF5SW5kZXg6IHNlZ0ZpcnN0IC0gcm93Rmlyc3QsXG4gICAgICAgICAgICBsYXN0Um93RGF5SW5kZXg6IHNlZ0xhc3QgLSByb3dGaXJzdCxcblxuICAgICAgICAgICAgLy8gbXVzdCBiZSBtYXRjaGluZyBpbnRlZ2VycyB0byBiZSB0aGUgc2VnbWVudCdzIHN0YXJ0L2VuZFxuICAgICAgICAgICAgaXNTdGFydDogc2VnRmlyc3QgPT09IHJhbmdlRmlyc3QsXG4gICAgICAgICAgICBpc0VuZDogc2VnTGFzdCA9PT0gcmFuZ2VMYXN0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWdzXG4gIH1cblxuXG4gIC8qIEhlYWRlciBSZW5kZXJpbmdcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIHJlbmRlckhlYWRIdG1sKCkge1xuICAgIGxldCB0aGVtZSA9ICh0aGlzIGFzIGFueSkudmlldy5jYWxlbmRhci50aGVtZVxuXG4gICAgcmV0dXJuICcnICtcbiAgICAgICc8ZGl2IGNsYXNzPVwiZmMtcm93ICcgKyB0aGVtZS5nZXRDbGFzcygnaGVhZGVyUm93JykgKyAnXCI+JyArXG4gICAgICAgICc8dGFibGUgY2xhc3M9XCInICsgdGhlbWUuZ2V0Q2xhc3MoJ3RhYmxlR3JpZCcpICsgJ1wiPicgK1xuICAgICAgICAgICc8dGhlYWQ+JyArXG4gICAgICAgICAgICB0aGlzLnJlbmRlckhlYWRUckh0bWwoKSArXG4gICAgICAgICAgJzwvdGhlYWQ+JyArXG4gICAgICAgICc8L3RhYmxlPicgK1xuICAgICAgJzwvZGl2PidcbiAgfVxuXG5cbiAgcmVuZGVySGVhZEludHJvSHRtbCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnRyb0h0bWwoKSAvLyBmYWxsIGJhY2sgdG8gZ2VuZXJpY1xuICB9XG5cblxuICByZW5kZXJIZWFkVHJIdG1sKCkge1xuICAgIHJldHVybiAnJyArXG4gICAgICAnPHRyPicgK1xuICAgICAgICAoKHRoaXMgYXMgYW55KS5pc1JUTCA/ICcnIDogdGhpcy5yZW5kZXJIZWFkSW50cm9IdG1sKCkpICtcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFkRGF0ZUNlbGxzSHRtbCgpICtcbiAgICAgICAgKCh0aGlzIGFzIGFueSkuaXNSVEwgPyB0aGlzLnJlbmRlckhlYWRJbnRyb0h0bWwoKSA6ICcnKSArXG4gICAgICAnPC90cj4nXG4gIH1cblxuXG4gIHJlbmRlckhlYWREYXRlQ2VsbHNIdG1sKCkge1xuICAgIGxldCBodG1scyA9IFtdXG4gICAgbGV0IGNvbFxuICAgIGxldCBkYXRlXG5cbiAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHRoaXMuY29sQ250OyBjb2wrKykge1xuICAgICAgZGF0ZSA9IHRoaXMuZ2V0Q2VsbERhdGUoMCwgY29sKVxuICAgICAgaHRtbHMucHVzaCgodGhpcyBhcyBhbnkpLnJlbmRlckhlYWREYXRlQ2VsbEh0bWwoZGF0ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxzLmpvaW4oJycpXG4gIH1cblxuXG4gIC8vIFRPRE86IHdoZW4gaW50ZXJuYWxBcGlWZXJzaW9uLCBhY2NlcHQgYW4gb2JqZWN0IGZvciBIVE1MIGF0dHJpYnV0ZXNcbiAgLy8gKGNvbHNwYW4gc2hvdWxkIGJlIG5vIGRpZmZlcmVudClcbiAgcmVuZGVySGVhZERhdGVDZWxsSHRtbChkYXRlLCBjb2xzcGFuLCBvdGhlckF0dHJzKSB7XG4gICAgbGV0IHQgPSAodGhpcyBhcyBhbnkpXG4gICAgbGV0IHZpZXcgPSB0LnZpZXdcbiAgICBsZXQgaXNEYXRlVmFsaWQgPSB0LmRhdGVQcm9maWxlLmFjdGl2ZVVuem9uZWRSYW5nZS5jb250YWluc0RhdGUoZGF0ZSkgLy8gVE9ETzogY2FsbGVkIHRvbyBmcmVxdWVudGx5LiBjYWNoZSBzb21laG93LlxuICAgIGxldCBjbGFzc05hbWVzID0gW1xuICAgICAgJ2ZjLWRheS1oZWFkZXInLFxuICAgICAgdmlldy5jYWxlbmRhci50aGVtZS5nZXRDbGFzcygnd2lkZ2V0SGVhZGVyJylcbiAgICBdXG4gICAgbGV0IGlubmVySHRtbFxuXG4gICAgaWYgKHR5cGVvZiB0Lm9wdCgnY29sdW1uSGVhZGVySHRtbCcpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbm5lckh0bWwgPSB0Lm9wdCgnY29sdW1uSGVhZGVySHRtbCcpKGRhdGUpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdC5vcHQoJ2NvbHVtbkhlYWRlclRleHQnKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJIdG1sID0gaHRtbEVzY2FwZSh0Lm9wdCgnY29sdW1uSGVhZGVyVGV4dCcpKGRhdGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICBpbm5lckh0bWwgPSBodG1sRXNjYXBlKGRhdGUuZm9ybWF0KHQuY29sSGVhZEZvcm1hdCkpXG4gICAgfVxuXG4gICAgLy8gaWYgb25seSBvbmUgcm93IG9mIGRheXMsIHRoZSBjbGFzc05hbWVzIG9uIHRoZSBoZWFkZXIgY2FuIHJlcHJlc2VudCB0aGUgc3BlY2lmaWMgZGF5cyBiZW5lYXRoXG4gICAgaWYgKHQucm93Q250ID09PSAxKSB7XG4gICAgICBjbGFzc05hbWVzID0gY2xhc3NOYW1lcy5jb25jYXQoXG4gICAgICAgIC8vIGluY2x1ZGVzIHRoZSBkYXktb2Ytd2VlayBjbGFzc1xuICAgICAgICAvLyBub1RoZW1lSGlnaGxpZ2h0PXRydWUgKGRvbid0IGhpZ2hsaWdodCB0aGUgaGVhZGVyKVxuICAgICAgICB0LmdldERheUNsYXNzZXMoZGF0ZSwgdHJ1ZSlcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdmYy0nICsgZGF5SURzW2RhdGUuZGF5KCldKSAvLyBvbmx5IGFkZCB0aGUgZGF5LW9mLXdlZWsgY2xhc3NcbiAgICB9XG5cbiAgICByZXR1cm4gJycgK1xuICAgICAgJzx0aCBjbGFzcz1cIicgKyBjbGFzc05hbWVzLmpvaW4oJyAnKSArICdcIicgK1xuICAgICAgICAoKGlzRGF0ZVZhbGlkICYmIHQucm93Q250KSA9PT0gMSA/XG4gICAgICAgICAgJyBkYXRhLWRhdGU9XCInICsgZGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSArICdcIicgOlxuICAgICAgICAgICcnKSArXG4gICAgICAgIChjb2xzcGFuID4gMSA/XG4gICAgICAgICAgJyBjb2xzcGFuPVwiJyArIGNvbHNwYW4gKyAnXCInIDpcbiAgICAgICAgICAnJykgK1xuICAgICAgICAob3RoZXJBdHRycyA/XG4gICAgICAgICAgJyAnICsgb3RoZXJBdHRycyA6XG4gICAgICAgICAgJycpICtcbiAgICAgICAgJz4nICtcbiAgICAgICAgKGlzRGF0ZVZhbGlkID9cbiAgICAgICAgICAvLyBkb24ndCBtYWtlIGEgbGluayBpZiB0aGUgaGVhZGluZyBjb3VsZCByZXByZXNlbnQgbXVsdGlwbGUgZGF5cywgb3IgaWYgdGhlcmUncyBvbmx5IG9uZSBkYXkgKGZvcmNlT2ZmKVxuICAgICAgICAgIHZpZXcuYnVpbGRHb3RvQW5jaG9ySHRtbChcbiAgICAgICAgICAgIHsgZGF0ZTogZGF0ZSwgZm9yY2VPZmY6IHQucm93Q250ID4gMSB8fCB0LmNvbENudCA9PT0gMSB9LFxuICAgICAgICAgICAgaW5uZXJIdG1sXG4gICAgICAgICAgKSA6XG4gICAgICAgICAgLy8gaWYgbm90IHZhbGlkLCBkaXNwbGF5IHRleHQsIGJ1dCBubyBsaW5rXG4gICAgICAgICAgaW5uZXJIdG1sXG4gICAgICAgICkgK1xuICAgICAgJzwvdGg+J1xuICB9XG5cblxuICAvKiBCYWNrZ3JvdW5kIFJlbmRlcmluZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgcmVuZGVyQmdUckh0bWwocm93KSB7XG4gICAgcmV0dXJuICcnICtcbiAgICAgICc8dHI+JyArXG4gICAgICAgICgodGhpcyBhcyBhbnkpLmlzUlRMID8gJycgOiB0aGlzLnJlbmRlckJnSW50cm9IdG1sKHJvdykpICtcbiAgICAgICAgdGhpcy5yZW5kZXJCZ0NlbGxzSHRtbChyb3cpICtcbiAgICAgICAgKCh0aGlzIGFzIGFueSkuaXNSVEwgPyB0aGlzLnJlbmRlckJnSW50cm9IdG1sKHJvdykgOiAnJykgK1xuICAgICAgJzwvdHI+J1xuICB9XG5cblxuICByZW5kZXJCZ0ludHJvSHRtbChyb3cpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnRyb0h0bWwoKSAvLyBmYWxsIGJhY2sgdG8gZ2VuZXJpY1xuICB9XG5cblxuICByZW5kZXJCZ0NlbGxzSHRtbChyb3cpIHtcbiAgICBsZXQgaHRtbHMgPSBbXVxuICAgIGxldCBjb2xcbiAgICBsZXQgZGF0ZVxuXG4gICAgZm9yIChjb2wgPSAwOyBjb2wgPCB0aGlzLmNvbENudDsgY29sKyspIHtcbiAgICAgIGRhdGUgPSB0aGlzLmdldENlbGxEYXRlKHJvdywgY29sKVxuICAgICAgaHRtbHMucHVzaCgodGhpcyBhcyBhbnkpLnJlbmRlckJnQ2VsbEh0bWwoZGF0ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxzLmpvaW4oJycpXG4gIH1cblxuXG4gIHJlbmRlckJnQ2VsbEh0bWwoZGF0ZSwgb3RoZXJBdHRycykge1xuICAgIGxldCB0ID0gKHRoaXMgYXMgYW55KVxuICAgIGxldCB2aWV3ID0gdC52aWV3XG4gICAgbGV0IGlzRGF0ZVZhbGlkID0gdC5kYXRlUHJvZmlsZS5hY3RpdmVVbnpvbmVkUmFuZ2UuY29udGFpbnNEYXRlKGRhdGUpIC8vIFRPRE86IGNhbGxlZCB0b28gZnJlcXVlbnRseS4gY2FjaGUgc29tZWhvdy5cbiAgICBsZXQgY2xhc3NlcyA9IHQuZ2V0RGF5Q2xhc3NlcyhkYXRlKVxuXG4gICAgY2xhc3Nlcy51bnNoaWZ0KCdmYy1kYXknLCB2aWV3LmNhbGVuZGFyLnRoZW1lLmdldENsYXNzKCd3aWRnZXRDb250ZW50JykpXG5cbiAgICByZXR1cm4gJzx0ZCBjbGFzcz1cIicgKyBjbGFzc2VzLmpvaW4oJyAnKSArICdcIicgK1xuICAgICAgKGlzRGF0ZVZhbGlkID9cbiAgICAgICAgJyBkYXRhLWRhdGU9XCInICsgZGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSArICdcIicgOiAvLyBpZiBkYXRlIGhhcyBhIHRpbWUsIHdvbid0IGZvcm1hdCBpdFxuICAgICAgICAnJykgK1xuICAgICAgKG90aGVyQXR0cnMgP1xuICAgICAgICAnICcgKyBvdGhlckF0dHJzIDpcbiAgICAgICAgJycpICtcbiAgICAgICc+PC90ZD4nXG4gIH1cblxuXG4gIC8qIEdlbmVyaWNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIHJlbmRlckludHJvSHRtbCgpIHtcbiAgICAvLyBHZW5lcmF0ZXMgdGhlIGRlZmF1bHQgSFRNTCBpbnRybyBmb3IgYW55IHJvdy4gVXNlciBjbGFzc2VzIHNob3VsZCBvdmVycmlkZVxuICB9XG5cblxuICAvLyBUT0RPOiBhIGdlbmVyaWMgbWV0aG9kIGZvciBkZWFsaW5nIHdpdGggPHRyPiwgUlRMLCBpbnRyb1xuICAvLyB3aGVuIGluY3JlbWVudCBpbnRlcm5hbEFwaVZlcnNpb25cbiAgLy8gd3JhcFRyIChzY2hlZHVsZXIpXG5cblxuICAvKiBVdGlsc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgLy8gQXBwbGllcyB0aGUgZ2VuZXJpYyBcImludHJvXCIgYW5kIFwib3V0cm9cIiBIVE1MIHRvIHRoZSBnaXZlbiBjZWxscy5cbiAgLy8gSW50cm8gbWVhbnMgdGhlIGxlZnRtb3N0IGNlbGwgd2hlbiB0aGUgY2FsZW5kYXIgaXMgTFRSIGFuZCB0aGUgcmlnaHRtb3N0IGNlbGwgd2hlbiBSVEwuIFZpY2UtdmVyc2EgZm9yIG91dHJvLlxuICBib29rZW5kQ2VsbHModHJFbCkge1xuICAgIGxldCBpbnRyb0h0bWwgPSB0aGlzLnJlbmRlckludHJvSHRtbCgpXG5cbiAgICBpZiAoaW50cm9IdG1sKSB7XG4gICAgICBpZiAoKHRoaXMgYXMgYW55KS5pc1JUTCkge1xuICAgICAgICB0ckVsLmFwcGVuZChpbnRyb0h0bWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ckVsLnByZXBlbmQoaW50cm9IdG1sKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF5VGFibGVNaXhpbi50cyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWl4aW4ge1xuXG4gIHN0YXRpYyBtaXhJbnRvKGRlc3RDbGFzcykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMucHJvdG90eXBlKS5mb3JFYWNoKChuYW1lKSA9PiB7IC8vIGNvcHkgbWV0aG9kc1xuICAgICAgaWYgKCFkZXN0Q2xhc3MucHJvdG90eXBlW25hbWVdKSB7IC8vIGlmIGRlc3RpbmF0aW9uIGNsYXNzIGRvZXNuJ3QgYWxyZWFkeSBkZWZpbmUgaXRcbiAgICAgICAgZGVzdENsYXNzLnByb3RvdHlwZVtuYW1lXSA9IHRoaXMucHJvdG90eXBlW25hbWVdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qXG4gIHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgbWV0aG9kc1xuICBUT0RPOiByZW1vdmUhIG5vdCB1c2VkIGFueW1vcmVcbiAgKi9cbiAgc3RhdGljIG1peE92ZXIoZGVzdENsYXNzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5wcm90b3R5cGUpLmZvckVhY2goKG5hbWUpID0+IHsgLy8gY29weSBtZXRob2RzXG4gICAgICBkZXN0Q2xhc3MucHJvdG90eXBlW25hbWVdID0gdGhpcy5wcm90b3R5cGVbbmFtZV1cbiAgICB9KVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NaXhpbi50cyIsImltcG9ydCB7VW56b25lZFJhbmdlfSBmcm9tIFwiZnVsbGNhbGVuZGFyXCI7XG5pbXBvcnQgRGF0ZVByb2ZpbGVHZW5lcmF0b3IgZnJvbSBcIi4vRGF0ZVByb2ZpbGVHZW5lcmF0b3JcIjtcblxuY2xhc3MgWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvciBleHRlbmRzIERhdGVQcm9maWxlR2VuZXJhdG9yIHtcblxuICAvLyBDb21wdXRlcyB0aGUgZGF0ZSByYW5nZSB0aGF0IHdpbGwgYmUgcmVuZGVyZWQuXG4gIGJ1aWxkUmVuZGVyUmFuZ2UoY3VycmVudFVuem9uZWRSYW5nZSwgY3VycmVudFJhbmdlVW5pdCwgaXNSYW5nZUFsbERheSkge1xuICAgIGxldCBzdGFydCA9IHRoaXMubXNUb1V0Y01vbWVudChjdXJyZW50VW56b25lZFJhbmdlLnN0YXJ0TXMsIGlzUmFuZ2VBbGxEYXkpXG4gICAgbGV0IGVuZCA9IHRoaXMubXNUb1V0Y01vbWVudChjdXJyZW50VW56b25lZFJhbmdlLmVuZE1zLCBpc1JhbmdlQWxsRGF5KVxuICAgIHJldHVybiBuZXcgVW56b25lZFJhbmdlKHN0YXJ0LCBlbmQpXG4gIH1cblxufVxuXG5leHBvcnQge1xuICAgIFllYXJWaWV3RGF0ZVByb2ZpbGVHZW5lcmF0b3Jcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGNvbXB1dGVHcmVhdGVzdFVuaXQsIGNvbXB1dGVEdXJhdGlvbkdyZWF0ZXN0VW5pdCwgVW56b25lZFJhbmdlIH0gZnJvbSAnZnVsbGNhbGVuZGFyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQcm9maWxlR2VuZXJhdG9yIHtcblxuICBfdmlldzogYW55IC8vIGRpc2NvdXJhZ2VcblxuXG4gIGNvbnN0cnVjdG9yKF92aWV3KSB7XG4gICAgdGhpcy5fdmlldyA9IF92aWV3XG4gIH1cblxuXG4gIG9wdChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXcub3B0KG5hbWUpXG4gIH1cblxuXG4gIHRyaW1IaWRkZW5EYXlzKHVuem9uZWRSYW5nZSkge1xuICAgIHJldHVybiB0aGlzLl92aWV3LnRyaW1IaWRkZW5EYXlzKHVuem9uZWRSYW5nZSlcbiAgfVxuXG5cbiAgbXNUb1V0Y01vbWVudChtcywgZm9yY2VBbGxEYXkpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlldy5jYWxlbmRhci5tc1RvVXRjTW9tZW50KG1zLCBmb3JjZUFsbERheSlcbiAgfVxuXG5cbiAgLyogRGF0ZSBSYW5nZSBDb21wdXRhdGlvblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgLy8gQnVpbGRzIGEgc3RydWN0dXJlIHdpdGggaW5mbyBhYm91dCB3aGF0IHRoZSBkYXRlcy9yYW5nZXMgd2lsbCBiZSBmb3IgdGhlIFwicHJldlwiIHZpZXcuXG4gIGJ1aWxkUHJldihjdXJyZW50RGF0ZVByb2ZpbGUpIHtcbiAgICBsZXQgcHJldkRhdGUgPSBjdXJyZW50RGF0ZVByb2ZpbGUuZGF0ZS5jbG9uZSgpXG4gICAgICAuc3RhcnRPZihjdXJyZW50RGF0ZVByb2ZpbGUuY3VycmVudFJhbmdlVW5pdClcbiAgICAgIC5zdWJ0cmFjdChjdXJyZW50RGF0ZVByb2ZpbGUuZGF0ZUluY3JlbWVudClcblxuICAgIHJldHVybiB0aGlzLmJ1aWxkKHByZXZEYXRlLCAtMSlcbiAgfVxuXG5cbiAgLy8gQnVpbGRzIGEgc3RydWN0dXJlIHdpdGggaW5mbyBhYm91dCB3aGF0IHRoZSBkYXRlcy9yYW5nZXMgd2lsbCBiZSBmb3IgdGhlIFwibmV4dFwiIHZpZXcuXG4gIGJ1aWxkTmV4dChjdXJyZW50RGF0ZVByb2ZpbGUpIHtcbiAgICBsZXQgbmV4dERhdGUgPSBjdXJyZW50RGF0ZVByb2ZpbGUuZGF0ZS5jbG9uZSgpXG4gICAgICAuc3RhcnRPZihjdXJyZW50RGF0ZVByb2ZpbGUuY3VycmVudFJhbmdlVW5pdClcbiAgICAgIC5hZGQoY3VycmVudERhdGVQcm9maWxlLmRhdGVJbmNyZW1lbnQpXG5cbiAgICByZXR1cm4gdGhpcy5idWlsZChuZXh0RGF0ZSwgMSlcbiAgfVxuXG5cbiAgLy8gQnVpbGRzIGEgc3RydWN0dXJlIGhvbGRpbmcgZGF0ZXMvcmFuZ2VzIGZvciByZW5kZXJpbmcgYXJvdW5kIHRoZSBnaXZlbiBkYXRlLlxuICAvLyBPcHRpb25hbCBkaXJlY3Rpb24gcGFyYW0gaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRhdGUgaXMgYmVpbmcgaW5jcmVtZW50ZWQvZGVjcmVtZW50ZWRcbiAgLy8gZnJvbSBpdHMgcHJldmlvdXMgdmFsdWUuIGRlY3JlbWVudGVkID0gLTEsIGluY3JlbWVudGVkID0gMSAoZGVmYXVsdCkuXG4gIGJ1aWxkKGRhdGUsIGRpcmVjdGlvbiwgZm9yY2VUb1ZhbGlkPSBmYWxzZSkge1xuICAgIGxldCBpc0RhdGVBbGxEYXkgPSAhZGF0ZS5oYXNUaW1lKClcbiAgICBsZXQgdmFsaWRVbnpvbmVkUmFuZ2VcbiAgICBsZXQgbWluVGltZSA9IG51bGxcbiAgICBsZXQgbWF4VGltZSA9IG51bGxcbiAgICBsZXQgY3VycmVudEluZm9cbiAgICBsZXQgaXNSYW5nZUFsbERheVxuICAgIGxldCByZW5kZXJVbnpvbmVkUmFuZ2VcbiAgICBsZXQgYWN0aXZlVW56b25lZFJhbmdlXG4gICAgbGV0IGlzVmFsaWRcblxuICAgIHZhbGlkVW56b25lZFJhbmdlID0gdGhpcy5idWlsZFZhbGlkUmFuZ2UoKVxuICAgIHZhbGlkVW56b25lZFJhbmdlID0gdGhpcy50cmltSGlkZGVuRGF5cyh2YWxpZFVuem9uZWRSYW5nZSlcblxuICAgIGlmIChmb3JjZVRvVmFsaWQpIHtcbiAgICAgIGRhdGUgPSB0aGlzLm1zVG9VdGNNb21lbnQoXG4gICAgICAgIHZhbGlkVW56b25lZFJhbmdlLmNvbnN0cmFpbkRhdGUoZGF0ZSksIC8vIHJldHVybnMgTVNcbiAgICAgICAgaXNEYXRlQWxsRGF5XG4gICAgICApXG4gICAgfVxuXG4gICAgY3VycmVudEluZm8gPSB0aGlzLmJ1aWxkQ3VycmVudFJhbmdlSW5mbyhkYXRlLCBkaXJlY3Rpb24pXG4gICAgaXNSYW5nZUFsbERheSA9IC9eKHllYXJ8bW9udGh8d2Vla3xkYXkpJC8udGVzdChjdXJyZW50SW5mby51bml0KVxuICAgIHJlbmRlclVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRSZW5kZXJSYW5nZShcbiAgICAgIHRoaXMudHJpbUhpZGRlbkRheXMoY3VycmVudEluZm8udW56b25lZFJhbmdlKSxcbiAgICAgIGN1cnJlbnRJbmZvLnVuaXQsXG4gICAgICBpc1JhbmdlQWxsRGF5XG4gICAgKVxuICAgIHJlbmRlclVuem9uZWRSYW5nZSA9IHRoaXMudHJpbUhpZGRlbkRheXMocmVuZGVyVW56b25lZFJhbmdlKVxuICAgIGFjdGl2ZVVuem9uZWRSYW5nZSA9IHJlbmRlclVuem9uZWRSYW5nZS5jbG9uZSgpXG5cbiAgICBpZiAoIXRoaXMub3B0KCdzaG93Tm9uQ3VycmVudERhdGVzJykpIHtcbiAgICAgIGFjdGl2ZVVuem9uZWRSYW5nZSA9IGFjdGl2ZVVuem9uZWRSYW5nZS5pbnRlcnNlY3QoY3VycmVudEluZm8udW56b25lZFJhbmdlKVxuICAgIH1cblxuICAgIG1pblRpbWUgPSBtb21lbnQuZHVyYXRpb24odGhpcy5vcHQoJ21pblRpbWUnKSlcbiAgICBtYXhUaW1lID0gbW9tZW50LmR1cmF0aW9uKHRoaXMub3B0KCdtYXhUaW1lJykpXG4gICAgYWN0aXZlVW56b25lZFJhbmdlID0gdGhpcy5hZGp1c3RBY3RpdmVSYW5nZShhY3RpdmVVbnpvbmVkUmFuZ2UsIG1pblRpbWUsIG1heFRpbWUpXG4gICAgYWN0aXZlVW56b25lZFJhbmdlID0gYWN0aXZlVW56b25lZFJhbmdlLmludGVyc2VjdCh2YWxpZFVuem9uZWRSYW5nZSkgLy8gbWlnaHQgcmV0dXJuIG51bGxcblxuICAgIGlmIChhY3RpdmVVbnpvbmVkUmFuZ2UpIHtcbiAgICAgIGRhdGUgPSB0aGlzLm1zVG9VdGNNb21lbnQoXG4gICAgICAgIGFjdGl2ZVVuem9uZWRSYW5nZS5jb25zdHJhaW5EYXRlKGRhdGUpLCAvLyByZXR1cm5zIE1TXG4gICAgICAgIGlzRGF0ZUFsbERheVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIGl0J3MgaW52YWxpZCBpZiB0aGUgb3JpZ2luYWxseSByZXF1ZXN0ZWQgZGF0ZSBpcyBub3QgY29udGFpbmVkLFxuICAgIC8vIG9yIGlmIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IG91dHNpZGUgb2YgdGhlIHZhbGlkIHJhbmdlLlxuICAgIGlzVmFsaWQgPSBjdXJyZW50SW5mby51bnpvbmVkUmFuZ2UuaW50ZXJzZWN0c1dpdGgodmFsaWRVbnpvbmVkUmFuZ2UpXG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gY29uc3RyYWludCBmb3Igd2hlcmUgcHJldi9uZXh0IG9wZXJhdGlvbnMgY2FuIGdvIGFuZCB3aGVyZSBldmVudHMgY2FuIGJlIGRyYWdnZWQvcmVzaXplZCB0by5cbiAgICAgIC8vIGFuIG9iamVjdCB3aXRoIG9wdGlvbmFsIHN0YXJ0IGFuZCBlbmQgcHJvcGVydGllcy5cbiAgICAgIHZhbGlkVW56b25lZFJhbmdlOiB2YWxpZFVuem9uZWRSYW5nZSxcblxuICAgICAgLy8gcmFuZ2UgdGhlIHZpZXcgaXMgZm9ybWFsbHkgcmVzcG9uc2libGUgZm9yLlxuICAgICAgLy8gZm9yIGV4YW1wbGUsIGEgbW9udGggdmlldyBtaWdodCBoYXZlIDFzdC0zMXN0LCBleGNsdWRpbmcgcGFkZGVkIGRhdGVzXG4gICAgICBjdXJyZW50VW56b25lZFJhbmdlOiBjdXJyZW50SW5mby51bnpvbmVkUmFuZ2UsXG5cbiAgICAgIC8vIG5hbWUgb2YgbGFyZ2VzdCB1bml0IGJlaW5nIGRpc3BsYXllZCwgbGlrZSBcIm1vbnRoXCIgb3IgXCJ3ZWVrXCJcbiAgICAgIGN1cnJlbnRSYW5nZVVuaXQ6IGN1cnJlbnRJbmZvLnVuaXQsXG5cbiAgICAgIGlzUmFuZ2VBbGxEYXk6IGlzUmFuZ2VBbGxEYXksXG5cbiAgICAgIC8vIGRhdGVzIHRoYXQgZGlzcGxheSBldmVudHMgYW5kIGFjY2VwdCBkcmFnLW4tZHJvcFxuICAgICAgLy8gd2lsbCBiZSBgbnVsbGAgaWYgbm8gZGF0ZXMgYWNjZXB0IGV2ZW50c1xuICAgICAgYWN0aXZlVW56b25lZFJhbmdlOiBhY3RpdmVVbnpvbmVkUmFuZ2UsXG5cbiAgICAgIC8vIGRhdGUgcmFuZ2Ugd2l0aCBhIHJlbmRlcmVkIHNrZWxldG9uXG4gICAgICAvLyBpbmNsdWRlcyBub3QtYWN0aXZlIGRheXMgdGhhdCBuZWVkIHNvbWUgc29ydCBvZiBET01cbiAgICAgIHJlbmRlclVuem9uZWRSYW5nZTogcmVuZGVyVW56b25lZFJhbmdlLFxuXG4gICAgICAvLyBEdXJhdGlvbiBvYmplY3QgdGhhdCBkZW5vdGVzIHRoZSBmaXJzdCB2aXNpYmxlIHRpbWUgb2YgYW55IGdpdmVuIGRheVxuICAgICAgbWluVGltZTogbWluVGltZSxcblxuICAgICAgLy8gRHVyYXRpb24gb2JqZWN0IHRoYXQgZGVub3RlcyB0aGUgZXhjbHVzaXZlIHZpc2libGUgZW5kIHRpbWUgb2YgYW55IGdpdmVuIGRheVxuICAgICAgbWF4VGltZTogbWF4VGltZSxcblxuICAgICAgaXNWYWxpZDogaXNWYWxpZCxcblxuICAgICAgZGF0ZTogZGF0ZSxcblxuICAgICAgLy8gaG93IGZhciB0aGUgY3VycmVudCBkYXRlIHdpbGwgbW92ZSBmb3IgYSBwcmV2L25leHQgb3BlcmF0aW9uXG4gICAgICBkYXRlSW5jcmVtZW50OiB0aGlzLmJ1aWxkRGF0ZUluY3JlbWVudChjdXJyZW50SW5mby5kdXJhdGlvbilcbiAgICAgICAgLy8gcGFzcyBhIGZhbGxiYWNrIChtaWdodCBiZSBudWxsKSBeXG4gICAgfVxuICB9XG5cblxuICAvLyBCdWlsZHMgYW4gb2JqZWN0IHdpdGggb3B0aW9uYWwgc3RhcnQvZW5kIHByb3BlcnRpZXMuXG4gIC8vIEluZGljYXRlcyB0aGUgbWluaW11bS9tYXhpbXVtIGRhdGVzIHRvIGRpc3BsYXkuXG4gIC8vIG5vdCByZXNwb25zaWJsZSBmb3IgdHJpbW1pbmcgaGlkZGVuIGRheXMuXG4gIGJ1aWxkVmFsaWRSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlldy5nZXRVbnpvbmVkUmFuZ2VPcHRpb24oJ3ZhbGlkUmFuZ2UnLCB0aGlzLl92aWV3LmNhbGVuZGFyLmdldE5vdygpKSB8fFxuICAgICAgbmV3IFVuem9uZWRSYW5nZSgpIC8vIGNvbXBsZXRlbHkgb3Blbi1lbmRlZFxuICB9XG5cblxuICAvLyBCdWlsZHMgYSBzdHJ1Y3R1cmUgd2l0aCBpbmZvIGFib3V0IHRoZSBcImN1cnJlbnRcIiByYW5nZSwgdGhlIHJhbmdlIHRoYXQgaXNcbiAgLy8gaGlnaGxpZ2h0ZWQgYXMgYmVpbmcgdGhlIGN1cnJlbnQgbW9udGggZm9yIGV4YW1wbGUuXG4gIC8vIFNlZSBidWlsZCgpIGZvciBhIGRlc2NyaXB0aW9uIG9mIGBkaXJlY3Rpb25gLlxuICAvLyBHdWFyYW50ZWVkIHRvIGhhdmUgYHJhbmdlYCBhbmQgYHVuaXRgIHByb3BlcnRpZXMuIGBkdXJhdGlvbmAgaXMgb3B0aW9uYWwuXG4gIC8vIFRPRE86IGFjY2VwdCBhIE1TLXRpbWUgaW5zdGVhZCBvZiBhIG1vbWVudCBgZGF0ZWA/XG4gIGJ1aWxkQ3VycmVudFJhbmdlSW5mbyhkYXRlLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgdmlld1NwZWMgPSB0aGlzLl92aWV3LnZpZXdTcGVjXG4gICAgbGV0IGR1cmF0aW9uID0gbnVsbFxuICAgIGxldCB1bml0ID0gbnVsbFxuICAgIGxldCB1bnpvbmVkUmFuZ2UgPSBudWxsXG4gICAgbGV0IGRheUNvdW50XG5cbiAgICBpZiAodmlld1NwZWMuZHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gdmlld1NwZWMuZHVyYXRpb25cbiAgICAgIHVuaXQgPSB2aWV3U3BlYy5kdXJhdGlvblVuaXRcbiAgICAgIHVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRSYW5nZUZyb21EdXJhdGlvbihkYXRlLCBkaXJlY3Rpb24sIGR1cmF0aW9uLCB1bml0KVxuICAgIH0gZWxzZSBpZiAoKGRheUNvdW50ID0gdGhpcy5vcHQoJ2RheUNvdW50JykpKSB7XG4gICAgICB1bml0ID0gJ2RheSdcbiAgICAgIHVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRSYW5nZUZyb21EYXlDb3VudChkYXRlLCBkaXJlY3Rpb24sIGRheUNvdW50KVxuICAgIH0gZWxzZSBpZiAoKHVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRDdXN0b21WaXNpYmxlUmFuZ2UoZGF0ZSkpKSB7XG4gICAgICB1bml0ID0gY29tcHV0ZUdyZWF0ZXN0VW5pdCh1bnpvbmVkUmFuZ2UuZ2V0U3RhcnQoKSwgdW56b25lZFJhbmdlLmdldEVuZCgpKVxuICAgIH0gZWxzZSB7XG4gICAgICBkdXJhdGlvbiA9IHRoaXMuZ2V0RmFsbGJhY2tEdXJhdGlvbigpXG4gICAgICB1bml0ID0gY29tcHV0ZUdyZWF0ZXN0VW5pdChkdXJhdGlvbilcbiAgICAgIHVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRSYW5nZUZyb21EdXJhdGlvbihkYXRlLCBkaXJlY3Rpb24sIGR1cmF0aW9uLCB1bml0KVxuICAgIH1cblxuICAgIHJldHVybiB7IGR1cmF0aW9uOiBkdXJhdGlvbiwgdW5pdDogdW5pdCwgdW56b25lZFJhbmdlOiB1bnpvbmVkUmFuZ2UgfVxuICB9XG5cblxuICBnZXRGYWxsYmFja0R1cmF0aW9uKCkge1xuICAgIHJldHVybiBtb21lbnQuZHVyYXRpb24oeyBkYXlzOiAxIH0pXG4gIH1cblxuXG4gIC8vIFJldHVybnMgYSBuZXcgYWN0aXZlVW56b25lZFJhbmdlIHRvIGhhdmUgdGltZSB2YWx1ZXMgKHVuLWFtYmlndWF0ZSlcbiAgLy8gbWluVGltZSBvciBtYXhUaW1lIGNhdXNlcyB0aGUgcmFuZ2UgdG8gZXhwYW5kLlxuICBhZGp1c3RBY3RpdmVSYW5nZSh1bnpvbmVkUmFuZ2UsIG1pblRpbWUsIG1heFRpbWUpIHtcbiAgICBsZXQgc3RhcnQgPSB1bnpvbmVkUmFuZ2UuZ2V0U3RhcnQoKVxuICAgIGxldCBlbmQgPSB1bnpvbmVkUmFuZ2UuZ2V0RW5kKClcblxuICAgIGlmICh0aGlzLl92aWV3LnVzZXNNaW5NYXhUaW1lKSB7XG5cbiAgICAgIGlmIChtaW5UaW1lIDwgMCkge1xuICAgICAgICBzdGFydC50aW1lKDApLmFkZChtaW5UaW1lKVxuICAgICAgfVxuXG4gICAgICBpZiAobWF4VGltZSA+IDI0ICogNjAgKiA2MCAqIDEwMDApIHsgLy8gYmV5b25kIDI0IGhvdXJzP1xuICAgICAgICBlbmQudGltZShtYXhUaW1lIC0gKDI0ICogNjAgKiA2MCAqIDEwMDApKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgVW56b25lZFJhbmdlKHN0YXJ0LCBlbmQpXG4gIH1cblxuXG4gIC8vIEJ1aWxkcyB0aGUgXCJjdXJyZW50XCIgcmFuZ2Ugd2hlbiBpdCBpcyBzcGVjaWZpZWQgYXMgYW4gZXhwbGljaXQgZHVyYXRpb24uXG4gIC8vIGB1bml0YCBpcyB0aGUgYWxyZWFkeS1jb21wdXRlZCBjb21wdXRlR3JlYXRlc3RVbml0IHZhbHVlIG9mIGR1cmF0aW9uLlxuICAvLyBUT0RPOiBhY2NlcHQgYSBNUy10aW1lIGluc3RlYWQgb2YgYSBtb21lbnQgYGRhdGVgP1xuICBidWlsZFJhbmdlRnJvbUR1cmF0aW9uKGRhdGUsIGRpcmVjdGlvbiwgZHVyYXRpb24sIHVuaXQpIHtcbiAgICBsZXQgYWxpZ25tZW50ID0gdGhpcy5vcHQoJ2RhdGVBbGlnbm1lbnQnKVxuICAgIGxldCBkYXRlSW5jcmVtZW50SW5wdXRcbiAgICBsZXQgZGF0ZUluY3JlbWVudER1cmF0aW9uXG4gICAgbGV0IHN0YXJ0XG4gICAgbGV0IGVuZFxuICAgIGxldCByZXNcblxuICAgIC8vIGNvbXB1dGUgd2hhdCB0aGUgYWxpZ25tZW50IHNob3VsZCBiZVxuICAgIGlmICghYWxpZ25tZW50KSB7XG4gICAgICBkYXRlSW5jcmVtZW50SW5wdXQgPSB0aGlzLm9wdCgnZGF0ZUluY3JlbWVudCcpXG5cbiAgICAgIGlmIChkYXRlSW5jcmVtZW50SW5wdXQpIHtcbiAgICAgICAgZGF0ZUluY3JlbWVudER1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKGRhdGVJbmNyZW1lbnRJbnB1dClcblxuICAgICAgICAvLyB1c2UgdGhlIHNtYWxsZXIgb2YgdGhlIHR3byB1bml0c1xuICAgICAgICBpZiAoZGF0ZUluY3JlbWVudER1cmF0aW9uIDwgZHVyYXRpb24pIHtcbiAgICAgICAgICBhbGlnbm1lbnQgPSBjb21wdXRlRHVyYXRpb25HcmVhdGVzdFVuaXQoZGF0ZUluY3JlbWVudER1cmF0aW9uLCBkYXRlSW5jcmVtZW50SW5wdXQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxpZ25tZW50ID0gdW5pdFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbm1lbnQgPSB1bml0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHZpZXcgZGlzcGxheXMgYSBzaW5nbGUgZGF5IG9yIHNtYWxsZXJcbiAgICBpZiAoZHVyYXRpb24uYXMoJ2RheXMnKSA8PSAxKSB7XG4gICAgICBpZiAodGhpcy5fdmlldy5pc0hpZGRlbkRheShzdGFydCkpIHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLl92aWV3LnNraXBIaWRkZW5EYXlzKHN0YXJ0LCBkaXJlY3Rpb24pXG4gICAgICAgIHN0YXJ0LnN0YXJ0T2YoJ2RheScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZVJlcygpIHtcbiAgICAgIHN0YXJ0ID0gZGF0ZS5jbG9uZSgpLnN0YXJ0T2YoYWxpZ25tZW50KVxuICAgICAgZW5kID0gc3RhcnQuY2xvbmUoKS5hZGQoZHVyYXRpb24pXG4gICAgICByZXMgPSBuZXcgVW56b25lZFJhbmdlKHN0YXJ0LCBlbmQpXG4gICAgfVxuXG4gICAgY29tcHV0ZVJlcygpXG5cbiAgICAvLyBpZiByYW5nZSBpcyBjb21wbGV0ZWx5IGVudmVsb3BlZCBieSBoaWRkZW4gZGF5cywgZ28gcGFzdCB0aGUgaGlkZGVuIGRheXNcbiAgICBpZiAoIXRoaXMudHJpbUhpZGRlbkRheXMocmVzKSkge1xuICAgICAgZGF0ZSA9IHRoaXMuX3ZpZXcuc2tpcEhpZGRlbkRheXMoZGF0ZSwgZGlyZWN0aW9uKVxuICAgICAgY29tcHV0ZVJlcygpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc1xuICB9XG5cblxuICAvLyBCdWlsZHMgdGhlIFwiY3VycmVudFwiIHJhbmdlIHdoZW4gYSBkYXlDb3VudCBpcyBzcGVjaWZpZWQuXG4gIC8vIFRPRE86IGFjY2VwdCBhIE1TLXRpbWUgaW5zdGVhZCBvZiBhIG1vbWVudCBgZGF0ZWA/XG4gIGJ1aWxkUmFuZ2VGcm9tRGF5Q291bnQoZGF0ZSwgZGlyZWN0aW9uLCBkYXlDb3VudCkge1xuICAgIGxldCBjdXN0b21BbGlnbm1lbnQgPSB0aGlzLm9wdCgnZGF0ZUFsaWdubWVudCcpXG4gICAgbGV0IHJ1bm5pbmdDb3VudCA9IDBcbiAgICBsZXQgc3RhcnRcbiAgICBsZXQgZW5kXG5cbiAgICBpZiAoY3VzdG9tQWxpZ25tZW50IHx8IGRpcmVjdGlvbiAhPT0gLTEpIHtcblxuICAgICAgc3RhcnQgPSBkYXRlLmNsb25lKClcblxuICAgICAgaWYgKGN1c3RvbUFsaWdubWVudCkge1xuICAgICAgICBzdGFydC5zdGFydE9mKGN1c3RvbUFsaWdubWVudClcbiAgICAgIH1cblxuICAgICAgc3RhcnQuc3RhcnRPZignZGF5JylcbiAgICAgIHN0YXJ0ID0gdGhpcy5fdmlldy5za2lwSGlkZGVuRGF5cyhzdGFydClcblxuICAgICAgZW5kID0gc3RhcnQuY2xvbmUoKVxuICAgICAgZG8ge1xuICAgICAgICBlbmQuYWRkKDEsICdkYXknKVxuICAgICAgICBpZiAoIXRoaXMuX3ZpZXcuaXNIaWRkZW5EYXkoZW5kKSkge1xuICAgICAgICAgIHJ1bm5pbmdDb3VudCsrXG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKHJ1bm5pbmdDb3VudCA8IGRheUNvdW50KVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgZW5kID0gZGF0ZS5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLmFkZCgxLCAnZGF5JylcbiAgICAgIGVuZCA9IHRoaXMuX3ZpZXcuc2tpcEhpZGRlbkRheXMoZW5kLCAtMSwgdHJ1ZSlcblxuICAgICAgc3RhcnQgPSBlbmQuY2xvbmUoKVxuICAgICAgZG8ge1xuICAgICAgICBzdGFydC5hZGQoLTEsICdkYXknKVxuICAgICAgICBpZiAoIXRoaXMuX3ZpZXcuaXNIaWRkZW5EYXkoc3RhcnQpKSB7XG4gICAgICAgICAgcnVubmluZ0NvdW50KytcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAocnVubmluZ0NvdW50IDwgZGF5Q291bnQpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFVuem9uZWRSYW5nZShzdGFydCwgZW5kKVxuICB9XG5cblxuICAvLyBCdWlsZHMgYSBub3JtYWxpemVkIHJhbmdlIG9iamVjdCBmb3IgdGhlIFwidmlzaWJsZVwiIHJhbmdlLFxuICAvLyB3aGljaCBpcyBhIHdheSB0byBkZWZpbmUgdGhlIGN1cnJlbnRVbnpvbmVkUmFuZ2UgYW5kIGFjdGl2ZVVuem9uZWRSYW5nZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAvLyBUT0RPOiBhY2NlcHQgYSBNUy10aW1lIGluc3RlYWQgb2YgYSBtb21lbnQgYGRhdGVgP1xuICBidWlsZEN1c3RvbVZpc2libGVSYW5nZShkYXRlKSB7XG4gICAgbGV0IHZpc2libGVVbnpvbmVkUmFuZ2UgPSB0aGlzLl92aWV3LmdldFVuem9uZWRSYW5nZU9wdGlvbihcbiAgICAgICd2aXNpYmxlUmFuZ2UnLFxuICAgICAgdGhpcy5fdmlldy5jYWxlbmRhci5hcHBseVRpbWV6b25lKGRhdGUpIC8vIGNvcnJlY3Qgem9uZS4gYWxzbyBnZW5lcmF0ZXMgbmV3IG9iaiB0aGF0IGF2b2lkcyBtdXRhdGlvbnNcbiAgICApXG5cbiAgICBpZiAodmlzaWJsZVVuem9uZWRSYW5nZSAmJiAodmlzaWJsZVVuem9uZWRSYW5nZS5zdGFydE1zID09IG51bGwgfHwgdmlzaWJsZVVuem9uZWRSYW5nZS5lbmRNcyA9PSBudWxsKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaWJsZVVuem9uZWRSYW5nZVxuICB9XG5cblxuICAvLyBDb21wdXRlcyB0aGUgcmFuZ2UgdGhhdCB3aWxsIHJlcHJlc2VudCB0aGUgZWxlbWVudC9jZWxscyBmb3IgKnJlbmRlcmluZyosXG4gIC8vIGJ1dCB3aGljaCBtYXkgaGF2ZSB2b2lkZWQgZGF5cy90aW1lcy5cbiAgLy8gbm90IHJlc3BvbnNpYmxlIGZvciB0cmltbWluZyBoaWRkZW4gZGF5cy5cbiAgYnVpbGRSZW5kZXJSYW5nZShjdXJyZW50VW56b25lZFJhbmdlLCBjdXJyZW50UmFuZ2VVbml0LCBpc1JhbmdlQWxsRGF5KSB7XG4gICAgcmV0dXJuIGN1cnJlbnRVbnpvbmVkUmFuZ2UuY2xvbmUoKVxuICB9XG5cblxuICAvLyBDb21wdXRlIHRoZSBkdXJhdGlvbiB2YWx1ZSB0aGF0IHNob3VsZCBiZSBhZGRlZC9zdWJzdHJhY3RlZCB0byB0aGUgY3VycmVudCBkYXRlXG4gIC8vIHdoZW4gYSBwcmV2L25leHQgb3BlcmF0aW9uIGhhcHBlbnMuXG4gIGJ1aWxkRGF0ZUluY3JlbWVudChmYWxsYmFjaykge1xuICAgIGxldCBkYXRlSW5jcmVtZW50SW5wdXQgPSB0aGlzLm9wdCgnZGF0ZUluY3JlbWVudCcpXG4gICAgbGV0IGN1c3RvbUFsaWdubWVudFxuXG4gICAgaWYgKGRhdGVJbmNyZW1lbnRJbnB1dCkge1xuICAgICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbihkYXRlSW5jcmVtZW50SW5wdXQpXG4gICAgfSBlbHNlIGlmICgoY3VzdG9tQWxpZ25tZW50ID0gdGhpcy5vcHQoJ2RhdGVBbGlnbm1lbnQnKSkpIHtcbiAgICAgIHJldHVybiBtb21lbnQuZHVyYXRpb24oMSwgY3VzdG9tQWxpZ25tZW50KVxuICAgIH0gZWxzZSBpZiAoZmFsbGJhY2spIHtcbiAgICAgIHJldHVybiBmYWxsYmFja1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKHsgZGF5czogMSB9KVxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZVByb2ZpbGVHZW5lcmF0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9