/* A month view with day cells running in rows (one-per-week) and columns
----------------------------------------------------------------------------------------------------------------------*/

import {BasicView} from "fullcalendar";
import YearGrid from "./YearGrid";
import {YearViewDateProfileGenerator} from "./YearViewDateProfileGenerator";

export default class YearView extends BasicView {

  constructor(calendar, viewSpec) {
    super(calendar, viewSpec)
  }

  instantiateDayGrid() {
    // generate a subclass on the fly with BasicView-specific behavior
    // TODO: cache this subclass
    let subclass: any = this.makeDayGridSubclass(this.dayGridClass)

    return new subclass(this)
  }


  // customize the rendering behavior of BasicView's dayGrid
  makeDayGridSubclass(SuperClass) {

    return class SubClass extends SuperClass {

      colWeekNumbersVisible: boolean = true // display week numbers along the side?


      // Generates the HTML that will go before the day-of week header cells
      renderHeadIntroHtml() {
        let view = this.view

        if (this.colWeekNumbersVisible) {
          return '' +
            '<th class="fc-week-number ' + view.calendar.theme.getClass('widgetHeader') + '" ' + view.weekNumberStyleAttr() + '>' +
            '<span>' +
            '</span>' +
            '</th>'
        }

        return ''
      }


      // Generates the HTML that will go before content-skeleton cells that display the day/week numbers
      renderNumberIntroHtml(row) {
        let view = this.view
        let monthStart = this.getCellDate(row, 0)

        if (this.colWeekNumbersVisible) {
          return '' +
            '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '>' +
            view.buildGotoAnchorHtml( // aside from link, important for matchCellWidths
              { date: monthStart, type: 'week', forceOff: this.colCnt === 1 },
              monthStart.format('MMM') // inner HTML
            ) +
            '</td>'
        }

        return ''
      }


      // Generates the HTML that goes before the day bg cells for each day-row
      renderBgIntroHtml() {
        let view = this.view

        if (this.colWeekNumbersVisible) {
          return '<td class="fc-week-number ' + view.calendar.theme.getClass('widgetContent') + '" ' +
            view.weekNumberStyleAttr() + '></td>'
        }

        return ''
      }


      // Generates the HTML that goes before every other type of row generated by DayGrid.
      // Affects helper-skeleton and highlight-skeleton rows.
      renderIntroHtml() {
        let view = this.view

        if (this.colWeekNumbersVisible) {
          return '<td class="fc-week-number" ' + view.weekNumberStyleAttr() + '></td>'
        }

        return ''
      }


      getIsNumbersVisible() {
        return YearGrid.prototype.getIsNumbersVisible.apply(this, arguments) || this.colWeekNumbersVisible
      }

    }
  }

}

YearView.prototype.dayGridClass = YearGrid
YearView.prototype.dateProfileGeneratorClass = YearViewDateProfileGenerator
