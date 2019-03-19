(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fullcalendar"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["fullcalendar", "moment"], factory);
	else if(typeof exports === 'object')
		exports["FullCalendar"] = factory(require("fullcalendar"), require("moment"));
	else
		root["FullCalendar"] = factory(root["FullCalendar"], root["moment"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

if ($.fullCalendar !== undefined) {
    var YearView = __webpack_require__(2).default;
    $.fullCalendar.defineView('year', {
        'class': YearView,
        duration: { years: 1 }
    });
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const fullcalendar_1 = __webpack_require__(0);
const YearGrid_1 = __webpack_require__(3);
const YearViewDateProfileGenerator_1 = __webpack_require__(7);
class YearView extends fullcalendar_1.BasicView {
    constructor(calendar, viewSpec) {
        super(calendar, viewSpec);
    }
    instantiateDayGrid() {
        // generate a subclass on the fly with BasicView-specific behavior
        // TODO: cache this subclass
        let subclass = this.makeDayGridSubclass(this.dayGridClass);
        return new subclass(this);
    }
    // customize the rendering behavior of BasicView's dayGrid
    makeDayGridSubclass(SuperClass) {
        return class SubClass extends SuperClass {
            constructor() {
                super(...arguments);
                this.colWeekNumbersVisible = true; // display week numbers along the side?
            }
            // Generates the HTML that will go before the day-of week header cells
            renderHeadIntroHtml() {
                let view = this.view;
                if (this.colWeekNumbersVisible) {
                    return '' +
                        '<th class="fc-week-number ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.weekNumberStyleAttr() + '>' +
                        '<span>' +
                        '</span>' +
                        '</th>';
                }
                return '';
            }
            // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
            renderNumberIntroHtml(row) {
                let view = this.view;
                let monthStart = this.getCellDate(row, 0);
                if (this.colWeekNumbersVisible) {
                    return '' +
                        '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
                        view.buildGotoAnchorHtml(// aside from link, important for matchCellWidths
                        { date: monthStart, type: 'week', forceOff: this.colCnt === 1 }, monthStart.format('MMM') // inner HTML
                        ) +
                        '</td>';
                }
                return '';
            }
            // Generates the HTML that goes before the day bg cells for each day-row
            renderBgIntroHtml() {
                let view = this.view;
                if (this.colWeekNumbersVisible) {
                    return '<td class="fc-week-number ' + view.calendar.theme.getClass('widgetContent') + '" ' +
                        view.weekNumberStyleAttr() + '></td>';
                }
                return '';
            }
            // Generates the HTML that goes before every other type of row generated by DayGrid.
            // Affects helper-skeleton and highlight-skeleton rows.
            renderIntroHtml() {
                let view = this.view;
                if (this.colWeekNumbersVisible) {
                    return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>';
                }
                return '';
            }
            getIsNumbersVisible() {
                return YearGrid_1.default.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible;
            }
        };
    }
}
exports.default = YearView;
YearView.prototype.dayGridClass = YearGrid_1.default;
YearView.prototype.dateProfileGeneratorClass = YearViewDateProfileGenerator_1.YearViewDateProfileGenerator;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const fullcalendar_1 = __webpack_require__(0);
const YearTableMixin_1 = __webpack_require__(4);
class YearGrid extends fullcalendar_1.DayGrid {
    constructor() {
        super(...arguments);
        this.colCnt = 31;
        this.rowCnt = 12;
        this.daysPerRow = 31;
        this.cellWeekNumbersVisible = false; // display week numbers in day cell?
        this.breakOnWeeks = false;
    }
    // Renders the rows and columns into the component's `this.el`, which should already be assigned.
    renderGrid() {
        let view = this.view;
        let rowCnt = this.rowCnt;
        let colCnt = this.colCnt;
        let html = '';
        let row;
        let col;
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
    }
    // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
    // The number row will only exist if either day numbers or week numbers are turned on.
    renderNumberCellHtml(date) {
        if (date == null)
            return '';
        let view = this.view;
        let html = '';
        let isDateValid = this.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        let isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
        let classes;
        let weekCalcFirstDoW;
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
    }
    // Slices up the given span (unzoned start/end with other misc data) into an array of segments
    componentFootprintToSegs(componentFootprint) {
        let segs = this.sliceRangeByRow(componentFootprint.unzonedRange);
        let i;
        let seg;
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
    }
}
exports.default = YearGrid;
YearTableMixin_1.default.mixOver(YearGrid);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const DayTableMixin_1 = __webpack_require__(5);
class YearTableMixin extends DayTableMixin_1.default {
    // Populates internal variables used for date calculation and rendering
    updateDayTable() {
        let t = this;
        let view = t.view;
        let calendar = view.calendar;
        this.startDate = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.startMs, true);
    }
    renderBgCellHtml(date, otherAttrs) {
        let t = this;
        let view = t.view;
        let isDateValid = date != null;
        let classes = isDateValid ? t.getDayClasses(date) : [];
        classes.unshift('fc-day', view.calendar.theme.getClass('widgetContent'));
        return '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '></td>';
    }
    // Determines how many columns there should be in the table
    computeColCnt() {
        return 31;
    }
    // Computes the ambiguously-timed moment for the given cell
    getCellDate(row, col) {
        let date = this.startDate.clone().month(row);
        if (date.daysInMonth() > col) {
            return date.date(col + 1);
        }
        return null;
    }
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    getDateDayIndex(date) {
        return date.month() * 31 + date.date() - 1;
    }
    renderHeadTrHtml() {
        return '<tr></tr>';
    }
    // Slices up a date range into a segment for every week-row it intersects with
    // Contrary to DayTableMixin::sliceRangeByRow this version must be aware of the fact that not every month has the same number of days
    sliceRangeByRow(unzonedRange) {
        let daysPerRow = this.daysPerRow;
        let normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        let rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        let rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        let segs = [];
        let row;
        let rowFirst;
        let rowLast; // inclusive day-index range for current row
        let segFirst;
        let segLast; // inclusive day-index range for segment
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
    }
}
exports.default = YearTableMixin;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const fullcalendar_1 = __webpack_require__(0);
const Mixin_1 = __webpack_require__(6);
/*
A set of rendering and date-related methods for a visual component comprised of one or more rows of day columns.
Prerequisite: the object being mixed into needs to be a *Grid*
*/
class DayTableMixin extends Mixin_1.default {
    // Populates internal variables used for date calculation and rendering
    updateDayTable() {
        let t = this;
        let view = t.view;
        let calendar = view.calendar;
        let date = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.startMs, true);
        let end = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.endMs, true);
        let dayIndex = -1;
        let dayIndices = [];
        let dayDates = [];
        let daysPerRow;
        let firstDay;
        let rowCnt;
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
    }
    // Computes and assigned the colCnt property and updates any options that may be computed from it
    updateDayTableCols() {
        this.colCnt = this.computeColCnt();
        this.colHeadFormat =
            this.opt('columnHeaderFormat') ||
                this.opt('columnFormat') || // deprecated
                this.computeColHeadFormat();
    }
    // Determines how many columns there should be in the table
    computeColCnt() {
        return this.daysPerRow;
    }
    // Computes the ambiguously-timed moment for the given cell
    getCellDate(row, col) {
        return this.dayDates[this.getCellDayIndex(row, col)].clone();
    }
    // Computes the ambiguously-timed date range for the given cell
    getCellRange(row, col) {
        let start = this.getCellDate(row, col);
        let end = start.clone().add(1, 'days');
        return { start: start, end: end };
    }
    // Returns the number of day cells, chronologically, from the first of the grid (0-based)
    getCellDayIndex(row, col) {
        return row * this.daysPerRow + this.getColDayIndex(col);
    }
    // Returns the numner of day cells, chronologically, from the first cell in *any given row*
    getColDayIndex(col) {
        if (this.isRTL) {
            return this.colCnt - 1 - col;
        }
        else {
            return col;
        }
    }
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    getDateDayIndex(date) {
        let dayIndices = this.dayIndices;
        let dayOffset = date.diff(this.dayDates[0], 'days');
        if (dayOffset < 0) {
            return dayIndices[0] - 1;
        }
        else if (dayOffset >= dayIndices.length) {
            return dayIndices[dayIndices.length - 1] + 1;
        }
        else {
            return dayIndices[dayOffset];
        }
    }
    /* Options
    ------------------------------------------------------------------------------------------------------------------*/
    // Computes a default column header formatting string if `colFormat` is not explicitly defined
    computeColHeadFormat() {
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
    }
    /* Slicing
    ------------------------------------------------------------------------------------------------------------------*/
    // Slices up a date range into a segment for every week-row it intersects with
    sliceRangeByRow(unzonedRange) {
        let daysPerRow = this.daysPerRow;
        let normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        let rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        let rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        let segs = [];
        let row;
        let rowFirst;
        let rowLast; // inclusive day-index range for current row
        let segFirst;
        let segLast; // inclusive day-index range for segment
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
    }
    // Slices up a date range into a segment for every day-cell it intersects with.
    // TODO: make more DRY with sliceRangeByRow somehow.
    sliceRangeByDay(unzonedRange) {
        let daysPerRow = this.daysPerRow;
        let normalRange = this.view.computeDayRange(unzonedRange); // make whole-day range, considering nextDayThreshold
        let rangeFirst = this.getDateDayIndex(normalRange.start); // inclusive first index
        let rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')); // inclusive last index
        let segs = [];
        let row;
        let rowFirst;
        let rowLast; // inclusive day-index range for current row
        let i;
        let segFirst;
        let segLast; // inclusive day-index range for segment
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
    }
    /* Header Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    renderHeadHtml() {
        let theme = this.view.calendar.theme;
        return '' +
            '<div class="fc-row ' + theme.getClass('headerRow') + '">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            '<thead>' +
            this.renderHeadTrHtml() +
            '</thead>' +
            '</table>' +
            '</div>';
    }
    renderHeadIntroHtml() {
        return this.renderIntroHtml(); // fall back to generic
    }
    renderHeadTrHtml() {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderHeadIntroHtml()) +
            this.renderHeadDateCellsHtml() +
            (this.isRTL ? this.renderHeadIntroHtml() : '') +
            '</tr>';
    }
    renderHeadDateCellsHtml() {
        let htmls = [];
        let col;
        let date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(0, col);
            htmls.push(this.renderHeadDateCellHtml(date));
        }
        return htmls.join('');
    }
    // TODO: when internalApiVersion, accept an object for HTML attributes
    // (colspan should be no different)
    renderHeadDateCellHtml(date, colspan, otherAttrs) {
        let t = this;
        let view = t.view;
        let isDateValid = t.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        let classNames = [
            'fc-day-header',
            view.calendar.theme.getClass('widgetHeader')
        ];
        let innerHtml;
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
    }
    /* Background Rendering
    ------------------------------------------------------------------------------------------------------------------*/
    renderBgTrHtml(row) {
        return '' +
            '<tr>' +
            (this.isRTL ? '' : this.renderBgIntroHtml(row)) +
            this.renderBgCellsHtml(row) +
            (this.isRTL ? this.renderBgIntroHtml(row) : '') +
            '</tr>';
    }
    renderBgIntroHtml(row) {
        return this.renderIntroHtml(); // fall back to generic
    }
    renderBgCellsHtml(row) {
        let htmls = [];
        let col;
        let date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.getCellDate(row, col);
            htmls.push(this.renderBgCellHtml(date));
        }
        return htmls.join('');
    }
    renderBgCellHtml(date, otherAttrs) {
        let t = this;
        let view = t.view;
        let isDateValid = t.dateProfile.activeUnzonedRange.containsDate(date); // TODO: called too frequently. cache somehow.
        let classes = t.getDayClasses(date);
        classes.unshift('fc-day', view.calendar.theme.getClass('widgetContent'));
        return '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
                '') +
            (otherAttrs ?
                ' ' + otherAttrs :
                '') +
            '></td>';
    }
    /* Generic
    ------------------------------------------------------------------------------------------------------------------*/
    renderIntroHtml() {
        // Generates the default HTML intro for any row. User classes should override
    }
    // TODO: a generic method for dealing with <tr>, RTL, intro
    // when increment internalApiVersion
    // wrapTr (scheduler)
    /* Utils
    ------------------------------------------------------------------------------------------------------------------*/
    // Applies the generic "intro" and "outro" HTML to the given cells.
    // Intro means the leftmost cell when the calendar is LTR and the rightmost cell when RTL. Vice-versa for outro.
    bookendCells(trEl) {
        let introHtml = this.renderIntroHtml();
        if (introHtml) {
            if (this.isRTL) {
                trEl.append(introHtml);
            }
            else {
                trEl.prepend(introHtml);
            }
        }
    }
}
exports.default = DayTableMixin;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
class Mixin {
    static mixInto(destClass) {
        Object.getOwnPropertyNames(this.prototype).forEach((name) => {
            if (!destClass.prototype[name]) { // if destination class doesn't already define it
                destClass.prototype[name] = this.prototype[name];
            }
        });
    }
    /*
    will override existing methods
    TODO: remove! not used anymore
    */
    static mixOver(destClass) {
        Object.getOwnPropertyNames(this.prototype).forEach((name) => {
            destClass.prototype[name] = this.prototype[name];
        });
    }
}
exports.default = Mixin;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const fullcalendar_1 = __webpack_require__(0);
const DateProfileGenerator_1 = __webpack_require__(8);
class YearViewDateProfileGenerator extends DateProfileGenerator_1.default {
    // Computes the date range that will be rendered.
    buildRenderRange(currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        let start = this.msToUtcMoment(currentUnzonedRange.startMs, isRangeAllDay);
        let end = this.msToUtcMoment(currentUnzonedRange.endMs, isRangeAllDay);
        return new fullcalendar_1.UnzonedRange(start, end);
    }
}
exports.YearViewDateProfileGenerator = YearViewDateProfileGenerator;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
const moment = __webpack_require__(9);
const fullcalendar_1 = __webpack_require__(0);
class DateProfileGenerator {
    constructor(_view) {
        this._view = _view;
    }
    opt(name) {
        return this._view.opt(name);
    }
    trimHiddenDays(unzonedRange) {
        return this._view.trimHiddenDays(unzonedRange);
    }
    msToUtcMoment(ms, forceAllDay) {
        return this._view.calendar.msToUtcMoment(ms, forceAllDay);
    }
    /* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds a structure with info about what the dates/ranges will be for the "prev" view.
    buildPrev(currentDateProfile) {
        let prevDate = currentDateProfile.date.clone()
            .startOf(currentDateProfile.currentRangeUnit)
            .subtract(currentDateProfile.dateIncrement);
        return this.build(prevDate, -1);
    }
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
    buildNext(currentDateProfile) {
        let nextDate = currentDateProfile.date.clone()
            .startOf(currentDateProfile.currentRangeUnit)
            .add(currentDateProfile.dateIncrement);
        return this.build(nextDate, 1);
    }
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
    build(date, direction, forceToValid = false) {
        let isDateAllDay = !date.hasTime();
        let validUnzonedRange;
        let minTime = null;
        let maxTime = null;
        let currentInfo;
        let isRangeAllDay;
        let renderUnzonedRange;
        let activeUnzonedRange;
        let isValid;
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
    }
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
    buildValidRange() {
        return this._view.getUnzonedRangeOption('validRange', this._view.calendar.getNow()) ||
            new fullcalendar_1.UnzonedRange(); // completely open-ended
    }
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
    // TODO: accept a MS-time instead of a moment `date`?
    buildCurrentRangeInfo(date, direction) {
        let viewSpec = this._view.viewSpec;
        let duration = null;
        let unit = null;
        let unzonedRange = null;
        let dayCount;
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
    }
    getFallbackDuration() {
        return moment.duration({ days: 1 });
    }
    // Returns a new activeUnzonedRange to have time values (un-ambiguate)
    // minTime or maxTime causes the range to expand.
    adjustActiveRange(unzonedRange, minTime, maxTime) {
        let start = unzonedRange.getStart();
        let end = unzonedRange.getEnd();
        if (this._view.usesMinMaxTime) {
            if (minTime < 0) {
                start.time(0).add(minTime);
            }
            if (maxTime > 24 * 60 * 60 * 1000) { // beyond 24 hours?
                end.time(maxTime - (24 * 60 * 60 * 1000));
            }
        }
        return new fullcalendar_1.UnzonedRange(start, end);
    }
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed computeGreatestUnit value of duration.
    // TODO: accept a MS-time instead of a moment `date`?
    buildRangeFromDuration(date, direction, duration, unit) {
        let alignment = this.opt('dateAlignment');
        let dateIncrementInput;
        let dateIncrementDuration;
        let start;
        let end;
        let res;
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
    }
    // Builds the "current" range when a dayCount is specified.
    // TODO: accept a MS-time instead of a moment `date`?
    buildRangeFromDayCount(date, direction, dayCount) {
        let customAlignment = this.opt('dateAlignment');
        let runningCount = 0;
        let start;
        let end;
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
    }
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentUnzonedRange and activeUnzonedRange at the same time.
    // TODO: accept a MS-time instead of a moment `date`?
    buildCustomVisibleRange(date) {
        let visibleUnzonedRange = this._view.getUnzonedRangeOption('visibleRange', this._view.calendar.applyTimezone(date) // correct zone. also generates new obj that avoids mutations
        );
        if (visibleUnzonedRange && (visibleUnzonedRange.startMs == null || visibleUnzonedRange.endMs == null)) {
            return null;
        }
        return visibleUnzonedRange;
    }
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
    buildRenderRange(currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
        return currentUnzonedRange.clone();
    }
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
    buildDateIncrement(fallback) {
        let dateIncrementInput = this.opt('dateIncrement');
        let customAlignment;
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
    }
}
exports.default = DateProfileGenerator;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MjA3N2FhNzhmYmU5YjE2YzNjMSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcImZ1bGxjYWxlbmRhclwiLFwiY29tbW9uanMyXCI6XCJmdWxsY2FsZW5kYXJcIixcImFtZFwiOlwiZnVsbGNhbGVuZGFyXCIsXCJyb290XCI6XCJGdWxsQ2FsZW5kYXJcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9ZZWFyVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWWVhckdyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1llYXJUYWJsZU1peGluLnRzIiwid2VicGFjazovLy8uL3NyYy9EYXlUYWJsZU1peGluLnRzIiwid2VicGFjazovLy8uL3NyYy9NaXhpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGF0ZVByb2ZpbGVHZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlD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LEVBQUU7SUFDcEMsQ0FBQztJQUdELGtGQUFrRjtJQUNsRixzQ0FBc0M7SUFDdEMsa0JBQWtCLENBQUMsUUFBUTtRQUN6QixJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksZUFBZTtRQUVuQixJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztTQUMzQzthQUFNLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFO1lBQ3hELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDO1NBQzNDO2FBQU0sSUFBSSxRQUFRLEVBQUU7WUFDbkIsT0FBTyxRQUFRO1NBQ2hCO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDO0NBRUY7QUEvVkQsdUNBK1ZDOzs7Ozs7O0FDbldELCtDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJmdWxsY2FsZW5kYXJcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZnVsbGNhbGVuZGFyXCIsIFwibW9tZW50XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZ1bGxDYWxlbmRhclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImZ1bGxjYWxlbmRhclwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiRnVsbENhbGVuZGFyXCJdID0gZmFjdG9yeShyb290W1wiRnVsbENhbGVuZGFyXCJdLCByb290W1wibW9tZW50XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTIwNzdhYTc4ZmJlOWIxNmMzYzEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJmdWxsY2FsZW5kYXJcIixcImNvbW1vbmpzMlwiOlwiZnVsbGNhbGVuZGFyXCIsXCJhbWRcIjpcImZ1bGxjYWxlbmRhclwiLFwicm9vdFwiOlwiRnVsbENhbGVuZGFyXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmICgkLmZ1bGxDYWxlbmRhciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIFllYXJWaWV3ID0gcmVxdWlyZSgnLi9ZZWFyVmlldycpLmRlZmF1bHQ7XG5cbiAgICAkLmZ1bGxDYWxlbmRhci5kZWZpbmVWaWV3KCd5ZWFyJywge1xuICAgICAgICAnY2xhc3MnOiBZZWFyVmlldyxcbiAgICAgICAgZHVyYXRpb246IHsgeWVhcnM6IDEgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyogQSBtb250aCB2aWV3IHdpdGggZGF5IGNlbGxzIHJ1bm5pbmcgaW4gcm93cyAob25lLXBlci13ZWVrKSBhbmQgY29sdW1uc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmltcG9ydCB7QmFzaWNWaWV3fSBmcm9tIFwiZnVsbGNhbGVuZGFyXCI7XG5pbXBvcnQgWWVhckdyaWQgZnJvbSBcIi4vWWVhckdyaWRcIjtcbmltcG9ydCB7WWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvcn0gZnJvbSBcIi4vWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyVmlldyBleHRlbmRzIEJhc2ljVmlldyB7XG5cbiAgY29uc3RydWN0b3IoY2FsZW5kYXIsIHZpZXdTcGVjKSB7XG4gICAgc3VwZXIoY2FsZW5kYXIsIHZpZXdTcGVjKVxuICB9XG5cbiAgaW5zdGFudGlhdGVEYXlHcmlkKCkge1xuICAgIC8vIGdlbmVyYXRlIGEgc3ViY2xhc3Mgb24gdGhlIGZseSB3aXRoIEJhc2ljVmlldy1zcGVjaWZpYyBiZWhhdmlvclxuICAgIC8vIFRPRE86IGNhY2hlIHRoaXMgc3ViY2xhc3NcbiAgICBsZXQgc3ViY2xhc3M6IGFueSA9IHRoaXMubWFrZURheUdyaWRTdWJjbGFzcyh0aGlzLmRheUdyaWRDbGFzcylcblxuICAgIHJldHVybiBuZXcgc3ViY2xhc3ModGhpcylcbiAgfVxuXG5cbiAgLy8gY3VzdG9taXplIHRoZSByZW5kZXJpbmcgYmVoYXZpb3Igb2YgQmFzaWNWaWV3J3MgZGF5R3JpZFxuICBtYWtlRGF5R3JpZFN1YmNsYXNzKFN1cGVyQ2xhc3MpIHtcblxuICAgIHJldHVybiBjbGFzcyBTdWJDbGFzcyBleHRlbmRzIFN1cGVyQ2xhc3Mge1xuXG4gICAgICBjb2xXZWVrTnVtYmVyc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlIC8vIGRpc3BsYXkgd2VlayBudW1iZXJzIGFsb25nIHRoZSBzaWRlP1xuXG5cbiAgICAgIC8vIEdlbmVyYXRlcyB0aGUgSFRNTCB0aGF0IHdpbGwgZ28gYmVmb3JlIHRoZSBkYXktb2Ygd2VlayBoZWFkZXIgY2VsbHNcbiAgICAgIHJlbmRlckhlYWRJbnRyb0h0bWwoKSB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3XG5cbiAgICAgICAgaWYgKHRoaXMuY29sV2Vla051bWJlcnNWaXNpYmxlKSB7XG4gICAgICAgICAgcmV0dXJuICcnICtcbiAgICAgICAgICAgICc8dGggY2xhc3M9XCJmYy13ZWVrLW51bWJlciAnICsgdmlldy5jYWxlbmRhci50aGVtZS5nZXRDbGFzcygnd2lkZ2V0SGVhZGVyJykgKyAnXCIgJyArIHZpZXcud2Vla051bWJlclN0eWxlQXR0cigpICsgJz4nICtcbiAgICAgICAgICAgICc8c3Bhbj4nICtcbiAgICAgICAgICAgICc8L3NwYW4+JyArXG4gICAgICAgICAgICAnPC90aD4nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cblxuXG4gICAgICAvLyBHZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCB3aWxsIGdvIGJlZm9yZSBjb250ZW50LXNrZWxldG9uIGNlbGxzIHRoYXQgZGlzcGxheSB0aGUgZGF5L3dlZWsgbnVtYmVyc1xuICAgICAgcmVuZGVyTnVtYmVySW50cm9IdG1sKHJvdykge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlld1xuICAgICAgICBsZXQgbW9udGhTdGFydCA9IHRoaXMuZ2V0Q2VsbERhdGUocm93LCAwKVxuXG4gICAgICAgIGlmICh0aGlzLmNvbFdlZWtOdW1iZXJzVmlzaWJsZSkge1xuICAgICAgICAgIHJldHVybiAnJyArXG4gICAgICAgICAgICAnPHRkIGNsYXNzPVwiZmMtd2Vlay1udW1iZXJcIiAnICsgdmlldy53ZWVrTnVtYmVyU3R5bGVBdHRyKCkgKyAnPicgK1xuICAgICAgICAgICAgdmlldy5idWlsZEdvdG9BbmNob3JIdG1sKCAvLyBhc2lkZSBmcm9tIGxpbmssIGltcG9ydGFudCBmb3IgbWF0Y2hDZWxsV2lkdGhzXG4gICAgICAgICAgICAgIHsgZGF0ZTogbW9udGhTdGFydCwgdHlwZTogJ3dlZWsnLCBmb3JjZU9mZjogdGhpcy5jb2xDbnQgPT09IDEgfSxcbiAgICAgICAgICAgICAgbW9udGhTdGFydC5mb3JtYXQoJ01NTScpIC8vIGlubmVyIEhUTUxcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgJzwvdGQ+J1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG5cblxuICAgICAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIHRoYXQgZ29lcyBiZWZvcmUgdGhlIGRheSBiZyBjZWxscyBmb3IgZWFjaCBkYXktcm93XG4gICAgICByZW5kZXJCZ0ludHJvSHRtbCgpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcblxuICAgICAgICBpZiAodGhpcy5jb2xXZWVrTnVtYmVyc1Zpc2libGUpIHtcbiAgICAgICAgICByZXR1cm4gJzx0ZCBjbGFzcz1cImZjLXdlZWstbnVtYmVyICcgKyB2aWV3LmNhbGVuZGFyLnRoZW1lLmdldENsYXNzKCd3aWRnZXRDb250ZW50JykgKyAnXCIgJyArXG4gICAgICAgICAgICB2aWV3LndlZWtOdW1iZXJTdHlsZUF0dHIoKSArICc+PC90ZD4nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJydcbiAgICAgIH1cblxuXG4gICAgICAvLyBHZW5lcmF0ZXMgdGhlIEhUTUwgdGhhdCBnb2VzIGJlZm9yZSBldmVyeSBvdGhlciB0eXBlIG9mIHJvdyBnZW5lcmF0ZWQgYnkgRGF5R3JpZC5cbiAgICAgIC8vIEFmZmVjdHMgaGVscGVyLXNrZWxldG9uIGFuZCBoaWdobGlnaHQtc2tlbGV0b24gcm93cy5cbiAgICAgIHJlbmRlckludHJvSHRtbCgpIHtcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcblxuICAgICAgICBpZiAodGhpcy5jb2xXZWVrTnVtYmVyc1Zpc2libGUpIHtcbiAgICAgICAgICByZXR1cm4gJzx0ZCBjbGFzcz1cImZjLXdlZWstbnVtYmVyXCIgJyArIHZpZXcud2Vla051bWJlclN0eWxlQXR0cigpICsgJz48L3RkPidcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgfVxuXG5cbiAgICAgIGdldElzTnVtYmVyc1Zpc2libGUoKSB7XG4gICAgICAgIHJldHVybiBZZWFyR3JpZC5wcm90b3R5cGUuZ2V0SXNOdW1iZXJzVmlzaWJsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXMuY29sV2Vla051bWJlcnNWaXNpYmxlXG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxufVxuXG5ZZWFyVmlldy5wcm90b3R5cGUuZGF5R3JpZENsYXNzID0gWWVhckdyaWRcblllYXJWaWV3LnByb3RvdHlwZS5kYXRlUHJvZmlsZUdlbmVyYXRvckNsYXNzID0gWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1llYXJWaWV3LnRzIiwiaW1wb3J0IHtEYXlHcmlkLENvb3JkQ2FjaGV9IGZyb20gXCJmdWxsY2FsZW5kYXJcIjtcbmltcG9ydCBZZWFyVGFibGVNaXhpbiBmcm9tIFwiLi9ZZWFyVGFibGVNaXhpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBZZWFyR3JpZCBleHRlbmRzIERheUdyaWQge1xuXG4gIGNvbENudDogbnVtYmVyID0gMzFcbiAgcm93Q250OiBudW1iZXIgPSAxMlxuICBkYXlzUGVyUm93OiBudW1iZXIgPSAzMVxuICBjZWxsV2Vla051bWJlcnNWaXNpYmxlOiBib29sZWFuID0gZmFsc2UgLy8gZGlzcGxheSB3ZWVrIG51bWJlcnMgaW4gZGF5IGNlbGw/XG4gIGJyZWFrT25XZWVrczogYm9vbGVhbiA9IGZhbHNlXG5cblxuICAvLyBSZW5kZXJzIHRoZSByb3dzIGFuZCBjb2x1bW5zIGludG8gdGhlIGNvbXBvbmVudCdzIGB0aGlzLmVsYCwgd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgYXNzaWduZWQuXG4gIHJlbmRlckdyaWQoKSB7XG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdcbiAgICBsZXQgcm93Q250ID0gdGhpcy5yb3dDbnRcbiAgICBsZXQgY29sQ250ID0gdGhpcy5jb2xDbnRcbiAgICBsZXQgaHRtbCA9ICcnXG4gICAgbGV0IHJvd1xuICAgIGxldCBjb2xcblxuICAgIGlmICh0aGlzLmhlYWRDb250YWluZXJFbCkge1xuICAgICAgdGhpcy5oZWFkQ29udGFpbmVyRWwuaHRtbCh0aGlzLnJlbmRlckhlYWRIdG1sKCkpXG4gICAgfVxuXG4gICAgZm9yIChyb3cgPSAwOyByb3cgPCByb3dDbnQ7IHJvdysrKSB7XG4gICAgICBodG1sICs9IHRoaXMucmVuZGVyRGF5Um93SHRtbChyb3csIHRoaXMuaXNSaWdpZClcbiAgICB9XG4gICAgdGhpcy5lbC5odG1sKGh0bWwpXG5cbiAgICB0aGlzLnJvd0VscyA9IHRoaXMuZWwuZmluZCgnLmZjLXJvdycpXG4gICAgdGhpcy5jZWxsRWxzID0gdGhpcy5lbC5maW5kKCcuZmMtZGF5LCAuZmMtZGlzYWJsZWQtZGF5JylcblxuICAgIHRoaXMucm93Q29vcmRDYWNoZSA9IG5ldyBDb29yZENhY2hlKHtcbiAgICAgIGVsczogdGhpcy5yb3dFbHMsXG4gICAgICBpc1ZlcnRpY2FsOiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLmNvbENvb3JkQ2FjaGUgPSBuZXcgQ29vcmRDYWNoZSh7XG4gICAgICBlbHM6IHRoaXMuY2VsbEVscy5zbGljZSgwLCB0aGlzLmNvbENudCksIC8vIG9ubHkgdGhlIGZpcnN0IHJvd1xuICAgICAgaXNIb3Jpem9udGFsOiB0cnVlXG4gICAgfSlcblxuICAgIC8vIHRyaWdnZXIgZGF5UmVuZGVyIHdpdGggZWFjaCBjZWxsJ3MgZWxlbWVudFxuICAgIGZvciAocm93ID0gMDsgcm93IDwgcm93Q250OyByb3crKykge1xuICAgICAgZm9yIChjb2wgPSAwOyBjb2wgPCBjb2xDbnQ7IGNvbCsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdldENlbGxEYXRlKHJvdywgY29sKSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wdWJsaWNseVRyaWdnZXIoJ2RheVJlbmRlcicsIHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHZpZXcsXG4gICAgICAgICAgICBhcmdzOiBbXG4gICAgICAgICAgICAgIHRoaXMuZ2V0Q2VsbERhdGUocm93LCBjb2wpLFxuICAgICAgICAgICAgICB0aGlzLmdldENlbGxFbChyb3csIGNvbCksXG4gICAgICAgICAgICAgIHZpZXdcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhdGVzIHRoZSBIVE1MIGZvciB0aGUgPHRkPnMgb2YgdGhlIFwibnVtYmVyXCIgcm93IGluIHRoZSBEYXlHcmlkJ3MgY29udGVudCBza2VsZXRvbi5cbiAgLy8gVGhlIG51bWJlciByb3cgd2lsbCBvbmx5IGV4aXN0IGlmIGVpdGhlciBkYXkgbnVtYmVycyBvciB3ZWVrIG51bWJlcnMgYXJlIHR1cm5lZCBvbi5cbiAgcmVuZGVyTnVtYmVyQ2VsbEh0bWwoZGF0ZSkge1xuICAgIGlmIChkYXRlID09IG51bGwpIHJldHVybiAnJ1xuICAgIGxldCB2aWV3ID0gdGhpcy52aWV3XG4gICAgbGV0IGh0bWwgPSAnJ1xuICAgIGxldCBpc0RhdGVWYWxpZCA9IHRoaXMuZGF0ZVByb2ZpbGUuYWN0aXZlVW56b25lZFJhbmdlLmNvbnRhaW5zRGF0ZShkYXRlKSAvLyBUT0RPOiBjYWxsZWQgdG9vIGZyZXF1ZW50bHkuIGNhY2hlIHNvbWVob3cuXG4gICAgbGV0IGlzRGF5TnVtYmVyVmlzaWJsZSA9IHRoaXMuZ2V0SXNEYXlOdW1iZXJzVmlzaWJsZSgpICYmIGlzRGF0ZVZhbGlkXG4gICAgbGV0IGNsYXNzZXNcbiAgICBsZXQgd2Vla0NhbGNGaXJzdERvV1xuXG4gICAgaWYgKCFpc0RheU51bWJlclZpc2libGUgJiYgIXRoaXMuY2VsbFdlZWtOdW1iZXJzVmlzaWJsZSkge1xuICAgICAgLy8gbm8gbnVtYmVycyBpbiBkYXkgY2VsbCAod2VlayBudW1iZXIgbXVzdCBiZSBhbG9uZyB0aGUgc2lkZSlcbiAgICAgIHJldHVybiAnPHRkLz4nIC8vICB3aWxsIGNyZWF0ZSBhbiBlbXB0eSBzcGFjZSBhYm92ZSBldmVudHMgOihcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdGhpcy5nZXREYXlDbGFzc2VzKGRhdGUpXG4gICAgY2xhc3Nlcy51bnNoaWZ0KCdmYy1kYXktdG9wJylcblxuICAgIGlmICh0aGlzLmNlbGxXZWVrTnVtYmVyc1Zpc2libGUpIHtcbiAgICAgIC8vIFRvIGRldGVybWluZSB0aGUgZGF5IG9mIHdlZWsgbnVtYmVyIGNoYW5nZSB1bmRlciBJU08sIHdlIGNhbm5vdFxuICAgICAgLy8gcmVseSBvbiBtb21lbnQuanMgbWV0aG9kcyBzdWNoIGFzIGZpcnN0RGF5T2ZXZWVrKCkgb3Igd2Vla2RheSgpLFxuICAgICAgLy8gYmVjYXVzZSB0aGV5IHJlbHkgb24gdGhlIGxvY2FsZSdzIGRvdyAocG9zc2libHkgb3ZlcnJpZGRlbiBieVxuICAgICAgLy8gb3VyIGZpcnN0RGF5IG9wdGlvbiksIHdoaWNoIG1heSBub3QgYmUgTW9uZGF5LiBXZSBjYW5ub3QgY2hhbmdlXG4gICAgICAvLyBkb3csIGJlY2F1c2UgdGhhdCB3b3VsZCBhZmZlY3QgdGhlIGNhbGVuZGFyIHN0YXJ0IGRheSBhcyB3ZWxsLlxuICAgICAgaWYgKGRhdGUuX2xvY2FsZS5fZnVsbENhbGVuZGFyX3dlZWtDYWxjID09PSAnSVNPJykge1xuICAgICAgICB3ZWVrQ2FsY0ZpcnN0RG9XID0gMSAgLy8gTW9uZGF5IGJ5IElTTyA4NjAxIGRlZmluaXRpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlZWtDYWxjRmlyc3REb1cgPSBkYXRlLl9sb2NhbGUuZmlyc3REYXlPZldlZWsoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGh0bWwgKz0gJzx0ZCBjbGFzcz1cIicgKyBjbGFzc2VzLmpvaW4oJyAnKSArICdcIicgK1xuICAgICAgKGlzRGF0ZVZhbGlkID9cbiAgICAgICAgICAnIGRhdGEtZGF0ZT1cIicgKyBkYXRlLmZvcm1hdCgpICsgJ1wiJyA6XG4gICAgICAgICAgJydcbiAgICAgICkgK1xuICAgICAgJz4nXG5cbiAgICBpZiAodGhpcy5jZWxsV2Vla051bWJlcnNWaXNpYmxlICYmIChkYXRlLmRheSgpID09PSB3ZWVrQ2FsY0ZpcnN0RG9XKSkge1xuICAgICAgaHRtbCArPSB2aWV3LmJ1aWxkR290b0FuY2hvckh0bWwoXG4gICAgICAgIHsgZGF0ZTogZGF0ZSwgdHlwZTogJ3dlZWsnIH0sXG4gICAgICAgIHsgJ2NsYXNzJzogJ2ZjLXdlZWstbnVtYmVyJyB9LFxuICAgICAgICBkYXRlLmZvcm1hdCgndycpIC8vIGlubmVyIEhUTUxcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoaXNEYXlOdW1iZXJWaXNpYmxlKSB7XG4gICAgICBodG1sICs9IHZpZXcuYnVpbGRHb3RvQW5jaG9ySHRtbChcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgeyAnY2xhc3MnOiAnZmMtZGF5LW51bWJlcicgfSxcbiAgICAgICAgZGF0ZS5mb3JtYXQoJ0QnKSAvLyBpbm5lciBIVE1MXG4gICAgICApXG4gICAgfVxuXG4gICAgaHRtbCArPSAnPC90ZD4nXG5cbiAgICByZXR1cm4gaHRtbFxuICB9XG5cblxuICAvLyBTbGljZXMgdXAgdGhlIGdpdmVuIHNwYW4gKHVuem9uZWQgc3RhcnQvZW5kIHdpdGggb3RoZXIgbWlzYyBkYXRhKSBpbnRvIGFuIGFycmF5IG9mIHNlZ21lbnRzXG4gIGNvbXBvbmVudEZvb3RwcmludFRvU2Vncyhjb21wb25lbnRGb290cHJpbnQpIHtcbiAgICBsZXQgc2VncyA9IHRoaXMuc2xpY2VSYW5nZUJ5Um93KGNvbXBvbmVudEZvb3RwcmludC51bnpvbmVkUmFuZ2UpXG4gICAgbGV0IGlcbiAgICBsZXQgc2VnXG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2Vncy5sZW5ndGg7IGkrKykge1xuICAgICAgc2VnID0gc2Vnc1tpXVxuXG4gICAgICBpZiAodGhpcy5pc1JUTCkge1xuICAgICAgICBzZWcubGVmdENvbCA9IHRoaXMuZGF5c1BlclJvdyAtIDEgLSBzZWcubGFzdFJvd0RheUluZGV4XG4gICAgICAgIHNlZy5yaWdodENvbCA9IHRoaXMuZGF5c1BlclJvdyAtIDEgLSBzZWcuZmlyc3RSb3dEYXlJbmRleFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VnLmxlZnRDb2wgPSBzZWcuZmlyc3RSb3dEYXlJbmRleFxuICAgICAgICBzZWcucmlnaHRDb2wgPSBzZWcubGFzdFJvd0RheUluZGV4XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ3NcbiAgfVxuXG5cbn1cblxuWWVhclRhYmxlTWl4aW4ubWl4T3ZlcihZZWFyR3JpZClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ZZWFyR3JpZC50cyIsImltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCdcbmltcG9ydCBEYXlUYWJsZU1peGluIGZyb20gXCIuL0RheVRhYmxlTWl4aW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWWVhclRhYmxlTWl4aW4gZXh0ZW5kcyBEYXlUYWJsZU1peGluIHtcblxuICBzdGFydERhdGU6IE1vbWVudFxuXG4gIC8vIFBvcHVsYXRlcyBpbnRlcm5hbCB2YXJpYWJsZXMgdXNlZCBmb3IgZGF0ZSBjYWxjdWxhdGlvbiBhbmQgcmVuZGVyaW5nXG4gIHVwZGF0ZURheVRhYmxlKCkge1xuICAgIGxldCB0ID0gKHRoaXMgYXMgYW55KVxuICAgIGxldCB2aWV3ID0gdC52aWV3XG4gICAgbGV0IGNhbGVuZGFyID0gdmlldy5jYWxlbmRhclxuICAgIHRoaXMuc3RhcnREYXRlID0gY2FsZW5kYXIubXNUb1V0Y01vbWVudCh0LmRhdGVQcm9maWxlLnJlbmRlclVuem9uZWRSYW5nZS5zdGFydE1zLCB0cnVlKVxuICB9XG5cbiAgcmVuZGVyQmdDZWxsSHRtbChkYXRlLCBvdGhlckF0dHJzKSB7XG4gICAgbGV0IHQgPSAodGhpcyBhcyBhbnkpXG4gICAgbGV0IHZpZXcgPSB0LnZpZXdcbiAgICBsZXQgaXNEYXRlVmFsaWQgPSBkYXRlICE9IG51bGxcbiAgICBsZXQgY2xhc3NlcyA9IGlzRGF0ZVZhbGlkID8gdC5nZXREYXlDbGFzc2VzKGRhdGUpIDogW11cblxuICAgIGNsYXNzZXMudW5zaGlmdCgnZmMtZGF5Jywgdmlldy5jYWxlbmRhci50aGVtZS5nZXRDbGFzcygnd2lkZ2V0Q29udGVudCcpKVxuXG4gICAgcmV0dXJuICc8dGQgY2xhc3M9XCInICsgY2xhc3Nlcy5qb2luKCcgJykgKyAnXCInICtcbiAgICAgIChpc0RhdGVWYWxpZCA/XG4gICAgICAgICcgZGF0YS1kYXRlPVwiJyArIGRhdGUuZm9ybWF0KCdZWVlZLU1NLUREJykgKyAnXCInIDogLy8gaWYgZGF0ZSBoYXMgYSB0aW1lLCB3b24ndCBmb3JtYXQgaXRcbiAgICAgICAgJycpICtcbiAgICAgIChvdGhlckF0dHJzID9cbiAgICAgICAgJyAnICsgb3RoZXJBdHRycyA6XG4gICAgICAgICcnKSArXG4gICAgICAnPjwvdGQ+J1xuICB9XG5cbiAgLy8gRGV0ZXJtaW5lcyBob3cgbWFueSBjb2x1bW5zIHRoZXJlIHNob3VsZCBiZSBpbiB0aGUgdGFibGVcbiAgY29tcHV0ZUNvbENudCgpIHtcbiAgICByZXR1cm4gMzFcbiAgfVxuXG4gIC8vIENvbXB1dGVzIHRoZSBhbWJpZ3VvdXNseS10aW1lZCBtb21lbnQgZm9yIHRoZSBnaXZlbiBjZWxsXG4gIGdldENlbGxEYXRlKHJvdywgY29sKSB7XG4gICAgbGV0IGRhdGUgPSB0aGlzLnN0YXJ0RGF0ZS5jbG9uZSgpLm1vbnRoKHJvdylcbiAgICBpZiAoZGF0ZS5kYXlzSW5Nb250aCgpID4gY29sKSB7XG4gICAgICByZXR1cm4gZGF0ZS5kYXRlKGNvbCArIDEpXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBHaXZlbiBhIGRhdGUsIHJldHVybnMgaXRzIGNocm9ub2xvY2lhbCBjZWxsLWluZGV4IGZyb20gdGhlIGZpcnN0IGNlbGwgb2YgdGhlIGdyaWQuXG4gIC8vIElmIHRoZSBkYXRlIGxpZXMgYmV0d2VlbiBjZWxscyAoYmVjYXVzZSBvZiBoaWRkZW5EYXlzKSwgcmV0dXJucyBhIGZsb2F0aW5nLXBvaW50IHZhbHVlIGJldHdlZW4gb2Zmc2V0cy5cbiAgLy8gSWYgYmVmb3JlIHRoZSBmaXJzdCBvZmZzZXQsIHJldHVybnMgYSBuZWdhdGl2ZSBudW1iZXIuXG4gIC8vIElmIGFmdGVyIHRoZSBsYXN0IG9mZnNldCwgcmV0dXJucyBhbiBvZmZzZXQgcGFzdCB0aGUgbGFzdCBjZWxsIG9mZnNldC5cbiAgLy8gT25seSB3b3JrcyBmb3IgKnN0YXJ0KiBkYXRlcyBvZiBjZWxscy4gV2lsbCBub3Qgd29yayBmb3IgZXhjbHVzaXZlIGVuZCBkYXRlcyBmb3IgY2VsbHMuXG4gIGdldERhdGVEYXlJbmRleChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUubW9udGgoKSAqIDMxICsgZGF0ZS5kYXRlKCkgLSAxXG4gIH1cblxuICByZW5kZXJIZWFkVHJIdG1sKCkge1xuICAgIHJldHVybiAnPHRyPjwvdHI+J1xuICB9XG5cblxuICAvLyBTbGljZXMgdXAgYSBkYXRlIHJhbmdlIGludG8gYSBzZWdtZW50IGZvciBldmVyeSB3ZWVrLXJvdyBpdCBpbnRlcnNlY3RzIHdpdGhcbiAgLy8gQ29udHJhcnkgdG8gRGF5VGFibGVNaXhpbjo6c2xpY2VSYW5nZUJ5Um93IHRoaXMgdmVyc2lvbiBtdXN0IGJlIGF3YXJlIG9mIHRoZSBmYWN0IHRoYXQgbm90IGV2ZXJ5IG1vbnRoIGhhcyB0aGUgc2FtZSBudW1iZXIgb2YgZGF5c1xuICBzbGljZVJhbmdlQnlSb3codW56b25lZFJhbmdlKSB7XG4gICAgbGV0IGRheXNQZXJSb3cgPSB0aGlzLmRheXNQZXJSb3dcbiAgICBsZXQgbm9ybWFsUmFuZ2UgPSAodGhpcyBhcyBhbnkpLnZpZXcuY29tcHV0ZURheVJhbmdlKHVuem9uZWRSYW5nZSkgLy8gbWFrZSB3aG9sZS1kYXkgcmFuZ2UsIGNvbnNpZGVyaW5nIG5leHREYXlUaHJlc2hvbGRcbiAgICBsZXQgcmFuZ2VGaXJzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLnN0YXJ0KSAvLyBpbmNsdXNpdmUgZmlyc3QgaW5kZXhcbiAgICBsZXQgcmFuZ2VMYXN0ID0gdGhpcy5nZXREYXRlRGF5SW5kZXgobm9ybWFsUmFuZ2UuZW5kLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheXMnKSkgLy8gaW5jbHVzaXZlIGxhc3QgaW5kZXhcbiAgICBsZXQgc2VncyA9IFtdXG4gICAgbGV0IHJvd1xuICAgIGxldCByb3dGaXJzdFxuICAgIGxldCByb3dMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIGN1cnJlbnQgcm93XG4gICAgbGV0IHNlZ0ZpcnN0XG4gICAgbGV0IHNlZ0xhc3QgLy8gaW5jbHVzaXZlIGRheS1pbmRleCByYW5nZSBmb3Igc2VnbWVudFxuXG4gICAgZm9yIChyb3cgPSAwOyByb3cgPCB0aGlzLnJvd0NudDsgcm93KyspIHtcbiAgICAgIHJvd0ZpcnN0ID0gcm93ICogZGF5c1BlclJvd1xuICAgICAgcm93TGFzdCA9IHJvd0ZpcnN0ICsgbm9ybWFsUmFuZ2Uuc3RhcnQubW9udGgocm93KS5kYXlzSW5Nb250aCgpIC0gMVxuXG4gICAgICAvLyBpbnRlcnNlY3Qgc2VnbWVudCdzIG9mZnNldCByYW5nZSB3aXRoIHRoZSByb3cnc1xuICAgICAgc2VnRmlyc3QgPSBNYXRoLm1heChyYW5nZUZpcnN0LCByb3dGaXJzdClcbiAgICAgIHNlZ0xhc3QgPSBNYXRoLm1pbihyYW5nZUxhc3QsIHJvd0xhc3QpXG5cbiAgICAgIC8vIGRlYWwgd2l0aCBpbi1iZXR3ZWVuIGluZGljZXNcbiAgICAgIHNlZ0ZpcnN0ID0gTWF0aC5jZWlsKHNlZ0ZpcnN0KSAvLyBpbi1iZXR3ZWVuIHN0YXJ0cyByb3VuZCB0byBuZXh0IGNlbGxcbiAgICAgIHNlZ0xhc3QgPSBNYXRoLmZsb29yKHNlZ0xhc3QpIC8vIGluLWJldHdlZW4gZW5kcyByb3VuZCB0byBwcmV2IGNlbGxcblxuICAgICAgaWYgKHNlZ0ZpcnN0IDw9IHNlZ0xhc3QpIHsgLy8gd2FzIHRoZXJlIGFueSBpbnRlcnNlY3Rpb24gd2l0aCB0aGUgY3VycmVudCByb3c/XG4gICAgICAgIHNlZ3MucHVzaCh7XG4gICAgICAgICAgcm93OiByb3csXG5cbiAgICAgICAgICAvLyBub3JtYWxpemUgdG8gc3RhcnQgb2Ygcm93XG4gICAgICAgICAgZmlyc3RSb3dEYXlJbmRleDogc2VnRmlyc3QgLSByb3dGaXJzdCxcbiAgICAgICAgICBsYXN0Um93RGF5SW5kZXg6IHNlZ0xhc3QgLSByb3dGaXJzdCxcblxuICAgICAgICAgIC8vIG11c3QgYmUgbWF0Y2hpbmcgaW50ZWdlcnMgdG8gYmUgdGhlIHNlZ21lbnQncyBzdGFydC9lbmRcbiAgICAgICAgICBpc1N0YXJ0OiBzZWdGaXJzdCA9PT0gcmFuZ2VGaXJzdCxcbiAgICAgICAgICBpc0VuZDogc2VnTGFzdCA9PT0gcmFuZ2VMYXN0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlZ3NcbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ZZWFyVGFibGVNaXhpbi50cyIsImltcG9ydCB7IGh0bWxFc2NhcGUsIGRheUlEcyB9IGZyb20gJ2Z1bGxjYWxlbmRhcidcbmltcG9ydCBNaXhpbiBmcm9tIFwiLi9NaXhpblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERheVRhYmxlSW50ZXJmYWNlIHtcbiAgZGF5RGF0ZXM6IGFueVxuICBkYXlzUGVyUm93OiBhbnlcbiAgcm93Q250OiBhbnlcbiAgY29sQ250OiBhbnlcbiAgdXBkYXRlRGF5VGFibGUoKVxuICByZW5kZXJIZWFkSHRtbCgpXG4gIHJlbmRlckJnVHJIdG1sKHJvdylcbiAgYm9va2VuZENlbGxzKHRyRWwpXG4gIGdldENlbGxEYXRlKHJvdywgY29sKVxuICBnZXRDZWxsUmFuZ2Uocm93LCBjb2wpXG4gIHNsaWNlUmFuZ2VCeURheSh1bnpvbmVkUmFuZ2UpXG4gIHNsaWNlUmFuZ2VCeVJvdyh1bnpvbmVkUmFuZ2UpXG4gIHJlbmRlckludHJvSHRtbCgpXG59XG5cbi8qXG5BIHNldCBvZiByZW5kZXJpbmcgYW5kIGRhdGUtcmVsYXRlZCBtZXRob2RzIGZvciBhIHZpc3VhbCBjb21wb25lbnQgY29tcHJpc2VkIG9mIG9uZSBvciBtb3JlIHJvd3Mgb2YgZGF5IGNvbHVtbnMuXG5QcmVyZXF1aXNpdGU6IHRoZSBvYmplY3QgYmVpbmcgbWl4ZWQgaW50byBuZWVkcyB0byBiZSBhICpHcmlkKlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheVRhYmxlTWl4aW4gZXh0ZW5kcyBNaXhpbiBpbXBsZW1lbnRzIERheVRhYmxlSW50ZXJmYWNlIHtcblxuICBicmVha09uV2Vla3M6IGJvb2xlYW4gLy8gc2hvdWxkIGNyZWF0ZSBhIG5ldyByb3cgZm9yIGVhY2ggd2Vlaz8gbm90IHNwZWNpZmllZCwgc28gZGVmYXVsdCBpcyBGQUxTWVxuICBkYXlEYXRlczogYW55IC8vIHdob2xlLWRheSBkYXRlcyBmb3IgZWFjaCBjb2x1bW4uIGxlZnQgdG8gcmlnaHRcbiAgZGF5SW5kaWNlczogYW55IC8vIGZvciBlYWNoIGRheSBmcm9tIHN0YXJ0LCB0aGUgb2Zmc2V0XG4gIGRheXNQZXJSb3c6IGFueVxuICByb3dDbnQ6IGFueVxuICBjb2xDbnQ6IGFueVxuICBjb2xIZWFkRm9ybWF0OiBhbnlcblxuXG4gIC8vIFBvcHVsYXRlcyBpbnRlcm5hbCB2YXJpYWJsZXMgdXNlZCBmb3IgZGF0ZSBjYWxjdWxhdGlvbiBhbmQgcmVuZGVyaW5nXG4gIHVwZGF0ZURheVRhYmxlKCkge1xuICAgIGxldCB0ID0gKHRoaXMgYXMgYW55KVxuICAgIGxldCB2aWV3ID0gdC52aWV3XG4gICAgbGV0IGNhbGVuZGFyID0gdmlldy5jYWxlbmRhclxuICAgIGxldCBkYXRlID0gY2FsZW5kYXIubXNUb1V0Y01vbWVudCh0LmRhdGVQcm9maWxlLnJlbmRlclVuem9uZWRSYW5nZS5zdGFydE1zLCB0cnVlKVxuICAgIGxldCBlbmQgPSBjYWxlbmRhci5tc1RvVXRjTW9tZW50KHQuZGF0ZVByb2ZpbGUucmVuZGVyVW56b25lZFJhbmdlLmVuZE1zLCB0cnVlKVxuICAgIGxldCBkYXlJbmRleCA9IC0xXG4gICAgbGV0IGRheUluZGljZXMgPSBbXVxuICAgIGxldCBkYXlEYXRlcyA9IFtdXG4gICAgbGV0IGRheXNQZXJSb3dcbiAgICBsZXQgZmlyc3REYXlcbiAgICBsZXQgcm93Q250XG5cbiAgICB3aGlsZSAoZGF0ZS5pc0JlZm9yZShlbmQpKSB7IC8vIGxvb3AgZWFjaCBkYXkgZnJvbSBzdGFydCB0byBlbmRcbiAgICAgIGlmICh2aWV3LmlzSGlkZGVuRGF5KGRhdGUpKSB7XG4gICAgICAgIGRheUluZGljZXMucHVzaChkYXlJbmRleCArIDAuNSkgLy8gbWFyayB0aGF0IGl0J3MgYmV0d2VlbiBpbmRpY2VzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXlJbmRleCsrXG4gICAgICAgIGRheUluZGljZXMucHVzaChkYXlJbmRleClcbiAgICAgICAgZGF5RGF0ZXMucHVzaChkYXRlLmNsb25lKCkpXG4gICAgICB9XG4gICAgICBkYXRlLmFkZCgxLCAnZGF5cycpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYnJlYWtPbldlZWtzKSB7XG4gICAgICAvLyBjb3VudCBjb2x1bW5zIHVudGlsIHRoZSBkYXktb2Ytd2VlayByZXBlYXRzXG4gICAgICBmaXJzdERheSA9IGRheURhdGVzWzBdLmRheSgpXG4gICAgICBmb3IgKGRheXNQZXJSb3cgPSAxOyBkYXlzUGVyUm93IDwgZGF5RGF0ZXMubGVuZ3RoOyBkYXlzUGVyUm93KyspIHtcbiAgICAgICAgaWYgKGRheURhdGVzW2RheXNQZXJSb3ddLmRheSgpID09PSBmaXJzdERheSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJvd0NudCA9IE1hdGguY2VpbChkYXlEYXRlcy5sZW5ndGggLyBkYXlzUGVyUm93KVxuICAgIH0gZWxzZSB7XG4gICAgICByb3dDbnQgPSAxXG4gICAgICBkYXlzUGVyUm93ID0gZGF5RGF0ZXMubGVuZ3RoXG4gICAgfVxuXG4gICAgdGhpcy5kYXlEYXRlcyA9IGRheURhdGVzXG4gICAgdGhpcy5kYXlJbmRpY2VzID0gZGF5SW5kaWNlc1xuICAgIHRoaXMuZGF5c1BlclJvdyA9IGRheXNQZXJSb3dcbiAgICB0aGlzLnJvd0NudCA9IHJvd0NudFxuXG4gICAgdGhpcy51cGRhdGVEYXlUYWJsZUNvbHMoKVxuICB9XG5cblxuICAvLyBDb21wdXRlcyBhbmQgYXNzaWduZWQgdGhlIGNvbENudCBwcm9wZXJ0eSBhbmQgdXBkYXRlcyBhbnkgb3B0aW9ucyB0aGF0IG1heSBiZSBjb21wdXRlZCBmcm9tIGl0XG4gIHVwZGF0ZURheVRhYmxlQ29scygpIHtcbiAgICB0aGlzLmNvbENudCA9IHRoaXMuY29tcHV0ZUNvbENudCgpXG4gICAgdGhpcy5jb2xIZWFkRm9ybWF0ID1cbiAgICAgICh0aGlzIGFzIGFueSkub3B0KCdjb2x1bW5IZWFkZXJGb3JtYXQnKSB8fFxuICAgICAgKHRoaXMgYXMgYW55KS5vcHQoJ2NvbHVtbkZvcm1hdCcpIHx8IC8vIGRlcHJlY2F0ZWRcbiAgICAgIHRoaXMuY29tcHV0ZUNvbEhlYWRGb3JtYXQoKVxuICB9XG5cblxuICAvLyBEZXRlcm1pbmVzIGhvdyBtYW55IGNvbHVtbnMgdGhlcmUgc2hvdWxkIGJlIGluIHRoZSB0YWJsZVxuICBjb21wdXRlQ29sQ250KCkge1xuICAgIHJldHVybiB0aGlzLmRheXNQZXJSb3dcbiAgfVxuXG5cbiAgLy8gQ29tcHV0ZXMgdGhlIGFtYmlndW91c2x5LXRpbWVkIG1vbWVudCBmb3IgdGhlIGdpdmVuIGNlbGxcbiAgZ2V0Q2VsbERhdGUocm93LCBjb2wpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlEYXRlc1tcbiAgICAgICAgdGhpcy5nZXRDZWxsRGF5SW5kZXgocm93LCBjb2wpXG4gICAgICBdLmNsb25lKClcbiAgfVxuXG5cbiAgLy8gQ29tcHV0ZXMgdGhlIGFtYmlndW91c2x5LXRpbWVkIGRhdGUgcmFuZ2UgZm9yIHRoZSBnaXZlbiBjZWxsXG4gIGdldENlbGxSYW5nZShyb3csIGNvbCkge1xuICAgIGxldCBzdGFydCA9IHRoaXMuZ2V0Q2VsbERhdGUocm93LCBjb2wpXG4gICAgbGV0IGVuZCA9IHN0YXJ0LmNsb25lKCkuYWRkKDEsICdkYXlzJylcblxuICAgIHJldHVybiB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfVxuICB9XG5cblxuICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5IGNlbGxzLCBjaHJvbm9sb2dpY2FsbHksIGZyb20gdGhlIGZpcnN0IG9mIHRoZSBncmlkICgwLWJhc2VkKVxuICBnZXRDZWxsRGF5SW5kZXgocm93LCBjb2wpIHtcbiAgICByZXR1cm4gcm93ICogdGhpcy5kYXlzUGVyUm93ICsgdGhpcy5nZXRDb2xEYXlJbmRleChjb2wpXG4gIH1cblxuXG4gIC8vIFJldHVybnMgdGhlIG51bW5lciBvZiBkYXkgY2VsbHMsIGNocm9ub2xvZ2ljYWxseSwgZnJvbSB0aGUgZmlyc3QgY2VsbCBpbiAqYW55IGdpdmVuIHJvdypcbiAgZ2V0Q29sRGF5SW5kZXgoY29sKSB7XG4gICAgaWYgKCh0aGlzIGFzIGFueSkuaXNSVEwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbENudCAtIDEgLSBjb2xcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbFxuICAgIH1cbiAgfVxuXG5cbiAgLy8gR2l2ZW4gYSBkYXRlLCByZXR1cm5zIGl0cyBjaHJvbm9sb2NpYWwgY2VsbC1pbmRleCBmcm9tIHRoZSBmaXJzdCBjZWxsIG9mIHRoZSBncmlkLlxuICAvLyBJZiB0aGUgZGF0ZSBsaWVzIGJldHdlZW4gY2VsbHMgKGJlY2F1c2Ugb2YgaGlkZGVuRGF5cyksIHJldHVybnMgYSBmbG9hdGluZy1wb2ludCB2YWx1ZSBiZXR3ZWVuIG9mZnNldHMuXG4gIC8vIElmIGJlZm9yZSB0aGUgZmlyc3Qgb2Zmc2V0LCByZXR1cm5zIGEgbmVnYXRpdmUgbnVtYmVyLlxuICAvLyBJZiBhZnRlciB0aGUgbGFzdCBvZmZzZXQsIHJldHVybnMgYW4gb2Zmc2V0IHBhc3QgdGhlIGxhc3QgY2VsbCBvZmZzZXQuXG4gIC8vIE9ubHkgd29ya3MgZm9yICpzdGFydCogZGF0ZXMgb2YgY2VsbHMuIFdpbGwgbm90IHdvcmsgZm9yIGV4Y2x1c2l2ZSBlbmQgZGF0ZXMgZm9yIGNlbGxzLlxuICBnZXREYXRlRGF5SW5kZXgoZGF0ZSkge1xuICAgIGxldCBkYXlJbmRpY2VzID0gdGhpcy5kYXlJbmRpY2VzXG4gICAgbGV0IGRheU9mZnNldCA9IGRhdGUuZGlmZih0aGlzLmRheURhdGVzWzBdLCAnZGF5cycpXG5cbiAgICBpZiAoZGF5T2Zmc2V0IDwgMCkge1xuICAgICAgcmV0dXJuIGRheUluZGljZXNbMF0gLSAxXG4gICAgfSBlbHNlIGlmIChkYXlPZmZzZXQgPj0gZGF5SW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBkYXlJbmRpY2VzW2RheUluZGljZXMubGVuZ3RoIC0gMV0gKyAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXlJbmRpY2VzW2RheU9mZnNldF1cbiAgICB9XG4gIH1cblxuXG4gIC8qIE9wdGlvbnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIC8vIENvbXB1dGVzIGEgZGVmYXVsdCBjb2x1bW4gaGVhZGVyIGZvcm1hdHRpbmcgc3RyaW5nIGlmIGBjb2xGb3JtYXRgIGlzIG5vdCBleHBsaWNpdGx5IGRlZmluZWRcbiAgY29tcHV0ZUNvbEhlYWRGb3JtYXQoKSB7XG4gICAgLy8gaWYgbW9yZSB0aGFuIG9uZSB3ZWVrIHJvdywgb3IgaWYgdGhlcmUgYXJlIGEgbG90IG9mIGNvbHVtbnMgd2l0aCBub3QgbXVjaCBzcGFjZSxcbiAgICAvLyBwdXQganVzdCB0aGUgZGF5IG51bWJlcnMgd2lsbCBiZSBpbiBlYWNoIGNlbGxcbiAgICBpZiAodGhpcy5yb3dDbnQgPiAxIHx8IHRoaXMuY29sQ250ID4gMTApIHtcbiAgICAgIHJldHVybiAnZGRkJyAvLyBcIlNhdFwiXG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbENudCA+IDEpIHtcbiAgICAgIHJldHVybiAodGhpcyBhcyBhbnkpLm9wdCgnZGF5T2ZNb250aEZvcm1hdCcpIC8vIFwiU2F0IDEyLzEwXCJcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdkZGRkJyAvLyBcIlNhdHVyZGF5XCJcbiAgICB9XG4gIH1cblxuXG4gIC8qIFNsaWNpbmdcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIC8vIFNsaWNlcyB1cCBhIGRhdGUgcmFuZ2UgaW50byBhIHNlZ21lbnQgZm9yIGV2ZXJ5IHdlZWstcm93IGl0IGludGVyc2VjdHMgd2l0aFxuICBzbGljZVJhbmdlQnlSb3codW56b25lZFJhbmdlKSB7XG4gICAgbGV0IGRheXNQZXJSb3cgPSB0aGlzLmRheXNQZXJSb3dcbiAgICBsZXQgbm9ybWFsUmFuZ2UgPSAodGhpcyBhcyBhbnkpLnZpZXcuY29tcHV0ZURheVJhbmdlKHVuem9uZWRSYW5nZSkgLy8gbWFrZSB3aG9sZS1kYXkgcmFuZ2UsIGNvbnNpZGVyaW5nIG5leHREYXlUaHJlc2hvbGRcbiAgICBsZXQgcmFuZ2VGaXJzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLnN0YXJ0KSAvLyBpbmNsdXNpdmUgZmlyc3QgaW5kZXhcbiAgICBsZXQgcmFuZ2VMYXN0ID0gdGhpcy5nZXREYXRlRGF5SW5kZXgobm9ybWFsUmFuZ2UuZW5kLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheXMnKSkgLy8gaW5jbHVzaXZlIGxhc3QgaW5kZXhcbiAgICBsZXQgc2VncyA9IFtdXG4gICAgbGV0IHJvd1xuICAgIGxldCByb3dGaXJzdFxuICAgIGxldCByb3dMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIGN1cnJlbnQgcm93XG4gICAgbGV0IHNlZ0ZpcnN0XG4gICAgbGV0IHNlZ0xhc3QgLy8gaW5jbHVzaXZlIGRheS1pbmRleCByYW5nZSBmb3Igc2VnbWVudFxuXG4gICAgZm9yIChyb3cgPSAwOyByb3cgPCB0aGlzLnJvd0NudDsgcm93KyspIHtcbiAgICAgIHJvd0ZpcnN0ID0gcm93ICogZGF5c1BlclJvd1xuICAgICAgcm93TGFzdCA9IHJvd0ZpcnN0ICsgZGF5c1BlclJvdyAtIDFcblxuICAgICAgLy8gaW50ZXJzZWN0IHNlZ21lbnQncyBvZmZzZXQgcmFuZ2Ugd2l0aCB0aGUgcm93J3NcbiAgICAgIHNlZ0ZpcnN0ID0gTWF0aC5tYXgocmFuZ2VGaXJzdCwgcm93Rmlyc3QpXG4gICAgICBzZWdMYXN0ID0gTWF0aC5taW4ocmFuZ2VMYXN0LCByb3dMYXN0KVxuXG4gICAgICAvLyBkZWFsIHdpdGggaW4tYmV0d2VlbiBpbmRpY2VzXG4gICAgICBzZWdGaXJzdCA9IE1hdGguY2VpbChzZWdGaXJzdCkgLy8gaW4tYmV0d2VlbiBzdGFydHMgcm91bmQgdG8gbmV4dCBjZWxsXG4gICAgICBzZWdMYXN0ID0gTWF0aC5mbG9vcihzZWdMYXN0KSAvLyBpbi1iZXR3ZWVuIGVuZHMgcm91bmQgdG8gcHJldiBjZWxsXG5cbiAgICAgIGlmIChzZWdGaXJzdCA8PSBzZWdMYXN0KSB7IC8vIHdhcyB0aGVyZSBhbnkgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGN1cnJlbnQgcm93P1xuICAgICAgICBzZWdzLnB1c2goe1xuICAgICAgICAgIHJvdzogcm93LFxuXG4gICAgICAgICAgLy8gbm9ybWFsaXplIHRvIHN0YXJ0IG9mIHJvd1xuICAgICAgICAgIGZpcnN0Um93RGF5SW5kZXg6IHNlZ0ZpcnN0IC0gcm93Rmlyc3QsXG4gICAgICAgICAgbGFzdFJvd0RheUluZGV4OiBzZWdMYXN0IC0gcm93Rmlyc3QsXG5cbiAgICAgICAgICAvLyBtdXN0IGJlIG1hdGNoaW5nIGludGVnZXJzIHRvIGJlIHRoZSBzZWdtZW50J3Mgc3RhcnQvZW5kXG4gICAgICAgICAgaXNTdGFydDogc2VnRmlyc3QgPT09IHJhbmdlRmlyc3QsXG4gICAgICAgICAgaXNFbmQ6IHNlZ0xhc3QgPT09IHJhbmdlTGFzdFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWdzXG4gIH1cblxuXG4gIC8vIFNsaWNlcyB1cCBhIGRhdGUgcmFuZ2UgaW50byBhIHNlZ21lbnQgZm9yIGV2ZXJ5IGRheS1jZWxsIGl0IGludGVyc2VjdHMgd2l0aC5cbiAgLy8gVE9ETzogbWFrZSBtb3JlIERSWSB3aXRoIHNsaWNlUmFuZ2VCeVJvdyBzb21laG93LlxuICBzbGljZVJhbmdlQnlEYXkodW56b25lZFJhbmdlKSB7XG4gICAgbGV0IGRheXNQZXJSb3cgPSB0aGlzLmRheXNQZXJSb3dcbiAgICBsZXQgbm9ybWFsUmFuZ2UgPSAodGhpcyBhcyBhbnkpLnZpZXcuY29tcHV0ZURheVJhbmdlKHVuem9uZWRSYW5nZSkgLy8gbWFrZSB3aG9sZS1kYXkgcmFuZ2UsIGNvbnNpZGVyaW5nIG5leHREYXlUaHJlc2hvbGRcbiAgICBsZXQgcmFuZ2VGaXJzdCA9IHRoaXMuZ2V0RGF0ZURheUluZGV4KG5vcm1hbFJhbmdlLnN0YXJ0KSAvLyBpbmNsdXNpdmUgZmlyc3QgaW5kZXhcbiAgICBsZXQgcmFuZ2VMYXN0ID0gdGhpcy5nZXREYXRlRGF5SW5kZXgobm9ybWFsUmFuZ2UuZW5kLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheXMnKSkgLy8gaW5jbHVzaXZlIGxhc3QgaW5kZXhcbiAgICBsZXQgc2VncyA9IFtdXG4gICAgbGV0IHJvd1xuICAgIGxldCByb3dGaXJzdFxuICAgIGxldCByb3dMYXN0IC8vIGluY2x1c2l2ZSBkYXktaW5kZXggcmFuZ2UgZm9yIGN1cnJlbnQgcm93XG4gICAgbGV0IGlcbiAgICBsZXQgc2VnRmlyc3RcbiAgICBsZXQgc2VnTGFzdCAvLyBpbmNsdXNpdmUgZGF5LWluZGV4IHJhbmdlIGZvciBzZWdtZW50XG5cbiAgICBmb3IgKHJvdyA9IDA7IHJvdyA8IHRoaXMucm93Q250OyByb3crKykge1xuICAgICAgcm93Rmlyc3QgPSByb3cgKiBkYXlzUGVyUm93XG4gICAgICByb3dMYXN0ID0gcm93Rmlyc3QgKyBkYXlzUGVyUm93IC0gMVxuXG4gICAgICBmb3IgKGkgPSByb3dGaXJzdDsgaSA8PSByb3dMYXN0OyBpKyspIHtcblxuICAgICAgICAvLyBpbnRlcnNlY3Qgc2VnbWVudCdzIG9mZnNldCByYW5nZSB3aXRoIHRoZSByb3cnc1xuICAgICAgICBzZWdGaXJzdCA9IE1hdGgubWF4KHJhbmdlRmlyc3QsIGkpXG4gICAgICAgIHNlZ0xhc3QgPSBNYXRoLm1pbihyYW5nZUxhc3QsIGkpXG5cbiAgICAgICAgLy8gZGVhbCB3aXRoIGluLWJldHdlZW4gaW5kaWNlc1xuICAgICAgICBzZWdGaXJzdCA9IE1hdGguY2VpbChzZWdGaXJzdCkgLy8gaW4tYmV0d2VlbiBzdGFydHMgcm91bmQgdG8gbmV4dCBjZWxsXG4gICAgICAgIHNlZ0xhc3QgPSBNYXRoLmZsb29yKHNlZ0xhc3QpIC8vIGluLWJldHdlZW4gZW5kcyByb3VuZCB0byBwcmV2IGNlbGxcblxuICAgICAgICBpZiAoc2VnRmlyc3QgPD0gc2VnTGFzdCkgeyAvLyB3YXMgdGhlcmUgYW55IGludGVyc2VjdGlvbiB3aXRoIHRoZSBjdXJyZW50IHJvdz9cbiAgICAgICAgICBzZWdzLnB1c2goe1xuICAgICAgICAgICAgcm93OiByb3csXG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSB0byBzdGFydCBvZiByb3dcbiAgICAgICAgICAgIGZpcnN0Um93RGF5SW5kZXg6IHNlZ0ZpcnN0IC0gcm93Rmlyc3QsXG4gICAgICAgICAgICBsYXN0Um93RGF5SW5kZXg6IHNlZ0xhc3QgLSByb3dGaXJzdCxcblxuICAgICAgICAgICAgLy8gbXVzdCBiZSBtYXRjaGluZyBpbnRlZ2VycyB0byBiZSB0aGUgc2VnbWVudCdzIHN0YXJ0L2VuZFxuICAgICAgICAgICAgaXNTdGFydDogc2VnRmlyc3QgPT09IHJhbmdlRmlyc3QsXG4gICAgICAgICAgICBpc0VuZDogc2VnTGFzdCA9PT0gcmFuZ2VMYXN0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWdzXG4gIH1cblxuXG4gIC8qIEhlYWRlciBSZW5kZXJpbmdcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIHJlbmRlckhlYWRIdG1sKCkge1xuICAgIGxldCB0aGVtZSA9ICh0aGlzIGFzIGFueSkudmlldy5jYWxlbmRhci50aGVtZVxuXG4gICAgcmV0dXJuICcnICtcbiAgICAgICc8ZGl2IGNsYXNzPVwiZmMtcm93ICcgKyB0aGVtZS5nZXRDbGFzcygnaGVhZGVyUm93JykgKyAnXCI+JyArXG4gICAgICAgICc8dGFibGUgY2xhc3M9XCInICsgdGhlbWUuZ2V0Q2xhc3MoJ3RhYmxlR3JpZCcpICsgJ1wiPicgK1xuICAgICAgICAgICc8dGhlYWQ+JyArXG4gICAgICAgICAgICB0aGlzLnJlbmRlckhlYWRUckh0bWwoKSArXG4gICAgICAgICAgJzwvdGhlYWQ+JyArXG4gICAgICAgICc8L3RhYmxlPicgK1xuICAgICAgJzwvZGl2PidcbiAgfVxuXG5cbiAgcmVuZGVySGVhZEludHJvSHRtbCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnRyb0h0bWwoKSAvLyBmYWxsIGJhY2sgdG8gZ2VuZXJpY1xuICB9XG5cblxuICByZW5kZXJIZWFkVHJIdG1sKCkge1xuICAgIHJldHVybiAnJyArXG4gICAgICAnPHRyPicgK1xuICAgICAgICAoKHRoaXMgYXMgYW55KS5pc1JUTCA/ICcnIDogdGhpcy5yZW5kZXJIZWFkSW50cm9IdG1sKCkpICtcbiAgICAgICAgdGhpcy5yZW5kZXJIZWFkRGF0ZUNlbGxzSHRtbCgpICtcbiAgICAgICAgKCh0aGlzIGFzIGFueSkuaXNSVEwgPyB0aGlzLnJlbmRlckhlYWRJbnRyb0h0bWwoKSA6ICcnKSArXG4gICAgICAnPC90cj4nXG4gIH1cblxuXG4gIHJlbmRlckhlYWREYXRlQ2VsbHNIdG1sKCkge1xuICAgIGxldCBodG1scyA9IFtdXG4gICAgbGV0IGNvbFxuICAgIGxldCBkYXRlXG5cbiAgICBmb3IgKGNvbCA9IDA7IGNvbCA8IHRoaXMuY29sQ250OyBjb2wrKykge1xuICAgICAgZGF0ZSA9IHRoaXMuZ2V0Q2VsbERhdGUoMCwgY29sKVxuICAgICAgaHRtbHMucHVzaCgodGhpcyBhcyBhbnkpLnJlbmRlckhlYWREYXRlQ2VsbEh0bWwoZGF0ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxzLmpvaW4oJycpXG4gIH1cblxuXG4gIC8vIFRPRE86IHdoZW4gaW50ZXJuYWxBcGlWZXJzaW9uLCBhY2NlcHQgYW4gb2JqZWN0IGZvciBIVE1MIGF0dHJpYnV0ZXNcbiAgLy8gKGNvbHNwYW4gc2hvdWxkIGJlIG5vIGRpZmZlcmVudClcbiAgcmVuZGVySGVhZERhdGVDZWxsSHRtbChkYXRlLCBjb2xzcGFuLCBvdGhlckF0dHJzKSB7XG4gICAgbGV0IHQgPSAodGhpcyBhcyBhbnkpXG4gICAgbGV0IHZpZXcgPSB0LnZpZXdcbiAgICBsZXQgaXNEYXRlVmFsaWQgPSB0LmRhdGVQcm9maWxlLmFjdGl2ZVVuem9uZWRSYW5nZS5jb250YWluc0RhdGUoZGF0ZSkgLy8gVE9ETzogY2FsbGVkIHRvbyBmcmVxdWVudGx5LiBjYWNoZSBzb21laG93LlxuICAgIGxldCBjbGFzc05hbWVzID0gW1xuICAgICAgJ2ZjLWRheS1oZWFkZXInLFxuICAgICAgdmlldy5jYWxlbmRhci50aGVtZS5nZXRDbGFzcygnd2lkZ2V0SGVhZGVyJylcbiAgICBdXG4gICAgbGV0IGlubmVySHRtbFxuXG4gICAgaWYgKHR5cGVvZiB0Lm9wdCgnY29sdW1uSGVhZGVySHRtbCcpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbm5lckh0bWwgPSB0Lm9wdCgnY29sdW1uSGVhZGVySHRtbCcpKGRhdGUpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdC5vcHQoJ2NvbHVtbkhlYWRlclRleHQnKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJIdG1sID0gaHRtbEVzY2FwZSh0Lm9wdCgnY29sdW1uSGVhZGVyVGV4dCcpKGRhdGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICBpbm5lckh0bWwgPSBodG1sRXNjYXBlKGRhdGUuZm9ybWF0KHQuY29sSGVhZEZvcm1hdCkpXG4gICAgfVxuXG4gICAgLy8gaWYgb25seSBvbmUgcm93IG9mIGRheXMsIHRoZSBjbGFzc05hbWVzIG9uIHRoZSBoZWFkZXIgY2FuIHJlcHJlc2VudCB0aGUgc3BlY2lmaWMgZGF5cyBiZW5lYXRoXG4gICAgaWYgKHQucm93Q250ID09PSAxKSB7XG4gICAgICBjbGFzc05hbWVzID0gY2xhc3NOYW1lcy5jb25jYXQoXG4gICAgICAgIC8vIGluY2x1ZGVzIHRoZSBkYXktb2Ytd2VlayBjbGFzc1xuICAgICAgICAvLyBub1RoZW1lSGlnaGxpZ2h0PXRydWUgKGRvbid0IGhpZ2hsaWdodCB0aGUgaGVhZGVyKVxuICAgICAgICB0LmdldERheUNsYXNzZXMoZGF0ZSwgdHJ1ZSlcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdmYy0nICsgZGF5SURzW2RhdGUuZGF5KCldKSAvLyBvbmx5IGFkZCB0aGUgZGF5LW9mLXdlZWsgY2xhc3NcbiAgICB9XG5cbiAgICByZXR1cm4gJycgK1xuICAgICAgJzx0aCBjbGFzcz1cIicgKyBjbGFzc05hbWVzLmpvaW4oJyAnKSArICdcIicgK1xuICAgICAgICAoKGlzRGF0ZVZhbGlkICYmIHQucm93Q250KSA9PT0gMSA/XG4gICAgICAgICAgJyBkYXRhLWRhdGU9XCInICsgZGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSArICdcIicgOlxuICAgICAgICAgICcnKSArXG4gICAgICAgIChjb2xzcGFuID4gMSA/XG4gICAgICAgICAgJyBjb2xzcGFuPVwiJyArIGNvbHNwYW4gKyAnXCInIDpcbiAgICAgICAgICAnJykgK1xuICAgICAgICAob3RoZXJBdHRycyA/XG4gICAgICAgICAgJyAnICsgb3RoZXJBdHRycyA6XG4gICAgICAgICAgJycpICtcbiAgICAgICAgJz4nICtcbiAgICAgICAgKGlzRGF0ZVZhbGlkID9cbiAgICAgICAgICAvLyBkb24ndCBtYWtlIGEgbGluayBpZiB0aGUgaGVhZGluZyBjb3VsZCByZXByZXNlbnQgbXVsdGlwbGUgZGF5cywgb3IgaWYgdGhlcmUncyBvbmx5IG9uZSBkYXkgKGZvcmNlT2ZmKVxuICAgICAgICAgIHZpZXcuYnVpbGRHb3RvQW5jaG9ySHRtbChcbiAgICAgICAgICAgIHsgZGF0ZTogZGF0ZSwgZm9yY2VPZmY6IHQucm93Q250ID4gMSB8fCB0LmNvbENudCA9PT0gMSB9LFxuICAgICAgICAgICAgaW5uZXJIdG1sXG4gICAgICAgICAgKSA6XG4gICAgICAgICAgLy8gaWYgbm90IHZhbGlkLCBkaXNwbGF5IHRleHQsIGJ1dCBubyBsaW5rXG4gICAgICAgICAgaW5uZXJIdG1sXG4gICAgICAgICkgK1xuICAgICAgJzwvdGg+J1xuICB9XG5cblxuICAvKiBCYWNrZ3JvdW5kIFJlbmRlcmluZ1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgcmVuZGVyQmdUckh0bWwocm93KSB7XG4gICAgcmV0dXJuICcnICtcbiAgICAgICc8dHI+JyArXG4gICAgICAgICgodGhpcyBhcyBhbnkpLmlzUlRMID8gJycgOiB0aGlzLnJlbmRlckJnSW50cm9IdG1sKHJvdykpICtcbiAgICAgICAgdGhpcy5yZW5kZXJCZ0NlbGxzSHRtbChyb3cpICtcbiAgICAgICAgKCh0aGlzIGFzIGFueSkuaXNSVEwgPyB0aGlzLnJlbmRlckJnSW50cm9IdG1sKHJvdykgOiAnJykgK1xuICAgICAgJzwvdHI+J1xuICB9XG5cblxuICByZW5kZXJCZ0ludHJvSHRtbChyb3cpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnRyb0h0bWwoKSAvLyBmYWxsIGJhY2sgdG8gZ2VuZXJpY1xuICB9XG5cblxuICByZW5kZXJCZ0NlbGxzSHRtbChyb3cpIHtcbiAgICBsZXQgaHRtbHMgPSBbXVxuICAgIGxldCBjb2xcbiAgICBsZXQgZGF0ZVxuXG4gICAgZm9yIChjb2wgPSAwOyBjb2wgPCB0aGlzLmNvbENudDsgY29sKyspIHtcbiAgICAgIGRhdGUgPSB0aGlzLmdldENlbGxEYXRlKHJvdywgY29sKVxuICAgICAgaHRtbHMucHVzaCgodGhpcyBhcyBhbnkpLnJlbmRlckJnQ2VsbEh0bWwoZGF0ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxzLmpvaW4oJycpXG4gIH1cblxuXG4gIHJlbmRlckJnQ2VsbEh0bWwoZGF0ZSwgb3RoZXJBdHRycykge1xuICAgIGxldCB0ID0gKHRoaXMgYXMgYW55KVxuICAgIGxldCB2aWV3ID0gdC52aWV3XG4gICAgbGV0IGlzRGF0ZVZhbGlkID0gdC5kYXRlUHJvZmlsZS5hY3RpdmVVbnpvbmVkUmFuZ2UuY29udGFpbnNEYXRlKGRhdGUpIC8vIFRPRE86IGNhbGxlZCB0b28gZnJlcXVlbnRseS4gY2FjaGUgc29tZWhvdy5cbiAgICBsZXQgY2xhc3NlcyA9IHQuZ2V0RGF5Q2xhc3NlcyhkYXRlKVxuXG4gICAgY2xhc3Nlcy51bnNoaWZ0KCdmYy1kYXknLCB2aWV3LmNhbGVuZGFyLnRoZW1lLmdldENsYXNzKCd3aWRnZXRDb250ZW50JykpXG5cbiAgICByZXR1cm4gJzx0ZCBjbGFzcz1cIicgKyBjbGFzc2VzLmpvaW4oJyAnKSArICdcIicgK1xuICAgICAgKGlzRGF0ZVZhbGlkID9cbiAgICAgICAgJyBkYXRhLWRhdGU9XCInICsgZGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSArICdcIicgOiAvLyBpZiBkYXRlIGhhcyBhIHRpbWUsIHdvbid0IGZvcm1hdCBpdFxuICAgICAgICAnJykgK1xuICAgICAgKG90aGVyQXR0cnMgP1xuICAgICAgICAnICcgKyBvdGhlckF0dHJzIDpcbiAgICAgICAgJycpICtcbiAgICAgICc+PC90ZD4nXG4gIH1cblxuXG4gIC8qIEdlbmVyaWNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4gIHJlbmRlckludHJvSHRtbCgpIHtcbiAgICAvLyBHZW5lcmF0ZXMgdGhlIGRlZmF1bHQgSFRNTCBpbnRybyBmb3IgYW55IHJvdy4gVXNlciBjbGFzc2VzIHNob3VsZCBvdmVycmlkZVxuICB9XG5cblxuICAvLyBUT0RPOiBhIGdlbmVyaWMgbWV0aG9kIGZvciBkZWFsaW5nIHdpdGggPHRyPiwgUlRMLCBpbnRyb1xuICAvLyB3aGVuIGluY3JlbWVudCBpbnRlcm5hbEFwaVZlcnNpb25cbiAgLy8gd3JhcFRyIChzY2hlZHVsZXIpXG5cblxuICAvKiBVdGlsc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgLy8gQXBwbGllcyB0aGUgZ2VuZXJpYyBcImludHJvXCIgYW5kIFwib3V0cm9cIiBIVE1MIHRvIHRoZSBnaXZlbiBjZWxscy5cbiAgLy8gSW50cm8gbWVhbnMgdGhlIGxlZnRtb3N0IGNlbGwgd2hlbiB0aGUgY2FsZW5kYXIgaXMgTFRSIGFuZCB0aGUgcmlnaHRtb3N0IGNlbGwgd2hlbiBSVEwuIFZpY2UtdmVyc2EgZm9yIG91dHJvLlxuICBib29rZW5kQ2VsbHModHJFbCkge1xuICAgIGxldCBpbnRyb0h0bWwgPSB0aGlzLnJlbmRlckludHJvSHRtbCgpXG5cbiAgICBpZiAoaW50cm9IdG1sKSB7XG4gICAgICBpZiAoKHRoaXMgYXMgYW55KS5pc1JUTCkge1xuICAgICAgICB0ckVsLmFwcGVuZChpbnRyb0h0bWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ckVsLnByZXBlbmQoaW50cm9IdG1sKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF5VGFibGVNaXhpbi50cyIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWl4aW4ge1xuXG4gIHN0YXRpYyBtaXhJbnRvKGRlc3RDbGFzcykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMucHJvdG90eXBlKS5mb3JFYWNoKChuYW1lKSA9PiB7IC8vIGNvcHkgbWV0aG9kc1xuICAgICAgaWYgKCFkZXN0Q2xhc3MucHJvdG90eXBlW25hbWVdKSB7IC8vIGlmIGRlc3RpbmF0aW9uIGNsYXNzIGRvZXNuJ3QgYWxyZWFkeSBkZWZpbmUgaXRcbiAgICAgICAgZGVzdENsYXNzLnByb3RvdHlwZVtuYW1lXSA9IHRoaXMucHJvdG90eXBlW25hbWVdXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8qXG4gIHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgbWV0aG9kc1xuICBUT0RPOiByZW1vdmUhIG5vdCB1c2VkIGFueW1vcmVcbiAgKi9cbiAgc3RhdGljIG1peE92ZXIoZGVzdENsYXNzKSB7XG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5wcm90b3R5cGUpLmZvckVhY2goKG5hbWUpID0+IHsgLy8gY29weSBtZXRob2RzXG4gICAgICBkZXN0Q2xhc3MucHJvdG90eXBlW25hbWVdID0gdGhpcy5wcm90b3R5cGVbbmFtZV1cbiAgICB9KVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NaXhpbi50cyIsImltcG9ydCB7VW56b25lZFJhbmdlfSBmcm9tIFwiZnVsbGNhbGVuZGFyXCI7XG5pbXBvcnQgRGF0ZVByb2ZpbGVHZW5lcmF0b3IgZnJvbSBcIi4vRGF0ZVByb2ZpbGVHZW5lcmF0b3JcIjtcblxuY2xhc3MgWWVhclZpZXdEYXRlUHJvZmlsZUdlbmVyYXRvciBleHRlbmRzIERhdGVQcm9maWxlR2VuZXJhdG9yIHtcblxuICAvLyBDb21wdXRlcyB0aGUgZGF0ZSByYW5nZSB0aGF0IHdpbGwgYmUgcmVuZGVyZWQuXG4gIGJ1aWxkUmVuZGVyUmFuZ2UoY3VycmVudFVuem9uZWRSYW5nZSwgY3VycmVudFJhbmdlVW5pdCwgaXNSYW5nZUFsbERheSkge1xuICAgIGxldCBzdGFydCA9IHRoaXMubXNUb1V0Y01vbWVudChjdXJyZW50VW56b25lZFJhbmdlLnN0YXJ0TXMsIGlzUmFuZ2VBbGxEYXkpXG4gICAgbGV0IGVuZCA9IHRoaXMubXNUb1V0Y01vbWVudChjdXJyZW50VW56b25lZFJhbmdlLmVuZE1zLCBpc1JhbmdlQWxsRGF5KVxuICAgIHJldHVybiBuZXcgVW56b25lZFJhbmdlKHN0YXJ0LCBlbmQpXG4gIH1cblxufVxuXG5leHBvcnQge1xuICAgIFllYXJWaWV3RGF0ZVByb2ZpbGVHZW5lcmF0b3Jcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ZZWFyVmlld0RhdGVQcm9maWxlR2VuZXJhdG9yLnRzIiwiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IGNvbXB1dGVHcmVhdGVzdFVuaXQsIGNvbXB1dGVEdXJhdGlvbkdyZWF0ZXN0VW5pdCwgVW56b25lZFJhbmdlIH0gZnJvbSAnZnVsbGNhbGVuZGFyJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQcm9maWxlR2VuZXJhdG9yIHtcblxuICBfdmlldzogYW55IC8vIGRpc2NvdXJhZ2VcblxuXG4gIGNvbnN0cnVjdG9yKF92aWV3KSB7XG4gICAgdGhpcy5fdmlldyA9IF92aWV3XG4gIH1cblxuXG4gIG9wdChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXcub3B0KG5hbWUpXG4gIH1cblxuXG4gIHRyaW1IaWRkZW5EYXlzKHVuem9uZWRSYW5nZSkge1xuICAgIHJldHVybiB0aGlzLl92aWV3LnRyaW1IaWRkZW5EYXlzKHVuem9uZWRSYW5nZSlcbiAgfVxuXG5cbiAgbXNUb1V0Y01vbWVudChtcywgZm9yY2VBbGxEYXkpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlldy5jYWxlbmRhci5tc1RvVXRjTW9tZW50KG1zLCBmb3JjZUFsbERheSlcbiAgfVxuXG5cbiAgLyogRGF0ZSBSYW5nZSBDb21wdXRhdGlvblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbiAgLy8gQnVpbGRzIGEgc3RydWN0dXJlIHdpdGggaW5mbyBhYm91dCB3aGF0IHRoZSBkYXRlcy9yYW5nZXMgd2lsbCBiZSBmb3IgdGhlIFwicHJldlwiIHZpZXcuXG4gIGJ1aWxkUHJldihjdXJyZW50RGF0ZVByb2ZpbGUpIHtcbiAgICBsZXQgcHJldkRhdGUgPSBjdXJyZW50RGF0ZVByb2ZpbGUuZGF0ZS5jbG9uZSgpXG4gICAgICAuc3RhcnRPZihjdXJyZW50RGF0ZVByb2ZpbGUuY3VycmVudFJhbmdlVW5pdClcbiAgICAgIC5zdWJ0cmFjdChjdXJyZW50RGF0ZVByb2ZpbGUuZGF0ZUluY3JlbWVudClcblxuICAgIHJldHVybiB0aGlzLmJ1aWxkKHByZXZEYXRlLCAtMSlcbiAgfVxuXG5cbiAgLy8gQnVpbGRzIGEgc3RydWN0dXJlIHdpdGggaW5mbyBhYm91dCB3aGF0IHRoZSBkYXRlcy9yYW5nZXMgd2lsbCBiZSBmb3IgdGhlIFwibmV4dFwiIHZpZXcuXG4gIGJ1aWxkTmV4dChjdXJyZW50RGF0ZVByb2ZpbGUpIHtcbiAgICBsZXQgbmV4dERhdGUgPSBjdXJyZW50RGF0ZVByb2ZpbGUuZGF0ZS5jbG9uZSgpXG4gICAgICAuc3RhcnRPZihjdXJyZW50RGF0ZVByb2ZpbGUuY3VycmVudFJhbmdlVW5pdClcbiAgICAgIC5hZGQoY3VycmVudERhdGVQcm9maWxlLmRhdGVJbmNyZW1lbnQpXG5cbiAgICByZXR1cm4gdGhpcy5idWlsZChuZXh0RGF0ZSwgMSlcbiAgfVxuXG5cbiAgLy8gQnVpbGRzIGEgc3RydWN0dXJlIGhvbGRpbmcgZGF0ZXMvcmFuZ2VzIGZvciByZW5kZXJpbmcgYXJvdW5kIHRoZSBnaXZlbiBkYXRlLlxuICAvLyBPcHRpb25hbCBkaXJlY3Rpb24gcGFyYW0gaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRhdGUgaXMgYmVpbmcgaW5jcmVtZW50ZWQvZGVjcmVtZW50ZWRcbiAgLy8gZnJvbSBpdHMgcHJldmlvdXMgdmFsdWUuIGRlY3JlbWVudGVkID0gLTEsIGluY3JlbWVudGVkID0gMSAoZGVmYXVsdCkuXG4gIGJ1aWxkKGRhdGUsIGRpcmVjdGlvbiwgZm9yY2VUb1ZhbGlkPSBmYWxzZSkge1xuICAgIGxldCBpc0RhdGVBbGxEYXkgPSAhZGF0ZS5oYXNUaW1lKClcbiAgICBsZXQgdmFsaWRVbnpvbmVkUmFuZ2VcbiAgICBsZXQgbWluVGltZSA9IG51bGxcbiAgICBsZXQgbWF4VGltZSA9IG51bGxcbiAgICBsZXQgY3VycmVudEluZm9cbiAgICBsZXQgaXNSYW5nZUFsbERheVxuICAgIGxldCByZW5kZXJVbnpvbmVkUmFuZ2VcbiAgICBsZXQgYWN0aXZlVW56b25lZFJhbmdlXG4gICAgbGV0IGlzVmFsaWRcblxuICAgIHZhbGlkVW56b25lZFJhbmdlID0gdGhpcy5idWlsZFZhbGlkUmFuZ2UoKVxuICAgIHZhbGlkVW56b25lZFJhbmdlID0gdGhpcy50cmltSGlkZGVuRGF5cyh2YWxpZFVuem9uZWRSYW5nZSlcblxuICAgIGlmIChmb3JjZVRvVmFsaWQpIHtcbiAgICAgIGRhdGUgPSB0aGlzLm1zVG9VdGNNb21lbnQoXG4gICAgICAgIHZhbGlkVW56b25lZFJhbmdlLmNvbnN0cmFpbkRhdGUoZGF0ZSksIC8vIHJldHVybnMgTVNcbiAgICAgICAgaXNEYXRlQWxsRGF5XG4gICAgICApXG4gICAgfVxuXG4gICAgY3VycmVudEluZm8gPSB0aGlzLmJ1aWxkQ3VycmVudFJhbmdlSW5mbyhkYXRlLCBkaXJlY3Rpb24pXG4gICAgaXNSYW5nZUFsbERheSA9IC9eKHllYXJ8bW9udGh8d2Vla3xkYXkpJC8udGVzdChjdXJyZW50SW5mby51bml0KVxuICAgIHJlbmRlclVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRSZW5kZXJSYW5nZShcbiAgICAgIHRoaXMudHJpbUhpZGRlbkRheXMoY3VycmVudEluZm8udW56b25lZFJhbmdlKSxcbiAgICAgIGN1cnJlbnRJbmZvLnVuaXQsXG4gICAgICBpc1JhbmdlQWxsRGF5XG4gICAgKVxuICAgIHJlbmRlclVuem9uZWRSYW5nZSA9IHRoaXMudHJpbUhpZGRlbkRheXMocmVuZGVyVW56b25lZFJhbmdlKVxuICAgIGFjdGl2ZVVuem9uZWRSYW5nZSA9IHJlbmRlclVuem9uZWRSYW5nZS5jbG9uZSgpXG5cbiAgICBpZiAoIXRoaXMub3B0KCdzaG93Tm9uQ3VycmVudERhdGVzJykpIHtcbiAgICAgIGFjdGl2ZVVuem9uZWRSYW5nZSA9IGFjdGl2ZVVuem9uZWRSYW5nZS5pbnRlcnNlY3QoY3VycmVudEluZm8udW56b25lZFJhbmdlKVxuICAgIH1cblxuICAgIG1pblRpbWUgPSBtb21lbnQuZHVyYXRpb24odGhpcy5vcHQoJ21pblRpbWUnKSlcbiAgICBtYXhUaW1lID0gbW9tZW50LmR1cmF0aW9uKHRoaXMub3B0KCdtYXhUaW1lJykpXG4gICAgYWN0aXZlVW56b25lZFJhbmdlID0gdGhpcy5hZGp1c3RBY3RpdmVSYW5nZShhY3RpdmVVbnpvbmVkUmFuZ2UsIG1pblRpbWUsIG1heFRpbWUpXG4gICAgYWN0aXZlVW56b25lZFJhbmdlID0gYWN0aXZlVW56b25lZFJhbmdlLmludGVyc2VjdCh2YWxpZFVuem9uZWRSYW5nZSkgLy8gbWlnaHQgcmV0dXJuIG51bGxcblxuICAgIGlmIChhY3RpdmVVbnpvbmVkUmFuZ2UpIHtcbiAgICAgIGRhdGUgPSB0aGlzLm1zVG9VdGNNb21lbnQoXG4gICAgICAgIGFjdGl2ZVVuem9uZWRSYW5nZS5jb25zdHJhaW5EYXRlKGRhdGUpLCAvLyByZXR1cm5zIE1TXG4gICAgICAgIGlzRGF0ZUFsbERheVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIGl0J3MgaW52YWxpZCBpZiB0aGUgb3JpZ2luYWxseSByZXF1ZXN0ZWQgZGF0ZSBpcyBub3QgY29udGFpbmVkLFxuICAgIC8vIG9yIGlmIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IG91dHNpZGUgb2YgdGhlIHZhbGlkIHJhbmdlLlxuICAgIGlzVmFsaWQgPSBjdXJyZW50SW5mby51bnpvbmVkUmFuZ2UuaW50ZXJzZWN0c1dpdGgodmFsaWRVbnpvbmVkUmFuZ2UpXG5cbiAgICByZXR1cm4ge1xuICAgICAgLy8gY29uc3RyYWludCBmb3Igd2hlcmUgcHJldi9uZXh0IG9wZXJhdGlvbnMgY2FuIGdvIGFuZCB3aGVyZSBldmVudHMgY2FuIGJlIGRyYWdnZWQvcmVzaXplZCB0by5cbiAgICAgIC8vIGFuIG9iamVjdCB3aXRoIG9wdGlvbmFsIHN0YXJ0IGFuZCBlbmQgcHJvcGVydGllcy5cbiAgICAgIHZhbGlkVW56b25lZFJhbmdlOiB2YWxpZFVuem9uZWRSYW5nZSxcblxuICAgICAgLy8gcmFuZ2UgdGhlIHZpZXcgaXMgZm9ybWFsbHkgcmVzcG9uc2libGUgZm9yLlxuICAgICAgLy8gZm9yIGV4YW1wbGUsIGEgbW9udGggdmlldyBtaWdodCBoYXZlIDFzdC0zMXN0LCBleGNsdWRpbmcgcGFkZGVkIGRhdGVzXG4gICAgICBjdXJyZW50VW56b25lZFJhbmdlOiBjdXJyZW50SW5mby51bnpvbmVkUmFuZ2UsXG5cbiAgICAgIC8vIG5hbWUgb2YgbGFyZ2VzdCB1bml0IGJlaW5nIGRpc3BsYXllZCwgbGlrZSBcIm1vbnRoXCIgb3IgXCJ3ZWVrXCJcbiAgICAgIGN1cnJlbnRSYW5nZVVuaXQ6IGN1cnJlbnRJbmZvLnVuaXQsXG5cbiAgICAgIGlzUmFuZ2VBbGxEYXk6IGlzUmFuZ2VBbGxEYXksXG5cbiAgICAgIC8vIGRhdGVzIHRoYXQgZGlzcGxheSBldmVudHMgYW5kIGFjY2VwdCBkcmFnLW4tZHJvcFxuICAgICAgLy8gd2lsbCBiZSBgbnVsbGAgaWYgbm8gZGF0ZXMgYWNjZXB0IGV2ZW50c1xuICAgICAgYWN0aXZlVW56b25lZFJhbmdlOiBhY3RpdmVVbnpvbmVkUmFuZ2UsXG5cbiAgICAgIC8vIGRhdGUgcmFuZ2Ugd2l0aCBhIHJlbmRlcmVkIHNrZWxldG9uXG4gICAgICAvLyBpbmNsdWRlcyBub3QtYWN0aXZlIGRheXMgdGhhdCBuZWVkIHNvbWUgc29ydCBvZiBET01cbiAgICAgIHJlbmRlclVuem9uZWRSYW5nZTogcmVuZGVyVW56b25lZFJhbmdlLFxuXG4gICAgICAvLyBEdXJhdGlvbiBvYmplY3QgdGhhdCBkZW5vdGVzIHRoZSBmaXJzdCB2aXNpYmxlIHRpbWUgb2YgYW55IGdpdmVuIGRheVxuICAgICAgbWluVGltZTogbWluVGltZSxcblxuICAgICAgLy8gRHVyYXRpb24gb2JqZWN0IHRoYXQgZGVub3RlcyB0aGUgZXhjbHVzaXZlIHZpc2libGUgZW5kIHRpbWUgb2YgYW55IGdpdmVuIGRheVxuICAgICAgbWF4VGltZTogbWF4VGltZSxcblxuICAgICAgaXNWYWxpZDogaXNWYWxpZCxcblxuICAgICAgZGF0ZTogZGF0ZSxcblxuICAgICAgLy8gaG93IGZhciB0aGUgY3VycmVudCBkYXRlIHdpbGwgbW92ZSBmb3IgYSBwcmV2L25leHQgb3BlcmF0aW9uXG4gICAgICBkYXRlSW5jcmVtZW50OiB0aGlzLmJ1aWxkRGF0ZUluY3JlbWVudChjdXJyZW50SW5mby5kdXJhdGlvbilcbiAgICAgICAgLy8gcGFzcyBhIGZhbGxiYWNrIChtaWdodCBiZSBudWxsKSBeXG4gICAgfVxuICB9XG5cblxuICAvLyBCdWlsZHMgYW4gb2JqZWN0IHdpdGggb3B0aW9uYWwgc3RhcnQvZW5kIHByb3BlcnRpZXMuXG4gIC8vIEluZGljYXRlcyB0aGUgbWluaW11bS9tYXhpbXVtIGRhdGVzIHRvIGRpc3BsYXkuXG4gIC8vIG5vdCByZXNwb25zaWJsZSBmb3IgdHJpbW1pbmcgaGlkZGVuIGRheXMuXG4gIGJ1aWxkVmFsaWRSYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlldy5nZXRVbnpvbmVkUmFuZ2VPcHRpb24oJ3ZhbGlkUmFuZ2UnLCB0aGlzLl92aWV3LmNhbGVuZGFyLmdldE5vdygpKSB8fFxuICAgICAgbmV3IFVuem9uZWRSYW5nZSgpIC8vIGNvbXBsZXRlbHkgb3Blbi1lbmRlZFxuICB9XG5cblxuICAvLyBCdWlsZHMgYSBzdHJ1Y3R1cmUgd2l0aCBpbmZvIGFib3V0IHRoZSBcImN1cnJlbnRcIiByYW5nZSwgdGhlIHJhbmdlIHRoYXQgaXNcbiAgLy8gaGlnaGxpZ2h0ZWQgYXMgYmVpbmcgdGhlIGN1cnJlbnQgbW9udGggZm9yIGV4YW1wbGUuXG4gIC8vIFNlZSBidWlsZCgpIGZvciBhIGRlc2NyaXB0aW9uIG9mIGBkaXJlY3Rpb25gLlxuICAvLyBHdWFyYW50ZWVkIHRvIGhhdmUgYHJhbmdlYCBhbmQgYHVuaXRgIHByb3BlcnRpZXMuIGBkdXJhdGlvbmAgaXMgb3B0aW9uYWwuXG4gIC8vIFRPRE86IGFjY2VwdCBhIE1TLXRpbWUgaW5zdGVhZCBvZiBhIG1vbWVudCBgZGF0ZWA/XG4gIGJ1aWxkQ3VycmVudFJhbmdlSW5mbyhkYXRlLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgdmlld1NwZWMgPSB0aGlzLl92aWV3LnZpZXdTcGVjXG4gICAgbGV0IGR1cmF0aW9uID0gbnVsbFxuICAgIGxldCB1bml0ID0gbnVsbFxuICAgIGxldCB1bnpvbmVkUmFuZ2UgPSBudWxsXG4gICAgbGV0IGRheUNvdW50XG5cbiAgICBpZiAodmlld1NwZWMuZHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gdmlld1NwZWMuZHVyYXRpb25cbiAgICAgIHVuaXQgPSB2aWV3U3BlYy5kdXJhdGlvblVuaXRcbiAgICAgIHVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRSYW5nZUZyb21EdXJhdGlvbihkYXRlLCBkaXJlY3Rpb24sIGR1cmF0aW9uLCB1bml0KVxuICAgIH0gZWxzZSBpZiAoKGRheUNvdW50ID0gdGhpcy5vcHQoJ2RheUNvdW50JykpKSB7XG4gICAgICB1bml0ID0gJ2RheSdcbiAgICAgIHVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRSYW5nZUZyb21EYXlDb3VudChkYXRlLCBkaXJlY3Rpb24sIGRheUNvdW50KVxuICAgIH0gZWxzZSBpZiAoKHVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRDdXN0b21WaXNpYmxlUmFuZ2UoZGF0ZSkpKSB7XG4gICAgICB1bml0ID0gY29tcHV0ZUdyZWF0ZXN0VW5pdCh1bnpvbmVkUmFuZ2UuZ2V0U3RhcnQoKSwgdW56b25lZFJhbmdlLmdldEVuZCgpKVxuICAgIH0gZWxzZSB7XG4gICAgICBkdXJhdGlvbiA9IHRoaXMuZ2V0RmFsbGJhY2tEdXJhdGlvbigpXG4gICAgICB1bml0ID0gY29tcHV0ZUdyZWF0ZXN0VW5pdChkdXJhdGlvbilcbiAgICAgIHVuem9uZWRSYW5nZSA9IHRoaXMuYnVpbGRSYW5nZUZyb21EdXJhdGlvbihkYXRlLCBkaXJlY3Rpb24sIGR1cmF0aW9uLCB1bml0KVxuICAgIH1cblxuICAgIHJldHVybiB7IGR1cmF0aW9uOiBkdXJhdGlvbiwgdW5pdDogdW5pdCwgdW56b25lZFJhbmdlOiB1bnpvbmVkUmFuZ2UgfVxuICB9XG5cblxuICBnZXRGYWxsYmFja0R1cmF0aW9uKCkge1xuICAgIHJldHVybiBtb21lbnQuZHVyYXRpb24oeyBkYXlzOiAxIH0pXG4gIH1cblxuXG4gIC8vIFJldHVybnMgYSBuZXcgYWN0aXZlVW56b25lZFJhbmdlIHRvIGhhdmUgdGltZSB2YWx1ZXMgKHVuLWFtYmlndWF0ZSlcbiAgLy8gbWluVGltZSBvciBtYXhUaW1lIGNhdXNlcyB0aGUgcmFuZ2UgdG8gZXhwYW5kLlxuICBhZGp1c3RBY3RpdmVSYW5nZSh1bnpvbmVkUmFuZ2UsIG1pblRpbWUsIG1heFRpbWUpIHtcbiAgICBsZXQgc3RhcnQgPSB1bnpvbmVkUmFuZ2UuZ2V0U3RhcnQoKVxuICAgIGxldCBlbmQgPSB1bnpvbmVkUmFuZ2UuZ2V0RW5kKClcblxuICAgIGlmICh0aGlzLl92aWV3LnVzZXNNaW5NYXhUaW1lKSB7XG5cbiAgICAgIGlmIChtaW5UaW1lIDwgMCkge1xuICAgICAgICBzdGFydC50aW1lKDApLmFkZChtaW5UaW1lKVxuICAgICAgfVxuXG4gICAgICBpZiAobWF4VGltZSA+IDI0ICogNjAgKiA2MCAqIDEwMDApIHsgLy8gYmV5b25kIDI0IGhvdXJzP1xuICAgICAgICBlbmQudGltZShtYXhUaW1lIC0gKDI0ICogNjAgKiA2MCAqIDEwMDApKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgVW56b25lZFJhbmdlKHN0YXJ0LCBlbmQpXG4gIH1cblxuXG4gIC8vIEJ1aWxkcyB0aGUgXCJjdXJyZW50XCIgcmFuZ2Ugd2hlbiBpdCBpcyBzcGVjaWZpZWQgYXMgYW4gZXhwbGljaXQgZHVyYXRpb24uXG4gIC8vIGB1bml0YCBpcyB0aGUgYWxyZWFkeS1jb21wdXRlZCBjb21wdXRlR3JlYXRlc3RVbml0IHZhbHVlIG9mIGR1cmF0aW9uLlxuICAvLyBUT0RPOiBhY2NlcHQgYSBNUy10aW1lIGluc3RlYWQgb2YgYSBtb21lbnQgYGRhdGVgP1xuICBidWlsZFJhbmdlRnJvbUR1cmF0aW9uKGRhdGUsIGRpcmVjdGlvbiwgZHVyYXRpb24sIHVuaXQpIHtcbiAgICBsZXQgYWxpZ25tZW50ID0gdGhpcy5vcHQoJ2RhdGVBbGlnbm1lbnQnKVxuICAgIGxldCBkYXRlSW5jcmVtZW50SW5wdXRcbiAgICBsZXQgZGF0ZUluY3JlbWVudER1cmF0aW9uXG4gICAgbGV0IHN0YXJ0XG4gICAgbGV0IGVuZFxuICAgIGxldCByZXNcblxuICAgIC8vIGNvbXB1dGUgd2hhdCB0aGUgYWxpZ25tZW50IHNob3VsZCBiZVxuICAgIGlmICghYWxpZ25tZW50KSB7XG4gICAgICBkYXRlSW5jcmVtZW50SW5wdXQgPSB0aGlzLm9wdCgnZGF0ZUluY3JlbWVudCcpXG5cbiAgICAgIGlmIChkYXRlSW5jcmVtZW50SW5wdXQpIHtcbiAgICAgICAgZGF0ZUluY3JlbWVudER1cmF0aW9uID0gbW9tZW50LmR1cmF0aW9uKGRhdGVJbmNyZW1lbnRJbnB1dClcblxuICAgICAgICAvLyB1c2UgdGhlIHNtYWxsZXIgb2YgdGhlIHR3byB1bml0c1xuICAgICAgICBpZiAoZGF0ZUluY3JlbWVudER1cmF0aW9uIDwgZHVyYXRpb24pIHtcbiAgICAgICAgICBhbGlnbm1lbnQgPSBjb21wdXRlRHVyYXRpb25HcmVhdGVzdFVuaXQoZGF0ZUluY3JlbWVudER1cmF0aW9uLCBkYXRlSW5jcmVtZW50SW5wdXQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxpZ25tZW50ID0gdW5pdFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbm1lbnQgPSB1bml0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIHZpZXcgZGlzcGxheXMgYSBzaW5nbGUgZGF5IG9yIHNtYWxsZXJcbiAgICBpZiAoZHVyYXRpb24uYXMoJ2RheXMnKSA8PSAxKSB7XG4gICAgICBpZiAodGhpcy5fdmlldy5pc0hpZGRlbkRheShzdGFydCkpIHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLl92aWV3LnNraXBIaWRkZW5EYXlzKHN0YXJ0LCBkaXJlY3Rpb24pXG4gICAgICAgIHN0YXJ0LnN0YXJ0T2YoJ2RheScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZVJlcygpIHtcbiAgICAgIHN0YXJ0ID0gZGF0ZS5jbG9uZSgpLnN0YXJ0T2YoYWxpZ25tZW50KVxuICAgICAgZW5kID0gc3RhcnQuY2xvbmUoKS5hZGQoZHVyYXRpb24pXG4gICAgICByZXMgPSBuZXcgVW56b25lZFJhbmdlKHN0YXJ0LCBlbmQpXG4gICAgfVxuXG4gICAgY29tcHV0ZVJlcygpXG5cbiAgICAvLyBpZiByYW5nZSBpcyBjb21wbGV0ZWx5IGVudmVsb3BlZCBieSBoaWRkZW4gZGF5cywgZ28gcGFzdCB0aGUgaGlkZGVuIGRheXNcbiAgICBpZiAoIXRoaXMudHJpbUhpZGRlbkRheXMocmVzKSkge1xuICAgICAgZGF0ZSA9IHRoaXMuX3ZpZXcuc2tpcEhpZGRlbkRheXMoZGF0ZSwgZGlyZWN0aW9uKVxuICAgICAgY29tcHV0ZVJlcygpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc1xuICB9XG5cblxuICAvLyBCdWlsZHMgdGhlIFwiY3VycmVudFwiIHJhbmdlIHdoZW4gYSBkYXlDb3VudCBpcyBzcGVjaWZpZWQuXG4gIC8vIFRPRE86IGFjY2VwdCBhIE1TLXRpbWUgaW5zdGVhZCBvZiBhIG1vbWVudCBgZGF0ZWA/XG4gIGJ1aWxkUmFuZ2VGcm9tRGF5Q291bnQoZGF0ZSwgZGlyZWN0aW9uLCBkYXlDb3VudCkge1xuICAgIGxldCBjdXN0b21BbGlnbm1lbnQgPSB0aGlzLm9wdCgnZGF0ZUFsaWdubWVudCcpXG4gICAgbGV0IHJ1bm5pbmdDb3VudCA9IDBcbiAgICBsZXQgc3RhcnRcbiAgICBsZXQgZW5kXG5cbiAgICBpZiAoY3VzdG9tQWxpZ25tZW50IHx8IGRpcmVjdGlvbiAhPT0gLTEpIHtcblxuICAgICAgc3RhcnQgPSBkYXRlLmNsb25lKClcblxuICAgICAgaWYgKGN1c3RvbUFsaWdubWVudCkge1xuICAgICAgICBzdGFydC5zdGFydE9mKGN1c3RvbUFsaWdubWVudClcbiAgICAgIH1cblxuICAgICAgc3RhcnQuc3RhcnRPZignZGF5JylcbiAgICAgIHN0YXJ0ID0gdGhpcy5fdmlldy5za2lwSGlkZGVuRGF5cyhzdGFydClcblxuICAgICAgZW5kID0gc3RhcnQuY2xvbmUoKVxuICAgICAgZG8ge1xuICAgICAgICBlbmQuYWRkKDEsICdkYXknKVxuICAgICAgICBpZiAoIXRoaXMuX3ZpZXcuaXNIaWRkZW5EYXkoZW5kKSkge1xuICAgICAgICAgIHJ1bm5pbmdDb3VudCsrXG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKHJ1bm5pbmdDb3VudCA8IGRheUNvdW50KVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgZW5kID0gZGF0ZS5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLmFkZCgxLCAnZGF5JylcbiAgICAgIGVuZCA9IHRoaXMuX3ZpZXcuc2tpcEhpZGRlbkRheXMoZW5kLCAtMSwgdHJ1ZSlcblxuICAgICAgc3RhcnQgPSBlbmQuY2xvbmUoKVxuICAgICAgZG8ge1xuICAgICAgICBzdGFydC5hZGQoLTEsICdkYXknKVxuICAgICAgICBpZiAoIXRoaXMuX3ZpZXcuaXNIaWRkZW5EYXkoc3RhcnQpKSB7XG4gICAgICAgICAgcnVubmluZ0NvdW50KytcbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAocnVubmluZ0NvdW50IDwgZGF5Q291bnQpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFVuem9uZWRSYW5nZShzdGFydCwgZW5kKVxuICB9XG5cblxuICAvLyBCdWlsZHMgYSBub3JtYWxpemVkIHJhbmdlIG9iamVjdCBmb3IgdGhlIFwidmlzaWJsZVwiIHJhbmdlLFxuICAvLyB3aGljaCBpcyBhIHdheSB0byBkZWZpbmUgdGhlIGN1cnJlbnRVbnpvbmVkUmFuZ2UgYW5kIGFjdGl2ZVVuem9uZWRSYW5nZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAvLyBUT0RPOiBhY2NlcHQgYSBNUy10aW1lIGluc3RlYWQgb2YgYSBtb21lbnQgYGRhdGVgP1xuICBidWlsZEN1c3RvbVZpc2libGVSYW5nZShkYXRlKSB7XG4gICAgbGV0IHZpc2libGVVbnpvbmVkUmFuZ2UgPSB0aGlzLl92aWV3LmdldFVuem9uZWRSYW5nZU9wdGlvbihcbiAgICAgICd2aXNpYmxlUmFuZ2UnLFxuICAgICAgdGhpcy5fdmlldy5jYWxlbmRhci5hcHBseVRpbWV6b25lKGRhdGUpIC8vIGNvcnJlY3Qgem9uZS4gYWxzbyBnZW5lcmF0ZXMgbmV3IG9iaiB0aGF0IGF2b2lkcyBtdXRhdGlvbnNcbiAgICApXG5cbiAgICBpZiAodmlzaWJsZVVuem9uZWRSYW5nZSAmJiAodmlzaWJsZVVuem9uZWRSYW5nZS5zdGFydE1zID09IG51bGwgfHwgdmlzaWJsZVVuem9uZWRSYW5nZS5lbmRNcyA9PSBudWxsKSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaWJsZVVuem9uZWRSYW5nZVxuICB9XG5cblxuICAvLyBDb21wdXRlcyB0aGUgcmFuZ2UgdGhhdCB3aWxsIHJlcHJlc2VudCB0aGUgZWxlbWVudC9jZWxscyBmb3IgKnJlbmRlcmluZyosXG4gIC8vIGJ1dCB3aGljaCBtYXkgaGF2ZSB2b2lkZWQgZGF5cy90aW1lcy5cbiAgLy8gbm90IHJlc3BvbnNpYmxlIGZvciB0cmltbWluZyBoaWRkZW4gZGF5cy5cbiAgYnVpbGRSZW5kZXJSYW5nZShjdXJyZW50VW56b25lZFJhbmdlLCBjdXJyZW50UmFuZ2VVbml0LCBpc1JhbmdlQWxsRGF5KSB7XG4gICAgcmV0dXJuIGN1cnJlbnRVbnpvbmVkUmFuZ2UuY2xvbmUoKVxuICB9XG5cblxuICAvLyBDb21wdXRlIHRoZSBkdXJhdGlvbiB2YWx1ZSB0aGF0IHNob3VsZCBiZSBhZGRlZC9zdWJzdHJhY3RlZCB0byB0aGUgY3VycmVudCBkYXRlXG4gIC8vIHdoZW4gYSBwcmV2L25leHQgb3BlcmF0aW9uIGhhcHBlbnMuXG4gIGJ1aWxkRGF0ZUluY3JlbWVudChmYWxsYmFjaykge1xuICAgIGxldCBkYXRlSW5jcmVtZW50SW5wdXQgPSB0aGlzLm9wdCgnZGF0ZUluY3JlbWVudCcpXG4gICAgbGV0IGN1c3RvbUFsaWdubWVudFxuXG4gICAgaWYgKGRhdGVJbmNyZW1lbnRJbnB1dCkge1xuICAgICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbihkYXRlSW5jcmVtZW50SW5wdXQpXG4gICAgfSBlbHNlIGlmICgoY3VzdG9tQWxpZ25tZW50ID0gdGhpcy5vcHQoJ2RhdGVBbGlnbm1lbnQnKSkpIHtcbiAgICAgIHJldHVybiBtb21lbnQuZHVyYXRpb24oMSwgY3VzdG9tQWxpZ25tZW50KVxuICAgIH0gZWxzZSBpZiAoZmFsbGJhY2spIHtcbiAgICAgIHJldHVybiBmYWxsYmFja1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKHsgZGF5czogMSB9KVxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGF0ZVByb2ZpbGVHZW5lcmF0b3IudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==