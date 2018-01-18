import Controller from '@ember/controller';

export default Controller.extend({

  /*
    TODO:
      - finish implementing the CSS grid rendering
        - it does not fill the height of the container - should it?
        - incorporate more of the addon css (selected day, etc...)
      - set the locale???
  */

  init() {
    this._super(...arguments);
    this.set('centerDate', new Date(2017, 1, 7));
    this.set('eventDates', [ new Date(2017, 1, 7), new Date(2017, 1, 9) ]);
  },

  actions: {
    onCenterChange ({date}) {
      // do other stuff here (like fetch more events?)...
      this.set('centerDate', date);
    },
    onSelect ({moment}) {
      alert(`onSelect: ${moment[1].format()}`);
    }
  }

});
