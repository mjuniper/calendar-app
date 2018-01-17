import BaseComponent from 'ember-power-calendar/components/power-calendar/days'

export default BaseComponent.extend({

  init() {
    this._super(...arguments);
    this.actions.dayIsSelected = this.dayIsSelected;
  },

  dayIsSelected(dayMoment, calendar = this.get('calendar')) {
    let result = false;
    if (calendar.selected) {
      result = calendar.selected.some(selectedDate => {
        return dayMoment.isSame(selectedDate, 'day');
      });
    }
    return result;
  }

});
