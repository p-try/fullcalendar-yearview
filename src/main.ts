import './main.scss'

import {createPlugin} from '@fullcalendar/core'
import DayGridView from "./DayGridView";

export default createPlugin({
    defaultView: 'year',
    views: {

        yearGrid: DayGridView,

        year: {
            type: 'yearGrid',
            duration: {years: 1}
        }
    }
})
