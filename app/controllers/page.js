import Ember from 'ember';

export default Ember.Controller.extend({
  currentPage: Ember.computed.alias('parentController.page'),

  active: (function() {
    return this.get('number') === this.get('currentPage');
  }).property('number', 'currentPage')
});
