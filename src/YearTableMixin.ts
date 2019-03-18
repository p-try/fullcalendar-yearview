import {DayTableMixin} from 'fullcalendar'
import { Moment } from 'moment'

export default class YearTableMixin extends DayTableMixin {

  startDate: Moment

  // Populates internal variables used for date calculation and rendering
  updateDayTable() {
    let t = (this as any)
    let view = t.view
    let calendar = view.calendar
    this.startDate = calendar.msToUtcMoment(t.dateProfile.renderUnzonedRange.startMs, true)
  }

  renderBgCellHtml(date, otherAttrs) {
    let t = (this as any)
    let view = t.view
    let isDateValid = date != null
    let classes = isDateValid ? t.getDayClasses(date) : []

    classes.unshift('fc-day', view.calendar.theme.getClass('widgetContent'))

    return '<td class="' + classes.join(' ') + '"' +
      (isDateValid ?
        ' data-date="' + date.format('YYYY-MM-DD') + '"' : // if date has a time, won't format it
        '') +
      (otherAttrs ?
        ' ' + otherAttrs :
        '') +
      '></td>'
  }

  // Determines how many columns there should be in the table
  computeColCnt() {
    return 31
  }

  // Computes the ambiguously-timed moment for the given cell
  getCellDate(row, col) {
    let date = this.startDate.clone().month(row)
    if (date.daysInMonth() > col) {
      return date.date(col + 1)
    }
    return null
  }

  // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
  getDateDayIndex(date) {
    return date.month() * 31 + date.date() - 1
  }

  renderHeadTrHtml() {
    return '<tr></tr>'
  }


  // Slices up a date range into a segment for every week-row it intersects with
  // Contrary to DayTableMixin::sliceRangeByRow this version must be aware of the fact that not every month has the same number of days
  sliceRangeByRow(unzonedRange) {
    let daysPerRow = this.daysPerRow
    let normalRange = (this as any).view.computeDayRange(unzonedRange) // make whole-day range, considering nextDayThreshold
    let rangeFirst = this.getDateDayIndex(normalRange.start) // inclusive first index
    let rangeLast = this.getDateDayIndex(normalRange.end.clone().subtract(1, 'days')) // inclusive last index
    let segs = []
    let row
    let rowFirst
    let rowLast // inclusive day-index range for current row
    let segFirst
    let segLast // inclusive day-index range for segment

    for (row = 0; row < this.rowCnt; row++) {
      rowFirst = row * daysPerRow
      rowLast = rowFirst + normalRange.start.month(row).daysInMonth() - 1

      // intersect segment's offset range with the row's
      segFirst = Math.max(rangeFirst, rowFirst)
      segLast = Math.min(rangeLast, rowLast)

      // deal with in-between indices
      segFirst = Math.ceil(segFirst) // in-between starts round to next cell
      segLast = Math.floor(segLast) // in-between ends round to prev cell

      if (segFirst <= segLast) { // was there any intersection with the current row?
        segs.push({
          row: row,

          // normalize to start of row
          firstRowDayIndex: segFirst - rowFirst,
          lastRowDayIndex: segLast - rowFirst,

          // must be matching integers to be the segment's start/end
          isStart: segFirst === rangeFirst,
          isEnd: segLast === rangeLast
        })
      }
    }

    return segs
  }


}
