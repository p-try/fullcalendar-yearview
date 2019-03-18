(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fullcalendar"));
	else if(typeof define === 'function' && define.amd)
		define(["fullcalendar"], factory);
	else if(typeof exports === 'object')
		exports["FullCalendar"] = factory(require("fullcalendar"));
	else
		root["FullCalendar"] = factory(root["FullCalendar"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

Object.defineProperty(exports, "__esModule", { value: true });
var YearView_1 = __webpack_require__(3);
$.fullCalendar.defineView('year', {
    'class': YearView_1.default,
    duration: { years: 1 }
});


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fullcalendar_1 = __webpack_require__(1);
var YearGrid_1 = __webpack_require__(4);
var YearViewDateProfileGenerator_1 = __webpack_require__(6);
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
YearView.prototype.dateProfileGeneratorClass = YearViewDateProfileGenerator_1.default;


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
var fullcalendar_1 = __webpack_require__(1);
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
}(fullcalendar_1.DayTableMixin));
exports.default = YearTableMixin;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var fullcalendar_1 = __webpack_require__(1);
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
}(fullcalendar_1.BasicViewDateProfileGenerator));
exports.default = YearViewDateProfileGenerator;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiYjI4MzA5ZmQzOWM0NGUxYWZmMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwiZnVsbGNhbGVuZGFyXCIsXCJjb21tb25qczJcIjpcImZ1bGxjYWxlbmRhclwiLFwiYW1kXCI6XCJmdWxsY2FsZW5kYXJcIixcInJvb3RcIjpcIkZ1bGxDYWxlbmRhclwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1llYXJWaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9ZZWFyR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWWVhclRhYmxlTWl4aW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1llYXJWaWV3RGF0ZVByb2ZpbGVHZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTs7Ozs7Ozs7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QUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztvQkFDeEQsS0FBSyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pELEtBQUssQ0FBQzt3QkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO3dCQUFDLFNBQVM7b0JBQ2pEO3dCQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFBQyxTQUFTO3lCQUFFO3dCQUM1RyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQUMsTUFBTTt5QkFBRTt3QkFDdEYsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FB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QUFFLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0lBRUgsbUNBQUM7QUFBRCxDQUFDLENBVHlELDRDQUE2QixHQVN0RiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZnVsbGNhbGVuZGFyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImZ1bGxjYWxlbmRhclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJGdWxsQ2FsZW5kYXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJmdWxsY2FsZW5kYXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkZ1bGxDYWxlbmRhclwiXSA9IGZhY3Rvcnkocm9vdFtcIkZ1bGxDYWxlbmRhclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmIyODMwOWZkMzljNDRlMWFmZjAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJmdWxsY2FsZW5kYXJcIixcImNvbW1vbmpzMlwiOlwiZnVsbGNhbGVuZGFyXCIsXCJhbWRcIjpcImZ1bGxjYWxlbmRhclwiLFwicm9vdFwiOlwiRnVsbENhbGVuZGFyXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBZZWFyVmlldyBmcm9tIFwiLi9ZZWFyVmlld1wiO1xuXG4kLmZ1bGxDYWxlbmRhci5kZWZpbmVWaWV3KCd5ZWFyJywge1xuICAgICdjbGFzcyc6IFllYXJWaWV3LFxuICAgIGR1cmF0aW9uOiB7IHllYXJzOiAxIH1cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qIEEgbW9udGggdmlldyB3aXRoIGRheSBjZWxscyBydW5uaW5nIGluIHJvd3MgKG9uZS1wZXItd2VlaykgYW5kIGNvbHVtbnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbXBvcnQge0Jhc2ljVmlld30gZnJvbSBcImZ1bGxjYWxlbmRhclwiO1xuaW1wb3J0IFllYXJHcmlkIGZyb20gXCIuL1llYXJHcmlkXCI7XG5pbXBvcnQgWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvciBmcm9tIFwiLi9ZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJWaWV3IGV4dGVuZHMgQmFzaWNWaWV3IHtcblxuICBjb25zdHJ1Y3RvcihjYWxlbmRhciwgdmlld1NwZWMpIHtcbiAgICBzdXBlcihjYWxlbmRhciwgdmlld1NwZWMpXG4gIH1cblxuICBpbnN0YW50aWF0ZURheUdyaWQoKSB7XG4gICAgLy8gZ2VuZXJhdGUgYSBzdWJjbGFzcyBvbiB0aGUgZmx5IHdpdGggQmFzaWNWaWV3LXNwZWNpZmljIGJlaGF2aW9yXG4gICAgLy8gVE9ETzogY2FjaGUgdGhpcyBzdWJjbGFzc1xuICAgIGxldCBzdWJjbGFzczogYW55ID0gdGhpcy5tYWtlRGF5R3JpZFN1YmNsYXNzKHRoaXMuZGF5R3JpZENsYXNzKVxuXG4gICAgcmV0dXJuIG5ldyBzdWJjbGFzcyh0aGlzKVxuICB9XG5cblxuICAvLyBjdXN0b21pemUgdGhlIHJlbmRlcmluZyBiZWhhdmlvciBvZiBCYXNpY1ZpZXcncyBkYXlHcmlkXG4gIG1ha2VEYXlHcmlkU3ViY2xhc3MoU3VwZXJDbGFzcykge1xuXG4gICAgcmV0dXJuIGNsYXNzIFN1YkNsYXNzIGV4dGVuZHMgU3VwZXJDbGFzcyB7XG5cbiAgICAgIGNvbFdlZWtOdW1iZXJzVmlzaWJsZTogYm9vbGVhbiA9IHRydWUgLy8gZGlzcGxheSB3ZWVrIG51bWJlcnMgYWxvbmcgdGhlIHNpZGU/XG5cblxuICAgICAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgd2lsbCBnbyBiZWZvcmUgdGhlIGRheS1vZiB3ZWVrIGhlYWRlciBjZWxsc1xuICAgICAgcmVuZGVySGVhZEludHJvSHRtbCgpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcblxuICAgICAgICBpZiAodGhpcy5jb2xXZWVrTnVtYmVyc1Zpc2libGUpIHtcbiAgICAgICAgICByZXR1cm4gJycgK1xuICAgICAgICAgICAgJzx0aCBjbGFzcz1cImZjLXdlZWstbnVtYmVyICcgKyB2aWV3LmNhbGVuZGFyLnRoZW1lLmdldENsYXNzKCd3aWRnZXRIZWFkZXInKSArICdcIiAnICsgdmlldy53ZWVrTnVtYmVyU3R5bGVBdHRyKCkgKyAnPicgK1xuICAgICAgICAgICAgJzxzcGFuPicgK1xuICAgICAgICAgICAgJzwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8L3RoPidcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuXG5cbiAgICAgIC8vIEdlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IHdpbGwgZ28gYmVmb3JlIGNvbnRlbnQtc2tlbGV0b24gY2VsbHMgdGhhdCBkaXNwbGF5IHRoZSBkYXkvd2VlayBudW1iZXJzXG4gICAgICByZW5kZXJOdW1iZXJJbnRyb0h0bWwocm93KSB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3XG4gICAgICAgIGxldCBtb250aFN0YXJ0ID0gdGhpcy5nZXRDZWxsRGF0ZShyb3csIDApXG5cbiAgICAgICAgaWYgKHRoaXMuY29sV2Vla051bWJlcnNWaXNpYmxlKSB7XG4gICAgICAgICAgcmV0dXJuICcnICtcbiAgICAgICAgICAgICc8dGQgY2xhc3M9XCJmYy13ZWVrLW51bWJlclwiICcgKyB2aWV3LndlZWtOdW1iZXJTdHlsZUF0dHIoKSArICc+JyArXG4gICAgICAgICAgICB2aWV3LmJ1aWxkR290b0FuY2hvckh0bWwoIC8vIGFzaWRlIGZyb20gbGluaywgaW1wb3J0YW50IGZvciBtYXRjaENlbGxXaWR0aHNcbiAgICAgICAgICAgICAgeyBkYXRlOiBtb250aFN0YXJ0LCB0eXBlOiAnd2VlaycsIGZvcmNlT2ZmOiB0aGlzLmNvbENudCA9PT0gMSB9LFxuICAgICAgICAgICAgICBtb250aFN0YXJ0LmZvcm1hdCgnTU1NJykgLy8gaW5uZXIgSFRNTFxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAnPC90ZD4nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cblxuXG4gICAgICAvLyBHZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCBnb2VzIGJlZm9yZSB0aGUgZGF5IGJnIGNlbGxzIGZvciBlYWNoIGRheS1yb3dcbiAgICAgIHJlbmRlckJnSW50cm9IdG1sKCkge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuXG4gICAgICAgIGlmICh0aGlzLmNvbFdlZWtOdW1iZXJzVmlzaWJsZSkge1xuICAgICAgICAgIHJldHVybiAnPHRkIGNsYXNzPVwiZmMtd2Vlay1udW1iZXIgJyArIHZpZXcuY2FsZW5kYXIudGhlbWUuZ2V0Q2xhc3MoJ3dpZGdldENvbnRlbnQnKSArICdcIiAnICtcbiAgICAgICAgICAgIHZpZXcud2Vla051bWJlclN0eWxlQXR0cigpICsgJz48L3RkPidcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuXG5cbiAgICAgIC8vIEdlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IGdvZXMgYmVmb3JlIGV2ZXJ5IG90aGVyIHR5cGUgb2Ygcm93IGdlbmVyYXRlZCBieSBEYXlHcmlkLlxuICAgICAgLy8gQWZmZWN0cyBoZWxwZXItc2tlbGV0b24gYW5kIGhpZ2hsaWdodC1za2VsZXRvbiByb3dzLlxuICAgICAgcmVuZGVySW50cm9IdG1sKCkge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuXG4gICAgICAgIGlmICh0aGlzLmNvbFdlZWtOdW1iZXJzVmlzaWJsZSkge1xuICAgICAgICAgIHJldHVybiAnPHRkIGNsYXNzPVwiZmMtd2Vlay1udW1iZXJcIiAnICsgdmlldy53ZWVrTnVtYmVyU3R5bGVBdHRyKCkgKyAnPjwvdGQ+J1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG5cblxuICAgICAgZ2V0SXNOdW1iZXJzVmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIFllYXJHcmlkLnByb3RvdHlwZS5nZXRJc051bWJlcnNWaXNpYmxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcy5jb2xXZWVrTnVtYmVyc1Zpc2libGVcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG59XG5cblllYXJWaWV3LnByb3RvdHlwZS5kYXlHcmlkQ2xhc3MgPSBZZWFyR3JpZFxuWWVhclZpZXcucHJvdG90eXBlLmRhdGVQcm9maWxlR2VuZXJhdG9yQ2xhc3MgPSBZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvWWVhclZpZXcudHMiLCJpbXBvcnQge0RheUdyaWQsQ29vcmRDYWNoZX0gZnJvbSBcImZ1bGxjYWxlbmRhclwiO1xuaW1wb3J0IFllYXJUYWJsZU1peGluIGZyb20gXCIuL1llYXJUYWJsZU1peGluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJHcmlkIGV4dGVuZHMgRGF5R3JpZCB7XG5cbiAgY29sQ250OiBudW1iZXIgPSAzMVxuICByb3dDbnQ6IG51bWJlciA9IDEyXG4gIGRheXNQZXJSb3c6IG51bWJlciA9IDMxXG4gIGNlbGxXZWVrTnVtYmVyc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZSAvLyBkaXNwbGF5IHdlZWsgbnVtYmVycyBpbiBkYXkgY2VsbD9cbiAgYnJlYWtPbldlZWtzOiBib29sZWFuID0gZmFsc2VcblxuXG4gIC8vIFJlbmRlcnMgdGhlIHJvd3MgYW5kIGNvbHVtbnMgaW50byB0aGUgY29tcG9uZW50J3MgYHRoaXMuZWxgLCB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBhc3NpZ25lZC5cbiAgcmVuZGVyR3JpZCgpIHtcbiAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuICAgIGxldCByb3dDbnQgPSB0aGlzLnJvd0NudFxuICAgIGxldCBjb2xDbnQgPSB0aGlzLmNvbENudFxuICAgIGxldCBodG1sID0gJydcbiAgICBsZXQgcm93XG4gICAgbGV0IGNvbFxuXG4gICAgaWYgKHRoaXMuaGVhZENvbnRhaW5lckVsKSB7XG4gICAgICB0aGlzLmhlYWRDb250YWluZXJFbC5odG1sKHRoaXMucmVuZGVySGVhZEh0bWwoKSlcbiAgICB9XG5cbiAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHJvd0NudDsgcm93KyspIHtcbiAgICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJEYXlSb3dIdG1sKHJvdywgdGhpcy5pc1JpZ2lkKVxuICAgIH1cbiAgICB0aGlzLmVsLmh0bWwoaHRtbClcblxuICAgIHRoaXMucm93RWxzID0gdGhpcy5lbC5maW5kKCcuZmMtcm93JylcbiAgICB0aGlzLmNlbGxFbHMgPSB0aGlzLmVsLmZpbmQoJy5mYy1kYXksIC5mYy1kaXNhYmxlZC1kYXknKVxuXG4gICAgdGhpcy5yb3dDb29yZENhY2hlID0gbmV3IENvb3JkQ2FjaGUoe1xuICAgICAgZWxzOiB0aGlzLnJvd0VscyxcbiAgICAgIGlzVmVydGljYWw6IHRydWVcbiAgICB9KVxuICAgIHRoaXMuY29sQ29vcmRDYWNoZSA9IG5ldyBDb29yZENhY2hlKHtcbiAgICAgIGVsczogdGhpcy5jZWxsRWxzLnNsaWNlKDAsIHRoaXMuY29sQ250KSwgLy8gb25seSB0aGUgZmlyc3Qgcm93XG4gICAgICBpc0hvcml6b250YWw6IHRydWVcbiAgICB9KVxuXG4gICAgLy8gdHJpZ2dlciBkYXlSZW5kZXIgd2l0aCBlYWNoIGNlbGwncyBlbGVtZW50XG4gICAgZm9yIChyb3cgPSAwOyByb3cgPCByb3dDbnQ7IHJvdysrKSB7XG4gICAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IGNvbENudDsgY29sKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0Q2VsbERhdGUocm93LCBjb2wpICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnB1YmxpY2x5VHJpZ2dlcignZGF5UmVuZGVyJywge1xuICAgICAgICAgICAgY29udGV4dDogdmlldyxcbiAgICAgICAgICAgIGFyZ3M6IFtcbiAgICAgICAgICAgICAgdGhpcy5nZXRDZWxsRGF0ZShyb3csIGNvbCksXG4gICAgICAgICAgICAgIHRoaXMuZ2V0Q2VsbEVsKHJvdywgY29sKSxcbiAgICAgICAgICAgICAgdmlld1xuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBHZW5lcmF0ZXMgdGhlIEhUTUwgZm9yIHRoZSA8dGQ+cyBvZiB0aGUgXCJudW1iZXJcIiByb3cgaW4gdGhlIERheUdyaWQncyBjb250ZW50IHNrZWxldG9uLlxuICAvLyBUaGUgbnVtYmVyIHJvdyB3aWxsIG9ubHkgZXhpc3QgaWYgZWl0aGVyIGRheSBudW1iZXJzIG9yIHdlZWsgbnVtYmVycyBhcmUgdHVybmVkIG9uLlxuICByZW5kZXJOdW1iZXJDZWxsSHRtbChkYXRlKSB7XG4gICAgaWYgKGRhdGUgPT0gbnVsbCkgcmV0dXJuICcnXG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcbiAgICBsZXQgaHRtbCA9ICcnXG4gICAgbGV0IGlzRGF0ZVZhbGlkID0gdGhpcy5kYXRlUHJvZmlsZS5hY3RpdmVVbnpvbmVkUmFuZ2UuY29udGFpbnNEYXRlKGRhdGUpIC8vIFRPRE86IGNhbGxlZCB0b28gZnJlcXVlbnRseS4gY2FjaGUgc29tZWhvdy5cbiAgICBsZXQgaXNEYXlOdW1iZXJWaXNpYmxlID0gdGhpcy5nZXRJc0RheU51bWJlcnNWaXNpYmxlKCkgJiYgaXNEYXRlVmFsaWRcbiAgICBsZXQgY2xhc3Nlc1xuICAgIGxldCB3ZWVrQ2FsY0ZpcnN0RG9XXG5cbiAgICBpZiAoIWlzRGF5TnVtYmVyVmlzaWJsZSAmJiAhdGhpcy5jZWxsV2Vla051bWJlcnNWaXNpYmxlKSB7XG4gICAgICAvLyBubyBudW1iZXJzIGluIGRheSBjZWxsICh3ZWVrIG51bWJlciBtdXN0IGJlIGFsb25nIHRoZSBzaWRlKVxuICAgICAgcmV0dXJuICc8dGQvPicgLy8gIHdpbGwgY3JlYXRlIGFuIGVtcHR5IHNwYWNlIGFib3ZlIGV2ZW50cyA6KFxuICAgIH1cblxuICAgIGNsYXNzZXMgPSB0aGlzLmdldERheUNsYXNzZXMoZGF0ZSlcbiAgICBjbGFzc2VzLnVuc2hpZnQoJ2ZjLWRheS10b3AnKVxuXG4gICAgaWYgKHRoaXMuY2VsbFdlZWtOdW1iZXJzVmlzaWJsZSkge1xuICAgICAgLy8gVG8gZGV0ZXJtaW5lIHRoZSBkYXkgb2Ygd2VlayBudW1iZXIgY2hhbmdlIHVuZGVyIElTTywgd2UgY2Fubm90XG4gICAgICAvLyByZWx5IG9uIG1vbWVudC5qcyBtZXRob2RzIHN1Y2ggYXMgZmlyc3REYXlPZldlZWsoKSBvciB3ZWVrZGF5KCksXG4gICAgICAvLyBiZWNhdXNlIHRoZXkgcmVseSBvbiB0aGUgbG9jYWxlJ3MgZG93IChwb3NzaWJseSBvdmVycmlkZGVuIGJ5XG4gICAgICAvLyBvdXIgZmlyc3REYXkgb3B0aW9uKSwgd2hpY2ggbWF5IG5vdCBiZSBNb25kYXkuIFdlIGNhbm5vdCBjaGFuZ2VcbiAgICAgIC8vIGRvdywgYmVjYXVzZSB0aGF0IHdvdWxkIGFmZmVjdCB0aGUgY2FsZW5kYXIgc3RhcnQgZGF5IGFzIHdlbGwuXG4gICAgICBpZiAoZGF0ZS5fbG9jYWxlLl9mdWxsQ2FsZW5kYXJfd2Vla0NhbGMgPT09ICdJU08nKSB7XG4gICAgICAgIHdlZWtDYWxjRmlyc3REb1cgPSAxICAvLyBNb25kYXkgYnkgSVNPIDg2MDEgZGVmaW5pdGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2Vla0NhbGNGaXJzdERvVyA9IGRhdGUuX2xvY2FsZS5maXJzdERheU9mV2VlaygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaHRtbCArPSAnPHRkIGNsYXNzPVwiJyArIGNsYXNzZXMuam9pbignICcpICsgJ1wiJyArXG4gICAgICAoaXNEYXRlVmFsaWQgP1xuICAgICAgICAgICcgZGF0YS1kYXRlPVwiJyArIGRhdGUuZm9ybWF0KCkgKyAnXCInIDpcbiAgICAgICAgICAnJ1xuICAgICAgKSArXG4gICAgICAnPidcblxuICAgIGlmICh0aGlzLmNlbGxXZWVrTnVtYmVyc1Zpc2libGUgJiYgKGRhdGUuZGF5KCkgPT09IHdlZWtDYWxjRmlyc3REb1cpKSB7XG4gICAgICBodG1sICs9IHZpZXcuYnVpbGRHb3RvQW5jaG9ySHRtbChcbiAgICAgICAgeyBkYXRlOiBkYXRlLCB0eXBlOiAnd2VlaycgfSxcbiAgICAgICAgeyAnY2xhc3MnOiAnZmMtd2Vlay1udW1iZXInIH0sXG4gICAgICAgIGRhdGUuZm9ybWF0KCd3JykgLy8gaW5uZXIgSFRNTFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChpc0RheU51bWJlclZpc2libGUpIHtcbiAgICAgIGh0bWwgKz0gdmlldy5idWlsZEdvdG9BbmNob3JIdG1sKFxuICAgICAgICBkYXRlLFxuICAgICAgICB7ICdjbGFzcyc6ICdmYy1kYXktbnVtYmVyJyB9LFxuICAgICAgICBkYXRlLmZvcm1hdCgnRCcpIC8vIGlubmVyIEhUTUxcbiAgICAgIClcbiAgICB9XG5cbiAgICBodG1sICs9ICc8L3RkPidcblxuICAgIHJldHVybiBodG1sXG4gIH1cblxuXG4gIC8vIFNsaWNlcyB1cCB0aGUgZ2l2ZW4gc3BhbiAodW56b25lZCBzdGFydC9lbmQgd2l0aCBvdGhlciBtaXNjIGRhdGEpIGludG8gYW4gYXJyYXkgb2Ygc2VnbWVudHNcbiAgY29tcG9uZW50Rm9vdHByaW50VG9TZWdzKGNvbXBvbmVudEZvb3RwcmludCkge1xuICAgIGxldCBzZWdzID0gdGhpcy5zbGljZVJhbmdlQnlSb3coY29tcG9uZW50Rm9vdHByaW50LnVuem9uZWRSYW5nZSlcbiAgICBsZXQgaVxuICAgIGxldCBzZWdcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzZWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzZWcgPSBzZWdzW2ldXG5cbiAgICAgIGlmICh0aGlzLmlzUlRMKSB7XG4gICAgICAgIHNlZy5sZWZ0Q29sID0gdGhpcy5kYXlzUGVyUm93IC0gMSAtIHNlZy5sYXN0Um93RGF5SW5kZXhcbiAgICAgICAgc2VnLnJpZ2h0Q29sID0gdGhpcy5kYXlzUGVyUm93IC0gMSAtIHNlZy5maXJzdFJvd0RheUluZGV4XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWcubGVmdENvbCA9IHNlZy5maXJzdFJvd0RheUluZGV4XG4gICAgICAgIHNlZy5yaWdodENvbCA9IHNlZy5sYXN0Um93RGF5SW5kZXhcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2Vnc1xuICB9XG5cblxufVxuXG5ZZWFyVGFibGVNaXhpbi5taXhPdmVyKFllYXJHcmlkKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1llYXJHcmlkLnRzIiwiaW1wb3J0IHtEYXlUYWJsZU1peGlufSBmcm9tICdmdWxsY2FsZW5kYXInXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFllYXJUYWJsZU1peGluIGV4dGVuZHMgRGF5VGFibGVNaXhpbiB7XG5cbiAgc3RhcnREYXRlOiBNb21lbnRcblxuICAvLyBQb3B1bGF0ZXMgaW50ZXJuYWwgdmFyaWFibGVzIHVzZWQgZm9yIGRhdGUgY2FsY3VsYXRpb24gYW5kIHJlbmRlcmluZ1xuICB1cGRhdGVEYXlUYWJsZSgpIHtcbiAgICBsZXQgdCA9ICh0aGlzIGFzIGFueSlcbiAgICBsZXQgdmlldyA9IHQudmlld1xuICAgIGxldCBjYWxlbmRhciA9IHZpZXcuY2FsZW5kYXJcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGNhbGVuZGFyLm1zVG9VdGNNb21lbnQodC5kYXRlUHJvZmlsZS5yZW5kZXJVbnpvbmVkUmFuZ2Uuc3RhcnRNcywgdHJ1ZSlcbiAgfVxuXG4gIHJlbmRlckJnQ2VsbEh0bWwoZGF0ZSwgb3RoZXJBdHRycykge1xuICAgIGxldCB0ID0gKHRoaXMgYXMgYW55KVxuICAgIGxldCB2aWV3ID0gdC52aWV3XG4gICAgbGV0IGlzRGF0ZVZhbGlkID0gZGF0ZSAhPSBudWxsXG4gICAgbGV0IGNsYXNzZXMgPSBpc0RhdGVWYWxpZCA/IHQuZ2V0RGF5Q2xhc3NlcyhkYXRlKSA6IFtdXG5cbiAgICBjbGFzc2VzLnVuc2hpZnQoJ2ZjLWRheScsIHZpZXcuY2FsZW5kYXIudGhlbWUuZ2V0Q2xhc3MoJ3dpZGdldENvbnRlbnQnKSlcblxuICAgIHJldHVybiAnPHRkIGNsYXNzPVwiJyArIGNsYXNzZXMuam9pbignICcpICsgJ1wiJyArXG4gICAgICAoaXNEYXRlVmFsaWQgP1xuICAgICAgICAnIGRhdGEtZGF0ZT1cIicgKyBkYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpICsgJ1wiJyA6IC8vIGlmIGRhdGUgaGFzIGEgdGltZSwgd29uJ3QgZm9ybWF0IGl0XG4gICAgICAgICcnKSArXG4gICAgICAob3RoZXJBdHRycyA/XG4gICAgICAgICcgJyArIG90aGVyQXR0cnMgOlxuICAgICAgICAnJykgK1xuICAgICAgJz48L3RkPidcbiAgfVxuXG4gIC8vIERldGVybWluZXMgaG93IG1hbnkgY29sdW1ucyB0aGVyZSBzaG91bGQgYmUgaW4gdGhlIHRhYmxlXG4gIGNvbXB1dGVDb2xDbnQoKSB7XG4gICAgcmV0dXJuIDMxXG4gIH1cblxuICAvLyBDb21wdXRlcyB0aGUgYW1iaWd1b3VzbHktdGltZWQgbW9tZW50IGZvciB0aGUgZ2l2ZW4gY2VsbFxuICBnZXRDZWxsRGF0ZShyb3csIGNvbCkge1xuICAgIGxldCBkYXRlID0gdGhpcy5zdGFydERhdGUuY2xvbmUoKS5tb250aChyb3cpXG4gICAgaWYgKGRhdGUuZGF5c0luTW9udGgoKSA+IGNvbCkge1xuICAgICAgcmV0dXJuIGRhdGUuZGF0ZShjb2wgKyAxKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gR2l2ZW4gYSBkYXRlLCByZXR1cm5zIGl0cyBjaHJvbm9sb2NpYWwgY2VsbC1pbmRleCBmcm9tIHRoZSBmaXJzdCBjZWxsIG9mIHRoZSBncmlkLlxuICAvLyBJZiB0aGUgZGF0ZSBsaWVzIGJldHdlZW4gY2VsbHMgKGJlY2F1c2Ugb2YgaGlkZGVuRGF5cyksIHJldHVybnMgYSBmbG9hdGluZy1wb2ludCB2YWx1ZSBiZXR3ZWVuIG9mZnNldHMuXG4gIC8vIElmIGJlZm9yZSB0aGUgZmlyc3Qgb2Zmc2V0LCByZXR1cm5zIGEgbmVnYXRpdmUgbnVtYmVyLlxuICAvLyBJZiBhZnRlciB0aGUgbGFzdCBvZmZzZXQsIHJldHVybnMgYW4gb2Zmc2V0IHBhc3QgdGhlIGxhc3QgY2VsbCBvZmZzZXQuXG4gIC8vIE9ubHkgd29ya3MgZm9yICpzdGFydCogZGF0ZXMgb2YgY2VsbHMuIFdpbGwgbm90IHdvcmsgZm9yIGV4Y2x1c2l2ZSBlbmQgZGF0ZXMgZm9yIGNlbGxzLlxuICBnZXREYXRlRGF5SW5kZXgoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLm1vbnRoKCkgKiAzMSArIGRhdGUuZGF0ZSgpIC0gMVxuICB9XG5cbiAgcmVuZGVySGVhZFRySHRtbCgpIHtcbiAgICByZXR1cm4gJzx0cj48L3RyPidcbiAgfVxuXG5cbiAgLy8gU2xpY2VzIHVwIGEgZGF0ZSByYW5nZSBpbnRvIGEgc2VnbWVudCBmb3IgZXZlcnkgd2Vlay1yb3cgaXQgaW50ZXJzZWN0cyB3aXRoXG4gIC8vIENvbnRyYXJ5IHRvIERheVRhYmxlTWl4aW46OnNsaWNlUmFuZ2VCeVJvdyB0aGlzIHZlcnNpb24gbXVzdCBiZSBhd2FyZSBvZiB0aGUgZmFjdCB0aGF0IG5vdCBldmVyeSBtb250aCBoYXMgdGhlIHNhbWUgbnVtYmVyIG9mIGRheXNcbiAgc2xpY2VSYW5nZUJ5Um93KHVuem9uZWRSYW5nZSkge1xuICAgIGxldCBkYXlzUGVyUm93ID0gdGhpcy5kYXlzUGVyUm93XG4gICAgbGV0IG5vcm1hbFJhbmdlID0gKHRoaXMgYXMgYW55KS52aWV3LmNvbXB1dGVEYXlSYW5nZSh1bnpvbmVkUmFuZ2UpIC8vIG1ha2Ugd2hvbGUtZGF5IHJhbmdlLCBjb25zaWRlcmluZyBuZXh0RGF5VGhyZXNob2xkXG4gICAgbGV0IHJhbmdlRmlyc3QgPSB0aGlzLmdldERhdGVEYXlJbmRleChub3JtYWxSYW5nZS5zdGFydCkgLy8gaW5jbHVzaXZlIGZpcnN0IGluZGV4XG4gICAgbGV0IHJhbmdlTGFzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLmVuZC5jbG9uZSgpLnN1YnRyYWN0KDEsICdkYXlzJykpIC8vIGluY2x1c2l2ZSBsYXN0IGluZGV4XG4gICAgbGV0IHNlZ3MgPSBbXVxuICAgIGxldCByb3dcbiAgICBsZXQgcm93Rmlyc3RcbiAgICBsZXQgcm93TGFzdCAvLyBpbmNsdXNpdmUgZGF5LWluZGV4IHJhbmdlIGZvciBjdXJyZW50IHJvd1xuICAgIGxldCBzZWdGaXJzdFxuICAgIGxldCBzZWdMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIHNlZ21lbnRcblxuICAgIGZvciAocm93ID0gMDsgcm93IDwgdGhpcy5yb3dDbnQ7IHJvdysrKSB7XG4gICAgICByb3dGaXJzdCA9IHJvdyAqIGRheXNQZXJSb3dcbiAgICAgIHJvd0xhc3QgPSByb3dGaXJzdCArIG5vcm1hbFJhbmdlLnN0YXJ0Lm1vbnRoKHJvdykuZGF5c0luTW9udGgoKSAtIDFcblxuICAgICAgLy8gaW50ZXJzZWN0IHNlZ21lbnQncyBvZmZzZXQgcmFuZ2Ugd2l0aCB0aGUgcm93J3NcbiAgICAgIHNlZ0ZpcnN0ID0gTWF0aC5tYXgocmFuZ2VGaXJzdCwgcm93Rmlyc3QpXG4gICAgICBzZWdMYXN0ID0gTWF0aC5taW4ocmFuZ2VMYXN0LCByb3dMYXN0KVxuXG4gICAgICAvLyBkZWFsIHdpdGggaW4tYmV0d2VlbiBpbmRpY2VzXG4gICAgICBzZWdGaXJzdCA9IE1hdGguY2VpbChzZWdGaXJzdCkgLy8gaW4tYmV0d2VlbiBzdGFydHMgcm91bmQgdG8gbmV4dCBjZWxsXG4gICAgICBzZWdMYXN0ID0gTWF0aC5mbG9vcihzZWdMYXN0KSAvLyBpbi1iZXR3ZWVuIGVuZHMgcm91bmQgdG8gcHJldiBjZWxsXG5cbiAgICAgIGlmIChzZWdGaXJzdCA8PSBzZWdMYXN0KSB7IC8vIHdhcyB0aGVyZSBhbnkgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGN1cnJlbnQgcm93P1xuICAgICAgICBzZWdzLnB1c2goe1xuICAgICAgICAgIHJvdzogcm93LFxuXG4gICAgICAgICAgLy8gbm9ybWFsaXplIHRvIHN0YXJ0IG9mIHJvd1xuICAgICAgICAgIGZpcnN0Um93RGF5SW5kZXg6IHNlZ0ZpcnN0IC0gcm93Rmlyc3QsXG4gICAgICAgICAgbGFzdFJvd0RheUluZGV4OiBzZWdMYXN0IC0gcm93Rmlyc3QsXG5cbiAgICAgICAgICAvLyBtdXN0IGJlIG1hdGNoaW5nIGludGVnZXJzIHRvIGJlIHRoZSBzZWdtZW50J3Mgc3RhcnQvZW5kXG4gICAgICAgICAgaXNTdGFydDogc2VnRmlyc3QgPT09IHJhbmdlRmlyc3QsXG4gICAgICAgICAgaXNFbmQ6IHNlZ0xhc3QgPT09IHJhbmdlTGFzdFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWdzXG4gIH1cblxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvWWVhclRhYmxlTWl4aW4udHMiLCJpbXBvcnQge0Jhc2ljVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yLCBVbnpvbmVkUmFuZ2V9IGZyb20gXCJmdWxsY2FsZW5kYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvciBleHRlbmRzIEJhc2ljVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yIHtcblxuICAvLyBDb21wdXRlcyB0aGUgZGF0ZSByYW5nZSB0aGF0IHdpbGwgYmUgcmVuZGVyZWQuXG4gIGJ1aWxkUmVuZGVyUmFuZ2UoY3VycmVudFVuem9uZWRSYW5nZSwgY3VycmVudFJhbmdlVW5pdCwgaXNSYW5nZUFsbERheSkge1xuICAgIGxldCBzdGFydCA9IHRoaXMubXNUb1V0Y01vbWVudChjdXJyZW50VW56b25lZFJhbmdlLnN0YXJ0TXMsIGlzUmFuZ2VBbGxEYXkpXG4gICAgbGV0IGVuZCA9IHRoaXMubXNUb1V0Y01vbWVudChjdXJyZW50VW56b25lZFJhbmdlLmVuZE1zLCBpc1JhbmdlQWxsRGF5KVxuICAgIHJldHVybiBuZXcgVW56b25lZFJhbmdlKHN0YXJ0LCBlbmQpXG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1llYXJWaWV3RGF0ZVByb2ZpbGVHZW5lcmF0b3IudHMiXSwic291cmNlUm9vdCI6IiJ9