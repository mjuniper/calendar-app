import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',

  classNameBindings: [ 'isToday', 'isLastMonth', 'isNextMonth' ],

  dayOfMonth: Ember.computed('model.date', function () {
    return this.get('model.date').getDate();
  }),

  isToday: Ember.computed.reads('model.isToday'),

  isLastMonth: Ember.computed('model.date', function () {
    return this.get('model.date').getMonth() < new Date().getMonth();
  }),

  isNextMonth: Ember.computed('model.date', function () {
    return this.get('model.date').getMonth() > new Date().getMonth();
  })

});
