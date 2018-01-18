import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',

  classNameBindings: [ 'isToday', 'isOtherMonth', 'hasEvent' ],

  isToday: Ember.computed.reads('day.isToday'),

  isCurrentMonth: Ember.computed.reads('day.isCurrentMonth'),

  isOtherMonth: Ember.computed.not('isCurrentMonth'),

  // isSelected: Ember.computed.reads('day.isSelected'),

  hasEvent: Ember.computed('events', 'day', function () {
    let result = false;
    const events = this.get('events');
    const dayMoment = this.get('day.moment');
    if (events) {
      result = events.some(selectedDate => {
        return dayMoment.isSame(selectedDate, 'day');
      });
    }
    return result;
  }),

  click() {
    Ember.tryInvoke(this.attrs, 'onSelect');
  }

});
