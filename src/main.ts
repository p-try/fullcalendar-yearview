import { createPlugin } from '@fullcalendar/core'
import YearGridView from './YearGridView'

export { default as SimpleDayGrid, DayGridSlicer } from './SimpleYearGrid'
export { default as DayGrid, DayGridSeg } from './YearGrid'
export { default as AbstractDayGridView } from './AbstractYearView'
export { default as DayGridView, buildDayTable as buildBasicDayTable } from './YearGridView'
export { default as DayBgRow } from './YearDayBgRow'

export default createPlugin({
  defaultView: 'year',
  views: {

    yearGrid: YearGridView,

    year: {
      type: 'yearGrid',
      duration: { years: 1 }
    }
  }
})
