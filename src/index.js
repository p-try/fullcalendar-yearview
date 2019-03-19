if ($.fullCalendar !== undefined) {
    var YearView = require('./YearView').default;

    $.fullCalendar.defineView('year', {
        'class': YearView,
        duration: { years: 1 }
    });
}
