import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',

  classNameBindings: [ 'isToday', 'isOtherMonth' ],

  isToday: Ember.computed.reads('day.isToday'),

  isCurrentMonth: Ember.computed.reads('day.isCurrentMonth'),

  isOtherMonth: Ember.computed.not('isCurrentMonth')

});
