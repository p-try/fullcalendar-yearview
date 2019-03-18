import YearView from "./YearView";

$.fullCalendar.defineView('year', {
    'class': YearView,
    duration: { years: 1 }
});