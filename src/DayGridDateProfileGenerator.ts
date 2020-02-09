import {
  DateProfileGenerator,
  DateRange
} from '@fullcalendar/core'

export default class DayGridDateProfileGenerator extends DateProfileGenerator {

  // Computes the date range that will be rendered.
  buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay): DateRange {
    let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay)
    let start = renderRange.start
    let end = renderRange.end

    return { start, end }
  }

}
