/*!
FullCalendar Year View Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/

import { DateProfileGenerator, createElement, listenBySelector, removeElement, computeRect, computeClippingRect, applyStyle, computeEventDraggable, computeEventStartResizable, computeEventEndResizable, cssToStr, htmlEscape, FgEventRenderer, appendToElement, prependToElement, htmlToElement, FillRenderer, memoizeRendering, createFormatter, addDays, DateComponent, rangeContainsMarker, getDayClasses, findElements, PositionCache, buildGotoAnchorHtml, findChildren, insertAfterElement, intersectRanges, memoize, ScrollComponent, matchCellWidths, uncompensateScroll, compensateScroll, subtractInnerElHeight, distributeHeight, undistributeHeight, View, Slicer, DayHeader, DaySeries, createPlugin } from '@fullcalendar/core';
import moment from 'moment';

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var YearTable =  (function () {
    function YearTable(daySeries, breakOnWeeks) {
        this.daySeries = daySeries;
        this.cells = this.buildCells();
        this.headerDates = this.buildHeaderDates();
    }
    YearTable.prototype.buildCells = function () {
        var rows = [];
        var cells = [];
        for (var i = 0; i < this.daySeries.dates.length; i++) {
            cells.push({ date: this.daySeries.dates[i] });
            if (this.daySeries.dates.length === (i + 1) || this.daySeries.dates[i + 1].getDate() === 1) {
                for (var padding = this.daySeries.dates[i].getDate(); padding < 31; padding++) {
                    cells.push({
                        date: null
                    });
                }
                rows.push(cells);
                cells = [];
            }
        }
        return rows;
    };
    YearTable.prototype.buildHeaderDates = function () {
        return [];
    };
    YearTable.prototype.sliceRange = function (range) {
        var segs = [];
        var firstMonthStart = moment(range.start).startOf('month');
        var currentMonthStart = moment(range.start).startOf('month');
        var currentMonthEnd = moment(range.start).endOf('month');
        var lastMonthStart = moment(range.end).startOf('month');
        if (lastMonthStart.year() > currentMonthStart.year()) {
            lastMonthStart = currentMonthStart.clone().month(11).startOf('month');
        }
        while (currentMonthStart.isSameOrBefore(lastMonthStart)) {
            segs.push({
                row: currentMonthStart.month(),
                firstCol: (currentMonthStart.isAfter(range.start)) ? 0 : range.start.getDate() - 1,
                lastCol: (currentMonthEnd.isBefore(range.end)) ? currentMonthEnd.date() - 1 : range.end.getDate() - 1,
                isStart: currentMonthStart.isSame(firstMonthStart),
                isEnd: currentMonthStart.isSame(lastMonthStart)
            });
            currentMonthStart.add(1, 'months');
            currentMonthEnd = currentMonthStart.clone().endOf('month');
        }
        return segs;
    };
    YearTable.prototype.buildCell = function (row, cnt) {
    };
    return YearTable;
}());

var YearGridDateProfileGenerator =  (function (_super) {
    __extends(YearGridDateProfileGenerator, _super);
    function YearGridDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YearGridDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
        var start = renderRange.start;
        var end = renderRange.end;
        return { start: start, end: end };
    };
    return YearGridDateProfileGenerator;
}(DateProfileGenerator));

var Popover =  (function () {
    function Popover(options) {
        var _this = this;
        this.isHidden = true;
        this.margin = 10;
        this.documentMousedown = function (ev) {
            if (_this.el && !_this.el.contains(ev.target)) {
                _this.hide();
            }
        };
        this.options = options;
    }
    Popover.prototype.show = function () {
        if (this.isHidden) {
            if (!this.el) {
                this.render();
            }
            this.el.style.display = '';
            this.position();
            this.isHidden = false;
            this.trigger('show');
        }
    };
    Popover.prototype.hide = function () {
        if (!this.isHidden) {
            this.el.style.display = 'none';
            this.isHidden = true;
            this.trigger('hide');
        }
    };
    Popover.prototype.render = function () {
        var _this = this;
        var options = this.options;
        var el = this.el = createElement('div', {
            className: 'fc-popover ' + (options.className || ''),
            style: {
                top: '0',
                left: '0'
            }
        });
        if (typeof options.content === 'function') {
            options.content(el);
        }
        options.parentEl.appendChild(el);
        listenBySelector(el, 'click', '.fc-close', function (ev) {
            _this.hide();
        });
        if (options.autoHide) {
            document.addEventListener('mousedown', this.documentMousedown);
        }
    };
    Popover.prototype.destroy = function () {
        this.hide();
        if (this.el) {
            removeElement(this.el);
            this.el = null;
        }
        document.removeEventListener('mousedown', this.documentMousedown);
    };
    Popover.prototype.position = function () {
        var options = this.options;
        var el = this.el;
        var elDims = el.getBoundingClientRect();
        var origin = computeRect(el.offsetParent);
        var clippingRect = computeClippingRect(options.parentEl);
        var top;
        var left;
        top = options.top || 0;
        if (options.left !== undefined) {
            left = options.left;
        }
        else if (options.right !== undefined) {
            left = options.right - elDims.width;
        }
        else {
            left = 0;
        }
        top = Math.min(top, clippingRect.bottom - elDims.height - this.margin);
        top = Math.max(top, clippingRect.top + this.margin);
        left = Math.min(left, clippingRect.right - elDims.width - this.margin);
        left = Math.max(left, clippingRect.left + this.margin);
        applyStyle(el, {
            top: top - origin.top,
            left: left - origin.left
        });
    };
    Popover.prototype.trigger = function (name) {
        if (this.options[name]) {
            this.options[name].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };
    return Popover;
}());

var SimpleYearGridEventRenderer =  (function (_super) {
    __extends(SimpleYearGridEventRenderer, _super);
    function SimpleYearGridEventRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleYearGridEventRenderer.prototype.renderSegHtml = function (seg, mirrorInfo) {
        var context = this.context;
        var eventRange = seg.eventRange;
        var eventDef = eventRange.def;
        var eventUi = eventRange.ui;
        var allDay = eventDef.allDay;
        var isDraggable = computeEventDraggable(context, eventDef, eventUi);
        var isResizableFromStart = allDay && seg.isStart && computeEventStartResizable(context, eventDef, eventUi);
        var isResizableFromEnd = allDay && seg.isEnd && computeEventEndResizable(context, eventDef, eventUi);
        var classes = this.getSegClasses(seg, isDraggable, isResizableFromStart || isResizableFromEnd, mirrorInfo);
        var skinCss = cssToStr(this.getSkinCss(eventUi));
        var timeHtml = '';
        var timeText;
        var titleHtml;
        classes.unshift('fc-day-grid-event', 'fc-h-event');
        if (seg.isStart) {
            timeText = this.getTimeText(eventRange);
            if (timeText) {
                timeHtml = '<span class="fc-time">' + htmlEscape(timeText) + '</span>';
            }
        }
        titleHtml =
            '<span class="fc-title">' +
                (htmlEscape(eventDef.title || '') || '&nbsp;') +
                '</span>';
        return '<a class="' + classes.join(' ') + '"' +
            (eventDef.url ?
                ' href="' + htmlEscape(eventDef.url) + '"' :
                '') +
            (skinCss ?
                ' style="' + skinCss + '"' :
                '') +
            '>' +
            '<div class="fc-content">' +
            (context.options.dir === 'rtl' ?
                titleHtml + ' ' + timeHtml :
                timeHtml + ' ' + titleHtml
            ) +
            '</div>' +
            (isResizableFromStart ?
                '<div class="fc-resizer fc-start-resizer"></div>' :
                '') +
            (isResizableFromEnd ?
                '<div class="fc-resizer fc-end-resizer"></div>' :
                '') +
            '</a>';
    };
    SimpleYearGridEventRenderer.prototype.computeEventTimeFormat = function () {
        return {
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: true,
            meridiem: 'narrow'
        };
    };
    SimpleYearGridEventRenderer.prototype.computeDisplayEventEnd = function () {
        return false;
    };
    return SimpleYearGridEventRenderer;
}(FgEventRenderer));

var YearEventRenderer =  (function (_super) {
    __extends(YearEventRenderer, _super);
    function YearEventRenderer(dayGrid) {
        var _this = _super.call(this) || this;
        _this.dayGrid = dayGrid;
        return _this;
    }
    YearEventRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        this.dayGrid.rowEls.forEach(function (rowNode, i) {
            rowNode.querySelector('.fc-content-skeleton > table').appendChild(rowStructs[i].tbodyEl);
        });
        if (!mirrorInfo) {
            this.dayGrid.removeSegPopover();
        }
    };
    YearEventRenderer.prototype.detachSegs = function () {
        var rowStructs = this.rowStructs || [];
        var rowStruct;
        while ((rowStruct = rowStructs.pop())) {
            removeElement(rowStruct.tbodyEl);
        }
        this.rowStructs = null;
    };
    YearEventRenderer.prototype.renderSegRows = function (segs) {
        var rowStructs = [];
        var segRows;
        var row;
        segRows = this.groupSegRows(segs);
        for (row = 0; row < segRows.length; row++) {
            rowStructs.push(this.renderSegRow(row, segRows[row]));
        }
        return rowStructs;
    };
    YearEventRenderer.prototype.renderSegRow = function (row, rowSegs) {
        var isRtl = this.context.isRtl;
        var dayGrid = this.dayGrid;
        var colCnt = dayGrid.colCnt;
        var segLevels = this.buildSegLevels(rowSegs);
        var levelCnt = Math.max(1, segLevels.length);
        var tbody = document.createElement('tbody');
        var segMatrix = [];
        var cellMatrix = [];
        var loneCellMatrix = [];
        var i;
        var levelSegs;
        var col;
        var tr;
        var j;
        var seg;
        var td;
        function emptyCellsUntil(endCol) {
            while (col < endCol) {
                td = (loneCellMatrix[i - 1] || [])[col];
                if (td) {
                    td.rowSpan = (td.rowSpan || 1) + 1;
                }
                else {
                    td = document.createElement('td');
                    tr.appendChild(td);
                }
                cellMatrix[i][col] = td;
                loneCellMatrix[i][col] = td;
                col++;
            }
        }
        for (i = 0; i < levelCnt; i++) {
            levelSegs = segLevels[i];
            col = 0;
            tr = document.createElement('tr');
            segMatrix.push([]);
            cellMatrix.push([]);
            loneCellMatrix.push([]);
            if (levelSegs) {
                for (j = 0; j < levelSegs.length; j++) {
                    seg = levelSegs[j];
                    var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                    var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                    emptyCellsUntil(leftCol);
                    td = createElement('td', { className: 'fc-event-container' }, seg.el);
                    if (leftCol !== rightCol) {
                        td.colSpan = rightCol - leftCol + 1;
                    }
                    else {
                        loneCellMatrix[i][col] = td;
                    }
                    while (col <= rightCol) {
                        cellMatrix[i][col] = td;
                        segMatrix[i][col] = seg;
                        col++;
                    }
                    tr.appendChild(td);
                }
            }
            emptyCellsUntil(colCnt);
            var introHtml = dayGrid.renderProps.renderIntroHtml();
            if (introHtml) {
                if (isRtl) {
                    appendToElement(tr, introHtml);
                }
                else {
                    prependToElement(tr, introHtml);
                }
            }
            tbody.appendChild(tr);
        }
        return {
            row: row,
            tbodyEl: tbody,
            cellMatrix: cellMatrix,
            segMatrix: segMatrix,
            segLevels: segLevels,
            segs: rowSegs
        };
    };
    YearEventRenderer.prototype.buildSegLevels = function (segs) {
        var isRtl = this.context.isRtl;
        var colCnt = this.dayGrid.colCnt;
        var levels = [];
        var i;
        var seg;
        var j;
        segs = this.sortEventSegs(segs);
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            for (j = 0; j < levels.length; j++) {
                if (!isDaySegCollision(seg, levels[j])) {
                    break;
                }
            }
            seg.level = j;
            seg.leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
            seg.rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol
            ;
            (levels[j] || (levels[j] = [])).push(seg);
        }
        for (j = 0; j < levels.length; j++) {
            levels[j].sort(compareDaySegCols);
        }
        return levels;
    };
    YearEventRenderer.prototype.groupSegRows = function (segs) {
        var segRows = [];
        var i;
        for (i = 0; i < this.dayGrid.rowCnt; i++) {
            segRows.push([]);
        }
        for (i = 0; i < segs.length; i++) {
            segRows[segs[i].row].push(segs[i]);
        }
        return segRows;
    };
    YearEventRenderer.prototype.computeDisplayEventEnd = function () {
        return this.dayGrid.colCnt === 1;
    };
    return YearEventRenderer;
}(SimpleYearGridEventRenderer));
function isDaySegCollision(seg, otherSegs) {
    var i;
    var otherSeg;
    for (i = 0; i < otherSegs.length; i++) {
        otherSeg = otherSegs[i];
        if (otherSeg.firstCol <= seg.lastCol &&
            otherSeg.lastCol >= seg.firstCol) {
            return true;
        }
    }
    return false;
}
function compareDaySegCols(a, b) {
    return a.leftCol - b.leftCol;
}

var YearGridMirrorRenderer =  (function (_super) {
    __extends(YearGridMirrorRenderer, _super);
    function YearGridMirrorRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YearGridMirrorRenderer.prototype.attachSegs = function (segs, mirrorInfo) {
        var sourceSeg = mirrorInfo.sourceSeg;
        var rowStructs = this.rowStructs = this.renderSegRows(segs);
        this.dayGrid.rowEls.forEach(function (rowNode, row) {
            var skeletonEl = htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>');
            var skeletonTopEl;
            var skeletonTop;
            if (sourceSeg && sourceSeg.row === row) {
                skeletonTopEl = sourceSeg.el;
            }
            else {
                skeletonTopEl = rowNode.querySelector('.fc-content-skeleton tbody');
                if (!skeletonTopEl) {
                    skeletonTopEl = rowNode.querySelector('.fc-content-skeleton table');
                }
            }
            skeletonTop = skeletonTopEl.getBoundingClientRect().top -
                rowNode.getBoundingClientRect().top;
            skeletonEl.style.top = skeletonTop + 'px';
            skeletonEl.querySelector('table').appendChild(rowStructs[row].tbodyEl);
            rowNode.appendChild(skeletonEl);
        });
    };
    return YearGridMirrorRenderer;
}(YearEventRenderer));

var EMPTY_CELL_HTML = '<td style="pointer-events:none"></td>';
var YearGridFillRenderer =  (function (_super) {
    __extends(YearGridFillRenderer, _super);
    function YearGridFillRenderer(dayGrid) {
        var _this = _super.call(this) || this;
        _this.fillSegTag = 'td';
        _this.dayGrid = dayGrid;
        return _this;
    }
    YearGridFillRenderer.prototype.renderSegs = function (type, context, segs) {
        if (type === 'bgEvent') {
            segs = segs.filter(function (seg) {
                return seg.eventRange.def.allDay;
            });
        }
        _super.prototype.renderSegs.call(this, type, context, segs);
    };
    YearGridFillRenderer.prototype.attachSegs = function (type, segs) {
        var els = [];
        var i;
        var seg;
        var skeletonEl;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            skeletonEl = this.renderFillRow(type, seg);
            this.dayGrid.rowEls[seg.row].appendChild(skeletonEl);
            els.push(skeletonEl);
        }
        return els;
    };
    YearGridFillRenderer.prototype.renderFillRow = function (type, seg) {
        var dayGrid = this.dayGrid;
        var isRtl = this.context.isRtl;
        var colCnt = dayGrid.colCnt;
        var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
        var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
        var startCol = leftCol;
        var endCol = rightCol + 1;
        var className;
        var skeletonEl;
        var trEl;
        if (type === 'businessHours') {
            className = 'bgevent';
        }
        else {
            className = type.toLowerCase();
        }
        skeletonEl = htmlToElement('<div class="fc-' + className + '-skeleton">' +
            '<table><tr></tr></table>' +
            '</div>');
        trEl = skeletonEl.getElementsByTagName('tr')[0];
        if (startCol > 0) {
            appendToElement(trEl,
            new Array(startCol + 1).join(EMPTY_CELL_HTML));
        }
        seg.el.colSpan = endCol - startCol;
        trEl.appendChild(seg.el);
        if (endCol < colCnt) {
            appendToElement(trEl,
            new Array(colCnt - endCol + 1).join(EMPTY_CELL_HTML));
        }
        var introHtml = dayGrid.renderProps.renderIntroHtml();
        if (introHtml) {
            if (isRtl) {
                appendToElement(trEl, introHtml);
            }
            else {
                prependToElement(trEl, introHtml);
            }
        }
        return skeletonEl;
    };
    return YearGridFillRenderer;
}(FillRenderer));

var YearTile =  (function (_super) {
    __extends(YearTile, _super);
    function YearTile(el) {
        var _this = _super.call(this, el) || this;
        var eventRenderer = _this.eventRenderer = new DayTileEventRenderer(_this);
        var renderFrame = _this.renderFrame = memoizeRendering(_this._renderFrame);
        _this.renderFgEvents = memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderFrame]);
        _this.renderEventSelection = memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = memoizeRendering(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
        _this.renderEventResize = memoizeRendering(eventRenderer.hideByHash.bind(eventRenderer), eventRenderer.showByHash.bind(eventRenderer), [renderFrame]);
        return _this;
    }
    YearTile.prototype.firstContext = function (context) {
        context.calendar.registerInteractiveComponent(this, {
            el: this.el,
            useEventCenter: false
        });
    };
    YearTile.prototype.render = function (props, context) {
        this.renderFrame(props.date);
        this.renderFgEvents(context, props.fgSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDragInstances);
        this.renderEventResize(props.eventResizeInstances);
    };
    YearTile.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderFrame.unrender();
        this.context.calendar.unregisterInteractiveComponent(this);
    };
    YearTile.prototype._renderFrame = function (date) {
        var _a = this.context, theme = _a.theme, dateEnv = _a.dateEnv, options = _a.options;
        var title = dateEnv.format(date, createFormatter(options.dayPopoverFormat)
        );
        this.el.innerHTML =
            '<div class="fc-header ' + theme.getClass('popoverHeader') + '">' +
                '<span class="fc-title">' +
                htmlEscape(title) +
                '</span>' +
                '<span class="fc-close ' + theme.getIconClass('close') + '"></span>' +
                '</div>' +
                '<div class="fc-body ' + theme.getClass('popoverContent') + '">' +
                '<div class="fc-event-container"></div>' +
                '</div>';
        this.segContainerEl = this.el.querySelector('.fc-event-container');
    };
    YearTile.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
        var date = this.props.date;
        if (positionLeft < elWidth && positionTop < elHeight) {
            return {
                component: this,
                dateSpan: {
                    allDay: true,
                    range: { start: date, end: addDays(date, 1) }
                },
                dayEl: this.el,
                rect: {
                    left: 0,
                    top: 0,
                    right: elWidth,
                    bottom: elHeight
                },
                layer: 1
            };
        }
    };
    return YearTile;
}(DateComponent));
var DayTileEventRenderer =  (function (_super) {
    __extends(DayTileEventRenderer, _super);
    function DayTileEventRenderer(dayTile) {
        var _this = _super.call(this) || this;
        _this.dayTile = dayTile;
        return _this;
    }
    DayTileEventRenderer.prototype.attachSegs = function (segs) {
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            this.dayTile.segContainerEl.appendChild(seg.el);
        }
    };
    DayTileEventRenderer.prototype.detachSegs = function (segs) {
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            removeElement(seg.el);
        }
    };
    return DayTileEventRenderer;
}(SimpleYearGridEventRenderer));

var YearDayBgRow =  (function () {
    function YearDayBgRow(context) {
        this.context = context;
    }
    YearDayBgRow.prototype.renderHtml = function (props) {
        var parts = [];
        if (props.renderIntroHtml) {
            parts.push(props.renderIntroHtml());
        }
        for (var _i = 0, _a = props.cells; _i < _a.length; _i++) {
            var cell = _a[_i];
            parts.push(renderCellHtml(cell.date, props.dateProfile, this.context, cell.htmlAttrs));
        }
        if (!props.cells.length) {
            parts.push('<td class="fc-day ' + this.context.theme.getClass('widgetContent') + '"></td>');
        }
        if (this.context.options.dir === 'rtl') {
            parts.reverse();
        }
        return '<tr>' + parts.join('') + '</tr>';
    };
    return YearDayBgRow;
}());
function renderCellHtml(date, dateProfile, context, otherAttrs) {
    var dateEnv = context.dateEnv, theme = context.theme;
    var isDateValid = rangeContainsMarker(dateProfile.activeRange, date);
    var classes = getDayClasses(date, dateProfile, context);
    classes.unshift('fc-day', theme.getClass('widgetContent'));
    return '<td class="' + classes.join(' ') + '"' +
        (isDateValid ?
            ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
            '') +
        (otherAttrs ?
            ' ' + otherAttrs :
            '') +
        '></td>';
}

var DAY_NUM_FORMAT = createFormatter({ day: 'numeric' });
var WEEK_NUM_FORMAT = createFormatter({ week: 'numeric' });
var YearGrid =  (function (_super) {
    __extends(YearGrid, _super);
    function YearGrid(el, renderProps) {
        var _this = _super.call(this, el) || this;
        _this.bottomCoordPadding = 0;
        _this.isCellSizesDirty = false;
        _this.renderProps = renderProps;
        var eventRenderer = _this.eventRenderer = new YearEventRenderer(_this);
        var fillRenderer = _this.fillRenderer = new YearGridFillRenderer(_this);
        _this.mirrorRenderer = new YearGridMirrorRenderer(_this);
        var renderCells = _this.renderCells = memoizeRendering(_this._renderCells, _this._unrenderCells);
        _this.renderBusinessHours = memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'businessHours'), fillRenderer.unrender.bind(fillRenderer, 'businessHours'), [renderCells]);
        _this.renderDateSelection = memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'highlight'), fillRenderer.unrender.bind(fillRenderer, 'highlight'), [renderCells]);
        _this.renderBgEvents = memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer, 'bgEvent'), fillRenderer.unrender.bind(fillRenderer, 'bgEvent'), [renderCells]);
        _this.renderFgEvents = memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer), eventRenderer.unrender.bind(eventRenderer), [renderCells]);
        _this.renderEventSelection = memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer), eventRenderer.unselectByInstanceId.bind(eventRenderer), [_this.renderFgEvents]);
        _this.renderEventDrag = memoizeRendering(_this._renderEventDrag, _this._unrenderEventDrag, [renderCells]);
        _this.renderEventResize = memoizeRendering(_this._renderEventResize, _this._unrenderEventResize, [renderCells]);
        return _this;
    }
    YearGrid.prototype.render = function (props, context) {
        var cells = props.cells;
        this.rowCnt = cells.length;
        this.colCnt = cells[0].length;
        this.renderCells(cells, props.isRigid);
        this.renderBusinessHours(context, props.businessHourSegs);
        this.renderDateSelection(context, props.dateSelectionSegs);
        this.renderBgEvents(context, props.bgEventSegs);
        this.renderFgEvents(context, props.fgEventSegs);
        this.renderEventSelection(props.eventSelection);
        this.renderEventDrag(props.eventDrag);
        this.renderEventResize(props.eventResize);
        if (this.segPopoverTile) {
            this.updateSegPopoverTile();
        }
    };
    YearGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderCells.unrender();
    };
    YearGrid.prototype.getCellRange = function (row, col) {
        var start = this.props.cells[row][col].date;
        var end = addDays(start, 1);
        return { start: start, end: end };
    };
    YearGrid.prototype.updateSegPopoverTile = function (date, segs) {
        var ownProps = this.props;
        this.segPopoverTile.receiveProps({
            date: date || this.segPopoverTile.props.date,
            fgSegs: segs || this.segPopoverTile.props.fgSegs,
            eventSelection: ownProps.eventSelection,
            eventDragInstances: ownProps.eventDrag ? ownProps.eventDrag.affectedInstances : null,
            eventResizeInstances: ownProps.eventResize ? ownProps.eventResize.affectedInstances : null
        }, this.context);
    };
    YearGrid.prototype._renderCells = function (cells, isRigid) {
        var _a = this.context, calendar = _a.calendar, view = _a.view, isRtl = _a.isRtl, dateEnv = _a.dateEnv;
        var _b = this, rowCnt = _b.rowCnt, colCnt = _b.colCnt;
        var html = '';
        var row;
        var col;
        for (row = 0; row < rowCnt; row++) {
            html += this.renderDayRowHtml(row, isRigid);
        }
        this.el.innerHTML = html;
        this.rowEls = findElements(this.el, '.fc-row');
        this.cellEls = findElements(this.el, '.fc-day, .fc-disabled-day');
        if (isRtl) {
            this.cellEls.reverse();
        }
        this.rowPositions = new PositionCache(this.el, this.rowEls, false, true
        );
        this.colPositions = new PositionCache(this.el, this.cellEls.slice(0, colCnt),
        true, false
        );
        for (row = 0; row < rowCnt; row++) {
            for (col = 0; col < colCnt; col++) {
                if (cells[row][col] === undefined) {
                    break;
                }
                if (cells[row][col].date != null) {
                    calendar.publiclyTrigger('dayRender', [
                        {
                            date: dateEnv.toDate(cells[row][col].date),
                            el: this.getCellEl(row, col),
                            view: view
                        }
                    ]);
                }
            }
        }
        this.isCellSizesDirty = true;
    };
    YearGrid.prototype._unrenderCells = function () {
        this.removeSegPopover();
    };
    YearGrid.prototype.renderDayRowHtml = function (row, isRigid) {
        var theme = this.context.theme;
        var classes = ['fc-row', 'fc-week', theme.getClass('dayRow')];
        if (isRigid) {
            classes.push('fc-rigid');
        }
        var bgRow = new YearDayBgRow(this.context);
        return '' +
            '<div class="' + classes.join(' ') + '">' +
            '<div class="fc-row-monthname fc-content">' + moment(this.props.cells[row][0].date).format('MMM') + '</div>' +
            '<div class="fc-bg">' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            bgRow.renderHtml({
                cells: this.props.cells[row],
                dateProfile: this.props.dateProfile,
                renderIntroHtml: this.renderProps.renderBgIntroHtml
            }) +
            '</table>' +
            '</div>' +
            '<div class="fc-content-skeleton">' +
            '<table>' +
            (this.getIsNumbersVisible() ?
                '<thead>' +
                    this.renderNumberTrHtml(row) +
                    '</thead>' :
                '') +
            '</table>' +
            '</div>' +
            '</div>';
    };
    YearGrid.prototype.getIsNumbersVisible = function () {
        return this.getIsDayNumbersVisible() ||
            this.renderProps.cellWeekNumbersVisible ||
            this.renderProps.colWeekNumbersVisible;
    };
    YearGrid.prototype.getIsDayNumbersVisible = function () {
        return this.rowCnt > 1;
    };
    YearGrid.prototype.renderNumberTrHtml = function (row) {
        var isRtl = this.context.isRtl;
        var intro = this.renderProps.renderNumberIntroHtml(row, this);
        return '' +
            '<tr>' +
            (isRtl ? '' : intro) +
            this.renderNumberCellsHtml(row) +
            (isRtl ? intro : '') +
            '</tr>';
    };
    YearGrid.prototype.renderNumberCellsHtml = function (row) {
        var htmls = [];
        var col;
        var date;
        for (col = 0; col < this.colCnt; col++) {
            date = this.props.cells[row][col].date;
            htmls.push(this.renderNumberCellHtml(date));
        }
        if (this.context.isRtl) {
            htmls.reverse();
        }
        return htmls.join('');
    };
    YearGrid.prototype.renderNumberCellHtml = function (date) {
        if (date === null) {
            return '<td></td>';
        }
        var _a = this.context, dateEnv = _a.dateEnv, options = _a.options;
        var html = '';
        var isDateValid = rangeContainsMarker(this.props.dateProfile.activeRange, date);
        var isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid;
        var classes;
        var weekCalcFirstDow;
        if (!isDayNumberVisible && !this.renderProps.cellWeekNumbersVisible) {
            return '<td></td>';
        }
        classes = getDayClasses(date, this.props.dateProfile, this.context);
        classes.unshift('fc-day-top');
        if (this.renderProps.cellWeekNumbersVisible) {
            weekCalcFirstDow = dateEnv.weekDow;
        }
        html += '<td class="' + classes.join(' ') + '"' +
            (isDateValid ?
                ' data-date="' + dateEnv.formatIso(date, { omitTime: true }) + '"' :
                '') +
            '>';
        if (this.renderProps.cellWeekNumbersVisible && (date.getUTCDay() === weekCalcFirstDow)) {
            html += buildGotoAnchorHtml(options, dateEnv, { date: date, type: 'week' }, { 'class': 'fc-week-number' }, dateEnv.format(date, WEEK_NUM_FORMAT)
            );
        }
        if (isDayNumberVisible) {
            html += buildGotoAnchorHtml(options, dateEnv, date, { 'class': 'fc-day-number' }, '<span class="fc-day-number-weekday">' + moment(date).format('dd') + '</span>' + dateEnv.format(date, DAY_NUM_FORMAT)
            );
        }
        html += '</td>';
        return html;
    };
    YearGrid.prototype.updateSize = function (isResize) {
        var calendar = this.context.calendar;
        var _a = this, fillRenderer = _a.fillRenderer, eventRenderer = _a.eventRenderer, mirrorRenderer = _a.mirrorRenderer;
        if (isResize ||
            this.isCellSizesDirty ||
            calendar.isEventsUpdated
        ) {
            this.buildPositionCaches();
            this.isCellSizesDirty = false;
        }
        fillRenderer.computeSizes(isResize);
        eventRenderer.computeSizes(isResize);
        mirrorRenderer.computeSizes(isResize);
        fillRenderer.assignSizes(isResize);
        eventRenderer.assignSizes(isResize);
        mirrorRenderer.assignSizes(isResize);
    };
    YearGrid.prototype.buildPositionCaches = function () {
        this.buildColPositions();
        this.buildRowPositions();
    };
    YearGrid.prototype.buildColPositions = function () {
        this.colPositions.build();
    };
    YearGrid.prototype.buildRowPositions = function () {
        this.rowPositions.build();
        this.rowPositions.bottoms[this.rowCnt - 1] += this.bottomCoordPadding;
    };
    YearGrid.prototype.positionToHit = function (leftPosition, topPosition) {
        var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
        var col = colPositions.leftToIndex(leftPosition);
        var row = rowPositions.topToIndex(topPosition);
        if (row != null && col != null) {
            return {
                row: row,
                col: col,
                dateSpan: {
                    range: this.getCellRange(row, col),
                    allDay: true
                },
                dayEl: this.getCellEl(row, col),
                relativeRect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row]
                }
            };
        }
    };
    YearGrid.prototype.getCellEl = function (row, col) {
        return this.cellEls[row * this.colCnt + col];
    };
    YearGrid.prototype._renderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.fillRenderer.renderSegs('highlight', this.context, state.segs);
        }
    };
    YearGrid.prototype._unrenderEventDrag = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.fillRenderer.unrender('highlight', this.context);
        }
    };
    YearGrid.prototype._renderEventResize = function (state) {
        if (state) {
            this.eventRenderer.hideByHash(state.affectedInstances);
            this.fillRenderer.renderSegs('highlight', this.context, state.segs);
            this.mirrorRenderer.renderSegs(this.context, state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    YearGrid.prototype._unrenderEventResize = function (state) {
        if (state) {
            this.eventRenderer.showByHash(state.affectedInstances);
            this.fillRenderer.unrender('highlight', this.context);
            this.mirrorRenderer.unrender(this.context, state.segs, { isResizing: true, sourceSeg: state.sourceSeg });
        }
    };
    YearGrid.prototype.removeSegPopover = function () {
        if (this.segPopover) {
            this.segPopover.hide();
        }
    };
    YearGrid.prototype.limitRows = function (levelLimit) {
        var rowStructs = this.eventRenderer.rowStructs || [];
        var row;
        var rowLevelLimit;
        for (row = 0; row < rowStructs.length; row++) {
            this.unlimitRow(row);
            if (!levelLimit) {
                rowLevelLimit = false;
            }
            else if (typeof levelLimit === 'number') {
                rowLevelLimit = levelLimit;
            }
            else {
                rowLevelLimit = this.computeRowLevelLimit(row);
            }
            if (rowLevelLimit !== false) {
                this.limitRow(row, rowLevelLimit);
            }
        }
    };
    YearGrid.prototype.computeRowLevelLimit = function (row) {
        var rowEl = this.rowEls[row];
        var rowBottom = rowEl.getBoundingClientRect().bottom;
        var trEls = findChildren(this.eventRenderer.rowStructs[row].tbodyEl);
        var i;
        var trEl;
        for (i = 0; i < trEls.length; i++) {
            trEl = trEls[i];
            trEl.classList.remove('fc-limited');
            if (trEl.getBoundingClientRect().bottom > rowBottom) {
                return i;
            }
        }
        return false;
    };
    YearGrid.prototype.limitRow = function (row, levelLimit) {
        var _this = this;
        var colCnt = this.colCnt;
        var isRtl = this.context.isRtl;
        var rowStruct = this.eventRenderer.rowStructs[row];
        var moreNodes = [];
        var col = 0;
        var levelSegs;
        var cellMatrix;
        var limitedNodes;
        var i;
        var seg;
        var segsBelow;
        var totalSegsBelow;
        var colSegsBelow;
        var td;
        var rowSpan;
        var segMoreNodes;
        var j;
        var moreTd;
        var moreWrap;
        var moreLink;
        var emptyCellsUntil = function (endCol) {
            while (col < endCol) {
                segsBelow = _this.getCellSegs(row, col, levelLimit);
                if (segsBelow.length) {
                    td = cellMatrix[levelLimit - 1][col];
                    moreLink = _this.renderMoreLink(row, col, segsBelow);
                    moreWrap = createElement('div', null, moreLink);
                    td.appendChild(moreWrap);
                    moreNodes.push(moreWrap);
                }
                col++;
            }
        };
        if (levelLimit && levelLimit < rowStruct.segLevels.length) {
            levelSegs = rowStruct.segLevels[levelLimit - 1];
            cellMatrix = rowStruct.cellMatrix;
            limitedNodes = findChildren(rowStruct.tbodyEl).slice(levelLimit);
            limitedNodes.forEach(function (node) {
                node.classList.add('fc-limited');
            });
            for (i = 0; i < levelSegs.length; i++) {
                seg = levelSegs[i];
                var leftCol = isRtl ? (colCnt - 1 - seg.lastCol) : seg.firstCol;
                var rightCol = isRtl ? (colCnt - 1 - seg.firstCol) : seg.lastCol;
                emptyCellsUntil(leftCol);
                colSegsBelow = [];
                totalSegsBelow = 0;
                while (col <= rightCol) {
                    segsBelow = this.getCellSegs(row, col, levelLimit);
                    colSegsBelow.push(segsBelow);
                    totalSegsBelow += segsBelow.length;
                    col++;
                }
                if (totalSegsBelow) {
                    td = cellMatrix[levelLimit - 1][leftCol];
                    rowSpan = td.rowSpan || 1;
                    segMoreNodes = [];
                    for (j = 0; j < colSegsBelow.length; j++) {
                        moreTd = createElement('td', { className: 'fc-more-cell', rowSpan: rowSpan });
                        segsBelow = colSegsBelow[j];
                        moreLink = this.renderMoreLink(row, leftCol + j, [seg].concat(segsBelow)
                        );
                        moreWrap = createElement('div', null, moreLink);
                        moreTd.appendChild(moreWrap);
                        segMoreNodes.push(moreTd);
                        moreNodes.push(moreTd);
                    }
                    td.classList.add('fc-limited');
                    insertAfterElement(td, segMoreNodes);
                    limitedNodes.push(td);
                }
            }
            emptyCellsUntil(this.colCnt);
            rowStruct.moreEls = moreNodes;
            rowStruct.limitedEls = limitedNodes;
        }
    };
    YearGrid.prototype.unlimitRow = function (row) {
        var rowStruct = this.eventRenderer.rowStructs[row];
        if (rowStruct.moreEls) {
            rowStruct.moreEls.forEach(removeElement);
            rowStruct.moreEls = null;
        }
        if (rowStruct.limitedEls) {
            rowStruct.limitedEls.forEach(function (limitedEl) {
                limitedEl.classList.remove('fc-limited');
            });
            rowStruct.limitedEls = null;
        }
    };
    YearGrid.prototype.renderMoreLink = function (row, col, hiddenSegs) {
        var _this = this;
        var _a = this.context, calendar = _a.calendar, view = _a.view, dateEnv = _a.dateEnv, options = _a.options, isRtl = _a.isRtl;
        var a = createElement('a', { className: 'fc-more' });
        a.innerText = this.getMoreLinkText(hiddenSegs.length);
        a.addEventListener('click', function (ev) {
            var clickOption = options.eventLimitClick;
            var _col = isRtl ? _this.colCnt - col - 1 : col;
            var date = _this.props.cells[row][_col].date;
            var moreEl = ev.currentTarget;
            var dayEl = _this.getCellEl(row, col);
            var allSegs = _this.getCellSegs(row, col);
            var reslicedAllSegs = _this.resliceDaySegs(allSegs, date);
            var reslicedHiddenSegs = _this.resliceDaySegs(hiddenSegs, date);
            if (typeof clickOption === 'function') {
                clickOption = calendar.publiclyTrigger('eventLimitClick', [
                    {
                        date: dateEnv.toDate(date),
                        allDay: true,
                        dayEl: dayEl,
                        moreEl: moreEl,
                        segs: reslicedAllSegs,
                        hiddenSegs: reslicedHiddenSegs,
                        jsEvent: ev,
                        view: view
                    }
                ]);
            }
            if (clickOption === 'popover') {
                _this.showSegPopover(row, col, moreEl, reslicedAllSegs);
            }
            else if (typeof clickOption === 'string') {
                calendar.zoomTo(date, clickOption);
            }
        });
        return a;
    };
    YearGrid.prototype.showSegPopover = function (row, col, moreLink, segs) {
        var _this = this;
        var _a = this.context, calendar = _a.calendar, view = _a.view, theme = _a.theme, isRtl = _a.isRtl;
        var _col = isRtl ? this.colCnt - col - 1 : col;
        var moreWrap = moreLink.parentNode;
        var topEl;
        var options;
        if (this.rowCnt === 1) {
            topEl = view.el;
        }
        else {
            topEl = this.rowEls[row];
        }
        options = {
            className: 'fc-more-popover ' + theme.getClass('popover'),
            parentEl: view.el,
            top: computeRect(topEl).top,
            autoHide: true,
            content: function (el) {
                _this.segPopoverTile = new YearTile(el);
                _this.updateSegPopoverTile(_this.props.cells[row][_col].date, segs);
            },
            hide: function () {
                _this.segPopoverTile.destroy();
                _this.segPopoverTile = null;
                _this.segPopover.destroy();
                _this.segPopover = null;
            }
        };
        if (isRtl) {
            options.right = computeRect(moreWrap).right + 1;
        }
        else {
            options.left = computeRect(moreWrap).left - 1;
        }
        this.segPopover = new Popover(options);
        this.segPopover.show();
        calendar.releaseAfterSizingTriggers();
    };
    YearGrid.prototype.resliceDaySegs = function (segs, dayDate) {
        var dayStart = dayDate;
        var dayEnd = addDays(dayStart, 1);
        var dayRange = { start: dayStart, end: dayEnd };
        var newSegs = [];
        for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
            var seg = segs_1[_i];
            var eventRange = seg.eventRange;
            var origRange = eventRange.range;
            var slicedRange = intersectRanges(origRange, dayRange);
            if (slicedRange) {
                newSegs.push(__assign({}, seg, { eventRange: {
                        def: eventRange.def,
                        ui: __assign({}, eventRange.ui, { durationEditable: false }),
                        instance: eventRange.instance,
                        range: slicedRange
                    }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() }));
            }
        }
        return newSegs;
    };
    YearGrid.prototype.getMoreLinkText = function (num) {
        var opt = this.context.options.eventLimitText;
        if (typeof opt === 'function') {
            return opt(num);
        }
        else {
            return '+' + num + ' ' + opt;
        }
    };
    YearGrid.prototype.getCellSegs = function (row, col, startLevel) {
        var segMatrix = this.eventRenderer.rowStructs[row].segMatrix;
        var level = startLevel || 0;
        var segs = [];
        var seg;
        while (level < segMatrix.length) {
            seg = segMatrix[level][col];
            if (seg) {
                segs.push(seg);
            }
            level++;
        }
        return segs;
    };
    return YearGrid;
}(DateComponent));

var WEEK_NUM_FORMAT$1 = createFormatter({ week: 'numeric' });
var AbstractYearView =  (function (_super) {
    __extends(AbstractYearView, _super);
    function AbstractYearView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processOptions = memoize(_this._processOptions);
        _this.renderSkeleton = memoizeRendering(_this._renderSkeleton, _this._unrenderSkeleton);
        _this.renderHeadIntroHtml = function () {
            var _a = _this.context, theme = _a.theme, options = _a.options;
            if (_this.colWeekNumbersVisible) {
                return '' +
                    '<th class="fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.weekNumberStyleAttr() + '>' +
                    '<span>' +
                    htmlEscape(options.weekLabel) +
                    '</span>' +
                    '</th>';
            }
            return '';
        };
        _this.renderDayGridNumberIntroHtml = function (row, dayGrid) {
            var _a = _this.context, options = _a.options, dateEnv = _a.dateEnv;
            var weekStart = dayGrid.props.cells[row][0].date;
            if (_this.colWeekNumbersVisible) {
                return '' +
                    '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '>' +
                    buildGotoAnchorHtml(
                    options, dateEnv, { date: weekStart, type: 'week', forceOff: dayGrid.colCnt === 1 }, dateEnv.format(weekStart, WEEK_NUM_FORMAT$1)
                    ) +
                    '</td>';
            }
            return '';
        };
        _this.renderDayGridBgIntroHtml = function () {
            var theme = _this.context.theme;
            if (_this.colWeekNumbersVisible) {
                return '<td class="fc-week-number ' + theme.getClass('widgetContent') + '" ' + _this.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        _this.renderDayGridIntroHtml = function () {
            if (_this.colWeekNumbersVisible) {
                return '<td class="fc-week-number" ' + _this.weekNumberStyleAttr() + '></td>';
            }
            return '';
        };
        return _this;
    }
    AbstractYearView.prototype._processOptions = function (options) {
        if (options.weekNumbers) {
            if (options.weekNumbersWithinDays) {
                this.cellWeekNumbersVisible = true;
                this.colWeekNumbersVisible = false;
            }
            else {
                this.cellWeekNumbersVisible = false;
                this.colWeekNumbersVisible = true;
            }
        }
        else {
            this.colWeekNumbersVisible = false;
            this.cellWeekNumbersVisible = false;
        }
    };
    AbstractYearView.prototype.render = function (props, context) {
        _super.prototype.render.call(this, props, context);
        this.processOptions(context.options);
        this.renderSkeleton(context);
    };
    AbstractYearView.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.renderSkeleton.unrender();
    };
    AbstractYearView.prototype._renderSkeleton = function (context) {
        this.el.classList.add('fc-dayGrid-view');
        this.el.innerHTML = this.renderSkeletonHtml();
        this.scroller = new ScrollComponent('hidden',
        'auto'
        );
        var dayGridContainerEl = this.scroller.el;
        this.el.querySelector('.fc-body > tr > td').appendChild(dayGridContainerEl);
        dayGridContainerEl.classList.add('fc-day-grid-container');
        dayGridContainerEl.classList.add('fc-year-container');
        var dayGridEl = createElement('div', { className: 'fc-day-grid' });
        dayGridContainerEl.appendChild(dayGridEl);
        this.dayGrid = new YearGrid(dayGridEl, {
            renderNumberIntroHtml: this.renderDayGridNumberIntroHtml,
            renderBgIntroHtml: this.renderDayGridBgIntroHtml,
            renderIntroHtml: this.renderDayGridIntroHtml,
            colWeekNumbersVisible: this.colWeekNumbersVisible,
            cellWeekNumbersVisible: this.cellWeekNumbersVisible
        });
    };
    AbstractYearView.prototype._unrenderSkeleton = function () {
        this.el.classList.remove('fc-dayGrid-view');
        this.dayGrid.destroy();
        this.scroller.destroy();
    };
    AbstractYearView.prototype.renderSkeletonHtml = function () {
        var _a = this.context, theme = _a.theme, options = _a.options;
        return '' +
            '<table class="' + theme.getClass('tableGrid') + '">' +
            (options.columnHeader ?
                '<thead class="fc-head">' +
                    '<tr>' +
                    '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                    '</tr>' +
                    '</thead>' :
                '') +
            '<tbody class="fc-body">' +
            '<tr>' +
            '<td class="' + theme.getClass('widgetContent') + '"></td>' +
            '</tr>' +
            '</tbody>' +
            '</table>';
    };
    AbstractYearView.prototype.weekNumberStyleAttr = function () {
        if (this.weekNumberWidth != null) {
            return 'style="width:' + this.weekNumberWidth + 'px"';
        }
        return '';
    };
    AbstractYearView.prototype.hasRigidRows = function () {
        var eventLimit = this.context.options.eventLimit;
        return eventLimit && typeof eventLimit !== 'number';
    };
    AbstractYearView.prototype.updateSize = function (isResize, viewHeight, isAuto) {
        _super.prototype.updateSize.call(this, isResize, viewHeight, isAuto);
        this.dayGrid.updateSize(isResize);
    };
    AbstractYearView.prototype.updateBaseSize = function (isResize, viewHeight, isAuto) {
        var dayGrid = this.dayGrid;
        var eventLimit = this.context.options.eventLimit;
        var headRowEl = this.header ? this.header.el : null;
        var scrollerHeight;
        var scrollbarWidths;
        if (!dayGrid.rowEls) {
            if (!isAuto) {
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            return;
        }
        if (this.colWeekNumbersVisible) {
            this.weekNumberWidth = matchCellWidths(findElements(this.el, '.fc-week-number'));
        }
        this.scroller.clear();
        if (headRowEl) {
            uncompensateScroll(headRowEl);
        }
        dayGrid.removeSegPopover();
        if (eventLimit && typeof eventLimit === 'number') {
            dayGrid.limitRows(eventLimit);
        }
        scrollerHeight = this.computeScrollerHeight(viewHeight);
        this.setGridHeight(scrollerHeight, isAuto);
        if (eventLimit && typeof eventLimit !== 'number') {
            dayGrid.limitRows(eventLimit);
        }
        if (!isAuto) {
            this.scroller.setHeight(scrollerHeight);
            scrollbarWidths = this.scroller.getScrollbarWidths();
            if (scrollbarWidths.left || scrollbarWidths.right) {
                if (headRowEl) {
                    compensateScroll(headRowEl, scrollbarWidths);
                }
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
            }
            this.scroller.lockOverflow(scrollbarWidths);
        }
    };
    AbstractYearView.prototype.computeScrollerHeight = function (viewHeight) {
        return viewHeight -
            subtractInnerElHeight(this.el, this.scroller.el);
    };
    AbstractYearView.prototype.setGridHeight = function (height, isAuto) {
        if (this.context.options.monthMode) {
            if (isAuto) {
                height *= this.dayGrid.rowCnt / 6;
            }
            distributeHeight(this.dayGrid.rowEls, height, !isAuto);
        }
        else {
            if (isAuto) {
                undistributeHeight(this.dayGrid.rowEls);
            }
            else {
                distributeHeight(this.dayGrid.rowEls, height, true);
            }
        }
    };
    AbstractYearView.prototype.computeDateScroll = function (duration) {
        return { top: 0 };
    };
    AbstractYearView.prototype.queryDateScroll = function () {
        return { top: this.scroller.getScrollTop() };
    };
    AbstractYearView.prototype.applyDateScroll = function (scroll) {
        if (scroll.top !== undefined) {
            this.scroller.setScrollTop(scroll.top);
        }
    };
    return AbstractYearView;
}(View));
AbstractYearView.prototype.dateProfileGeneratorClass = YearGridDateProfileGenerator;

var SimpleYearGrid =  (function (_super) {
    __extends(SimpleYearGrid, _super);
    function SimpleYearGrid(dayGrid) {
        var _this = _super.call(this, dayGrid.el) || this;
        _this.slicer = new DayGridSlicer();
        _this.dayGrid = dayGrid;
        return _this;
    }
    SimpleYearGrid.prototype.firstContext = function (context) {
        context.calendar.registerInteractiveComponent(this, { el: this.dayGrid.el });
    };
    SimpleYearGrid.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.context.calendar.unregisterInteractiveComponent(this);
    };
    SimpleYearGrid.prototype.render = function (props, context) {
        var dayGrid = this.dayGrid;
        var dateProfile = props.dateProfile, dayTable = props.dayTable;
        dayGrid.receiveProps(__assign({}, this.slicer.sliceProps(props, dateProfile, props.nextDayThreshold, context.calendar, dayGrid, dayTable), { dateProfile: dateProfile, cells: dayTable.cells, isRigid: props.isRigid }), context);
    };
    SimpleYearGrid.prototype.buildPositionCaches = function () {
        this.dayGrid.buildPositionCaches();
    };
    SimpleYearGrid.prototype.queryHit = function (positionLeft, positionTop) {
        var rawHit = this.dayGrid.positionToHit(positionLeft, positionTop);
        if (rawHit) {
            return {
                component: this.dayGrid,
                dateSpan: rawHit.dateSpan,
                dayEl: rawHit.dayEl,
                rect: {
                    left: rawHit.relativeRect.left,
                    right: rawHit.relativeRect.right,
                    top: rawHit.relativeRect.top,
                    bottom: rawHit.relativeRect.bottom
                },
                layer: 0
            };
        }
    };
    return SimpleYearGrid;
}(DateComponent));
var DayGridSlicer =  (function (_super) {
    __extends(DayGridSlicer, _super);
    function DayGridSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayGridSlicer.prototype.sliceRange = function (dateRange, dayTable) {
        return dayTable.sliceRange(dateRange);
    };
    return DayGridSlicer;
}(Slicer));

var YearGridView =  (function (_super) {
    __extends(YearGridView, _super);
    function YearGridView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayTable = memoize(buildDayTable);
        return _this;
    }
    YearGridView.prototype.render = function (props, context) {
        _super.prototype.render.call(this, props, context);
        var dateProfile = this.props.dateProfile;
        var dayTable = this.dayTable =
            this.buildDayTable(dateProfile, props.dateProfileGenerator);
        if (this.header) {
            this.header.receiveProps({
                dateProfile: dateProfile,
                dates: dayTable.headerDates,
                datesRepDistinctDays: dayTable.rowCnt === 1,
                renderIntroHtml: this.renderHeadIntroHtml
            }, context);
        }
        this.simpleDayGrid.receiveProps({
            dateProfile: dateProfile,
            dayTable: dayTable,
            businessHours: props.businessHours,
            dateSelection: props.dateSelection,
            eventStore: props.eventStore,
            eventUiBases: props.eventUiBases,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize,
            isRigid: this.hasRigidRows(),
            nextDayThreshold: this.context.nextDayThreshold
        }, context);
    };
    YearGridView.prototype._renderSkeleton = function (context) {
        _super.prototype._renderSkeleton.call(this, context);
        if (context.options.columnHeader) {
            this.header = new DayHeader(this.el.querySelector('.fc-head-container'));
        }
        this.simpleDayGrid = new SimpleYearGrid(this.dayGrid);
    };
    YearGridView.prototype._unrenderSkeleton = function () {
        _super.prototype._unrenderSkeleton.call(this);
        if (this.header) {
            this.header.destroy();
        }
        this.simpleDayGrid.destroy();
    };
    return YearGridView;
}(AbstractYearView));
function buildDayTable(dateProfile, dateProfileGenerator) {
    var daySeries = new DaySeries(dateProfile.renderRange, dateProfileGenerator);
    return new YearTable(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var main = createPlugin({
    defaultView: 'year',
    views: {
        yearGrid: YearGridView,
        year: {
            type: 'yearGrid',
            duration: { years: 1 }
        }
    }
});

export default main;
export { AbstractYearView as AbstractDayGridView, YearDayBgRow as DayBgRow, YearGrid as DayGrid, DayGridSlicer, YearGridView as DayGridView, SimpleYearGrid as SimpleDayGrid, buildDayTable as buildBasicDayTable };
//# sourceMappingURL=main.esm.js.map
