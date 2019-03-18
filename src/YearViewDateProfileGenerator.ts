import {BasicViewDateProfileGenerator, UnzonedRange} from "fullcalendar";

export default class YearViewDateProfileGenerator extends BasicViewDateProfileGenerator {

  // Computes the date range that will be rendered.
  buildRenderRange(currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
    let start = this.msToUtcMoment(currentUnzonedRange.startMs, isRangeAllDay)
    let end = this.msToUtcMoment(currentUnzonedRange.endMs, isRangeAllDay)
    return new UnzonedRange(start, end)
  }

}
