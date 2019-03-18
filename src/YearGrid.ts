import {DayGrid,CoordCache} from "fullcalendar";
import YearTableMixin from "./YearTableMixin";

export default class YearGrid extends DayGrid {

  colCnt: number = 31
  rowCnt: number = 12
  daysPerRow: number = 31
  cellWeekNumbersVisible: boolean = false // display week numbers in day cell?
  breakOnWeeks: boolean = false


  // Renders the rows and columns into the component's `this.el`, which should already be assigned.
  renderGrid() {
    let view = this.view
    let rowCnt = this.rowCnt
    let colCnt = this.colCnt
    let html = ''
    let row
    let col

    if (this.headContainerEl) {
      this.headContainerEl.html(this.renderHeadHtml())
    }

    for (row = 0; row < rowCnt; row++) {
      html += this.renderDayRowHtml(row, this.isRigid)
    }
    this.el.html(html)

    this.rowEls = this.el.find('.fc-row')
    this.cellEls = this.el.find('.fc-day, .fc-disabled-day')

    this.rowCoordCache = new CoordCache({
      els: this.rowEls,
      isVertical: true
    })
    this.colCoordCache = new CoordCache({
      els: this.cellEls.slice(0, this.colCnt), // only the first row
      isHorizontal: true
    })

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
          })
        }
      }
    }
  }

  // Generates the HTML for the <td>s of the "number" row in the DayGrid's content skeleton.
  // The number row will only exist if either day numbers or week numbers are turned on.
  renderNumberCellHtml(date) {
    if (date == null) return ''
    let view = this.view
    let html = ''
    let isDateValid = this.dateProfile.activeUnzonedRange.containsDate(date) // TODO: called too frequently. cache somehow.
    let isDayNumberVisible = this.getIsDayNumbersVisible() && isDateValid
    let classes
    let weekCalcFirstDoW

    if (!isDayNumberVisible && !this.cellWeekNumbersVisible) {
      // no numbers in day cell (week number must be along the side)
      return '<td/>' //  will create an empty space above events :(
    }

    classes = this.getDayClasses(date)
    classes.unshift('fc-day-top')

    if (this.cellWeekNumbersVisible) {
      // To determine the day of week number change under ISO, we cannot
      // rely on moment.js methods such as firstDayOfWeek() or weekday(),
      // because they rely on the locale's dow (possibly overridden by
      // our firstDay option), which may not be Monday. We cannot change
      // dow, because that would affect the calendar start day as well.
      if (date._locale._fullCalendar_weekCalc === 'ISO') {
        weekCalcFirstDoW = 1  // Monday by ISO 8601 definition
      } else {
        weekCalcFirstDoW = date._locale.firstDayOfWeek()
      }
    }

    html += '<td class="' + classes.join(' ') + '"' +
      (isDateValid ?
          ' data-date="' + date.format() + '"' :
          ''
      ) +
      '>'

    if (this.cellWeekNumbersVisible && (date.day() === weekCalcFirstDoW)) {
      html += view.buildGotoAnchorHtml(
        { date: date, type: 'week' },
        { 'class': 'fc-week-number' },
        date.format('w') // inner HTML
      )
    }

    if (isDayNumberVisible) {
      html += view.buildGotoAnchorHtml(
        date,
        { 'class': 'fc-day-number' },
        date.format('D') // inner HTML
      )
    }

    html += '</td>'

    return html
  }


  // Slices up the given span (unzoned start/end with other misc data) into an array of segments
  componentFootprintToSegs(componentFootprint) {
    let segs = this.sliceRangeByRow(componentFootprint.unzonedRange)
    let i
    let seg

    for (i = 0; i < segs.length; i++) {
      seg = segs[i]

      if (this.isRTL) {
        seg.leftCol = this.daysPerRow - 1 - seg.lastRowDayIndex
        seg.rightCol = this.daysPerRow - 1 - seg.firstRowDayIndex
      } else {
        seg.leftCol = seg.firstRowDayIndex
        seg.rightCol = seg.lastRowDayIndex
      }
    }

    return segs
  }


}

YearTableMixin.mixOver(YearGrid)
