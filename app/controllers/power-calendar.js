import Controller from '@ember/controller';

export default Controller.extend({

  /*
    TODO:
      - finish implementing the CSS grid rendering
        - it does not fill the height of the container - should it?
        - we would probably want to have the component inherit from the addon component
        - incorporate more of the addon css (selected day, etc...)
        - wire up actions
      - set the locale???
  */

  init() {
    this._super(...arguments);
    this.set('eventDates', [ new Date(2017, 1, 7), new Date(2017, 1, 9) ]);
  }

});
