import { Seg, DaySeries, DateRange, DateMarker } from '@fullcalendar/core'
import moment from 'moment'

export interface DayTableSeg extends Seg {
    row: number
    firstCol: number
    lastCol: number
}

export interface DayTableCell {
    date: DateMarker
    htmlAttrs?: string
}

export default class DayTable {

    rowCnt: number
    colCnt: number
    cells: DayTableCell[][]
    headerDates: DateMarker[]

    private daySeries: DaySeries

    constructor(daySeries: DaySeries, breakOnWeeks: boolean) {
        this.daySeries = daySeries
        this.cells = this.buildCells()
        this.headerDates = this.buildHeaderDates()
        this.rowCnt = 12
    }

    private buildCells() {
        let rows = []
        let cells = []

        for (let i = 0; i < this.daySeries.dates.length; i++) {
            cells.push(
                { date: this.daySeries.dates[i] }
            )
            if (this.daySeries.dates.length === (i + 1) || this.daySeries.dates[i + 1].getDate() === 1) {
                for (let padding = this.daySeries.dates[i].getDate(); padding < 31; padding++) {
                    cells.push({
                        date: null
                    })
                }
                rows.push(cells)
                cells = []
            }
        }
        return rows
    }

    private buildHeaderDates() {
        return []
    }

    sliceRange(range: DateRange): DayTableSeg[] {
        let segs: DayTableSeg[] = []

        let firstMonthStart = moment(range.start).startOf('month')

        let currentMonthStart = moment(range.start).startOf('month')
        let currentMonthEnd = moment(range.start).endOf('month')

        let lastMonthStart = moment(range.end).startOf('month')
        if (lastMonthStart.year() > currentMonthStart.year()) {
            lastMonthStart = currentMonthStart.clone().month(11).startOf('month')
        }

        while (currentMonthStart.isSameOrBefore(lastMonthStart)) {
            segs.push({
                row: currentMonthStart.month(),
                firstCol: (currentMonthStart.isAfter(range.start)) ? 0 : range.start.getDate() - 1,
                lastCol: (currentMonthEnd.isBefore(range.end)) ? currentMonthEnd.date() - 1 : range.end.getDate() - 1,
                isStart: currentMonthStart.isSame(firstMonthStart),
                isEnd: currentMonthStart.isSame(lastMonthStart)
            })

            currentMonthStart.add(1, 'months')
            currentMonthEnd = currentMonthStart.clone().endOf('month')
        }

        return segs
    }

}
