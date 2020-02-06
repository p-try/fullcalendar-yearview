if (jQuery.fullCalendar !== undefined) {
    var YearView = require('./YearView').default;

    jQuery.fullCalendar.defineView('year', {
        'class': YearView,
        duration: { years: 1 }
    });
}
