import Controller from '@ember/controller';

export default Controller.extend({
  /*
  	Notes:
      - dst
      - internationalization
      - timezones
      - leap year
  */

  init() {
    this._super(...arguments);

    const today = new Date();
    const todayDayOfYear = this.getDayOfYear(today);
    const dayOfWeek = today.getDay();

    let startingDayOfYear = todayDayOfYear;
    if (dayOfWeek > 0) {
      startingDayOfYear = todayDayOfYear - dayOfWeek;
    }

    const days = [];
    for (let dayOfYear = startingDayOfYear; dayOfYear < startingDayOfYear + 35; dayOfYear++) {
      days.push({
        dayOfYear,
        date: this.dateFromDay(today.getYear(), dayOfYear),
        isToday: dayOfYear === todayDayOfYear
      });
    }

    this.set('days', days);
  },

  getDayOfYear(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
  },

  dateFromDay(year, day){
    var date = new Date(year, 0); // initialize a date in `year-01-01`
    return new Date(date.setDate(day)); // add the number of days
  }
});
