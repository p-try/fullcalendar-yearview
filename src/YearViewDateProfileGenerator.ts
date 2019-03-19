import {UnzonedRange} from "fullcalendar";
import DateProfileGenerator from "./DateProfileGenerator";

class YearViewDateProfileGenerator extends DateProfileGenerator {

  // Computes the date range that will be rendered.
  buildRenderRange(currentUnzonedRange, currentRangeUnit, isRangeAllDay) {
    let start = this.msToUtcMoment(currentUnzonedRange.startMs, isRangeAllDay)
    let end = this.msToUtcMoment(currentUnzonedRange.endMs, isRangeAllDay)
    return new UnzonedRange(start, end)
  }

}

export {
    YearViewDateProfileGenerator
}
